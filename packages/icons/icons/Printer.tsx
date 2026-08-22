import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPrinter = forwardRef<SVGSVGElement, IconProps>(function IconPrinter(
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
            d="M6 17.98c-1.55-.04-2.48-.22-3.12-.86C2 16.24 2 14.82 2 12s0-4.24.88-5.12S5.18 6 8 6h8c2.83 0 4.24 0 5.12.88S22 9.18 22 12s0 4.24-.88 5.12c-.64.64-1.57.82-3.12.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 10H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19 14H5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M18 14v2c0 2.83 0 4.24-.88 5.12S14.82 22 12 22s-4.24 0-5.12-.88S6 18.82 6 16v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.98 6c-.04-1.55-.22-2.48-.86-3.12C16.24 2 14.82 2 12 2s-4.24 0-5.12.88c-.64.64-.82 1.57-.86 3.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="17"
            cy="10"
            r="1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 16.5H9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 19H9"
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
            d="M17.12 2.88C16.24 2 14.82 2 12 2s-4.24 0-5.12.88c-.5.5-.71 1.15-.8 2.13L7.92 5h8.14l1.86.01c-.1-.98-.32-1.64-.8-2.13"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 14.5c0 2.83 0 5.74-.88 6.62S14.82 22 12 22s-4.24 0-5.12-.88S6 17.32 6 14.5zm-2.25 2.25c0 .41-.34.75-.75.75H9A.75.75 0 0 1 9 16h6c.41 0 .75.34.75.75m-2 3c0 .41-.34.75-.75.75H9A.75.75 0 0 1 9 19h4c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M15 17.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"
              fill="currentColor"
            />
            <path
              d="M13 20.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"
              fill="currentColor"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 6H8c-2.83 0-4.24 0-5.12.88S2 9.18 2 12s0 4.24.88 5.12c.5.5 1.16.71 2.15.8C5 17.2 5 15.36 5 14.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .85 0 2.7-.03 3.43 1-.1 1.66-.31 2.15-.8.88-.89.88-2.3.88-5.13s0-4.24-.88-5.12S18.82 6 16 6"
            fill="currentColor"
          />
          <path
            d="M9 10.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
          />
          <path d="M18 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
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
            d="M16 6H8c-2.83 0-4.24 0-5.12.88S2 9.18 2 12s0 4.24.88 5.12c.5.5 1.16.71 2.15.8C5 17.2 5 15.36 5 14.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .85 0 2.7-.03 3.43 1-.1 1.66-.31 2.15-.8.88-.89.88-2.3.88-5.13s0-4.24-.88-5.12S18.82 6 16 6m-7 4.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zm8 .25a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            d="M17.12 2.88C16.24 2 14.82 2 12 2s-4.24 0-5.12.88c-.5.5-.71 1.15-.8 2.13L7.92 5h8.14l1.86.01c-.1-.98-.32-1.64-.8-2.13"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 14.5c0 2.83 0 5.74-.88 6.62S14.82 22 12 22s-4.24 0-5.12-.88S6 17.32 6 14.5zm-2.25 2.25c0 .41-.34.75-.75.75H9A.75.75 0 0 1 9 16h6c.41 0 .75.34.75.75m-2 3c0 .41-.34.75-.75.75H9A.75.75 0 0 1 9 19h4c.41 0 .75.34.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPrinter;
