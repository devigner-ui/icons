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
 * the stubs scripts/sync.mjs generates. Every drawing is self-contained (it
 * imports react and a type, nothing else), so no icon pulls in another and
 * splitting has nothing to share; the cost is a second copy of the artwork
 * beside the barrel bundle, which is what buys a subpath that costs the caller
 * no barrel at all.
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
  /* Only the barrel goes through the declaration bundler. Rolling up 2,142
     more entries takes minutes and would emit the same three lines each time,
     so onSuccess writes those by hand below. */
  dts: { entry: 'src/index.ts' },
  splitting: false,
  clean: true,
  /* Kept for what it does to the barrel: the rollup pass merges the 2,142
     `import { forwardRef } from "react"` statements esbuild emits, one per
     bundled module, into one. It is also what silently ate the "use client"
     banner, which onSuccess writes back below. */
  treeshake: true,
  /* Minification is configured granularly in esbuildOptions below; tsup's own
     `minify: true` wins over the granular flags, so it stays off here. */
  minify: false,
  external: ['react', 'react-dom'],
  onSuccess: async () => {
    /*
     * "use client", which is `banner` above in every other tsup project. The
     * banner is handed to esbuild, and `treeshake` then runs that output back
     * through rollup, which drops the directive as one it does not know; every
     * file shipped without it, and nothing failed, because a directive is not
     * part of a module's exports. Every icon is a forwardRef component, so the
     * consequence was a Next.js App Router server component throwing on the
     * import. Prepending it here is after both, and is idempotent.
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

    /* Three lines per icon, all of them predictable, so they are written
       rather than derived: IconComponentType comes from the barrel's declarations,
       which keeps one definition of the prop shape in the package. */
    for (const key of Object.keys(iconEntries)) {
      const name = key.slice('icons/'.length);
      fs.writeFileSync(
        path.resolve('dist', `${key}.d.ts`),
        `import type { IconComponentType } from '../index.js';\n` +
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
    /* 2,142 symbols of generated JSX is mostly indentation by weight, so
       whitespace and syntax are the whole minification win: ~7MB off what npm
       unpacks. Identifiers stay: renaming 2,142 `var IconFoo =` declarations
       saves ~20KB, costs the component names in stack traces, and blinds
       scripts/artwork-check.mjs, which counts those declarations to prove the
       build kept every drawing. */
    esbuild.minifyWhitespace = true;
    esbuild.minifySyntax = true;
  },
  tsconfig: 'tsconfig.json',
});
