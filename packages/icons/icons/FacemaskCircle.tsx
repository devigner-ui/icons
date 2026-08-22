import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFacemaskCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconFacemaskCircle(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16.5 20.5 17 15l-3.14-1.26a5 5 0 0 0-3.72 0L7 15l.5 5.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m7 15-4.5-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17 15 4.5-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
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
              d="M22 12.2V12a10 10 0 1 0-20 .39l5 1.8 2.87-1.14a5.8 5.8 0 0 1 4.28 0L17 14.19z"
              fill="currentColor"
            />
            <path
              d="M10 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5S8.45 9 9 9s1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="M16 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="m15.77 21.27.44-5.78-2.63-1.05a4.3 4.3 0 0 0-3.16 0L7.8 15.49l.44 5.78a10 10 0 0 0 7.54 0"
              fill="currentColor"
            />
            <path
              d="m21.82 13.88-4.1 1.64-.39 4.94a10 10 0 0 0 4.5-6.58"
              fill="currentColor"
            />
            <path
              d="m6.67 20.46-.38-4.92-4.08-1.48a10 10 0 0 0 4.46 6.4"
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
              d="m21.82 13.88-4.1 1.64-.39 4.94a10 10 0 0 0 4.5-6.58"
              fill="currentColor"
            />
            <path
              d="m15.77 21.27.44-5.78-2.63-1.05a4.3 4.3 0 0 0-3.16 0L7.8 15.49l.44 5.78a10 10 0 0 0 7.54 0"
              fill="currentColor"
            />
            <path
              d="m6.67 20.46-.38-4.92-4.08-1.48a10 10 0 0 0 4.46 6.4"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12.2V12a10 10 0 1 0-20 .39l5 1.8 2.87-1.14a5.8 5.8 0 0 1 4.28 0L17 14.19zm-6-1.7c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5M9 12c.55 0 1-.67 1-1.5S9.55 9 9 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFacemaskCircle;
