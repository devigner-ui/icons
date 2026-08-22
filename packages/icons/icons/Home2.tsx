import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHome2 = forwardRef<SVGSVGElement, IconProps>(function IconHome2(
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
            d="M2 12.2c0-2.28 0-3.43.52-4.38S3.99 6.3 5.88 5.11l2-1.24C9.88 2.62 10.9 2 12 2s2.11.62 4.12 1.87l2 1.24c1.9 1.18 2.84 1.76 3.36 2.71s.52 2.1.52 4.38v1.53c0 3.9 0 5.85-1.17 7.06S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.21S2 17.63 2 13.73z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 15v3"
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
            d="M2 12.2c0-2.28 0-3.43.52-4.38S3.99 6.3 5.88 5.11l2-1.24C9.88 2.62 10.9 2 12 2s2.11.62 4.12 1.87l2 1.24c1.9 1.18 2.84 1.76 3.36 2.71s.52 2.1.52 4.38v1.53c0 3.9 0 5.85-1.17 7.06S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.21S2 17.63 2 13.73z"
            fill="currentColor"
          />
          <path
            d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"
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
            d="M2.52 7.82C2 8.77 2 9.92 2 12.2v1.53c0 3.9 0 5.85 1.17 7.06S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.21S22 17.63 22 13.73V12.2c0-2.28 0-3.43-.52-4.38s-1.47-1.53-3.36-2.71l-2-1.24C14.12 2.62 13.1 2 12 2s-2.11.62-4.12 1.87l-2 1.24c-1.9 1.18-2.84 1.76-3.36 2.71M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHome2;
