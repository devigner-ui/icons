import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// Which of an icon's five drawings to render.
enum DevignerIconVariant { outline, twotone, bold, bulk, broken }

/// The styles [DevignerIcon.strokeWidth] reaches, as in every other package.
const _weighed = {
  DevignerIconVariant.outline,
  DevignerIconVariant.twotone,
  DevignerIconVariant.broken,
};

final _strokeWidth = RegExp(r'stroke-width="[^"]*"');

/// One icon: the inner markup of each of its drawings. Get one from
/// [DevignerIcons].
@immutable
class DevignerIconData {
  const DevignerIconData(
    this.name,
    this.outline,
    this.twotone,
    this.bold,
    this.bulk,
    this.broken,
  );

  /// The icon's name, as on icons.devigner.cc: `BagStraps`.
  final String name;
  final String outline;
  final String twotone;
  final String bold;
  final String bulk;
  final String broken;

  /// The drawing as a complete `<svg>` document, painted in `currentColor`.
  String svg([
    DevignerIconVariant variant = DevignerIconVariant.outline,
    double? strokeWidth,
  ]) {
    var inner = switch (variant) {
      DevignerIconVariant.outline => outline,
      DevignerIconVariant.twotone => twotone,
      DevignerIconVariant.bold => bold,
      DevignerIconVariant.bulk => bulk,
      DevignerIconVariant.broken => broken,
    };
    if (strokeWidth != null && _weighed.contains(variant)) {
      inner = inner.replaceAll(_strokeWidth, 'stroke-width="$strokeWidth"');
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" '
        'viewBox="0 0 24 24" fill="none">$inner</svg>';
  }
}

/// Draws one icon. Size and colour follow the ambient [IconTheme] unless
/// given, the way Flutter's own [Icon] does.
class DevignerIcon extends StatelessWidget {
  const DevignerIcon(
    this.icon, {
    super.key,
    this.variant = DevignerIconVariant.outline,
    this.size,
    this.color,
    this.strokeWidth,
    this.semanticLabel,
  });

  final DevignerIconData icon;
  final DevignerIconVariant variant;
  final double? size;
  final Color? color;

  /// Line weight of outline, twotone and broken, in the 24px drawing's units.
  final double? strokeWidth;

  /// Read out by screen readers. Without one the icon is decorative and
  /// left out of the semantics tree, as an icon beside its own label should be.
  final String? semanticLabel;

  @override
  Widget build(BuildContext context) {
    final theme = IconTheme.of(context);
    final side = size ?? theme.size ?? 24;
    final picture = SvgPicture.string(
      icon.svg(variant, strokeWidth),
      width: side,
      height: side,
      theme: SvgTheme(currentColor: color ?? theme.color ?? const Color(0xFF000000)),
    );
    final label = semanticLabel;
    return label == null
        ? ExcludeSemantics(child: picture)
        : Semantics(label: label, image: true, child: picture);
  }
}
