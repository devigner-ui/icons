import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFridge = forwardRef<SVGSVGElement, IconProps>(function IconFridge(
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
            d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v3c0 3.77 0 5.66-1.17 6.83S15.77 21 12 21s-5.66 0-6.83-1.17S4 16.77 4 13z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 21v1h-1v-1m-8 0v1H7v-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 11.5H4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M17 7v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 14v2"
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
            d="M4 11.5V13c0 3.77 0 5.66 1.17 6.83q.45.45 1.08.7V22c0 .41.34.75.75.75h1c.41 0 .75-.34.75-.75v-1.05q1.33.06 3.25.05 1.92.01 3.25-.05V22c0 .41.34.75.75.75h1c.41 0 .75-.34.75-.75v-1.47q.62-.25 1.08-.7C20 18.66 20 16.77 20 13v-1.5zm13 1.75c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v1.5H4z"
            fill="currentColor"
          />
          <path
            d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.17 3.17C4 4.34 4 6.23 4 10v.75h16V10c0-3.77 0-5.66-1.17-6.83S15.77 2 12 2 6.34 2 5.17 3.17M17 6.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12.25V13c0 3.77 0 5.66 1.17 6.83q.45.45 1.08.7V22c0 .41.34.75.75.75h1c.41 0 .75-.34.75-.75v-1.05q1.33.06 3.25.05 1.92.01 3.25-.05V22c0 .41.34.75.75.75h1c.41 0 .75-.34.75-.75v-1.47q.62-.25 1.08-.7C20 18.66 20 16.77 20 13v-.75zm13 1c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFridge;
