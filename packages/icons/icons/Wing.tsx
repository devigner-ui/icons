import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWing = forwardRef<SVGSVGElement, IconProps>(function IconWing(
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
            d="M16 5h3.5l2.7 4.7L17 19l-1.85-3.1 3.55-6.2z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.84 17.49 10 19l-1.85-3.1 3.55-6.2L9 5h3.5l2.7 4.7-2.27 4.07"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M1.8 5h3.5L8 9.8l-1.7 2.9z"
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
            d="M16 5h3.5l2.7 4.7L17 19l-1.85-3.1 3.55-6.2z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 5h3.5l2.7 4.7L10 19l-1.85-3.1 3.55-6.2z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.8 5h3.5L8 9.8l-1.7 2.9z"
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
            d="M24 .25H0v24h24z"
            fill="none"
          />
          <path
            d="M16.86 5.25h2.35q.28.01.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3a.5.5 0 0 1-.87.01l-1.26-2.11a.5.5 0 0 1 0-.5l3.26-5.7a.5.5 0 0 0 0-.5l-2.13-3.7a.5.5 0 0 1 .45-.74"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.86 5.25h2.35q.28.01.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3a.5.5 0 0 1-.87.01l-1.26-2.11a.5.5 0 0 1 0-.5l3.26-5.7a.5.5 0 0 0 0-.5l-2.13-3.7a.5.5 0 0 1 .45-.74"
            fill="currentColor"
          />
          <path
            d="M1.8 5.25h3.21q.29.01.44.25l2.42 4.29a.5.5 0 0 1 0 .5l-1.12 1.92a.5.5 0 0 1-.86 0z"
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
            d="M16.86 5.25h2.35q.28.01.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3a.5.5 0 0 1-.87.01l-1.26-2.11a.5.5 0 0 1 0-.5l3.26-5.7a.5.5 0 0 0 0-.5l-2.13-3.7a.5.5 0 0 1 .45-.74"
            fill="currentColor"
          />
          <path
            d="M9.86 5.25h2.35q.28.01.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3a.5.5 0 0 1-.87.01l-1.26-2.11a.5.5 0 0 1 0-.5l3.26-5.7a.5.5 0 0 0 0-.5l-2.13-3.7a.5.5 0 0 1 .45-.74"
            fill="currentColor"
          />
          <path
            d="M1.8 5.25h3.21q.29.01.44.25l2.42 4.29a.5.5 0 0 1 0 .5l-1.12 1.92a.5.5 0 0 1-.86 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWing;
