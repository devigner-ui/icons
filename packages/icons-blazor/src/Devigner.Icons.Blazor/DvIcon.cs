using System.Globalization;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Devigner.Icons.Blazor;

/// <summary>Which of an icon's five drawings to render.</summary>
public enum IconVariant
{
    /// <summary>Line drawing. The default.</summary>
    Outline,
    /// <summary>Line drawing, secondary parts at 40%.</summary>
    TwoTone,
    /// <summary>A heavier form of the same glyph.</summary>
    Bold,
    /// <summary>Bold, secondary parts at 40%.</summary>
    Bulk,
    /// <summary>The outline opened by small gaps.</summary>
    Broken,
}

/// <summary>One icon: the inner markup of each drawing. Get one from <see cref="DvIcons"/>.</summary>
public sealed record IconData(string Name, string Outline, string TwoTone, string Bold, string Bulk, string Broken)
{
    internal string For(IconVariant variant) => variant switch
    {
        IconVariant.TwoTone => TwoTone,
        IconVariant.Bold => Bold,
        IconVariant.Bulk => Bulk,
        IconVariant.Broken => Broken,
        _ => Outline,
    };
}

/// <summary>
/// Draws one icon as an inline &lt;svg&gt;:
/// <c>&lt;DvIcon Icon="DvIcons.BagStraps" Variant="IconVariant.Bold" class="size-6" /&gt;</c>.
/// Any other attribute (class, style, @onclick, aria-label) lands on the &lt;svg&gt;.
/// </summary>
public sealed partial class DvIcon : ComponentBase
{
    /// <summary>The icon to draw.</summary>
    [Parameter, EditorRequired] public IconData Icon { get; set; } = default!;

    /// <summary>Which drawing to render. Defaults to Outline.</summary>
    [Parameter] public IconVariant Variant { get; set; } = IconVariant.Outline;

    /// <summary>Line weight of Outline, TwoTone and Broken, in the drawing's units.</summary>
    [Parameter] public double? StrokeWidth { get; set; }

    /// <summary>Everything else, passed to the &lt;svg&gt;.</summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public IReadOnlyDictionary<string, object>? AdditionalAttributes { get; set; }

    [GeneratedRegex("stroke-width=\"[^\"]*\"")]
    private static partial Regex StrokeWidthAttribute();

    /// <inheritdoc />
    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        var inner = Icon.For(Variant);
        // Only the linework styles take it, as in every other package.
        if (StrokeWidth is { } width && Variant is IconVariant.Outline or IconVariant.TwoTone or IconVariant.Broken)
        {
            var value = width.ToString(CultureInfo.InvariantCulture);
            inner = StrokeWidthAttribute().Replace(inner, $"stroke-width=\"{value}\"");
        }

        // Decorative unless named: an icon beside its own label is otherwise
        // read out twice.
        var named = AdditionalAttributes is { } extra
            && (extra.ContainsKey("aria-label") || extra.ContainsKey("aria-labelledby"));

        builder.OpenElement(0, "svg");
        builder.AddAttribute(1, "width", "24");
        builder.AddAttribute(2, "height", "24");
        builder.AddAttribute(3, "viewBox", "0 0 24 24");
        builder.AddAttribute(4, "fill", "none");
        builder.AddAttribute(5, "focusable", "false");
        builder.AddAttribute(6, named ? "role" : "aria-hidden", named ? "img" : "true");
        builder.AddMultipleAttributes(7, AdditionalAttributes);
        // Generated from the React package at build time, never from input.
        builder.AddMarkupContent(8, inner);
        builder.CloseElement();
    }
}
