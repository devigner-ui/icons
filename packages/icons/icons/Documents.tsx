import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocuments = forwardRef<SVGSVGElement, IconProps>(
  function IconDocuments(
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
              d="M5 8c0-2.83 0-4.24.88-5.12S8.18 2 11 2h2c2.83 0 4.24 0 5.12.88S19 5.18 19 8v8c0 2.83 0 4.24-.88 5.12S15.82 22 13 22h-2c-2.83 0-4.24 0-5.12-.88S5 18.82 5 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 4.08c-.98.1-1.63.3-2.12.8C2 5.76 2 7.18 2 10v4c0 2.83 0 4.24.88 5.12.49.5 1.14.7 2.12.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 4.08c.98.1 1.63.3 2.12.8.88.88.88 2.3.88 5.12v4c0 2.83 0 4.24-.88 5.12-.49.5-1.14.7-2.12.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 13h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 9h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 17h3"
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
              d="M5.88 2.88C5 3.76 5 5.18 5 8v8c0 2.83 0 4.24.88 5.12S8.18 22 11 22h2c2.83 0 4.24 0 5.12-.88S19 18.82 19 16V8c0-2.83 0-4.24-.88-5.12S15.82 2 13 2h-2c-2.83 0-4.24 0-5.12.88M8.25 17c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 12.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 9c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.24 4.06C5 4.94 5 6.18 5 8v8c0 1.82 0 3.06.24 3.94L5 19.92c-.98-.1-1.63-.3-2.12-.8C2 18.24 2 16.82 2 14v-4c0-2.83 0-4.24.88-5.12.49-.5 1.14-.7 2.12-.8z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.76 19.94c.24-.88.24-2.12.24-3.94V8c0-1.82 0-3.06-.24-3.94l.24.02c.98.1 1.63.3 2.12.8.88.88.88 2.3.88 5.12v4c0 2.83 0 4.24-.88 5.12-.49.5-1.14.7-2.12.8z"
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
              d="M1.75 10v4c0 2.83 0 4.24.88 5.12q.33.32.76.5l-.02-.13c-.12-.91-.12-2.06-.12-3.39V7.9a28 28 0 0 1 .14-3.52q-.44.18-.76.5c-.88.88-.88 2.3-.88 5.12"
              fill="currentColor"
            />
            <path
              d="M21.75 10v4c0 2.83 0 4.24-.88 5.12a2 2 0 0 1-.76.5l.02-.13c.12-.91.12-2.06.12-3.39V7.9a28 28 0 0 0-.14-3.52q.44.18.76.5c.88.88.88 2.3.88 5.12"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.63 2.88c-.88.88-.88 2.3-.88 5.12v8c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h2c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V8c0-2.83 0-4.24-.88-5.12S15.57 2 12.75 2h-2c-2.83 0-4.24 0-5.12.88M8 17c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17m.75-4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8 9c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocuments;
