import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaker = forwardRef<SVGSVGElement, IconProps>(function IconMaker(
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
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.25 14.5v-5l4.17 2.5v2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.09 14.5v-5L13.92 12v2.5"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M11.42 15.25a.76.76 0 0 1-.75-.75v-2.08L8 10.82v3.68c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-5a.75.75 0 0 1 1.13-.64l4.17 2.5q.35.23.36.64v2.5a.74.74 0 0 1-.74.75"
            fill="currentColor"
          />
          <path
            d="M18.09 15.25a.76.76 0 0 1-.75-.75v-3.68l-2.67 1.6v2.08c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V12c0-.26.14-.51.36-.64l4.17-2.5a.75.75 0 0 1 1.13.64v5a.74.74 0 0 1-.74.75"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-.5 12.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.08L8 10.82v3.68c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-5a.75.75 0 0 1 1.13-.64l4.17 2.5q.35.23.36.64zm6.67 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.68l-2.67 1.6v2.08c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V12c0-.26.14-.51.36-.64l4.17-2.5a.75.75 0 0 1 1.13.64v5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMaker;
