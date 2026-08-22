import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGridEraser = forwardRef<SVGSVGElement, IconProps>(
  function IconGridEraser(
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
              d="M22.67 11V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M2.7 8.5h19.97"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.7 15.5h9.97"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.18 21.99V2.01"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.18 11.99V2.01"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="m19.47 19.7-1.9 1.9c-.52.52-1.38.52-1.91 0l-1.58-1.59a1.36 1.36 0 0 1 0-1.91l1.9-1.89z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.28 16.9-2.81 2.81-3.5-3.5 2.81-2.82a1.36 1.36 0 0 1 1.91 0l1.58 1.59c.53.53.53 1.4.01 1.92"
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
              d="M9.06 2.17v6.45H2.6v-.68c0-3.61 2.15-5.76 5.76-5.76z"
              fill="currentColor"
            />
            <path
              d="M22.44 7.93c0 .38-.31.68-.68.68h-5.75V2.16h.67a5.8 5.8 0 0 1 5.76 5.77"
              fill="currentColor"
            />
            <path
              d="M9.06 15.55v5.76c0 .38-.31.68-.68.68h-.01a5.76 5.76 0 0 1-5.76-5.76v-.68z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.07 8.61H2.61v6.94h6.46z"
              fill="currentColor"
            />
            <path
              d="M16 8.61v6.26c0 .38-.31.68-.68.68H9.06V8.61z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 2.17H9.06v6.45H16z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.47 20.7-1.9 1.91c-.52.52-1.38.52-1.92 0l-1.58-1.59a1.4 1.4 0 0 1 0-1.92l1.91-1.89z"
              fill="currentColor"
            />
            <path
              d="m23.28 17.9-2.81 2.8-3.49-3.49 2.8-2.82a1.4 1.4 0 0 1 1.92 0l1.58 1.59c.52.53.52 1.4 0 1.92"
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
              d="m19.47 20.7-1.9 1.91c-.52.52-1.38.52-1.92 0l-1.58-1.59a1.4 1.4 0 0 1 0-1.92l1.91-1.89z"
              fill="currentColor"
            />
            <path
              d="m23.28 16.9-2.81 2.8-3.49-3.49 2.8-2.82a1.4 1.4 0 0 1 1.92 0l1.58 1.59c.52.53.52 1.4 0 1.92"
              fill="currentColor"
            />
            <path
              d="M7.42 2.07c.55-.08 1 .38 1 .94V6.8a1 1 0 0 1-1 1H3.67c-.55 0-1-.45-.94-1a5.1 5.1 0 0 1 4.69-4.73"
              fill="currentColor"
            />
            <path
              d="M21.6 7.8h-3.68a1 1 0 0 1-1-1V3c0-.55.45-1 1-.93 2.64.34 4.31 2 4.68 4.61a1 1 0 0 1-1 1.12"
              fill="currentColor"
            />
            <path
              d="M7.42 16.3a1 1 0 0 1 1 1v3.62a1 1 0 0 1-1.13 1 5.06 5.06 0 0 1-4.55-4.61c-.07-.55.39-1.01.94-1.01z"
              fill="currentColor"
            />
            <path
              d="M8.42 10.3a1 1 0 0 0-1-1H3.67a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.75a1 1 0 0 0 1-1z"
              fill="currentColor"
            />
            <path
              d="M15.42 10.3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1z"
              fill="currentColor"
            />
            <path
              d="M15.42 3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v3.8a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGridEraser;
