import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDisplay = forwardRef<SVGSVGElement, IconProps>(function IconDisplay(
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
            d="M2 9c0-2.83 0-4.24.88-5.12S5.18 3 8 3h8c2.83 0 4.24 0 5.12.88S22 6.18 22 9v1c0 2.83 0 4.24-.88 5.12S18.82 16 16 16H8c-2.83 0-4.24 0-5.12-.88S2 12.82 2 10z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 19v-2.5m0 2.5 6 2m-6-2-6 2"
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
            d="M2.88 3.84C2 4.7 2 6.04 2 8.76v.96c0 2.72 0 4.07.88 4.92s2.3.84 5.12.84h8c2.83 0 4.24 0 5.12-.84.88-.85.88-2.2.88-4.92v-.96c0-2.72 0-4.07-.88-4.92S18.82 3 16 3H8c-2.83 0-4.24 0-5.12.84"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.24 19.6-5.49-1.76v-2.36h-1.5v2.36L5.76 19.6a.7.7 0 0 0-.47.9c.13.38.55.59.95.46L12 19.12l5.76 1.84c.4.13.82-.08.95-.45a.7.7 0 0 0-.47-.91"
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
            d="M2 8.76c0-2.72 0-4.07.88-4.92S5.18 3 8 3h8c2.83 0 4.24 0 5.12.84.88.85.88 2.2.88 4.92v.96c0 2.72 0 4.07-.88 4.92s-2.3.84-5.12.84h-3.25v2.36l5.49 1.76c.39.12.6.53.47.9a.76.76 0 0 1-.95.46L12 19.12l-5.76 1.84a.76.76 0 0 1-.95-.45.7.7 0 0 1 .47-.91l5.49-1.76v-2.36H8c-2.83 0-4.24 0-5.12-.84C2 13.79 2 12.44 2 9.72z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDisplay;
