import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFigmaMerged = forwardRef<SVGSVGElement, IconProps>(function IconFigmaMerged(
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
            d="M12 2H8.67a3.33 3.33 0 1 0 0 6.66H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.76 13.62a3.3 3.3 0 0 0 2.91 1.71H12V8.67H8.67c-1.21 0-2.27.64-2.85 1.61"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.33H8.67A3.33 3.33 0 1 0 12 18.66z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.75 2h1.58a3.33 3.33 0 1 1 0 6.66H12V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.33 8.67a3.33 3.33 0 1 1 0 6.66 3.33 3.33 0 0 1 0-6.66Z"
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
            d="M12 2H8.67a3.33 3.33 0 1 0 0 6.66H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M12 8.67H8.67a3.33 3.33 0 1 0 0 6.66H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M12 15.33H8.67A3.33 3.33 0 1 0 12 18.66z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12 2h3.33a3.33 3.33 0 1 1 0 6.66H12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.33 8.67a3.33 3.33 0 1 1 0 6.66 3.33 3.33 0 0 1 0-6.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
            d="M24 0H0v24h24z"
            fill="none"
          />
          <path
            d="M12 2H8.67a3.33 3.33 0 1 0 0 6.66H12z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 8.67H8.67a3.33 3.33 0 1 0 0 6.66H12z"
            fill="currentColor"
          />
          <path
            d="M12 15.33H8.67A3.33 3.33 0 1 0 12 18.66z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2h3.33a3.33 3.33 0 1 1 0 6.66H12z"
            fill="currentColor"
          />
          <path
            d="M15.33 8.67a3.33 3.33 0 1 1 0 6.66 3.33 3.33 0 0 1 0-6.66"
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
            d="M12 2H8.67a3.33 3.33 0 1 0 0 6.66H12z"
            fill="currentColor"
          />
          <path
            d="M12 8.67H8.67a3.33 3.33 0 1 0 0 6.66H12z"
            fill="currentColor"
          />
          <path
            d="M12 15.33H8.67A3.33 3.33 0 1 0 12 18.66z"
            fill="currentColor"
          />
          <path
            d="M12 2h3.33a3.33 3.33 0 1 1 0 6.66H12z"
            fill="currentColor"
          />
          <path
            d="M15.33 8.67a3.33 3.33 0 1 1 0 6.66 3.33 3.33 0 0 1 0-6.66"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFigmaMerged;
