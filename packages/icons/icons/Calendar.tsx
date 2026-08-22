import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendar = forwardRef<SVGSVGElement, IconProps>(function IconCalendar(
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
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12v2c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 4V2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 4V2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.5 9h19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path d="M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
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
            d="M6.94 2c.42 0 .75.32.75.72V4.2q1-.02 2.26-.02h4.02q1.26 0 2.26.02V2.72c0-.4.33-.72.75-.72s.75.32.75.72v1.53c1.45.11 2.4.38 3.1 1.05s.97 1.59 1.09 2.98L22 9H2v-.72c.12-1.4.4-2.3 1.1-2.98.7-.67 1.64-.94 3.09-1.05V2.72c0-.4.33-.72.75-.72"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 14v-2c0-.84 0-2.33-.02-3H2.01L2 12v2c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14"
            fill="currentColor"
          />
          <path d="M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path d="M8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
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
            d="M7.75 2.5a.75.75 0 1 0-1.5 0v1.58c-1.44.12-2.38.4-3.08 1.1-.7.69-.98 1.63-1.1 3.07h19.85c-.11-1.44-.4-2.38-1.1-3.08-.69-.7-1.63-.97-3.07-1.09V2.5a.75.75 0 0 0-1.5 0v1.51L14 4h-4l-2.25.01z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m2 12 .01-2.25H22V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14zm15 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCalendar;
