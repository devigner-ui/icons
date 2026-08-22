import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserCheckRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconUserCheckRounded(
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
            <circle
              cx="12"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.58 20.44c-1.04.35-2.27.56-3.58.56-3.87 0-7-1.79-7-4s3.13-4 7-4c2.6 0 4.88.82 6.09 2.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m18 18.5 1 1 2-2.5"
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
            <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 22c-1.65 0-2.47 0-2.99-.51-.51-.51-.51-1.34-.51-2.99s0-2.47.51-2.99c.52-.5 1.34-.5 2.99-.5s2.47 0 2.99.5c.51.52.51 1.34.51 2.99s0 2.48-.51 2.99c-.52.51-1.34.51-2.99.51m1.97-4.25a.58.58 0 0 0-.83-.83l-1.92 1.92-.36-.36a.58.58 0 1 0-.83.82l.78.78c.23.23.6.23.82 0z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.1 15.03q-.63-.04-1.6-.03c-1.65 0-2.47 0-2.99.51-.51.52-.51 1.34-.51 2.99 0 1.17 0 1.92.18 2.44Q12.61 21 12 21c-3.87 0-7-1.79-7-4s3.13-4 7-4c2.61 0 4.9.82 6.1 2.03"
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
            <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.47 16.41c.32.26.37.74.12 1.06l-2 2.5a.75.75 0 0 1-1.12.06l-1-1a.75.75 0 1 1 1.06-1.06l.4.4 1.48-1.84a.75.75 0 0 1 1.06-.12"
              fill="currentColor"
            />
            <path
              d="m18.83 16.11-.19.23a2.25 2.25 0 0 0-2.23 3.75l.01.01c-1.2.56-2.74.9-4.42.9-3.87 0-7-1.79-7-4s3.13-4 7-4c3.33 0 6.12 1.33 6.83 3.11"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserCheckRounded;
