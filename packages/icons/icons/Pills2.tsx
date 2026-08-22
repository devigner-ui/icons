import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPills2 = forwardRef<SVGSVGElement, IconProps>(function IconPills2(
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
            d="M11.54 10.54A4.98 4.98 0 0 0 8 2c-1.38 0-2.63.56-3.54 1.46m7.08 7.08A4.98 4.98 0 0 1 3 7c0-1.38.56-2.63 1.46-3.54m7.08 7.08L4.46 3.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 17a4.98 4.98 0 0 0-8.54-3.54A5 5 0 0 0 12 17m10 0a4.98 4.98 0 0 1-8.54 3.54A5 5 0 0 1 12 17m10 0H12"
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
            d="M13.46 20.54a5 5 0 1 0 7.08-7.08 5 5 0 0 0-7.08 7.08"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7"
            fill="currentColor"
          />
          <path
            d="M12.06 17.75h9.88a5 5 0 0 0 0-1.5h-9.88a5 5 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            d="m3.97 4.03 7 7a5 5 0 0 0 1.06-1.06l-7-7a5 5 0 0 0-1.06 1.06"
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
          <path d="M12.03 9.97a5 5 0 0 0-7-7z" fill="currentColor" />
          <path d="M10.97 11.03a5 5 0 0 1-7-7z" fill="currentColor" />
          <path d="M21.94 16.25a5 5 0 0 0-9.89 0z" fill="currentColor" />
          <path d="M21.94 17.75h-9.88a5 5 0 0 0 9.89 0" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconPills2;
