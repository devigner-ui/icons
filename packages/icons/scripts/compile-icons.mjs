/*
 * Turns the built icon components into data, and writes the per-style entries.
 *
 * tsup builds every icons/<Name>.tsx into dist/icons/<Name>.js exactly as it is
 * written: one component holding four whole <svg> drawings, rebuilt element by
 * element on every render. That is the shape to edit, not the shape to ship.
 * This runs after tsup, from its onSuccess, and for each icon:
 *
 *   1. calls the built component once per style and reads the elements it
 *      returns, so React does the attribute casing and picks the branch, the
 *      same reason emit-svg.mjs renders instead of parsing;
 *   2. writes that data to dist/data/<Name>.js, one export per drawing, and
 *      rewrites dist/icons/<Name>.js as a few lines handing all of it to the
 *      shared renderer in icons/runtime.ts, which builds the elements once and
 *      reuses them;
 *   3. writes dist/<style>/<Name>.js for each of the five styles, the same few
 *      lines importing one drawing instead of all of them;
 *   4. renders the original and the rewrite in every style and refuses the
 *      rewrite unless the markup is the same;
 *   5. writes dist/node/, the roots as single files for plain Node.
 *
 * An icon that cannot be expressed as data keeps the component tsup built, and
 * its style entries pin that component's `variant` instead. Today that is the
 * few that do arithmetic on the stroke width, or call useId() twice. Step 4 is
 * what decides, not a list: anything that does not come back identical is left
 * alone.
 *
 * The one deliberate difference is `opacity="1"`. The sources write
 * opacity={duotone ? "0.4" : "1"}, which put a no-op attribute on every
 * secondary shape of every Outline drawing; the data form leaves it out.
 */
import assert from "node:assert/strict";
import { readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Children, createElement as h, isValidElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { activeRenames } from "./renames.mjs";

const ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const DIST = path.join(ROOT, "dist");
const ICONS = path.join(ROOT, "icons");

/** Folder name and the `variant` it draws, in the order the docs list them. */
export const STYLE_ENTRIES = [
  ["outline", "Outline"],
  ["twotone", "TwoTone"],
  ["bold", "Bold"],
  ["bulk", "Bulk"],
  ["broken", "Broken"],
];

/* A stroke width no drawing uses, so a value that comes from the prop can be
   told apart from one written into the artwork. */
const FROM_PROP = "9.87";

/* What every drawing's <svg> carries. The renderer writes these itself, so an
   icon whose root differs is not one it can stand in for. */
const ROOT_ATTRS = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  focusable: "false",
  "aria-hidden": true,
};

/* The same rule artwork-check.mjs applies to the sources, applied to what tsup
   made of them: this is the last moment the built branches can be counted. */
function expectedBranches(source) {
  const core = source.includes("strokeWidth={fill ? ") ? 1 : 3;
  return source.includes('variant === "Broken"') ? core + 1 : core;
}

/* What useId() returns, in React 18 and 19. The same test emit-svg.mjs uses to
   give each file ids of its own. */
const GENERATED_ID = /^(?::[^"]*:|«[^"]*»)$/;
/* Stands for that id in the data. Nothing in a path or a url(#…) uses it. */
const ID = "~";

/** One element as [tag, attributes, children?]. Throws on anything else. */
function shape(element, ids) {
  assert.ok(isValidElement(element) && typeof element.type === "string", "not a plain element");
  const { children, ...attrs } = element.props;
  if (GENERATED_ID.test(attrs.id)) ids.add(attrs.id);
  for (const [key, value] of Object.entries(attrs)) {
    /* What a false `duotone ? … : undefined` leaves behind. React writes nothing. */
    if (value === undefined) delete attrs[key];
    else assert.ok(typeof value === "string" || typeof value === "number", `${key} is not a literal`);
    assert.ok(!String(value).includes(ID), `${key} already contains ${ID}`);
  }
  if (attrs.strokeWidth === FROM_PROP) attrs.strokeWidth = 0;
  if (attrs.opacity === "1") delete attrs.opacity;
  const inner = Children.toArray(children).map((child) => shape(child, ids));
  return inner.length ? [element.type, attrs, inner] : [element.type, attrs];
}

