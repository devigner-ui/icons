# @devigner-ui/icons-svelte

8,568 icons for Svelte: 2,142 symbols, each in outline, twotone, bold and bulk. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn, so the two cannot drift.

```bash
pnpm add @devigner-ui/icons-svelte
```

Works with Svelte 4 and Svelte 5.

## Use

```svelte
<script>
  import { IconAdd, IconShoppingCart } from "@devigner-ui/icons-svelte";
</script>

<IconAdd class="size-6" />
<IconShoppingCart variant="bulk" class="size-6 text-violet-600" />
```

Every icon is one component file, so a bundler keeps only what you import.

## Props

| Prop | Type | Default | What it does |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "twotone" \| "bold" \| "bulk"` | `"outline"` | Which of the four drawings to render. |
| `strokeWidth` | `string \| number` | `1.5` | Stroke width, in the drawing's own units. Outline and twotone only; bold and bulk are filled forms with no strokes to weigh. |

Everything else (`class`, `style`, `id`, `on:click`, `data-*`, the aria attributes) falls through to the `<svg>`.

Strokes and fills are `currentColor`, so size and colour come from CSS:

```svelte
<IconAdd class="size-5 text-slate-500" />
```

## Accessibility

Icons are decorative by default: they render `aria-hidden="true"`, because an icon sitting beside its own text label is otherwise read out twice. Naming one promotes it to an image:

```svelte
<IconAdd aria-label="Add item" />
```

## Source, not a bundle

The package ships `.svelte` files, which your own toolchain compiles, the normal shape for a Svelte library, and the reason there is no build here for you to configure.

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
