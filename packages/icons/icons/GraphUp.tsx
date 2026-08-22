import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGraphUp = forwardRef<SVGSVGElement, IconProps>(function IconGraphUp(
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m7 14 2.3-2.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 0 1.4 0L17 10m0 0v2.5m0-2.5h-2.5"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            fill="currentColor"
          />
          <path
            d="M14.5 10.75a.75.75 0 0 1 0-1.5H17c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.01 2.01c-.69.69-1.8.69-2.48 0l-1.58-1.58a.25.25 0 0 0-.36 0l-2.29 2.29a.75.75 0 0 1-1.06-1.06l2.3-2.3a1.75 1.75 0 0 1 2.47 0l1.58 1.6c.1.09.26.09.36 0l2-2.02z"
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
            d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M13.75 10c0 .41.34.75.75.75h.69l-2.01 2.01c-.1.1-.26.1-.36 0l-1.58-1.58a1.75 1.75 0 0 0-2.48 0l-2.29 2.29a.75.75 0 1 0 1.06 1.06l2.3-2.3c.1-.09.25-.09.35 0l1.58 1.6c.69.68 1.8.68 2.48 0l2.01-2.02v.69a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGraphUp;
