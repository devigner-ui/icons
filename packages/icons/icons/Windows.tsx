import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWindows = forwardRef<SVGSVGElement, IconProps>(function IconWindows(
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
            d="M22 6.03V2L12 4v7h10"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m22 22-10-2v-7h10z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 4.3 2 6v5h8z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 19.7 2 18v-5h8z"
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 2 12 4v7h10z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m22 22-10-2v-7h10z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 4.3 2 6v5h8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 19.7 2 18v-5h8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="m20.8 2.24-8 1.6c-.47.09-.8.5-.8.98V10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3.22a1 1 0 0 0-1.2-.98"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m20.8 21.76-8-1.6a1 1 0 0 1-.8-.98V14a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6.78a1 1 0 0 1-1.2.98"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m8.79 4.56-6 1.28a1 1 0 0 0-.79.98V10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5.53a1 1 0 0 0-1.21-.97"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="m8.79 19.44-6-1.28a1 1 0 0 1-.79-.98V14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4.47a1 1 0 0 1-1.21.97"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m20.8 2.24-8 1.6c-.47.09-.8.5-.8.98V10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3.22a1 1 0 0 0-1.2-.98"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m20.8 21.76-8-1.6a1 1 0 0 1-.8-.98V14a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6.78a1 1 0 0 1-1.2.98"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m8.79 4.56-6 1.27a1 1 0 0 0-.79.98V10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5.53a1 1 0 0 0-1.21-.97"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m8.79 19.44-6-1.27a1 1 0 0 1-.79-.98V14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4.47a1 1 0 0 1-1.21.97"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWindows;
