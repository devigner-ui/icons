<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/assets/logo/white.svg" />
  <img src=".github/assets/logo/black.svg" alt="Devigner Icons" width="350" height="60" />
</picture>

**Consistent, free, open-source icons for every framework you build with.**

10,560 drawings · 2,112 symbols · five styles · drawn on a 24×24 grid · all free

[![Website](https://img.shields.io/badge/Website-icons.devigner.cc-16161A?style=flat-square)](https://icons.devigner.cc)
[![npm](https://img.shields.io/npm/v/@devigner-ui/icons?style=flat-square&label=%40devigner-ui%2Ficons&color=CB3837)](https://www.npmjs.com/package/@devigner-ui/icons)
[![downloads](https://img.shields.io/npm/dm/@devigner-ui/icons?style=flat-square&label=downloads)](https://www.npmjs.com/package/@devigner-ui/icons)
[![license](https://img.shields.io/badge/License-MIT-3FA037?style=flat-square)](LICENSE)

[Browse icons →](https://icons.devigner.cc) · [Documentation →](packages/icons/README.md)

<img src=".github/assets/preview.svg" width="100%" alt="A grid of icons from the set" />

</div>

## Why Devigner Icons

Two open icon sets, merged, deduplicated and consistently named, then built for
every framework below from one set of artwork. One design language, wherever
you work.

- **10,560 drawings**: 2,112 symbols
- **Five styles each**: outline, twotone, bold, bulk and broken
- **Every framework**: React, Vue, Svelte, SolidJS, Angular, React Native, Flutter, Rails, Blazor, plain JavaScript and raw SVG
- **Semantic search data**: one 384-dim vector per symbol, as `embeddings.json`
- **TypeScript first**: every symbol a typed named export
- **Tree shakeable**: `sideEffects: false`, ship only what you import
- **No runtime dependencies**: React 18+ as a peer

## Packages

Pick your framework and install:

| Framework        | Package                                                                    | Latest                                                                                | Install                                                  |
| ---------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **React**        | [`@devigner-ui/icons`](packages/icons/README.md)                           | ![](https://img.shields.io/npm/v/@devigner-ui/icons?label=&color=2563eb)              | `npm i @devigner-ui/icons`                               |
| **Vue 3**        | [`@devigner-ui/icons-vue`](packages/icons-vue/README.md)                   | ![](https://img.shields.io/npm/v/@devigner-ui/icons-vue?label=&color=2563eb)          | `npm i @devigner-ui/icons-vue`                           |
| **Svelte**       | [`@devigner-ui/icons-svelte`](packages/icons-svelte/README.md)             | ![](https://img.shields.io/npm/v/@devigner-ui/icons-svelte?label=&color=2563eb)       | `npm i @devigner-ui/icons-svelte`                        |
| **React Native** | [`@devigner-ui/icons-react-native`](packages/icons-react-native/README.md) | ![](https://img.shields.io/npm/v/@devigner-ui/icons-react-native?label=&color=2563eb) | `npm i @devigner-ui/icons-react-native react-native-svg` |
| **SVG**          | [`@devigner-ui/icons-svg`](packages/icons-svg/README.md)                   | ![](https://img.shields.io/npm/v/@devigner-ui/icons-svg?label=&color=2563eb)          | `npm i @devigner-ui/icons-svg`                           |
| **SolidJS**      | [`@devigner-ui/icons-solid`](packages/icons-solid/README.md)               | ![](https://img.shields.io/npm/v/@devigner-ui/icons-solid?label=&color=2563eb)        | `npm i @devigner-ui/icons-solid`                         |
| **Angular**      | [`@devigner-ui/icons-angular`](packages/icons-angular/README.md)           | ![](https://img.shields.io/npm/v/@devigner-ui/icons-angular?label=&color=2563eb)      | `npm i @devigner-ui/icons-angular`                       |
| **Nuxt**         | [`@devigner-ui/icons-nuxt`](packages/icons-nuxt/README.md)                 | ![](https://img.shields.io/npm/v/@devigner-ui/icons-nuxt?label=&color=2563eb)         | `npx nuxi module add @devigner-ui/icons-nuxt`            |
| **JavaScript**   | [`@devigner-ui/icons-js`](packages/icons-js/README.md)                     | ![](https://img.shields.io/npm/v/@devigner-ui/icons-js?label=&color=2563eb)           | `npm i @devigner-ui/icons-js`                            |
| **MCP**          | [`@devigner-ui/icons-mcp`](packages/icons-mcp/README.md)                   | ![](https://img.shields.io/npm/v/@devigner-ui/icons-mcp?label=&color=2563eb)          | `npx -y @devigner-ui/icons-mcp`                          |
| **Rails**        | [`devigner_icons`](packages/icons-rails/README.md)                        | ![](https://img.shields.io/gem/v/devigner_icons?label=&color=2563eb)                  | `bundle add devigner_icons`                              |
| **Flutter**      | [`devigner_icons`](packages/icons-flutter/README.md)                      | ![](https://img.shields.io/pub/v/devigner_icons?label=&color=2563eb)                  | `flutter pub add devigner_icons`                         |
| **Blazor**       | [`Devigner.Icons.Blazor`](packages/icons-blazor/README.md)                | ![](https://img.shields.io/nuget/v/Devigner.Icons.Blazor?label=&color=2563eb)         | `dotnet add package Devigner.Icons.Blazor`               |

React needs 18+ and ships the `icons` CLI. Svelte covers 4 and 5, React Native
covers Expo, and Angular needs 16+. The Nuxt module auto-imports the Vue
package. Plain JavaScript gets SVG strings and elements, and the SVG package
covers everything else: CDN links, CSS and templates. The MCP server lets AI
coding tools search the set.

The non-React packages are generated from the **built React components**, not
re-parsed from source and not redrawn, so they cannot drift apart. Props are
spelled the way each framework spells them (`variant="bulk"` lowercase outside
React; `size` and `color` on React Native, which has no cascade to inherit from).

The Rails, Flutter and Blazor packages go to RubyGems, pub.dev and NuGet, at
the same version as `@devigner-ui/icons`, from the release workflow. Their
folders carry a private `package.json` so `pnpm build` writes their drawings;
`pnpm test` runs their own tests when Ruby, Flutter or .NET is on the PATH, and
skips them otherwise.

## Quick start

```tsx
import { IconShoppingCart } from "@devigner-ui/icons/ShoppingCart";
import { IconArrowRight } from "@devigner-ui/icons/ArrowRight";

function Header() {
  return (
    <nav>
      <IconArrowRight className="size-6" /> {/* outline */}
      <IconShoppingCart variant="TwoTone" className="size-6" /> {/* twotone */}
      <IconShoppingCart variant="Bold" className="size-6" /> {/* bold */}
    </nav>
  );
}
```

Strokes are `currentColor`, so colour comes from CSS. Size with `className`;
there is no `size` prop. The three props of its own are `className`, `variant`
(`"Outline" | "TwoTone" | "Bold" | "Bulk" | "Broken"`) and `strokeWidth`; everything else
an `<svg>` takes passes through. See the
[React package docs](packages/icons/README.md).

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

## Working on the repo

```bash
pnpm build   # every package, React first; every drawing kept
pnpm test    # verifies no component lost artwork, and the CLI still holds up
```

Releases go out from `main` through [changesets](.changeset/).

## Repository layout

| Path                          | What it is                                                                                         |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| `packages/icons`              | The React package, and the source of truth. `icons/` holds each symbol's five drawings as one `.tsx`. |
| `packages/icons-vue`          | Vue 3 build, generated from `packages/icons`.                                                      |
| `packages/icons-svelte`       | Svelte build, generated from `packages/icons`.                                                     |
| `packages/icons-react-native` | React Native build, generated from `packages/icons`.                                               |
| `packages/icons-svg`          | Raw `svg/<style>/<Name>.svg` files and one sprite per style.                                       |
| `packages/icons-solid`        | SolidJS build, generated from `packages/icons`.                                                    |
| `packages/icons-js`           | Icons as data plus `toSvg` and `createIcons`, generated from `packages/icons`.                     |
| `packages/icons-angular`      | One standalone Angular component over `icons-js`'s data.                                           |
| `packages/icons-nuxt`         | Nuxt module that auto-imports `icons-vue`.                                                         |
| `packages/icons-mcp`          | MCP server over the `icons` CLI, for AI coding tools.                                              |
| `packages/icons-rails`        | The `devigner_icons` gem: a view helper over generated SVG files.                                  |
| `packages/icons-flutter`      | The `devigner_icons` Dart package, drawn with flutter_svg.                                         |
| `packages/icons-blazor`       | The `Devigner.Icons.Blazor` NuGet package.                                                        |
| `packages/icons-pro`          | Licence-handling stub. Unpublished, unlocks nothing today.                                         |

## Community & contributing

- Browse, search and copy every icon at [icons.devigner.cc](https://icons.devigner.cc)
- Read the [React package docs](packages/icons/README.md)
- Report a bug or request an icon in [GitHub issues](https://github.com/devigner-ui/icons/issues)
- Ask a question or share an idea on [Discord](https://discord.gg/PSv2aFYhuC)

## Licensing and credits

All five styles of all 2,112 symbols are free, in every package.

The artwork is **not original work**. It comes from two open icon sets, merged
and rebuilt as components:

| Set                                                                        | Author     | Icons | Licence                                                   |
| -------------------------------------------------------------------------- | ---------- | ----- | --------------------------------------------------------- |
| [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736) | 480 Design | 1,055 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| [Iconsax](https://iconsax.io)                                              | Vuesax     | 908   | Free for personal and commercial use                      |

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

## License

Code MIT © Devigner. Artwork CC BY 4.0 (Solar Icon Set) and Iconsax; see
[LICENSE](LICENSE) and [ATTRIBUTION.md](ATTRIBUTION.md).
