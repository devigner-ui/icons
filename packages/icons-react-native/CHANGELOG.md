# @devigner-ui/icons-react-native

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

7,852 icons for React Native: 1,963 symbols, each in outline, twotone, bold and bulk. Built on `react-native-svg`, which is a peer dependency.

- One module per icon. Metro does not tree-shake, so import `@devigner-ui/icons-react-native/icons/Add` directly when bundle size matters.
- `variant` picks the drawing, `size` sets both dimensions, `strokeWidth` weighs the linework on outline and twotone.
- `color` is what `currentColor` resolves to. React Native has no cascade, so the inheritance the web gets from CSS is an explicit prop here.
- Everything else is passed to `<Svg>`, so `style`, `onPress` and `testID` work.
- Decorative by default (`accessibilityElementsHidden`), promoted to `accessibilityRole="image"` when given an `accessibilityLabel`.

A few drawings are 25×24 rather than square; `size` sets both dimensions and the drawing letterboxes inside them rather than stretching.

The drawings are generated from `@devigner-ui/icons` rather than redrawn, so the two cannot fall out of step.
