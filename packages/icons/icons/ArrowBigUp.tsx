import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowBigUp = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowBigUp(
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
            d="M9 11.5v4.39m.19 3.47q.34.68 1.04.99c.37.15.84.15 1.77.15s1.4 0 1.77-.15q.75-.33 1.08-1.08c.15-.37.15-.84.15-1.77v-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 11.5h.54c2.09 0 3.13 0 3.4-.6.28-.6-.44-1.32-1.86-2.75l-3.55-3.57C12.81 3.86 12.45 3.5 12 3.5s-.81.36-1.53 1.08L6.92 8.15C5.5 9.58 4.78 10.3 5.06 10.9c.27.6 1.31.6 3.4.6H9"
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
              d="M9 11.5v6c0 .93 0 1.4.15 1.77q.33.75 1.08 1.08c.37.15.84.15 1.77.15s1.4 0 1.77-.15q.75-.33 1.08-1.08c.15-.37.15-.84.15-1.77v-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 11.5h.54c2.09 0 3.13 0 3.4-.6.28-.6-.44-1.32-1.86-2.75l-3.55-3.57C12.81 3.86 12.45 3.5 12 3.5s-.81.36-1.53 1.08L6.92 8.15C5.5 9.58 4.78 10.3 5.06 10.9c.27.6 1.31.6 3.4.6H9"
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
              d="M9 11.5v6c0 .93 0 1.4.15 1.77q.33.75 1.08 1.08c.37.15.84.15 1.77.15s1.4 0 1.77-.15q.75-.33 1.08-1.08c.15-.37.15-.84.15-1.77v-6Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M15 11.5h.54c2.09 0 3.13 0 3.4-.6.28-.6-.44-1.32-1.86-2.75l-3.55-3.57C12.81 3.86 12.45 3.5 12 3.5s-.81.36-1.53 1.08L6.92 8.15C5.5 9.58 4.78 10.3 5.06 10.9c.27.6 1.31.6 3.4.6H9Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
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
              d="M9 11.5v6c0 .93 0 1.4.15 1.77q.33.75 1.08 1.08c.37.15.84.15 1.77.15s1.4 0 1.77-.15q.75-.33 1.08-1.08c.15-.37.15-.84.15-1.77v-6h.54c2.09 0 3.13 0 3.4-.6.28-.6-.44-1.32-1.86-2.75l-3.55-3.57C12.81 3.86 12.45 3.5 12 3.5s-.81.36-1.53 1.08L6.92 8.15C5.5 9.58 4.78 10.3 5.06 10.9c.27.6 1.31.6 3.4.6z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowBigUp;
