import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEraserFramed = forwardRef<SVGSVGElement, IconProps>(function IconEraserFramed(
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
            d="M18.46 21.53C20.95 20.68 22 18.63 22 15V9c0-5-2-7-7-7H9.05m-3.46.46C3.07 3.3 2 5.35 2 9v6c0 5 2 7 7 7h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6.99 15.08 1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94a1.67 1.67 0 0 0-2.34 0l-5.75 5.75c-.31.31-.49.73-.49 1.17s.18.86.49 1.17Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9.31 10.42 4.27 4.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m6.99 15.08 1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94a1.67 1.67 0 0 0-2.34 0l-5.75 5.75a1.65 1.65 0 0 0 0 2.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m9.31 10.42 4.27 4.27"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M16.19 2H7.83c-3.65 0-5.8 2.17-5.8 5.81v8.37c0 3.64 2.16 5.81 5.8 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.8-5.81"
            fill="currentColor"
          />
          <path
            d="m13.58 14.69-2.32 2.32c-.64.65-1.69.65-2.34 0l-1.93-1.93a1.65 1.65 0 0 1 0-2.34l2.32-2.32z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.01 11.26-3.43 3.43-4.27-4.27 3.43-3.43a1.65 1.65 0 0 1 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34"
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
            d="M16.19 2H7.81c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-3.66 13.75-1.26 1.26c-.64.65-1.69.65-2.34 0L7 15.08a1.66 1.66 0 0 1 0-2.34l1.27-1.26c.2-.19.51-.19.71 0l3.56 3.56a.5.5 0 0 1 0 .71m4.5-4.49-3.09 3.08a.5.5 0 0 1-.7 0l-3.57-3.56a.5.5 0 0 1 0-.71l3.08-3.08a1.65 1.65 0 0 1 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEraserFramed;
