import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBoneBroken = forwardRef<SVGSVGElement, IconProps>(
  function IconBoneBroken(
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
              d="M14.14 2.74a3.4 3.4 0 0 0-.85 3.05c.15.54.17 1.19-.22 1.58l-1.28 1.28a.14.14 0 0 0 .04.23 6.3 6.3 0 0 1 3.3 3.29c.03.09.15.11.22.04l1.28-1.28c.4-.4 1.04-.37 1.58-.22 1.01.28 2.3-.1 3.05-.85A2.52 2.52 0 0 0 17.7 6.3a2.52 2.52 0 0 0-3.56-3.56"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.74 17.7c.98.98 2.58.98 3.56 0a2.52 2.52 0 1 0 3.56 3.56 3.4 3.4 0 0 0 .85-3.05c-.15-.54-.17-1.19.22-1.58l1.28-1.28a.14.14 0 0 0-.04-.22 6.3 6.3 0 0 1-3.3-3.3.14.14 0 0 0-.22-.04l-1.28 1.28c-.4.4-1.04.37-1.58.22-1.01-.28-2.3.1-3.05.85a2.5 2.5 0 0 0 0 3.56"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.66 17.66 1.41 1.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.34 6.34 4.93 4.93"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 19v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 9H4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 15h1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 5V4"
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
              d="M14.14 2.74a3.4 3.4 0 0 0-.85 3.05c.15.54.17 1.19-.22 1.58l-1.28 1.28a.14.14 0 0 0 .04.23 6.3 6.3 0 0 1 3.3 3.29c.03.09.15.11.22.04l1.28-1.28c.4-.4 1.04-.37 1.58-.22 1.01.28 2.3-.1 3.05-.85A2.52 2.52 0 0 0 17.7 6.3a2.52 2.52 0 0 0-3.56-3.56"
              fill="currentColor"
            />
            <path
              d="M2.74 17.7c.98.98 2.58.98 3.56 0a2.52 2.52 0 1 0 3.56 3.56 3.4 3.4 0 0 0 .85-3.05c-.15-.54-.17-1.19.22-1.58l1.28-1.28a.14.14 0 0 0-.04-.22 6.3 6.3 0 0 1-3.3-3.3.14.14 0 0 0-.22-.04l-1.28 1.28c-.4.4-1.04.37-1.58.22-1.01-.28-2.3.1-3.05.85a2.5 2.5 0 0 0 0 3.56"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.25 5a.75.75 0 1 0 1.5 0V4a.75.75 0 0 0-1.5 0z"
                fill="currentColor"
              />
              <path
                d="M6.87 5.81a.75.75 0 1 1-1.06 1.06L4.4 5.46A.75.75 0 1 1 5.46 4.4z"
                fill="currentColor"
              />
              <path
                d="M18.19 17.13a.75.75 0 0 0-1.06 1.06l1.41 1.41a.75.75 0 0 0 1.06-1.06z"
                fill="currentColor"
              />
              <path
                d="M15 18.25c.41 0 .75.34.75.75v1a.75.75 0 1 1-1.5 0v-1c0-.41.34-.75.75-.75"
                fill="currentColor"
              />
              <path
                d="M5 9.75a.75.75 0 1 0 0-1.5H4a.75.75 0 0 0 0 1.5z"
                fill="currentColor"
              />
              <path
                d="M18.25 15c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
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
              d="M14.14 2.74a3.4 3.4 0 0 0-.85 3.05c.15.54.17 1.19-.22 1.58l-1.28 1.28a.14.14 0 0 0 .04.23 6.3 6.3 0 0 1 3.3 3.29c.03.09.15.11.22.04l1.28-1.28c.4-.4 1.04-.37 1.58-.22 1.01.28 2.3-.1 3.05-.85A2.52 2.52 0 0 0 17.7 6.3a2.52 2.52 0 0 0-3.56-3.56"
              fill="currentColor"
            />
            <path
              d="M2.74 17.7c.98.98 2.58.98 3.56 0a2.52 2.52 0 1 0 3.56 3.56 3.4 3.4 0 0 0 .85-3.05c-.15-.54-.17-1.19.22-1.58l1.28-1.28a.14.14 0 0 0-.04-.22 6.3 6.3 0 0 1-3.3-3.3.14.14 0 0 0-.22-.04l-1.28 1.28c-.4.4-1.04.37-1.58.22-1.01-.28-2.3.1-3.05.85a2.5 2.5 0 0 0 0 3.56"
              fill="currentColor"
            />
            <path
              d="M8.25 5a.75.75 0 1 0 1.5 0V4a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M6.87 5.81a.75.75 0 1 1-1.06 1.06L4.4 5.46A.75.75 0 1 1 5.46 4.4z"
              fill="currentColor"
            />
            <path
              d="M18.19 17.13a.75.75 0 0 0-1.06 1.06l1.41 1.41a.75.75 0 0 0 1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="M15 18.25c.41 0 .75.34.75.75v1a.75.75 0 1 1-1.5 0v-1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M5 9.75a.75.75 0 1 0 0-1.5H4a.75.75 0 0 0 0 1.5z"
              fill="currentColor"
            />
            <path
              d="M18.25 15c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBoneBroken;
