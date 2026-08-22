import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLikeDislike = forwardRef<SVGSVGElement, IconProps>(
  function IconLikeDislike(
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
              d="m5.59 20.28 1.77 1.37c.23.23.74.34 1.09.34h2.17c.69 0 1.43-.51 1.6-1.2l1.37-4.17c.29-.8-.23-1.49-1.09-1.49h-2.29a.58.58 0 0 1-.57-.69l.29-1.83a1.14 1.14 0 0 0-.74-1.26 1.15 1.15 0 0 0-1.26.4l-2.34 3.49"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M2.67 20.28v-5.6c0-.8.34-1.09 1.14-1.09h.57c.8 0 1.14.29 1.14 1.09v5.6c0 .8-.34 1.09-1.14 1.09h-.57c-.8 0-1.14-.28-1.14-1.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m19.75 3.72-1.77-1.37c-.23-.23-.74-.34-1.09-.34h-2.17c-.69 0-1.43.51-1.6 1.2l-1.37 4.17c-.29.8.23 1.49 1.09 1.49h2.29c.34 0 .63.29.57.69l-.29 1.83c-.11.51.23 1.09.74 1.26.46.17 1.03-.06 1.26-.4l2.34-3.49"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
              />
              <path
                d="M22.67 3.72v5.6c0 .8-.34 1.09-1.14 1.09h-.57c-.8 0-1.14-.29-1.14-1.09v-5.6c0-.8.34-1.09 1.14-1.09h.57c.8 0 1.14.28 1.14 1.09"
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
              d="M13.82 15.37c-.22-.32-.61-.5-1.06-.5h-2.33a.5.5 0 0 1-.39-.18.6.6 0 0 1-.12-.44l.29-1.86a1.25 1.25 0 0 0-.8-1.37 1.2 1.2 0 0 0-1.37.44l-2.39 3.55-.07.12v5.02l.09.09 1.8 1.39c.24.24.78.37 1.16.37h2.21c.76 0 1.52-.57 1.7-1.27l1.4-4.25q.21-.63-.12-1.11"
              fill="currentColor"
            />
            <path
              d="M4.49 13.3h-.58c-.88 0-1.24.34-1.24 1.18v5.71c0 .84.36 1.18 1.24 1.18h.58c.88 0 1.24-.34 1.24-1.18v-5.71c0-.84-.36-1.18-1.24-1.18"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.87 8.6c.22.32.61.5 1.06.5h2.33q.24 0 .39.18t.12.44l-.29 1.86c-.12.55.25 1.18.8 1.37.52.19 1.12-.07 1.37-.44l2.39-3.55.07-.12V3.82l-.09-.09-1.8-1.39c-.24-.24-.78-.37-1.16-.37h-2.21c-.76 0-1.52.57-1.7 1.27l-1.4 4.25c-.14.4-.1.8.12 1.11"
              fill="currentColor"
            />
            <path
              d="M21.2 10.67h.58c.88 0 1.24-.34 1.24-1.18V3.78c0-.84-.36-1.18-1.24-1.18h-.58c-.88 0-1.24.34-1.24 1.18v5.71c0 .84.36 1.18 1.24 1.18"
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
              d="M13.82 15.37c-.22-.32-.61-.5-1.06-.5h-2.33a.5.5 0 0 1-.39-.18.6.6 0 0 1-.12-.44l.29-1.86a1.25 1.25 0 0 0-.8-1.37 1.2 1.2 0 0 0-1.37.44L5.73 14.9v-.43c0-.84-.36-1.18-1.24-1.18h-.58c-.88.01-1.24.35-1.24 1.19v5.71c0 .84.36 1.18 1.24 1.18h.58c.84 0 1.19-.33 1.22-1.09l1.75 1.35c.25.24.78.37 1.16.37h2.21c.76 0 1.52-.57 1.7-1.27l1.4-4.25q.22-.63-.11-1.11"
              fill="currentColor"
            />
            <path
              d="M21.78 2.61h-.58c-.84 0-1.19.33-1.23 1.09l-1.75-1.35c-.24-.24-.78-.37-1.16-.37h-2.21c-.76 0-1.52.57-1.7 1.27l-1.4 4.25q-.21.63.11 1.11c.22.32.61.5 1.06.5h2.33q.24 0 .39.18t.12.44l-.29 1.86c-.12.55.25 1.18.8 1.37.52.19 1.12-.07 1.37-.44l2.31-3.44v.43c0 .84.36 1.18 1.24 1.18h.58c.88 0 1.24-.34 1.24-1.18V3.78c.01-.83-.35-1.17-1.23-1.17"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLikeDislike;
