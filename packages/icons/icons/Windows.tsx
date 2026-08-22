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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="m22.67 2-10 2v7h10z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m22.67 22-10-2v-7h10z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m10.67 4.3-8 1.7v5h8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="m10.67 19.7-8-1.7v-5h8z"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="m21.47 2.24-8 1.6c-.47.09-.8.5-.8.98V10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3.22a1 1 0 0 0-1.2-.98"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m21.47 21.76-8-1.6a1 1 0 0 1-.8-.98V14a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6.78a1 1 0 0 1-1.2.98"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m9.46 4.56-6 1.28a1 1 0 0 0-.79.98V10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5.53a1 1 0 0 0-1.21-.97"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="m9.46 19.44-6-1.28a1 1 0 0 1-.79-.98V14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4.47a1 1 0 0 1-1.21.97"
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
            d="m21.47 2.24-8 1.6c-.47.09-.8.5-.8.98V10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3.22a1 1 0 0 0-1.2-.98"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m21.47 21.76-8-1.6a1 1 0 0 1-.8-.98V14a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6.78a1 1 0 0 1-1.2.98"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m9.46 4.56-6 1.27a1 1 0 0 0-.79.98V10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5.53a1 1 0 0 0-1.21-.97"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m9.46 19.44-6-1.27a1 1 0 0 1-.79-.98V14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4.47a1 1 0 0 1-1.21.97"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWindows;
