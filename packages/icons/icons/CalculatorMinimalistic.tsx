import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalculatorMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconCalculatorMinimalistic(
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
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.53C19.07 2 16.7 2 12 2S4.93 2 3.46 3.47C2 4.93 2 7.29 2 12s0 7.07 1.46 8.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 8.5h-4m4 6h-4m4 3h-4m-4-9H8m0 0H6m2 0v-2m0 2v2m1.5 4L8 16m0 0-1.5 1.5M8 16l-1.5-1.5M8 16l1.5 1.5"
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
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 5.75c.41 0 .75.34.75.75v1.25H10a.75.75 0 0 1 0 1.5H8.75v1.25a.75.75 0 0 1-1.5 0V9.25H6a.75.75 0 1 1 0-1.5h1.25V6.5c0-.41.34-.75.75-.75m5.25 2.75c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 6c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m-7.28-.53c.3-.3.77-.3 1.06 0l.97.97.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06L8 17.06l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06m7.28 3.53c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22M8.75 6.5a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0V9.25H10a.75.75 0 0 0 0-1.5H8.75zM14 7.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-6.97.22a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97.97.97a.75.75 0 1 0 1.06-1.06L9.06 16l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97zM14 16.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalculatorMinimalistic;
