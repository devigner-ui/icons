import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPill = forwardRef<SVGSVGElement, IconProps>(function IconPill(
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
            d="M2.6 6a6.78 6.78 0 0 1 11-2l6.4 6.4a7 7 0 0 1 1.9 3.6M2.1 10A7 7 0 0 0 4 13.6l6.4 6.4a6.8 6.8 0 0 0 11-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16.8 7.2s-.54 2.8-3.67 5.93C10 16.27 7.2 16.81 7.2 16.81"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M4 13.6A6.8 6.8 0 1 1 13.6 4l6.4 6.4a6.8 6.8 0 1 1-9.6 9.6z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.8 7.2s-.54 2.8-3.67 5.93C10 16.27 7.2 16.81 7.2 16.81"
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
            d="M4 13.6A6.8 6.8 0 1 1 13.6 4l6.4 6.4a6.8 6.8 0 1 1-9.6 9.6z"
            fill="currentColor"
          />
          <path
            d="m7.8 17.42-1.25-1.25.5-.1h.01l.4-.11q.42-.13 1.2-.5c1.03-.49 2.44-1.36 3.94-2.86s2.37-2.91 2.87-3.94a9 9 0 0 0 .6-1.6v-.01l.1-.5 1.25 1.26-.03.1q-.16.52-.57 1.4a16 16 0 0 1-3.16 4.35 16 16 0 0 1-4.35 3.16 11 11 0 0 1-1.5.6"
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
            d="M3.85 3.85a6.8 6.8 0 0 0 0 9.6l2.55 2.57.5-.1h.01l.4-.11q.42-.13 1.2-.5c1.03-.49 2.44-1.36 3.94-2.86s2.37-2.91 2.87-3.94a9 9 0 0 0 .6-1.6V6.9l.1-.5-2.57-2.55a6.8 6.8 0 0 0-9.6 0"
            fill="currentColor"
          />
          <path
            d="M17.27 7.65a9 9 0 0 1-.6 1.51 16 16 0 0 1-3.16 4.35 16 16 0 0 1-4.35 3.16 11 11 0 0 1-1.5.6l2.59 2.58a6.8 6.8 0 1 0 9.6-9.6z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPill;
