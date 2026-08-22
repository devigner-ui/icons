import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMonitor2 = forwardRef<SVGSVGElement, IconProps>(function IconMonitor2(
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
            d="M7.11 2h11.11c3.56 0 4.45.89 4.45 4.44v6.33c0 3.56-.89 4.44-4.44 4.44H7.11c-3.55.01-4.44-.88-4.44-4.43V6.44C2.67 2.89 3.56 2 7.11 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 17.22V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 13h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.17 22h9"
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
            d="M22.64 6.41v6.5H2.67v-6.5A4.4 4.4 0 0 1 7.08 2h11.15a4.4 4.4 0 0 1 4.41 4.41"
            fill="currentColor"
          />
          <path
            d="M2.67 12.92v.2a4.4 4.4 0 0 0 4.41 4.41h3.84a1 1 0 0 1 1 1v.97a1 1 0 0 1-1 1H8.5a.75.75 0 1 0 0 1.5h8.35c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.42a1 1 0 0 1-1-1v-.97a1 1 0 0 1 1-1h3.81a4.4 4.4 0 0 0 4.41-4.41v-.2z"
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
            d="M18.23 2H7.08a4.4 4.4 0 0 0-4.41 4.41v6.7a4.4 4.4 0 0 0 4.41 4.41h3.84a1 1 0 0 1 1 1v.97a1 1 0 0 1-1 1H8.5a.76.76 0 0 0 0 1.51h8.35c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.42a1 1 0 0 1-1-1v-.97a1 1 0 0 1 1-1h3.81a4.4 4.4 0 0 0 4.41-4.41v-6.7A4.43 4.43 0 0 0 18.23 2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMonitor2;
