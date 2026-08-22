import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDownload = forwardRef<SVGSVGElement, IconProps>(function IconDownload(
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
            d="M12 2v13m0 0-3-3.5m3 3.5 3-3.5"
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
            d="M12 1.25a.75.75 0 0 0-.75.75v10.97l-1.68-1.96a.75.75 0 1 0-1.14.98l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.98l-1.68 1.96V2a.75.75 0 0 0-.75-.75"
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
            d="M12 1.25a.75.75 0 0 0-.75.75v10.97l-1.68-1.96a.75.75 0 1 0-1.14.98l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.98l-1.68 1.96V2a.75.75 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M14.25 9v.38a2.25 2.25 0 0 1 2.46 3.58l-3 3.5a2.25 2.25 0 0 1-3.42 0l-3-3.5a2.25 2.25 0 0 1 2.46-3.58V9H8c-2.83 0-4.24 0-5.12.88S2 12.18 2 15v1c0 2.83 0 4.24.88 5.12S5.18 22 8 22h8c2.83 0 4.24 0 5.12-.88S22 18.82 22 16v-1c0-2.83 0-4.24-.88-5.12S18.82 9 16 9z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDownload;
