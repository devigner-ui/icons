import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoundDoubleAltArrowDown = forwardRef<SVGSVGElement, IconProps>(
  function IconRoundDoubleAltArrowDown(
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
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m9 8.5 3 3 3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m9 12.5 3 3 3-3"
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
              d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20"
              fill="currentColor"
            />
            <path
              d="M8.47 9.03a.75.75 0 0 1 1.06-1.06L12 10.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3c-.3.3-.77.3-1.06 0z"
              fill="currentColor"
            />
            <path
              d="M8.47 13.03a.75.75 0 1 1 1.06-1.06L12 14.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3c-.3.3-.77.3-1.06 0z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M8.47 13.03a.75.75 0 1 1 1.06-1.06L12 14.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3c-.3.3-.77.3-1.06 0zm0-5.06c-.3.3-.3.77 0 1.06l3 3c.3.3.77.3 1.06 0l3-3a.75.75 0 0 0-1.06-1.06L12 10.44 9.53 7.97a.75.75 0 0 0-1.06 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRoundDoubleAltArrowDown;
