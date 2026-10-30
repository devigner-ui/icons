import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTagCompact = forwardRef<SVGSVGElement, IconProps>(function IconTagCompact(
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
            d="M15.3 4.17a4.8 4.8 0 0 0-3.6-1.39l-5 .24a3.86 3.86 0 0 0-3.69 3.67l-.24 5a4.8 4.8 0 0 0 1.39 3.6l4.53 4.53a4.8 4.8 0 0 0 6.75 0l4.4-4.39a4.8 4.8 0 0 0 0-6.75L18.7 7.55"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.51 11.8A2.5 2.5 0 1 0 7 9.5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="m13 17 4-4"
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
            d="m4.17 15.33 4.53 4.53a4.8 4.8 0 0 0 6.75 0l4.4-4.4a4.8 4.8 0 0 0 0-6.74L15.3 4.2a4.8 4.8 0 0 0-3.6-1.4l-5 .25a3.86 3.86 0 0 0-3.69 3.67l-.24 5a4.8 4.8 0 0 0 1.4 3.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 12.03a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m13 17.03 4-4"
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
            d="m4.17 15.3 4.53 4.53a4.8 4.8 0 0 0 6.75 0l4.39-4.39a4.8 4.8 0 0 0 0-6.75L15.3 4.17a4.8 4.8 0 0 0-3.6-1.39l-5 .24a3.86 3.86 0 0 0-3.69 3.67l-.24 5a4.8 4.8 0 0 0 1.4 3.61"
            fill="currentColor"
          />
          <path
            d="M9.5 12.38a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76"
            fill="currentColor"
          />
          <path
            d="M13 17.75a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-4 4a.7.7 0 0 1-.53.22"
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
            d="M19.83 8.7 15.3 4.17a4.8 4.8 0 0 0-3.6-1.39l-5 .24a3.86 3.86 0 0 0-3.69 3.67l-.24 5a4.8 4.8 0 0 0 1.4 3.6l4.52 4.53a4.8 4.8 0 0 0 6.75 0l4.4-4.39a4.74 4.74 0 0 0 0-6.73M9.51 12.38a2.89 2.89 0 0 1 0-5.76 2.89 2.89 0 0 1 0 5.76m8.03 1.15-4 4a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTagCompact;
