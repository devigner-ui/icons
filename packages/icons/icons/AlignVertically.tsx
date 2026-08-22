import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignVertically = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignVertically(
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
              d="M18.07 19.25H7.27c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.07 10.75h-6.8c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22v-2.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 13v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 2v2.69"
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
              d="M18.07 19.25H7.27c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23"
              fill="currentColor"
            />
            <path
              d="M13.42 19.25v2c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2z"
              fill="currentColor"
            />
            <path d="M13.42 10.75h-1.5v3h1.5z" fill="currentColor" />
            <path
              d="M13.42 2.75v2.5h-1.5v-2.5c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.07 10.75h-6.8c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23"
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
              d="M18.07 19.25H7.27c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23"
              fill="currentColor"
            />
            <path
              d="M13.42 19.25v2c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2z"
              fill="currentColor"
            />
            <path d="M13.42 10.75h-1.5v3h1.5z" fill="currentColor" />
            <path
              d="M13.42 2.75v2.5h-1.5v-2.5c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M16.07 10.75h-6.8c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignVertically;