/* Every string in a drawing, with the generated id swapped for its stand-in. */
function withoutId(shapes, id) {
  return shapes.map(([tag, attrs, inner]) => {
    const out = {};
    for (const [key, value] of Object.entries(attrs)) {
      out[key] = typeof value === "string" ? value.split(id).join(ID) : value;
    }
    return inner ? [tag, out, withoutId(inner, id)] : [tag, out];
  });
}

/** The shapes one style of a built component draws. */
function drawing(Icon, variant) {
  /* Inside a real render, so an icon that calls useId() gets an id back. */
  let svg;
  renderToStaticMarkup(
    h(function Probe() {
      svg = Icon.render({ variant, strokeWidth: FROM_PROP }, null);
      return null;
    }),
  );
  if (svg.type !== "svg") svg = svg.props.children; // the fragment the sources wrap it in
  assert.equal(svg.type, "svg");
  const { children, ref, className, ...root } = svg.props;
  assert.deepEqual(root, ROOT_ATTRS, "the <svg> is not the standard one");
  const ids = new Set();
  const shapes = Children.toArray(children).map((child) => shape(child, ids));
  assert.ok(ids.size < 2, "more than one generated id");
  return ids.size ? withoutId(shapes, [...ids][0]) : shapes;
}

const usesId = (shapes) => JSON.stringify(shapes).includes(ID);

/*
 * Outline and TwoTone are one drawing: TwoTone sets some top-level shapes to
 * 0.4. Their indexes are kept as a list beside the outline rather than inside
 * it, so /outline does not carry them. Anything the runtime would not draw the
 * same (a dimmed shape inside a group, another opacity, the opacity anywhere
 * but first) throws, and the icon keeps a TwoTone drawing of its own.
 */
function dimsOf(outline, twotone) {
  assert.equal(outline.length, twotone.length, "TwoTone is a different drawing");
  const dims = [];
  outline.forEach((shape, i) => {
    const [tag, attrs, ...rest] = twotone[i];
    if (attrs.opacity === "0.4" && shape[1].opacity === undefined && Object.keys(attrs)[0] === "opacity") {
      const { opacity, ...same } = attrs;
      assert.deepEqual([tag, same, ...rest], shape, "TwoTone is a different drawing");
      dims.push(i);
    } else {
      assert.deepEqual(twotone[i], shape, "TwoTone is a different drawing");
    }
  });
  return dims;
}

const key = (name) => (/^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name));
function literal([tag, attrs, inner]) {
  const props = Object.entries(attrs).map(([k, v]) => `${key(k)}:${JSON.stringify(v)}`);
  return `[${JSON.stringify(tag)},{${props}}${inner ? `,${literals(inner)}` : ""}]`;
}
const literals = (shapes) => `[${shapes.map(literal)}]`;

/* Default props, then every prop that changes the markup at once. */
const PROPS = [
  {},
  { strokeWidth: 2, className: "a b", "aria-label": 'q"&<', id: "i", style: { color: "red" }, width: 32 },
];
const markup = (Icon, props) => renderToStaticMarkup(h(Icon, props));

function assertSame(original, compiled, variants, pinned) {
  for (const variant of variants) {
    for (const props of PROPS) {
      assert.equal(
        markup(compiled, pinned ? props : { variant, ...props }),
        markup(original, { variant, ...props }).replaceAll(' opacity="1"', ""),
      );
    }
  }
}

/* The CommonJS twin takes `imports` and `value`; `esm` overrides them for the
   .js file when the two differ. */
