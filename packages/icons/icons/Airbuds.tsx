import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirbuds = forwardRef<SVGSVGElement, IconProps>(function IconAirbuds(
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
            d="M13.5 18v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V7.75a5 5 0 0 1 4.75-4.74l.56-.01h.34A3 3 0 0 1 22 5.85V8.3a3 3 0 0 1-3 3 1 1 0 0 0-1 1V18m-4.5 0H18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M10.5 18v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0V7.75a5 5 0 0 0-4.75-4.74L5.19 3h-.34A3 3 0 0 0 2 5.85V8.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V18m4.5 0H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.5 6v2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.5 6v2.5"
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
            d="M22 8.3V5.85A3.1 3.1 0 0 0 18.98 3h-.95a5.15 5.15 0 0 0-5.02 4.75l-.01.56v10.44A2.3 2.3 0 0 0 15.38 21c1.32 0 2.38-1 2.38-2.25V12.3c0-.55.48-1 1.06-1a3.1 3.1 0 0 0 3.18-3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 8.3V5.85A3.1 3.1 0 0 1 5.02 3h.95a5.15 5.15 0 0 1 5.02 4.75l.01.56v10.44A2.3 2.3 0 0 1 8.62 21a2.3 2.3 0 0 1-2.38-2.25V12.3c0-.55-.48-1-1.06-1A3.1 3.1 0 0 1 2 8.3"
            fill="currentColor"
          />
          <path d="M13 17.25h4.76v1.5H13z" fill="currentColor" />
          <path d="M11 17.25H6.24v1.5H11z" fill="currentColor" />
          <path
            d="M19.5 5.25c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M4.5 5.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75"
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
            d="M22 6.19V8.3c0 1.66-1.42 3-3.18 3-.58 0-1.06.45-1.06 1v4.95H13v-9.5a5.15 5.15 0 0 1 5.03-4.74l.6-.01h.35A3.1 3.1 0 0 1 22 6.2M20.25 6a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M15.38 21C14.07 21 13 20 13 18.75h4.76A2.3 2.3 0 0 1 15.38 21"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6.19V8.3c0 1.66 1.42 3 3.18 3 .58 0 1.06.45 1.06 1v4.95H11v-9.5a5.15 5.15 0 0 0-5.03-4.74L5.37 3h-.35A3.1 3.1 0 0 0 2 5.85zM3.75 6a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
          <path
            d="M8.62 21C9.93 21 11 20 11 18.75H6.24A2.3 2.3 0 0 0 8.62 21"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAirbuds;
