# @devigner-ui/icons-js

10,560 drawings for plain JavaScript: 2,112 symbols, each in outline, twotone, bold, bulk and broken, as SVG strings or DOM elements. No framework. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn.

```bash
pnpm add @devigner-ui/icons-js
```

## Placeholders

Mark where icons go, then swap them in once:

```html
<i data-icon="BagStraps" data-variant="bold" class="size-6"></i>
```

```js
import { createIcons, IconBagStraps } from "@devigner-ui/icons-js";

createIcons({ icons: { IconBagStraps } });
```

Only the icons you pass can be drawn, so the page ships only those. `data-variant` and `data-stroke-width` pick the drawing; every other attribute moves onto the `<svg>`.

## Strings and elements

```js
import { toSvg, toElement, IconAdd } from "@devigner-ui/icons-js";

el.innerHTML = toSvg(IconAdd, { variant: "bulk", attrs: { class: "size-6" } });
button.append(toElement(IconAdd));
```

`toSvg` works on a server too, for templates and emails. One icon is also importable on its own, as `@devigner-ui/icons-js/icons/BagStraps`.

## Options

| Option | Type | Default | What it does |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "twotone" \| "bold" \| "bulk" \| "broken"` | `"outline"` | Which drawing to render. |
| `strokeWidth` | `string \| number` | `1.5` | Outline, twotone and broken only. |
| `attrs` | object | `{}` | Attributes for the `<svg>`. |

Icons are decorative by default (`aria-hidden="true"`); an `aria-label` makes one an image.

No bundle for a `<script>` tag: every icon in one file would be megabytes. For a CDN, use [`@devigner-ui/icons-svg`](https://www.npmjs.com/package/@devigner-ui/icons-svg)'s files and sprites, or load this package as ES modules from esm.sh.

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
