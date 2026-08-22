import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagicpen = forwardRef<SVGSVGElement, IconProps>(function IconMagicpen(
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
            d="M4.17 20.5c.83.83 2.17.83 3 0l13-13a2.12 2.12 0 1 0-3-3l-13 13a2.1 2.1 0 0 0 0 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.68 8.99-3-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.17 2.44 1.5-.44-.44 1.5.44 1.5-1.5-.44-1.5.44.44-1.5L7.67 2z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.17 8.44 6.67 8l-.44 1.5.44 1.5-1.5-.44-1.5.44.44-1.5L3.67 8z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.17 13.44 1.5-.44-.44 1.5.44 1.5-1.5-.44-1.5.44.44-1.5-.44-1.5z"
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
            d="m20.17 7.5-1.49 1.49-3-3 1.49-1.49a2 2 0 0 1 1.5-.62 2.12 2.12 0 0 1 1.5 3.62"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.68 8.99 7.17 20.5a2.12 2.12 0 1 1-3-3L15.68 5.99z"
            fill="currentColor"
          />
          <path
            d="m10.62 3.5.41-1.39a.4.4 0 0 0-.09-.37.4.4 0 0 0-.38-.1l-1.4.41-1.38-.41a.4.4 0 0 0-.37.09q-.15.16-.1.37l.4 1.4-.4 1.39q-.05.2.09.37.16.15.37.09l1.4-.4 1.39.41.1.02a.4.4 0 0 0 .28-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
          <path
            d="m6.62 9.5.4-1.39a.4.4 0 0 0-.08-.37.4.4 0 0 0-.37-.09l-1.4.4-1.4-.41a.4.4 0 0 0-.36.09q-.15.16-.1.37l.4 1.4-.4 1.39q-.05.2.09.37.16.15.37.09l1.39-.41 1.39.41.1.01a.4.4 0 0 0 .28-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
          <path
            d="m21.62 14.5.41-1.39a.4.4 0 0 0-.09-.37.4.4 0 0 0-.37-.09l-1.39.41-1.39-.41a.4.4 0 0 0-.37.09q-.15.16-.09.37l.41 1.39-.41 1.39q-.05.2.09.37.16.15.37.09l1.39-.41 1.39.41.11.01a.4.4 0 0 0 .27-.11q.15-.16.09-.37z"
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
            d="m20.17 7.5-1.49 1.49-3-3 1.49-1.49a2 2 0 0 1 1.5-.62 2.12 2.12 0 0 1 1.5 3.62"
            fill="currentColor"
          />
          <path
            d="M17.98 9.7 7.17 20.5a2.12 2.12 0 1 1-3-3L14.98 6.7z"
            fill="currentColor"
          />
          <path
            d="m10.62 3.5.41-1.39a.4.4 0 0 0-.09-.37.4.4 0 0 0-.38-.1l-1.4.41-1.38-.41a.4.4 0 0 0-.37.09q-.15.16-.1.37l.4 1.4-.4 1.39q-.05.2.09.37.16.15.37.09l1.4-.4 1.39.41.1.02a.4.4 0 0 0 .28-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
          <path
            d="m6.62 9.5.4-1.39a.4.4 0 0 0-.08-.37.4.4 0 0 0-.37-.09l-1.4.4-1.4-.41a.4.4 0 0 0-.36.09q-.15.16-.1.37l.4 1.4-.4 1.39q-.05.2.09.37.16.15.37.09l1.39-.41 1.39.41.1.01a.4.4 0 0 0 .28-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
          <path
            d="m21.62 14.5.41-1.39a.4.4 0 0 0-.09-.37.4.4 0 0 0-.37-.09l-1.39.41-1.39-.41a.4.4 0 0 0-.37.09q-.15.16-.09.37l.41 1.39-.41 1.39q-.05.2.09.37.16.15.37.09l1.39-.41 1.39.41.11.01a.4.4 0 0 0 .27-.11q.15-.16.09-.37z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMagicpen;
