import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconColourTuneing = forwardRef<SVGSVGElement, IconProps>(
  function IconColourTuneing(
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
              d="M2 12h7.5M22 12h-7.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M20 15.68C20 19 17.73 22 16 22c-2.27 0-3.93-3.16-3.93-10S10.41 2 8.14 2c-1.73 0-4 3-4 6.32"
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
              d="M3.17 3.17C2 4.34 2 6.23 2 10v4c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14v-4c0-3.77 0-5.66-1.17-6.83S17.77 2 14 2h-4C6.23 2 4.34 2 3.17 3.17"
              fill="currentColor"
            />
            <path
              d="M7.91 8.72c.18-.6.5-1.13.84-1.49.36-.38.65-.48.77-.48.3 0 .72.18 1.1 1.02.37.84.63 2.22.63 4.23q.01 3.15.77 4.85c.5 1.13 1.33 1.9 2.46 1.9.72 0 1.38-.44 1.86-.95a5 5 0 0 0 1.18-2.08.75.75 0 1 0-1.43-.44c-.18.6-.5 1.13-.84 1.49-.36.38-.65.48-.77.48-.3 0-.72-.18-1.1-1.02-.37-.84-.63-2.22-.63-4.23q0-3.15-.77-4.85c-.5-1.13-1.33-1.9-2.46-1.9-.72 0-1.38.44-1.86.95a5 5 0 0 0-1.18 2.08.75.75 0 0 0 1.43.44"
              fill="currentColor"
            />
            <path
              d="M6 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M14.5 11.25a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5z"
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
              d="M3.17 3.17C2 4.34 2 6.23 2 10v4c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14v-4c0-3.77 0-5.66-1.17-6.83S17.77 2 14 2h-4C6.23 2 4.34 2 3.17 3.17m4.74 5.55c.18-.6.5-1.13.84-1.49.36-.38.65-.48.77-.48.3 0 .72.18 1.1 1.02.37.84.63 2.22.63 4.23q.01 3.15.77 4.85c.5 1.13 1.33 1.9 2.46 1.9.72 0 1.38-.44 1.86-.95a5 5 0 0 0 1.18-2.08.75.75 0 1 0-1.43-.44c-.18.6-.5 1.13-.84 1.49-.36.38-.65.48-.77.48-.3 0-.72-.18-1.1-1.02-.37-.84-.63-2.22-.63-4.23q0-3.15-.77-4.85c-.5-1.13-1.33-1.9-2.46-1.9-.72 0-1.38.44-1.86.95a5 5 0 0 0-1.18 2.08.75.75 0 0 0 1.43.44M6 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm8.5 0a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconColourTuneing;
