# devigner_icons

10,560 drawings for Flutter: 2,112 symbols, each in outline, twotone, bold, bulk and broken. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn. Drawn with [flutter_svg](https://pub.dev/packages/flutter_svg).

```bash
flutter pub add devigner_icons
```

## Use

```dart
import 'package:devigner_icons/devigner_icons.dart';

const DevignerIcon(DevignerIcons.bagStraps)
const DevignerIcon(
  DevignerIcons.bagStraps,
  variant: DevignerIconVariant.bold,
  size: 32,
  color: Color(0xFF6D5CF5),
)
```

Like Flutter's own `Icon`, size and colour follow the ambient `IconTheme` unless you give them.

Names are the icon's name in lower camel case: `BagStraps` is `bagStraps`. A name that starts with a digit gets a `$` in front (`$3dCube`); one that is a Dart keyword gets one after.

## Options

| Option | Default | What it does |
| --- | --- | --- |
| `variant` | `outline` | `outline`, `twotone`, `bold`, `bulk` or `broken` |
| `size` | `IconTheme` size, else 24 | Width and height |
| `color` | `IconTheme` colour | The icon's colour |
| `strokeWidth` | `1.5` | Line weight of outline, twotone and broken |
| `semanticLabel` | none | Read out by screen readers |

`DevignerIcons.bagStraps.svg(variant)` gives the drawing as an SVG string, for anything that is not a widget.

## Accessibility

Without a `semanticLabel` an icon is left out of the semantics tree, because an icon beside its own label is otherwise read out twice. With one, it is announced as an image.

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
