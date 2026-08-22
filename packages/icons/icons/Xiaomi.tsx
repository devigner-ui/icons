import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconXiaomi = forwardRef<SVGSVGElement, IconProps>(function IconXiaomi(
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
            d="M8.17 15V9h4a2 2 0 0 1 2 2v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.17 15v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.17 15V9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M14.17 15.75a.76.76 0 0 1-.75-.75v-4c0-.69-.56-1.25-1.25-1.25H8.92V15c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9c0-.41.34-.75.75-.75h4A2.75 2.75 0 0 1 14.92 11v4c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M11.17 15.75a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17.17 15.75a.76.76 0 0 1-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-.75 13c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75zm3 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4c0-.69-.56-1.25-1.25-1.25H8.92V15c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9c0-.41.34-.75.75-.75h4A2.75 2.75 0 0 1 14.92 11zm3 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconXiaomi;
