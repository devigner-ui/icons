import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignTopAttached = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignTopAttached(
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
            d="M19.26 5.1v8.19m0 3.5v.11c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1V5.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.26 5.1v6.8c0 1.5.64 2.1 2.23 2.1h1.04c1.59 0 2.23-.6 2.23-2.1V5.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 5h20"
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
              d="M19.26 5.1v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1V5.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.26 5.1v6.8c0 1.5.64 2.1 2.23 2.1h1.04c1.59 0 2.23-.6 2.23-2.1V5.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 5h20"
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
              d="M15.98 19.38h1.04c1.59 0 2.23-.6 2.23-2.12V5.38h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.48 14.38h1.04c1.59 0 2.23-.61 2.23-2.12V5.38h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12"
              fill="currentColor"
            />
            <path
              d="M21.25 6.12H2.75A.75.75 0 0 1 2 5.38c0-.41.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74"
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
              d="M15.98 19.38h1.04c1.59 0 2.23-.6 2.23-2.12V5.38h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12"
              fill="currentColor"
            />
            <path
              d="M7.48 14.38h1.04c1.59 0 2.23-.61 2.23-2.12V5.38h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12"
              fill="currentColor"
            />
            <path
              d="M21.25 6.12H2.75A.75.75 0 0 1 2 5.38c0-.41.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignTopAttached;
