import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSofa = forwardRef<SVGSVGElement, IconProps>(function IconSofa(
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
            d="M5.56 18h12.88c1.97 0 3.56-1.6 3.56-3.56V12a2 2 0 0 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 0 0-4 0v2.44C2 16.41 3.6 18 5.56 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 10c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C16.39 5 15.93 5 15 5H9c-.93 0-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14C4 8.61 4 9.07 4 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 19v-1M4 19v-1"
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
            d="M18.44 18H5.56q-.42 0-.81-.1V19a.75.75 0 0 1-1.5 0v-1.85A3.6 3.6 0 0 1 2 14.45V12a2 2 0 0 1 4 0v1.2c0 .44.36.8.8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 0 1 4 0v2.44c0 1.09-.49 2.06-1.25 2.71V19a.75.75 0 0 1-1.5 0v-1.1q-.4.1-.8.1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 9q.02-.48.08-.78a4 4 0 0 1 3.14-3.14C7.61 5 8.07 5 9 5h6c.93 0 1.4 0 1.78.08A4 4 0 0 1 19.99 9H20v1a2 2 0 0 0-2 2v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 0 0-2-2z"
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
            d="M7 12v1h10v-1a3 3 0 0 1 3-3q-.02-.48-.08-.78a4 4 0 0 0-3.14-3.14C16.39 5 15.93 5 15 5H9c-.93 0-1.4 0-1.78.08A4 4 0 0 0 4.01 9 3 3 0 0 1 7 12"
            fill="currentColor"
          />
          <path
            d="M18.44 18H5.56q-.42 0-.81-.1V19a.75.75 0 0 1-1.5 0v-1.85A3.6 3.6 0 0 1 2 14.45V12a2 2 0 0 1 4 0v1.2c0 .44.36.8.8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 0 1 4 0v2.44c0 1.09-.49 2.06-1.25 2.71V19a.75.75 0 0 1-1.5 0v-1.1q-.4.1-.8.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSofa;
