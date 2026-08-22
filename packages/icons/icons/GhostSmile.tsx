import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGhostSmile = forwardRef<SVGSVGElement, IconProps>(
  function IconGhostSmile(
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
              d="M9 15a5 5 0 0 0 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="9.5" rx="1" ry="1.5" fill="currentColor" />
            <ellipse cx="9" cy="9.5" rx="1" ry="1.5" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 19.72V12.3C22 6.61 17.52 2 12 2S2 6.61 2 12.3v7.42c0 1.33 1.35 2.19 2.5 1.6a2.8 2.8 0 0 1 2.9.18 2.8 2.8 0 0 0 3.2 0l.36-.24a1.8 1.8 0 0 1 2.08 0l.36.24a2.8 2.8 0 0 0 3.2 0c.87-.6 1.97-.66 2.9-.19 1.15.6 2.5-.26 2.5-1.59"
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
              opacity={duotone ? "0.4" : "1"}
              d="M22 12v7.2a1.73 1.73 0 0 1-2.5 1.55 2.9 2.9 0 0 0-2.9.18 2.9 2.9 0 0 1-3.2 0l-.36-.23a1.9 1.9 0 0 0-2.08 0l-.36.23a2.9 2.9 0 0 1-3.2 0 2.9 2.9 0 0 0-2.9-.18A1.73 1.73 0 0 1 2 19.21V12a10 10 0 1 1 20 0"
              fill="currentColor"
            />
            <path
              d="M9.45 14.4a.75.75 0 1 0-.9 1.2 5.8 5.8 0 0 0 6.9 0 .75.75 0 1 0-.9-1.2 4.3 4.3 0 0 1-5.1 0"
              fill="currentColor"
            />
            <path
              d="M16 9.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="M9 11c.55 0 1-.67 1-1.5S9.55 8 9 8s-1 .67-1 1.5.45 1.5 1 1.5"
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
              d="M22 12v7.2a1.73 1.73 0 0 1-2.5 1.55 2.9 2.9 0 0 0-2.9.18 2.9 2.9 0 0 1-3.2 0l-.36-.23a1.9 1.9 0 0 0-2.08 0l-.36.23a2.9 2.9 0 0 1-3.2 0 2.9 2.9 0 0 0-2.9-.18A1.73 1.73 0 0 1 2 19.21V12a10 10 0 1 1 20 0M9.45 14.4a.75.75 0 1 0-.9 1.2 5.8 5.8 0 0 0 6.9 0 .75.75 0 1 0-.9-1.2 4.3 4.3 0 0 1-5.1 0M16 9.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5M9 11c.55 0 1-.67 1-1.5S9.55 8 9 8s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGhostSmile;
