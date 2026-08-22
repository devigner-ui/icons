import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUFO2 = forwardRef<SVGSVGElement, IconProps>(function IconUFO2(
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
            d="M17 7.21c2.99.72 5 2.07 5 3.62 0 2.3-4.48 4.17-10 4.17S2 13.13 2 10.83c0-1.55 2.01-2.9 5-3.62"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 7.73A4.73 4.73 0 0 1 11.73 3h.54A4.73 4.73 0 0 1 17 7.73q.01.28-.2.45c-.41.29-1.61.82-4.8.82s-4.39-.53-4.8-.82q-.21-.16-.2-.45"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="12"
            r="1"
            fill="currentColor"
          />
          <circle cx="7" cy="11" r="1" fill="currentColor" />
          <circle cx="17" cy="11" r="1" fill="currentColor" />
          <path
            d="M12 21v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 20v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 20v-3"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.67 7.6C3.43 8.35 2 9.51 2 10.82 2 13.13 6.48 15 12 15s10-1.87 10-4.17c0-1.3-1.43-2.47-3.67-3.24a2 2 0 0 1-.67.82c-.8.55-2.36 1.09-5.66 1.09s-4.87-.54-5.66-1.09a2 2 0 0 1-.67-.82M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            d="M12 17.25c.41 0 .75.34.75.75v3a.75.75 0 1 1-1.5 0v-3c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.05 7c.35-2.26 2.31-4 4.68-4h.54a4.7 4.7 0 0 1 4.68 4 .4.4 0 0 1-.15.18c-.41.29-1.61.82-4.8.82s-4.39-.53-4.8-.82a.4.4 0 0 1-.15-.17"
              fill="currentColor"
            />
            <path
              d="M6 16.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M18.75 17a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
          </g>
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
            d="M5.67 7.6C3.43 8.35 2 9.51 2 10.82 2 13.13 6.48 15 12 15s10-1.87 10-4.17c0-1.3-1.43-2.47-3.67-3.24a2 2 0 0 1-.67.82c-.8.55-2.36 1.09-5.66 1.09s-4.87-.54-5.66-1.09a2 2 0 0 1-.67-.82M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            d="M7.05 7c.35-2.26 2.31-4 4.68-4h.54a4.7 4.7 0 0 1 4.68 4 .4.4 0 0 1-.15.18c-.41.29-1.61.82-4.8.82s-4.39-.53-4.8-.82a.4.4 0 0 1-.15-.17"
            fill="currentColor"
          />
          <path
            d="M6 16.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M18.75 17a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M12 17.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUFO2;
