import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaximize5 = forwardRef<SVGSVGElement, IconProps>(
  function IconMaximize5(
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
              d="M2.67 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m13.67 11 5.01-5.02h-4.01"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.68 5.98v4.01"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.67 16.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7c-2.25 0-3.15-.9-3.15-3.15v-2.7c0-2.25.9-3.15 3.15-3.15h2.7c2.25 0 3.15.9 3.15 3.15"
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
              d="M17.15 2H9.19C5.74 2 3.67 4.06 3.67 7.52v7.95c0 3.47 2.07 5.53 5.52 5.53h7.95c3.46 0 5.52-2.06 5.52-5.52V7.52C22.67 4.06 20.6 2 17.15 2"
              fill="currentColor"
            />
            <path
              d="M11.67 16.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7c-2.25 0-3.15-.9-3.15-3.15v-2.7c0-2.25.9-3.15 3.15-3.15h2.7c2.25 0 3.15.9 3.15 3.15"
              fill="currentColor"
            />
            <path
              d="m19.42 5.95-.05-.26-.01-.02a1 1 0 0 0-.19-.24l-.15-.1-.07-.03-.26-.05h-4.02a.76.76 0 0 0-.75.75c0 .41.33.72.75.72h2.21l-3.74 3.75a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l3.73-3.74v2.2c0 .41.34.75.75.75s.75-.34.75-.75V5.97z"
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
              d="M11.67 16.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7c-2.25 0-3.15-.9-3.15-3.15v-2.7c0-2.25.9-3.15 3.15-3.15h2.7c2.25 0 3.15.9 3.15 3.15"
              fill="currentColor"
            />
            <path
              d="M17.15 2H9.19a5.5 5.5 0 0 0-5.52 5.52v2.98a1 1 0 0 0 1 1h4.5a4 4 0 0 1 4 4V20a1 1 0 0 0 1 1h2.98c3.45 0 5.52-2.06 5.52-5.52V7.52A5.5 5.5 0 0 0 17.15 2m2.28 7.99c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.2l-3.73 3.74a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l3.73-3.75h-2.2a.74.74 0 0 1-.75-.75c0-.41.33-.75.75-.75h4.01q.14 0 .26.06l.07.03q.09.04.16.11l.06.05.13.19.01.03q.05.12.05.26l.01.02z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMaximize5;
