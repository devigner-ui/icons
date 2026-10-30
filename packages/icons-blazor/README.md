# Devigner.Icons.Blazor

10,560 drawings for Blazor: 2,112 symbols, each in outline, twotone, bold, bulk and broken. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn. .NET 8 and newer, in every render mode.

```bash
dotnet add package Devigner.Icons.Blazor
```

## Use

Add `@using Devigner.Icons.Blazor` to `_Imports.razor`, then:

```razor
<DvIcon Icon="DvIcons.BagStraps" class="size-6" />
<DvIcon Icon="DvIcons.BagStraps" Variant="IconVariant.Bold" class="size-6 text-violet-600" />
```

Any other attribute (`class`, `style`, `@onclick`, `aria-label`) lands on the `<svg>`. Strokes and fills are `currentColor`, so size and colour come from CSS. The assembly is marked trimmable, and each icon is a property of its own, so the trimmer can drop the ones an app never reads.

Names are the icon's name; one that starts with a digit gets a `_` in front (`DvIcons._3dCube`).

## Parameters

| Parameter | Type | Default | What it does |
| --- | --- | --- | --- |
| `Icon` | `IconData` | required | Any `DvIcons.*` |
| `Variant` | `IconVariant` | `Outline` | `Outline`, `TwoTone`, `Bold`, `Bulk` or `Broken` |
| `StrokeWidth` | `double?` | `1.5` | Line weight of Outline, TwoTone and Broken |

## Accessibility

Icons render `aria-hidden="true"` by default, because an icon beside its own label is otherwise read out twice. An `aria-label` promotes one to an image.

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
