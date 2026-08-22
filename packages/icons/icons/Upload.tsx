import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUpload = forwardRef<SVGSVGElement, IconProps>(function IconUpload(
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
            d="M17 9c2.18.01 3.35.11 4.12.88.88.88.88 2.3.88 5.12v1c0 2.83 0 4.24-.88 5.12S18.82 22 16 22H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16v-1c0-2.83 0-4.24.88-5.12C3.65 9.1 4.82 9 7 9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 15V2m0 0 3 3.5M12 2 9 5.5"
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
            d="M22 16v-1c0-2.83 0-4.24-.88-5.12S18.82 9 16 9H8c-2.83 0-4.24 0-5.12.88S2 12.18 2 15v1c0 2.83 0 4.24.88 5.12S5.18 22 8 22h8c2.83 0 4.24 0 5.12-.88S22 18.82 22 16"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15.75c.41 0 .75-.34.75-.75V4.03l1.68 1.96A.75.75 0 1 0 15.57 5l-3-3.5a.75.75 0 0 0-1.14 0l-3 3.5a.75.75 0 1 0 1.14 1l1.68-1.96V15c0 .41.34.75.75.75"
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
            d="M12 15.75c.41 0 .75-.34.75-.75V4.03l1.68 1.96A.75.75 0 1 0 15.57 5l-3-3.5a.75.75 0 0 0-1.14 0l-3 3.5a.75.75 0 1 0 1.14 1l1.68-1.96V15c0 .41.34.75.75.75"
            fill="currentColor"
          />
          <path
            d="M16 9c-.7 0-1.05 0-1.3.17a1 1 0 0 0-.28.27c-.17.26-.17.6-.17 1.31V15a2.25 2.25 0 1 1-4.5 0v-4.25c0-.7 0-1.05-.17-1.3a1 1 0 0 0-.27-.28C9.05 9 8.7 9 8 9c-2.83 0-4.24 0-5.12.88S2 12.18 2 15v1c0 2.83 0 4.24.88 5.12S5.18 22 8 22h8c2.83 0 4.24 0 5.12-.88S22 18.82 22 16v-1c0-2.83 0-4.24-.88-5.12S18.82 9 16 9"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUpload;
