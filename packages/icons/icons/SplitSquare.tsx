import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSplitSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconSplitSquare(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.81 15.07v-1.96a4.57 4.57 0 0 1 4.57-4.57h1.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.29 8.55h1.96a4.57 4.57 0 0 1 4.57 4.57v4.13"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m7.81 6.75-1.8 1.8 1.8 1.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m17.53 6.75 1.8 1.8-1.8 1.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M20.02 8.27a1 1 0 0 0-.16-.24l-1.8-1.8a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.52.52h-.15a5.3 5.3 0 0 0-4.57 2.64 5.3 5.3 0 0 0-4.56-2.64H7.8l.52-.52a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.8 1.8a.75.75 0 0 0 0 1.06l1.8 1.8q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-.52-.52h.42c2.1 0 3.81 1.71 3.81 3.81v4.13c0 .41.34.75.75.75s.75-.34.75-.75v-4.13c0-2.1 1.71-3.81 3.82-3.81h.15l-.52.52a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l1.8-1.8a1 1 0 0 0 .16-.24.7.7 0 0 0 0-.58"
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
            <g clipPath="url(#clip0_12_64996)">
              <path
                d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m3.16 6.84a1 1 0 0 1-.16.24l-1.8 1.8a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.52-.52h-.15a3.8 3.8 0 0 0-3.82 3.81v4.13c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4.13c0-2.1-1.71-3.81-3.81-3.81h-.42l.52.52c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.8-1.8a.75.75 0 0 1 0-1.06l1.8-1.8a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.52.52h.43a5.3 5.3 0 0 1 4.56 2.64 5.3 5.3 0 0 1 4.57-2.64h.15l-.52-.52a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.8 1.8q.1.1.16.24.1.3-.01.58"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath>
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  transform="translate(0.669922)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </>
    );
  },
);

export default IconSplitSquare;
