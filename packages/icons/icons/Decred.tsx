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
            d="M3.82 8.99q.72-.75 1.65-1.24l.19-.1L2 4h5l6 6H8.5a3.5 3.5 0 0 0 0 7H10l3 3H8.5a6.5 6.5 0 0 1-6.43-7.46"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.35 16.35 22 20h-5l-6-6h4.5a3.5 3.5 0 0 0 0-7H14l-3-3h4.5a6.5 6.5 0 0 1 3.03 12.25z"
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
            d="M5.65 7.65 2 4h5l6 6H8.5a3.5 3.5 0 0 0 0 7H10l3 3H8.5A6.5 6.5 0 0 1 5.47 7.75z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.35 16.35 22 20h-5l-6-6h4.5a3.5 3.5 0 0 0 0-7H14l-3-3h4.5a6.5 6.5 0 0 1 3.03 12.25z"
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
            d="m5.65 7.65-2.8-2.8A.5.5 0 0 1 3.21 4H6.8q.2 0 .35.15l5 5a.5.5 0 0 1-.35.85H8.51a3.5 3.5 0 0 0 0 7h1.5l2.15 2.15a.5.5 0 0 1-.35.85H8.52A6.5 6.5 0 0 1 5.49 7.75z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.35 16.35 2.8 2.8a.5.5 0 0 1-.35.85h-3.59a.5.5 0 0 1-.35-.15l-5-5a.5.5 0 0 1 .35-.85h3.29a3.5 3.5 0 0 0 0-7H14l-2.15-2.15a.5.5 0 0 1 .36-.85h3.29a6.5 6.5 0 0 1 3.03 12.25z"
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
            d="m5.65 7.65-2.8-2.8A.5.5 0 0 1 3.2 4h3.59q.2 0 .35.15l5 5a.5.5 0 0 1-.35.85H8.5a3.5 3.5 0 0 0 0 7H10l2.15 2.15a.5.5 0 0 1-.35.85H8.51A6.5 6.5 0 0 1 5.48 7.75z"
            fill="currentColor"
          />
          <path
            d="m18.35 16.35 2.8 2.8a.5.5 0 0 1-.35.85h-3.59a.5.5 0 0 1-.35-.15l-5-5a.5.5 0 0 1 .35-.85h3.29a3.5 3.5 0 0 0 0-7H14l-2.15-2.15A.5.5 0 0 1 12.2 4h3.29a6.5 6.5 0 0 1 3.03 12.25z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDecred;
