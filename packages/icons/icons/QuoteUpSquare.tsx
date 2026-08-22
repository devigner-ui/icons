import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconQuoteUpSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconQuoteUpSquare(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M17.67 11.84H15c-.7 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.2-1.19h1.48c.65 0 1.2.54 1.2 1.19z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.67 11.84c0 2.79-.52 3.26-2.09 4.19"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.53 11.84H8.85c-.7 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.2-1.19h1.48c.65 0 1.2.54 1.2 1.19z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.53 11.84c0 2.79-.52 3.26-2.09 4.19"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M16.86 2H8.5C4.85 2 2.7 4.17 2.7 7.81v8.37c0 3.64 2.16 5.81 5.8 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.8-5.81"
              fill="currentColor"
            />
            <path
              d="M16.48 7.22H15c-1.09 0-1.94.85-1.94 1.94v1.49c0 1.09.85 1.94 1.94 1.94h1.91c-.08 1.81-.5 2.08-1.7 2.79a.75.75 0 0 0-.27 1.03c.14.24.4.37.65.37q.2 0 .38-.1c1.8-1.06 2.46-1.75 2.46-4.83V9.18c0-1.09-.87-1.96-1.94-1.96"
              fill="currentColor"
            />
            <path
              d="M10.35 7.22H8.86c-1.09 0-1.94.85-1.94 1.94v1.49c0 1.09.85 1.94 1.94 1.94h1.91c-.08 1.81-.5 2.08-1.7 2.79a.75.75 0 0 0-.27 1.03c.14.24.4.37.65.37q.2 0 .38-.1c1.8-1.06 2.46-1.75 2.46-4.83V9.18a1.96 1.96 0 0 0-1.94-1.96"
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
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-4.58 9.84c0 3.08-.67 3.77-2.46 4.83a1 1 0 0 1-.38.1.8.8 0 0 1-.65-.37.76.76 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.9a1.9 1.9 0 0 1-1.94-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.5c1.06 0 1.93.87 1.93 1.94zm6.14 0c0 3.08-.67 3.77-2.46 4.83a1 1 0 0 1-.38.1.8.8 0 0 1-.65-.37.76.76 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79H15a1.9 1.9 0 0 1-1.95-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.5c1.06 0 1.93.87 1.93 1.94z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconQuoteUpSquare;
