import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookBookmark = forwardRef<SVGSVGElement, IconProps>(
  function IconBookBookmark(
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
              d="M4 8c0-2.83 0-4.24.88-5.12S7.18 2 10 2h4c2.83 0 4.24 0 5.12.88S20 5.18 20 8v8c0 2.83 0 4.24-.88 5.12S16.82 22 14 22h-4c-2.83 0-4.24 0-5.12-.88S4 18.82 4 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M19.9 16h-12c-.93 0-1.4 0-1.78.1A3 3 0 0 0 4 18.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 7h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 10.5h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 16v3.53c0 .28 0 .41-.1.47-.09.06-.22 0-.48-.13l-1.24-.59q-.12-.06-.18-.06-.07 0-.18.06l-1.24.6c-.26.11-.39.18-.49.12S9 19.8 9 19.53v-3.08"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 20.03V18H8v2.03c0 .28 0 .41.1.47.09.06.22 0 .48-.13l1.24-.6.18-.06q.07 0 .18.07l1.24.6c.26.11.39.18.49.12s.09-.2.09-.47"
              fill="currentColor"
            />
            <path
              d="M8 18h-.57c-1.09 0-1.47 0-1.76.07q-.78.17-1.28.67c-.11.1-.17.16-.3.5s-.1.49-.06.78l.02.15c.11.65.31 1 .62 1.24.3.25.74.41 1.55.5.84.09 1.94.09 3.53.09h4.44c1.59 0 2.7 0 3.53-.1.81-.08 1.24-.24 1.55-.49.3-.24.5-.59.62-1.24.09-.55.1-1.24.11-2.17h-8v2.03c0 .28 0 .41-.1.47-.09.06-.22 0-.48-.13l-1.24-.6-.18-.06q-.07 0-.18.07l-1.24.6c-.26.11-.39.18-.49.12S8 20.3 8 20.03z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.73 2.73c.3-.3.73-.5 1.54-.61A29 29 0 0 1 9.8 2h4.42c1.58 0 2.69 0 3.52.12.8.1 1.24.3 1.54.61s.5.74.62 1.56c.1.84.11 1.96.11 3.55V18H7.43c-1.09 0-1.47 0-1.76.07q-.78.17-1.28.67c-.11.1-.17.16-.3.5q-.1.28-.09.46V7.84c0-1.6 0-2.7.11-3.55.11-.82.31-1.25.62-1.56"
              fill="currentColor"
            />
            <path
              d="M7.25 7c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7"
              fill="currentColor"
            />
            <path
              d="M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
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
              d="M6.27 2.11c-.8.1-1.24.3-1.54.6s-.5.72-.62 1.52c-.1.81-.11 1.9-.11 3.45v8.56q.59-.4 1.3-.59a8 8 0 0 1 2.05-.14H20V7.68c0-1.56 0-2.64-.11-3.45-.11-.8-.31-1.22-.62-1.52-.3-.3-.73-.5-1.54-.6-.83-.1-1.94-.11-3.52-.11H9.79c-1.58 0-2.69 0-3.52.11m.49 4.49c0-.45.37-.82.83-.82h8.82c.46 0 .83.37.83.82s-.37.8-.83.8H7.6a.8.8 0 0 1-.83-.8m.83 2.97a.8.8 0 0 0-.83.8c0 .46.37.82.83.82h5.51c.46 0 .83-.36.83-.81a.8.8 0 0 0-.83-.81z"
              fill="currentColor"
            />
            <path
              d="M8.69 17.14H7.47a8 8 0 0 0-1.74.08c-.8.2-1.43.78-1.7 1.54q.02.57.08 1.02c.11.79.31 1.2.62 1.5.3.3.73.5 1.54.6.83.12 1.94.12 3.52.12h4.42c1.58 0 2.69 0 3.52-.11.8-.1 1.24-.3 1.54-.6s.5-.72.62-1.51c.09-.67.1-1.51.1-2.64H13.1v3c0 .3 0 .45-.1.5-.1.07-.25 0-.54-.13l-1.37-.64q-.13-.06-.2-.07-.06 0-.2.07l-1.36.64c-.29.13-.43.2-.54.14-.1-.06-.1-.21-.1-.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookBookmark;
