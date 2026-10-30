import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWindLong = forwardRef<SVGSVGElement, IconProps>(function IconWindLong(
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
            d="M2 14.2h11.65m3.5 0h1.35a3.5 3.5 0 1 1-3.5 3.5v-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 11.2h16.5c1.92 0 3.5-1.57 3.5-3.5a3.5 3.5 0 0 0-7 0v.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 8.2h7.31a2.7 2.7 0 1 0-2.69-2.69v.38"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M2 14.2h16.5a3.5 3.5 0 1 1-3.5 3.5v-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 11.2h16.5c1.92 0 3.5-1.57 3.5-3.5 0-1.92-1.58-3.5-3.5-3.5A3.5 3.5 0 0 0 15 7.7v.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 8.2h7.31a2.7 2.7 0 1 0-2.69-2.69v.38"
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
            d="M18.5 21.95a4.26 4.26 0 0 1-4.25-4.25v-.5c0-.41.34-.75.75-.75s.75.34.75.75v.5a2.75 2.75 0 1 0 2.75-2.75H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h16.5a4.26 4.26 0 0 1 0 8.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.5 11.95H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h16.5a2.75 2.75 0 1 0-2.75-2.75v.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.5a4.26 4.26 0 0 1 8.5 0 4.26 4.26 0 0 1-4.25 4.25"
            fill="currentColor"
          />
          <path
            d="M9.31 8.95H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7.31a1.94 1.94 0 1 0-1.94-1.94v.38a.75.75 0 1 1-1.5 0v-.38a3.44 3.44 0 1 1 3.44 3.44"
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
            d="M18.5 21.95a4.26 4.26 0 0 1-4.25-4.25v-.5c0-.41.34-.75.75-.75s.75.34.75.75v.5a2.75 2.75 0 1 0 2.75-2.75H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h16.5a4.26 4.26 0 0 1 0 8.5"
            fill="currentColor"
          />
          <path
            d="M18.5 11.95H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h16.5a2.75 2.75 0 1 0-2.75-2.75v.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.5a4.26 4.26 0 0 1 8.5 0 4.26 4.26 0 0 1-4.25 4.25"
            fill="currentColor"
          />
          <path
            d="M9.31 8.95H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7.31a1.94 1.94 0 1 0-1.94-1.94v.38a.75.75 0 1 1-1.5 0v-.38a3.44 3.44 0 1 1 3.44 3.44"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWindLong;
