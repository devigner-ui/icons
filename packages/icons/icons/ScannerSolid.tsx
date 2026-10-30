import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScannerSolid = forwardRef<SVGSVGElement, IconProps>(function IconScannerSolid(
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
            d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 15v2c0 3 2 5 5 5h.34m3.5 0H17c3 0 5-2 5-5v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12h20"
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
            d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12h20"
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
            d="M22 9.75a.76.76 0 0 1-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25H7C4.42 2.75 2.75 4.42 2.75 7v2c0 .41-.34.75-.75.75A.76.76 0 0 1 1.25 9V7c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75"
            fill="currentColor"
          />
          <path
            d="M22 12.75H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 9h-9a.5.5 0 0 1-.5-.5v-2C7 5.68 7.67 5 8.5 5h7c.83 0 1.5.68 1.5 1.5v2a.5.5 0 0 1-.5.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 15h-9a.5.5 0 0 0-.5.5v2c0 .82.67 1.5 1.5 1.5h7c.83 0 1.5-.68 1.5-1.5v-2a.5.5 0 0 0-.5-.5"
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
            d="M22 9.75a.76.76 0 0 1-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25H7C4.42 2.75 2.75 4.42 2.75 7v2c0 .41-.34.75-.75.75A.76.76 0 0 1 1.25 9V7c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75"
            fill="currentColor"
          />
          <path
            d="M22 12.75H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M16.5 9h-9a.5.5 0 0 1-.5-.5v-2C7 5.67 7.67 5 8.5 5h7c.83 0 1.5.67 1.5 1.5v2a.5.5 0 0 1-.5.5"
            fill="currentColor"
          />
          <path
            d="M16.5 15h-9a.5.5 0 0 0-.5.5v2c0 .83.67 1.5 1.5 1.5h7c.82 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 0-.5-.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScannerSolid;
