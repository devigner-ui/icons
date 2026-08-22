import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconListHeart = forwardRef<SVGSVGElement, IconProps>(
  function IconListHeart(
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
              d="m16.52 18.34-.44.6zm.98-4.51-.53.53c.3.3.76.3 1.06 0zm.98 4.51-.44-.6zm-.98.48v.75zm-.54-1.08a10 10 0 0 1-1.52-1.37q-.7-.82-.69-1.33h-1.5c0 .9.52 1.7 1.06 2.32.55.63 1.23 1.19 1.77 1.59zm-2.21-2.7c0-.76.34-1.12.66-1.24.34-.12.92-.07 1.56.56l1.06-1.06c-.94-.92-2.1-1.27-3.13-.9s-1.65 1.38-1.65 2.64zm4.17 3.9c.54-.4 1.22-.95 1.77-1.58a3.7 3.7 0 0 0 1.06-2.32h-1.5q0 .52-.69 1.33c-.45.52-1.03 1-1.52 1.37zm2.83-3.9c0-1.26-.62-2.27-1.66-2.65-1.01-.36-2.18-.01-3.12.9l1.06 1.07c.64-.63 1.22-.68 1.56-.56.32.12.66.48.66 1.24zm-5.67 3.9c.37.28.8.63 1.42.63v-1.5l-.1-.03-.44-.3zm1.96-1.2-.44.3q-.08.04-.1.03v1.5c.62 0 1.05-.35 1.42-.62z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 6H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 10H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 14H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 18H3"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 6c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
                fill="currentColor"
              />
            </g>
            <path
              d="M14 15.04c0 1.23 1.48 2.54 2.52 3.3.43.32.65.48.98.48s.55-.16.98-.48c1.04-.76 2.52-2.07 2.52-3.3 0-2.01-1.93-2.76-3.5-1.21-1.57-1.55-3.5-.8-3.5 1.2"
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
              d="M14 15.04c0 1.23 1.48 2.54 2.52 3.3.43.32.65.48.98.48s.55-.16.98-.48c1.04-.76 2.52-2.07 2.52-3.3 0-2.01-1.93-2.76-3.5-1.21-1.57-1.55-3.5-.8-3.5 1.2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 6c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconListHeart;
