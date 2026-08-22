import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUsersGroupRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconUsersGroupRounded(
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
              cx="9"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.5 4.34a3 3 0 1 1 0 3.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <ellipse
              cx="9"
              cy="17.0005"
              rx="7"
              ry="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 14c1.75.39 3 1.36 3 2.5 0 1.03-1.01 1.92-2.5 2.37"
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="15"
              cy="6.00049"
              r="3"
              fill="currentColor"
            />
            <ellipse
              opacity={duotone ? "0.4" : "1"}
              cx="16"
              cy="17.0005"
              rx="5"
              ry="3"
              fill="currentColor"
            />
            <circle cx="9.00098" cy="6.00049" r="4" fill="currentColor" />
            <ellipse
              cx="9.00098"
              cy="17.0015"
              rx="7"
              ry="4"
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
            <circle cx="9.00098" cy="6.00049" r="4" fill="currentColor" />
            <ellipse
              cx="9.00098"
              cy="17.0015"
              rx="7"
              ry="4"
              fill="currentColor"
            />
            <path
              d="M21 17c0 1.66-2.04 3-4.52 3a4.4 4.4 0 0 0 1.23-3c0-1.2-.5-2.2-1.23-3 2.48 0 4.52 1.34 4.52 3"
              fill="currentColor"
            />
            <path
              d="M18 6a3 3 0 0 1-4.03 2.82 5.7 5.7 0 0 0 0-5.64A3 3 0 0 1 18 6"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUsersGroupRounded;
