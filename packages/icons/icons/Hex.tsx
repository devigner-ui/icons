import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHex = forwardRef<SVGSVGElement, IconProps>(function IconHex(
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
            d="M4.51 7.65 2 12l5 8.66h10L22 12l-5-8.66H7l-.37.64"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.87 14H7.03L5.1 17.33l1.93 3.33h3.84l1.93-3.33z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.34 8h-7.3l-3.66 6.33 3.65 6.33h7.31L18 14.33z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M17 3.34H7L2 12l5 8.66h10L22 12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.87 14H7.03L5.1 17.33l1.93 3.33h3.84l1.93-3.33z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.34 8H7.03l-3.65 6.33 3.65 6.33h7.31L18 14.33z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
          <path d="M24 0H0v24h24z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 3.34H7L2 12l5 8.66h10L22 12z"
            fill="currentColor"
          />
          <path
            d="M10.87 14H7.03L5.1 17.33l1.93 3.33h3.84l1.93-3.33z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.34 8H7.03l-3.65 6.33 3.65 6.33h7.31L18 14.33z"
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
            d="M10.54 14.08H7.12a.5.5 0 0 0-.43.25l-1.71 2.96a.5.5 0 0 0 0 .5l1.71 2.96a.5.5 0 0 0 .43.25h3.42a.5.5 0 0 0 .43-.25l1.71-2.96a.5.5 0 0 0 0-.5l-1.71-2.96a.5.5 0 0 0-.43-.25"
            fill="currentColor"
          />
          <path
            d="M22.24 11.74q.13.26 0 .52l-4.93 8.53a.41.41 0 1 1-.72-.41l3.29-5.7a.5.5 0 0 0 0-.52l-4.4-7.62a.5.5 0 0 0-.45-.26H6.22q-.3.01-.45.26L2.5 12.22a.45.45 0 0 1-.78-.45l4.92-8.52a.5.5 0 0 1 .45-.26h9.79q.3.01.45.26z"
            fill="currentColor"
          />
          <path
            d="m18.09 14.68-3.5 6.06a.5.5 0 0 1-.45.26h-.6a.52.52 0 0 1-.45-.78l1.4-2.42a.5.5 0 0 0 0-.52l-2.6-4.5a.6.6 0 0 0-.47-.26h-5.2q-.3.01-.45.26l-1.4 2.42c-.2.35-.7.35-.9 0l-.3-.51a.5.5 0 0 1 0-.52l3.49-6.06a.5.5 0 0 1 .45-.26h6.99q.3.01.45.26l3.5 6.06c.12.15.12.36.04.51"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHex;
