import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHome4 = forwardRef<SVGSVGElement, IconProps>(function IconHome4(
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
            d="M9.69 2.84 4.3 7.04c-.9.7-1.63 2.19-1.63 3.32v7.41a4.23 4.23 0 0 0 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33a4.5 4.5 0 0 0-5 .12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 17.99v-3"
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
            d="m20.71 6.82-5.76-4.03a4.85 4.85 0 0 0-5.49.13L4.45 6.83a5.2 5.2 0 0 0-1.79 3.64v6.9A4.63 4.63 0 0 0 7.28 22h10.78a4.6 4.6 0 0 0 4.62-4.62V10.6a5.1 5.1 0 0 0-1.97-3.78"
            fill="currentColor"
          />
          <path
            d="M12.67 18.75a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
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
            d="m20.71 6.82-5.76-4.03a4.85 4.85 0 0 0-5.49.13L4.45 6.83a5.2 5.2 0 0 0-1.79 3.64v6.9A4.63 4.63 0 0 0 7.28 22h10.78a4.6 4.6 0 0 0 4.62-4.62V10.6a5.1 5.1 0 0 0-1.97-3.78M13.42 18c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHome4;
