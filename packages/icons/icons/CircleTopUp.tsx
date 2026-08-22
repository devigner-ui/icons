import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCircleTopUp = forwardRef<SVGSVGElement, IconProps>(
  function IconCircleTopUp(
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
              d="m13 11 9-9m0 0h-5.34M22 2v5.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2a10 10 0 1 0 10 10"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.47 11.53a.75.75 0 0 1 0-1.06l7.72-7.72h-3.53a.75.75 0 0 1 0-1.5H22c.41 0 .75.34.75.75v5.34a.75.75 0 0 1-1.5 0V3.81l-7.72 7.72c-.3.3-.77.3-1.06 0"
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
              d="M14.5 2.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V4.56l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72h-4.19a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M11.25 2.75a10 10 0 1 0 9.85 8.24A2.25 2.25 0 0 1 19 8.75v-.57l-4.16 4.16a2.25 2.25 0 1 1-3.18-3.18L15.82 5h-.57c-1.2 0-2.17-.93-2.24-2.1q-.86-.15-1.76-.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCircleTopUp;
