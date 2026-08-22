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
            d="m9.19 5.15 2.67 2.67c.45.45 1.17.45 1.62 0l2.67-2.67c.72-.72.21-1.95-.81-1.95H9.99c-1.01-.01-1.52 1.23-.8 1.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9.19 18.85 2.67-2.67a1.14 1.14 0 0 1 1.62 0l2.67 2.67c.72.72.21 1.95-.81 1.95H9.99c-1.01.01-1.52-1.23-.8-1.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.83 11.45 2.21-3.48a1.02 1.02 0 0 1 1.58-.17l3.48 3.48c.4.4.4 1.04 0 1.44L6.62 16.2c-.46.46-1.23.38-1.58-.17l-2.21-3.48a1 1 0 0 1 0-1.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.51 11.45 20.3 7.97a1.02 1.02 0 0 0-1.58-.17l-3.48 3.48c-.4.4-.4 1.04 0 1.44l3.48 3.48c.46.46 1.23.38 1.58-.17l2.21-3.48c.21-.34.21-.76 0-1.1"
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
            d="m8.6 5.48 3.13 3.13c.52.52 1.37.52 1.89 0l3.13-3.13c.84-.84.25-2.29-.95-2.29H9.54a1.34 1.34 0 0 0-.94 2.29"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.6 18.52 3.13-3.13a1.34 1.34 0 0 1 1.89 0l3.13 3.13c.84.84.25 2.29-.95 2.29H9.54a1.34 1.34 0 0 1-.94-2.29"
            fill="currentColor"
          />
          <path
            d="m2.83 11.43 2.29-3.6a1.06 1.06 0 0 1 1.64-.18l3.6 3.6c.41.41.41 1.08 0 1.49l-3.6 3.6c-.48.48-1.27.39-1.64-.18l-2.29-3.6a1.1 1.1 0 0 1 0-1.13"
            fill="currentColor"
          />
          <path
            d="m22.51 11.43-2.29-3.6a1.06 1.06 0 0 0-1.64-.18l-3.6 3.6a1.06 1.06 0 0 0 0 1.49l3.6 3.6c.48.48 1.27.39 1.64-.18l2.29-3.6a1.1 1.1 0 0 0 0-1.13"
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
            d="m8.6 5.48 3.13 3.13c.52.52 1.37.52 1.89 0l3.13-3.13c.84-.84.25-2.29-.95-2.29H9.54a1.34 1.34 0 0 0-.94 2.29"
            fill="currentColor"
          />
          <path
            d="m8.6 18.52 3.13-3.13a1.34 1.34 0 0 1 1.89 0l3.13 3.13c.84.84.25 2.29-.95 2.29H9.54a1.34 1.34 0 0 1-.94-2.29"
            fill="currentColor"
          />
          <path
            d="m2.83 11.43 2.29-3.6a1.06 1.06 0 0 1 1.64-.18l3.6 3.6c.41.41.41 1.08 0 1.49l-3.6 3.6c-.48.48-1.27.39-1.64-.18l-2.29-3.6a1.1 1.1 0 0 1 0-1.13"
            fill="currentColor"
          />
          <path
            d="m22.51 11.43-2.29-3.6a1.06 1.06 0 0 0-1.64-.18l-3.6 3.6a1.06 1.06 0 0 0 0 1.49l3.6 3.6c.48.48 1.27.39 1.64-.18l2.29-3.6a1.1 1.1 0 0 0 0-1.13"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEducare;
