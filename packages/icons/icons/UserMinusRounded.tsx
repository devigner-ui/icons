import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserMinusRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconUserMinusRounded(
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
              d="M20.41 18.5H17.6"
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
            <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.51 21.49c.52.51 1.34.51 2.99.51s2.47 0 2.99-.51c.51-.51.51-1.34.51-2.99s0-2.47-.51-2.99c-.52-.5-1.34-.5-2.99-.5s-2.47 0-2.99.5c-.51.52-.51 1.34-.51 2.99s0 2.48.51 2.99m2.4-3.57h-.97a.58.58 0 1 0 0 1.16h3.12a.58.58 0 1 0 0-1.16z"
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
              d="M16.84 18.5c0-.41.33-.75.75-.75h2.82a.75.75 0 0 1 0 1.5H17.6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M18.88 16.25h-1.3a2.25 2.25 0 0 0-1.44 3.98c-1.16.48-2.59.77-4.14.77-3.87 0-7-1.79-7-4s3.13-4 7-4c3.42 0 6.26 1.4 6.88 3.25"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserMinusRounded;
