import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWadOfMoney = forwardRef<SVGSVGElement, IconProps>(
  function IconWadOfMoney(
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
              d="M9 19c-2.8 0-4.21 0-5.22-.67a4 4 0 0 1-1.1-1.1C2 16.2 2 14.8 2 12s0-4.21.67-5.22a4 4 0 0 1 1.1-1.1C4.8 5 6.2 5 9 5h6c2.8 0 4.21 0 5.22.67a4 4 0 0 1 1.1 1.1C22 7.8 22 9.2 22 12s0 4.21-.67 5.22a4 4 0 0 1-1.1 1.1C19.2 19 17.8 19 15 19z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 9a3 3 0 1 0 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 9a3 3 0 1 1 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9 5v13.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 5v13.5"
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
              d="M14.25 19h1.5c2.32 0 3.56-.06 4.47-.67a4 4 0 0 0 1.1-1.1C22 16.2 22 14.8 22 12s0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C19.3 5.06 18.06 5 15.74 5h-1.5v4H15a3 3 0 1 1 0 6h-.75z"
              fill="currentColor"
            />
            <path
              d="M9.75 19v-4H9a3 3 0 0 1 0-6h.75V5h-1.5c-2.32 0-3.56.06-4.47.68a4 4 0 0 0-1.1 1.1C2 7.78 2 9.19 2 12s0 4.21.67 5.22a4 4 0 0 0 1.1 1.1c.92.62 2.16.68 4.48.68z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.75 19h4.5V5h-4.5z"
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
              d="M8.25 5c-2.32 0-3.56.06-4.47.67a4 4 0 0 0-1.1 1.1C2 7.8 2 9.2 2 12s0 4.21.67 5.22a4 4 0 0 0 1.1 1.1c.92.62 2.16.67 4.48.68v-4.1a3 3 0 0 1 0-5.8z"
              fill="currentColor"
            />
            <path d="M9.75 19h4.5V5h-4.5z" fill="currentColor" />
            <path
              d="M15.75 5v4.1a3 3 0 0 1 0 5.8V19c2.32 0 3.56-.06 4.47-.67a4 4 0 0 0 1.1-1.1C22 16.2 22 14.8 22 12s0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C19.3 5.05 18.06 5 15.74 5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWadOfMoney;
