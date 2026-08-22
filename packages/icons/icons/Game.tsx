import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGame = forwardRef<SVGSVGElement, IconProps>(function IconGame(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m10.24 12.46-3.05 3.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m7.22 12.49 3.05 3.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.2 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.14 14h.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.17 15.98v-.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.17 12.04v-.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.67 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7h-6c-5 0-7 2-7 7v2c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m13.68 2-.01 1.01a1 1 0 0 1-1 .99h-.03a1 1 0 0 0-.99 1 1 1 0 0 0 1 1h1"
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
            d="m10.8 15.01-1.03-1.03.99-.99a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.99.99-.96-.96a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.96.96-.99.99a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l.99-.99 1.03 1.03q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
            fill="currentColor"
          />
          <path
            d="M14.21 15c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M18.15 15c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M16.17 16.97a1 1 0 0 1-1-.99v-.02a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01"
            fill="currentColor"
          />
          <path
            d="M16.17 13.03a1 1 0 0 1-1-.99v-.02a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 11.07v5.58c0 2.95-2.4 5.35-5.35 5.35h-9.3a5.36 5.36 0 0 1-5.35-5.35v-5.58c0-2.95 2.4-5.35 5.35-5.35h9.3c2.95 0 5.35 2.4 5.35 5.35"
            fill="currentColor"
          />
          <path
            d="m14.31 2.71-.01.94a1.64 1.64 0 0 1-1.63 1.61q-.23.02-.24.23.02.21.23.23h-1.61l-.02-.23c0-.9.73-1.63 1.62-1.63q.24-.02.25-.23l.01-.94a.7.7 0 0 1 .7-.69h.01a.7.7 0 0 1 .69.71"
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
            d="M17.32 5.72h-9.3a5.36 5.36 0 0 0-5.35 5.35v5.58c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58c0-2.95-2.4-5.35-5.35-5.35m-2.15 6.3a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01 1 1 0 0 1-1-.99zm-4.37 4.05a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.03-1.03-.99.99a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.99-.99-.96-.96a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.96.96.99-.99a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.99.99 1.03 1.03c.29.29.29.77 0 1.06M14.21 15c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1m1.96 1.97a1 1 0 0 1-1-.99v-.02a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01M18.15 15c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="m14.31 2.71-.01.94a1.64 1.64 0 0 1-1.63 1.61q-.23.02-.24.23.02.21.23.23h-1.61l-.02-.23c0-.9.73-1.63 1.62-1.63q.24-.02.25-.23l.01-.94a.7.7 0 0 1 .7-.69h.01a.7.7 0 0 1 .69.71"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGame;