function writeModule(dir, name, imports, value, esm = { imports, value }) {
  const esmImports = Object.entries(esm.imports)
    .map(([file, names]) => `import { ${names.join(", ")} } from '${file}.js';`)
    .join("\n");
  const cjs = Object.entries(imports)
    .map(([file, names]) => `const { ${names.join(", ")} } = require('${file}.cjs');`)
    .join("\n");
  writeFileSync(
    path.join(DIST, dir, `${name}.js`),
    `"use client";\n${esmImports}\nvar d = /* #__PURE__ */ ${esm.value};\nexport { d as Icon${name}, d as default };\n`,
  );
  writeFileSync(
    path.join(DIST, dir, `${name}.cjs`),
    `"use client";\n'use strict';\nObject.defineProperty(exports, '__esModule', { value: true });\n` +
      `${cjs}\nvar d = /* #__PURE__ */ ${value};\nexports.Icon${name} = d;\nexports.default = d;\n`,
  );
}

/*
 * Where the drawings are written depends on who reads them.
 *
 * ESM is what bundlers read, so each ESM module carries its drawings inline:
 * `one([...])`, not `import { o } ...; one(o)`. Terser and SWC fold the second
 * back into the first; esbuild, Vite's default minifier, keeps the variable,
 * and that measured 4-5% of a bundle's icon bytes. The cost is that a drawing
 * is written twice, in dist/icons/ and in its style's folder.
 *
 * CommonJS is what Node reads, where bytes on the wire do not exist, so the
 * .cjs files share dist/data/<Name>.cjs: an icon's drawings, one export each,
 * written once. No "use client": it is plain data, only ever required by the
 * client modules beside it.
 */
const DATA_KEY = { Outline: "o", Bold: "b", Bulk: "u", Broken: "k", TwoTone: "w" };
/* "t" is not a drawing: it is which outline shapes TwoTone dims. */
function writeData(name, drawings) {
  writeFileSync(
    path.join(DIST, "data", `${name}.cjs`),
    `'use strict';\n` +
      Object.entries(drawings).map(([k, v]) => `exports.${k} = ${v};`).join("\n") +
      "\n",
  );
}

/* `one(o)`, `one(o,0,t)`, `icon([o,b,u,k],1)`: the drawing, then only the
   arguments it needs. */
const call = (fn, drawing, ids, dims) =>
  `${fn}(${drawing}${ids || dims ? `,${ids ? 1 : 0}` : ""}${dims ? `,${dims}` : ""})`;

