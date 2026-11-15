import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMagicWandStar = forwardRef<SVGSVGElement, IconProps>(function IconAiMagicWandStar(
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
            d="m3.5 20.5 4.91-4.91m1.7-1.7L13 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 3.5c.36 2.64 1.36 3.64 4 4-2.64.36-3.64 1.36-4 4-.36-2.64-1.36-3.64-4-4 2.64-.36 3.64-1.36 4-4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3.5 20.5 13 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 3.5c.36 2.64 1.36 3.64 4 4-2.64.36-3.64 1.36-4 4-.36-2.64-1.36-3.64-4-4 2.64-.36 3.64-1.36 4-4Z"
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
            d="m4.03 21.03 9.5-9.5a.75.75 0 1 0-1.06-1.06l-9.5 9.5a.75.75 0 1 0 1.06 1.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.9 3.1c.18 1.39.5 2.25 1.13 2.87s1.48.95 2.87 1.13a.4.4 0 0 1 0 .8c-1.39.18-2.25.5-2.87 1.13s-.95 1.48-1.13 2.87a.4.4 0 0 1-.8 0c-.18-1.39-.5-2.25-1.13-2.87S13.5 8.08 12.1 7.9a.4.4 0 0 1 0-.8c1.39-.18 2.25-.5 2.87-1.13s.95-1.48 1.13-2.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="m4.03 21.03 9.5-9.5a.75.75 0 1 0-1.06-1.06l-9.5 9.5a.75.75 0 1 0 1.06 1.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.9 3.1c.18 1.39.5 2.25 1.13 2.87s1.48.95 2.87 1.13a.4.4 0 0 1 0 .8c-1.39.18-2.25.5-2.87 1.13s-.95 1.48-1.13 2.87a.4.4 0 0 1-.8 0c-.18-1.39-.5-2.25-1.13-2.87S13.5 8.08 12.1 7.9a.4.4 0 0 1 0-.8c1.39-.18 2.25-.5 2.87-1.13s.95-1.48 1.13-2.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMagicWandStar;
