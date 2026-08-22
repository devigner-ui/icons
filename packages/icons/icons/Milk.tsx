import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMilk = forwardRef<SVGSVGElement, IconProps>(function IconMilk(
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
            d="M18.67 15v4a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-5.02l3.89.02q1.1 0 2.11.5t2.12.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 10.83V15h-3.88q-1.12 0-2.12-.5a5 5 0 0 0-2.11-.5l-3.89-.02v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12a1 1 0 0 0 .29-.7V5h6v1.59a1 1 0 0 0 .29.7l2.12 2.12c.33.33.59.96.59 1.42"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.67 16v-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.67 14.98v-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.17 5h-5a1.5 1.5 0 0 1-1.5-1.5c0-.82.67-1.5 1.5-1.5h5c.83 0 1.5.68 1.5 1.5S16 5 15.17 5"
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
            d="M18.67 15v4a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-5.02l3.89.02q1.1 0 2.11.5t2.12.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 10.83V15h-3.88q-1.12 0-2.12-.5a5 5 0 0 0-2.11-.5l-3.89-.02v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12a1 1 0 0 0 .29-.7V4.91q.24.09.5.09h5q.27 0 .5-.09v1.68a1 1 0 0 0 .29.7l2.12 2.12c.33.33.59.96.59 1.42"
            fill="currentColor"
          />
          <path
            d="M15.17 2h-5a1.5 1.5 0 1 0 0 3h5q.27 0 .5-.09a1.5 1.5 0 0 0-.5-2.91"
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
            d="M18.67 16v3a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-4.01a1 1 0 0 1 1.01-1l2.88.01q1.05 0 2 .45c.69.32 1.42.55 2.19.55h2.92a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="m18.08 9.41-2.12-2.12a1 1 0 0 1-.29-.7V4.91a1.5 1.5 0 0 0-.5-2.91h-5a1.5 1.5 0 0 0-.5 2.91v1.68q0 .4-.29.7L7.26 9.41c-.32.32-.59.97-.59 1.42v.65a1 1 0 0 0 .99 1l2.91.02c.98 0 1.97.24 2.85.7q.65.32 1.37.3h2.88a1 1 0 0 0 1-1v-1.67c0-.45-.27-1.1-.59-1.42"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMilk;
