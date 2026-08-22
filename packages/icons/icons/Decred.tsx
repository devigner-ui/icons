import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDecred = forwardRef<SVGSVGElement, IconProps>(function IconDecred(
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
            d="M6.32 7.65 2.67 4h5l6 6h-4.5a3.5 3.5 0 0 0 0 7h1.5l3 3h-4.5A6.5 6.5 0 0 1 6.14 7.75z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.02 16.35 22.67 20h-5l-6-6h4.5a3.5 3.5 0 0 0 0-7h-1.5l-3-3h4.5a6.5 6.5 0 0 1 3.03 12.25z"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="m6.32 7.65-2.8-2.8A.5.5 0 0 1 3.88 4h3.59q.2 0 .35.15l5 5a.5.5 0 0 1-.35.85H9.18a3.5 3.5 0 0 0 0 7h1.5l2.15 2.15a.5.5 0 0 1-.35.85H9.19A6.5 6.5 0 0 1 6.16 7.75z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.02 16.35 2.8 2.8a.5.5 0 0 1-.35.85h-3.59a.5.5 0 0 1-.35-.15l-5-5a.5.5 0 0 1 .35-.85h3.29a3.5 3.5 0 0 0 0-7h-1.5l-2.15-2.15a.5.5 0 0 1 .36-.85h3.29a6.5 6.5 0 0 1 3.03 12.25z"
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
            d="m6.32 7.65-2.8-2.8A.5.5 0 0 1 3.87 4h3.59q.2 0 .35.15l5 5a.5.5 0 0 1-.35.85H9.17a3.5 3.5 0 0 0 0 7h1.5l2.15 2.15a.5.5 0 0 1-.35.85H9.18A6.5 6.5 0 0 1 6.15 7.75z"
            fill="currentColor"
          />
          <path
            d="m19.02 16.35 2.8 2.8a.5.5 0 0 1-.35.85h-3.59a.5.5 0 0 1-.35-.15l-5-5a.5.5 0 0 1 .35-.85h3.29a3.5 3.5 0 0 0 0-7h-1.5l-2.15-2.15a.5.5 0 0 1 .35-.85h3.29a6.5 6.5 0 0 1 3.03 12.25z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDecred;
