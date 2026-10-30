import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSkipPrevious = forwardRef<SVGSVGElement, IconProps>(
  function IconSkipPrevious(
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
        {variant === "Broken" ? (
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
            d="M8.14 8.54C6.71 9.75 6 10.68 6 12c0 1.87 1.43 2.97 4.3 5.16a39 39 0 0 0 4.39 2.92c2.86 1.63 4.29 2.45 5.57 1.55.66-.47 1.01-1.2 1.23-2.32m.35-3.48.05-.77q.2-3.06.01-6.12c-.24-3.77-.36-5.66-1.64-6.57-1.28-.9-2.71-.08-5.57 1.55q-1.12.64-2.1 1.27-1.18.78-2.29 1.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 5v15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>
        ) : !fill ? (
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
              d="M10.3 6.84C7.43 9.03 6 10.13 6 12s1.43 2.97 4.3 5.16a39 39 0 0 0 4.39 2.92c2.86 1.63 4.29 2.45 5.57 1.55s1.4-2.8 1.63-6.57a48 48 0 0 0 .01-6.12c-.24-3.77-.36-5.66-1.64-6.57-1.28-.9-2.71-.08-5.57 1.55q-1.12.64-2.1 1.27a40 40 0 0 0-2.29 1.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2 5v15"
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
              d="M10.7 6.84C7.83 9.03 6.4 10.13 6.4 12s1.43 2.97 4.3 5.16a39 39 0 0 0 4.39 2.92c2.86 1.63 4.29 2.45 5.57 1.55s1.4-2.8 1.63-6.57a48 48 0 0 0 .01-6.12c-.24-3.77-.36-5.66-1.64-6.57-1.28-.9-2.71-.08-5.57 1.55q-1.12.64-2.1 1.27a40 40 0 0 0-2.29 1.65"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.4 4.25a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75"
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
              d="M10.7 6.84C7.83 9.03 6.4 10.13 6.4 12s1.43 2.97 4.3 5.16a39 39 0 0 0 4.39 2.92c2.86 1.63 4.29 2.45 5.57 1.55s1.4-2.8 1.63-6.57a48 48 0 0 0 .01-6.12c-.24-3.77-.36-5.66-1.64-6.57-1.28-.9-2.71-.08-5.57 1.55q-1.12.64-2.1 1.27a40 40 0 0 0-2.29 1.65"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.4 4.25a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSkipPrevious;
