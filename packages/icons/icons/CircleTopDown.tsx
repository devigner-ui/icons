import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCircleTopDown = forwardRef<SVGSVGElement, IconProps>(
  function IconCircleTopDown(
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
              d="m21 3-9 9m0 0h5.34M12 12V6.66"
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
              d="M21.53 2.47c.3.3.3.77 0 1.06l-7.72 7.72h3.53a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.66a.75.75 0 0 1 1.5 0v3.53l7.72-7.72c.3-.3.77-.3 1.06 0"
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
              d="M21.53 2.47c.3.3.3.77 0 1.06l-7.72 7.72h3.53a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.66a.75.75 0 0 1 1.5 0v3.53l7.72-7.72c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="m20.48 6.7-3.05 3.05a2.25 2.25 0 0 1-.09 4.5H12c-1.24 0-2.25-1-2.25-2.25V6.66a2.25 2.25 0 0 1 4.5-.09l3.05-3.05a10 10 0 1 0 3.18 3.18"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCircleTopDown;
