import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWoman = forwardRef<SVGSVGElement, IconProps>(function IconWoman(
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
            d="M12.67 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 16v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.67 19h-6"
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
            d="M19.67 9a7 7 0 1 1-13.99.01A7 7 0 0 1 19.67 9"
            fill="currentColor"
          />
          <path
            d="M16.42 19c0 .41-.34.75-.75.75h-2.25V22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.25H9.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.25v-2.29a6 6 0 0 0 1.5 0v2.29h2.25c.41 0 .75.34.75.75"
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
            d="M19.67 9a7 7 0 1 0-7.75 6.96v2.29H9.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.25h2.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.25v-2.29A7 7 0 0 0 19.67 9"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWoman;
