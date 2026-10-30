import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAndroid = forwardRef<SVGSVGElement, IconProps>(function IconAndroid(
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
            d="M11 18.3v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-3z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 18.3v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-3z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 11.3c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-.71"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5 11.3v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21 11.3v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13 18.3h-2"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.6 7.3h4.8c.88 0 1.6-.72 1.6-1.6a4 4 0 1 0-8 0c0 .88.72 1.6 1.6 1.6Z"
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
            d="M11 18.3v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 18.3v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 11.3v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 11.3v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 11.3v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 18.3h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.6 7.3h4.8c.88 0 1.6-.72 1.6-1.6a4 4 0 1 0-8 0c0 .88.72 1.6 1.6 1.6"
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
            d="M24 0H0v24h24z"
            fill="none"
          />
          <path
            d="M11 18v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-3z"
            fill="currentColor"
          />
          <path
            d="M15 18v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-3z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 11v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2"
            fill="currentColor"
          />
          <path
            d="M5 11v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M21 11v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.6 7.6h4.8c.88 0 1.6-.72 1.6-1.6a4 4 0 1 0-8 0c0 .88.72 1.6 1.6 1.6"
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
            d="M11 18v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-3z"
            fill="currentColor"
          />
          <path
            d="M15 18v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-3z"
            fill="currentColor"
          />
          <path
            d="M17 11v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2"
            fill="currentColor"
          />
          <path
            d="M5 11v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M21 11v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M9.6 7.6h4.8c.88 0 1.6-.72 1.6-1.6a4 4 0 1 0-8 0c0 .88.72 1.6 1.6 1.6"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAndroid;
