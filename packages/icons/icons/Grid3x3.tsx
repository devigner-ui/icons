import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGrid3x3 = forwardRef<SVGSVGElement, IconProps>(function IconGrid3x3(
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
              d="M2.7 8.5h19.97"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.7 15.5h19.97"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.18 21.99V2.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.18 21.99V2.01"
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
            d="M9.18 2v6.5H2.67v-.69C2.67 4.17 4.84 2 8.48 2z"
            fill="currentColor"
          />
          <path
            d="M22.67 7.81v.69h-6.49V2h.68c3.64 0 5.81 2.17 5.81 5.81"
            fill="currentColor"
          />
          <path
            d="M22.67 15.5v.69c0 3.64-2.17 5.81-5.81 5.81h-.68v-6.5z"
            fill="currentColor"
          />
          <path
            d="M9.18 15.5V22h-.7c-3.64 0-5.81-2.17-5.81-5.81v-.69z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.18 8.5H2.67v7h6.51z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 8.5h-6.49v7h6.49z"
            fill="currentColor"
          />
          <path d="M16.18 8.5h-7v7h7z" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.18 2h-7v6.5h7z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.18 15.5h-7V22h7z"
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
            d="M8.42 2v5.8H2.67c0-3.61 2.15-5.78 5.75-5.8"
            fill="currentColor"
          />
          <path
            d="M22.67 7.8h-5.75V2c3.6.02 5.75 2.19 5.75 5.8"
            fill="currentColor"
          />
          <path
            d="M22.67 16.3c-.04 3.55-2.18 5.68-5.75 5.7v-5.7z"
            fill="currentColor"
          />
          <path
            d="M8.42 16.3V22c-3.57-.02-5.71-2.15-5.75-5.7z"
            fill="currentColor"
          />
          <path d="M8.42 9.3H2.67v5.5h5.75z" fill="currentColor" />
          <path d="M22.67 9.3h-5.75v5.5h5.75z" fill="currentColor" />
          <path d="M15.42 9.3h-5.5v5.5h5.5z" fill="currentColor" />
          <path d="M15.42 2h-5.5v5.8h5.5z" fill="currentColor" />
          <path d="M15.42 16.3h-5.5V22h5.5z" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconGrid3x3;
