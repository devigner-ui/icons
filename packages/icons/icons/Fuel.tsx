import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFuel = forwardRef<SVGSVGElement, IconProps>(function IconFuel(
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
            d="M2 13.09c0-2.1 0-3.15.55-3.94.56-.8 1.53-1.14 3.47-1.84l8-2.85c3.63-1.3 5.45-1.95 6.72-1.03S22 6.3 22 10.23v5.65c0 2.89 0 4.33-.88 5.22-.88.9-2.3.9-5.12.9H8c-2.83 0-4.24 0-5.12-.9S2 18.77 2 15.88z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9 14c0-1.41 0-2.12.44-2.56S10.59 11 12 11s2.12 0 2.56.44S15 12.59 15 14s0 2.12-.44 2.56S13.41 17 12 17s-2.12 0-2.56-.44S9 15.41 9 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15 11 1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9 11-1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15 17 1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9 17-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 7.06c0-1.3 0-1.96.34-2.4q.14-.18.3-.32C6.08 4 6.72 4 8 4h.82c.5 0 .76 0 .97.06.56.15 1 .6 1.15 1.18"
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
            d="M2.55 9.15C2 9.95 2 10.99 2 13.09v2.8c0 2.88 0 4.32.88 5.21.88.9 2.3.9 5.12.9h8c2.83 0 4.24 0 5.12-.9s.88-2.33.88-5.22v-5.65c0-3.92 0-5.89-1.26-6.8-1.27-.92-3.09-.27-6.72 1.03l-8 2.85c-1.94.7-2.91 1.04-3.47 1.84"
            fill="currentColor"
          />
          <path
            d="m11.02 5.53-.08-.3A1.7 1.7 0 0 0 9.8 4.07C9.58 4 9.33 4 8.82 4H8c-1.28 0-1.92 0-2.36.34q-.17.15-.3.31C5 5.1 5 5.75 5 7.06v.62l1.02-.37z"
            fill="currentColor"
          />
          <path
            d="M7.47 9.47c-.3.3-.3.77 0 1.06l1.5 1.5.12.1C9 12.56 9 13.16 9 14c0 .83 0 1.42.09 1.85l-1.62 1.62a.75.75 0 1 0 1.06 1.06l1.62-1.62c.43.09 1.02.09 1.85.09s1.42 0 1.85-.09l1.62 1.62a.75.75 0 1 0 1.06-1.06l-1.62-1.62c.09-.43.09-1.02.09-1.85s0-1.42-.09-1.85l1.62-1.62a.75.75 0 1 0-1.06-1.06l-1.62 1.62C13.42 11 12.83 11 12 11s-1.44 0-1.87.1l-.1-.13-1.5-1.5a.75.75 0 0 0-1.06 0"
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
            d="M2 13.09c0-2.1 0-3.15.55-3.94C3 8.5 3.72 8.15 5 7.68v-.62c0-1.3 0-1.96.34-2.4q.14-.18.3-.32C6.08 4 6.72 4 8 4h.82c.5 0 .76 0 .97.06.56.15 1 .6 1.15 1.18l.08.29 3-1.07c3.63-1.3 5.45-1.95 6.72-1.03S22 6.3 22 10.23v5.65c0 2.89 0 4.33-.88 5.22-.88.9-2.3.9-5.12.9H8c-2.83 0-4.24 0-5.12-.9S2 18.77 2 15.88zm5.47-2.56a.75.75 0 1 1 1.06-1.06l1.5 1.5.1.12C10.56 11 11.16 11 12 11c.83 0 1.42 0 1.85.09l1.62-1.62a.75.75 0 1 1 1.06 1.06l-1.62 1.62c.09.43.09 1.02.09 1.85s0 1.42-.09 1.85l1.62 1.62a.75.75 0 1 1-1.06 1.06l-1.62-1.62c-.43.09-1.02.09-1.85.09s-1.42 0-1.85-.09l-1.62 1.62a.75.75 0 0 1-1.06-1.06l1.62-1.62C9 15.42 9 14.83 9 14s0-1.44.1-1.87l-.13-.1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFuel;
