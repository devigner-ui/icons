# Attribution

Devigner Icons is a free, open-source icon set. The **artwork is not original
work**: it is derived from two existing open icon sets, merged, deduplicated,
renamed and rebuilt as React components. This file records where every drawing
came from and what each upstream set asks of you in return.

If you ship these icons, you inherit these obligations. They are light, but
they are real.

## The two upstream sets

| Set | Author | Icons here | Licence |
| --- | --- | --- | --- |
| [Iconsax](https://iconsax.io) | [Vuesax](https://vuesax.com) | 908 | Free for personal and commercial use |
| [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736) | [480 Design](https://www.figma.com/@480design) | 1,055 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |

The two are distinguishable in this repository by their coordinate system:
Iconsax drawings sit in a `0 0 25 24` viewBox, Solar drawings in `0 0 24 24`.

```bash
# Which set is a given icon from?
grep -o 'viewBox="[^"]*"' packages/icons/icons/ShoppingCart.tsx | head -1
# 0 0 25 24  -> Iconsax
# 0 0 24 24  -> Solar Icon Set
```

## What Solar's CC BY 4.0 requires of you

The Solar-derived icons are the larger half of this set, and CC BY 4.0 is an
attribution licence. Using them, including in a commercial or closed-source
product, is free, but you must credit the original author. The licence asks
for the creator's name, a link to the licence, and an indication that changes
were made.

A credit line that satisfies it:

> Icons from [Devigner Icons](https://icons.remidevigner.pro), derived from
> [Solar Icon Set](https://www.figma.com/community/file/1166831539721848736) by
> 480 Design, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/),
> and [Iconsax](https://iconsax.io) by Vuesax. Modified.

Put it wherever you keep third-party notices: an about page, a credits screen,
a `NOTICE` file, an open-source-licences list. It does not have to be visible
on every page that draws an icon.

CC BY 4.0 is not a copyleft licence: it does not require you to open-source
your own project, and it does not stop you from selling what you build.

## What was changed

Neither set is shipped as it was published. The modifications, which CC BY 4.0
requires be indicated:

- **Merged.** Two sets combined into one namespace, with overlapping symbols
  deduplicated.
- **Renamed.** Names normalised to a single `PascalCase` scheme and exported as
  `Icon<Name>`. Upstream names were not always preserved.
- **Rebuilt as components.** Each symbol's separate style files were collapsed
  into one React component with `fill` and `duotone` props selecting between
  four drawings.
- **Recoloured.** Fixed fills and strokes replaced with `currentColor` so
  colour comes from CSS.
- **Restroked.** Stroke width lifted to a `width` prop.
- **Annotated.** Categories, tags, descriptions and 384-dimension search
  embeddings generated for each icon. That metadata is original work.

## Brand and trademark icons

Roughly 35 icons in this set reproduce third-party logos and wordmarks: Apple,
Google, Figma, Slack, Spotify, YouTube, PayPal, Windows, Adobe products, and
around two dozen cryptocurrency marks.

**These are not licensed by this project, and no licence in this repository
grants you any right to them.** Trademarks belong to their respective owners
and are governed by each owner's brand guidelines, not by CC BY, MIT, or
anything else here. Using a company's logo to refer to that company is
generally acceptable; using it to imply endorsement, or as part of your own
branding, is generally not. Check the owner's terms before shipping one.

## The code

Everything that is not artwork (the React wrappers, the CLI, the build scripts,
the type definitions, the website and the documentation) is original work, MIT
licensed. See [LICENSE](LICENSE).

## Corrections

If you are one of the upstream authors and something here is wrong (a miscount,
a wrong licence, a set credited that should not be, or a request to be removed),
write to hello@remidevigner.pro and it will be fixed or the artwork pulled.
