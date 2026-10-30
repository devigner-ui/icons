# @devigner-ui/icons-svelte

## 3.5.0

### Minor Changes

- Add eight keyboard-key icons: IconOption (⌥), IconEscape (⎋), IconTab (⇥), IconSpacebar, IconDeleteForward (⌦), IconEject (⏏), IconPageUp (⇞) and IconPageDown (⇟).
- Move from 2.x to 3.5.0, so every Devigner Icons package shares one version and releases together. Nothing in the Svelte package breaks.
- Rename 654 icons so each name says what it draws: numbered, Alt and Minimalistic variants, misspellings, and names the drawing didn't match. `IconBag2` is now `IconBagStraps`. Every old name keeps working until 4.0.0.
- Old names log one console warning in development naming the replacement.
- Fold 50 icons that drew the same symbol as another into the icon they copied; the old names render that icon until 4.0.0 (`PlusCircle` renders `AddCircle`, `TickSquare` renders `CheckSquare`).
- Redraw Bold and Bulk for 36 icons (Add, More, Undo, Redo, Sort, Shuffle and 30 more) so every style draws the same shape and Bold only changes the weight.
- Move eight icons to the category they belong in, such as `CandlestickChart` into business analytics.
- Ship `renames.json`, the full old-to-new list. `npx @devigner-ui/icons migrate` rewrites old names in a project.

## 2.3.0

### Minor Changes

- 3b4e971: Add the Broken variant for icons that provide Broken artwork.

## 2.2.0

### Minor Changes

- ea39e90: Add IconArrowUpDown.

## 2.1.0

### Minor Changes

- 1372f09: Add IconAiAudio.

## 2.0.0

### Major Changes

- Re-imported the whole set from source: 2,142 symbols / 8,568 drawings, up from 1,963 / 7,852.

  The set was previously flattened from two source families, and 174 symbols that
  share a name between them were resolved by dropping one of the two drawings.
  Both now ship: the drawing whose artwork matches the name keeps the plain name,
  the other takes the next free number (`Bag` and `Bag6`, `Home` and `Home3`).
  That is where the 179 new icons come from. No existing name was removed.

  Breaking:

  - Fifteen names now carry the other family's drawing, because it is the one the
    name describes: `Broom`, `Buildings`, `CreativeCommons`, `Danger`,
    `LinkCircle`, `LinkSquare`, `MedalStar`, `Record`, `RecordCircle`, `Repeat`,
    `SendSquare`, `Star`, `Stop`, `StopCircle`, `VolumeCross`. The drawing each
    one replaced is still in the set, under the same name with a number.
  - TwoTone and Bulk secondary shapes are all at `0.4` now. The sources carried
    everything from `0.13` to `0.9`; a single value is what makes the style read
    as one set.
  - Five paths ignored the `strokeWidth` prop and rendered at a fixed weight.
    They honour it now.
  - The public type for an icon component is now `IconComponentType`. The icon
    named `Component` ships as `IconComponent`, which is the same
    one-name-one-export rule every other drawing follows; the type is the name
    that moved. Annotations written as `Record<IconName, IconComponent>` become
    `Record<IconName, IconComponentType>`.
  - Every icon carries a `categoryLabel` beside its `category`, and `category` is
    now a slug: `shopping-ecommerce` rather than `shopping ecommerce`. The
    taxonomy itself is new — 33 categories, one hand-kept line per icon in
    `scripts/icon-categories.json`. `icons list --category` and `icons search
--category` take the slug.

## 1.1.0

### Minor Changes

- `Unify icon rendering behind a single canonical renderer, so SVG, Vue, Svelte, and React Native packages generate from built components instead of being parsed from source.`

## 1.0.0

First release.

7,852 icons for Svelte: 1,963 symbols, each in outline, twotone, bold and bulk. Works with Svelte 4 and Svelte 5.

- One component per icon, so a bundler keeps only what you import.
- `variant` picks the drawing; `strokeWidth` weighs the linework on outline and twotone.
- Everything else (`class`, `style`, `id`, `on:click`, `data-*`, aria attributes) falls through to the `<svg>`.
- Strokes and fills are `currentColor`, so size and colour come from CSS.
- Decorative by default (`aria-hidden`), promoted to `role="img"` when given an `aria-label`.

Ships `.svelte` source under the `svelte` export condition, compiled by your own toolchain, the normal shape for a Svelte library, and the reason there is nothing here to configure.

The drawings are generated from `@devigner-ui/icons` rather than redrawn, so the two cannot fall out of step.
