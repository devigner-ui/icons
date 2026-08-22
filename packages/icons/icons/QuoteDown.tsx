import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconQuoteDown = forwardRef<SVGSVGElement, IconProps>(
  function IconQuoteDown(
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
              d="M22.67 11.65h-5.8a2.5 2.5 0 0 1-2.58-2.58V5.85a2.5 2.5 0 0 1 2.58-2.58h3.22a2.6 2.6 0 0 1 2.58 2.58z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 11.65c0 6.05-1.13 7.05-4.53 9.07"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.04 11.65h-5.8a2.5 2.5 0 0 1-2.58-2.58V5.85a2.5 2.5 0 0 1 2.58-2.58h3.23a2.6 2.6 0 0 1 2.58 2.58z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.04 11.65c0 6.05-1.13 7.05-4.53 9.07"
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
              d="M16.58 12.37h4.7c-.09 4.67-1 5.44-3.88 7.14a.7.7 0 1 0 .72 1.2c3.38-2 4.56-3.22 4.56-9.04V6.28a3.1 3.1 0 0 0-3.09-3.09h-3a3 3 0 0 0-3.09 3.09v3a3 3 0 0 0 3.08 3.09"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.76 12.37h4.7c-.09 4.67-1 5.44-3.88 7.14a.7.7 0 1 0 .72 1.2c3.38-2 4.56-3.22 4.56-9.04V6.28a3.1 3.1 0 0 0-3.09-3.09h-3a3 3 0 0 0-3.09 3.09v3a3 3 0 0 0 3.08 3.09"
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
              d="M16.58 12.37h4.7c-.09 4.67-1 5.44-3.88 7.14a.7.7 0 1 0 .72 1.2c3.38-2 4.56-3.22 4.56-9.04V6.28a3.1 3.1 0 0 0-3.09-3.09h-3a3 3 0 0 0-3.09 3.09v3a3 3 0 0 0 3.08 3.09"
              fill="currentColor"
            />
            <path
              d="M5.76 12.37h4.7c-.09 4.67-1 5.44-3.88 7.14a.7.7 0 1 0 .72 1.2c3.38-2 4.56-3.22 4.56-9.04V6.28a3.1 3.1 0 0 0-3.09-3.09h-3a3.03 3.03 0 0 0-3.1 3.09v3a3 3 0 0 0 3.1 3.09"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconQuoteDown;
