# @devigner-ui/icons-svg

## 2.2.0

### Minor Changes

- Renamed Star2 to Spinner, simplified the Star artwork, and added StarList.

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

The artwork of `@devigner-ui/icons` as plain SVG files, for everywhere that is not React: vanilla pages, a CDN `<img>`, a CSS background, a server-side template, a design tool.

- 7,852 files at `svg/<style>/<Name>.svg`: 1,963 symbols in outline, twotone, bold and bulk.
- Per-style sprites at `sprite/<style>.svg`, one `<symbol>` per icon.
- Every drawing paints with `currentColor` and strokes at 1.5, so inlined markup inherits colour from CSS.
- No framework, no build step, no dependencies.

The files are generated from `@devigner-ui/icons` rather than drawn separately, so they cannot fall out of step with the React components.

Two notes on sprites, both in the README: each is around 1.4 MB because it holds the whole set, and `<use>` with a cross-origin `href` is blocked by browsers, so sprites are for self-hosting, and per-icon files are the CDN path.
