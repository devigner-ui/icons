// Renders DvIcon with Blazor's own HtmlRenderer and asserts on the markup:
// the same checks the JavaScript packages run.
using Devigner.Icons.Blazor;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

await using var services = new ServiceCollection().AddLogging().BuildServiceProvider();
await using var renderer = new HtmlRenderer(services, services.GetRequiredService<ILoggerFactory>());

Task<string> Render(Dictionary<string, object?> parameters) =>
    renderer.Dispatcher.InvokeAsync(async () =>
        (await renderer.RenderComponentAsync<DvIcon>(ParameterView.FromDictionary(parameters))).ToHtmlString());

var checks = 0;
void Check(string what, bool ok)
{
    if (!ok) throw new Exception($"failed: {what}");
    checks++;
}

var outline = await Render(new() { ["Icon"] = DvIcons.AddCircle });
var bulk = await Render(new() { ["Icon"] = DvIcons.AddCircle, ["Variant"] = IconVariant.Bulk });
var weighed = await Render(new() { ["Icon"] = DvIcons.AddCircle, ["StrokeWidth"] = 2.0 });
var labelled = await Render(new() { ["Icon"] = DvIcons.AddCircle, ["aria-label"] = "Add" });
var classed = await Render(new() { ["Icon"] = DvIcons.Activity, ["class"] = "h-6 w-6" });
var bold = await Render(new() { ["Icon"] = DvIcons.Add, ["Variant"] = IconVariant.Bold });
var boldWeighed = await Render(new() { ["Icon"] = DvIcons.Add, ["Variant"] = IconVariant.Bold, ["StrokeWidth"] = 3.0 });

Check("an icon renders an <svg> with its artwork", outline.StartsWith("<svg") && outline.Contains("viewBox=\"0 0 24 24\"") && outline.Contains("<path"));
Check("the drawings are different", outline != bulk && bulk.Contains("fill=\"currentColor\"") && outline.Contains("stroke=\"currentColor\""));
Check("strokeWidth reaches outline", weighed.Contains("stroke-width=\"2\"") && !weighed.Contains("stroke-width=\"1.5\""));
Check("strokeWidth leaves Bold alone", bold == boldWeighed);
Check("decorative by default", outline.Contains("aria-hidden=\"true\"") && outline.Contains("focusable=\"false\""));
Check("an image once named", labelled.Contains("role=\"img\"") && !labelled.Contains("aria-hidden"));
Check("class falls through", classed.Contains("class=\"h-6 w-6\""));
Check("names starting with a digit are reachable", DvIcons._3dCube.Name == "3dCube");

Console.WriteLine($"ok  {checks} checks on the Blazor package");
