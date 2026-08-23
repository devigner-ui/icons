# @devigner-ui/icons

8,580 open-source icons for React. Every one of the 2,145 symbols carries four separate drawings:
outline, twotone, bold and bulk, rather than one generated and filtered.

Built on [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736)
and [Iconsax](https://iconsax.io). See [ATTRIBUTION.md](./ATTRIBUTION.md).

[icons.remidevigner.pro](https://icons.remidevigner.pro) · free and open source

```bash
npm install @devigner-ui/icons
```

## Usage

```tsx
import { IconShoppingCart } from "@devigner-ui/icons";

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

Every icon is also a module of its own, if you would rather not go through the
barrel:

```tsx
import { IconShoppingCart } from "@devigner-ui/icons/ShoppingCart";
import IconShoppingCart from "@devigner-ui/icons/ShoppingCart"; // same component
```

The two imports compile to the same thing under any bundler that tree-shakes,
and the package is marked `sideEffects: false`, so the barrel does not cost you
the other 1,962 icons either. The subpath is worth reaching for when something
in the toolchain does not tree-shake: a Jest transform, a bundler-less
`node --experimental-strip-types`, or a dev server paying to parse a 5.5 MB
module on every cold start. It needs TypeScript's `moduleResolution` set to
`"bundler"` or `"node16"`; the legacy `"node"` setting cannot read subpath
exports.

## Props

Three props of its own, **plus everything an `<svg>` takes** (`onClick`,
`style`, `id`, `width`, `fill`, `data-*`, the aria attributes) and a forwarded
`ref`.

| Prop | Type | Default | What it does |
| --- | --- | --- | --- |
| `className` | `string` | - | Sizes and colours the glyph. |
| `variant` | `"Outline" \| "TwoTone" \| "Bold" \| "Bulk"` | `"Outline"` | Which of the four drawings to render. |
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

## The four styles

`variant` selects between the four drawings:

```tsx
<IconShoppingCart />                       {/* outline, the default */}
<IconShoppingCart variant="TwoTone" />
<IconShoppingCart variant="Bold" />
<IconShoppingCart variant="Bulk" />
```

**All four styles are free on all 2,145 symbols.** Bulk used to be sold on 1,682
of them; it is not any more, and this package contains every drawing.

```ts
import metadata from "@devigner-ui/icons/metadata.json";

const cart = metadata.icons.find((i) => i.name === "ShoppingCart");
cart.freeStyles; // ["outline", "twotone", "bold", "bulk"]
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
  exported; `IconName` is a literal union of all 2,145 symbol names.
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
