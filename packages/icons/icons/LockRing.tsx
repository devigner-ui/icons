import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLockRing = forwardRef<SVGSVGElement, IconProps>(function IconLockRing(
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
            d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.13 12.95C2.52 10.64 3.8 10 7 10h10c4 0 5 1 5 5v.4m-.11 3.5C21.54 21.33 20.27 22 17 22H7c-4 0-5-1-5-5v-.55"
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
            d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5"
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
            d="M12 17.35a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26"
            fill="currentColor"
          />
          <path
            d="M16.65 9.44h-9.3C3.25 9.44 2 10.69 2 14.79v1.86C2 20.75 3.25 22 7.35 22h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-4.1-1.25-5.35-5.35-5.35M12 18.74a3.02 3.02 0 1 1 0-6.05 3.02 3.02 0 0 1 0 6.05"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.12 9.45V8.28c0-2.93.83-4.88 4.88-4.88s4.88 1.95 4.88 4.88v1.17q.76 0 1.4.09V8.28C18.28 5.58 17.63 2 12 2S5.72 5.58 5.72 8.28v1.25q.63-.08 1.4-.08"
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
            d="M12 17.35a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26"
            fill="currentColor"
          />
          <path
            d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2S5.72 5.58 5.72 8.28v1.25C2.92 9.88 2 11.3 2 14.79v1.86C2 20.75 3.25 22 7.35 22h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-3.49-.92-4.91-3.72-5.26M12 18.74a3.02 3.02 0 1 1 0-6.05 3.02 3.02 0 0 1 0 6.05m-4.65-9.3h-.23V8.28c0-2.93.83-4.88 4.88-4.88s4.88 1.95 4.88 4.88v1.17z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLockRing;
