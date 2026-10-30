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
            d="M2 13v2c0 5 2 7 7 7"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14 2H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 10v3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 10h-4c-3 0-4-1-4-4V2z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.76 18.26c-2.35.17-2.35 3.57 0 3.74h5.56a2.7 2.7 0 0 0 1.82-.7c1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
              d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 10v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 10h-4c-3 0-4-1-4-4V2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.76 18.26c-2.35.17-2.35 3.57 0 3.74h5.56a2.7 2.7 0 0 0 1.82-.7c1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
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
              d="M19.77 9.69h-2.89a4.3 4.3 0 0 1-4.3-4.3V2.5a1 1 0 0 0-1-1H7.34c-3.08 0-5.57 2-5.57 5.57v8.86c0 3.57 2.49 5.57 5.57 5.57h7.86c3.08 0 5.57-2 5.57-5.57v-5.24a1 1 0 0 0-1-1"
              fill="currentColor"
            />
            <path
              d="M15.07 1.71c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67l3.4.01c.57 0 .87-.67.47-1.07z"
              fill="currentColor"
            />
            <path
              d="M14.03 18.76c-2.35.17-2.35 3.57 0 3.74h5.56a2.7 2.7 0 0 0 1.82-.7c1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
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
              d="M15.07 1.71c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67l3.4.01c.57 0 .87-.67.47-1.07z"
              fill="currentColor"
            />
            <path
              d="M14.03 18.76c-2.35.17-2.35 3.57 0 3.74h5.56a2.7 2.7 0 0 0 1.82-.7c1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
              fill="currentColor"
            />
            <path
              d="M20.77 10.69v3.25c0 .3-.44.44-.66.23a4 4 0 0 0-1.75-1.04 4.8 4.8 0 0 0-4.84 1.27 4.3 4.3 0 0 0-1.21 3.07q0 .3-.24.47a3.3 3.3 0 0 0-1.29 2.92c.02.32-.21.63-.54.63h-2.9c-3.08 0-5.57-2-5.57-5.57V7.07c0-3.57 2.49-5.57 5.57-5.57h4.24a1 1 0 0 1 1 1v2.89a4.3 4.3 0 0 0 4.3 4.3h2.89a1 1 0 0 1 1 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentCloud;
