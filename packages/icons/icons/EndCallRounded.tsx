import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEndCallRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconEndCallRounded(
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
              d="M3.08 10.5A5 5 0 0 0 2 13.85c0 2.06 1.78 3.56 3.6 3.05l1.35-.38A3 3 0 0 0 9 13.62m11.92-3.12c.8.87 1.08 2.11 1.08 3.35 0 2.06-1.78 3.56-3.6 3.05l-1.35-.38a3 3 0 0 1-2.05-2.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.08 10.5C4.44 9.04 7.2 7 12 7s7.56 2.04 8.92 3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 13.62s0-1.66 3-1.66 3 1.66 3 1.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="m6.95 16.52-1.34.38c-1.83.52-3.61-1-3.61-3.05 0-1.24.28-2.48 1.08-3.35A11 11 0 0 1 9 7.3v6.32c0 1.36-.84 2.55-2.05 2.9m8.05-2.9c0 1.36.84 2.55 2.05 2.9l1.34.38c1.83.52 3.61-.99 3.61-3.05 0-1.24-.28-2.48-1.08-3.35A11 11 0 0 0 15 7.3z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 13.62s0-1.66 3-1.66 3 1.66 3 1.66V7.29q-1.35-.28-3-.29t-3 .3z"
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
              d="m5.6 16.9 1.35-.38A3 3 0 0 0 9 13.62s0-1.66 3-1.66 3 1.66 3 1.66c0 1.36.84 2.55 2.05 2.9l1.34.38c1.83.52 3.61-.99 3.61-3.05 0-1.24-.28-2.48-1.08-3.35C19.56 9.04 16.8 7 12 7s-7.56 2.04-8.92 3.5A5 5 0 0 0 2 13.85c0 2.06 1.78 3.57 3.6 3.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEndCallRounded;
