import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFilter = forwardRef<SVGSVGElement, IconProps>(function IconFilter(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

  /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
  const labelled =
    rest["aria-label"] != null || rest["aria-labelledby"] != null;
  const a11y: SVGProps<SVGSVGElement> = labelled
    ? { role: "img" }
    : { "aria-hidden": true };

  return (
    <>
      {!fill ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="M22 5.81v.7c0 1.03 0 1.55-.26 1.98s-.73.7-1.68 1.23l-2.91 1.64a8 8 0 0 0-1.19.74q-.7.6-.9 1.49c-.06.28-.06.62-.06 1.28v2.67c0 1.91 0 2.87-.67 3.28-.67.42-1.6.05-3.48-.68-.9-.35-1.35-.52-1.6-.88-.25-.35-.25-.8-.25-1.72v-2.67c0-.66 0-1-.06-1.28a2.7 2.7 0 0 0-.9-1.5c-.23-.19-.55-.37-1.18-.73L3.94 9.72C3 9.2 2.52 8.92 2.26 8.5S2 7.54 2 6.5v-.69"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 5.81c0-1.32 0-1.99-.44-2.4S20.41 3 19 3H5c-1.41 0-2.12 0-2.56.41S2 4.5 2 5.81"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </svg>
      ) : duotone ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 3h14L8.82 13.18a3 3 0 0 0-.78-1.08 8 8 0 0 0-1.18-.74L3.94 9.72C3 9.2 2.52 8.92 2.26 8.5S2 7.54 2 6.5v-.69c0-1.32 0-1.99.44-2.4S3.59 3 5 3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 6.5v-.69c0-1.32 0-1.99-.44-2.4S20.41 3 19 3L8.82 13.18l.12.4c.06.3.06.63.06 1.3v2.66c0 .91 0 1.37.25 1.72.25.36.7.53 1.6.88 1.87.73 2.81 1.1 3.48.68.67-.41.67-1.37.67-3.28v-2.67c0-.66 0-1 .06-1.28q.2-.88.9-1.5c.23-.19.55-.37 1.18-.73l2.92-1.64c.95-.53 1.42-.8 1.68-1.23S22 7.54 22 6.5"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="M19 3H5c-1.41 0-2.12 0-2.56.41S2 4.5 2 5.81v.7c0 1.03 0 1.55.26 1.98s.73.7 1.68 1.23l2.92 1.64c.63.36.95.54 1.18.74q.7.6.9 1.49c.06.28.06.62.06 1.28v2.67c0 .91 0 1.37.25 1.72.25.36.7.53 1.6.88 1.87.73 2.81 1.1 3.48.68.67-.41.67-1.37.67-3.28v-2.67c0-.66 0-1 .06-1.28q.2-.88.9-1.5c.23-.19.55-.37 1.18-.73l2.92-1.64c.95-.53 1.42-.8 1.68-1.23S22 7.54 22 6.5v-.69c0-1.32 0-1.99-.44-2.4S20.41 3 19 3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFilter;
