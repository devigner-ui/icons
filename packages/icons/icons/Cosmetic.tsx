import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCosmetic = forwardRef<SVGSVGElement, IconProps>(function IconCosmetic(
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
            d="M16.5 15.7a5.5 5.5 0 1 1 3.86-1.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16.5 19.7v-4m0 4h3m-3 0h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 10.7v-.75a.75.75 0 0 0-.75.75zm6 0h.75A.75.75 0 0 0 8 9.95zm.75 6a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM2 11.45h6v-1.5H2zm.75 5.25v-6h-1.5v6zM5 18.95c-1.24 0-2.25-1-2.25-2.25h-1.5A3.75 3.75 0 0 0 5 20.45zm2.25-2.25c0 1.24-1 2.25-2.25 2.25v1.5a3.75 3.75 0 0 0 3.75-3.75zm0-6v2h1.5v-2z"
            fill="currentColor"
          />
          <path
            d="M3 10.7h4V5.32a1 1 0 0 0-1.45-.9l-2 1a1 1 0 0 0-.55.9z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M11 10.2a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 19.7v-4m0 4h3m-3 0h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 10.7v-.75a.75.75 0 0 0-.75.75zm6 0h.75A.75.75 0 0 0 8 9.95zm-6 .75h6v-1.5H2zm5.25-.75v6h1.5v-6zm-4.5 6v-6h-1.5v6zM5 18.95c-1.24 0-2.25-1-2.25-2.25h-1.5A3.75 3.75 0 0 0 5 20.45zm2.25-2.25c0 1.24-1 2.25-2.25 2.25v1.5a3.75 3.75 0 0 0 3.75-3.75z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 10.7h4V5.32a1 1 0 0 0-1.45-.9l-2 1a1 1 0 0 0-.55.9z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M2 10.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V17a3 3 0 1 1-6 0z"
            fill="currentColor"
          />
          <path
            d="M3 10h4V5a1 1 0 0 0-1.45-.9l-2 1A1 1 0 0 0 3 6z"
            fill="currentColor"
          />
          <path
            d="M11 9.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.75 14.95v3.55H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-3.55a6 6 0 0 1-1.5 0"
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
            d="M2 11.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V17a3 3 0 1 1-6 0z"
            fill="currentColor"
          />
          <path
            d="M3 9.5h4V5a1 1 0 0 0-1.45-.9l-2 1A1 1 0 0 0 3 6z"
            fill="currentColor"
          />
          <path
            d="M11 9.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"
            fill="currentColor"
          />
          <path
            d="M15.75 16.71a7 7 0 0 0 1.5 0v1.79h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.25z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCosmetic;
