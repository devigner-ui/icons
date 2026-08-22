import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoon2 = forwardRef<SVGSVGElement, IconProps>(function IconMoon2(
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
            d="M2.7 12.42a10.49 10.49 0 0 0 18.93 5.3c.82-1.11.38-1.85-.99-1.6A9.32 9.32 0 0 1 9.65 7.14a9 9 0 0 1 .75-3.65c.54-1.24-.11-1.83-1.36-1.3A10.3 10.3 0 0 0 2.7 12.42"
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
            d="M9.67 19q0 1.27.37 2.42A10.5 10.5 0 0 1 3 12.43 10.3 10.3 0 0 1 9.32 2.22c1.06-.44 1.6-.12 1.83.11s.53.75.09 1.76a8.1 8.1 0 0 0 1.44 8.66A8 8 0 0 0 9.67 19"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.88 17.72a10.5 10.5 0 0 1-11.84 3.7 8.1 8.1 0 0 1 2.64-8.67 8.4 8.4 0 0 0 7.79 2.69c1.12-.2 1.57.22 1.73.49.17.27.35.86-.32 1.79"
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
            d="M22.2 15.93c-.16-.27-.61-.69-1.73-.49q-.93.17-1.88.13a8.4 8.4 0 0 1-8.02-8.2q0-1.71.67-3.28c.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11A10.3 10.3 0 0 0 3 12.43a10.5 10.5 0 0 0 9.93 9.54l.48.02a10.5 10.5 0 0 0 8.47-4.27c.67-.93.49-1.52.32-1.79"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMoon2;
