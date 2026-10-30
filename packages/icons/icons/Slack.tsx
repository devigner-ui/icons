import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSlack = forwardRef<SVGSVGElement, IconProps>(function IconSlack(
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
            d="M14.54 2.26c-1.03 0-1.86.83-1.86 1.86v4.64a1.86 1.86 0 1 0 3.72 0V4.12c0-1.03-.83-1.86-1.86-1.86Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.62 10.62h1.57a1.57 1.57 0 1 0 0-3.14c-.87 0-1.57.7-1.57 1.57z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M3.86 7.37a1.86 1.86 0 1 0 0 3.72H8.5a1.86 1.86 0 1 0 0-3.72h-.75"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.36 5.13V3.56a1.57 1.57 0 1 0-3.14 0c0 .87.7 1.57 1.57 1.57z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.43 21.77c1.03 0 1.86-.83 1.86-1.86v-4.64a1.86 1.86 0 1 0-3.72 0v4.64c0 1.02.83 1.86 1.86 1.86Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.36 13.41H3.8a1.57 1.57 0 1 0 0 3.14c.87 0 1.57-.7 1.57-1.57z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.97 14.8c0-1.03-.83-1.86-1.86-1.86h-4.64a1.86 1.86 0 1 0 0 3.72h4.64c1.03 0 1.86-.83 1.86-1.86Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.6 18.84v1.57a1.57 1.57 0 1 0 3.15 0c0-.87-.7-1.57-1.57-1.57z"
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
            d="M14.54 2.26c-1.03 0-1.86.83-1.86 1.86v4.64a1.86 1.86 0 1 0 3.72 0V4.12c0-1.03-.83-1.86-1.86-1.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.62 10.62h1.57a1.57 1.57 0 1 0 0-3.14c-.87 0-1.57.7-1.57 1.57z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 9.23c0 1.03.83 1.86 1.86 1.86H8.5a1.86 1.86 0 1 0 0-3.72H3.86C2.83 7.37 2 8.2 2 9.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.36 5.13V3.56a1.57 1.57 0 1 0-3.14 0c0 .87.7 1.57 1.57 1.57z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.43 21.77c1.03 0 1.86-.83 1.86-1.86v-4.64a1.86 1.86 0 1 0-3.72 0v4.64c0 1.02.83 1.86 1.86 1.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.36 13.41H3.79a1.57 1.57 0 1 0 0 3.14c.87 0 1.57-.7 1.57-1.57z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.97 14.8c0-1.03-.83-1.86-1.86-1.86h-4.64a1.86 1.86 0 1 0 0 3.72h4.64c1.03 0 1.86-.83 1.86-1.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.61 18.84v1.57a1.57 1.57 0 1 0 3.14 0c0-.87-.7-1.57-1.57-1.57z"
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
            d="M14.54 1.88c-1.23 0-2.23 1-2.23 2.23v4.64a2.23 2.23 0 0 0 4.46 0V4.11c0-1.22-1-2.23-2.23-2.23"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.18 7.11c-1.07 0-1.94.87-1.94 1.94v1.57c0 .21.17.38.38.38h1.57a1.94 1.94 0 1 0-.01-3.89"
            fill="currentColor"
          />
          <path
            d="M8.5 6.99H3.86a2.23 2.23 0 0 0 0 4.46H8.5a2.23 2.23 0 0 0 0-4.46"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.79 1.62a1.94 1.94 0 0 0 0 3.88h1.57c.21 0 .38-.17.38-.38V3.55a1.96 1.96 0 0 0-1.95-1.93"
            fill="currentColor"
          />
          <path
            d="M9.43 13.03c-1.23 0-2.23 1-2.23 2.23v4.64a2.23 2.23 0 0 0 4.46 0v-4.64c0-1.23-1-2.23-2.23-2.23"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.36 13.03H3.79a1.94 1.94 0 1 0 1.94 1.94V13.4c0-.2-.17-.37-.37-.37"
            fill="currentColor"
          />
          <path
            d="M20.11 12.57h-4.64a2.23 2.23 0 0 0 0 4.46h4.64a2.23 2.23 0 0 0 0-4.46"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.18 18.47h-1.57a.4.4 0 0 0-.38.38v1.57a1.94 1.94 0 1 0 1.95-1.95"
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
            d="M14.54 1.88c-1.23 0-2.23 1-2.23 2.23v4.64a2.23 2.23 0 0 0 4.46 0V4.11c0-1.22-1-2.23-2.23-2.23"
            fill="currentColor"
          />
          <path
            d="M20.18 7.11c-1.07 0-1.94.87-1.94 1.94v1.57c0 .21.17.38.38.38h1.57a1.94 1.94 0 1 0-.01-3.89"
            fill="currentColor"
          />
          <path
            d="M8.5 6.99H3.86a2.23 2.23 0 0 0 0 4.46H8.5a2.23 2.23 0 0 0 0-4.46"
            fill="currentColor"
          />
          <path
            d="M8.79 1.62a1.94 1.94 0 0 0 0 3.88h1.57c.21 0 .38-.17.38-.38V3.55a1.96 1.96 0 0 0-1.95-1.93"
            fill="currentColor"
          />
          <path
            d="M9.43 13.03c-1.23 0-2.23 1-2.23 2.23v4.64a2.23 2.23 0 0 0 4.46 0v-4.64c0-1.23-1-2.23-2.23-2.23"
            fill="currentColor"
          />
          <path
            d="M5.36 13.03H3.79a1.94 1.94 0 1 0 1.94 1.94V13.4c0-.2-.17-.37-.37-.37"
            fill="currentColor"
          />
          <path
            d="M20.11 12.57h-4.64a2.23 2.23 0 0 0 0 4.46h4.64a2.23 2.23 0 0 0 0-4.46"
            fill="currentColor"
          />
          <path
            d="M15.18 18.47h-1.57a.4.4 0 0 0-.38.38v1.57a1.94 1.94 0 1 0 1.95-1.95"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSlack;
