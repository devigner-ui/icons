import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTriangle = forwardRef<SVGSVGElement, IconProps>(function IconTriangle(
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
            d="m11.57 2-10 10 10 10v-4l-6-6 6-6z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m13.57 2 10 10-10 10v-4l6-6-6-6z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.57 9-3 3 3 3z"
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
            opacity={duotone ? "0.4" : "1"}
            d="m10.72 2.85-8.79 8.79a.5.5 0 0 0 0 .71l8.79 8.79c.32.31.85.09.85-.35V18.2a.5.5 0 0 0-.15-.35l-5.5-5.5a.5.5 0 0 1 0-.71l5.5-5.5a.5.5 0 0 0 .15-.35V3.2a.5.5 0 0 0-.85-.35"
            fill="currentColor"
          />
          <path
            d="m14.42 2.85 8.79 8.79c.2.2.2.51 0 .71l-8.79 8.79a.5.5 0 0 1-.85-.35V18.2q0-.2.15-.35l5.5-5.5a.5.5 0 0 0 0-.71l-5.5-5.5a.5.5 0 0 1-.15-.35V3.2a.5.5 0 0 1 .85-.35"
            fill="currentColor"
          />
          <path
            d="m10.72 9.85-1.79 1.79a.5.5 0 0 0 0 .71l1.79 1.79c.32.31.85.09.85-.35V10.2a.5.5 0 0 0-.85-.35"
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
            d="m10.72 2.85-8.79 8.79a.5.5 0 0 0 0 .71l8.79 8.79c.32.31.85.09.85-.35V18.2a.5.5 0 0 0-.15-.35l-5.5-5.5a.5.5 0 0 1 0-.71l5.5-5.5a.5.5 0 0 0 .15-.35V3.2a.5.5 0 0 0-.85-.35"
            fill="currentColor"
          />
          <path
            d="m14.42 2.85 8.79 8.79c.2.2.2.51 0 .71l-8.79 8.79a.5.5 0 0 1-.85-.35V18.2q0-.2.15-.35l5.5-5.5a.5.5 0 0 0 0-.71l-5.5-5.5a.5.5 0 0 1-.15-.35V3.2a.5.5 0 0 1 .85-.35"
            fill="currentColor"
          />
          <path
            d="m10.72 9.85-1.79 1.79a.5.5 0 0 0 0 .71l1.79 1.79c.32.31.85.09.85-.35V10.2a.5.5 0 0 0-.85-.35"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTriangle;
