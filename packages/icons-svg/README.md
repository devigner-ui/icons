# @devigner-ui/icons-svg

The artwork of [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons) as plain SVG files. 2,142 symbols in outline, twotone, bold and bulk: 8,568 drawings, no framework, no build step.

Use this when you are not in React: vanilla pages, a CDN `<img>`, a CSS background, a server-side template, a design tool.

## From a CDN

```html
<img
  src="https://cdn.jsdelivr.net/npm/@devigner-ui/icons-svg/svg/outline/Add.svg"
  alt=""
  width="24"
  height="24"
/>
```

In CSS, where you want the icon to follow the box rather than the text:

```css
.icon-add {
  width: 24px;
  height: 24px;
  background: url("https://cdn.jsdelivr.net/npm/@devigner-ui/icons-svg/svg/outline/Add.svg")
    center / contain no-repeat;
}
```

Paths are `svg/<style>/<Name>.svg`, where `<style>` is `outline`, `twotone`, `bold` or `bulk`, and `<Name>` is the icon name as it appears on [the site](https://icons.remidevigner.pro): `Add`, `ArrowLeft`, `ShoppingCart`.

## Colour and weight

Every drawing paints with `currentColor` and strokes at `1.5`, so inlined into a page it inherits colour from CSS:

```html
<span style="color: rebeccapurple">
  <!-- contents of svg/outline/Add.svg -->
</span>
```

Loaded through `<img>` or a CSS `background`, an SVG cannot see the page's colour; that is a browser rule, not a limitation here. Inline the markup, or bake a colour into a copy of the file.

## Sprites

`sprite/<style>.svg` holds every symbol in one file:

```html
<svg width="24" height="24"><use href="/sprite/outline.svg#Add" /></svg>
```

Two things to know before reaching for it:

- **It is ~1.4 MB per style.** That is the whole set. Loading it to use nine icons is worse than nine `<img>` tags.
- **`<use>` with an external file is same-origin.** Browsers block a cross-origin `href`, so a sprite served from a CDN will not render. Sprites are for self-hosting.

Build the sprite you actually want instead:

```bash
node scripts/build.mjs --only Add,ArrowLeft,ShoppingCart,User
```

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
