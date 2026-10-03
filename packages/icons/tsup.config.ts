import { defineConfig } from 'tsup';
import fs from 'fs';
import path from 'path';

/*
 * There is no build-time gate any more. Bulk used to be stripped from 1,682
 * icons so the free bundle did not carry artwork it was not entitled to; every
 * style of every icon is free now, so every branch ships and there is only one
 * build. scripts/artwork-check.mjs verifies that.
 */

/*
 * `@devigner-ui/icons/Accessibility` is one output file per icon, built from
 * the stubs scripts/sync.mjs generates. The root entry is replaced after tsup
 * with re-exports of those files, so the package no longer publishes a second
 * copy of every drawing inside a giant barrel bundle.
 */
const ENTRIES = 'src/entries';
const iconEntries = fs.existsSync(ENTRIES)
  ? Object.fromEntries(
      fs
        .readdirSync(ENTRIES)
        .filter((f) => f.endsWith('.ts'))
        .map((f) => [`icons/${f.slice(0, -3)}`, `${ENTRIES}/${f}`]),
    )
  : {};

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    ...iconEntries,
  },
  format: ['esm', 'cjs'],
  /* Only the root goes through the declaration bundler. Rolling up 2,147
     more entries takes minutes and would emit the same three lines each time,
     so onSuccess writes those by hand below. */
  dts: { entry: 'src/index.ts' },
  splitting: false,
  clean: true,
  /* The rollup pass can drop the "use client" banner, so onSuccess writes it
     back after all build passes have finished. */
  treeshake: true,
  /* Minification is configured granularly in esbuildOptions below; tsup's own
     `minify: true` wins over the granular flags, so it stays off here. */
  minify: false,
  external: ['react', 'react-dom'],
  onSuccess: async () => {
    /*
     * The treeshake pass can drop a configured "use client" banner. Every icon
     * forwards refs, so prepend the directive after both build passes.
     */
    for (const dir of ['dist', 'dist/icons']) {
      for (const file of fs.readdirSync(path.resolve(dir))) {
        if (!/\.(js|cjs)$/.test(file)) continue;
        const out = path.resolve(dir, file);
        const code = fs.readFileSync(out, 'utf8');
        if (/^["']use client["']/.test(code)) continue;
        fs.writeFileSync(out, `"use client";\n${code}`);
      }
    }

    /* A bundled root is several megabytes and even a named import can retain
       all its forwardRef calls. ESM consumers get a re-export graph that a
       bundler can prune at the module boundary. CommonJS consumers get lazy
       getters, so requiring one named icon does not evaluate every drawing. */
    const names = Object.keys(iconEntries).map((key) => key.slice('icons/'.length));
    fs.writeFileSync(
      path.resolve('dist/index.js'),
      '"use client";\n' +
        names.map((name) => `export { Icon${name} } from './icons/${name}.js';`).join('\n') +
        '\n',
    );
    fs.writeFileSync(
      path.resolve('dist/index.cjs'),
      '"use client";\nObject.defineProperty(exports, "__esModule", { value: true });\n' +
        names.map((name) =>
          `Object.defineProperty(exports, ${JSON.stringify(`Icon${name}`)}, ` +
          `{ enumerable: true, get: () => require(${JSON.stringify(`./icons/${name}.cjs`)}).Icon${name} });`,
        ).join('\n') +
        '\n',
    );

    /* The subpath declaration must not load the 340 KB all-icons declaration
       just to discover the SVG prop type. Keep it beside the icon entries. */
    fs.writeFileSync(
      path.resolve('dist/icons/types.d.ts'),
      fs.readFileSync(path.resolve('icons/types.ts'), 'utf8') +
        '\nimport type { ForwardRefExoticComponent, RefAttributes } from "react";\n' +
        'export type IconComponentType = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;\n',
    );

    /* Three lines per icon, all of them predictable. Their shared prop type
       resolves to the small declaration above instead of the all-icons root. */
    for (const key of Object.keys(iconEntries)) {
      const name = key.slice('icons/'.length);
      fs.writeFileSync(
        path.resolve('dist', `${key}.d.ts`),
        `import type { IconComponentType } from './types.js';\n` +
          `declare const Icon${name}: IconComponentType;\n` +
          `export { Icon${name}, Icon${name} as default };\n`,
      );
    }

    for (const file of ['metadata.json', 'embeddings.json', 'styles.css']) {
      const src = path.resolve('src', file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.resolve('dist', file));
        console.log(`Copied ${file} to dist/`);
      }
    }
  },
  esbuildOptions(esbuild) {
    esbuild.alias = {
      ...esbuild.alias,
      '@': './src',
    };
    /* Generated JSX is mostly indentation by weight. Keep component names in
       stack traces and for scripts/artwork-check.mjs. */
    esbuild.minifyWhitespace = true;
    esbuild.minifySyntax = true;
  },
  tsconfig: 'tsconfig.json',
});
