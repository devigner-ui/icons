import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMonero = forwardRef<SVGSVGElement, IconProps>(function IconMonero(
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
            d="M22.21 15a10.01 10.01 0 0 1-19.07.04L7.67 15V9l5 6 5-6v6z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 12a10 10 0 0 1-.46 3h-4.54V9l-5 6-5-6v6l-4.53.04q-.46-1.45-.47-3.04a10 10 0 0 1 20 0"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            d="M22.21 15a10.01 10.01 0 0 1-19.07.04h.58L7.67 15v-3.24a1 1 0 0 1 1.75-.65L12.67 15l3.25-3.89a1 1 0 0 1 1.75.65V15z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 12a10 10 0 0 1-.46 3h-4.54v-3.24a1 1 0 0 0-1.75-.65L12.67 15l-3.25-3.89a1 1 0 0 0-1.75.65V15l-3.95.04h-.58q-.46-1.45-.47-3.04a10 10 0 0 1 20 0"
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
            d="M3.85 15.03c-.35 0-.6.35-.47.67a10 10 0 0 0 18.59-.03c.13-.32-.13-.67-.47-.67h-3.33a.5.5 0 0 1-.5-.5v-2.74a1 1 0 0 0-1.75-.65l-2.87 3.43a.5.5 0 0 1-.77 0l-2.87-3.43c-.59-.7-1.74-.27-1.74.65v2.74a.5.5 0 0 1-.5.5z"
            fill="currentColor"
          />
          <path
            d="M22.67 12.14a7 7 0 0 1-.06.92.5.5 0 0 1-.51.44h-2.43a.5.5 0 0 1-.5-.5v-1.1c0-1.01-.54-1.99-1.46-2.41a2.46 2.46 0 0 0-2.94.66l-1.72 2.05a.5.5 0 0 1-.77 0l-1.73-2.07a2.45 2.45 0 0 0-2.92-.64 2.6 2.6 0 0 0-1.46 2.41v.98c0 .42-.22.64-.5.64l-2.44.01a.5.5 0 0 1-.51-.44q-.05-.54-.05-1.09a10 10 0 1 1 20 .14"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMonero;
