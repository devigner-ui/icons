import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicSquare(
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
              d="M22.67 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.09 17.11a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.42 14.49V8.35c0-1.31-.82-1.49-1.65-1.26l-3.14.86c-.57.16-.96.61-.96 1.26v6.34"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.85 16.06a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.66 11.04 5.76-1.57"
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
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M16.81 6.71c-.34-.26-.94-.51-1.9-.25l-2.99.82a2.04 2.04 0 0 0-1.54 2.01v3.78q-.31-.1-.65-.1a2.34 2.34 0 1 0 2.34 2.37l.01-.03v-3.62l3.78-1.03v1.42q-.31-.1-.65-.1a2.34 2.34 0 1 0 2.34 2.34V8.49c0-1-.41-1.52-.74-1.78m-7.08 9.25a.65.65 0 1 1 0-1.3.65.65 0 1 1 0 1.3m5.48-1a.65.65 0 1 1 0-1.3c.36 0 .65.29.65.65a.66.66 0 0 1-.65.65"
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
              d="M15.21 13.67a.65.65 0 1 0 0 1.3c.36 0 .65-.29.65-.65a.66.66 0 0 0-.65-.65"
              fill="currentColor"
            />
            <path
              d="M9.73 14.66a.65.65 0 1 0 0 1.3.65.65 0 1 0 0-1.3"
              fill="currentColor"
            />
            <path
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m.69 7.55v4.76a2.34 2.34 0 1 1-2.34-2.34q.34 0 .65.1v-1.42l-3.78 1.03v3.62l-.01.03a2.34 2.34 0 1 1-1.69-2.27V9.29c0-.97.6-1.76 1.54-2.01l2.99-.82c.96-.26 1.56-.01 1.9.25s.74.77.74 1.77z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicSquare;
