import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTreadmill = forwardRef<SVGSVGElement, IconProps>(
  function IconTreadmill(
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
              cx="15"
              cy="4.00049"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11 16v-1.63c0-.55-.24-1.07-.67-1.42l-1-.83a1.6 1.6 0 0 1-.1-2.35L10.9 8.1c.53-.53.36-1.43-.34-1.73a4.3 4.3 0 0 0-3.94.3L4.5 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7 14-.33.33c-.58.58-.87.87-1.23 1.02-.37.15-.78.15-1.6.15H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.5 10h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M19.49 22H3.09a1.09 1.09 0 0 1-.2-2.16l16.17-2.82a2.51 2.51 0 1 1 .43 4.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19.3 8.89-.75-.11zm1.58-1.66.14.73zm1.27.5a.75.75 0 1 0-.3-1.46zm-3.4 9.88 1.28-8.6-1.48-.23-1.3 8.6zm2.27-9.65 1.13-.22-.3-1.47-1.12.22zM20.03 9a7 7 0 0 1 .17-.83l-1.08-1.03q-.32.36-.41.77-.1.38-.16.87zm.7-2.51q-.48.08-.86.2c-.26.08-.53.2-.75.45l1.08 1.03h.02q.01-.02.1-.05c.15-.05.35-.09.7-.16z"
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
            <path d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.21 6.05c1.4-.87 3.13-1 4.64-.36 1.18.5 1.47 2.05.57 2.96L9.76 10.3a.84.84 0 0 0 .06 1.24l1 .83c.59.5.93 1.23.93 2V16a.75.75 0 0 1-1.5 0v-1.63c0-.33-.14-.64-.4-.85l-1-.83a2.34 2.34 0 0 1-.15-3.45l1.66-1.66a.32.32 0 0 0-.1-.51A3.5 3.5 0 0 0 7 7.32L4.9 8.64a.75.75 0 0 1-.8-1.28z"
              fill="currentColor"
            />
            <path
              d="M3.09 22h16.4a2.51 2.51 0 1 0-.43-4.98l-.17.02L20.03 9a7 7 0 0 1 .17-.82v-.01h.02q.01-.02.1-.05c.15-.05.35-.09.7-.16l1.13-.22a.75.75 0 1 0-.3-1.47l-1.15.23q-.47.08-.83.19c-.26.08-.53.2-.75.45q-.32.36-.41.77-.09.37-.15.83l-.01.04-1.21 8.54L2.9 19.84A1.09 1.09 0 0 0 3.09 22"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.75 10c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
                fill="currentColor"
              />
              <path
                d="M7.53 13.47c.3.3.3.77 0 1.06l-.33.33-.08.08c-.5.5-.89.9-1.4 1.1s-1.06.21-1.76.21H3a.75.75 0 0 1 0-1.5h.84c.88 0 1.11-.01 1.31-.1.2-.08.37-.23 1-.85l.32-.33c.3-.3.77-.3 1.06 0"
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
            <path d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.21 6.05c1.4-.87 3.13-1 4.64-.36 1.18.5 1.47 2.05.57 2.96L9.76 10.3a.84.84 0 0 0 .06 1.24l1 .83c.59.5.93 1.23.93 2V16a.75.75 0 0 1-1.5 0v-1.63c0-.33-.14-.64-.4-.85l-1-.83a2.34 2.34 0 0 1-.15-3.45l1.66-1.66a.32.32 0 0 0-.1-.51A3.5 3.5 0 0 0 7 7.32L4.9 8.64a.75.75 0 0 1-.8-1.28zM11.75 10c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-4.22 3.47c.3.3.3.77 0 1.06l-.33.33-.08.08c-.5.5-.89.9-1.4 1.1s-1.06.21-1.76.21H3a.75.75 0 0 1 0-1.5h.84c.88 0 1.11-.01 1.31-.1.2-.08.37-.23 1-.85l.32-.33c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M3.09 22h16.4a2.51 2.51 0 1 0-.43-4.98l-.17.02L20.03 9a7 7 0 0 1 .17-.82v-.01h.02q.01-.02.1-.05c.15-.05.35-.09.7-.16l1.13-.22a.75.75 0 1 0-.3-1.47l-1.15.23q-.47.08-.83.19c-.26.08-.53.2-.75.45q-.32.36-.41.77-.09.37-.15.83l-.01.04-1.21 8.54L2.9 19.84A1.09 1.09 0 0 0 3.09 22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTreadmill;
