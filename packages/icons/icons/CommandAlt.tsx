import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCommandAlt = forwardRef<SVGSVGElement, IconProps>(
  function IconCommandAlt(
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
              d="M16.67 8h-8v8h8z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.67 22a3 3 0 0 0 3-3v-3h-3a3 3 0 0 0-3 3 3 3 0 0 0 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 8h3V5a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.67 8h3a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 22a3 3 0 0 0 3-3 3 3 0 0 0-3-3h-3v3a3 3 0 0 0 3 3"
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
            <path d="M16.67 8h-8v8h8z" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 22a3 3 0 0 0 3-3v-3h-3a3 3 0 0 0-3 3 3 3 0 0 0 3 3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 8h3V5a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 8h3a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 22a3 3 0 0 0 3-3 3 3 0 0 0-3-3h-3v3a3 3 0 0 0 3 3"
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
            <path d="M16.67 8h-8v8h8z" fill="currentColor" />
            <path
              d="M2.67 19a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-3h-3a3 3 0 0 0-3 3"
              fill="currentColor"
            />
            <path
              d="M5.67 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3h3V5a3 3 0 0 0-3-3"
              fill="currentColor"
            />
            <path
              d="M22.67 5a3 3 0 0 0-3-3 3 3 0 0 0-3 3v3h3a3 3 0 0 0 3-3"
              fill="currentColor"
            />
            <path
              d="M19.67 16h-3v3a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCommandAlt;
