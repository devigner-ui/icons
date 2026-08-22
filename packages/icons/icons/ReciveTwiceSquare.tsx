import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReciveTwiceSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconReciveTwiceSquare(
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
              d="M7 15.5h7m0 0L11 13m3 2.5L11 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 8.5h7m0 0L11 6m3 2.5L11 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 6v12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M6.25 8.5c0-.41.34-.75.75-.75h4.93l-1.41-1.17a.75.75 0 0 1 .96-1.16l3 2.5a.75.75 0 0 1 0 1.16l-3 2.5a.75.75 0 1 1-.96-1.16l1.4-1.17H7a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M6.25 15.5c0-.41.34-.75.75-.75h4.93l-1.41-1.17a.75.75 0 0 1 .96-1.16l3 2.5a.75.75 0 0 1 0 1.16l-3 2.5a.75.75 0 1 1-.96-1.16l1.4-1.17H7a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M16.25 18a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0z"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M7 14.75a.75.75 0 0 0 0 1.5h4.93l-1.41 1.17a.75.75 0 0 0 .96 1.16l3-2.5a.75.75 0 0 0 0-1.16l-3-2.5a.75.75 0 0 0-.96 1.16l1.4 1.17zM6.25 8.5c0-.41.34-.75.75-.75h4.93l-1.41-1.17a.75.75 0 0 1 .96-1.16l3 2.5a.75.75 0 0 1 0 1.16l-3 2.5a.75.75 0 0 1-.96-1.16l1.4-1.17H7a.75.75 0 0 1-.75-.75M17.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconReciveTwiceSquare;
