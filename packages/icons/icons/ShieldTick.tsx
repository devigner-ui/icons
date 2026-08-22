import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShieldTick = forwardRef<SVGSVGElement, IconProps>(
  function IconShieldTick(
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
              d="M11.16 2.23 6.17 4.11a3.5 3.5 0 0 0-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21a4.55 4.55 0 0 0 5.14 0l4.3-3.21a5 5 0 0 0 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02L14.2 2.23a5 5 0 0 0-3.04 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m9.72 11.87 1.61 1.61 4.3-4.3"
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
              d="m11.63 2.06-5.5 2.06a3.2 3.2 0 0 0-1.91 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06a3.4 3.4 0 0 0-2.07-.01"
              fill="currentColor"
            />
            <path
              d="M11.33 14.23a.7.7 0 0 1-.53-.22L9.19 12.4a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.08 1.08 3.77-3.77a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-4.3 4.3a.7.7 0 0 1-.53.22"
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
              d="m19.21 4.12-5.5-2.06a3.5 3.5 0 0 0-2.07 0l-5.5 2.06a3.2 3.2 0 0 0-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1a3.2 3.2 0 0 0-1.9-2.77m-3.06 5.6-4.3 4.3a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.6-1.62a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.08 1.08 3.77-3.77a.75.75 0 0 1 1.06 0c.29.29.29.78-.01 1.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShieldTick;
