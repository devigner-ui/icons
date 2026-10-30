import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagicPen = forwardRef<SVGSVGElement, IconProps>(function IconMagicPen(
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
      {variant === "Broken" ? (
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
            d="M17.18 10.32 19.7 7.8a2.12 2.12 0 1 0-3-3l-13 13a2.12 2.12 0 1 0 3 3l8-8"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m18.21 9.29-3-3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m9.76 3.8.44 1.5-1.5-.44-1.5.44.44-1.5-.44-1.5 1.5.44"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m4.7 8.74 1.5-.44-.44 1.5.44 1.5-1.5-.44-1.5.44.44-1.5-.44-1.5z"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m18.64 14.8-.44-1.5 1.5.44 1.5-.44-.44 1.5.44 1.5-1.5-.44"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
            d="M3.67 20.8c.83.83 2.17.83 3 0l13-13a2.12 2.12 0 1 0-3-3l-13 13a2.1 2.1 0 0 0 0 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.18 9.29-3-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.67 2.74 1.5-.44-.44 1.5.44 1.5-1.5-.44-1.5.44.44-1.5-.44-1.5z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.67 8.74 1.5-.44-.44 1.5.44 1.5-1.5-.44-1.5.44.44-1.5-.44-1.5z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.67 13.74 1.5-.44-.44 1.5.44 1.5-1.5-.44-1.5.44.44-1.5-.44-1.5z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="m19.5 8.1-1.49 1.49-3-3L16.5 5.1a2 2 0 0 1 1.5-.62 2.12 2.12 0 0 1 1.5 3.62"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.01 9.59 6.5 21.1a2.12 2.12 0 1 1-3-3L15.01 6.59z"
            fill="currentColor"
          />
          <path
            d="m9.95 4.1.41-1.39a.4.4 0 0 0-.09-.37.4.4 0 0 0-.38-.1l-1.4.41-1.38-.41a.4.4 0 0 0-.37.09q-.15.16-.1.37l.4 1.4-.4 1.39q-.05.2.09.37.16.15.37.09l1.4-.4 1.39.41.1.02a.4.4 0 0 0 .28-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
          <path
            d="m5.95 10.1.4-1.39a.4.4 0 0 0-.08-.37.4.4 0 0 0-.37-.09l-1.4.4-1.4-.41a.4.4 0 0 0-.36.09q-.15.16-.1.37l.4 1.4-.4 1.39q-.05.2.09.37.16.15.37.09l1.39-.41 1.39.41.1.01a.4.4 0 0 0 .28-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
          <path
            d="m20.95 15.1.41-1.39a.4.4 0 0 0-.09-.37.4.4 0 0 0-.37-.09l-1.39.41-1.39-.41a.4.4 0 0 0-.37.09q-.15.16-.09.37l.41 1.39-.41 1.39q-.05.2.09.37.16.15.37.09l1.39-.41 1.39.41.11.01a.4.4 0 0 0 .27-.11q.15-.16.09-.37z"
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
            d="m19.5 8.1-1.49 1.49-3-3L16.5 5.1a2 2 0 0 1 1.5-.62 2.12 2.12 0 0 1 1.5 3.62"
            fill="currentColor"
          />
          <path
            d="M17.31 10.3 6.5 21.1a2.12 2.12 0 1 1-3-3L14.31 7.3z"
            fill="currentColor"
          />
          <path
            d="m9.95 4.1.41-1.39a.4.4 0 0 0-.09-.37.4.4 0 0 0-.38-.1l-1.4.41-1.38-.41a.4.4 0 0 0-.37.09q-.15.16-.1.37l.4 1.4-.4 1.39q-.05.2.09.37.16.15.37.09l1.4-.4 1.39.41.1.02a.4.4 0 0 0 .28-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
          <path
            d="m5.95 10.1.4-1.39a.4.4 0 0 0-.08-.37.4.4 0 0 0-.37-.09l-1.4.4-1.4-.41a.4.4 0 0 0-.36.09q-.15.16-.1.37l.4 1.4-.4 1.39q-.05.2.09.37.16.15.37.09l1.39-.41 1.39.41.1.01a.4.4 0 0 0 .28-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
          <path
            d="m20.95 15.1.41-1.39a.4.4 0 0 0-.09-.37.4.4 0 0 0-.37-.09l-1.39.41-1.39-.41a.4.4 0 0 0-.37.09q-.15.16-.09.37l.41 1.39-.41 1.39q-.05.2.09.37.16.15.37.09l1.39-.41 1.39.41.11.01a.4.4 0 0 0 .27-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMagicPen;
