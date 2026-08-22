import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGalleryAdd2 = forwardRef<SVGSVGElement, IconProps>(
  function IconGalleryAdd2(
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
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.67 2h-4c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M16.42 5h5.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d="M19.17 7.75v-5.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m3.34 18.95 4.93-3.31a2.25 2.25 0 0 1 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0l1.63 1.4"
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
              d="M22.67 13.9v2.29c0 3.64-2.17 5.81-5.81 5.81H8.48c-2.55 0-4.4-1.07-5.25-2.97l.1-.08 4.93-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.64 8H18.7c-1.27 0-2.03-.76-2.03-2.03V3.03q0-.6.22-1.03H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38q0 1.64.56 2.84l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0l1.63 1.4V7.78q-.43.21-1.03.22"
              fill="currentColor"
            />
            <path
              d="M9.67 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
              fill="currentColor"
            />
            <path
              d="M21.64 1H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.03c0-1.27-.76-2.03-2.03-2.03m.94 3.93q-.16.16-.41.18h-1.41l.01 1.39a.6.6 0 0 1-.19.43q-.16.16-.41.17a.6.6 0 0 1-.6-.6V5.1l-1.4.01a.6.6 0 0 1-.6-.61c0-.33.27-.6.6-.6l1.4.01v-1.4c0-.33.27-.61.6-.61s.6.28.6.61l-.01 1.39h1.41c.33 0 .6.27.6.6a.7.7 0 0 1-.19.43"
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
              d="M21.64 1H18.7c-.87 0-1.51.36-1.8 1q-.23.43-.23 1.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94q.6 0 1.03-.23c.64-.29 1-.93 1-1.8V3.03c0-1.27-.76-2.03-2.03-2.03m.94 3.93q-.16.16-.41.18h-1.41v.51l.01.88a.6.6 0 0 1-.19.43q-.16.16-.41.17a.6.6 0 0 1-.6-.6V5.1l-1.4.01a.6.6 0 0 1-.6-.61c0-.33.27-.6.6-.6l.88.01h.52v-1.4c0-.33.27-.61.6-.61s.6.28.6.61l-.01.71v.68h1.41c.33 0 .6.27.6.6a.7.7 0 0 1-.19.43"
              fill="currentColor"
            />
            <path
              d="M9.67 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
              fill="currentColor"
            />
            <path
              d="M21.64 8h-.47v4.61l-.13-.11a2.2 2.2 0 0 0-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28a2.2 2.2 0 0 0-2.64-.14l-3.74 2.51a5 5 0 0 1-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31h8.19v-.47q0-.6.23-1.03H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38q0 1.64.56 2.84c.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.77q-.43.23-1.03.23"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGalleryAdd2;
