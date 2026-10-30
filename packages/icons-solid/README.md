# @devigner-ui/icons-solid

10,560 drawings for SolidJS: 2,112 symbols, each in outline, twotone, bold, bulk and broken. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn, so the two cannot drift.

```bash
pnpm add @devigner-ui/icons-solid
```

## Use

```tsx
import { IconAdd, IconShoppingCart } from "@devigner-ui/icons-solid";

<IconAdd class="size-6" />
<IconShoppingCart variant="bulk" class="size-6 text-violet-600" />
```

Plain JavaScript, no JSX inside, so there is no compile step to configure. Every icon is one module, so a bundler keeps only what you import. Works with SolidStart's server rendering.

## Props

| Prop | Type | Default | What it does |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "twotone" \| "bold" \| "bulk" \| "broken"` | `"outline"` | Which drawing to render. Every icon has all five. |
| `strokeWidth` | `string \| number` | `1.5` | Stroke width, in the drawing's own units. Outline, twotone and broken; bold and bulk keep their own weight. |

Everything else (`class`, `style`, `id`, `onClick`, the aria attributes) lands on the `<svg>`. Strokes and fills are `currentColor`, so size and colour come from CSS.

## Accessibility

Icons are decorative by default (`aria-hidden="true"`). Naming one promotes it to an image:

```tsx
<IconAdd aria-label="Add item" />
```

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
