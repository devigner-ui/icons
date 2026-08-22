import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBarChart = forwardRef<SVGSVGElement, IconProps>(function IconBarChart(
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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 22v-7.5c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 22V5c0-1.41 0-2.12-.44-2.56S13.41 2 12 2s-2.12 0-2.56.44S9 3.59 9 5v17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 22V9.5C9 8.67 8.33 8 7.5 8h-3C3.67 8 3 8.67 3 9.5V22"
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
            d="M14 20.5V4.25c0-.73 0-1.2-.05-1.55-.04-.32-.11-.42-.17-.48s-.16-.13-.48-.17C12.95 2 12.48 2 11.75 2s-1.2 0-1.55.05c-.32.04-.42.11-.48.17s-.13.16-.17.48c-.05.35-.05.82-.05 1.55V20.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M8 8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H8z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H20z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M1.75 20.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"
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
            d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.73 0-1.2-.05-1.55-.04-.32-.11-.42-.17-.48s-.16-.13-.48-.17C12.95 2 12.48 2 11.75 2s-1.2 0-1.55.05c-.32.04-.42.11-.48.17s-.13.16-.17.48c-.05.35-.05.82-.05 1.55V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBarChart;
