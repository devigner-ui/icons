import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMultipleForwardRight = forwardRef<SVGSVGElement, IconProps>(
  function IconMultipleForwardRight(
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
              d="m12.66 5.48 3.98 3.53c1.57 1.4 2.35 2.1 2.35 2.99s-.78 1.6-2.35 2.99l-3.98 3.53c-.71.64-1.07.96-1.36.82-.3-.13-.3-.6-.3-1.57v-2.34c-3.6 0-7.5 1.71-9 4.57 0-9.14 5.33-11.43 9-11.43V6.23c0-.96 0-1.44.3-1.57.29-.14.65.18 1.36.82"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.54 4.5 5.21 4.84a3.9 3.9 0 0 1-.12 5.83l-5.1 4.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="m12.33 5.18 4.98 4.43c.93.83 1.4 1.24 1.57 1.73a2 2 0 0 1 0 1.32c-.17.5-.64.9-1.57 1.73l-4.98 4.43c-.42.37-.63.56-.81.57a.5.5 0 0 1-.4-.19c-.12-.13-.12-.42-.12-.98v-2.8c-2.43 0-5 .79-6.87 2.17-.97.72-1.46 1.08-1.64 1.07a.5.5 0 0 1-.4-.24c-.09-.16 0-.66.17-1.65 1.1-6.47 5.55-8.2 8.74-8.2V5.78c0-.56 0-.85.11-.98a.5.5 0 0 1 .4-.19c.19.01.4.2.82.57"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.99 3.99a.75.75 0 0 1 1.06-.04l5.22 4.84a4.65 4.65 0 0 1-.15 6.95l-5.1 4.33a.75.75 0 0 1-.97-1.14l5.1-4.33a3.15 3.15 0 0 0 .1-4.7l-5.22-4.85a.75.75 0 0 1-.04-1.06"
                fill="currentColor"
              />
            </g>
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
              d="m12.33 5.18 4.98 4.43c.93.83 1.4 1.24 1.57 1.73a2 2 0 0 1 0 1.32c-.17.5-.64.9-1.57 1.73l-4.98 4.43c-.42.37-.63.56-.81.57a.5.5 0 0 1-.4-.19c-.12-.13-.12-.42-.12-.98v-2.8c-2.43 0-5 .79-6.87 2.17-.97.72-1.46 1.08-1.64 1.07a.5.5 0 0 1-.4-.24c-.09-.16 0-.66.17-1.65 1.1-6.47 5.55-8.2 8.74-8.2V5.78c0-.56 0-.85.11-.98a.5.5 0 0 1 .4-.19c.19.01.4.2.82.57"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.99 3.99a.75.75 0 0 1 1.06-.04l5.22 4.84a4.65 4.65 0 0 1-.15 6.95l-5.1 4.33a.75.75 0 0 1-.97-1.14l5.1-4.33a3.15 3.15 0 0 0 .1-4.7l-5.22-4.85a.75.75 0 0 1-.04-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMultipleForwardRight;
