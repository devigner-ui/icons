import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiAssist = forwardRef<SVGSVGElement, IconProps>(function IconAiAssist(
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
            d="M16.31 3.13c.52 2.31 1.52 3.31 3.83 3.83.19.04.19.31 0 .36-2.31.52-3.31 1.52-3.83 3.83-.04.2-.31.2-.36 0-.52-2.3-1.52-3.3-3.83-3.83-.19-.04-.19-.3 0-.36 2.31-.52 3.31-1.52 3.83-3.83.04-.19.31-.19.36 0Z"
            strokeMiterlimit="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.11 15.26s1.96-2.15 4.4-2.1c2.09.05 4.44.6 4.44 2.2 0 1.33-.83 1.64-1.11 1.7q-.04.02 0 .05c.25.04.98 0 2.54-1.33.75-.65 1.92-1.7 2.88-.86.77.68.62 1.78 0 2.5q-.8.9-1.72 1.67a6 6 0 0 1-2.08 1.24c-1.85.5-2.76.5-3.88.57s-2.96-1.02-5.47-.89v-4.74z"
            strokeMiterlimit="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3.21 19.57v.54c0 .5.4.9.9.9h2.1c.5 0 .9-.4.9-.9v-6.05c0-.5-.4-.9-.9-.9h-2.1c-.5 0-.9.4-.9.9v2.34"
            strokeMiterlimit="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M16.31 3.13c.52 2.31 1.52 3.31 3.83 3.83.19.04.19.31 0 .36-2.31.52-3.31 1.52-3.83 3.83-.04.2-.31.2-.36 0-.52-2.3-1.52-3.3-3.83-3.83-.19-.04-.19-.3 0-.36 2.31-.52 3.31-1.52 3.83-3.83.04-.19.31-.19.36 0Z"
            strokeMiterlimit="10"
            stroke="currentColor"
            opacity={duotone ? "0.4" : "1"}
            strokeWidth={strokeWidth}
          />
          <path
            d="M7.11 15.26s1.96-2.15 4.4-2.1c2.09.05 4.44.6 4.44 2.2 0 1.33-.83 1.64-1.11 1.7q-.04.02 0 .05c.25.04.98 0 2.54-1.33.75-.65 1.92-1.7 2.88-.86.77.68.62 1.78 0 2.5q-.8.9-1.72 1.67a6 6 0 0 1-2.08 1.24c-1.85.5-2.76.5-3.88.57s-2.96-1.02-5.47-.89v-4.74z"
            strokeMiterlimit="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M7.11 15.26v-1.2c0-.5-.4-.9-.9-.9h-2.1c-.5 0-.9.4-.9.9v6.05c0 .5.4.9.9.9h2.1c.5 0 .9-.4.9-.9z"
            strokeMiterlimit="10"
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
            d="M16.31 3.13c.52 2.31 1.52 3.31 3.83 3.83.19.04.19.31 0 .36-2.31.52-3.31 1.52-3.83 3.83-.04.2-.31.2-.36 0-.52-2.3-1.52-3.3-3.83-3.83-.19-.04-.19-.3 0-.36 2.31-.52 3.31-1.52 3.83-3.83.04-.19.31-.19.36 0Z"
            fill="currentColor"
          />
          <path
            d="M7.11 15.26s1.96-2.15 4.4-2.1c2.09.05 4.44.6 4.44 2.2 0 1.33-.83 1.64-1.11 1.7q-.04.02 0 .05c.25.04.98 0 2.54-1.33.75-.65 1.92-1.7 2.88-.86.77.68.62 1.78 0 2.5q-.8.9-1.72 1.67a6 6 0 0 1-2.08 1.24c-1.85.5-2.76.5-3.88.57s-2.96-1.02-5.47-.89v-4.74z"
            fill="currentColor"
            opacity={duotone ? "0.4" : "1"}
          />
          <path
            d="M7.11 15.26v-1.2c0-.5-.4-.9-.9-.9h-2.1c-.5 0-.9.4-.9.9v6.05c0 .5.4.9.9.9h2.1c.5 0 .9-.4.9-.9z"
            fill="currentColor"
            opacity={duotone ? "0.4" : "1"}
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
            d="M16.31 3.13c.52 2.31 1.52 3.31 3.83 3.83.19.04.19.31 0 .36-2.31.52-3.31 1.52-3.83 3.83-.04.2-.31.2-.36 0-.52-2.3-1.52-3.3-3.83-3.83-.19-.04-.19-.3 0-.36 2.31-.52 3.31-1.52 3.83-3.83.04-.19.31-.19.36 0Z"
            fill="currentColor"
          />
          <path
            d="M7.11 15.26s1.96-2.15 4.4-2.1c2.09.05 4.44.6 4.44 2.2 0 1.33-.83 1.64-1.11 1.7q-.04.02 0 .05c.25.04.98 0 2.54-1.33.75-.65 1.92-1.7 2.88-.86.77.68.62 1.78 0 2.5q-.8.9-1.72 1.67a6 6 0 0 1-2.08 1.24c-1.85.5-2.76.5-3.88.57s-2.96-1.02-5.47-.89v-4.74z"
            fill="currentColor"
          />
          <path
            d="M7.11 15.26v-1.2c0-.5-.4-.9-.9-.9h-2.1c-.5 0-.9.4-.9.9v6.05c0 .5.4.9.9.9h2.1c.5 0 .9-.4.9-.9z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiAssist;
