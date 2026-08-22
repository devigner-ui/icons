import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardSend2 = forwardRef<SVGSVGElement, IconProps>(
  function IconCardSend2(
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
              d="M2.67 8.5h12.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.67 16.5h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.17 16.5h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H7.11c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h8.06"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M20.67 9.5v-6l2 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m20.67 3.5-2 2"
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
              d="M21.64 1H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.03c0-1.27-.76-2.03-2.03-2.03m.22 3.31a.6.6 0 0 1-.44.18.6.6 0 0 1-.44-.18l-.18-.18v2.24c0 .35-.28.63-.63.63a.63.63 0 0 1-.63-.63V4.13l-.18.18a.63.63 0 0 1-.88 0 .63.63 0 0 1 0-.88l1.25-1.25.19-.12.06-.02q.07-.03.16-.03h.06q.1 0 .2.04h.02q.1.04.18.12l.02.01 1.25 1.25c.24.24.24.64-.01.88"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 7.77V9h-20V7.54A4.14 4.14 0 0 1 6.82 3.4h9.85v2.57c0 1.27.76 2.03 2.03 2.03h2.94q.6 0 1.03-.23"
              fill="currentColor"
            />
            <path
              d="M2.67 9v7.46a4.14 4.14 0 0 0 4.15 4.14h11.7a4.14 4.14 0 0 0 4.15-4.14V9zm6 8.25h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 0h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M20.64 1.75H17.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.78c0-1.27-.76-2.03-2.03-2.03m.22 3.31a.6.6 0 0 1-.44.18.6.6 0 0 1-.44-.18l-.18-.18v2.24c0 .35-.28.63-.63.63a.63.63 0 0 1-.63-.63V4.88l-.18.18a.63.63 0 0 1-.88 0 .63.63 0 0 1 0-.88l1.25-1.25.2-.12.05-.02q.07-.03.16-.03h.06q.1 0 .2.04h.02q.1.04.18.12l.02.01 1.25 1.25c.24.24.24.64 0 .88"
              fill="currentColor"
            />
            <path
              d="M2.67 11.46v5a4.14 4.14 0 0 0 4.14 4.14h11.71a4.15 4.15 0 0 0 4.15-4.15v-4.99a1.2 1.2 0 0 0-1.2-1.21H3.87a1.2 1.2 0 0 0-1.2 1.21m6 5.79h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 0h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M14.17 4.61v2.93a1.2 1.2 0 0 1-1.2 1.21h-9.1c-.68 0-1.2-.56-1.2-1.23A4.15 4.15 0 0 1 6.8 3.4h6.15c.67 0 1.21.54 1.21 1.21"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCardSend2;
