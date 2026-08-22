import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWheel = forwardRef<SVGSVGElement, IconProps>(function IconWheel(
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
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="12"
            cy="12.0005"
            r="6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="12"
            cy="12.0005"
            r="2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 12h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 12h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9 17.2 2-3.47"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m13 10.27 2-3.47"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15 17.2-2-3.47"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 10.27 9 6.8"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-10 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12m3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              fill="currentColor"
            />
          </g>
          <path
            d="m9.67 17.53 1.53-2.64a3 3 0 0 1-1.3-.75l-1.53 2.64a6 6 0 0 0 1.3.75"
            fill="currentColor"
          />
          <path
            d="M6.05 12.75h3.04a3 3 0 0 1 0-1.5H6.05a6 6 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            d="M8.37 7.22 9.9 9.86a3 3 0 0 1 1.3-.75L9.67 6.47a6 6 0 0 0-1.3.75"
            fill="currentColor"
          />
          <path
            d="m12.8 9.1 1.53-2.63a6 6 0 0 1 1.3.75L14.1 9.86a3 3 0 0 0-1.3-.75"
            fill="currentColor"
          />
          <path
            d="M14.9 12.75a3 3 0 0 0 0-1.5h3.05a6 6 0 0 1 0 1.5z"
            fill="currentColor"
          />
          <path
            d="M12.8 14.9a3 3 0 0 0 1.3-.76l1.53 2.64a6 6 0 0 1-1.3.75z"
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
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m5.95-9.25h-3.04a3 3 0 0 1-.8 1.4l1.52 2.63a6 6 0 0 0 2.32-4.03m-3.62 4.78L12.8 14.9a3 3 0 0 1-1.6 0l-1.53 2.64a6 6 0 0 0 4.66 0m-5.96-.75 1.53-2.64a3 3 0 0 1-.8-1.39H6.04a6 6 0 0 0 2.32 4.03m9.58-5.53H14.9a3 3 0 0 0-.8-1.39l1.52-2.64a6 6 0 0 1 2.32 4.03m-3.62-4.78a6 6 0 0 0-4.66 0L11.2 9.1a3 3 0 0 1 1.6 0zM9.9 9.86 8.37 7.22a6 6 0 0 0-2.32 4.03h3.04a3 3 0 0 1 .8-1.39"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWheel;
