import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChandelier = forwardRef<SVGSVGElement, IconProps>(
  function IconChandelier(
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
              d="M9 4h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 11.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2V13a3 3 0 1 1-6 0z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 4v12.5m0 0a3.5 3.5 0 1 0 7 0v-.06m-7 .06a3.5 3.5 0 1 1-7 0v-.06"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 10.86a.86.86 0 0 0-.86-.86H2.86a.86.86 0 0 0-.86.86V13a3 3 0 1 0 6 0z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.25 4.75V16.5a2.75 2.75 0 1 1-5.5 0v-.6h-1.5v.6A4.25 4.25 0 0 0 12 18.91a4.25 4.25 0 0 0 7.75-2.41v-.6h-1.5v.6a2.75 2.75 0 1 1-5.5 0V4.75z"
              fill="currentColor"
            />
            <path
              d="M9 3.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M16 13a3 3 0 0 0 2.25 2.9h1.5A3 3 0 0 0 22 13v-1.8c0-.66-.54-1.2-1.2-1.2h-3.6c-.66 0-1.2.54-1.2 1.2z"
              fill="currentColor"
            />
            <path
              d="M2 13a3 3 0 0 0 2.25 2.9h1.5A3 3 0 0 0 8 13v-2.14a.86.86 0 0 0-.86-.86H2.86a.86.86 0 0 0-.86.86z"
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
              d="M8.25 4c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-2.25V16.5a2.75 2.75 0 1 0 5.5 0v-.6A3 3 0 0 1 16 13v-1.8c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2V13a3 3 0 0 1-2.25 2.9v.6A4.25 4.25 0 0 1 12 18.91a4.25 4.25 0 0 1-7.75-2.41v-.6A3 3 0 0 1 2 13v-2.14c0-.48.38-.86.86-.86h4.28c.48 0 .86.38.86.86V13a3 3 0 0 1-2.25 2.9v.6a2.75 2.75 0 1 0 5.5 0V4.75H9A.75.75 0 0 1 8.25 4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChandelier;
