import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconQuoteUp = forwardRef<SVGSVGElement, IconProps>(function IconQuoteUp(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2.67 12.35h5.8a2.5 2.5 0 0 1 2.58 2.58v3.22a2.5 2.5 0 0 1-2.58 2.58H5.25a2.6 2.6 0 0 1-2.58-2.58z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 12.35C2.67 6.3 3.8 5.3 7.2 3.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M14.3 12.35h5.8a2.5 2.5 0 0 1 2.58 2.58v3.22a2.5 2.5 0 0 1-2.58 2.58h-3.22a2.6 2.6 0 0 1-2.58-2.58z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3 12.35c0-6.05 1.13-7.05 4.53-9.07"
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
            d="M8.76 11.63H4.07c.08-4.67 1-5.44 3.87-7.14a.7.7 0 1 0-.72-1.2c-3.38 2-4.56 3.22-4.56 9.04v5.39a3.1 3.1 0 0 0 3.1 3.09h3a3 3 0 0 0 3.08-3.09v-3a3 3 0 0 0-3.08-3.09"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.58 11.63H14.9c.08-4.67 1-5.44 3.87-7.14a.7.7 0 1 0-.72-1.2c-3.38 2-4.56 3.22-4.56 9.04v5.39a3.1 3.1 0 0 0 3.1 3.09h3a3 3 0 0 0 3.08-3.09v-3a3 3 0 0 0-3.08-3.09"
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
            d="M8.76 11.63H4.07c.08-4.67 1-5.44 3.87-7.14a.7.7 0 0 0 .24-.96.7.7 0 0 0-.95-.24c-3.38 2-4.56 3.22-4.56 9.03v5.39a3.1 3.1 0 0 0 3.1 3.09h3a3 3 0 0 0 3.08-3.09v-3a3 3 0 0 0-3.09-3.08"
            fill="currentColor"
          />
          <path
            d="M19.58 11.63H14.9c.08-4.67 1-5.44 3.87-7.14a.7.7 0 1 0-.72-1.2c-3.38 2-4.56 3.22-4.56 9.04v5.39a3.1 3.1 0 0 0 3.1 3.09h3a3 3 0 0 0 3.08-3.09v-3a3 3 0 0 0-3.08-3.09"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconQuoteUp;
