import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserMinus = forwardRef<SVGSVGElement, IconProps>(
  function IconUserMinus(
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
              cx="10"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 17.5c0 2.49 0 4.5-8 4.5s-8-2.01-8-4.5c0-2.48 3.58-4.5 8-4.5s8 2.02 8 4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M21 10h-4"
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
            <path d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.48 21.92Q13.39 22 12 22c-8 0-8-2.01-8-4.5 0-2.48 3.58-4.5 8-4.5 2.88 0 5.4.86 6.81 2.14C18.3 15 17.57 15 16.5 15c-1.65 0-2.47 0-2.99.51-.51.52-.51 1.34-.51 2.99s0 2.48.51 2.99q.34.34.97.43"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.51 21.49c.52.51 1.34.51 2.99.51s2.47 0 2.99-.51c.51-.51.51-1.34.51-2.99s0-2.47-.51-2.99c-.52-.5-1.34-.5-2.99-.5s-2.47 0-2.99.5c-.51.52-.51 1.34-.51 2.99s0 2.48.51 2.99m2.4-3.57h-.97a.58.58 0 1 0 0 1.16h3.12a.58.58 0 1 0 0-1.16z"
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
            <path d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" fill="currentColor" />
            <path
              d="M10 13c4.42 0 8 2.02 8 4.5 0 2.49 0 4.5-8 4.5s-8-2.01-8-4.5c0-2.48 3.58-4.5 8-4.5"
              fill="currentColor"
            />
            <path
              d="M17 9.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserMinus;
