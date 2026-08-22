import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSecuritySafe = forwardRef<SVGSVGElement, IconProps>(
  function IconSecuritySafe(
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
              d="M21.58 11.12c0 4.89-3.55 9.47-8.4 10.81q-.51.13-1.02 0c-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28a5.2 5.2 0 0 1 3.91 0l5.57 2.28a2.4 2.4 0 0 1 1.39 2.06z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.67 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 12.5v3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M21.58 11.12c0 4.89-3.55 9.47-8.4 10.81q-.51.13-1.02 0c-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28a5.2 5.2 0 0 1 3.91 0l5.57 2.28a2.4 2.4 0 0 1 1.39 2.06z"
              fill="currentColor"
            />
            <path
              d="M15.17 10.5a2.5 2.5 0 0 0-5 0c0 1.12.74 2.05 1.75 2.37v2.63c0 .41.34.75.75.75s.75-.34.75-.75v-2.63a2.5 2.5 0 0 0 1.75-2.37"
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
              d="M21.58 11.12V6.73a2.4 2.4 0 0 0-1.39-2.06l-5.57-2.28a5.2 5.2 0 0 0-3.91 0L5.14 4.67a2.4 2.4 0 0 0-1.38 2.06v4.39c0 4.89 3.55 9.47 8.4 10.81q.51.13 1.02 0c4.85-1.34 8.4-5.92 8.4-10.81m-8.16 1.75v2.63c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.63a2.5 2.5 0 1 1 1.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSecuritySafe;
