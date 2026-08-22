import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMapPointWave = forwardRef<SVGSVGElement, IconProps>(
  function IconMapPointWave(
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
              d="M5 8.51C5 4.91 8.13 2 12 2s7 2.92 7 6.51c0 3.57-2.23 7.74-5.72 9.23-.81.35-1.75.35-2.56 0C7.23 16.25 5 12.08 5 8.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M20.96 15.5q1.02.91 1.04 2c0 2.49-4.48 4.5-10 4.5S2 19.99 2 17.5q.02-1.09 1.04-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M19.72 20.36C21.14 19.58 22 18.6 22 17.5c0-1.15-.96-2.2-2.55-3A17 17 0 0 0 12 13c-2.96 0-5.62.58-7.45 1.5-1.59.8-2.55 1.85-2.55 3s.96 2.2 2.55 3C6.38 21.42 9.04 22 12 22c3.1 0 5.88-.64 7.72-1.64"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 8.51C5 4.91 8.13 2 12 2s7 2.92 7 6.51c0 3.57-2.23 7.74-5.72 9.23-.81.35-1.75.35-2.56 0C7.23 16.25 5 12.08 5 8.51M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
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
              d="M12 22c5.52 0 10-2.01 10-4.5 0-1.27-1.16-2.41-3.03-3.23a10.8 10.8 0 0 1-5.1 4.85c-1.19.5-2.55.5-3.74 0a10.8 10.8 0 0 1-5.1-4.85C3.16 15.1 2 16.23 2 17.5 2 20 6.48 22 12 22"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 8.51C5 4.91 8.13 2 12 2s7 2.92 7 6.51c0 3.57-2.23 7.74-5.72 9.23-.81.35-1.75.35-2.56 0C7.23 16.25 5 12.08 5 8.51M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMapPointWave;
