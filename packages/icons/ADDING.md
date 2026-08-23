# Adding icons

From a drawing to a published version. Everything downstream — the barrel, the
types, the metadata, the vectors, the SVG files, the Vue/Svelte/React Native
ports — is generated from one `.tsx` per symbol, so the whole job is: write the
file, file its category, build, test, changeset, push.

For changing artwork that already exists, see [EDITING.md](EDITING.md).

**The short version.** Drop four SVGs per symbol into `packages/icons/incoming/`,
named `<name>-<style>.svg`, and run one command from the repo root:

```bash
pnpm add-icons
```

That writes the components, files their categories, moves the totals in every
README, writes the changeset, builds every package and runs every check.
[Steps 1-8 happen for you](#the-importer); what is left is reviewing the diff
and [pushing it](#9-commit-and-push). The rest of this page is what it does, and
what to do when a drawing is unusual enough that it needs a hand.

```
incoming/<name>-<style>.svg              ← what you drop
        │
        ├─ import:svgs         writes both of the files below
        ▼
packages/icons/icons/<Name>.tsx          ← the component, one per symbol
scripts/icon-categories.json             ← one line per icon
        │
        ├─ optimize:paths      svgo, rounds coordinates in place
        ├─ sync                src/index.ts, src/types.ts, src/entries/*
        ├─ generate:metadata   src/metadata.json  (category + keywords)
        ├─ generate:embeddings src/embeddings.json (384-dim vector per symbol)
        └─ tsup                dist/ ──┬─ icons-svg, -vue, -svelte, -react-native
                                       └─ the website's svgs + icons.json
```

---

## The importer

```bash
pnpm add-icons                                    # from the repo root
pnpm --filter=@devigner-ui/icons import:svgs --from ../elsewhere  # just the import
```

`scripts/import-svgs.mjs` reads the drop folder, groups the files by symbol and
writes one `icons/<Name>.tsx` per group, in the same shape as the rest of the
set: three branches, `currentColor`, the `strokeWidth` prop, and the duotone
opacity expression on the shapes the twotone file half-tones. Then it

- files each new name in `scripts/icon-categories.json`,
- moves the totals in the eleven files that state them ([step 7](#7-update-the-counts)),
- writes a minor changeset naming the new icons ([step 8](#8-changeset)),
- and moves the SVGs it consumed into `incoming/imported/`.

The totals are read from what `packages/icons/package.json` currently claims
rather than counted backwards from the import, so a set that grew by hand since
the last release catches up on the next run instead of being skipped.

**Four files per symbol, and the twotone one is not optional.** TwoTone is not a
drawing in the output — it is the outline drawing with
`opacity={duotone ? "0.4" : "1"}` on its secondary shapes, and the twotone file
is the only thing that says which shapes those are. The importer matches the two
drawings shape by shape, at every depth, and reports a pair it cannot match
rather than guessing. An incomplete symbol stops the run: four styles are the
unit, and a missing twotone file is the one whose absence nothing downstream can
see.

Filenames are `<name>-<style>.svg`, lower-case, hyphens for spaces:
`shopping-basket-add-outline.svg` becomes `IconShoppingBasketAdd`. Hyphens
inside the name are fine — only the last segment is read as the style.

It refuses to overwrite an icon that already exists; `--force` re-imports the
artwork for one that does (and leaves its category alone, so a hand-made
correction survives).

### What it prints

```
ok  ShoppingBasketAdd
ok  WheelchairUser

100%  ShoppingBasketAdd   shopping-ecommerce   near ShoppingBasketSmile, ShopAdd, ShoppingBasket
 39%  WheelchairUser      home-furniture       near Chair2, Armchair2, BoneBroken <- check
```

The percentage is how much of the neighbourhood agreed — see
[step 3](#3-file-its-category). Anything under 50% is flagged, and a flagged
line is worth two seconds of your attention before you commit: the second icon
above landed with the furniture because "Wheelchair" reads as a chair.
Correcting it is editing one line in `scripts/icon-categories.json` and running
`pnpm --filter=@devigner-ui/icons generate:metadata`.

### When it refuses

| It says | Do |
| --- | --- |
| `Incomplete symbols, nothing imported` | export the missing styles; nothing was written |
| `outline has N shapes, twotone has M` | the two files are not the same drawing — re-export both from the same frame |
| `a shape in the outline drawing is not in the twotone one` | same cause; the shapes have to correspond |
| `<name>: bold is 0 0 25 25, outline is 0 0 24 24` | one style was exported at a different size |
| `<foo> has no react-native-svg component` | at the workspace build, not the import — see [step 2](#2-write-the-file) |
| `ignored <file>: not <name>-<style>.svg` | a stray file in the drop folder; it was skipped, not imported |

`scripts/import-check.mjs` is what keeps the importer honest: it renders icons
that already exist back out to SVG, feeds them through the importer, and asserts
the result is the component they came from — same artwork, same shapes
half-toned, same stroke prop. It runs as part of `pnpm test`.

---

The rest of this page is the same job by hand. Read it when a drawing needs
something the importer will not do for you, or when you want to know what it
wrote.

## 1. Name it

PascalCase, no `Icon` prefix. `sync` derives the component name from the
filename: `Bookmark.tsx` → `IconBookmark`, exported as
`import { IconBookmark } from '@devigner-ui/icons'` and as the subpath
`@devigner-ui/icons/Bookmark`.

Check the name is free first — nothing in the build catches a collision, it
just overwrites:

```bash
ls packages/icons/icons/Bookmark.tsx
```

Two conventions the existing 2,142 follow: the shape leads and the modifier
follows (`AlarmAdd`, not `AddAlarm`), and a second drawing of the same thing
gets a numeric suffix (`AlignLeft2`).

`icons/types.ts` is not an icon — it is the shared prop type. Every `.tsx` in
that directory is treated as a drawing, so nothing else may live there.

## 2. Write the file

Copy the closest existing icon and replace the artwork. That inherits the
`forwardRef`, the prop defaults, the a11y block and the branch structure, all of
which the checks assert on:

```bash
cp packages/icons/icons/Add.tsx packages/icons/icons/Bookmark.tsx
```

Then rename both identifiers — the `const` and the inner `function` — and the
default export at the bottom. All three read `IconBookmark`.

The body is one three-branch ternary keyed off two booleans:

| Branch | Draws | |
| --- | --- | --- |
| `!fill ? <svg>…` | **Outline** and **TwoTone** | stroked. `opacity={duotone ? "0.4" : "1"}` on the secondary paths *is* the TwoTone variant |
| `: duotone ? <svg>…` | **Bulk** | filled, secondary shapes at 0.4 |
| `: <svg>…` | **Bold** | filled, everything solid |

Four styles, three drawings: Outline and TwoTone are the same linework with one
opacity expression between them.

Rules the checks enforce, and what breaks when you miss one:

- **Exactly three `<svg>` elements.** `artwork-check` counts them per file and
  per component in the bundle.
- **The same `viewBox` on all three**, normally `0 0 24 24`. The export sizes
  and the site's keyline grid assume it.
- **`stroke="currentColor"` / `fill="currentColor"`**, never a hex. Colour, dark
  mode and the `color` property all ride on `currentColor`.
- **`strokeWidth={strokeWidth}`** on every stroked path, never a literal
  `"1.5"`. That prop is what the stroke slider writes.
- **camelCase JSX attributes** (`strokeLinecap`, `fillRule`, `clipPath`). React
  lowercases them on render; a hand-written `stroke-linecap` in JSX is dropped
  silently, taking even-odd holes and stroke joins with it.
- **Only these elements:** `path`, `g`, `circle`, `ellipse`, `rect`, `defs`,
  `clipPath`. The React Native build maps each tag to a `react-native-svg`
  component and asserts on the set; anything else fails the build with
  `<foo> has no react-native-svg component`. No `<text>`, no gradients, no
  `<style>`.
- **No text between tags, no comments inside the `<svg>`.** The React Native
  parser is a tokenizer over React's own output and throws on both.

Don't hand-round coordinates. `optimize:paths` runs svgo at two decimals on
every build and is idempotent.

## 3. File its category

`generate:metadata` reads `scripts/icon-categories.json` — a flat map, one line
per icon, no prefix rules — and **exits on any name it does not find**. This is
the step that fails a build for a new icon:

```
Bookmark has no category. Add it to scripts/icon-categories.json.
```

Add the line to the `icons` object, using one of the 33 slugs already in the
`categories` object at the top of that file (a slug with no label is also a
build error):

```json
  "Bookmark": "lists-tasks",
```

Keywords, the display name, the usage string and the search vector are all
derived — the category is the only thing decided by hand. Don't edit
`src/metadata.json` by hand: it is generated, and committing a hand-edit means
the next build silently reverts it.

## 4. Build the React package

```bash
pnpm --filter=@devigner-ui/icons build
```

Runs `optimize:paths` → `sync` → `generate:metadata` → `generate:embeddings` →
`tsup`. `sync` adds the export, the `IconName` union member and the per-icon
subpath entry; `tsup` emits the barrel, the one-file-per-icon builds and the
`.d.ts` shims.

`generate:embeddings` loads `Xenova/all-MiniLM-L6-v2` and re-embeds every
symbol, so the first run downloads the model and a full run takes minutes. It is
required: the CLI's `search` and the website's search both rank against
`embeddings.json`, and an icon missing from it is an icon nobody can find.

## 5. Test

```bash
pnpm --filter=@devigner-ui/icons test
```

| Check | What it proves for a new icon |
| --- | --- |
| `artwork-check` | the file has three branches, and the bundle kept three per component — including yours |
| `surface-check` | the CLI sees it, and the counts in `metadata.json`, the type union and the bundle agree |
| `render-check` | the built components still render the props they declare |
| `emit-svg` | your JSX turns into valid SVG in all four styles |

`surface-check` counts against `metadata.json` rather than a literal, so the
totals move on their own — but only if step 4 ran.

## 6. Build the rest of the workspace

The other four packages render the *built* React components, so they need
step 4 done first:

```bash
pnpm build && pnpm test
```

`pnpm -r` walks the workspace graph, and each port declares
`@devigner-ui/icons: workspace:^`, so `packages/icons` builds first. What the
new icon picks up:

- `@devigner-ui/icons-svg` — four `svg/<style>/Bookmark.svg` files plus a symbol
  in each `sprite/<style>.svg`
- `@devigner-ui/icons-vue`, `-svelte` — one component each
- `@devigner-ui/icons-react-native` — one module, parsed into a shape tree and
  round-tripped against the markup

This is where an unsupported element or a stray text node surfaces. If step 6
fails and step 5 passed, the artwork is the cause, not the plumbing.

## 7. Update the counts

> `pnpm add-icons` does this. By hand:

Several descriptions and READMEs state the totals in prose, and nothing
regenerates them:

```bash
grep -rn "2,142\|8,568" --include="*.md" --include="*.json" \
  README.md packages/*/README.md packages/*/package.json
```

The new totals are the symbol count and symbols × 4. Both appear in the five
published `package.json` descriptions and in the six READMEs. The generated
number to copy from is `totalIcons` in `packages/icons/src/metadata.json`, which
step 4 just rewrote.

Comments in the scripts also say 2,142. They are prose about a past bug, not
assertions — leave them.

## 8. Changeset

> `pnpm add-icons` writes one, a minor for every published package, naming the
> icons it added. Edit or delete it like any other. By hand:

```bash
pnpm changeset
```

New icons are additive: **minor** for `@devigner-ui/icons` and for each port
that now ships the drawing (`-svg`, `-vue`, `-svelte`, `-react-native`). Select
all five. `@devigner-ui/icons-pro` is private and listed in
`.changeset/config.json`'s `ignore`, so it never appears.

Renaming or deleting an existing icon is a **major** — say so in the changeset
body, with the old and new names.

Write the summary as what a consumer gets: "Add IconBookmark", not "add file".
It is copied verbatim into every CHANGELOG.

## 9. Commit and push

`src/`, `dist/`, `svg/` and `sprite/` are gitignored. The commit is the `.tsx`,
the `icon-categories.json` line, the count edits and the changeset:

```bash
git checkout -b add-bookmark
git add packages/icons/icons/Bookmark.tsx \
        packages/icons/scripts/icon-categories.json \
        .changeset/ README.md packages/*/README.md packages/*/package.json
git commit -m "feat(icons): add Bookmark"
git push -u origin add-bookmark
```

## 10. Deploy

`.github/workflows/release.yml` runs on every push to `main`, and the
`changesets/action` step does one of two things:

1. **Pending changesets exist** → it opens or updates a **"chore: version
   packages"** PR: versions bumped, changesets consumed, CHANGELOGs written.
   Nothing is published yet.
2. **No pending changesets** (i.e. that PR just merged) → it runs
   `pnpm release` = `pnpm build && pnpm test && changeset publish`.

So the deploy is two merges to `main`: yours, then the version PR the bot opens.
Review the version PR — the bumps and the CHANGELOG entries are the last chance
to catch a minor that should have been a major.

Publishing runs the full build and the full test suite on CI first, against a
`pnpm install --frozen-lockfile`, so a build that only works locally fails there.
It publishes with `NODE_AUTH_TOKEN` from the `NPM_TOKEN` secret; `concurrency:
release` keeps two pushes from racing. `@devigner-ui/icons-pro` is `private`, so
`changeset publish` skips it.

Verify:

```bash
npm view @devigner-ui/icons version
npx @devigner-ui/icons@latest info Bookmark
```

---

## Adding many icons at once

The same flow — the per-icon work is steps 1–3, and steps 4–10 are one pass for
the whole batch. Worth knowing on a large batch:

- Add every `icon-categories.json` line before the first build. The metadata
  step throws on the first unfiled name, so an unfiled batch is one failure per
  build.
- `pnpm sync:watch` regenerates the barrel as files land, which keeps a dev app
  importing them without a full build.
- `generate:embeddings` re-embeds the entire set on every run, not just the new
  names. Batch the build; don't run it per icon.
- One changeset for the batch, listing what was added.

## When something goes wrong

| Symptom | Cause |
| --- | --- |
| `Unknown option: 'recursive'` from `pnpm import` | the script is `import:svgs`; plain `import` is a pnpm built-in |
| `Bookmark has no category` | step 3 — the name is missing from `icon-categories.json`. The importer files new names itself, so this means the icon was added by hand |
| `filed under X, which has no label` | the slug isn't in that file's `categories` object |
| `expected 3 svgs, found 2` | a branch was dropped — all three must exist, even if two share linework |
| `N components in the bundle, M in icons/` | the build ran against a stale tree; rebuild |
| `<text> has no react-native-svg component` | an element outside the supported set, step 2 |
| `… did not round-trip` | a text node or comment inside the `<svg>` |
| `dist/index.js is missing` | a port was built before `packages/icons`; run `pnpm build` from the root |
| Icon renders black in dark mode | a hex colour instead of `currentColor` |
| Stroke slider does nothing | a literal `strokeWidth="1.5"` instead of `{strokeWidth}` |
| TwoTone identical to Outline | the secondary paths are missing `opacity={duotone ? "0.4" : "1"}` |
| Search never returns it | `generate:embeddings` didn't run, or ran before the icon existed |
| The version PR never appears | no changeset in the merge — add one and push again |
| `metadata.json` shows a diff on an unrelated build | `generatedAt` is a timestamp; every build rewrites it |
| `no file said 2,142; the totals need a look` | the READMEs disagree with each other; fix one and re-run, or edit the eleven by hand |
| `LICENSE has drifted from the repo root copy` | the two files differ, usually only in line endings — the packages carry LF |

`packages/icons-pro` reads `../icons/dist` without declaring the dependency, so
it wants `packages/icons` built first. It is private and unpublished; a stale
build there reaches nobody.
