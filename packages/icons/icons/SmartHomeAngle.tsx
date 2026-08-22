import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartHomeAngle = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartHomeAngle(
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
              opacity={duotone ? "0.4" : "1"}
              d="M2.01 10a4 4 0 0 1 .33-2.12c.54-1.13 1.69-1.82 3.99-3.19l1.38-.82C9.81 2.62 10.85 2 12 2s2.2.62 4.29 1.87l1.38.82c2.3 1.37 3.45 2.06 4 3.19.53 1.12.35 2.44-.03 5.08l-.28 1.94c-.49 3.38-.73 5.08-1.9 6.09-1.08.92-2.6 1-5.46 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M11 22a9 9 0 0 0-9-9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 22a6 6 0 0 0-6-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M5 22a3 3 0 0 0-3-3"
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
              d="M13.1 22h-2.2c-3.45 0-5.18 0-6.35-1.01-1.18-1.01-1.42-2.7-1.9-6.1l-.29-1.93C1.98 10.32 1.8 9 2.34 7.87s1.69-1.8 3.99-3.18l1.38-.82C9.81 2.62 10.85 2 12 2s2.2.62 4.29 1.87l1.38.82c2.3 1.37 3.45 2.06 4 3.18s.35 2.45-.03 5.09l-.28 1.94c-.49 3.38-.73 5.08-1.9 6.09C18.27 22 16.55 22 13.1 22"
              fill="currentColor"
            />
            <path
              d="M2 12.25c0-.41.34-.75.75-.75a9.75 9.75 0 0 1 9.75 9.75.75.75 0 0 1-1.5 0C11 16.69 7.3 13 2.75 13a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M2 15.25c0-.41.34-.75.75-.75a6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 18.35 5.65 16 2.75 16a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M2.75 17.5a.75.75 0 0 0 0 1.5C3.99 19 5 20 5 21.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75"
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
              d="M2.25 12.25c0-.41.34-.75.75-.75a9.75 9.75 0 0 1 9.75 9.75.75.75 0 0 1-1.5 0C11.25 16.69 7.55 13 3 13a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M2.25 15.25c0-.41.34-.75.75-.75a6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8.25 18.35 5.9 16 3 16a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M3 17.5A.75.75 0 0 0 3 19c1.24 0 2.25 1 2.25 2.25a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 3 17.5"
              fill="currentColor"
            />
            <path
              d="M2.02 10.22q.45-.21.98-.22c6.21 0 11.25 5.04 11.25 11.25q0 .39-.13.75c2.78-.01 4.28-.1 5.33-1.01 1.18-1.01 1.42-2.7 1.9-6.1l.29-1.93c.38-2.64.57-3.96.02-5.09s-1.69-1.8-3.99-3.18l-1.38-.82C14.19 2.62 13.15 2 12 2s-2.2.62-4.29 1.87l-1.38.82c-2.3 1.37-3.45 2.06-4 3.18a4.5 4.5 0 0 0-.3 2.35"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartHomeAngle;
