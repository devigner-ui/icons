import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentCloud = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentCloud(
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
              d="M14.67 2h-5c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 10v3"
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
              d="M14.43 18.26c-2.35.17-2.35 3.57 0 3.74h5.56a2.7 2.7 0 0 0 1.82-.7c1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
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
              d="M15.43 19.26c-2.35.17-2.35 3.57 0 3.74h5.56a2.7 2.7 0 0 0 1.82-.7c1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
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
              d="M16.47 2.21c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67l3.4.01c.57 0 .87-.67.47-1.07z"
              fill="currentColor"
            />
            <path
              d="M15.43 19.26c-2.35.17-2.35 3.57 0 3.74h5.56a2.7 2.7 0 0 0 1.82-.7c1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
              fill="currentColor"
            />
            <path
              d="M22.17 11.19v3.25c0 .3-.44.44-.66.23a4 4 0 0 0-1.75-1.04 4.8 4.8 0 0 0-4.84 1.27 4.3 4.3 0 0 0-1.21 3.07q0 .3-.24.47a3.3 3.3 0 0 0-1.29 2.92c.02.32-.21.63-.54.63h-2.9c-3.08 0-5.57-2-5.57-5.57V7.57C3.17 4 5.66 2 8.74 2h4.24a1 1 0 0 1 1 1v2.89a4.3 4.3 0 0 0 4.3 4.3h2.89a1 1 0 0 1 1 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentCloud;