export async function compileIcons() {
  /* A new URL each run: node caches modules by URL, and a second build in the
     same process would otherwise compile the first build's components. */
  const fresh = `?t=${Date.now()}`;
  const { icon, one } = await import(pathToFileURL(path.join(DIST, "runtime.js")).href + fresh);
  const names = readdirSync(ICONS).filter((f) => f.endsWith(".tsx")).map((f) => f.slice(0, -4)).sort();

  for (const dir of [...STYLE_ENTRIES.map(([d]) => d), "data", "node"]) {
    rmSync(path.join(DIST, dir), { recursive: true, force: true });
    mkdirSync(path.join(DIST, dir), { recursive: true });
  }

  /* What the single-file Node entries are written from, after the loop. */
  const compiled = new Map();
  const kept = [];
  for (const name of names) {
    const built = path.join(DIST, "icons", `${name}.js`);
    const branches = (readFileSync(built, "utf8").match(/viewBox:/g) ?? []).length;
    const expected = expectedBranches(readFileSync(path.join(ICONS, `${name}.tsx`), "utf8"));
    assert.equal(branches, expected, `${name}: the build kept ${branches} of ${expected} drawings`);

    const Icon = (await import(pathToFileURL(built).href + fresh)).default;

    let drawn;
    try {
      drawn = Object.fromEntries(STYLE_ENTRIES.map(([, variant]) => [variant, drawing(Icon, variant)]));
      const all = [drawn.Outline, drawn.Bold, drawn.Bulk, drawn.Broken];
      let dims = null;
      try {
        dims = dimsOf(drawn.Outline, drawn.TwoTone);
        /* A TwoTone that dims nothing is the outline, and needs no list. */
        if (!dims.length) dims = null;
      } catch {
        /* A TwoTone that is not the outline dimmed rides along as a fifth. */
        all.push(drawn.TwoTone);
      }
      /* The source calls useId() in every style, so the root does too: on the
         client the ids are a counter, and skipping a call would shift the id
         of whatever renders next. A single-style entry only calls it if its
         own drawing needs one. */
      const ids = STYLE_ENTRIES.some(([, variant]) => usesId(drawn[variant]));
      /* Every style, plus the two ways of asking for none of them. */
      assertSame(Icon, icon(all, ids, dims ?? undefined), [...STYLE_ENTRIES.map(([, v]) => v), undefined, "Nope"]);

      /* Data keys: the drawings in icon()'s order, then the dims if any. */
      const keys = ["o", "b", "u", "k", ...(all[4] ? ["w"] : [])];
      const data = Object.fromEntries(keys.map((k, i) => [k, all[i]]));
      const styles = {};
      for (const [dir, variant] of STYLE_ENTRIES) {
        const key = variant === "TwoTone" && !all[4] ? "o" : DATA_KEY[variant];
        const dimmed = variant === "TwoTone" && dims ? dims : undefined;
        const needsId = usesId(data[key]);
        /* The exact call the entry will make, on the exact data it imports. */
        assertSame(Icon, one(data[key], needsId, dimmed), [variant], true);
        styles[dir] = [keys.indexOf(key), needsId, !!dimmed, key];
      }
      drawn = { styles };
      const dimsLiteral = dims && JSON.stringify(dims);
      const lits = all.map(literals);
      compiled.set(name, { all: lits, dims: dimsLiteral, ids, styles });

      writeData(name, {
        ...Object.fromEntries(keys.map((k, i) => [k, lits[i]])),
        ...(dims ? { t: dimsLiteral } : {}),
      });
      writeModule(
        "icons",
        name,
        { "../runtime": ["icon"], [`../data/${name}`]: [...keys, ...(dims ? ["t"] : [])] },
        call("icon", `[${keys}]`, ids, dims && "t"),
        { imports: { "../runtime": ["icon"] }, value: call("icon", `[${lits}]`, ids, dimsLiteral) },
      );
    } catch {
      drawn = null;
      kept.push(name);
    }

    for (const [dir, variant] of STYLE_ENTRIES) {
      if (drawn) {
        const [index, needsId, dimmed, key] = drawn.styles[dir];
        const { all, dims } = compiled.get(name);
        writeModule(
          dir,
          name,
          { "../runtime": ["one"], [`../data/${name}`]: dimmed ? [key, "t"] : [key] },
          call("one", key, needsId, dimmed && "t"),
          { imports: { "../runtime": ["one"] }, value: call("one", all[index], needsId, dimmed && dims) },
        );
      } else {
        writeModule(
          dir,
          name,
          { "../runtime": ["fixed"], [`../icons/${name}`]: [`Icon${name}`] },
          `fixed(Icon${name}, ${JSON.stringify(variant)})`,
        );
      }
    }
  }

  /* One root per style, the same two shapes as the package root: re-exports a
     bundler prunes at the module boundary, and lazy getters for require(). */
  for (const [dir] of STYLE_ENTRIES) {
    writeFileSync(
      path.join(DIST, `${dir}.js`),
      '"use client";\n' + names.map((n) => `export { Icon${n} } from './${dir}/${n}.js';`).join("\n") + "\n",
    );
    writeFileSync(
      path.join(DIST, `${dir}.cjs`),
      '"use client";\nObject.defineProperty(exports, "__esModule", { value: true });\n' +
        names.map((n) =>
          `Object.defineProperty(exports, "Icon${n}", ` +
          `{ enumerable: true, get: () => require("./${dir}/${n}.cjs").Icon${n} });`,
        ).join("\n") +
        "\n",
    );
  }
  /* The five style roots export the same names with the same type, so they
     share one declaration. The per-icon files reuse dist/icons/<Name>.d.ts,
     and the prop types come from the 2 KB declaration beside them: the root's
     is 600 KB, almost all of it the IconName union, which a style entry does
     not need to load to type one component. */
  writeFileSync(
    path.join(DIST, "styles.d.ts"),
    `export type { IconVariant, IconProps, IconComponentType } from './icons/types.js';\n` +
      names.map((n) => `export { Icon${n} } from './icons/${n}.js';`).join("\n") +
      "\n",
  );

  writeNodeEntries(names, compiled);

  console.log(
    `Compiled ${names.length - kept.length} of ${names.length} icons to data; ` +
      `${kept.length} keep their component.`,
  );
  return { compiled: names.length - kept.length, kept };
}

