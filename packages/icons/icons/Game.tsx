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
            d="m9.57 12.46-3.05 3.05"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m6.55 12.49 3.05 3.05"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.53 14z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.47 14h.01"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 15.98v-.02"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 12.04v-.02"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9C5.25 6 3.19 7.12 2.39 9.8"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.01 2v1.01A1 1 0 0 1 12 4h-.04a1 1 0 0 0-.99 1 1 1 0 0 0 1 1h1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="m9.57 12.46-3.05 3.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m6.55 12.49 3.05 3.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.53 14h.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.47 14h.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 15.98v-.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 12.04v-.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9c-5 0-7 2-7 7v2c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.01 2 13 3.01A1 1 0 0 1 12 4h-.03a1 1 0 0 0-.99 1 1 1 0 0 0 1 1h1"
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
            d="M10.13 15.01 9.1 13.98l.99-.99a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.99.99-.96-.96a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.96.96-.99.99a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l.99-.99 1.03 1.03q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
            fill="currentColor"
          />
          <path
            d="M13.54 15c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M17.48 15c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M15.5 16.97a1 1 0 0 1-1-.99v-.02a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01"
            fill="currentColor"
          />
          <path
            d="M15.5 13.03a1 1 0 0 1-1-.99v-.02a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 11.07v5.58C22 19.6 19.6 22 16.65 22h-9.3A5.36 5.36 0 0 1 2 16.65v-5.58c0-2.95 2.4-5.35 5.35-5.35h9.3c2.95 0 5.35 2.4 5.35 5.35"
            fill="currentColor"
          />
          <path
            d="m13.64 2.71-.01.94A1.64 1.64 0 0 1 12 5.26q-.23.02-.24.23.02.21.23.23h-1.61l-.02-.23c0-.9.73-1.63 1.62-1.63q.24-.02.25-.23l.01-.94a.7.7 0 0 1 .7-.69h.01a.7.7 0 0 1 .69.71"
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
            d="M16.65 5.72h-9.3A5.36 5.36 0 0 0 2 11.07v5.58C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65v-5.58c0-2.95-2.4-5.35-5.35-5.35m-2.15 6.3a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01 1 1 0 0 1-1-.99zm-4.37 4.05a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.03-1.03-.99.99a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.99-.99-.96-.96a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.96.96.99-.99a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.99.99 1.03 1.03c.29.29.29.77 0 1.06M13.54 15c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1m1.96 1.97a1 1 0 0 1-1-.99v-.02a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01M17.48 15c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="m13.64 2.71-.01.94A1.64 1.64 0 0 1 12 5.26q-.23.02-.24.23.02.21.23.23h-1.61l-.02-.23c0-.9.73-1.63 1.62-1.63q.24-.02.25-.23l.01-.94a.7.7 0 0 1 .7-.69h.01a.7.7 0 0 1 .69.71"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGame;
