import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconServiceBell = forwardRef<SVGSVGElement, IconProps>(function IconServiceBell(
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
            d="M18.97 22h-14c-3 0-3-1.35-3-3v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1c0 1.65 0 3-3 3Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M4.62 8.56A8 8 0 0 1 11.27 5h1.45q.88 0 1.69.18A8 8 0 0 1 20.72 13v4H3.27v-4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.5 4.5q0 .36-.09.68A8 8 0 0 0 12.72 5h-1.45q-.87 0-1.68.18a2.5 2.5 0 1 1 4.91-.68Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 11H9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M18.97 22h-14c-3 0-3-1.35-3-3v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1c0 1.65 0 3-3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.72 13v4H3.27v-4a8 8 0 0 1 8-8h1.45q.88 0 1.69.18A8 8 0 0 1 20.72 13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.5 4.5q0 .36-.09.68A8 8 0 0 0 12.72 5h-1.45q-.87 0-1.68.18a2.5 2.5 0 1 1 4.91-.68"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 11H9"
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
            d="M21.97 18v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.72 13v4H3.27v-4a8 8 0 0 1 8-8h1.45q.88 0 1.69.18A8 8 0 0 1 20.72 13"
            fill="currentColor"
          />
          <path
            d="M14.5 4.5q0 .36-.09.68A8 8 0 0 0 12.72 5h-1.45q-.87 0-1.68.18a2.5 2.5 0 1 1 4.91-.68"
            fill="currentColor"
          />
          <path
            d="M15 11.75H9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M21.97 18v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M14.41 5.18a3 3 0 0 0 .09-.6 2.5 2.5 0 1 0-4.91.6A8 8 0 0 0 3.27 13v1.5a1 1 0 0 0 1 1h15.45a1 1 0 0 0 1-1V13a8 8 0 0 0-6.31-7.82m.59 6.57H9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.4 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconServiceBell;
