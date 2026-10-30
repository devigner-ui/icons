import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  inject,
} from "@angular/core";
import type { IconData, IconStyle } from "@devigner-ui/icons-js";

/** The styles strokeWidth reaches, as in @devigner-ui/icons. */
const WEIGHED = new Set<IconStyle>(["outline", "twotone", "broken"]);

/**
 * Draws one icon into the <svg> it sits on:
 *
 *   <svg [dvIcon]="IconBagStraps" variant="bold" class="size-6"></svg>
 *
 * An attribute on the consumer's own <svg> rather than a wrapper element, so
 * class, style and aria attributes land on the element that draws, with no
 * extra box in the layout.
 *
 * The drawing is built element by element through the renderer. An
 * [innerHTML] binding would have Angular's sanitizer strip the SVG, and
 * innerHTML on the element is not implemented on the server platform, so a
 * prerendered page would ship empty icons.
 */
@Component({
  selector: "svg[dvIcon]",
  standalone: true,
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { focusable: "false" },
})
export class DvIcon implements OnChanges {
  /** The icon to draw: an `Icon*` export of this package. */
  @Input({ required: true }) dvIcon!: IconData;
  /** Which drawing to render. Defaults to "outline". */
  @Input() variant: IconStyle = "outline";
  /** Line weight of outline, twotone and broken, in the drawing's units. */
  @Input() strokeWidth?: string | number;

  private readonly el = inject<ElementRef<SVGSVGElement>>(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);

  ngOnChanges(): void {
    const { attrs, inner } = this.dvIcon[this.variant] ?? this.dvIcon.outline;
    /* A static input (variant="bold") is also left on the element as an
       attribute; it means nothing to an <svg>, so it goes. */
    this.renderer.removeAttribute(this.el, "variant");
    this.renderer.removeAttribute(this.el, "strokeWidth");
    for (const [key, value] of Object.entries(attrs)) {
      if (key !== "xmlns") this.renderer.setAttribute(this.el, key, value);
    }

    /* Decorative by default, as in every package: an icon beside its own
       label is otherwise read out twice. Naming it makes it an image. */
    const named = this.el.hasAttribute("aria-label") || this.el.hasAttribute("aria-labelledby");
    if (named) {
      this.renderer.setAttribute(this.el, "role", "img");
      this.renderer.removeAttribute(this.el, "aria-hidden");
    } else {
      this.renderer.setAttribute(this.el, "aria-hidden", "true");
    }

    const html =
      this.strokeWidth == null || !WEIGHED.has(this.variant)
        ? inner
        : inner.replace(/stroke-width="[^"]*"/g, `stroke-width="${this.strokeWidth}"`);
    for (const child of Array.from(this.el.childNodes)) this.renderer.removeChild(this.el, child);
    this.draw(html);
  }

  /*
   * The markup is generated from the React package, so it is only ever
   * elements with quoted attributes: no text, comments or scripts. That is
   * what lets a tag-by-tag walk stand in for a parser.
   */
  private draw(html: string): void {
    const open: Element[] = [this.el];
    for (const [, close, name, attrs, selfClosing] of html.matchAll(TAG)) {
      if (close) {
        open.pop();
        continue;
      }
      const node = this.renderer.createElement(name, "svg");
      for (const [, key, value] of attrs.matchAll(ATTR)) {
        this.renderer.setAttribute(node, key, decode(value));
      }
      this.renderer.appendChild(open[open.length - 1], node);
      if (!selfClosing) open.push(node);
    }
  }
}

const TAG = /<(\/)?([\w:-]+)([^>]*?)(\/)?>/g;
const ATTR = /([\w:-]+)="([^"]*)"/g;
const decode = (value: string) =>
  value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
