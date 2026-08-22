import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInboxArchive = forwardRef<SVGSVGElement, IconProps>(
  function IconInboxArchive(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 14.25a.75.75 0 0 0 0 1.5zm16 1.5a.75.75 0 1 0 0-1.5zm-5.4.65-.53-.53zm.23-.23-.53-.53zm-5.68.08-.55.5zm.04.04.55-.5zm1.1 1-.35.67zm.18.08.26-.7zm3.06-.06-.32-.68zm-.18.07.25.7zm2.71-2.23-.28-.69zm-8.18 0 .28-.7zm.1.04-.32.68zM4.24 15a.75.75 0 1 0 1.5 0zm14 0a.75.75 0 1 0 1.5 0zM4 15.75h2.3v-1.5H4zm13.66 0H20v-1.5h-2.34zm-2.53 1.18.23-.23-1.06-1.06-.23.23zm-6.53-.17.03.04 1.1-1.02-.03-.04zm.03.04c.48.51.84.92 1.31 1.16l.68-1.34a4 4 0 0 1-.88-.84zm3.32-.05c-.82 0-1.03-.01-1.22-.08l-.53 1.4c.5.2 1.05.18 1.75.18zm-2 1.2q.13.08.25.12l.53-1.4-.11-.05zm4.12-2.08c-.54.54-.7.68-.86.76l.64 1.36c.46-.22.81-.59 1.28-1.06zm-2.12 2.38c.66 0 1.17.01 1.65-.16l-.5-1.41c-.18.06-.39.07-1.15.07zm1.26-1.62-.12.05.5 1.4q.14-.03.26-.1zm4.45-2.38c-.76 0-1.35-.01-1.88.21l.57 1.39c.2-.09.43-.1 1.3-.1zm-2.3 2.45c.62-.62.8-.77.99-.85l-.57-1.39c-.54.22-.95.65-1.48 1.18zm-9.06-.95c.87 0 1.1.01 1.3.1l.56-1.4c-.53-.21-1.11-.2-1.86-.2zm3.4 0c-.5-.56-.89-1-1.4-1.24l-.64 1.36c.19.09.35.25.94.89zm-2.1.1.06.02.63-1.36-.13-.06zm-1.1-3.1h11v-1.5h-11zm11 0c.41 0 .75.34.75.75h1.5c0-1.24-1-2.25-2.25-2.25zm-11.75.75c0-.41.34-.75.75-.75v-1.5c-1.24 0-2.25 1-2.25 2.25zm.75-3.75h11v-1.5h-11zm11 0c.41 0 .75.34.75.75h1.5c0-1.24-1-2.25-2.25-2.25zm-11.75.75c0-.41.34-.75.75-.75v-1.5c-1.24 0-2.25 1-2.25 2.25zm0 0v-3h-1.5v3zm.75-3.75h11v-1.5h-11zm11.75.75v3h1.5v-3zm-.75-.75c.41 0 .75.34.75.75h1.5c0-1.24-1-2.25-2.25-2.25zM5.75 7.5c0-.41.34-.75.75-.75v-1.5c-1.24 0-2.25 1-2.25 2.25zm0 7.5v-1.5h-1.5V15zm12.5-1.5V15h1.5v-1.5zm-12.5 0v-3h-1.5v3zm12.5-3v3h1.5v-3z"
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
              opacity={duotone ? "0.4" : "1"}
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              d="M5 8.5v-1C5 6.67 5.67 6 6.5 6h11c.83 0 1.5.67 1.5 1.5v1q-.65-.48-1.5-.5h-11q-.86.02-1.5.5"
              fill="currentColor"
            />
            <path
              d="M5 11.5v-1C5 9.67 5.67 9 6.5 9h11c.83 0 1.5.67 1.5 1.5v1q-.65-.48-1.5-.5h-11q-.86.02-1.5.5"
              fill="currentColor"
            />
            <path
              d="M20.75 15a.75.75 0 0 0-.75-.75h-1.02v-1A1.5 1.5 0 0 0 17.5 12h-11a1.5 1.5 0 0 0-1.48 1.25v1H4a.75.75 0 0 0 0 1.5h2.3c.87 0 1.1.01 1.3.1l.06.02c.19.09.35.25.94.89l.03.04.08.08c.44.48.78.85 1.23 1.08l.26.11c.48.18.99.18 1.63.18h.22c.61 0 1.1 0 1.55-.16l.25-.1c.43-.2.77-.55 1.2-.98l.08-.08.23-.23c.62-.62.8-.77.99-.85.2-.09.43-.1 1.3-.1H20c.41 0 .75-.34.75-.75"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m3-3.5v-1C5 6.67 5.67 6 6.5 6h11c.83 0 1.5.67 1.5 1.5v1q-.65-.48-1.5-.5h-11q-.86.02-1.5.5m0 2v1q.64-.48 1.5-.5h11q.85.02 1.5.5v-1c0-.83-.67-1.5-1.5-1.5h-11C5.67 9 5 9.67 5 10.5m15 3.75a.75.75 0 0 1 0 1.5h-2.34c-.88 0-1.11.01-1.31.1-.2.08-.37.23-1 .85l-.3.3c-.43.44-.77.78-1.2.99l-.25.1c-.45.16-.94.16-1.55.16h-.22c-.64 0-1.15 0-1.63-.18l-.26-.11c-.45-.23-.8-.6-1.23-1.08l-.11-.12c-.59-.64-.75-.8-.94-.89l-.07-.03c-.2-.08-.42-.09-1.29-.09H4a.75.75 0 0 1 0-1.5h1.02v-1A1.5 1.5 0 0 1 6.5 12h11c.74 0 1.36.54 1.48 1.25v1z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconInboxArchive;
