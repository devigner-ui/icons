# @devigner-ui/icons

## 3.2.0

### Minor Changes

- Renamed IconStar2 to IconSpinner, simplified the IconStar artwork, and added IconStarList.

## 3.1.0

### Minor Changes

- 1372f09: Add IconAiAudio.

## 3.0.0

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

## 2.2.0

### Minor Changes

- `Unify icon rendering behind a single canonical renderer, so SVG, Vue, Svelte, and React Native packages generate from built components instead of being parsed from source.`

## 2.1.0

### Minor Changes

- **Icons are accessible by default.** Every icon now renders
  `aria-hidden="true"` and `focusable="false"`, because an icon sitting beside
  its own text label was being announced twice. Give it an `aria-label` or
  `aria-labelledby` and it becomes `role="img"` and is no longer hidden.

  Previously no icon in the set carried a single aria attribute, and there was
  no way to add one.

- **Icons accept everything an `<svg>` accepts.** `onClick`, `style`, `id`,
  `data-*`, `tabIndex` and the aria attributes now reach the element. Before
  this, an icon took exactly four props and silently discarded the rest, so it
  could not be clicked, labelled, styled inline or selected in a test.

  `IconProps` extends `Omit<SVGProps<SVGSVGElement>, 'width' | 'fill'>`. Those
  two are omitted rather than shadowed because this component already uses both
  names for something else: `width` is the stroke width, and `fill` chooses a
  drawing.

- **Every icon forwards its ref to the `<svg>`.** This is what Radix, Headless
  UI and any tooltip or popover trigger need in order to measure and position
  against an element. `IconComponent` is therefore
  `ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>` rather
  than `FC<IconProps>`. If you were assigning a plain function component to
  `IconComponent`, that annotation needs updating; the runtime behaviour of
  every existing usage is unchanged.

### Patch Changes

- The published `.d.ts` shrank from 394 KB to 304 KB. Each of the 1,963 icons
  declared its own copy of `IconProps`, and the declaration emitter cannot tell
  structurally identical interfaces apart, so it shipped 1,963 of them under
  generated names. There is now one shared definition.

- `react` and `react-dom` are pinned as devDependencies. The `>=18.0.0` peer
  range let pnpm auto-install React 19 for local builds while everything else in
  the repo was on 18, and the two disagree on the internal element symbol.
  Published output is unaffected; React has always been external.

- New `scripts/render-check.mjs` renders the built bundle and asserts on the
  markup, so a prop that is declared and then dropped fails the build.

## 2.0.0

### Major Changes

- **The licence declaration was wrong, and this release corrects it.** 1.0.0 and
  1.0.1 declared `MIT` over the whole package. The icon artwork is not original
  work: it derives from [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736)
  by 480 Design (1,055 icons, **CC BY 4.0**) and [Iconsax](https://iconsax.io)
  by Vuesax (908 icons). CC BY 4.0 is an attribution licence, so those earlier
  releases told you no credit was required when it was.

  `license` is now the SPDX expression `MIT AND CC-BY-4.0`, and the package
  ships an `ATTRIBUTION.md` with the provenance, the modifications CC BY
  requires be indicated, and a credit line you can paste into your third-party
  notices:

  > Icons from Devigner Icons, derived from Solar Icon Set by 480 Design
  > (CC BY 4.0) and Iconsax by Vuesax. Modified.

  You still do not have to open source your project, and you can still sell what
  you build. You do have to credit the authors.

  1.0.0 and 1.0.1 have been unpublished rather than left to be installed under
  terms that were not true.

- **`IconVuesax` has been removed.** It reproduced the logo of Vuesax, the
  vendor of one of the upstream sets. The set now has 1,963 icons rather than
  1,964. This is the only removed export, and the reason this release is a
  major.

- **Around 35 icons reproduce third-party logos and wordmarks**: Apple, Google,
  Figma, Slack, Spotify, PayPal, Adobe products and roughly two dozen
  cryptocurrency marks. Those are trademarks. No licence in this package grants
  any right to them, and each owner's brand guidelines govern. This was never
  stated before; it is now, in `ATTRIBUTION.md`.

### Patch Changes

- `packages/icons` declares its own `engines` floor of Node 20. It previously
  declared none; the field lived only in the repo root, which npm never sees.

- The dts build was failing on a missing `@types/node`, which meant
  `prepublishOnly` could not complete. Fixed.

## 1.0.1

### Patch Changes

- Polish pass: minor consistency fixes and cleanup across the icon set.
