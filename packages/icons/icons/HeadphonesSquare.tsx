import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeadphonesSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconHeadphonesSquare(
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
              d="M21 18v-6c0-3.75 0-5.62-.95-6.94a5 5 0 0 0-1.11-1.1C17.62 3 15.75 3 12 3s-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11C3 6.38 3 8.25 3 12v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 15.5v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 15.5v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 13.84c0-.76 0-1.14-.17-1.4q-.14-.21-.35-.33c-.27-.16-.63-.12-1.36-.05-1.24.12-1.85.18-2.3.52q-.33.25-.54.63C3 13.7 3 14.34 3 15.63v1.56c0 1.28 0 1.92.28 2.4q.16.3.4.5c.4.38 1 .5 2.21.74.85.16 1.27.25 1.59.07q.17-.1.3-.26c.22-.28.22-.73.22-1.63z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16 13.84c0-.76 0-1.14.17-1.4q.14-.21.35-.33c.27-.16.63-.12 1.36-.05 1.24.12 1.85.18 2.3.52q.33.25.54.63c.28.49.28 1.13.28 2.42v1.56c0 1.28 0 1.92-.28 2.4q-.16.3-.4.5c-.4.38-1 .5-2.21.74-.85.16-1.27.25-1.59.07a1 1 0 0 1-.3-.26c-.22-.28-.22-.73-.22-1.63z"
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
              d="M11.95 2.25h.1c1.83 0 3.27 0 4.41.12 1.17.13 2.11.4 2.92.98q.74.53 1.27 1.27c.59.8.85 1.75.98 2.92.12 1.14.12 2.58.12 4.41v2.84a.75.75 0 0 1 1 .7v2.01a.75.75 0 0 1-1.3.5h-1.2v-6c0-1.9 0-3.25-.11-4.3a4.4 4.4 0 0 0-.7-2.2 4 4 0 0 0-.94-.94 4.4 4.4 0 0 0-2.2-.7 44 44 0 0 0-4.3-.11c-1.9 0-3.25 0-4.3.12a4.4 4.4 0 0 0-2.2.7q-.54.38-.94.93a4.4 4.4 0 0 0-.7 2.2 44 44 0 0 0-.11 4.3v6h-1.2a.75.75 0 0 1-1.3-.5v-2a.75.75 0 0 1 1-.7v-2.85c0-1.83 0-3.27.12-4.41.13-1.17.4-2.11.98-2.92q.53-.74 1.27-1.27a6 6 0 0 1 2.92-.98 45 45 0 0 1 4.41-.12"
              fill="currentColor"
            />
            <path
              d="M8 14.05c0-.85 0-1.27-.21-1.57q-.16-.23-.4-.36c-.33-.17-.77-.13-1.65-.05-1.48.13-2.22.2-2.75.57q-.4.29-.66.7C2 13.88 2 14.6 2 16.04v1.73c0 1.42 0 2.13.34 2.67q.19.31.47.55c.5.42 1.22.55 2.66.82 1.02.18 1.53.28 1.9.08q.21-.1.36-.29c.27-.32.27-.8.27-1.8z"
              fill="currentColor"
            />
            <path
              d="M16 14.05c0-.85 0-1.27.21-1.57q.16-.23.4-.36c.33-.17.77-.13 1.65-.05 1.48.13 2.22.2 2.75.57q.4.29.66.7c.33.54.33 1.26.33 2.7v1.73c0 1.42 0 2.13-.34 2.67q-.18.31-.47.55c-.5.42-1.22.55-2.66.82-1.02.18-1.53.28-1.9.08a1 1 0 0 1-.36-.29c-.27-.32-.27-.8-.27-1.8z"
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
              d="M12.05 2c2.15 0 3.83 0 5.15.18 1.34.18 2.4.56 3.23 1.4a5.4 5.4 0 0 1 1.4 3.28C22 8.2 22 9.9 22 12.07v5.3c0 .81 0 1.37-.14 1.87A3.5 3.5 0 0 1 20 21.42c-.46.22-1 .31-1.8.44l-.13.02q-.43.07-.73.1-.3.04-.64-.01a2.1 2.1 0 0 1-1.67-2q-.03-.3-.02-.73v-4.18c0-.42 0-.79.1-1.1a2.1 2.1 0 0 1 1.53-1.43q.46-.09 1.1-.01h.09l.1.02c.79.06 1.33.1 1.78.27q.48.18.88.49v-1.18c0-2.24 0-3.84-.16-5.07-.16-1.2-.46-1.93-1-2.47-.52-.53-1.24-.84-2.43-1s-2.79-.18-5-.18-3.8 0-5.01.17c-1.19.16-1.9.47-2.44 1-.53.54-.83 1.27-1 2.47a43 43 0 0 0-.15 5.07v1.18q.4-.3.88-.49c.45-.17.99-.21 1.77-.27l.11-.01.1-.01q.63-.08 1.1 0c.72.18 1.3.72 1.52 1.44.1.31.1.68.1 1.1v4.18q0 .44-.02.74 0 .32-.11.64a2.1 2.1 0 0 1-1.56 1.35q-.33.05-.64.01-.3-.03-.73-.1l-.13-.02a7 7 0 0 1-1.8-.44 3.5 3.5 0 0 1-1.85-2.18A7 7 0 0 1 2 17.37v-5.3c0-2.17 0-3.88.18-5.2a5.4 5.4 0 0 1 1.39-3.28A5.3 5.3 0 0 1 6.8 2.18C8.12 2 9.8 2 11.95 2z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeadphonesSquare;
