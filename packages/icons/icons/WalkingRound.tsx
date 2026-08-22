import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalkingRound = forwardRef<SVGSVGElement, IconProps>(
  function IconWalkingRound(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12.5"
              cy="4.50049"
              r="2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7 22 .5-.4a7 7 0 0 0 2.5-4.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m11.16 13.42.74.07zm.81 2.84.6-.46zm3.84 6.2a.75.75 0 1 0 1.18-.92zm-4.84-12.44-.04-.75zm2.12.11-.11.74zm4.1 3.17-.12-.74zm1.93.44a.75.75 0 1 0-.24-1.48zm-3.5-1.4.7-.23zM6.25 14.5a.75.75 0 0 0 1.5 0zm4.5-4.57-.34 3.41 1.5.15.34-3.41zm.63 6.79 4.43 5.74 1.18-.92-4.42-5.74zm.12-7.47-.57.02.08 1.5.49-.02zm0 1.5c.45 0 .98.05 1.48.12l.21-1.48c-.54-.08-1.14-.14-1.69-.14zm5.82 3.3 1.8-.31-.24-1.48-1.8.3zm-4.34-3.18c.88.13 1.62.8 1.92 1.72l1.43-.48a4 4 0 0 0-3.14-2.72zm-2.05-1.6c-2.77.15-4.68 2.59-4.68 5.23h1.5c0-1.98 1.42-3.63 3.26-3.73zm3.97 3.32a2.2 2.2 0 0 0 2.42 1.45l-.25-1.48a.7.7 0 0 1-.74-.45zm-4.49.75c-.07.73-.14 1.29.02 1.82l1.44-.4c-.06-.2-.05-.43.03-1.27zm2.16 2.46a4 4 0 0 1-.7-1.05l-1.44.41c.15.54.5.98.95 1.56z"
              fill="currentColor"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.93 9.27a11 11 0 0 1 2.26.12 4 4 0 0 1 3.14 2.72c.1.32.42.5.74.45l1.8-.3a.75.75 0 1 1 .25 1.48l-1.8.3a2.2 2.2 0 0 1-2.42-1.45 2.5 2.5 0 0 0-1.92-1.72l-.8-.09-.28 2.71c-.08.84-.09 1.06-.03 1.26s.18.38.7 1.05l4.42 5.74a.75.75 0 1 1-1.18.92l-4.43-5.74-.07-.1c-.41-.53-.74-.95-.88-1.46a5 5 0 0 1-.02-1.82l.26-2.54c-1.68.28-2.92 1.85-2.92 3.7a.75.75 0 0 1-1.5 0c0-2.64 1.91-5.08 4.68-5.23"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M15 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M10.15 16.77c.4.08.67.47.59.88a7.8 7.8 0 0 1-2.76 4.53l-.51.4a.75.75 0 0 1-.94-1.16l.51-.41a6.3 6.3 0 0 0 2.22-3.66c.09-.4.48-.67.89-.58"
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
              d="M15 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.93 9.27a11 11 0 0 1 2.26.12 4 4 0 0 1 3.14 2.72c.1.32.42.5.74.45l1.8-.3a.75.75 0 1 1 .25 1.48l-1.8.3a2.2 2.2 0 0 1-2.42-1.45 2.5 2.5 0 0 0-1.92-1.72l-.8-.09-.28 2.71c-.08.84-.09 1.06-.03 1.26s.18.38.7 1.05l4.42 5.74a.75.75 0 1 1-1.18.92l-4.43-5.74-.07-.1c-.41-.53-.74-.95-.88-1.46-.15-.5-.1-1.03-.03-1.7l.01-.12.26-2.54c-1.68.28-2.92 1.85-2.92 3.7a.75.75 0 0 1-1.5 0c0-2.64 1.91-5.08 4.68-5.23m-.78 7.5c.4.08.67.47.59.88a7.8 7.8 0 0 1-2.76 4.53l-.51.4a.75.75 0 1 1-.94-1.17l.51-.4a6.3 6.3 0 0 0 2.22-3.66c.09-.4.48-.67.89-.58"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWalkingRound;
