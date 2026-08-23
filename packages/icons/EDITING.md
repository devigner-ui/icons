# Editing an icon

Every drawing in the set lives in exactly one file. Everything else — the
bundle, the SVG files, the Vue/Svelte/React Native ports, the website grid, the
docs — is generated from it. Edit the source, rebuild, and the rest follows.

```
packages/icons/icons/<Name>.tsx     ← the only file you edit
        │
        ├─ scripts/sync.mjs             barrel export + types
        ├─ scripts/generate-metadata    category and keywords
        ├─ tsup                         dist/index.js
        │
        └─ dist/ ──┬─ packages/icons-svg, -vue, -svelte, -react-native
                   └─ website/public/svgs + icons.json
```

Never edit `src/index.ts`, `src/metadata.json`, `dist/`, `website/public/svgs/`
or the sibling packages' output. All of it is overwritten on the next build.

---

## 1. Find the file

The filename is the component name without the `Icon` prefix:

| Component | File |
| --- | --- |
| `IconAdd` | `packages/icons/icons/Add.tsx` |
| `Icon3dRotate` | `packages/icons/icons/3dRotate.tsx` |
| `IconArrowLeft` | `packages/icons/icons/ArrowLeft.tsx` |

## 2. Understand the four variants

One file holds all four drawings as a three-branch ternary, keyed off two
booleans at the top of the component:

```tsx
const fill = variant === "Bold" || variant === "Bulk";
const duotone = variant === "TwoTone" || variant === "Bulk";
```

| Branch | Draws | Notes |
| --- | --- | --- |
| `!fill ? <svg>…` | **Outline** and **TwoTone** | one drawing, stroked. `opacity={duotone ? "0.4" : "1"}` on the secondary paths is what makes it TwoTone |
| `: duotone ? <svg>…` | **Bulk** | filled, secondary shapes at 0.4 |
| `: <svg>…` | **Bold** | filled, everything solid |

So a stroke tweak touches the first branch and changes two variants at once; a
fill tweak touches the second or third.

## 3. Edit the artwork

Paste new path data, or nudge the existing `d` attributes. Keep these or the
checks below will fail:

- **All three `<svg>` branches stay.** `artwork-check` counts them.
- **Same `viewBox`** in all three, and the same one the file already had —
  the website's keyline grid and the export sizes assume it.
- **`stroke="currentColor"` / `fill="currentColor"`.** Never a hex: the colour
  control, dark mode and the `color` CSS property all ride on `currentColor`.
- **`strokeWidth={strokeWidth}`** on every stroked path, never a literal
  `"1.5"`. The stroke slider writes this prop.
- **`opacity={duotone ? "0.4" : "1"}`** on the secondary shapes of the first
  branch — that single expression is the whole TwoTone variant.
- **camelCase JSX attributes** (`strokeLinecap`, `fillRule`, `clipPath`).
  React lowercases them on render; hand-written `stroke-linecap` in JSX is
  dropped silently.

Don't hand-round the coordinates. `optimize:paths` runs svgo on every build and
rounds to two decimals; it is idempotent, so let it do the work.

## 4. Rebuild

```bash
# from the repo root
pnpm --filter=@devigner-ui/icons build
```

That runs, in order: `optimize:paths` → `sync` → `generate:metadata` →
`generate:embeddings` → `tsup`. It is the only command that matters for an
artwork change — nothing downstream reads your `.tsx`.

Rebuilding the whole workspace instead (`pnpm build`) also refreshes the SVG,
Vue, Svelte and React Native packages, which each render the built React
components. Do that before publishing or if you consume one of those ports.

## 5. Verify

```bash
pnpm --filter=@devigner-ui/icons test
```

| Check | What it proves |
| --- | --- |
| `artwork-check` | every source has three branches, and the bundle kept all three per component |
| `surface-check` | the CLI and the exported types still match what the docs claim |
| `render-check` | the built component actually renders the props it declares |
| `emit-svg` | JSX turns into valid SVG for all four variants |

## 6. See it while you edit

```bash
pnpm site:dev     # then http://localhost:5173/admin?icon=Check
```

`/admin` exists on the dev server only. It imports `icons/<Name>.tsx` directly,
so a save shows up immediately — no rebuild, no `gen:icons` — in all four
variants, on the 2-unit grid, at 16/20/24px alongside. Use it for the artwork
loop; steps 4 and 5 are still what proves the change ships.

## 7. See it on the site

```bash
pnpm site:dev
```

`site:dev` runs `gen:icons` first, which **imports the built package** and
writes `website/public/svgs/` and `icons.json`. If the site still shows the old
drawing, the icons package wasn't rebuilt — step 4, then this.

The documentation is not here any more: it is markdown in the website repo
under `content/docs/`, rendered into the site's own `/docs` route.

---

## Adding a new icon

See [ADDING.md](ADDING.md). Four SVGs per symbol into `incoming/`, then
`pnpm add-icons` writes the components, files their categories, builds and
tests. By hand it is the artwork rules above plus the two things an edit never
needs: a line in `scripts/icon-categories.json` (the build fails without it) and
a changeset, through to the release.

## Renaming an icon

Rename the file **and** the two identifiers inside it (the `const` and the
inner `function` name), then rebuild. It is a breaking change for consumers —
add a changeset (`pnpm changeset`) saying so.

## Deleting an icon

Delete the file and rebuild. Same breaking-change note applies.

---

## When something goes wrong

| Symptom | Cause |
| --- | --- |
| `expected 3 svgs, found 2` | a branch was deleted — all four variants must exist |
| `N components in the bundle, M in icons/` | build ran against a stale tree; rebuild |
| Website shows the old drawing | `packages/icons` wasn't rebuilt before `gen:icons` |
| Icon renders black in dark mode | a hex colour crept in instead of `currentColor` |
| Stroke slider does nothing | a literal `strokeWidth="1.5"` instead of `{strokeWidth}` |
| TwoTone looks identical to Outline | the secondary paths are missing the `duotone` opacity |
