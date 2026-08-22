import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconXXX = forwardRef<SVGSVGElement, IconProps>(function IconXXX(
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
            d="m8.5 9-2 3m0 0-2 3m2-3-2-3m2 3 2 3M14 9l-2 3m0 0-2 3m2-3-2-3m2 3 2 3m5.5-6-2 3m0 0-2 3m2-3-2-3m2 3 2 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.08 8.38a.75.75 0 0 1 1.04.2l1.38 2.07 1.38-2.07A.75.75 0 0 1 9.25 9a.75.75 0 0 1 1.37-.4L12 10.64l1.38-2.07a.75.75 0 0 1 1.37.41.75.75 0 0 1 1.37-.4l1.38 2.06 1.38-2.07a.75.75 0 0 1 1.24.84L18.4 12l1.72 2.58a.75.75 0 1 1-1.24.84l-1.38-2.07-1.38 2.07a.75.75 0 0 1-1.37-.41.75.75 0 0 1-1.37.4L12 13.36l-1.38 2.07A.75.75 0 0 1 9.25 15a.75.75 0 0 1-1.37.4L6.5 13.36l-1.38 2.07a.75.75 0 1 1-1.24-.84L5.6 12 3.88 9.42a.75.75 0 0 1 .2-1.04m10.54 1.04L12.9 12l1.72 2.58q.13.2.13.4 0-.2.13-.4L16.6 12l-1.72-2.58a1 1 0 0 1-.13-.4q0 .2-.13.4M7.4 12l1.72-2.58a1 1 0 0 0 .13-.4q0 .2.13.4L11.1 12l-1.72 2.58a1 1 0 0 0-.13.4 1 1 0 0 0-.13-.4z"
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
            d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22M4.08 8.38a.75.75 0 0 1 1.04.2l1.38 2.07 1.38-2.07A.75.75 0 0 1 9.25 9a.75.75 0 0 1 1.37-.4L12 10.64l1.38-2.07a.75.75 0 0 1 1.37.41.75.75 0 0 1 1.37-.4l1.38 2.06 1.38-2.07a.75.75 0 1 1 1.24.84L18.4 12l1.72 2.58a.75.75 0 1 1-1.24.84l-1.38-2.07-1.38 2.07a.75.75 0 0 1-1.37-.41.75.75 0 0 1-1.37.4L12 13.36l-1.38 2.07A.75.75 0 0 1 9.25 15a.75.75 0 0 1-1.37.4L6.5 13.36l-1.38 2.07a.75.75 0 1 1-1.24-.84L5.6 12 3.88 9.42a.75.75 0 0 1 .2-1.04"
            fill="currentColor"
          />
          <path
            d="M9.12 9.42 7.4 12l1.72 2.58q.13.2.13.4 0-.2.13-.4L11.1 12 9.38 9.42a1 1 0 0 1-.13-.4q0 .2-.13.4"
            fill="currentColor"
          />
          <path
            d="M14.62 9.42 12.9 12l1.72 2.58q.13.2.13.4 0-.2.13-.4L16.6 12l-1.72-2.58a1 1 0 0 1-.13-.4q0 .2-.13.4"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconXXX;
