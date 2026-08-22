import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWallpaper = forwardRef<SVGSVGElement, IconProps>(
  function IconWallpaper(
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
              d="M5 8c0-2.83 0-4.24.88-5.12S8.18 2 11 2h2c2.83 0 4.24 0 5.12.88S19 5.18 19 8v8c0 2.83 0 4.24-.88 5.12S15.82 22 13 22h-2c-2.83 0-4.24 0-5.12-.88S5 18.82 5 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 19.5c.46 0 .7 0 .9-.03a2.5 2.5 0 0 0 2.07-2.08c.03-.2.03-.43.03-.89v-9c0-.46 0-.7-.03-.9a2.5 2.5 0 0 0-2.08-2.07c-.2-.03-.43-.03-.89-.03"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 19.5c-.46 0-.7 0-.9-.03a2.5 2.5 0 0 1-2.07-2.08C2 17.2 2 16.96 2 16.5v-9c0-.46 0-.7.03-.9a2.5 2.5 0 0 1 2.08-2.07c.2-.03.43-.03.89-.03"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="14.5"
              cy="6.5"
              r="1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 14.82 1.3-1.33a1.52 1.52 0 0 1 2.3.1l3.17 3.7c.5.6 1.3.67 1.89.19l.21-.18c.85-.7 1.99-.62 2.75.2l1.9 2"
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
              d="M15.72 7.35a1.86 1.86 0 1 1-3.72 0 1.86 1.86 0 0 1 3.72 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.09 2.1c-.81-.1-1.84-.1-3.1-.1h-1.97c-1.27 0-2.3 0-3.1.1-.84.12-1.55.36-2.1.92-.57.56-.8 1.27-.92 2.1-.1.81-.1 1.84-.1 3.1v7.55c0 1.27 0 2.3.1 3.1.11.84.35 1.55.91 2.1.56.57 1.27.8 2.1.92.81.11 1.84.11 3.1.11h1.97c1.27 0 2.3 0 3.1-.1a3.5 3.5 0 0 0 2.1-.92c.57-.56.8-1.27.92-2.1.1-.81.1-1.84.1-3.1V8.22c0-1.27 0-2.3-.1-3.1a3.5 3.5 0 0 0-.91-2.1 3.5 3.5 0 0 0-2.1-.92m.72 14.53.98 1.04q.02-.8.02-1.95V8.28a25 25 0 0 0-.1-2.97c-.08-.68-.25-1.04-.5-1.3-.27-.26-.63-.43-1.31-.52-.7-.1-1.63-.1-2.97-.1h-1.86c-1.34 0-2.27 0-2.97.1-.68.1-1.04.26-1.3.52s-.43.62-.52 1.3c-.1.7-.1 1.63-.1 2.97v4.62a2.1 2.1 0 0 1 3.2.12l2.93 3.45c.24.27.55.29.79.09l.2-.17a2.53 2.53 0 0 1 3.5.24"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M5.02 4.5H5c-.46 0-.7 0-.9.03a2.5 2.5 0 0 0-2.07 2.08C2 6.8 2 7.04 2 7.5v9c0 .46 0 .7.03.9a2.5 2.5 0 0 0 2.08 2.07c.2.03.43.03.89.03h.02q-.08-.3-.12-.62c-.1-.81-.1-1.84-.1-3.1V8.22c0-1.27 0-2.3.1-3.1q.04-.33.12-.63"
                fill="currentColor"
              />
              <path
                d="M18.98 19.5q.08-.3.12-.62c.11-.81.11-1.84.11-3.1V8.22c0-1.27 0-2.3-.1-3.1l-.13-.63H19c.46 0 .7 0 .9.03 1.06.17 1.9 1 2.07 2.08.03.2.03.43.03.89v9c0 .46 0 .7-.03.9a2.5 2.5 0 0 1-2.08 2.07c-.2.03-.43.03-.89.03z"
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
              d="M15.72 7.35a1.86 1.86 0 1 1-3.72 0 1.86 1.86 0 0 1 3.72 0"
              fill="currentColor"
            />
            <path
              d="M22 7.75q.01-.54-.04-.87a3 3 0 0 0-1.31-2.05c-.08-.05-.18.02-.17.1a21 21 0 0 1 .12 2.88v8.66q.02 1.47-.12 2.6c0 .08.09.15.17.1a3 3 0 0 0 1.31-2.05q.05-.33.04-.87z"
              fill="currentColor"
            />
            <path
              d="M3.4 7.81v-.46Q3.39 6 3.52 4.94c0-.1-.09-.16-.17-.11a3 3 0 0 0-1.31 2.05q-.05.33-.04.87v8.5q-.01.54.04.87c.13.86.62 1.6 1.31 2.05.08.05.18-.02.17-.1a20 20 0 0 1-.12-2.88z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.09 2.1c-.81-.1-1.84-.1-3.1-.1h-1.97c-1.27 0-2.3 0-3.1.1-.84.12-1.55.36-2.1.92-.57.56-.8 1.27-.92 2.1-.1.81-.1 1.84-.1 3.1v7.55c0 1.27 0 2.3.1 3.1.11.84.35 1.55.91 2.1.56.57 1.27.8 2.1.92.81.11 1.84.11 3.1.11h1.97c1.27 0 2.3 0 3.1-.1a3.5 3.5 0 0 0 2.1-.92c.57-.56.8-1.27.92-2.1.1-.81.1-1.84.1-3.1V8.22c0-1.27 0-2.3-.1-3.1a3.5 3.5 0 0 0-.91-2.1 3.5 3.5 0 0 0-2.1-.92m.72 14.53.98 1.04q.02-.8.02-1.95V8.28c0-1.34 0-2.27-.1-2.97-.08-.68-.25-1.04-.5-1.3-.27-.26-.63-.43-1.31-.52-.7-.1-1.63-.1-2.97-.1h-1.86c-1.34 0-2.27 0-2.97.1-.68.1-1.04.26-1.3.52s-.43.62-.52 1.3c-.1.7-.1 1.63-.1 2.97v4.62a2.1 2.1 0 0 1 3.2.12l2.93 3.45c.24.27.55.29.79.09l.2-.17a2.53 2.53 0 0 1 3.5.24"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWallpaper;