/*
 * dist/node/: the package root and the five style roots as single files, for
 * plain Node only (the "node" condition in package.json, after "module", so
 * bundlers never see it).
 *
 * The modular roots are right for a bundler, which prunes them at the module
 * boundary, and wrong for Node, which has no bundler and loads every module a
 * root re-exports: over 5,000 files for `import { IconHome } from
 * "@devigner-ui/icons"`, about a second of server start-up. These load one
 * data file and one wrapper instead.
 *
 * An icon whose component was kept is imported from dist/icons/ as before;
 * there are few enough of them that a module each costs nothing.
 */
function writeNodeEntries(names, compiled) {
  const dir = path.join(DIST, "node");
  const keptImports = (alias) =>
    names
      .filter((n) => !compiled.has(n))
      .map((n) => `import { Icon${n} as ${alias(n)} } from '../icons/${n}.js';`);

  /* Per icon: [[outline, bold, bulk, broken, own TwoTone?], dims or 0]. */
  writeFileSync(
    path.join(dir, "data.mjs"),
    `export default {\n` +
      [...compiled].map(([n, { all, dims }]) => `${JSON.stringify(n)}: [[${all}],${dims ?? 0}],`).join("\n") +
      `\n};\n`,
  );
  const at = (n) => `D[${JSON.stringify(n)}]`;

  /* The root: every icon, then the old names still inside their window. */
  const renames = activeRenames();
  writeFileSync(
    path.join(dir, "index.mjs"),
    `"use client";\nimport { icon } from '../runtime.js';\n` +
      (renames.length ? `import { renamed } from '../renamed.js';\n` : "") +
      `import D from './data.mjs';\n` +
      keptImports((n) => `Icon${n}`).join("\n") +
      "\n" +
      names
        .map((n) =>
          compiled.has(n)
            ? `export const Icon${n} = ${call("icon", `${at(n)}[0]`, compiled.get(n).ids, compiled.get(n).dims && `${at(n)}[1]`)};`
            : `export { Icon${n} };`,
        )
        .join("\n") +
      "\n" +
      renames
        .map(({ from, to, message }) =>
          `/** @deprecated ${message} */\n` +
          `export const Icon${from} = renamed(Icon${to}, ${JSON.stringify(from)}, ${JSON.stringify(message)});`,
        )
        .join("\n") +
      "\n",
  );

  for (const [style, variant] of STYLE_ENTRIES) {
    writeFileSync(
      path.join(dir, `${style}.mjs`),
      `"use client";\nimport { one, fixed } from '../runtime.js';\nimport D from './data.mjs';\n` +
        keptImports((n) => `$${n}`).join("\n") +
        "\n" +
        names
          .map((n) => {
            if (!compiled.has(n)) return `export const Icon${n} = fixed($${n}, ${JSON.stringify(variant)});`;
            const [index, needsId, dimmed] = compiled.get(n).styles[style];
            return `export const Icon${n} = ${call("one", `${at(n)}[0][${index}]`, needsId, dimmed && `${at(n)}[1]`)};`;
          })
          .join("\n") +
        "\n",
    );
  }
}
