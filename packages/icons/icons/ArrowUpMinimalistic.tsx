import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowUpMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowUpMinimalistic(
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
              d="M18.74 9.57 12.67 3.5 6.6 9.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 20.5V3.67"
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
              d="M22.67 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H8.48c-3.64.01-5.81-2.16-5.81-5.8V7.81C2.67 4.17 4.84 2 8.48 2h8.37c3.65 0 5.82 2.17 5.82 5.81"
              fill="currentColor"
            />
            <path
              d="m13.2 5.47 4.29 4.29c.29.29.29.77 0 1.06a.75.75 0 0 1-1.06 0l-3.01-3.01V18c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.81l-3.01 3.01a.75.75 0 0 1-1.06 0 .7.7 0 0 1-.22-.53q0-.3.22-.53l4.29-4.29a.75.75 0 0 1 1.06 0"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m.63 8.82a.75.75 0 0 1-1.06 0l-3.01-3.01V18c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.81l-3.01 3.01a.75.75 0 0 1-1.06 0 .7.7 0 0 1-.22-.53q0-.3.22-.53l4.29-4.29a.75.75 0 0 1 1.06 0l4.29 4.29c.29.29.29.76 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowUpMinimalistic;
