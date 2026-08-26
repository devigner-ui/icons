<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/assets/logo/white.svg" />
  <img src=".github/assets/logo/black.svg" alt="Devigner Icons" width="280" />
</picture>

**Consistent, free, open-source icons for every framework you build with.**

8,580 icons · 2,145 symbols · 4 styles each · drawn on a 24×24 grid, all free.

[![Website](https://img.shields.io/badge/Website-icons.remidevigner.pro-16161A?style=flat-square)](https://icons.remidevigner.pro)
[![npm](https://img.shields.io/npm/v/@devigner-ui/icons?style=flat-square&label=%40devigner-ui%2Ficons&color=CB3837)](https://www.npmjs.com/package/@devigner-ui/icons)
[![downloads](https://img.shields.io/npm/dm/@devigner-ui/icons?style=flat-square&label=downloads)](https://www.npmjs.com/package/@devigner-ui/icons)
[![license](https://img.shields.io/badge/License-MIT-3FA037?style=flat-square)](LICENSE)

[Browse icons →](https://icons.remidevigner.pro) · [Documentation →](packages/icons/README.md) · [Attribution →](ATTRIBUTION.md)

<img src=".github/assets/preview.svg" width="100%" alt="A grid of icons from the set" />

</div>

## Why Devigner Icons

Two open icon sets, merged, deduplicated and consistently named, then rebuilt as
components for five targets from one set of artwork. One design language,
wherever you work.

- 🎨 **8,580 icons**: 2,145 symbols
- 🎯 **4 drawings each**: outline, twotone, bold and bulk, free on every symbol
- 🧩 **Five targets**: React, Vue 3, Svelte, React Native and raw SVG
- 🔍 **Semantic search data**: one 384-dim vector per symbol, as `embeddings.json`
- 📝 **TypeScript first**: every symbol a typed named export
- ⚡ **Tree shakeable**: `sideEffects: false`, ship only what you import
- 📦 **No runtime dependencies**: React 18+ as a peer
- 🌱 **Always growing**: new icons added regularly

Artwork built on [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736)
and [Iconsax](https://iconsax.io); see [ATTRIBUTION.md](ATTRIBUTION.md).

## Packages

Pick your framework and install:

| Framework | Package | Latest | Install |
| --- | --- | --- | --- |
| **React** | [`@devigner-ui/icons`](packages/icons/README.md) | ![](https://img.shields.io/npm/v/@devigner-ui/icons?label=&color=2563eb) | `npm i @devigner-ui/icons` |
| **Vue 3** | [`@devigner-ui/icons-vue`](packages/icons-vue/README.md) | ![](https://img.shields.io/npm/v/@devigner-ui/icons-vue?label=&color=2563eb) | `npm i @devigner-ui/icons-vue` |
| **Svelte** | [`@devigner-ui/icons-svelte`](packages/icons-svelte/README.md) | ![](https://img.shields.io/npm/v/@devigner-ui/icons-svelte?label=&color=2563eb) | `npm i @devigner-ui/icons-svelte` |
| **React Native** | [`@devigner-ui/icons-react-native`](packages/icons-react-native/README.md) | ![](https://img.shields.io/npm/v/@devigner-ui/icons-react-native?label=&color=2563eb) | `npm i @devigner-ui/icons-react-native react-native-svg` |
| **SVG** | [`@devigner-ui/icons-svg`](packages/icons-svg/README.md) | ![](https://img.shields.io/npm/v/@devigner-ui/icons-svg?label=&color=2563eb) | `npm i @devigner-ui/icons-svg` |

React needs 18+ and ships the `icons` CLI; Svelte covers 4 and 5; React Native
covers Expo; the SVG package is for everything else (CDN, CSS, templates).

The four non-React packages are generated from the **built React components**, not
re-parsed from source and not redrawn, so the five cannot drift apart. Props are
spelled the way each framework spells them (`variant="bulk"` lowercase outside
React; `size` and `color` on React Native, which has no cascade to inherit from).

## Quick start

```tsx
import { IconShoppingCart, IconArrowRight } from '@devigner-ui/icons';

function Header() {
  return (
    <nav>
      <IconArrowRight className="size-6" />                    {/* outline */}
      <IconShoppingCart variant="TwoTone" className="size-6" />   {/* twotone */}
      <IconShoppingCart variant="Bold" className="size-6" />      {/* bold */}
    </nav>
  );
}
```

Strokes are `currentColor`, so colour comes from CSS. Size with `className`;
there is no `size` prop. The three props of its own are `className`, `variant`
(`"Outline" | "TwoTone" | "Bold" | "Bulk"`) and `strokeWidth`; everything else
an `<svg>` takes passes through. See
[packages/icons/README.md](packages/icons/README.md).

## CLI

The React package ships one executable, `icons`, with no dependencies of its own:

```bash
npx @devigner-ui/icons search "upload progress"
npx @devigner-ui/icons copy ShoppingCart --format=svg
npx @devigner-ui/icons list --category=shopping
```

`search` ranks against the shipped `embeddings.json`. Embedding the query needs
`@xenova/transformers`, which is not a dependency; without it, search falls
back to keyword matching and says so. `--keyword` asks for that directly.

`copy --format=svg` renders the installed React component rather than keeping a
second copy of the artwork, so the two cannot drift apart.

## Licensing and credits

All four styles of all 2,145 symbols are free, in every package. Bulk used to be
sold on 1,682 of them and stripped from the free build; that gate is gone, and
there is one build now.

The artwork is **not original work**. It comes from two open icon sets, merged
and rebuilt as components:

| Set | Author | Icons | Licence |
| --- | --- | --- | --- |
| [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736) | 480 Design | 1,055 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| [Iconsax](https://iconsax.io) | Vuesax | 908 | Free for personal and commercial use |

CC BY 4.0 asks for credit, so shipping these icons means carrying a line like
this wherever you keep third-party notices:

> Icons from Devigner Icons, derived from Solar Icon Set by 480 Design
> (CC BY 4.0) and Iconsax by Vuesax. Modified.

It does not require you to open source your own project. The code around the
artwork (components, CLI, search) is MIT. Full detail, including the
trademark caveat on the ~35 brand logos in the set, is in
[ATTRIBUTION.md](ATTRIBUTION.md).

Pro is planned as animated icons: new artwork, sold separately. Nothing in this
set moves behind a gate when they arrive.

## Working on the repo

```bash
pnpm build   # every package, React first; every drawing kept
pnpm test    # verifies no component lost artwork, and the CLI still holds up
```

Releases go out from `main` through [changesets](.changeset/).

## Repository layout

| Path | What it is |
| --- | --- |
| `packages/icons` | The React package, and the source of truth. `icons/` holds all four drawings per symbol as `.tsx`. |
| `packages/icons-vue` | Vue 3 build, generated from `packages/icons`. |
| `packages/icons-svelte` | Svelte build, generated from `packages/icons`. |
| `packages/icons-react-native` | React Native build (`react-native-svg` peer), generated from `packages/icons`. |
| `packages/icons-svg` | Raw `svg/<style>/<Name>.svg` files and one sprite per style. |
| `packages/icons-pro` | Licence-handling stub. Unpublished, unlocks nothing today. |

## Community & contributing

- Browse and search every icon at [icons.remidevigner.pro](https://icons.remidevigner.pro) — copy-paste TSX or SVG, per-icon pages
- Read the package docs in [packages/icons/README.md](packages/icons/README.md)
- Found a bug or have a request? [Open an issue](https://github.com/devigner-ui/icons/issues)
- Questions and ideas are always welcome

## License

Code MIT © Devigner. Artwork CC BY 4.0 (Solar Icon Set) and Iconsax; see
[LICENSE](LICENSE) and [ATTRIBUTION.md](ATTRIBUTION.md).
