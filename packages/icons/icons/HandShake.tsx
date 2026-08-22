import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHandShake = forwardRef<SVGSVGElement, IconProps>(
  function IconHandShake(
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
              d="M8.78 22a8.6 8.6 0 0 1-3.99-3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.83 2.19a4.6 4.6 0 0 1 4.61 1.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m4.01 8.37-.37-.65zm2.5.5.64-.38zm-3.3 1.88-.66.38zM7.7 3.37 8.34 3zm.84 1.45-.65.37zm1.88 4.7a.75.75 0 0 0 1.3-.75zm-2.88 2.61a.75.75 0 0 0 1.3-.75zM4.4 5.26l-.65.38zm7.44-2.33.65-.38zm2.52 4.33.65-.38zm1.69 2.89.37.65a.75.75 0 0 0 .28-1.03zm1.61-4.77-.64.37zM20.2 9.7l.65-.38zM7 17.24l.65-.38zm9.97 2-.37-.65zm-3.18-3.95a.75.75 0 1 0 1.3-.76zm-9.4-6.28c.64-.36 1.26-.14 1.47.23l1.3-.76c-.72-1.23-2.32-1.45-3.51-.77zm-.74-1.3c-1.2.68-1.8 2.18-1.09 3.41l1.3-.75c-.21-.37-.1-1 .53-1.36zm3.4-3.97.85 1.44 1.3-.75-.85-1.45zm.85 1.44 2.53 4.34 1.3-.76L9.2 4.43zm.94 6.19L7.15 8.49l-1.3.76 1.69 2.88zM7.15 8.49l-2.1-3.61-1.3.76 2.1 3.6zM5.58 3.52c.63-.36 1.25-.14 1.47.23l1.3-.76c-.72-1.22-2.33-1.45-3.52-.77zm-.75-1.3c-1.19.68-1.8 2.18-1.08 3.42l1.3-.76c-.21-.36-.1-1 .53-1.36zm6.36 1.09 2.53 4.33 1.3-.76-2.53-4.33zm2.53 4.33 1.68 2.89 1.3-.76L15 6.88zm-4-4.56c.63-.36 1.26-.14 1.47.23l1.3-.76c-.72-1.22-2.33-1.45-3.52-.77zm-.75-1.3c-1.19.68-1.8 2.18-1.08 3.41l1.3-.75c-.21-.36-.1-1 .53-1.36zm8.05 3.97 2.52 4.34 1.3-.76L18.3 5zm-1.48-.22c.64-.37 1.26-.14 1.48.22l1.3-.75c-.72-1.23-2.33-1.46-3.52-.78zm-.74-1.3c-1.2.67-1.8 2.18-1.08 3.41l1.3-.76c-.22-.36-.1-1 .52-1.35zm-12.25 6.9 3.8 6.5 1.29-.76-3.79-6.5zM16.6 18.6c-3.37 1.93-7.34 1.03-8.95-1.73l-1.3.76c2.11 3.62 7.07 4.52 10.99 2.27zm2.95-8.51c1.6 2.75.41 6.59-2.95 8.51l.74 1.3c3.92-2.24 5.62-6.94 3.5-10.57zm-4.46 4.45c-.68-1.15-.2-2.86 1.34-3.74l-.74-1.3c-2.1 1.2-3.08 3.77-1.9 5.8z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.19 3.3c-.21-.36-.84-.58-1.47-.22s-.74 1-.53 1.36l2.52 4.33a.75.75 0 1 1-1.3.76L7.06 3.75c-.22-.37-.84-.59-1.47-.23s-.74 1-.53 1.36l3.78 6.5a.75.75 0 0 1-1.3.75L5.86 9.25c-.21-.37-.83-.6-1.47-.23-.63.36-.74 1-.53 1.36l3.79 6.5c1.6 2.75 5.58 3.65 8.95 1.72 3.36-1.92 4.56-5.76 2.95-8.51l-2.52-4.34c-.22-.36-.84-.59-1.48-.22-.63.36-.74 1-.53 1.35l1.69 2.9a.75.75 0 0 1-.28 1.02c-1.54.88-2.02 2.59-1.34 3.74a.75.75 0 1 1-1.3.76 4.1 4.1 0 0 1 .64-4.78c.33-.37.44-.92.2-1.35z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41 17.86a.75.75 0 0 1 1.03.27 8 8 0 0 0 3.65 3.19.75.75 0 0 1-.61 1.36 9.3 9.3 0 0 1-4.34-3.8.75.75 0 0 1 .27-1.02"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9 3.92a3.9 3.9 0 0 0-3.87-1.01.75.75 0 1 1-.41-1.45 5.4 5.4 0 0 1 5.36 1.41.75.75 0 1 1-1.07 1.05"
                fill="currentColor"
              />
            </g>
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
              d="M4.41 17.86a.75.75 0 0 1 1.03.27 8 8 0 0 0 3.65 3.19.75.75 0 0 1-.61 1.36 9.3 9.3 0 0 1-4.34-3.8.75.75 0 0 1 .27-1.02"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.9 3.92a3.9 3.9 0 0 0-3.87-1.01.75.75 0 0 1-.41-1.45 5.4 5.4 0 0 1 5.36 1.41.75.75 0 0 1-1.07 1.05"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.19 3.3c-.21-.36-.84-.58-1.47-.22s-.74 1-.53 1.36l2.52 4.33a.75.75 0 1 1-1.3.76L7.06 3.75c-.22-.37-.84-.59-1.47-.23s-.74 1-.53 1.36l3.78 6.5a.75.75 0 0 1-1.3.75L5.86 9.25c-.21-.37-.83-.6-1.47-.23-.63.36-.74 1-.53 1.36l3.79 6.5c1.6 2.75 5.58 3.65 8.95 1.72 3.36-1.92 4.56-5.76 2.95-8.51l-2.52-4.34c-.22-.36-.84-.59-1.48-.22-.63.36-.74 1-.53 1.35l1.69 2.9a.75.75 0 0 1-.28 1.02c-1.54.88-2.02 2.59-1.34 3.74a.75.75 0 1 1-1.3.76 4.1 4.1 0 0 1 .64-4.78c.33-.37.44-.92.2-1.35z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHandShake;
