import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartSpeaker = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartSpeaker(
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
              d="M2.5 14.62c.88.76 3.33 2.63 9.5 2.63v-1.5c-5.8 0-7.9-1.74-8.5-2.27zm9.5 2.63c3.15 0 5.32-.48 6.82-1.07a8 8 0 0 0 2.69-1.63l-1.02-1.1c-.3.27-.93.83-2.21 1.34-1.3.5-3.28.96-6.28.96z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.5 16c-.58-1.75-1.65-2.5-3.5-2.5s-2.92.75-3.5 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 4.41c-.32.28-.5.67-.5 1 0 1.16 1.74 2 4.5 2s4.5-.84 4.5-2q-.01-.5-.5-.91"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M3.32 6.66a4.8 4.8 0 0 1 3.92-4.2l.21-.04c3-.56 6.1-.56 9.1 0l.32.06a4.7 4.7 0 0 1 3.8 4.07q.64 5.33.04 10.67l-.02.15a4.84 4.84 0 0 1-4.21 4.26l-.9.12-1 .12a25 25 0 0 1-5.16 0l-1-.12-1.01-.13a4.7 4.7 0 0 1-4.1-4.14q-.62-5.34 0-10.68z"
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
              d="M9.46 15.63a25 25 0 0 0 5.08 0 2.4 2.4 0 0 0-.75-.92q-.58-.46-1.79-.46a3 3 0 0 0-1.79.46q-.42.29-.75.92"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.32 6.66a4.8 4.8 0 0 1 3.92-4.2l.21-.04c3-.56 6.1-.56 9.1 0l.32.06a4.7 4.7 0 0 1 3.8 4.07q.39 3.21.32 6.44l-.5.46c-.3.27-.93.83-2.21 1.34q-.87.35-2.2.61a4 4 0 0 0-1.42-1.92 4.5 4.5 0 0 0-2.66-.73c-1.02 0-1.92.2-2.66.73a4 4 0 0 0-1.42 1.92c-2.79-.53-4-1.53-4.43-1.92l-.48-.42q-.06-3.14.3-6.26zM8.5 4.98a.75.75 0 1 0-.98-1.14c-.47.4-.76 1-.76 1.57 0 1.01.77 1.71 1.65 2.12.91.41 2.16.63 3.6.63s2.69-.22 3.6-.63c.88-.4 1.65-1.1 1.65-2.12a2 2 0 0 0-.76-1.48.75.75 0 0 0-.98 1.14c.23.2.24.31.24.34 0 .14-.1.44-.78.75-.64.3-1.65.5-2.97.5s-2.33-.2-2.97-.5c-.68-.3-.78-.6-.78-.75q0-.05.05-.19.07-.13.19-.24"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.82 16.18a9 9 0 0 0 2.08-1.12 47 47 0 0 1-.19 2.16l-.02.15a4.84 4.84 0 0 1-4.21 4.26l-.9.12-1 .12a25 25 0 0 1-6.15-.12l-1.02-.13a4.7 4.7 0 0 1-4.1-4.14q-.15-1.2-.22-2.4c1.22.88 3.77 2.17 8.91 2.17 3.15 0 5.32-.48 6.82-1.07"
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
              d="M7.24 2.46a4.8 4.8 0 0 0-3.92 4.2l-.01.14a47 47 0 0 0-.3 6.26l.48.42c.44.39 1.64 1.39 4.43 1.92q.47-1.22 1.42-1.92a4.5 4.5 0 0 1 2.66-.73c1.02 0 1.92.2 2.66.73q.95.7 1.42 1.92 1.33-.26 2.2-.61a7 7 0 0 0 2.21-1.34l.5-.46a47 47 0 0 0-.31-6.44 4.7 4.7 0 0 0-3.81-4.07l-.32-.06c-3-.56-6.1-.56-9.1 0zm1.25 2.52a.75.75 0 1 0-.98-1.14c-.47.4-.76 1-.76 1.57 0 1.01.77 1.71 1.65 2.12.91.41 2.16.63 3.6.63s2.69-.22 3.6-.63c.88-.4 1.65-1.1 1.65-2.12a2 2 0 0 0-.76-1.48.75.75 0 0 0-.98 1.14c.23.2.24.31.24.34 0 .14-.1.44-.78.75-.64.3-1.65.5-2.97.5s-2.33-.2-2.97-.5c-.68-.3-.78-.6-.78-.75q0-.05.05-.19.07-.13.19-.24"
              fill="currentColor"
            />
            <path
              d="M12 15.75q-1.4 0-2.54-.12.33-.63.75-.92.58-.46 1.79-.46a3 3 0 0 1 1.79.46q.43.3.75.92-1.13.12-2.54.12"
              fill="currentColor"
            />
            <path
              d="M20.9 15.06c-.46.34-1.12.75-2.08 1.12-1.5.59-3.67 1.07-6.82 1.07-5.14 0-7.69-1.3-8.9-2.17q.06 1.2.2 2.4a4.7 4.7 0 0 0 4.11 4.14l1.02.13.99.12q2.58.27 5.16 0l1-.12.9-.12a4.84 4.84 0 0 0 4.21-4.26l.02-.15q.12-1.08.2-2.16"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartSpeaker;
