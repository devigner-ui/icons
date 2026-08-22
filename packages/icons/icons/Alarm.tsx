import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlarm = forwardRef<SVGSVGElement, IconProps>(function IconAlarm(
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
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="13.0005"
            r="9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 9v4l2.5 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.5 4.5 4-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m20.5 4.5-4-2.5"
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
            d="M12 22a8.7 8.7 0 0 0 8.76-8.67c0-4.8-3.92-8.68-8.76-8.68a8.7 8.7 0 0 0-8.76 8.68A8.7 8.7 0 0 0 12 22"
            fill="currentColor"
          />
          <path
            d="M12 8.75c.4 0 .73.32.73.72v3.56l2.22 2.2c.28.28.28.73 0 1.02a.73.73 0 0 1-1.03 0l-2.44-2.41a.7.7 0 0 1-.21-.51V9.47c0-.4.33-.72.73-.72"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.24 2.34c.21.34.11.78-.23 1l-3.9 2.4a.72.72 0 1 1-.77-1.23l3.9-2.4a.74.74 0 0 1 1 .23"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.76 2.34a.73.73 0 0 1 1-.23l3.9 2.41c.34.21.44.66.23 1a.73.73 0 0 1-1 .23l-3.9-2.41a.7.7 0 0 1-.23-1"
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
            d="M12 22a8.7 8.7 0 0 0 8.76-8.67c0-4.8-3.92-8.68-8.76-8.68a8.7 8.7 0 0 0-8.76 8.68A8.7 8.7 0 0 0 12 22m0-13.25c.4 0 .73.32.73.72v3.56l2.22 2.2c.28.28.28.73 0 1.02a.73.73 0 0 1-1.03 0l-2.44-2.41a.7.7 0 0 1-.21-.51V9.47c0-.4.33-.72.73-.72"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.24 2.34c.21.34.11.78-.23 1l-3.9 2.4a.72.72 0 1 1-.77-1.23l3.9-2.4a.74.74 0 0 1 1 .23"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.76 2.34a.73.73 0 0 1 1-.23l3.9 2.41c.34.21.44.66.23 1a.73.73 0 0 1-1 .23l-3.9-2.41a.7.7 0 0 1-.23-1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAlarm;
