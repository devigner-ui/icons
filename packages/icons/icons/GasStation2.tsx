import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGasStation2 = forwardRef<SVGSVGElement, IconProps>(
  function IconGasStation2(
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
              d="M4.17 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 22h17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.06 10h4.23c1.04 0 1.89-.5 1.89-1.89V6.88c0-1.39-.85-1.89-1.89-1.89H9.06c-1.04 0-1.89.5-1.89 1.89v1.23c0 1.39.85 1.89 1.89 1.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.17 13h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m18.17 16.01 4.5-.01v-6l-2-1"
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
              d="M4.17 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17z"
              fill="currentColor"
            />
            <path
              d="M19.67 22.75h-17a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.56 10h5.23c1.04 0 1.89-.5 1.89-1.89V6.88C15.67 5.5 14.82 5 13.78 5H8.55c-1.03 0-1.88.5-1.88 1.89v1.23c0 1.38.85 1.88 1.89 1.88"
              fill="currentColor"
            />
            <path
              d="M10.17 13.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M23.42 10v6c0 .41-.33.75-.75.75l-4.5.01v-1.5l3.75-.01v-4.79l-1.59-.79A.74.74 0 0 1 20 8.66a.76.76 0 0 1 1.01-.33l2 1c.25.13.41.39.41.67"
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
              d="m23.01 9.33-2-1a.76.76 0 0 0-1.01.33.74.74 0 0 0 .33 1.01l1.59.79v4.79l-3.75.01V5c0-2-1.34-3-3-3h-8c-1.66 0-3 1-3 3v16.25h-1.5a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h17c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-1.5v-4.49l4.5-.01c.42 0 .75-.34.75-.75v-6a.8.8 0 0 0-.41-.67M6.67 6.89C6.67 5.5 7.52 5 8.56 5h5.23c1.03 0 1.88.5 1.88 1.89v1.23c0 1.38-.85 1.88-1.89 1.88H8.56c-1.04 0-1.89-.5-1.89-1.89zm.5 5.36h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGasStation2;
