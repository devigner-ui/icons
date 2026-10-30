# @devigner-ui/icons-angular

10,560 drawings for Angular 16+: 2,112 symbols, each in outline, twotone, bold, bulk and broken, drawn by one standalone component. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn.

```bash
pnpm add @devigner-ui/icons-angular
```

## Use

```ts
import { Component } from "@angular/core";
import { DvIcon, IconAdd, IconShoppingCart } from "@devigner-ui/icons-angular";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [DvIcon],
  template: `
    <svg [dvIcon]="IconAdd" class="size-6"></svg>
    <svg [dvIcon]="IconShoppingCart" variant="bulk" class="size-6 text-violet-600"></svg>
  `,
})
export class CartComponent {
  IconAdd = IconAdd;
  IconShoppingCart = IconShoppingCart;
}
```

`DvIcon` goes on your own `<svg>`, so classes and attributes stay on the element that draws and there is no wrapper in the layout. Each `Icon*` is a small data module, so a build keeps only the icons a component references. It renders on the server too.

## Inputs

| Input | Type | Default | What it does |
| --- | --- | --- | --- |
| `dvIcon` | `IconData` | required | The icon: any `Icon*` export. |
| `variant` | `"outline" \| "twotone" \| "bold" \| "bulk" \| "broken"` | `"outline"` | Which drawing to render. |
| `strokeWidth` | `string \| number` | `1.5` | Stroke width. Outline, twotone and broken; bold and bulk keep their own weight. |

## Accessibility

Icons are decorative by default (`aria-hidden="true"`). An `aria-label` on the `<svg>` promotes it to an image.

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
