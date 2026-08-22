import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStructure = forwardRef<SVGSVGElement, IconProps>(
  function IconStructure(
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
              d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 19h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 5h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 16V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 16V8"
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
            <path d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path d="M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path d="M22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m16.1 4.26-.1-.01H7.9a3 3 0 0 1 0 1.5h8.2a3 3 0 0 1 0-1.5"
                fill="currentColor"
              />
              <path
                d="M19 8a3 3 0 0 0 .74-.1l.01.1v8.1a3 3 0 0 0-1.5 0V7.9A3 3 0 0 0 19 8"
                fill="currentColor"
              />
              <path
                d="m16.1 18.26-.1-.01H7.9a3 3 0 0 1 0 1.5h8.2a3 3 0 0 1 0-1.5"
                fill="currentColor"
              />
              <path
                d="M5 8a3 3 0 0 1-.74-.1l-.01.1v8.1a3 3 0 0 1 1.5 0V7.9A3 3 0 0 1 5 8"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.9 4.26A3 3 0 1 0 4.27 7.9l-.02.1v8.1a3 3 0 1 0 3.66 3.64l.09.01h8.1a3 3 0 1 0 3.64-3.66l.01-.09V7.9a3 3 0 1 0-3.66-3.64L16 4.25zM5.75 7.9l.01.09v8.1a3 3 0 0 1 2.16 2.16l.09-.01h8.1a3 3 0 0 1 2.16-2.16l-.01-.09V7.9a3 3 0 0 1-2.16-2.16l-.09.01H7.9A3 3 0 0 1 5.75 7.9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStructure;
