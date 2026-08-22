import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCpu2 = forwardRef<SVGSVGElement, IconProps>(function IconCpu2(
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
            d="M10.27 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6h-4.8c-4 0-5.6 1.6-5.6 5.6v4.8c0 4 1.6 5.6 5.6 5.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.17 17h3c2.5 0 3.5-1 3.5-3.5v-3c0-2.5-1-3.5-3.5-3.5h-3c-2.5 0-3.5 1-3.5 3.5v3c0 2.5 1 3.5 3.5 3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.68 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.67 8h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.67 12h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.67 16h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.68 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.68 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 8h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 12h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 16h2"
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
            d="M15.67 4h-6a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5m2.26 10.26a3 3 0 0 1-3 3h-4.52a3 3 0 0 1-3-3V9.74a3 3 0 0 1 3-3h4.51a3 3 0 0 1 3 3z"
            fill="currentColor"
          />
          <path
            d="M9.73 2.75V4h-.06q-.75 0-1.44.21V2.75a.75.75 0 1 1 1.5 0"
            fill="currentColor"
          />
          <path
            d="M13.42 2.75V4h-1.5V2.75c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M17.12 2.75v1.46A5 5 0 0 0 15.67 4h-.05V2.75c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M22.67 8.3c0 .42-.33.75-.75.75h-1.25V9q0-.76-.21-1.45h1.46c.42 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M22.67 12c0 .41-.33.75-.75.75h-1.25v-1.5h1.25c.42 0 .75.33.75.75"
            fill="currentColor"
          />
          <path
            d="M22.67 15.7c0 .41-.33.75-.75.75h-1.46q.21-.7.21-1.45v-.05h1.25c.42 0 .75.33.75.75"
            fill="currentColor"
          />
          <path
            d="M17.12 19.79v1.46c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V20h.05q.76 0 1.45-.21"
            fill="currentColor"
          />
          <path d="M13.43 20v1.25a.75.75 0 1 1-1.5 0V20z" fill="currentColor" />
          <path
            d="M9.73 20v1.25a.75.75 0 1 1-1.5 0v-1.46q.69.21 1.44.21z"
            fill="currentColor"
          />
          <path
            d="M4.88 7.55q-.21.7-.21 1.45v.05H3.42a.75.75 0 1 1 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M4.67 11.25v1.5H3.42a.75.75 0 1 1 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M4.88 16.45H3.42a.75.75 0 1 1 0-1.5h1.25V15q0 .75.21 1.45"
            fill="currentColor"
          />
          <path
            d="M17.93 9.74v4.51a3 3 0 0 1-3 3h-4.52a3 3 0 0 1-3-3V9.74a3 3 0 0 1 3-3h4.51a3 3 0 0 1 3.01 3"
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
            d="M21.92 12.75c.42 0 .75-.34.75-.75a.74.74 0 0 0-.75-.75h-1.25v-2.2h1.25c.42 0 .75-.33.75-.75a.75.75 0 0 0-.75-.75h-1.48a5 5 0 0 0-3.32-3.32V2.75a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75V4h-2.2V2.75a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75V4H9.73V2.75a.75.75 0 1 0-1.5 0v1.48A5 5 0 0 0 4.9 7.55H3.42a.75.75 0 1 0 0 1.5h1.25v2.2H3.42a.75.75 0 1 0 0 1.5h1.25v2.2H3.42a.75.75 0 1 0 0 1.5H4.9a5 5 0 0 0 3.33 3.32v1.48a.75.75 0 1 0 1.5 0V20h2.2v1.25a.75.75 0 1 0 1.5 0V20h2.19v1.25c0 .41.34.75.75.75s.75-.34.75-.75v-1.48a5 5 0 0 0 3.32-3.32h1.48c.42 0 .75-.34.75-.75a.74.74 0 0 0-.75-.75h-1.25v-2.2zm-3.99 1.51a3 3 0 0 1-3 3h-4.52a3 3 0 0 1-3-3V9.74a3 3 0 0 1 3-3h4.52a3 3 0 0 1 3 3z"
            fill="currentColor"
          />
          <path
            d="M10.69 16.25h3.97a2.27 2.27 0 0 0 2.27-2.27v-3.97a2.27 2.27 0 0 0-2.27-2.27h-3.97a2.27 2.27 0 0 0-2.27 2.27v3.97a2.26 2.26 0 0 0 2.27 2.27"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCpu2;
