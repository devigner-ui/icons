import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConvertshape2 = forwardRef<SVGSVGElement, IconProps>(
  function IconConvertshape2(
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
              d="M11.67 16.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7c-2.25 0-3.15-.9-3.15-3.15v-2.7c0-2.25.9-3.15 3.15-3.15h2.7c2.25 0 3.15.9 3.15 3.15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 15a7 7 0 0 1-7 7l1.05-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 9a7 7 0 0 1 7-7L8.62 3.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.17 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
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
              d="M11.67 16.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7c-2.25 0-3.15-.9-3.15-3.15v-2.7c0-2.25.9-3.15 3.15-3.15h2.7c2.25 0 3.15.9 3.15 3.15"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.17 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
              fill="currentColor"
            />
            <path
              d="M15.45 22a.75.75 0 0 1-.64-1.14l.97-1.62a.75.75 0 0 1 1.03-.26c.36.21.47.67.26 1.03l-.18.3a5.7 5.7 0 0 0 4.29-5.54c0-.41.34-.75.75-.75s.74.34.74.76A7.23 7.23 0 0 1 15.45 22"
              fill="currentColor"
            />
            <path
              d="M3.42 9.97a.75.75 0 0 1-.75-.75A7.23 7.23 0 0 1 9.89 2q.43.02.66.38.2.38-.01.76l-.97 1.61a.74.74 0 0 1-1.03.26.75.75 0 0 1-.26-1.03l.18-.3a5.74 5.74 0 0 0-4.29 5.54c0 .42-.34.75-.75.75"
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
              d="M11.67 16.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7c-2.25 0-3.15-.9-3.15-3.15v-2.7c0-2.25.9-3.15 3.15-3.15h2.7c2.25 0 3.15.9 3.15 3.15"
              fill="currentColor"
            />
            <path
              d="M18.17 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
              fill="currentColor"
            />
            <path
              d="M15.45 22a.75.75 0 0 1-.64-1.14l.97-1.62a.75.75 0 0 1 1.03-.26c.36.21.47.67.26 1.03l-.18.3a5.7 5.7 0 0 0 4.29-5.54c0-.41.34-.75.75-.75s.74.34.74.76A7.23 7.23 0 0 1 15.45 22"
              fill="currentColor"
            />
            <path
              d="M3.42 9.97a.75.75 0 0 1-.75-.75A7.23 7.23 0 0 1 9.89 2q.43.02.66.38.2.38-.01.76l-.97 1.61a.74.74 0 0 1-1.03.26.75.75 0 0 1-.26-1.03l.18-.3a5.74 5.74 0 0 0-4.29 5.54c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconConvertshape2;
