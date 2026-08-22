import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShieldNetwork = forwardRef<SVGSVGElement, IconProps>(
  function IconShieldNetwork(
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
              d="M3 10.42c0-3.2 0-4.8.38-5.34.38-.53 1.88-1.05 4.88-2.08l.58-.2C10.4 2.28 11.19 2 12 2s1.6.27 3.16.8l.58.2c3 1.03 4.5 1.55 4.88 2.08.38.54.38 2.14.38 5.34v1.57c0 5.64-4.24 8.38-6.9 9.54-.72.31-1.08.47-2.1.47s-1.38-.16-2.1-.47C7.24 20.37 3 17.63 3 11.99z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.85 13.91a12 12 0 0 0 0-3.82 8 8 0 0 0-.44-1.63q-.28-.7-.64-1.08Q12.4 7 12 7t-.77.38-.64 1.08a8 8 0 0 0-.44 1.63 12 12 0 0 0 0 3.82q.15.92.44 1.63.28.7.64 1.08.37.38.77.38t.77-.38.64-1.08a8 8 0 0 0 .44-1.63"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7 12h10"
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
              d="M3.38 5.08C3 5.62 3 7.22 3 10.42v1.57c0 5.64 4.24 8.38 6.9 9.54.72.31 1.08.47 2.1.47s1.38-.16 2.1-.47c2.66-1.16 6.9-3.9 6.9-9.54v-1.57c0-3.2 0-4.8-.38-5.34-.37-.53-1.88-1.05-4.88-2.08l-.58-.2C13.6 2.28 12.81 2 12 2s-1.6.27-3.16.8l-.58.2c-3 1.03-4.5 1.55-4.88 2.08"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.69 9.8a5.75 5.75 0 1 0 10.62 4.4A5.75 5.75 0 0 0 6.7 9.8m5.25-2.03.06-.02.06.02.17.13q.23.23.49.84.25.6.39 1.47.08.5.12 1.04h-2.46q.05-.53.12-1.04.15-.85.4-1.47.25-.6.48-.84zm-2.53 2.2q-.1.61-.14 1.28H7.82a4.3 4.3 0 0 1 2-2.9 9 9 0 0 0-.4 1.61m-1.6 2.78h1.46q.04.66.14 1.29.15.88.42 1.61a4.3 4.3 0 0 1-2.01-2.9m8.37-1.5a4.3 4.3 0 0 0-2-2.9q.26.73.4 1.61.11.63.15 1.29zm-1.45 1.5h1.45a4.3 4.3 0 0 1-2 2.9 9 9 0 0 0 .4-1.61q.11-.63.15-1.29m-1.5 0q-.05.53-.12 1.04-.15.86-.4 1.47-.25.6-.48.84l-.17.13-.06.02-.06-.02-.17-.13a3 3 0 0 1-.49-.84q-.25-.6-.39-1.47-.08-.5-.12-1.04z"
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
              d="m11.94 7.77.06-.02.06.02.17.13q.23.23.49.84.25.6.39 1.47.08.5.12 1.04h-2.46q.05-.53.12-1.04.15-.85.4-1.47.25-.6.48-.84z"
              fill="currentColor"
            />
            <path
              d="M9.27 11.25q.04-.66.14-1.29.15-.88.42-1.61a4.3 4.3 0 0 0-2.01 2.9z"
              fill="currentColor"
            />
            <path
              d="M7.82 12.75h1.45q.04.66.14 1.29.15.88.42 1.61a4.3 4.3 0 0 1-2.01-2.9"
              fill="currentColor"
            />
            <path
              d="M16.18 11.25a4.3 4.3 0 0 0-2-2.9q.26.73.4 1.61.11.63.15 1.29z"
              fill="currentColor"
            />
            <path
              d="M14.73 12.75h1.45a4.3 4.3 0 0 1-2 2.9 9 9 0 0 0 .4-1.61q.11-.63.15-1.29"
              fill="currentColor"
            />
            <path
              d="M13.23 12.75q-.05.53-.12 1.04-.15.86-.4 1.47-.25.6-.48.84l-.17.13-.06.02-.06-.02-.17-.13a3 3 0 0 1-.49-.84q-.25-.6-.39-1.47-.08-.5-.12-1.04z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.38 5.08C3 5.62 3 7.22 3 10.42v1.57c0 5.64 4.24 8.38 6.9 9.54.72.31 1.08.47 2.1.47s1.38-.16 2.1-.47c2.66-1.16 6.9-3.9 6.9-9.54v-1.57c0-3.2 0-4.8-.38-5.34-.37-.53-1.88-1.05-4.88-2.08l-.58-.2C13.6 2.28 12.81 2 12 2s-1.6.27-3.16.8l-.58.2c-3 1.03-4.5 1.55-4.88 2.08M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShieldNetwork;
