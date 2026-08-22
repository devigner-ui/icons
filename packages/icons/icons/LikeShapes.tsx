import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLikeShapes = forwardRef<SVGSVGElement, IconProps>(
  function IconLikeShapes(
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
              d="M11.42 2.45a2 2 0 0 1 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.85a1.94 1.94 0 0 1-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59a2 2 0 0 1 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.21c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m10.56 14.82 1.45 1.12c.19.19.61.28.89.28h1.77c.56 0 1.17-.42 1.31-.98l1.12-3.42c.23-.65-.19-1.22-.89-1.22h-1.87c-.28 0-.51-.23-.47-.56l.23-1.5a.9.9 0 0 0-.61-1.03.9.9 0 0 0-1.03.33l-1.92 2.85"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
              />
              <path
                d="M8.17 14.82v-4.58c0-.66.28-.89.94-.89h.47c.65 0 .94.23.94.89v4.58c0 .65-.28.89-.94.89h-.47c-.66 0-.94-.23-.94-.89"
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
              d="M11.42 2.45a2 2 0 0 1 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.85a1.94 1.94 0 0 1-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59a2 2 0 0 1 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.21c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47z"
              fill="currentColor"
            />
            <path
              d="M17.25 11.07a1 1 0 0 0-.89-.42h-1.95a.4.4 0 0 1-.33-.15.5.5 0 0 1-.1-.37l.24-1.56c.1-.46-.21-.99-.67-1.14-.43-.16-.94.06-1.14.36l-1.94 2.88v-.36c0-.7-.3-.99-1.04-.99h-.49c-.74 0-1.04.29-1.04.99v4.78c0 .7.3.99 1.04.99h.49c.7 0 1-.27 1.03-.91l1.47 1.13c.2.2.65.31.97.31h1.85c.64 0 1.28-.48 1.42-1.07l1.17-3.56a.9.9 0 0 0-.09-.91"
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
              d="m22.23 10.74-1.36-1.58c-.26-.3-.47-.86-.47-1.26V6.2c0-1.06-.87-1.93-1.93-1.93h-1.7c-.39 0-.96-.21-1.26-.47l-1.58-1.36a2 2 0 0 0-2.52 0L9.84 3.81c-.3.25-.87.46-1.26.46H6.85c-1.06 0-1.93.87-1.93 1.93v1.71c0 .39-.21.95-.46 1.25l-1.35 1.59a2 2 0 0 0 0 2.5l1.35 1.59c.25.3.46.86.46 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.73c.39 0 .96.21 1.26.47l1.58 1.36c.69.59 1.82.59 2.52 0l1.58-1.36c.3-.26.86-.47 1.26-.47h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.39.21-.96.47-1.26l1.36-1.58c.58-.69.58-1.83-.01-2.52M17.35 12l-1.17 3.56a1.5 1.5 0 0 1-1.42 1.07h-1.85c-.32 0-.77-.11-.97-.31l-1.47-1.15c-.03.64-.32.91-1.03.91h-.48c-.74 0-1.04-.29-1.04-.99v-4.78c0-.7.3-.99 1.04-.99h.49c.74 0 1.04.29 1.04.99v.36l1.94-2.88a1 1 0 0 1 1.14-.36c.47.16.77.68.67 1.14L14 10.13q-.03.22.1.37t.33.15h1.95q.59 0 .89.42.26.4.08.93"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLikeShapes;
