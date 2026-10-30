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
            d="M22 9.73v5.65c0 2.89 0 4.33-.88 5.22-.88.9-2.3.9-5.12.9H8c-2.83 0-4.24 0-5.12-.9S2 18.27 2 15.38v-2.8c0-2.09 0-3.14.55-3.93.56-.8 1.53-1.14 3.47-1.84l8-2.85c3.63-1.3 5.45-1.95 6.72-1.03.68.5 1 1.3 1.14 2.57"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 13.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44 2.12 0 2.56.44.44 1.15.44 2.56 0 2.12-.44 2.56-1.15.44-2.56.44-2.12 0-2.56-.44S9 14.91 9 13.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m15 10.5 1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m9 10.5-1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m15 16.5 1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m9 16.5-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5 6.56c0-1.3 0-1.96.34-2.4q.14-.18.3-.32C6.08 3.5 6.72 3.5 8 3.5h.82c.5 0 .76 0 .97.06.56.15 1 .6 1.15 1.18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M2 12.59c0-2.1 0-3.15.55-3.94.56-.8 1.53-1.14 3.47-1.84l8-2.85c3.63-1.3 5.45-1.95 6.72-1.03S22 5.8 22 9.73v5.65c0 2.89 0 4.33-.88 5.22-.88.9-2.3.9-5.12.9H8c-2.83 0-4.24 0-5.12-.9S2 18.27 2 15.38z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9 13.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44 2.12 0 2.56.44.44 1.15.44 2.56 0 2.12-.44 2.56-1.15.44-2.56.44-2.12 0-2.56-.44S9 14.91 9 13.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15 10.5 1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9 10.5-1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15 16.5 1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9 16.5-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 6.56c0-1.3 0-1.96.34-2.4q.14-.18.3-.32C6.08 3.5 6.72 3.5 8 3.5h.82c.5 0 .76 0 .97.06.56.15 1 .6 1.15 1.18"
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
            d="M2.55 8.65C2 9.45 2 10.49 2 12.59v2.8c0 2.88 0 4.32.88 5.21.88.9 2.3.9 5.12.9h8c2.83 0 4.24 0 5.12-.9s.88-2.33.88-5.22V9.73c0-3.92 0-5.89-1.26-6.8-1.27-.92-3.09-.27-6.72 1.03l-8 2.85c-1.94.7-2.91 1.04-3.47 1.84"
            fill="currentColor"
          />
          <path
            d="m11.02 5.03-.08-.3A1.7 1.7 0 0 0 9.8 3.57c-.22-.07-.47-.07-.98-.07H8c-1.28 0-1.92 0-2.36.34q-.17.15-.3.31C5 4.6 5 5.25 5 6.56v.62l1.02-.37z"
            fill="currentColor"
          />
          <path
            d="M7.47 8.97c-.3.3-.3.77 0 1.06l1.5 1.5.12.1C9 12.06 9 12.66 9 13.5c0 .83 0 1.42.09 1.85l-1.62 1.62a.75.75 0 1 0 1.06 1.06l1.62-1.62c.43.09 1.02.09 1.85.09s1.42 0 1.85-.09l1.62 1.62a.75.75 0 1 0 1.06-1.06l-1.62-1.62c.09-.43.09-1.02.09-1.85s0-1.42-.09-1.85l1.62-1.62a.75.75 0 1 0-1.06-1.06l-1.62 1.62c-.43-.09-1.02-.09-1.85-.09s-1.44 0-1.87.1l-.1-.13-1.5-1.5a.75.75 0 0 0-1.06 0"
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
            d="M2 12.59c0-2.1 0-3.15.55-3.94C3 8 3.72 7.65 5 7.18v-.62c0-1.3 0-1.96.34-2.4q.14-.18.3-.32C6.08 3.5 6.72 3.5 8 3.5h.82c.5 0 .76 0 .97.06.56.15 1 .6 1.15 1.18l.08.29 3-1.07c3.63-1.3 5.45-1.95 6.72-1.03S22 5.8 22 9.73v5.65c0 2.89 0 4.33-.88 5.22-.88.9-2.3.9-5.12.9H8c-2.83 0-4.24 0-5.12-.9S2 18.27 2 15.38zm5.47-2.56a.75.75 0 1 1 1.06-1.06l1.5 1.5.1.12c.43-.09 1.03-.09 1.87-.09.83 0 1.42 0 1.85.09l1.62-1.62a.75.75 0 1 1 1.06 1.06l-1.62 1.62c.09.43.09 1.02.09 1.85s0 1.42-.09 1.85l1.62 1.62a.75.75 0 1 1-1.06 1.06l-1.62-1.62c-.43.09-1.02.09-1.85.09s-1.42 0-1.85-.09l-1.62 1.62a.75.75 0 0 1-1.06-1.06l1.62-1.62C9 14.92 9 14.33 9 13.5s0-1.44.1-1.87l-.13-.1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFuel;
