import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGraduationCap = forwardRef<SVGSVGElement, IconProps>(function IconGraduationCap(
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
            d="M6 5.17 4.03 6.46a3.2 3.2 0 0 0 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93a3.2 3.2 0 0 0 0-5.33l-6-3.93a3.9 3.9 0 0 0-3.93 0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m5.63 13.08-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06a3.4 3.4 0 0 0 2.18-3.03v-4.64"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.4 15V9"
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
            d="M10.05 2.53 4.03 6.46a3.2 3.2 0 0 0 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93a3.2 3.2 0 0 0 0-5.33l-5.99-3.93a3.9 3.9 0 0 0-3.94-.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.63 13.08-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06a3.4 3.4 0 0 0 2.18-3.03v-4.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.4 15V9"
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
            d="M18.38 12.84v4.93c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0L7.8 20.8a3.4 3.4 0 0 1-2.18-3.03l.01-4.93 4.42 2.88c1.08.71 2.86.71 3.94 0z"
            fill="currentColor"
          />
          <path
            d="m19.98 6.46-5.99-3.93a3.9 3.9 0 0 0-3.94 0L4.03 6.46a3.2 3.2 0 0 0 0 5.34l1.6 1.04 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88 1.37-.9V15c0 .41.34.75.75.75s.75-.34.75-.75v-4.92a3.2 3.2 0 0 0-1.27-3.62"
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
            d="M16.83 15.64a1 1 0 0 1 1.55.84v1.29c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0L7.8 20.8a3.4 3.4 0 0 1-2.18-3.03v-1.3a1 1 0 0 1 1.54-.84l2.06 1.34c.79.53 1.79.79 2.79.79s2-.26 2.79-.79z"
            fill="currentColor"
          />
          <path
            d="m19.98 6.46-5.99-3.93a3.9 3.9 0 0 0-3.94 0L4.03 6.46a3.2 3.2 0 0 0 0 5.34l1.6 1.04 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88 1.37-.9V15c0 .41.34.75.75.75s.75-.34.75-.75v-4.92a3.2 3.2 0 0 0-1.27-3.62"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGraduationCap;
