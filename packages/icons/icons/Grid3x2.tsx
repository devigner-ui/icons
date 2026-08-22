import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGrid3x2 = forwardRef<SVGSVGElement, IconProps>(function IconGrid3x2(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2.67 12h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.92 12v9.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.42 22V12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.92 12V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.42 12V2.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M22.67 7.81V12h-6.25V2h.44c3.64 0 5.81 2.17 5.81 5.81"
            fill="currentColor"
          />
          <path
            d="M22.67 12v4.19c0 3.64-2.17 5.81-5.81 5.81h-.44V12z"
            fill="currentColor"
          />
          <path
            d="M8.92 12v10h-.44c-3.64 0-5.81-2.17-5.81-5.81V12z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.48 2C4.84 2 2.67 4.17 2.67 7.81V12h6.25V2z"
            fill="currentColor"
          />
          <path d="M16.42 2h-7.5v10h7.5z" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.42 12h-7.5v10h7.5z"
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
            d="M22.67 7.81v3.44h-5.25V2.03c3.3.2 5.25 2.33 5.25 5.78"
            fill="currentColor"
          />
          <path
            d="M22.67 12.75v3.44c0 3.45-1.95 5.58-5.25 5.78v-9.22z"
            fill="currentColor"
          />
          <path
            d="M7.92 12.75v9.22c-3.3-.2-5.25-2.33-5.25-5.78v-3.44z"
            fill="currentColor"
          />
          <path
            d="M7.92 2.03v9.22H2.67V7.81c0-3.45 1.95-5.58 5.25-5.78"
            fill="currentColor"
          />
          <path d="M15.92 2h-6.5v9.25h6.5z" fill="currentColor" />
          <path d="M15.92 12.75h-6.5V22h6.5z" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconGrid3x2;
