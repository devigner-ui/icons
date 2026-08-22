import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLockPasswordUnlocked = forwardRef<SVGSVGElement, IconProps>(
  function IconLockPasswordUnlocked(
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
              d="M2 16c0-2.83 0-4.24.88-5.12S5.18 10 8 10h8c2.83 0 4.24 0 5.12.88S22 13.18 22 16s0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
              <path
                d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
              <path
                d="M17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 10V8a6 6 0 0 1 11.81-1.5"
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
              d="M2 16c0-2.83 0-4.24.88-5.12S5.18 10 8 10h8c2.83 0 4.24 0 5.12.88S22 13.18 22 16s0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16"
              fill="currentColor"
            />
            <path d="M8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path d="M17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M6.75 8a5.25 5.25 0 0 1 10.33-1.31.75.75 0 0 0 1.46-.38A6.75 6.75 0 0 0 5.25 8v2.06Q5.9 10 6.75 10z"
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
              d="M6.75 8a5.25 5.25 0 0 1 10.33-1.31.75.75 0 0 0 1.46-.38A6.75 6.75 0 0 0 5.25 8v2.06c-1.11.08-1.84.29-2.37.82C2 11.76 2 13.18 2 16s0 4.24.88 5.12S5.18 22 8 22h8c2.83 0 4.24 0 5.12-.88S22 18.82 22 16s0-4.24-.88-5.12S18.82 10 16 10H6.75zM8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLockPasswordUnlocked;
