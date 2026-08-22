import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUploadTrack = forwardRef<SVGSVGElement, IconProps>(
  function IconUploadTrack(
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
              d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 15V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m14.06 11.03-1.32-.66q-.25-.12-.35-.2a1 1 0 0 1-.37-.6c-.02-.1-.02-.2-.02-.4 0-.48 0-.73.06-.9a1 1 0 0 1 1.06-.65c.17.03.39.13.82.35l1.32.66q.25.13.35.2a1 1 0 0 1 .37.6c.02.1.02.2.02.4 0 .48 0 .73-.06.9a1 1 0 0 1-1.06.65 3 3 0 0 1-.82-.35"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
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
              d="M12 22q2.01-.01 3.75-.73v-1.53a2.25 2.25 0 0 1-1.84-3.83l2.5-2.5c.88-.88 2.3-.88 3.18 0l1.86 1.86Q22 13.73 22 12a10 10 0 1 0-10 10"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.47 14.47c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="m12.75 11.21.99.5.53.25q.23.12.53.16a1.75 1.75 0 0 0 1.94-1.68l.01-.6V9.8q0-.25-.03-.5a1.8 1.8 0 0 0-1.09-1.31l-1.37-.69-.53-.25a1.75 1.75 0 0 0-2.47 1.53l-.01.43v3.55q-.57-.3-1.25-.3A2.75 2.75 0 1 0 12.75 15z"
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
              d="M17.47 14.47c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="M12.76 8.64v-.11q.09-.16.26-.16l.11.04.48.23 1.31.66.23.12q.07.07.1.15v.04a7 7 0 0 1-.02.86.3.3 0 0 1-.25.16l-.11-.04-.48-.23-1.31-.66-.23-.12a.3.3 0 0 1-.1-.15v-.04a7 7 0 0 1 0-.75"
              fill="currentColor"
            />
            <path
              d="M10 13.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.75 21.27a10 10 0 1 1 5.7-6l-1.86-1.86a2.25 2.25 0 0 0-3.18 0l-2.5 2.5a2.25 2.25 0 0 0 1.84 3.83zm-3-10.06.99.5.53.25q.23.12.53.16a1.75 1.75 0 0 0 1.94-1.68l.01-.6V9.8q0-.25-.03-.5a1.8 1.8 0 0 0-1.09-1.31l-1.37-.69-.53-.25a1.75 1.75 0 0 0-2.47 1.53l-.01.43v3.55q-.57-.3-1.25-.3A2.75 2.75 0 1 0 12.75 15z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUploadTrack;
