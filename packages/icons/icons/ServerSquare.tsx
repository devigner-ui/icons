import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconServerSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconServerSquare(
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
              d="M10 3.75h4v-1.5h-4zM21.25 11v2h1.5v-2zM14 20.25h-4v1.5h4zM2.75 13v-2h-1.5v2zM10 20.25c-1.9 0-3.26 0-4.29-.14-1-.13-1.58-.39-2-.81l-1.07 1.06c.75.75 1.7 1.08 2.87 1.24 1.15.15 2.63.15 4.49.15zM1.25 13c0 1.86 0 3.34.15 4.49a4.7 4.7 0 0 0 1.24 2.87L3.7 19.3c-.42-.43-.67-1-.81-2.01A36 36 0 0 1 2.75 13zm20 0c0 1.9 0 3.26-.14 4.29-.13 1-.39 1.59-.81 2l1.06 1.07a4.7 4.7 0 0 0 1.24-2.87c.15-1.15.15-2.63.15-4.49zM14 21.75c1.86 0 3.34 0 4.49-.15a4.7 4.7 0 0 0 2.87-1.24L20.3 19.3c-.43.42-1 .68-2.01.81-1.03.14-2.38.14-4.29.14zm0-18a36 36 0 0 1 4.29.14c1 .14 1.58.39 2 .81l1.07-1.06a4.7 4.7 0 0 0-2.87-1.24c-1.15-.15-2.63-.15-4.49-.15zM22.75 11c0-1.86 0-3.34-.15-4.49a4.7 4.7 0 0 0-1.24-2.87L20.3 4.7c.42.43.68 1 .81 2.01.14 1.03.14 2.38.14 4.29zM10 2.25c-1.86 0-3.34 0-4.49.15a4.7 4.7 0 0 0-2.87 1.24L3.7 4.7c.43-.42 1-.67 2.01-.81A36 36 0 0 1 10 3.75zM2.75 11c0-1.9 0-3.26.14-4.29.14-1 .39-1.58.81-2L2.64 3.63A4.7 4.7 0 0 0 1.4 6.51c-.15 1.15-.15 2.63-.15 4.49zM2 12.75h20v-1.5H2z"
              fill="currentColor"
            />
            <path
              d="M13.5 16.5H18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.5 7.5H18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 17.5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 8.5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 17.5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 8.5v-2"
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
              <path
                d="M14 21h-4c-3.77 0-5.66 0-6.83-1.17S2 16.77 2 13v-.25h20V13c0 3.77 0 5.66-1.17 6.83S17.77 21 14 21"
                fill="currentColor"
              />
              <path
                d="M10 3h4c3.77 0 5.66 0 6.83 1.17S22 7.23 22 11v.25H2V11c0-3.77 0-5.66 1.17-6.83S6.23 3 10 3"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12.75H2v-1.5h20z"
              fill="currentColor"
            />
            <path
              d="M12.75 16.5c0-.41.34-.75.75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M12.75 7.5c0-.41.34-.75.75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M6 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
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
              d="M3.17 4.17C2 5.34 2 7.23 2 11v.25h20V11c0-3.77 0-5.66-1.17-6.83S17.77 3 14 3h-4C6.23 3 4.34 3 3.17 4.17M22 12.75H2V13c0 3.77 0 5.66 1.17 6.83S6.23 21 10 21h4c3.77 0 5.66 0 6.83-1.17S22 16.77 22 13zM5.25 17.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm3.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75m4.5-2.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5zM9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75M5.25 8.5a.75.75 0 1 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm7.5-1c0-.41.34-.75.75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconServerSquare;
