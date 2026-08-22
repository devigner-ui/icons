# @devigner-ui/icons-react-native

8,568 icons for React Native: 2,142 symbols, each in outline, twotone, bold and bulk. The same artwork as [`@devigner-ui/icons`](https://www.npmjs.com/package/@devigner-ui/icons), rendered from it rather than redrawn, so the two cannot drift.

```bash
pnpm add @devigner-ui/icons-react-native react-native-svg
```

`react-native-svg` is a peer dependency: every shape is one of its components. Expo ships it: `npx expo install react-native-svg`.

## Use

```jsx
import { IconAdd, IconShoppingCart } from "@devigner-ui/icons-react-native";

<IconAdd size={24} color="#16161a" />
<IconShoppingCart variant="bulk" size={32} color="#6d5cf5" />
```

Metro does not tree-shake, so importing from the barrel pulls the whole set into your bundle. Import the icon directly when that matters:

```jsx
import IconAdd from "@devigner-ui/icons-react-native/icons/Add";
```

## Props

| Prop | Type | Default | What it does |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "twotone" \| "bold" \| "bulk"` | `"outline"` | Which of the four drawings to render. |
| `size` | `number \| string` | `24` | Width and height, in points. |
| `color` | `string` | inherited | What `currentColor` resolves to. |
| `strokeWidth` | `number \| string` | `1.5` | Stroke width, in the drawing's own units. Outline and twotone only; bold and bulk are filled forms with no strokes to weigh. |

Everything else is passed to `<Svg>`, so `style`, `onPress`, `testID` and the accessibility props all work.

### `color`, not CSS

On the web these icons paint with `currentColor` and inherit their colour from the cascade. React Native has no cascade, so `color` is that inheritance made explicit: it is handed to `<Svg>`, and `react-native-svg` resolves `currentColor` against it.

A few drawings are 25×24 rather than square. `size` sets both dimensions and the drawing letterboxes inside them rather than stretching.

## Accessibility

Icons are decorative by default: they render `accessibilityElementsHidden` and `importantForAccessibility="no-hide-descendants"`, because an icon beside its own text label is otherwise announced twice. Naming one promotes it to an image:

```jsx
<IconAdd accessibilityLabel="Add item" />
```

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
