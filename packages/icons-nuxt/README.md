# @devigner-ui/icons-nuxt

A Nuxt module that auto-imports all 2,112 [Devigner Icons](https://icons.devigner.cc) as Vue components. Write `<IconBagStraps />` in any template, with no import line. Only the icons your templates use end up in the build.

```bash
npx nuxi module add @devigner-ui/icons-nuxt
```

Or add it yourself:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@devigner-ui/icons-nuxt"],
});
```

## Use

```vue
<template>
  <IconAdd class="size-6" />
  <IconShoppingCart variant="bulk" class="size-6 text-violet-600" />
</template>
```

The components are [`@devigner-ui/icons-vue`](https://www.npmjs.com/package/@devigner-ui/icons-vue), so they take the same props: `variant` (outline, twotone, bold, bulk or broken) and `strokeWidth`.

## Options

```ts
export default defineNuxtConfig({
  modules: ["@devigner-ui/icons-nuxt"],
  devignerIcons: { prefix: "Dv" }, // <DvBagStraps />
});
```

| Option | Default | What it does |
| --- | --- | --- |
| `prefix` | `"Icon"` | Put before every icon name. |

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
