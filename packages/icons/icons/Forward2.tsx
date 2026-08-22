import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconForward2 = forwardRef<SVGSVGElement, IconProps>(function IconForward2(
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
            d="m14.5 17 5-5-5-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.5 12h-10c-1.67 0-5-1-5-5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.97 17.53c.3.3.77.3 1.06 0l5-5c.3-.3.3-.77 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L18.44 12l-4.47 4.47c-.3.3-.3.77 0 1.06"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17.69 12.75H9.5c-.95 0-2.37-.28-3.56-1.14A5.4 5.4 0 0 1 3.75 7a.75.75 0 1 1 1.5 0c0 1.76.71 2.78 1.56 3.4.89.63 1.98.85 2.69.85h8.19l.75.75z"
              fill="currentColor"
            />
            <path d="M20.2 12.29" fill="currentColor" />
          </g>
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
            d="M4.5 6.25c.41 0 .75.34.75.75 0 1.76.71 2.78 1.56 3.4.89.63 1.98.85 2.69.85h8.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5c.3.3.3.77 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.95 0-2.37-.28-3.56-1.14A5.4 5.4 0 0 1 3.75 7c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconForward2;
