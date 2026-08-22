import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGrid2x2 = forwardRef<SVGSVGElement, IconProps>(function IconGrid2x2(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 2v20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 12h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M2.67 12h10v10H8.48c-3.64 0-5.81-2.17-5.81-5.81z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 7.81V12h-10V2h4.19c3.64 0 5.81 2.17 5.81 5.81"
            fill="currentColor"
          />
          <path
            d="M12.67 2v10h-10V7.81C2.67 4.17 4.84 2 8.48 2z"
            fill="currentColor"
          />
          <path
            d="M22.67 12v4.19c0 3.64-2.17 5.81-5.81 5.81h-4.19V12z"
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
            d="M11.92 12.75V22H8.48c-3.64 0-5.81-2.17-5.81-5.81v-3.44z"
            fill="currentColor"
          />
          <path
            d="M22.67 7.81v3.44h-9.25V2h3.44c3.64 0 5.81 2.17 5.81 5.81"
            fill="currentColor"
          />
          <path
            d="M11.92 2v9.25H2.67V7.81C2.67 4.17 4.84 2 8.48 2z"
            fill="currentColor"
          />
          <path
            d="M22.67 12.75v3.44c0 3.64-2.17 5.81-5.81 5.81h-3.44v-9.25z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGrid2x2;
