import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPillsTablets = forwardRef<SVGSVGElement, IconProps>(function IconPillsTablets(
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
            d="M11.04 10.54A4.98 4.98 0 0 0 7.5 2c-1.38 0-2.63.56-3.54 1.46m7.08 7.08A4.98 4.98 0 0 1 2.5 7c0-1.38.56-2.63 1.46-3.54m7.08 7.08L3.96 3.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11.5 17a5 5 0 0 0 5 5m-5-5a4.98 4.98 0 0 1 8.54-3.54A5 5 0 0 1 21.5 17m-10 0h10m0 0c0 1.28-.49 2.56-1.46 3.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M11.04 10.54A4.98 4.98 0 0 0 7.5 2c-1.38 0-2.63.56-3.54 1.46m7.08 7.08A4.98 4.98 0 0 1 2.5 7c0-1.38.56-2.63 1.46-3.54m7.08 7.08L3.96 3.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.5 17a4.98 4.98 0 0 0-8.54-3.54A5 5 0 0 0 11.5 17m10 0a4.98 4.98 0 0 1-8.54 3.54A5 5 0 0 1 11.5 17m10 0h-10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M12.96 20.54a5 5 0 1 0 7.08-7.08 5 5 0 0 0-7.08 7.08"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.5 7a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
            fill="currentColor"
          />
          <path
            d="M11.56 17.75h9.88a5 5 0 0 0 0-1.5h-9.88a5 5 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            d="m3.47 4.03 7 7a5 5 0 0 0 1.06-1.06l-7-7a5 5 0 0 0-1.06 1.06"
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
          <path d="M11.58 9.97a5 5 0 0 0-7-7z" fill="currentColor" />
          <path d="M10.52 11.03a5 5 0 0 1-7-7z" fill="currentColor" />
          <path d="M21.49 16.25a5 5 0 0 0-9.89 0z" fill="currentColor" />
          <path d="M21.49 17.75h-9.88a5 5 0 0 0 9.89 0" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconPillsTablets;
