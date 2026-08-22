import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardTick = forwardRef<SVGSVGElement, IconProps>(function IconCardTick(
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
            d="M2.67 8.5h11.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.67 16.5h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.17 16.5h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 11.03v5.08c0 3.51-.89 4.39-4.44 4.39H7.11c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h7.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.17 6 1.5 1.5 4-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 7.77V9h-20V7.54A4.14 4.14 0 0 1 6.82 3.4h9.85v2.57c0 1.27.76 2.03 2.03 2.03h2.94q.6 0 1.03-.23"
            fill="currentColor"
          />
          <path
            d="M2.67 9v7.46a4.14 4.14 0 0 0 4.15 4.14h11.7a4.14 4.14 0 0 0 4.15-4.14V9zm6 8.25h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 0h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M21.64 1H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.03c0-1.27-.76-2.03-2.03-2.03m.66 2.45-2.37 2.77a.5.5 0 0 1-.37.18h-.02a.5.5 0 0 1-.37-.15l-1.1-1.08a.5.5 0 0 1 0-.73c.2-.2.53-.21.73 0l.7.69 2-2.34a.5.5 0 0 1 .73-.06.5.5 0 0 1 .07.72"
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
            d="M2.67 11.46v5a4.14 4.14 0 0 0 4.14 4.14h11.71a4.15 4.15 0 0 0 4.15-4.15v-4.99a1.2 1.2 0 0 0-1.2-1.21H3.87a1.2 1.2 0 0 0-1.2 1.21m6 5.79h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 0h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M14.17 4.61v2.93a1.2 1.2 0 0 1-1.2 1.21h-9.1c-.68 0-1.2-.56-1.2-1.23A4.15 4.15 0 0 1 6.8 3.4h6.15c.67 0 1.21.54 1.21 1.21"
            fill="currentColor"
          />
          <path
            d="M20.64 2H17.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V4.03c0-1.27-.76-2.03-2.03-2.03m.66 2.45-2.37 2.77a.5.5 0 0 1-.37.18h-.02a.5.5 0 0 1-.37-.15l-1.1-1.08a.5.5 0 0 1 0-.73c.2-.2.53-.21.73 0l.7.69 2-2.34a.5.5 0 0 1 .73-.06.5.5 0 0 1 .07.72"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCardTick;
