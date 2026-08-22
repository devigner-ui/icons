import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWallet = forwardRef<SVGSVGElement, IconProps>(function IconWallet(
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
            d="M6 8h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.83 9h-2.6C16.45 9 15 10.34 15 12s1.45 3 3.23 3H21c.54-.03.97-.43 1-.93l.01-.15V9.94c-.04-.5-.47-.9-1-.94z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="18"
            cy="12.0005"
            r="1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.97 9c-.08-1.87-.33-3.02-1.14-3.83C18.66 4 16.77 4 13 4h-3C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h3c3.77 0 5.66 0 6.83-1.17.8-.8 1.06-1.96 1.14-3.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M5.75 7a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.19 8H18.2C15.94 8 14 9.74 14 12s1.94 4 4.21 4h2.98a1.9 1.9 0 0 0 1.8-1.74l.01-.2V9.74A1.9 1.9 0 0 0 21.19 8m-3.22 5.07c.59 0 1.06-.48 1.06-1.07s-.47-1.07-1.06-1.07a1.07 1.07 0 0 0 0 2.14"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.14 8c0-1.18-.04-2.45-.8-3.35l-.23-.26a4.7 4.7 0 0 0-2.87-1.24C16.1 3 14.64 3 12.8 3h-2.12c-1.83 0-3.29 0-4.43.15A4.7 4.7 0 0 0 3.4 4.4a4.7 4.7 0 0 0-1.24 2.87C2 8.4 2 9.86 2 11.7v.12c0 1.83 0 3.29.15 4.43A4.7 4.7 0 0 0 3.4 19.1c.75.75 1.7 1.08 2.87 1.24 1.14.15 2.6.15 4.43.15h2.12c1.83 0 3.29 0 4.43-.15a4.7 4.7 0 0 0 2.87-1.24q.3-.3.52-.66c.46-.72.5-1.6.5-2.45h-2.92C15.94 16 14 14.26 14 12s1.94-4 4.21-4z"
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
            d="M21.1 8h-2.7a3.8 3.8 0 0 0-3.84 3.75 3.8 3.8 0 0 0 3.83 3.75h2.71a1.75 1.75 0 0 0 1.65-1.63V9.63A1.75 1.75 0 0 0 21.1 8m-2.93 4.75c.53 0 .97-.45.97-1s-.44-1-.97-1a1 1 0 0 0-.96 1c0 .55.43 1 .96 1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.92 17c.15 0 .26.13.22.28q-.28 1.07-1.03 1.83a4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15h-2.12c-1.83 0-3.29 0-4.43-.15A4.7 4.7 0 0 1 3.4 19.1a4.7 4.7 0 0 1-1.24-2.87C2 15.1 2 13.64 2 11.8v-.12c0-1.83 0-3.29.15-4.43A4.7 4.7 0 0 1 3.4 4.4a4.7 4.7 0 0 1 2.87-1.24C7.4 3 8.86 3 10.7 3h2.12c1.83 0 3.29 0 4.43.15 1.17.16 2.12.5 2.87 1.24q.75.76 1.03 1.83a.22.22 0 0 1-.22.28H18.4a5.3 5.3 0 0 0-5.33 5.25A5.3 5.3 0 0 0 18.4 17zM5.75 7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWallet;
