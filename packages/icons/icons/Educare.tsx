import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEducare = forwardRef<SVGSVGElement, IconProps>(function IconEducare(
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
            d="m8.52 5.15 2.67 2.67c.45.45 1.17.45 1.62 0l2.67-2.67c.72-.72.21-1.95-.8-1.95H9.31c-1-.01-1.52 1.23-.8 1.95Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m8.52 18.85 2.67-2.67a1.14 1.14 0 0 1 1.62 0l2.67 2.67c.72.72.21 1.95-.8 1.95H9.31c-1 .01-1.52-1.23-.8-1.95Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m2.16 11.45 2.2-3.48a1.02 1.02 0 0 1 1.59-.17l3.48 3.48c.4.4.4 1.04 0 1.44L5.95 16.2c-.46.46-1.23.38-1.58-.17l-2.21-3.48a1 1 0 0 1 0-1.1Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.05 7.8a1.02 1.02 0 0 1 1.58.17l2.21 3.48c.21.33.21.76 0 1.09l-2.21 3.48c-.35.55-1.12.63-1.58.17l-3.48-3.48c-.4-.4-.4-1.04 0-1.44l.36-.36"
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
            d="m8.52 5.15 2.67 2.67c.45.45 1.17.45 1.62 0l2.67-2.67c.72-.72.21-1.95-.81-1.95H9.32c-1.01-.01-1.52 1.23-.8 1.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.52 18.85 2.67-2.67a1.14 1.14 0 0 1 1.62 0l2.67 2.67c.72.72.21 1.95-.81 1.95H9.32c-1.01.01-1.52-1.23-.8-1.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.16 11.45 2.21-3.48a1.02 1.02 0 0 1 1.58-.17l3.48 3.48c.4.4.4 1.04 0 1.44L5.95 16.2c-.46.46-1.23.38-1.58-.17l-2.21-3.48a1 1 0 0 1 0-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21.84 11.45-2.21-3.48a1.02 1.02 0 0 0-1.58-.17l-3.48 3.48c-.4.4-.4 1.04 0 1.44l3.48 3.48c.46.46 1.23.38 1.58-.17l2.21-3.48c.21-.34.21-.76 0-1.1"
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
            opacity={duotone ? "0.4" : "1"}
            d="m7.93 5.48 3.13 3.13c.52.52 1.37.52 1.89 0l3.13-3.13c.84-.84.25-2.29-.95-2.29H8.87a1.34 1.34 0 0 0-.94 2.29"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7.93 18.52 3.13-3.13a1.34 1.34 0 0 1 1.89 0l3.13 3.13c.84.84.25 2.29-.95 2.29H8.87a1.34 1.34 0 0 1-.94-2.29"
            fill="currentColor"
          />
          <path
            d="m2.16 11.43 2.29-3.6a1.06 1.06 0 0 1 1.64-.18l3.6 3.6c.41.41.41 1.08 0 1.49l-3.6 3.6c-.48.48-1.27.39-1.64-.18l-2.29-3.6a1.1 1.1 0 0 1 0-1.13"
            fill="currentColor"
          />
          <path
            d="m21.84 11.43-2.29-3.6a1.06 1.06 0 0 0-1.64-.18l-3.6 3.6a1.06 1.06 0 0 0 0 1.49l3.6 3.6c.48.48 1.27.39 1.64-.18l2.29-3.6a1.1 1.1 0 0 0 0-1.13"
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
            d="m7.93 5.48 3.13 3.13c.52.52 1.37.52 1.89 0l3.13-3.13c.84-.84.25-2.29-.95-2.29H8.87a1.34 1.34 0 0 0-.94 2.29"
            fill="currentColor"
          />
          <path
            d="m7.93 18.52 3.13-3.13a1.34 1.34 0 0 1 1.89 0l3.13 3.13c.84.84.25 2.29-.95 2.29H8.87a1.34 1.34 0 0 1-.94-2.29"
            fill="currentColor"
          />
          <path
            d="m2.16 11.43 2.29-3.6a1.06 1.06 0 0 1 1.64-.18l3.6 3.6c.41.41.41 1.08 0 1.49l-3.6 3.6c-.48.48-1.27.39-1.64-.18l-2.29-3.6a1.1 1.1 0 0 1 0-1.13"
            fill="currentColor"
          />
          <path
            d="m21.84 11.43-2.29-3.6a1.06 1.06 0 0 0-1.64-.18l-3.6 3.6a1.06 1.06 0 0 0 0 1.49l3.6 3.6c.48.48 1.27.39 1.64-.18l2.29-3.6a1.1 1.1 0 0 0 0-1.13"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEducare;
