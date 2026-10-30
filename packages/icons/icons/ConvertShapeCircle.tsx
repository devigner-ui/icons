import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConvertShapeCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconConvertShapeCircle(
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
        {variant === "Broken" ? (
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
            d="M2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15v2.7C11 21.1 10.1 22 7.85 22h-2.7"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 15a7 7 0 0 1-7 7l1.05-1.75"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 9a7 7 0 0 1 7-7L7.95 3.75"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 15a7 7 0 0 1-7 7l1.05-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 9a7 7 0 0 1 7-7L7.95 3.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
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
              d="M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
              fill="currentColor"
            />
            <path
              d="M14.78 22a.75.75 0 0 1-.64-1.14l.97-1.62a.75.75 0 0 1 1.03-.26c.36.21.47.67.26 1.03l-.18.3a5.7 5.7 0 0 0 4.29-5.54c0-.41.34-.75.75-.75s.74.34.74.76A7.23 7.23 0 0 1 14.78 22"
              fill="currentColor"
            />
            <path
              d="M2.75 9.97A.75.75 0 0 1 2 9.22 7.23 7.23 0 0 1 9.22 2q.43.02.66.38.2.38-.01.76L8.9 4.75a.74.74 0 0 1-1.03.26.75.75 0 0 1-.26-1.03l.18-.3A5.74 5.74 0 0 0 3.5 9.22c0 .42-.34.75-.75.75"
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
              d="M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15"
              fill="currentColor"
            />
            <path
              d="M17.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
              fill="currentColor"
            />
            <path
              d="M14.78 22a.75.75 0 0 1-.64-1.14l.97-1.62a.75.75 0 0 1 1.03-.26c.36.21.47.67.26 1.03l-.18.3a5.7 5.7 0 0 0 4.29-5.54c0-.41.34-.75.75-.75s.74.34.74.76A7.23 7.23 0 0 1 14.78 22"
              fill="currentColor"
            />
            <path
              d="M2.75 9.97A.75.75 0 0 1 2 9.22 7.23 7.23 0 0 1 9.22 2q.43.02.66.38.2.38-.01.76L8.9 4.75a.74.74 0 0 1-1.03.26.75.75 0 0 1-.26-1.03l.18-.3A5.74 5.74 0 0 0 3.5 9.22c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconConvertShapeCircle;
