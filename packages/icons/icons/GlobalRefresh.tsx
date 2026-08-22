import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGlobalRefresh = forwardRef<SVGSVGElement, IconProps>(
  function IconGlobalRefresh(
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
              d="M22.67 12a10 10 0 1 0-10 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.67 3h1a28.4 28.4 0 0 0 0 18h-1"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.67 3a29 29 0 0 1 1.46 9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.67 16v-1c2.92.97 5.96 1.46 9 1.46"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.67 9a28.4 28.4 0 0 1 18 0"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M20.17 14.7a4 4 0 0 0-1.25-.18 3.74 3.74 0 1 0 3.11 1.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.71 14.8-1.25-1.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.71 14.8-1.46 1.06"
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
              d="M23.32 18.13a.75.75 0 0 0-.9-.55c-.4.1-.65.5-.56.9q.06.25.06.52a2.25 2.25 0 0 1-4.5 0c0-1.1.79-2.01 1.84-2.21-.1.23-.09.51.07.73q.24.3.61.31a1 1 0 0 0 .44-.14l1.17-.85.02-.02.03-.02.07-.1q.05-.05.09-.12l.05-.13.04-.14q.01-.07-.01-.14 0-.08-.02-.15t-.06-.13l-.05-.11-.03-.02-.02-.03-1-1.15a.75.75 0 0 0-1.06-.07c-.22.2-.3.49-.22.76a3.74 3.74 0 0 0 .29 7.47 3.75 3.75 0 0 0 3.65-4.61"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m2.7 14.63-.02.1a9.5 9.5 0 0 0 4.26 4.26l.1-.02a29 29 0 0 1-.79-3.54 30 30 0 0 1-3.55-.8"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.74 6.43a9.5 9.5 0 0 0-4.49-4.49q.55 1.8.86 3.63 1.84.3 3.63.86"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.6 6.43q1.8-.55 3.64-.86.29-1.79.79-3.53l-.1-.02A9.5 9.5 0 0 0 2.6 6.43"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.49 5.36q-.34-1.96-.97-3.86l-.03-.21a9.4 9.4 0 0 0-4.65 0l-.02.21a29 29 0 0 0-.97 3.86 31 31 0 0 1 6.64 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.03 7.18q-1.97.34-3.86.97l-.21.03q-.28 1.11-.3 2.32 0 1.21.3 2.33l.21.02q1.9.62 3.86.97a31 31 0 0 1 0-6.64"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.37 8.18-.21-.03a29 29 0 0 0-3.86-.97 29 29 0 0 1 0 6.63q1.96-.34 3.86-.97.1-.02.21-.02.29-1.12.3-2.33 0-1.19-.3-2.31"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.85 15.64q.34 1.97.97 3.86.02.1.02.21 1.12.29 2.33.3 1.2 0 2.32-.3l.03-.21q.62-1.9.97-3.86-1.65.2-3.32.21a33 33 0 0 1-3.32-.21"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.62 6.95a28 28 0 0 0 0 7.11q3.55.45 7.11 0 .45-3.55 0-7.11a28 28 0 0 0-7.11 0"
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
            <g clipPath="url(#clip0_12_64896)">
              <path
                d="M23.32 18.13a.75.75 0 0 0-.9-.55c-.4.1-.65.5-.56.9q.06.25.06.52a2.25 2.25 0 0 1-4.5 0c0-1.1.79-2.01 1.84-2.21-.1.23-.09.51.07.73q.24.3.61.31a1 1 0 0 0 .44-.14l1.17-.85.02-.02.03-.02.07-.1q.05-.05.09-.12l.05-.13.04-.14q.01-.07-.01-.14 0-.08-.02-.15t-.06-.13l-.05-.11-.03-.02-.01-.02-1-1.15a.75.75 0 0 0-1.06-.07c-.22.2-.3.49-.22.76a3.74 3.74 0 0 0 .29 7.47 3.75 3.75 0 0 0 3.64-4.62"
                fill="currentColor"
              />
              <path
                d="m2.7 14.63-.02.1a9.5 9.5 0 0 0 4.26 4.26l.1-.02a29 29 0 0 1-.79-3.54 30 30 0 0 1-3.55-.8"
                fill="currentColor"
              />
              <path
                d="M19.74 6.43a9.5 9.5 0 0 0-4.49-4.49q.55 1.8.86 3.63 1.84.3 3.63.86"
                fill="currentColor"
              />
              <path
                d="M2.6 6.43q1.8-.55 3.64-.86.29-1.79.79-3.53l-.1-.02A9.5 9.5 0 0 0 2.6 6.43"
                fill="currentColor"
              />
              <path
                d="M14.49 5.36q-.34-1.96-.97-3.86l-.03-.21a9.4 9.4 0 0 0-4.65.01l-.02.21a29 29 0 0 0-.97 3.85 31 31 0 0 1 6.64 0"
                fill="currentColor"
              />
              <path
                d="M6.03 7.18q-1.96.35-3.86.97l-.2.03a9.3 9.3 0 0 0 0 4.65l.21.02q1.9.62 3.86.97a30 30 0 0 1-.01-6.64"
                fill="currentColor"
              />
              <path
                d="m20.37 8.18-.21-.03a29 29 0 0 0-3.86-.97 29 29 0 0 1 0 6.63q1.96-.34 3.86-.97.1-.02.21-.02.29-1.12.3-2.33 0-1.19-.3-2.31"
                fill="currentColor"
              />
              <path
                d="M7.85 15.64q.34 1.97.97 3.86.02.1.02.21 1.12.28 2.33.29 1.2 0 2.32-.3l.03-.21q.62-1.9.97-3.86-1.65.2-3.32.21-1.67-.01-3.32-.2"
                fill="currentColor"
              />
              <path
                d="M7.62 6.95a28 28 0 0 0 0 7.11q3.55.45 7.11 0 .45-3.55 0-7.11a28 28 0 0 0-7.11 0"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath>
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  transform="translate(0.669922)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </>
    );
  },
);

export default IconGlobalRefresh;
