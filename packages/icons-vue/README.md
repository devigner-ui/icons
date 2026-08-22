# @devigner-ui/icons-vue

8,568 icons for Vue 3: 2,142 symbols, each in outline, twotone, bold and bulk. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn, so the two cannot drift.

```bash
pnpm add @devigner-ui/icons-vue
```

## Use

```vue
<script setup>
import { IconAdd, IconShoppingCart } from "@devigner-ui/icons-vue";
</script>

<template>
  <IconAdd class="size-6" />
  <IconShoppingCart variant="bulk" class="size-6 text-violet-600" />
</template>
```

Every icon is one module, so a bundler keeps only what you import.

## Props

| Prop | Type | Default | What it does |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "twotone" \| "bold" \| "bulk"` | `"outline"` | Which of the four drawings to render. |
| `strokeWidth` | `string \| number` | `1.5` | Stroke width, in the drawing's own units. Outline and twotone only; bold and bulk are filled forms with no strokes to weigh. |

Everything else (`class`, `style`, `id`, `@click`, `data-*`, the aria attributes) falls through to the `<svg>`.

Strokes and fills are `currentColor`, so size and colour come from CSS:

```vue
<IconAdd class="size-5 text-slate-500" />
```

## Accessibility

Icons are decorative by default: they render `aria-hidden="true"`, because an icon sitting beside its own text label is otherwise read out twice. Naming one promotes it to an image:

```vue
<IconAdd aria-label="Add item" />
```

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
