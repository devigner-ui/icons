import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserTag = forwardRef<SVGSVGElement, IconProps>(function IconUserTag(
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
            d="M18.67 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98a3 3 0 0 1 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.97"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 10a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
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
            d="M18.67 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98a3 3 0 0 1 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.97"
            fill="currentColor"
          />
          <path
            d="M12.67 10.41a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66"
            fill="currentColor"
          />
          <path
            d="M15.35 15.06a1 1 0 0 0 .83-1.57 4.2 4.2 0 0 0-3.51-1.69 4.2 4.2 0 0 0-3.51 1.69 1 1 0 0 0 .83 1.57z"
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
            d="M18.67 2h-12c-1.66 0-3 1.33-3 2.97v10.91a3 3 0 0 0 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69a3 3 0 0 1 2.12-.87h.75c1.66 0 3-1.33 3-2.97V4.97a3 3 0 0 0-3-2.97m-6 3.75a2.33 2.33 0 1 1 0 4.65 2.33 2.33 0 0 1 0-4.65m2.68 9.31H9.99a1 1 0 0 1-.83-1.57 4.2 4.2 0 0 1 3.51-1.69 4.2 4.2 0 0 1 3.51 1.69 1 1 0 0 1-.83 1.57"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUserTag;
