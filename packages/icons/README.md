# @devigner-ui/icons

9,717 open-source drawings for React. Every one of the 2,147 symbols carries four core drawings:
outline, twotone, bold and bulk; 1,129 symbols also carry a Broken drawing.

Built on [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736)
and [Iconsax](https://iconsax.io). See [ATTRIBUTION.md](./ATTRIBUTION.md).

[icons.remidevigner.pro](https://icons.remidevigner.pro) · free and open source

```bash
npm install @devigner-ui/icons
```

## Usage

```tsx
import { IconShoppingCart } from "@devigner-ui/icons/ShoppingCart";

export function CartButton() {
  return (
    <button>
      <IconShoppingCart className="size-5" />
      Checkout
    </button>
  );
}
```

Strokes are `currentColor`, so colour comes from CSS. Size the glyph with
`className`; the component has no `size` prop.

Importing the icon's subpath loads only that icon. It is the best choice for
dev servers, tests and tools that do not tree-shake:

```tsx
import { IconShoppingCart } from "@devigner-ui/icons/ShoppingCart";
import IconShoppingCart from "@devigner-ui/icons/ShoppingCart"; // same component
```

Named imports from the package root still work:

```tsx
import { IconShoppingCart } from "@devigner-ui/icons";
```

The ESM root now re-exports individual modules, so production bundlers can
remove unused icons. The CommonJS root loads icon modules when their exports
are accessed. Native ESM loaders still traverse the root's full re-export
graph; use a subpath when startup cost matters. `sideEffects: false` tells
bundlers these modules may be removed when unused. Subpath types need
TypeScript's `moduleResolution` set to `"bundler"` or `"node16"`; the legacy
`"node"` setting cannot read subpath exports.

## Props

Three props of its own, **plus everything an `<svg>` takes** (`onClick`,
`style`, `id`, `width`, `fill`, `data-*`, the aria attributes) and a forwarded
`ref`.

| Prop | Type | Default | What it does |
| --- | --- | --- | --- |
| `className` | `string` | - | Sizes and colours the glyph. |
| `variant` | `"Outline" \| "TwoTone" \| "Bold" \| "Bulk" \| "Broken"` | `"Outline"` | Which drawing to render. Broken is available where supplied. |
| `strokeWidth` | `string \| number` | `"1.5"` | Stroke width, in the 24px drawing's own units. Outline and TwoTone only. |

Nothing is omitted from the inherited set any more: `width` and `fill` used to
be taken over for stroke width and which drawing, and are the element's own
attributes again. Size with `className` all the same: `width` sets one axis,
not both.

## Accessibility

Icons are **decorative by default** (`aria-hidden="true"` and
`focusable="false"`) because an icon sitting next to its own text label is
otherwise announced twice.

```tsx
<button>
  <IconTrash className="size-4" />   {/* hidden; the word "Delete" is the label */}
  Delete
</button>
```

Give it an `aria-label` or `aria-labelledby` and it becomes an image instead:
`role="img"`, no longer hidden.

```tsx
<button onClick={remove}>
  <IconTrash aria-label="Delete" className="size-4" />
</button>
```

## Refs

Every icon forwards its ref to the `<svg>`, so it works as a Radix or Headless
UI trigger and anything else that needs to measure or position against it.

```tsx
<Tooltip.Trigger asChild>
  <IconInfo aria-label="More information" />
</Tooltip.Trigger>
```

## Styles

`variant` selects between the four core drawings, with Broken available on icons that supply it:

```tsx
<IconShoppingCart />                       {/* outline, the default */}
<IconShoppingCart variant="TwoTone" />
<IconShoppingCart variant="Bold" />
<IconShoppingCart variant="Bulk" />
<IconShoppingCart variant="Broken" />                     {/* where available */}
```

**All four core styles are free on all 2,147 symbols.** Broken is free on the
1,129 symbols that supply that drawing. Bulk used to be sold on 1,682 of them;
it is not any more, and this package contains every drawing.

```ts
import metadata from "@devigner-ui/icons/metadata.json";

const cart = metadata.icons.find((i) => i.name === "ShoppingCart");
cart.freeStyles; // ["outline", "twotone", "bold", "bulk", "broken"] when supplied
cart.proStyles;  // []
```

## CLI

```bash
npx @devigner-ui/icons search "upload progress"   # rank the set against a description
npx @devigner-ui/icons copy ShoppingCart --format=svg
npx @devigner-ui/icons list --category=shopping-ecommerce
npx @devigner-ui/icons info ShoppingCart
```

`search` ranks against the shipped `embeddings.json`. Embedding your query needs
`@xenova/transformers`, which is deliberately not a dependency of this package;
without it, search falls back to keyword matching and says so. `--keyword` asks
for that directly and skips the model load.

## Package

- **No runtime dependencies.** React 18 or newer as a peer.
- **Tree shakeable.** `sideEffects: false`; you ship only what you import.
- **Typed.** `IconName`, `IconStyle`, `IconProps` and `IconComponentType` are
  exported; `IconName` is a literal union of all 2,147 symbol names.
- ESM and CJS builds, plus `./metadata.json`, `./embeddings.json` and
  `./styles.css` subpath exports.

`embeddings.json` holds one 384-dimension vector per icon, produced with
`Xenova/all-MiniLM-L6-v2`, for ranking icons against a description.


## Licence

Free for commercial use. Two licences, because two different things ship here.

**The code** (components, CLI, types, search) is MIT © Devigner.

**The artwork** is not original work. It is derived from two open icon sets:

| Set | Author | Icons | Licence |
| --- | --- | --- | --- |
| [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736) | 480 Design | 1,055 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| [Iconsax](https://iconsax.io) | Vuesax | 908 | Free for personal and commercial use |

CC BY 4.0 is an attribution licence, so if you ship these icons, credit the
authors wherever you keep third-party notices:

> Icons from Devigner Icons, derived from Solar Icon Set by 480 Design
> (CC BY 4.0) and Iconsax by Vuesax. Modified.

That is the whole obligation. You do not have to open source your project, and
you can sell what you build. Around 35 icons reproduce third-party **logos**,
which no licence here covers; check the owner's brand guidelines first.

Full provenance, including which upstream set a given icon came from, is in
[ATTRIBUTION.md](./ATTRIBUTION.md).
