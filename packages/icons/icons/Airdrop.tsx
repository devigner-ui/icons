import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirdrop = forwardRef<SVGSVGElement, IconProps>(function IconAirdrop(
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
            d="M14.8 11.34a2.2 2.2 0 1 0-4.28-1.08 2.2 2.2 0 0 0 4.28 1.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.68 17.19a8.79 8.79 0 1 0-11.99.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 14.55a5.47 5.47 0 0 1 4-9.25 5.5 5.5 0 0 1 4 9.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.97 16.66-1.44 1.79a2.18 2.18 0 0 0 1.7 3.54h2.87a2.18 2.18 0 0 0 1.7-3.54l-1.44-1.79a2.17 2.17 0 0 0-3.39 0"
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
            d="M14.8 11.34a2.2 2.2 0 1 0-4.28-1.08 2.2 2.2 0 0 0 4.28 1.08"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.69 17.97a.8.8 0 0 1-.51-.2 9.55 9.55 0 1 1 13.02-.03.75.75 0 0 1-1.06-.03.75.75 0 0 1 .03-1.06 8.05 8.05 0 0 0-5.5-13.89A8.05 8.05 0 0 0 7.2 16.68c.3.28.32.76.04 1.06a.8.8 0 0 1-.55.23"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 15.3a.75.75 0 0 1-.54-1.26 4.72 4.72 0 0 0-3.45-7.98 4.75 4.75 0 0 0-3.45 7.98c.28.3.27.78-.03 1.06a.75.75 0 0 1-1.06-.03 6.23 6.23 0 1 1 9.08 0 .8.8 0 0 1-.55.23"
            fill="currentColor"
          />
          <path
            d="m10.97 16.66-1.44 1.79a2.18 2.18 0 0 0 1.7 3.54h2.87a2.18 2.18 0 0 0 1.7-3.54l-1.44-1.79a2.17 2.17 0 0 0-3.39 0"
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
            d="M14.8 11.34a2.2 2.2 0 1 0-4.28-1.08 2.2 2.2 0 0 0 4.28 1.08"
            fill="currentColor"
          />
          <path
            d="M6.69 17.97a.8.8 0 0 1-.51-.2 9.55 9.55 0 1 1 13.02-.03.75.75 0 0 1-1.06-.03.75.75 0 0 1 .03-1.06 8.05 8.05 0 0 0-5.5-13.89A8.05 8.05 0 0 0 7.2 16.68c.3.28.32.76.04 1.06a.8.8 0 0 1-.55.23"
            fill="currentColor"
          />
          <path
            d="M16.67 15.3a.75.75 0 0 1-.54-1.26 4.72 4.72 0 0 0-3.45-7.98 4.75 4.75 0 0 0-3.45 7.98c.28.3.27.78-.03 1.06a.75.75 0 0 1-1.06-.03 6.23 6.23 0 1 1 9.08 0 .8.8 0 0 1-.55.23"
            fill="currentColor"
          />
          <path
            d="m10.97 16.66-1.44 1.79a2.19 2.19 0 0 0 1.7 3.55h2.87a2.18 2.18 0 0 0 1.7-3.54l-1.44-1.79a2.16 2.16 0 0 0-3.39-.01"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAirdrop;
