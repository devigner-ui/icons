import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCpuChip = forwardRef<SVGSVGElement, IconProps>(function IconCpuChip(
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
            d="M19.63 17.13q.37-1.11.37-2.73V9.6c0-4-1.6-5.6-5.6-5.6H9.6q-1.72 0-2.87.41M4.38 6.83A9 9 0 0 0 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6h4.8q1.74 0 2.9-.43"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3C8 7 7 8 7 10.5v3C7 16 8 17 10.5 17Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.01 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 8h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 16h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.01 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.01 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 8h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 16h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3C8 7 7 8 7 10.5v3C7 16 8 17 10.5 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.01 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 8h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 12h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 16h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.01 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.01 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 8h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 16h2"
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
            d="M15 4H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5m2.26 10.26a3 3 0 0 1-3 3H9.74a3 3 0 0 1-3-3V9.74a3 3 0 0 1 3-3h4.51a3 3 0 0 1 3 3z"
            fill="currentColor"
          />
          <path
            d="M9.06 2.75V4H9q-.75 0-1.44.21V2.75a.75.75 0 1 1 1.5 0"
            fill="currentColor"
          />
          <path
            d="M12.75 2.75V4h-1.5V2.75c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M16.45 2.75v1.46A5 5 0 0 0 15 4h-.05V2.75c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M22 8.3c0 .42-.33.75-.75.75H20V9q0-.76-.21-1.45h1.46c.42 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M22 12c0 .41-.33.75-.75.75H20v-1.5h1.25c.42 0 .75.33.75.75"
            fill="currentColor"
          />
          <path
            d="M22 15.7c0 .41-.33.75-.75.75h-1.46q.21-.7.21-1.45v-.05h1.25c.42 0 .75.33.75.75"
            fill="currentColor"
          />
          <path
            d="M16.45 19.79v1.46c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V20H15q.76 0 1.45-.21"
            fill="currentColor"
          />
          <path d="M12.76 20v1.25a.75.75 0 1 1-1.5 0V20z" fill="currentColor" />
          <path
            d="M9.06 20v1.25a.75.75 0 1 1-1.5 0v-1.46Q8.25 20 9 20z"
            fill="currentColor"
          />
          <path
            d="M4.21 7.55Q4 8.25 4 9v.05H2.75a.75.75 0 1 1 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M4 11.25v1.5H2.75a.75.75 0 1 1 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M4.21 16.45H2.75a.75.75 0 1 1 0-1.5H4V15q0 .75.21 1.45"
            fill="currentColor"
          />
          <path
            d="M17.26 9.74v4.51a3 3 0 0 1-3 3H9.74a3 3 0 0 1-3-3V9.74a3 3 0 0 1 3-3h4.51a3 3 0 0 1 3.01 3"
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
            d="M21.25 12.75c.42 0 .75-.34.75-.75a.74.74 0 0 0-.75-.75H20v-2.2h1.25c.42 0 .75-.33.75-.75a.75.75 0 0 0-.75-.75h-1.48a5 5 0 0 0-3.32-3.32V2.75A.76.76 0 0 0 15.7 2a.76.76 0 0 0-.75.75V4h-2.2V2.75A.76.76 0 0 0 12 2a.76.76 0 0 0-.75.75V4H9.06V2.75a.75.75 0 1 0-1.5 0v1.48a5 5 0 0 0-3.33 3.32H2.75a.75.75 0 1 0 0 1.5H4v2.2H2.75a.75.75 0 1 0 0 1.5H4v2.2H2.75a.75.75 0 1 0 0 1.5h1.48a5 5 0 0 0 3.33 3.32v1.48a.75.75 0 1 0 1.5 0V20h2.2v1.25a.75.75 0 1 0 1.5 0V20h2.19v1.25c0 .41.34.75.75.75s.75-.34.75-.75v-1.48a5 5 0 0 0 3.32-3.32h1.48c.42 0 .75-.34.75-.75a.74.74 0 0 0-.75-.75H20v-2.2zm-3.99 1.51a3 3 0 0 1-3 3H9.74a3 3 0 0 1-3-3V9.74a3 3 0 0 1 3-3h4.52a3 3 0 0 1 3 3z"
            fill="currentColor"
          />
          <path
            d="M10.02 16.25h3.97a2.27 2.27 0 0 0 2.27-2.27v-3.97a2.27 2.27 0 0 0-2.27-2.27h-3.97a2.27 2.27 0 0 0-2.27 2.27v3.97a2.26 2.26 0 0 0 2.27 2.27"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCpuChip;
