import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLogout3 = forwardRef<SVGSVGElement, IconProps>(function IconLogout3(
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
            opacity={duotone ? "0.4" : "1"}
            d="M9 7c.01-2.18.11-3.35.88-4.12C10.76 2 12.18 2 15 2h1c2.83 0 4.24 0 5.12.88S22 5.18 22 8v8c0 2.83 0 4.24-.88 5.12S18.82 22 16 22h-1c-2.83 0-4.24 0-5.12-.88C9.1 20.35 9 19.17 9 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M15 12H2m0 0 3.5-3M2 12l3.5 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M16 2h-1c-2.83 0-4.24 0-5.12.88S9 5.18 9 8v8c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1c2.83 0 4.24 0 5.12-.88S22 18.82 22 16V8c0-2.83 0-4.24-.88-5.12S18.82 2 16 2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.75 12a.75.75 0 0 0-.75-.75H4.03l1.96-1.68A.75.75 0 1 0 5 8.43l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 1-1.14l-1.96-1.68H15c.41 0 .75-.34.75-.75"
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
            d="M16.13 12a.75.75 0 0 0-.75-.75H4.4l1.96-1.68a.75.75 0 1 0-.97-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .97-1.14L4.4 12.75h10.98c.4 0 .75-.34.75-.75"
            fill="currentColor"
          />
          <path
            d="M9.38 8c0 .7 0 1.05.16 1.3q.12.16.28.28c.25.17.6.17 1.3.17h4.26a2.25 2.25 0 1 1 0 4.5h-4.25c-.7 0-1.06 0-1.31.17a1 1 0 0 0-.28.27c-.16.26-.16.6-.16 1.31 0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.12.88h1c2.83 0 4.25 0 5.13-.88s.87-2.3.87-5.12V8c0-2.83 0-4.24-.87-5.12C20.62 2 19.2 2 16.37 2h-1c-2.82 0-4.24 0-5.12.88S9.38 5.18 9.38 8"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLogout3;
