import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPet = forwardRef<SVGSVGElement, IconProps>(function IconPet(
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
            d="M4.16 16.5A4.78 4.78 0 0 0 9 21.75h4.8c3.25 0 5.5-2.63 4.95-5.85a7.65 7.65 0 0 0-7.26-6.15 7.5 7.5 0 0 0-5.77 2.87"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.72 4.75a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.05 6.45a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22.25 10.95a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.72 8.45a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M4.13 16.5a4.78 4.78 0 0 0 4.84 5.25h4.79c3.26 0 5.5-2.63 4.96-5.85a7.65 7.65 0 0 0-7.26-6.15 7.5 7.5 0 0 0-7.33 6.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.19 7.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.02 8.45a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.72 12.45a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.69 10.45a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
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
            d="M19.08 15.72a7.94 7.94 0 0 0-7.56-6.4 7.8 7.8 0 0 0-7.64 7.03A5.15 5.15 0 0 0 9.08 22h4.68c1.69 0 3.17-.66 4.18-1.85a5.4 5.4 0 0 0 1.14-4.43"
            fill="currentColor"
          />
          <path
            d="M10.28 7.86a2.93 2.93 0 1 0 0-5.86 2.93 2.93 0 0 0 0 5.86"
            fill="currentColor"
          />
          <path
            d="M16.94 9.03a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88"
            fill="currentColor"
          />
          <path
            d="M20.55 12.93a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9"
            fill="currentColor"
          />
          <path
            d="M3.94 10.98a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88"
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
            d="M19.08 15.72a7.94 7.94 0 0 0-7.56-6.4 7.8 7.8 0 0 0-7.64 7.03A5.15 5.15 0 0 0 9.08 22h4.68c1.69 0 3.17-.66 4.18-1.85a5.4 5.4 0 0 0 1.14-4.43"
            fill="currentColor"
          />
          <path
            d="M10.28 7.86a2.93 2.93 0 1 0 0-5.86 2.93 2.93 0 0 0 0 5.86"
            fill="currentColor"
          />
          <path
            d="M16.94 9.03a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88"
            fill="currentColor"
          />
          <path
            d="M20.55 12.93a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9"
            fill="currentColor"
          />
          <path
            d="M3.94 10.98a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPet;
