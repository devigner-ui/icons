import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFormatSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconFormatSquare(
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
              d="M20.67 6.95v10.1A2.5 2.5 0 0 0 17.72 20H7.62q.05-.24.05-.5a2.5 2.5 0 0 0-3-2.45V6.95q.24.05.5.05a2.5 2.5 0 0 0 2.45-3h10.1q-.05.24-.05.5a2.5 2.5 0 0 0 3 2.45"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.67 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.67 19.5q0 .26-.05.5a2.5 2.5 0 1 1 .05-.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.98 20.15a4 4 0 0 1-.06-.65l.01-.25H8.41l.01.25a3 3 0 0 1-.25 1.25h9a3 3 0 0 1-.19-.6M4.53 7.69a3 3 0 0 1-.61-.19v9q.28-.13.6-.19a4 4 0 0 1 .9-.05V7.74l-.25.01q-.33 0-.64-.06m16.29 0q-.32.06-.65.06l-.25-.01v8.52l.25-.01a3 3 0 0 1 1.25.25v-9q-.29.13-.6.19m-3.65-4.44h-9q.13.29.19.6.06.33.06.65l-.01.25h8.52l-.01-.25a3 3 0 0 1 .25-1.25"
              fill="currentColor"
            />
            <path
              d="m8.42 4.5-.01.25a3 3 0 0 1-.43 1.37 3 3 0 0 1-1.54 1.37l-.28.1q-.36.12-.74.15l-.25.01a3 3 0 0 1-1.25-.25 3.26 3.26 0 1 1 4.5-3"
              fill="currentColor"
            />
            <path
              d="M23.42 4.5a3.26 3.26 0 0 1-3.25 3.25l-.25-.01a3 3 0 0 1-1.02-.25l-.17-.08-.18-.1a3 3 0 0 1-1.19-1.19l-.1-.18-.08-.17-.09-.25q-.13-.37-.16-.77l-.01-.25a3 3 0 0 1 .25-1.25 3.26 3.26 0 0 1 6.25 1.25"
              fill="currentColor"
            />
            <path
              d="M8.42 19.5a3 3 0 0 1-.25 1.25 3.26 3.26 0 1 1-2.75-4.49 3 3 0 0 1 1.19.33l.18.1a3 3 0 0 1 1.29 1.37l.1.22q.06.13.09.25.1.34.14.72z"
              fill="currentColor"
            />
            <path
              d="M23.42 19.5a3.26 3.26 0 0 1-6.5 0l.01-.25.01-.09.05-.32q.08-.4.27-.78l.1-.18q.43-.76 1.19-1.19l.18-.1q.38-.2.78-.27l.32-.05.09-.01.25-.01a3 3 0 0 1 1.25.25c1.19.5 2 1.68 2 3"
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
              d="M21.42 16.5v-9a3.26 3.26 0 0 0-1.25-6.25c-1.32 0-2.5.81-3 2h-9A3.26 3.26 0 0 0 1.92 4.5c0 1.32.81 2.5 2 3v9a3.26 3.26 0 0 0 1.25 6.25c1.32 0 2.5-.81 3-2h9a3.26 3.26 0 0 0 6.25-1.25c0-1.32-.81-2.5-2-3m-1.59-.23-.32.05q-.4.08-.78.27l-.18.1q-.76.43-1.19 1.19l-.1.18q-.2.38-.27.78l-.05.32-.01.09H8.41a3 3 0 0 0-.33-1.19l-.1-.18a3 3 0 0 0-1.19-1.19l-.18-.1-.47-.19a3 3 0 0 0-.72-.14V7.74a3 3 0 0 0 1.37-.43q.76-.43 1.19-1.19l.1-.18.18-.45q.12-.36.15-.74h8.52a3 3 0 0 0 .25 1.02l.08.17.1.18a3 3 0 0 0 1.37 1.29l.17.08q.12.06.25.09.37.13.77.16v8.52z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFormatSquare;
