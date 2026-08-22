import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMinimizeSquare2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMinimizeSquare2(
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
              d="M10.5 13.5h-3m3 0v3m0-3L7 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 10.5h3m-3 0v-3m0 3L17 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 10.5h-3m3 0v-3m0 3L7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 13.5h3m-3 0v3m0-3L17 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M6.75 10.5c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-1.5 0v1.19L7.53 6.47a.75.75 0 0 0-1.06 1.06l2.22 2.22H7.5a.75.75 0 0 0-.75.75"
              fill="currentColor"
            />
            <path
              d="M16.5 11.25a.75.75 0 0 0 0-1.5h-1.19l2.22-2.22a.75.75 0 0 0-1.06-1.06l-2.22 2.22V7.5a.75.75 0 0 0-1.5 0v3c0 .41.34.75.75.75z"
              fill="currentColor"
            />
            <path
              d="M6.47 16.47a.75.75 0 1 0 1.06 1.06l2.22-2.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h1.19z"
              fill="currentColor"
            />
            <path
              d="M17.53 16.47a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-1.19z"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m4.47 5.53a.75.75 0 0 1 0-1.06l2.22-2.22H7.5a.75.75 0 0 1 0-1.5h3c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-1.19l-2.22 2.22c-.3.3-.77.3-1.06 0m10.03-6.28a.75.75 0 0 0 0-1.5h-1.19l2.22-2.22a.75.75 0 0 0-1.06-1.06l-2.22 2.22V7.5a.75.75 0 0 0-1.5 0v3c0 .41.34.75.75.75zm-9.75-.75c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-1.5 0v1.19L7.53 6.47a.75.75 0 0 0-1.06 1.06l2.22 2.22H7.5a.75.75 0 0 0-.75.75m10.78 5.97a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-1.19z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMinimizeSquare2;
