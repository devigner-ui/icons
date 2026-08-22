import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSize = forwardRef<SVGSVGElement, IconProps>(function IconSize(
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
            d="M17.64 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C2.64 8.5 4.14 7 7.89 7h4.5c3.75 0 5.25 1.5 5.25 5.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.64 5.85v3.3c0 2.75-1.1 3.85-3.85 3.85h-1.15v-.75c0-3.75-1.5-5.25-5.25-5.25h-.75V5.85c0-2.75 1.1-3.85 3.85-3.85h3.3c2.75 0 3.85 1.1 3.85 3.85"
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
            d="M22.64 5.5v4a3.5 3.5 0 0 1-3.5 3.5h-1.5v-.75c0-2.9-2.35-5.25-5.25-5.25h-.75V5.5a3.5 3.5 0 0 1 3.5-3.5h4a3.5 3.5 0 0 1 3.5 3.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.39 7H7.64a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5h5a5 5 0 0 0 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25"
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
            d="M22.64 5.5v4a3.5 3.5 0 0 1-3 3.46c-.28.04-.5-.18-.5-.46v-.25a6.75 6.75 0 0 0-6.75-6.75h-.25c-.28 0-.5-.23-.46-.5.24-1.7 1.7-3 3.46-3h4a3.5 3.5 0 0 1 3.5 3.5"
            fill="currentColor"
          />
          <path
            d="M12.39 7H7.64a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5h5a5 5 0 0 0 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSize;
