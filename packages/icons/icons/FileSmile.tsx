import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFileSmile = forwardRef<SVGSVGElement, IconProps>(
  function IconFileSmile(
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
            d="M18.72 21.79a4 4 0 0 0 2.11-.96C22.2 19.4 22 16.73 22 14.89c0-1.29.2-3.58-.37-4.79s-2.38-2.58-3.4-3.49l-2.36-2.13c-.9-.81-1.84-1.88-3.03-2.27-1.04-.34-2.92-.24-4.18-.21m-3.48.21c-.74.16-1.43.44-2.01.96-1.14 1.28-1.13 3.08-1.16 4.7q-.03 2.5-.01 5.01c0 1.37-.03 2.74.04 4.11.07 1.48.17 3.16 1.46 4.12.97.72 2.27.8 3.44.85 2.05.09 4.12.04 6.18.04.56 0 1.3.03 2.11.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 2.5V5c0 2.36 0 3.54.73 4.27S15.64 10 18 10h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 14.5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0z"
            fill="currentColor"
          />
          <path
            d="M9 17.5a5.4 5.4 0 0 0 6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 14.5a1 1.5 0 1 0 2 0 1 1.5 0 1 0-2 0z"
            fill="currentColor"
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
              d="M3.17 3.17c-1.14 1.28-1.13 3.08-1.16 4.7q-.03 2.5-.01 5.01c0 1.37-.03 2.74.04 4.11.07 1.48.17 3.16 1.46 4.12.97.72 2.27.8 3.44.85 2.05.09 4.12.04 6.18.04 1.98 0 6.25.35 7.71-1.17C22.2 19.4 22 16.73 22 14.89c0-1.29.2-3.58-.37-4.79s-2.38-2.58-3.4-3.49l-2.36-2.13c-.9-.81-1.84-1.88-3.03-2.27-1.13-.37-3.26-.22-4.49-.21-1.76.02-3.79-.07-5.18 1.17z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 2.5V5c0 2.36 0 3.54.73 4.27S15.64 10 18 10h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <ellipse
              opacity={duotone ? "0.4" : "1"}
              cx="17"
              cy="14.5002"
              rx="1"
              ry="1.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 17.5a5.4 5.4 0 0 0 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse
              opacity={duotone ? "0.4" : "1"}
              cx="7"
              cy="14.5002"
              rx="1"
              ry="1.5"
              fill="currentColor"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14v-4c0-3.77 0-5.66 1.17-6.83S6.24 2 10.03 2q.9 0 1.5.02l-.02.24-.01 2.84c0 1.1 0 2.06.1 2.84.12.85.38 1.7 1.07 2.39s1.54.95 2.39 1.07c.78.1 1.75.1 2.85.1h4.05q.05.78.04 2.06V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22"
              fill="currentColor"
            />
            <path
              d="M8 14.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="M9.42 16.88a.75.75 0 1 0-.84 1.24 6.2 6.2 0 0 0 6.84 0 .75.75 0 1 0-.84-1.24 4.7 4.7 0 0 1-5.16 0"
              fill="currentColor"
            />
            <path
              d="M18 14.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="M11.5 2.26v2.83c0 1.1 0 2.07.1 2.85.12.85.38 1.7 1.07 2.39s1.54.95 2.39 1.06c.78.11 1.75.11 2.85.11h4.05l.02.5H22l-.01-.56a5.3 5.3 0 0 0-.96-2.64l-.28-.36A33 33 0 0 0 18 5.5a28 28 0 0 0-2.89-2.16 8 8 0 0 0-1.82-1.04l-.5-.16a6 6 0 0 0-1.29-.13z"
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
              d="M19.35 7.62 15.4 4.05c-1.12-1.01-1.69-1.52-2.38-1.78L13 5c0 2.36 0 3.54.73 4.27S15.64 10 18 10h3.58c-.36-.7-1.01-1.29-2.23-2.38"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14v-4c0-3.77 0-5.66 1.17-6.83S6.24 2 10.03 2q.9 0 1.5.02l-.02.24-.01 2.84c0 1.1 0 2.06.1 2.84.12.85.38 1.7 1.07 2.39s1.54.95 2.39 1.07c.78.1 1.75.1 2.85.1h4.05q.05.78.04 2.06V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22m3-6c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5m-8.62 1.08a.75.75 0 0 1 1.04-.2 4.7 4.7 0 0 0 5.16 0 .75.75 0 1 1 .84 1.24 6.2 6.2 0 0 1-6.84 0 .75.75 0 0 1-.2-1.04M7 16c.55 0 1-.67 1-1.5S7.55 13 7 13s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFileSmile;
