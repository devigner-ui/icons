// The same checks the JavaScript packages run, plus the widget itself.
import 'package:devigner_icons/devigner_icons.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  final outline = DevignerIcons.addCircle.svg();
  final bulk = DevignerIcons.addCircle.svg(DevignerIconVariant.bulk);

  test('an icon is a complete <svg> with its artwork', () {
    expect(outline, startsWith('<svg'));
    expect(outline, contains('viewBox="0 0 24 24"'));
    expect(outline, contains('<path'));
  });

  test('the drawings are different', () {
    expect(bulk, isNot(outline));
    expect(bulk, contains('fill="currentColor"'));
    expect(outline, contains('stroke="currentColor"'));
  });

  test('strokeWidth reaches outline and leaves bold alone', () {
    final weighed = DevignerIcons.addCircle.svg(DevignerIconVariant.outline, 2);
    expect(weighed, contains('stroke-width="2.0"'));
    expect(weighed, isNot(contains('stroke-width="1.5"')));
    expect(
      DevignerIcons.add.svg(DevignerIconVariant.bold, 3),
      DevignerIcons.add.svg(DevignerIconVariant.bold),
    );
  });

  test('names that are not Dart identifiers are still reachable', () {
    expect(DevignerIcons.$3dCube.name, '3dCube');
  });

  testWidgets('the widget draws at the theme size and hides when unnamed', (tester) async {
    await tester.pumpWidget(
      const Directionality(
        textDirection: TextDirection.ltr,
        child: IconTheme(
          data: IconThemeData(size: 32, color: Color(0xFF6D5CF5)),
          child: Center(child: DevignerIcon(DevignerIcons.bagStraps)),
        ),
      ),
    );
    final picture = tester.widget<SvgPicture>(find.byType(SvgPicture));
    expect(picture.width, 32);
    expect(find.byType(ExcludeSemantics), findsOneWidget);
  });

  testWidgets('a semantic label makes it an image', (tester) async {
    final handle = tester.ensureSemantics();
    await tester.pumpWidget(
      const Directionality(
        textDirection: TextDirection.ltr,
        child: Center(child: DevignerIcon(DevignerIcons.add, semanticLabel: 'Add item')),
      ),
    );
    expect(find.bySemanticsLabel('Add item'), findsOneWidget);
    handle.dispose();
  });
}
