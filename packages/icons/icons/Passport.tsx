import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPassport = forwardRef<SVGSVGElement, IconProps>(function IconPassport(
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
            d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="13.0005"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M18 6v.75h.75V6zm-2.28-3.67-.1-.75zM4.92 3.87l-.1-.74zm.15 2.88H18v-1.5H5.07zM18.75 6V4.3h-1.5V6zm-3.14-4.42L4.81 3.13l.22 1.48 10.8-1.54zM4.81 3.13c-.9.12-1.56.9-1.56 1.8h1.5c0-.16.12-.3.28-.32zM18.75 4.3a2.75 2.75 0 0 0-3.14-2.73l.21 1.49c.76-.1 1.43.48 1.43 1.24zm-13.68.94a.3.3 0 0 1-.32-.32h-1.5c0 1 .82 1.82 1.82 1.82z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 19h4"
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
            d="M9.75 13a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 18.7v-14a1 1 0 0 0 1 1h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3M8.25 13a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1 6c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 4v1.87a3 3 0 0 0-1-.18H5a1 1 0 0 1-1-1v-.07c0-.53.4-.98.92-1.06l10.8-1.54A2 2 0 0 1 18 4"
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
            d="M5 5a1 1 0 0 0-.6-.91q.23-.19.52-.22l10.8-1.54A2 2 0 0 1 18 4.3v.82A4 4 0 0 0 17 5z"
            fill="currentColor"
          />
          <path
            d="M9.75 13a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 6.17A3 3 0 0 1 20 9v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12a3 3 0 0 1 1 .17m-6 3.08a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-2 9a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPassport;
