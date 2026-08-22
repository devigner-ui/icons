import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconIconCoin = forwardRef<SVGSVGElement, IconProps>(function IconIconCoin(
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
            d="M16.27 6a7 7 0 0 0-9.57 9.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.01 17.97a7 7 0 0 0 9.63-9.62"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.87 3.8h.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.37 20.2h.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M20.93 5.25a1.5 1.5 0 1 1 0-3h.01a1.5 1.5 0 1 1-.01 3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.43 21.75a1.5 1.5 0 1 1 0-3h.01a1.5 1.5 0 1 1-.01 3"
            fill="currentColor"
          />
          <path
            d="M6.7 16.4a.8.8 0 0 1-.64-.36 7.75 7.75 0 0 1 10.6-10.69c.35.21.47.67.26 1.03a.76.76 0 0 1-1.03.26 6.26 6.26 0 0 0-8.54 8.62c.22.35.11.81-.25 1.03a1 1 0 0 1-.4.11"
            fill="currentColor"
          />
          <path
            d="M12.67 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.26 6.26 0 0 0 18 8.74a.75.75 0 0 1 1.28-.78 7.76 7.76 0 0 1-6.61 11.79"
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
            d="M20.93 5.25a1.5 1.5 0 1 1 0-3h.01a1.5 1.5 0 1 1-.01 3"
            fill="currentColor"
          />
          <path
            d="M4.43 21.75a1.5 1.5 0 1 1 0-3h.01a1.5 1.5 0 1 1-.01 3"
            fill="currentColor"
          />
          <path
            d="M6.7 16.4a.8.8 0 0 1-.64-.36 7.75 7.75 0 0 1 10.6-10.69c.35.21.47.67.26 1.03a.76.76 0 0 1-1.03.26 6.26 6.26 0 0 0-8.54 8.62c.22.35.11.81-.25 1.03a1 1 0 0 1-.4.11"
            fill="currentColor"
          />
          <path
            d="M12.67 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.26 6.26 0 0 0 18 8.74a.75.75 0 0 1 1.28-.78 7.76 7.76 0 0 1-6.61 11.79"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconIconCoin;
