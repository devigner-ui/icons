import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookmarkOpened = forwardRef<SVGSVGElement, IconProps>(
  function IconBookmarkOpened(
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
              d="M2 12c0-4.7 0-7.07 1.46-8.53C4.93 2 7.3 2 12 2s7.07 0 8.54 1.47C22 4.93 22 7.29 22 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 6h-4c-2.8 0-4.2 0-5.27.55a5 5 0 0 0-2.19 2.18C2 9.8 2 11.2 2 14s0 4.2.54 5.27a5 5 0 0 0 2.19 2.19C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.18-2.19C22 18.2 22 16.8 22 14s0-4.2-.55-5.27a5 5 0 0 0-2.18-2.18C18.2 6 16.8 6 14 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 6v4.8c0 .98 0 1.47-.13 1.76a1.5 1.5 0 0 1-1.72.85c-.31-.07-.7-.37-1.47-.97-.44-.33-.66-.5-.88-.6a2 2 0 0 0-1.6 0c-.22.1-.44.27-.88.6-.77.6-1.16.9-1.47.97a1.5 1.5 0 0 1-1.72-.85C7 12.27 7 11.78 7 10.81V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12v-1.87c0-.28 0-.41-.06-.64a2 2 0 0 0-.15-.42 4.3 4.3 0 0 0-1.86-1.86 5 5 0 0 0-1.7-.4l-.48-.02-1.5-.04v4.06l-.01 1.09c-.02.26-.05.34-.05.36a.75.75 0 0 1-.87.42c-.01 0-.1-.03-.31-.18q-.3-.2-.87-.65l-.07-.05a5 5 0 0 0-.97-.65c-.7-.3-1.5-.3-2.2 0-.31.14-.6.36-.97.65l-.07.05-.87.65c-.22.15-.3.18-.31.18a.75.75 0 0 1-.87-.42c0-.02-.03-.1-.05-.36l-.01-1.1V6.76l-1.5.04q-.25 0-.47.03a4 4 0 0 0-1.7.4A4.3 4.3 0 0 0 2.2 9.08c-.06.12-.09.18-.14.4s-.05.36-.06.64V12c0 4.71 0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              d="M7.75 6.75v4.06l.01 1.09c.02.26.05.34.05.36.15.33.51.5.87.42.01 0 .1-.03.31-.18q.3-.2.87-.65l.07-.05c.37-.29.66-.51.97-.65.7-.3 1.5-.3 2.2 0 .31.14.6.36.97.65l.07.05.87.65c.22.15.3.18.31.18.36.09.72-.1.87-.42 0-.02.03-.1.05-.36l.01-1.1V6.76z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M20.54 3.46C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46c-.77.77-1.13 1.79-1.3 3.26L2.04 9.6l.02-.1c.05-.23.08-.29.14-.41l.01-.02a4.3 4.3 0 0 1 1.86-1.86c.41-.2.92-.33 1.7-.4l.48-.02 1.5-.04v3.75h8.5V6.75l1.5.04q.25 0 .47.03c.79.06 1.3.18 1.71.4.8.4 1.45 1.05 1.86 1.85v.02l.05.1V6.72c-.17-1.47-.54-2.49-1.3-3.26"
                fill="currentColor"
              />
              <path d="M2 10.5v-.06z" fill="currentColor" />
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
              d="m2 12 .01-2.4q.08-.3.2-.53a4.3 4.3 0 0 1 1.86-1.86c.41-.2.92-.33 1.7-.4l.48-.02v4.04q0 .7.02 1.15 0 .46.17.89a2.26 2.26 0 0 0 2.6 1.27q.42-.12.8-.4.37-.25.92-.69l.02-.01c.47-.36.6-.46.72-.51q.5-.21 1 0c.12.05.25.15.72.5l.02.02.92.7c.25.16.52.32.8.39a2.25 2.25 0 0 0 2.6-1.27q.17-.43.17-.89.02-.45.02-1.15V6.8q.25 0 .47.03c.79.06 1.3.18 1.71.4a4.3 4.3 0 0 1 2.06 2.37L22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m19.84-5.28c-.17-1.47-.54-2.49-1.3-3.26C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46c-.76.77-1.13 1.79-1.3 3.26q.56-.5 1.23-.84a6 6 0 0 1 2.26-.56c.87-.07 1.94-.07 3.32-.07h6.06c1.38 0 2.45 0 3.32.07.88.07 1.6.22 2.26.56q.67.35 1.23.84"
              fill="currentColor"
            />
            <path
              d="M7.75 10.8V6.76h8.5v4.06l-.01 1.09c-.02.26-.05.34-.05.36a.75.75 0 0 1-.87.42c-.01 0-.1-.03-.31-.18q-.3-.2-.87-.65l-.07-.05a5 5 0 0 0-.97-.65c-.7-.3-1.5-.3-2.2 0-.31.14-.6.36-.97.65l-.07.05-.87.65c-.22.15-.3.18-.31.18a.75.75 0 0 1-.87-.42c0-.02-.03-.1-.05-.36z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookmarkOpened;
