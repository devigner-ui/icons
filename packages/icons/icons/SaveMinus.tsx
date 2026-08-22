import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSaveMinus = forwardRef<SVGSVGElement, IconProps>(
  function IconSaveMinus(
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
              d="M16.67 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19a1.8 1.8 0 0 0-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.69-2.06V8.99c0-1.71-1.4-3.11-3.11-3.11H8.67v-.77C8.67 3.4 10.07 2 11.78 2h7.78c1.71 0 3.11 1.4 3.11 3.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 12h4"
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
              d="M16.67 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19a1.8 1.8 0 0 0-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11"
              fill="currentColor"
            />
            <path
              d="M22.67 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.69-2.06V8.99c0-1.71-1.4-3.11-3.11-3.11H8.67v-.77C8.67 3.4 10.07 2 11.78 2h7.78c1.71 0 3.11 1.4 3.11 3.11"
              fill="currentColor"
            />
            <path
              d="M11.67 12.75h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M22.67 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36l-1.93-1.08a.5.5 0 0 1-.26-.44V8.99a4.6 4.6 0 0 0-4.61-4.61H9.49c-.37 0-.63-.39-.46-.71A3.1 3.1 0 0 1 11.78 2h7.78c1.71 0 3.11 1.4 3.11 3.11"
              fill="currentColor"
            />
            <path
              d="M13.56 5.88H5.78a3.1 3.1 0 0 0-3.11 3.11v11.36c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11m-1.89 6.87h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSaveMinus;
