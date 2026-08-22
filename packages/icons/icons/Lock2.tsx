import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLock2 = forwardRef<SVGSVGElement, IconProps>(function IconLock2(
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
            d="M6.67 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.67 22h-10c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5"
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
            d="M12.67 17.35a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26"
            fill="currentColor"
          />
          <path
            d="M17.32 9.44h-9.3c-4.1 0-5.35 1.25-5.35 5.35v1.86c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-4.1-1.25-5.35-5.35-5.35m-4.65 9.3a3.02 3.02 0 1 1 0-6.05 3.02 3.02 0 0 1 0 6.05"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.79 9.45V8.28c0-2.93.83-4.88 4.88-4.88s4.88 1.95 4.88 4.88v1.17q.76 0 1.4.09V8.28c0-2.7-.65-6.28-6.28-6.28S6.39 5.58 6.39 8.28v1.25q.63-.08 1.4-.08"
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
            d="M12.67 17.35a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26"
            fill="currentColor"
          />
          <path
            d="M18.95 9.53V8.28c0-2.7-.65-6.28-6.28-6.28S6.39 5.58 6.39 8.28v1.25c-2.8.35-3.72 1.77-3.72 5.26v1.86c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-3.49-.92-4.91-3.72-5.26m-6.28 9.21a3.02 3.02 0 1 1 0-6.05 3.02 3.02 0 0 1 0 6.05m-4.65-9.3h-.23V8.28c0-2.93.83-4.88 4.88-4.88s4.88 1.95 4.88 4.88v1.17z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLock2;
