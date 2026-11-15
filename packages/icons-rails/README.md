# devigner_icons

12,480 drawings for Rails and any Ruby app: 2,496 symbols, each in outline, twotone, bold, bulk and broken, as inline SVG. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn. No dependencies.

```bash
bundle add devigner_icons
```

## Use

In any Rails view, with nothing to include:

```erb
<%= devigner_icon "BagStraps", class: "size-6" %>
<%= devigner_icon :bag_straps, variant: :bold, class: "size-6 text-violet-600" %>
```

`BagStraps`, `:bag_straps` and `"bag-straps"` all name the same icon. Outside Rails, `DevignerIcons.svg(...)` takes the same arguments and returns the string.

## Options

| Option | Default | What it does |
| --- | --- | --- |
| `variant:` | `:outline` | `:outline`, `:twotone`, `:bold`, `:bulk` or `:broken` |
| `stroke_width:` | `1.5` | Line weight of outline, twotone and broken |
| anything else | | An attribute on the `<svg>`, such as `class:` or `id:`. Underscores become dashes, so `aria_label:` is `aria-label` |

Strokes and fills are `currentColor`, so size and colour come from CSS. An unknown name raises `DevignerIcons::UnknownIcon`.

## Accessibility

Icons render `aria-hidden="true"` by default, because an icon beside its own label is otherwise read out twice. Naming one promotes it to an image:

```erb
<%= devigner_icon "Add", aria_label: "Add item" %>
```

## Sponsors

<a href="https://icons.devigner.cc/docs/guide/sponsors/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://sponsors.devigner.cc/sponsors.svg?theme=dark">
    <img alt="Featured sponsors of Devigner Icons" src="https://sponsors.devigner.cc/sponsors.svg?theme=light">
  </picture>
</a>

Devigner Icons is free. [Become a sponsor](https://icons.devigner.cc/docs/guide/sponsors/) to show your logo here.

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
