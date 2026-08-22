import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMinimize = forwardRef<SVGSVGElement, IconProps>(function IconMinimize(
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
            d="m2 22 7-7m0 0H3.14M9 15v5.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m22 2-7 7m0 0h5.86M15 9V3.14"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.4 15c0-.41.33-.75.74-.75H9c.41 0 .75.34.75.75v5.86a.75.75 0 1 1-1.5 0V16.8l-5.72 5.72a.75.75 0 0 1-1.06-1.06l5.72-5.72H3.14A.75.75 0 0 1 2.4 15"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6 9c0 .41-.33.75-.74.75H15a.75.75 0 0 1-.75-.75V3.14a.75.75 0 0 1 1.5 0V7.2l5.72-5.72a.75.75 0 1 1 1.06 1.06l-5.72 5.72h4.05c.41 0 .75.34.75.75"
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
            d="M20.86 9.75a.75.75 0 1 0 0-1.5H16.8l5.72-5.72a.75.75 0 0 0-1.06-1.06l-5.72 5.72V3.14a.75.75 0 0 0-1.5 0V9c0 .41.34.75.75.75z"
            fill="currentColor"
          />
          <path
            d="M3.14 14.25a.75.75 0 0 0 0 1.5H7.2l-5.72 5.72a.75.75 0 1 0 1.06 1.06l5.72-5.72v4.05a.75.75 0 1 0 1.5 0V15a.75.75 0 0 0-.75-.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMinimize;
