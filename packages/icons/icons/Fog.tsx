import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFog = forwardRef<SVGSVGElement, IconProps>(function IconFog(
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
            d="M14.38 7.03A5.8 5.8 0 0 1 18.16 7M7.12 9.61A4.26 4.26 0 0 0 2 13.77c0 .82.24 1.58.64 2.23m4.48-6.4A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5.01M7.12 9.61q.85.16 1.55.63m9.49-3.23A5.65 5.65 0 0 1 22 12.35c0 1.4-.5 2.67-1.35 3.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 22h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 19h14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 16h20"
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
            d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.48 2a5.68 5.68 0 0 0-5.36 7.6 4.26 4.26 0 0 0-4.85 5.64H21.2A5.65 5.65 0 0 0 18.16 7a5.7 5.7 0 0 0-5.67-5"
            fill="currentColor"
          />
          <path
            d="M2 15.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
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
            d="M6.76 7.65A5.7 5.7 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5.01 5.65 5.65 0 0 1 3.03 8.24H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.27a4.26 4.26 0 0 1 4.85-5.64 6 6 0 0 1-.36-1.96"
            fill="currentColor"
          />
          <path
            d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFog;
