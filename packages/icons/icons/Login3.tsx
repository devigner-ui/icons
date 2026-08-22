import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLogin3 = forwardRef<SVGSVGElement, IconProps>(function IconLogin3(
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
            d="M2 12h14m0 0-3.5-3m3.5 3-3.5 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 7c.01-2.18.11-3.35.88-4.12C10.76 2 12.18 2 15 2h1c2.83 0 4.24 0 5.12.88S22 5.18 22 8v8c0 2.83 0 4.24-.88 5.12S18.82 22 16 22h-1c-2.83 0-4.24 0-5.12-.88C9.1 20.35 9 19.17 9 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M16 2h-1c-2.83 0-4.24 0-5.12.88S9 5.18 9 8v8c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1c2.83 0 4.24 0 5.12-.88S22 18.82 22 16V8c0-2.83 0-4.24-.88-5.12S18.82 2 16 2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 12c0-.42.34-.75.75-.75h11.97l-1.96-1.68A.75.75 0 0 1 13 8.43l3.5 3a.75.75 0 0 1 0 1.14l-3.5 3a.75.75 0 0 1-.98-1.14l1.96-1.68H2a.75.75 0 0 1-.75-.75"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.63 12c0 .41.33.75.75.75h10.97l-1.96 1.68a.75.75 0 1 0 .97 1.14l3.5-3a.75.75 0 0 0 0-1.14l-3.5-3a.75.75 0 1 0-.97 1.14l1.96 1.68H2.38a.75.75 0 0 0-.75.75"
            fill="currentColor"
          />
          <path
            d="M9.38 9.75h.37a2.25 2.25 0 0 1 3.59-2.46l3.5 3a2.25 2.25 0 0 1 0 3.42l-3.5 3a2.25 2.25 0 0 1-3.59-2.46h-.37V16c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h1c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12V8c0-2.83 0-4.24-.88-5.12S19.2 2 16.38 2h-1c-2.83 0-4.25 0-5.13.88S9.38 5.18 9.38 8z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLogin3;
