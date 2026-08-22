<script>
  /*
   * The one component behind all 1,963 icons. Each generated wrapper hands this
   * its own four drawings, so the per-icon files carry artwork and nothing
   * else, which is what keeps them tree-shakeable and what stops 1,963 copies
   * of this logic existing.
   *
   * The children arrive as markup rather than elements. Authoring them as
   * markup would mean a second representation of the same drawing to keep in
   * step; `{@html}` takes exactly the string the React package renders, and
   * that string is generated from that package rather than authored here, so
   * there is nothing for a user to inject into.
   *
   * `export let` rather than runes: this compiles under Svelte 4 and Svelte 5
   * alike, and an icon set is not the place to force a consumer's major
   * version.
   */
  export let drawings;
  export let variant = "outline";
  /** Stroke width, in the drawing's own units. Outline and twotone only. */
  export let strokeWidth = null;

  $: drawing = drawings[variant] ?? drawings.outline;

  /* Replaced only when asked for: the default is already baked in at 1.5. */
  $: inner =
    strokeWidth == null
      ? drawing.inner
      : drawing.inner.replace(
          /stroke-width="[^"]*"/g,
          `stroke-width="${strokeWidth}"`,
        );

  /* Decorative by default, the same rule the React components follow: an icon
     beside its own text label is read out twice otherwise. Naming it with
     aria-label or aria-labelledby promotes it to an image. */
  $: labelled =
    $$restProps["aria-label"] != null || $$restProps["aria-labelledby"] != null;
</script>

<svg
  {...drawing.attrs}
  focusable="false"
  role={labelled ? "img" : undefined}
  aria-hidden={labelled ? undefined : "true"}
  {...$$restProps}
>
  {@html inner}
</svg>
