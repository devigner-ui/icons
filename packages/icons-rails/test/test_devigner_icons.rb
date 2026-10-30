# frozen_string_literal: true

# The same checks the JavaScript packages run, against the gem's own files.
require "minitest/autorun"
require "devigner_icons"

class TestDevignerIcons < Minitest::Test
  def test_renders_an_svg_with_its_artwork
    svg = DevignerIcons.svg("AddCircle")
    assert_match(/\A<svg[\s>]/, svg)
    assert_match(/viewBox="0 0 24 24"/, svg)
    assert_match(/<path/, svg)
  end

  def test_the_drawings_are_different
    bulk = DevignerIcons.svg("AddCircle", variant: :bulk)
    refute_equal DevignerIcons.svg("AddCircle"), bulk
    assert_match(/fill="currentColor"/, bulk)
  end

  def test_stroke_width_reaches_outline_and_leaves_bold_alone
    weighed = DevignerIcons.svg("AddCircle", stroke_width: 2)
    assert_match(/stroke-width="2"/, weighed)
    refute_match(/stroke-width="1.5"/, weighed)
    assert_equal DevignerIcons.svg("Add", variant: :bold), DevignerIcons.svg("Add", variant: :bold, stroke_width: 3)
  end

  def test_decorative_by_default_and_an_image_once_named
    assert_match(/aria-hidden="true"/, DevignerIcons.svg("Add"))
    named = DevignerIcons.svg("Add", aria_label: "Add item")
    assert_match(/role="img"/, named)
    assert_match(/aria-label="Add item"/, named)
    refute_match(/aria-hidden/, named)
  end

  def test_attributes_are_escaped
    assert_match(/class="&quot;&gt;&lt;script&gt;"/, DevignerIcons.svg("Add", class: '"><script>'))
  end

  def test_names_in_any_case
    assert_equal DevignerIcons.svg("BagStraps"), DevignerIcons.svg(:bag_straps)
    assert_equal DevignerIcons.svg("3dCube"), DevignerIcons.svg("3d-cube")
  end

  def test_unknown_names_and_paths_are_refused
    assert_raises(DevignerIcons::UnknownIcon) { DevignerIcons.svg("Nope") }
    assert_raises(DevignerIcons::UnknownIcon) { DevignerIcons.svg("../../../etc/passwd") }
    assert_raises(ArgumentError) { DevignerIcons.svg("Add", variant: :neon) }
  end

  def test_the_helper_returns_the_same_markup
    view = Object.new.extend(DevignerIcons::Helper)
    assert_equal DevignerIcons.svg("Add"), view.devigner_icon("Add").to_s
  end
end
