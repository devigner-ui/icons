import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRepeat = forwardRef<SVGSVGElement, IconProps>(function IconRepeat(
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
            d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM1.25 12a.75.75 0 0 0 1.5 0zm2.62 3.57a.75.75 0 0 0-1.23.86zm5.63 2.68H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28-2-2-1.06 1.06 2 2zM2.75 12c0-3.45 2.8-6.25 6.25-6.25v-1.5A7.75 7.75 0 0 0 1.25 12zm-.11 4.43c1.4 2 3.73 3.32 6.36 3.32v-1.5c-2.12 0-4-1.06-5.13-2.68z"
            fill="currentColor"
          />
          <path
            d="M13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zM22.75 12a.75.75 0 0 0-1.5 0zm-2.62-3.57a.75.75 0 1 0 1.23-.86zM15 18.25h-2v1.5h2zm-2.53 1.28 2 2 1.06-1.06-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12c0 3.45-2.8 6.25-6.25 6.25v1.5A7.75 7.75 0 0 0 22.75 12zm.11-4.43A7.7 7.7 0 0 0 15 4.25v1.5c2.12 0 4 1.06 5.13 2.68z"
            fill="currentColor"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M4.25 5.16h13.84a3 3 0 0 1 3 3v3.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.41 2 4.25 5.16l3.16 3.16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M21.09 18.84H7.25a3 3 0 0 1-3-3v-3.32"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m17.93 22 3.16-3.16-3.16-3.16"
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
            d="M18.09 4.41H6.06l1.88-1.88a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L3.72 4.63a.8.8 0 0 0-.22.53q0 .15.06.29t.16.24l3.16 3.16q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06L6.06 5.91h12.03a2.25 2.25 0 0 1 2.25 2.25v3.32c0 .41.34.75.75.75s.75-.34.75-.75V8.16a3.75 3.75 0 0 0-3.75-3.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.84 18.84q0-.15-.06-.29a1 1 0 0 0-.16-.24l-3.16-3.16a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.88 1.88H7.25A2.25 2.25 0 0 1 5 15.84v-3.32a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v3.32a3.75 3.75 0 0 0 3.75 3.75h12.03l-1.88 1.88a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l3.16-3.16a.8.8 0 0 0 .22-.53"
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
            d="M18.09 4.41H6.06l1.88-1.88a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L3.72 4.63a.8.8 0 0 0-.22.53q0 .15.06.29t.16.24l3.16 3.16q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06L6.06 5.91h12.03a2.25 2.25 0 0 1 2.25 2.25v3.32c0 .41.34.75.75.75s.75-.34.75-.75V8.16a3.75 3.75 0 0 0-3.75-3.75"
            fill="currentColor"
          />
          <path
            d="M21.84 18.84q0-.15-.06-.29a1 1 0 0 0-.16-.24l-3.16-3.16a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.88 1.88H7.25A2.25 2.25 0 0 1 5 15.84v-3.32a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v3.32a3.75 3.75 0 0 0 3.75 3.75h12.03l-1.88 1.88a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l3.16-3.16a.8.8 0 0 0 .22-.53"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRepeat;
