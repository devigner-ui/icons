import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBootstrap = forwardRef<SVGSVGElement, IconProps>(
  function IconBootstrap(
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
            d="M7 3a3 3 0 0 0-3 3v.84Q4 8 3.63 9.1A2.8 2.8 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9Q4 16 4 17.16V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.84q0-1.16.37-2.26A2.8 2.8 0 0 1 23 13v-2a2.8 2.8 0 0 1-2.63-1.9A7 7 0 0 1 20 6.84V6a3 3 0 0 0-3-3h-4.75"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.75 12h2.92a2.08 2.08 0 1 1 0 4.16H9.75V7.83h2.92a2.08 2.08 0 1 1 0 4.16z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="M17 3H7a3 3 0 0 0-3 3v.84Q4 8 3.63 9.1A2.8 2.8 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9Q4 16 4 17.16V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.84q0-1.16.37-2.26A2.8 2.8 0 0 1 23 13v-2a2.8 2.8 0 0 1-2.63-1.9A7 7 0 0 1 20 6.84V6a3 3 0 0 0-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.75 12h2.92a2.08 2.08 0 1 1 0 4.16H9.75V7.83h2.92a2.08 2.08 0 1 1 0 4.16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M24 0H0v24h24z"
              fill="none"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 3H7a3 3 0 0 0-3 3v.84Q4 8 3.63 9.1A2.8 2.8 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9Q4 16 4 17.16V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.84q0-1.16.37-2.26A2.8 2.8 0 0 1 23 13v-2a2.8 2.8 0 0 1-2.63-1.9A7 7 0 0 1 20 6.84V6a3 3 0 0 0-3-3"
              fill="currentColor"
            />
            <path
              d="M12.67 16.92H9.75a.76.76 0 0 1-.75-.75V7.84c0-.41.34-.75.75-.75h2.92A2.83 2.83 0 0 1 14.58 12a2.84 2.84 0 0 1-1.91 4.92m-2.17-1.5h2.17a1.33 1.33 0 1 0 0-2.66H10.5zm0-4.17h2.17a1.33 1.33 0 1 0 0-2.66H10.5z"
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
              d="M12.67 12.75H10.5v2.67h2.17c.74 0 1.33-.6 1.33-1.33s-.6-1.34-1.33-1.34"
              fill="currentColor"
            />
            <path
              d="M12.67 8.58H10.5v2.67h2.17c.74 0 1.33-.6 1.33-1.33s-.6-1.34-1.33-1.34"
              fill="currentColor"
            />
            <path
              d="M23 11a2.8 2.8 0 0 1-2.63-1.9A7 7 0 0 1 20 6.83V6a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v.84Q4 8 3.63 9.11A2.8 2.8 0 0 1 1 11.01v2c1.19 0 2.25.76 2.63 1.9q.37 1.1.37 2.26V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.84q0-1.16.37-2.26A2.8 2.8 0 0 1 23 13zm-7.5 3.08a2.83 2.83 0 0 1-2.83 2.83H9.75a.76.76 0 0 1-.75-.75V7.83c0-.41.34-.75.75-.75h2.92a2.83 2.83 0 0 1 1.91 4.91c.57.53.92 1.27.92 2.09"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBootstrap;
