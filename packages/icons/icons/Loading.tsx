import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLoading = forwardRef<SVGSVGElement, IconProps>(function IconLoading(
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
            d="M12 3v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 18v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 12h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 12H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.36 5.64-2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m7.76 16.24-2.12 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.36 18.36-2.12-2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.76 7.76 5.64 5.64"
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
            d="M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 17a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.07 4.93a1 1 0 0 1 0 1.41l-2.12 2.13a1 1 0 1 1-1.41-1.42l2.12-2.12a1 1 0 0 1 1.41 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.47 15.54a1 1 0 0 1 0 1.4l-2.13 2.13a1 1 0 0 1-1.41-1.41l2.12-2.12a1 1 0 0 1 1.42 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.54 15.54a1 1 0 0 1 1.4 0l2.13 2.12a1 1 0 0 1-1.41 1.41l-2.12-2.12a1 1 0 0 1 0-1.41"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.93 4.93a1 1 0 0 1 1.41 0l2.13 2.12a1 1 0 0 1-1.42 1.42L4.93 6.34a1 1 0 0 1 0-1.41"
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
            d="M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 17a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.07 4.93a1 1 0 0 1 0 1.41l-2.12 2.13a1 1 0 1 1-1.41-1.42l2.12-2.12a1 1 0 0 1 1.41 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.47 15.54a1 1 0 0 1 0 1.4l-2.13 2.13a1 1 0 0 1-1.41-1.41l2.12-2.12a1 1 0 0 1 1.42 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.54 15.54a1 1 0 0 1 1.4 0l2.13 2.12a1 1 0 0 1-1.41 1.41l-2.12-2.12a1 1 0 0 1 0-1.41"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.93 4.93a1 1 0 0 1 1.41 0l2.13 2.12a1 1 0 0 1-1.42 1.42L4.93 6.34a1 1 0 0 1 0-1.41"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLoading;
