import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBagRivetsBox = forwardRef<SVGSVGElement, IconProps>(function IconBagRivetsBox(
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
            d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m20.33 15.38.37-2.95C20.97 9.99 20.27 8 16 8H8c-3.47 0-4.58 1.31-4.73 3.11m.3 3.48.48 3.84C4.26 20.39 4.98 22 9 22h6c3.73 0 4.62-1.38 4.9-3.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 12h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.49 12h.02Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 12h.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.49 12h.02"
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
            d="M16.19 8.86a.7.7 0 0 1-.7-.7V6.88a3.5 3.5 0 0 0-3.83-3.47c-1.68.16-3.15 1.87-3.15 3.65v.9a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7v-.9c0-2.5 2.02-4.81 4.41-5.04a4.87 4.87 0 0 1 5.36 4.86v1.28a.7.7 0 0 1-.69.7"
            fill="currentColor"
          />
          <path
            d="M19.96 8.96c-.84-.93-2.22-1.38-4.24-1.38H8.28c-2.02 0-3.4.45-4.24 1.38-.97 1.08-.94 2.52-.83 3.52l.7 5.57C4.12 20 4.91 22 9.21 22h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.13-2.43-.83-3.51M8.42 13.15a1 1 0 0 1-1-1 1 1 0 0 1 2.01 0 1 1 0 0 1-1 1m7 0za1 1 0 0 1-1-1 1 1 0 0 1 2.01 0 1 1 0 0 1-1 1"
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
            d="M19.96 8.96q-1-1.1-3.08-1.32v-.76a4.87 4.87 0 0 0-5.36-4.86c-2.39.23-4.4 2.54-4.4 5.04v.58q-2.09.22-3.08 1.32c-.97 1.08-.94 2.52-.83 3.52l.7 5.57C4.12 20 4.91 22 9.21 22h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.13-2.43-.83-3.51m-8.3-5.55a3.5 3.5 0 0 1 3.83 3.47v.7H8.51v-.52c0-1.78 1.47-3.49 3.15-3.65m-3.24 9.74a1 1 0 0 1-1-1 1 1 0 0 1 2.01 0 1 1 0 0 1-1 1m7 0za1 1 0 0 1-1-1 1 1 0 0 1 2.01 0 1 1 0 0 1-1 1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBagRivetsBox;
