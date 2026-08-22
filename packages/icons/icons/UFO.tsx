import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUFO = forwardRef<SVGSVGElement, IconProps>(function IconUFO(
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
            opacity={duotone ? "0.4" : "1"}
            d="m5.5 15.5-1 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.5 15.5 1 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 8.21c2.99.72 5 2.07 5 3.62 0 2.3-4.48 4.17-10 4.17S2 14.13 2 11.83c0-1.55 2.01-2.9 5-3.62"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 8.73A4.73 4.73 0 0 1 11.73 4h.54A4.73 4.73 0 0 1 17 8.73q.01.28-.2.45c-.41.29-1.61.82-4.8.82s-4.39-.53-4.8-.82q-.21-.16-.2-.45"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 16v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="13"
            r="1"
            fill="currentColor"
          />
          <circle cx="7" cy="12" r="1" fill="currentColor" />
          <circle cx="17" cy="12" r="1" fill="currentColor" />
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
            d="M5.67 8.6C3.43 9.35 2 10.51 2 11.82c0 1.2 1.23 2.3 3.2 3.05L3.86 17.1a.75.75 0 1 0 1.28.78l1.5-2.5.02-.03c1.35.35 2.91.58 4.59.63V19a.75.75 0 0 0 1.5 0v-3.01c1.68-.05 3.24-.28 4.59-.63l.02.03 1.5 2.5a.75.75 0 1 0 1.28-.78l-1.33-2.23c1.96-.76 3.19-1.85 3.19-3.05 0-1.3-1.43-2.47-3.67-3.24a2 2 0 0 1-.67.82c-.8.55-2.36 1.09-5.66 1.09s-4.87-.54-5.66-1.09a2 2 0 0 1-.67-.82M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m11-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.06 8c.34-2.26 2.3-4 4.67-4h.54a4.7 4.7 0 0 1 4.68 4 .4.4 0 0 1-.15.18c-.4.29-1.6.82-4.8.82s-4.39-.53-4.8-.82a.4.4 0 0 1-.14-.17"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.67 8.6C3.43 9.35 2 10.51 2 11.82c0 1.2 1.23 2.3 3.2 3.05L3.86 17.1a.75.75 0 0 0 1.28.78l1.5-2.5.02-.03c1.35.35 2.91.58 4.59.63V19a.75.75 0 0 0 1.5 0v-3.01a21 21 0 0 0 4.59-.63l.02.03 1.5 2.5a.75.75 0 1 0 1.28-.78l-1.33-2.23c1.96-.76 3.19-1.85 3.19-3.05 0-1.3-1.43-2.47-3.67-3.24a2 2 0 0 1-.67.82c-.8.55-2.36 1.09-5.66 1.09s-4.87-.54-5.66-1.09a2 2 0 0 1-.67-.82M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m11-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M7.05 8c.35-2.26 2.31-4 4.68-4h.54a4.7 4.7 0 0 1 4.68 4 .4.4 0 0 1-.15.18c-.41.29-1.61.82-4.8.82s-4.39-.53-4.8-.82a.4.4 0 0 1-.15-.17"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUFO;
