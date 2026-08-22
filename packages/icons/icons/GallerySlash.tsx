import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGallerySlash = forwardRef<SVGSVGElement, IconProps>(
  function IconGallerySlash(
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
              d="M4.04 20.1c-.94-1.13-1.37-2.79-1.37-5.1V9c0-5 2-7 7-7h6c2.19 0 3.8.38 4.92 1.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.67 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 2-20 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M22.64 7.99q.03.48.03 1.01v6c0 5-2 7-7 7h-6q-1.11 0-2.04-.14"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1 16.45c.3.3.79.3 1.09 0l5.03-5.04a2 2 0 0 1 2.82 0l1.63 1.64"
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
              opacity={duotone ? "0.4" : "1"}
              d="M21.13 3.54 4.21 20.46c-1-1-1.54-2.45-1.54-4.27V7.81C2.67 4.17 4.84 2 8.48 2h8.38c1.82 0 3.27.54 4.27 1.54"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 7.81v6.09l-1.63-1.4a2.2 2.2 0 0 0-2.82 0l-4.16 3.57c-.71.61-1.83.67-2.61.15L22.28 5.39q.21.57.3 1.21.09.57.09 1.21"
              fill="currentColor"
            />
            <path
              d="M22.67 13.9v2.29c0 3.64-2.17 5.81-5.81 5.81H8.48a8 8 0 0 1-2.42-.39l5.39-5.39c.78.52 1.9.46 2.61-.15l4.16-3.57a2.2 2.2 0 0 1 2.82 0z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
            <path
              d="M8.67 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
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
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
            <path
              d="M9.67 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
              fill="currentColor"
            />
            <path
              d="m22.28 5.39-1.22 1.22q.12.56.11 1.2v4.8l-.13-.11a2.2 2.2 0 0 0-2.82 0l-4.16 3.57c-.71.61-1.83.67-2.61.15L6.07 21.6l.12.04a7 7 0 0 0 2.29.36h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81q0-1.35-.39-2.42"
              fill="currentColor"
            />
            <path
              d="m22.28 5.39-1.22 1.22q.11.56.11 1.2v4.8l-.13-.11a2.2 2.2 0 0 0-2.82 0l-4.16 3.57c-.71.61-1.83.67-2.61.15l-5.39 5.39q1.07.39 2.42.39h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81q0-1.35-.39-2.42"
              fill="currentColor"
            />
            <path
              d="M21.13 3.54 20.07 4.6q-1.09-1.1-3.21-1.1H8.48c-2.82 0-4.31 1.49-4.31 4.31v8.38q.01 1.14.35 1.97l3.74-2.51a2 2 0 0 1 1.12-.36l-5.17 5.17q-.6-.6-.98-1.43a7 7 0 0 1-.56-2.84V7.81C2.67 4.17 4.84 2 8.48 2h8.38c1.82 0 3.27.54 4.27 1.54"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGallerySlash;
