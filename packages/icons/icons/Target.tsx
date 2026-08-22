import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTarget = forwardRef<SVGSVGElement, IconProps>(function IconTarget(
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
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 12h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 5V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 12h-2m2 0h2m-2 0v2m0-2v-2"
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
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
            fill="currentColor"
          />
          <path
            d="M9.25 12c0-.41.34-.75.75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M2.03 12.75a10 10 0 0 1 0-1.5H5a.75.75 0 0 1 0 1.5z"
            fill="currentColor"
          />
          <path
            d="M12.75 21.97a10 10 0 0 1-1.5 0V19a.75.75 0 0 1 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M21.97 11.25a10 10 0 0 1 0 1.5H19a.75.75 0 0 1 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M12.75 2.03V5a.75.75 0 0 1-1.5 0V2.03a10 10 0 0 1 1.5 0"
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
            d="M11.25 2C6.3 2.37 2.37 6.3 2 11.25h2.98a.75.75 0 1 1 0 1.5H2c.37 4.94 4.3 8.88 9.25 9.25v-2.98a.75.75 0 0 1 1.5 0V22c4.94-.37 8.88-4.3 9.25-9.25h-2.98a.75.75 0 0 1 0-1.5H22A10 10 0 0 0 12.75 2v2.98a.75.75 0 1 1-1.5 0zm-2 10c0-.42.33-.75.74-.75h1.26V9.99a.75.75 0 1 1 1.5 0v1.26h1.26a.75.75 0 0 1 0 1.5h-1.26v1.26a.75.75 0 0 1-1.5 0v-1.26H9.99a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTarget;
