import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentSketch = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentSketch(
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
              d="M22.67 10v5c0 5-2 7-7 7h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 10h-4c-3 0-4-1-4-4V2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99 12h2.65a1 1 0 0 1 .75.4l1.13 1.7c.23.34.18.85-.11 1.14l-2.46 2.46a.9.9 0 0 1-1.28 0l-2.46-2.46a.9.9 0 0 1-.11-1.14l1.13-1.7c.16-.22.5-.4.76-.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M21.17 10.19h-2.89a4.3 4.3 0 0 1-4.3-4.3V3a1 1 0 0 0-1-1H8.74C5.66 2 3.17 4 3.17 7.57v8.86C3.17 20 5.66 22 8.74 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24a1 1 0 0 0-1-1"
              fill="currentColor"
            />
            <path
              d="M16.47 2.21c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67l3.4.01c.57 0 .87-.67.47-1.07z"
              fill="currentColor"
            />
            <path
              d="m13.22 14-.85-1.28a1.3 1.3 0 0 0-1.04-.56H9.31c-.39 0-.82.23-1.04.56L7.42 14c-.33.48-.26 1.17.15 1.58l1.86 1.86a1.3 1.3 0 0 0 1.78 0l1.86-1.86c.4-.41.46-1.1.15-1.58"
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
              d="M21.17 10.19h-2.89a4.3 4.3 0 0 1-4.3-4.3V3a1 1 0 0 0-1-1H8.74C5.66 2 3.17 4 3.17 7.57v8.86C3.17 20 5.66 22 8.74 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24a1 1 0 0 0-1-1m-8.1 5.39-1.86 1.86q-.36.35-.89.36-.52 0-.89-.36l-1.86-1.86A1.3 1.3 0 0 1 7.42 14l.85-1.28a1.3 1.3 0 0 1 1.04-.56h2.01c.39 0 .82.23 1.04.56l.86 1.28c.31.48.25 1.17-.15 1.58"
              fill="currentColor"
            />
            <path
              d="m18.1 8.81 3.4.01c.57 0 .87-.67.47-1.07l-5.5-5.54c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentSketch;
