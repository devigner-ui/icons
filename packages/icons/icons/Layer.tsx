import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLayer = forwardRef<SVGSVGElement, IconProps>(function IconLayer(
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
            d="m13.68 2.92 5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.67 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02a2.6 2.6 0 0 0 1.4-2.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.67 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02a2.4 2.4 0 0 0 1.4-2.15"
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
            d="m20.04 4.89-5.86-2.61a4 4 0 0 0-3.02 0L5.3 4.89c-1.48.66-1.7 1.56-1.7 2.04s.22 1.38 1.7 2.04l5.86 2.61c.43.19.97.29 1.51.29s1.08-.1 1.51-.29l5.86-2.61c1.48-.66 1.7-1.56 1.7-2.04s-.21-1.38-1.7-2.04"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M12.67 17.04q-.58 0-1.11-.23l-6.74-3a3.3 3.3 0 0 1-1.83-2.82.74.74 0 1 1 1.48 0c0 .54.45 1.24.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.5-.22.95-.91.95-1.46a.74.74 0 1 1 1.48 0 3.3 3.3 0 0 1-1.83 2.82l-6.74 3q-.52.23-1.1.23"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22q-.58 0-1.11-.23l-6.74-3a3.1 3.1 0 0 1-1.83-2.82.74.74 0 1 1 1.48 0c0 .63.37 1.2.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.57-.25.95-.83.95-1.46a.74.74 0 1 1 1.48 0 3.1 3.1 0 0 1-1.83 2.82l-6.74 3q-.52.23-1.1.23"
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
            d="m20.04 4.89-5.86-2.61a4 4 0 0 0-3.02 0L5.3 4.89c-1.48.66-1.7 1.56-1.7 2.04s.22 1.38 1.7 2.04l5.86 2.61c.43.19.97.29 1.51.29s1.08-.1 1.51-.29l5.86-2.61c1.48-.66 1.7-1.56 1.7-2.04s-.21-1.38-1.7-2.04"
            fill="currentColor"
          />
          <path
            d="M12.67 17.04q-.58 0-1.11-.23l-6.74-3a3.3 3.3 0 0 1-1.83-2.82.74.74 0 1 1 1.48 0c0 .54.45 1.24.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.5-.22.95-.91.95-1.46a.74.74 0 1 1 1.48 0 3.3 3.3 0 0 1-1.83 2.82l-6.74 3q-.52.23-1.1.23"
            fill="currentColor"
          />
          <path
            d="M12.67 22q-.58 0-1.11-.23l-6.74-3a3.1 3.1 0 0 1-1.83-2.82.74.74 0 1 1 1.48 0c0 .63.37 1.2.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.57-.25.95-.83.95-1.46a.74.74 0 1 1 1.48 0 3.1 3.1 0 0 1-1.83 2.82l-6.74 3q-.52.23-1.1.23"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLayer;
