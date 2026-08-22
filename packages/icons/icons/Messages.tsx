import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessages = forwardRef<SVGSVGElement, IconProps>(function IconMessages(
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
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M17.98 10.79v4q0 .39-.04.75-.35 4.05-4.75 4.04h-.4a.8.8 0 0 0-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a1 1 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4q0-4.4 4.04-4.75Q6.4 6 6.79 6h6.4q4.79 0 4.79 4.79"
          />
          <path
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M21.98 6.79v4q0 4.4-4.04 4.75.04-.36.04-.75v-4Q17.98 6 13.19 6h-6.4q-.39 0-.75.04Q6.39 2 10.79 2h6.4q4.79 0 4.79 4.79"
            opacity={duotone ? "0.4" : "1"}
          />
          <path
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.5 13.25"
            opacity={duotone ? "0.4" : "1"}
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
            d="M18.65 10.79v4q0 .39-.04.75-.35 4.05-4.75 4.04h-.4a.8.8 0 0 0-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a1 1 0 0 0-.64-.32h-.4c-3.19 0-4.79-.79-4.79-4.79v-4q0-4.4 4.04-4.75.36-.04.75-.04h6.4q4.79 0 4.79 4.79"
            fill="currentColor"
          />
          <path
            d="M10.66 14a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M14.16 14a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M7.17 14a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M22.65 6.79v4q0 4.4-4.04 4.75.04-.36.04-.75v-4Q18.65 6 13.86 6h-6.4q-.39 0-.75.04Q7.06 2 11.46 2h6.4q4.79 0 4.79 4.79"
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
            d="M13.86 6h-6.4q-.39 0-.75.04-4.04.35-4.04 4.75v4c0 4 1.6 4.79 4.79 4.79h.4c.22 0 .51.15.64.32l1.2 1.6c.53.71 1.39.71 1.92 0l1.2-1.6a.8.8 0 0 1 .64-.32h.4q4.4 0 4.75-4.04.04-.36.04-.75v-4Q18.65 6 13.86 6m-6.69 8a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m3.49 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m3.5 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M22.65 6.79v4q0 3-1.86 4.11c-.3.18-.65-.06-.65-.41l.01-3.7c0-4-2.29-6.29-6.29-6.29l-6.09.01c-.35 0-.59-.35-.41-.65Q8.48 2 11.46 2h6.4q4.79 0 4.79 4.79"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMessages;
