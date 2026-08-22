import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHikingMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconHikingMinimalistic(
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
              cx="11.5"
              cy="5.50049"
              r="2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 16.5s-.43 1.62-1 2.5c-.6.93-2 2-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m10.21 11.9.75.08zm-.07.69-.75-.08zm8.44-2.74-.48-.57zm.9.23a.75.75 0 0 0-.96-1.16zm-8.28 4.67-.4.64zm.34.21.4-.63zm2.72 4.43.74-.06zm-.6 1.68a.75.75 0 0 0 1.49-.14zM13 10.5l-.39.64.05.03zm-3.54 1.33-.07.68 1.5.15.07-.68zm9.6-1.4.42-.35-.96-1.16-.42.36zm-8.25 4.96.33.2.8-1.26-.34-.21zm2.7 4.07.14 1.6 1.5-.13-.15-1.6zm-.85-8.29a5.9 5.9 0 0 0 6.4-.74l-.96-1.15a4.4 4.4 0 0 1-4.76.55zm-1.52 4.43a5.1 5.1 0 0 1 2.37 3.86l1.5-.13a6.6 6.6 0 0 0-3.08-5zm-1.75-3.1a3 3 0 0 0 1.42 2.88l.8-1.27c-.5-.31-.78-.88-.72-1.46zm1.57-.53a1.1 1.1 0 0 1 1.65-.84l.78-1.28a2.6 2.6 0 0 0-3.93 1.97z"
              fill="currentColor"
            />
            <path
              d="M19 21V7"
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
              d="M14 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 6.25c.41 0 .75.34.75.75v14a.75.75 0 0 1-1.5 0V11a5.9 5.9 0 0 1-5.64.14 1.1 1.1 0 0 0-1.65.84l-.07.68c-.06.58.22 1.15.71 1.46l.33.2a6.6 6.6 0 0 1 3.07 5l.15 1.61a.75.75 0 0 1-1.5.14l-.14-1.61a5.1 5.1 0 0 0-2.37-3.86l-.33-.21a3 3 0 0 1-1.42-2.88l.07-.68a2.6 2.6 0 0 1 3.9-1.99c1.55.77 3.4.55 4.74-.56l.15-.13V7c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.2 15.78c.4.1.63.51.53.91l-.01.02-.02.06-.28.9a8 8 0 0 1-.8 1.74c-.35.55-.91 1.1-1.34 1.5l-.75.63-.05.04-.02.01a.75.75 0 0 1-.92-1.18l.01-.01.05-.04a12 12 0 0 0 1.77-1.77c.24-.36.46-.91.64-1.41l.25-.8.01-.06v-.01c.11-.4.52-.64.92-.53"
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
              d="M14 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 6.25c.41 0 .75.34.75.75v14a.75.75 0 1 1-1.5 0V11a5.9 5.9 0 0 1-5.64.14 1.1 1.1 0 0 0-1.65.84l-.07.68c-.06.58.22 1.15.71 1.46l.33.2a6.6 6.6 0 0 1 3.07 5l.15 1.61a.75.75 0 1 1-1.5.14l-.14-1.61a5.1 5.1 0 0 0-2.37-3.86l-.33-.21A3 3 0 0 1 9.4 12.5l.06-.68a2.6 2.6 0 0 1 3.9-1.99c1.55.77 3.4.55 4.74-.56l.15-.13V7c0-.41.34-.75.75-.75m-9.8 9.53c.4.1.63.51.53.91L9 16.5l.73.2-.01.01-.02.06-.28.9a8 8 0 0 1-.8 1.74c-.35.55-.91 1.1-1.34 1.5l-.75.63-.05.04-.02.01L6 21l.46.6a.75.75 0 0 1-.92-1.2h.01l.05-.04a12 12 0 0 0 1.77-1.77c.24-.36.46-.91.64-1.42l.25-.8.01-.05v-.01c.11-.4.52-.64.92-.53"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHikingMinimalistic;
