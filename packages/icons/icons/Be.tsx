import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBe = forwardRef<SVGSVGElement, IconProps>(function IconBe(
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
            d="M2.67 12h7a3 3 0 1 1 0 6h-6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5a3 3 0 1 1 0 6z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.67 14h8a4 4 0 1 0-8 0m0 0a4 4 0 0 0 4 4h1.67"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.17 7.5h-3"
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
            d="M9.67 18.75h-6c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5a3.75 3.75 0 0 1 2.66 6.39 3.74 3.74 0 0 1-1.66 7.11m-6.25-6V17c0 .14.11.25.25.25h6a2.25 2.25 0 0 0 0-4.5zm0-1.5h5.25a2.25 2.25 0 0 0 0-4.5h-5a.25.25 0 0 0-.25.25z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.34 18.75h-1.67A4.75 4.75 0 1 1 23.42 14c0 .41-.34.75-.75.75h-7.16a3.26 3.26 0 0 0 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75m-4.83-5.5h6.33a3.26 3.26 0 0 0-6.33 0"
            fill="currentColor"
          />
          <path
            d="M20.17 8.25h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M9.67 18.75h-6c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5a3.75 3.75 0 0 1 2.66 6.39 3.74 3.74 0 0 1-1.66 7.11m-6.25-6V17c0 .14.11.25.25.25h6a2.25 2.25 0 0 0 0-4.5zm0-1.5h5.25a2.25 2.25 0 0 0 0-4.5h-5a.25.25 0 0 0-.25.25z"
            fill="currentColor"
          />
          <path
            d="M20.34 18.75h-1.67A4.75 4.75 0 1 1 23.42 14c0 .41-.34.75-.75.75h-7.16a3.26 3.26 0 0 0 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75m-4.83-5.5h6.33a3.26 3.26 0 0 0-6.33 0"
            fill="currentColor"
          />
          <path
            d="M20.17 8.25h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBe;
