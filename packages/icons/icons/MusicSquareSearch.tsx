import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicSquareSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicSquareSearch(
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
        {variant === "Broken" ? (
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
            d="M2.15 8.65C2.15 3.9 4.05 2 8.8 2h5.7c4.75 0 6.65 1.9 6.65 6.65v3.7"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.5 21H8.8c-4.75 0-6.65-1.9-6.65-6.65v-1.38"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.32 12.97a1.45 1.45 0 1 1-2.9 0 1.45 1.45 0 0 1 2.9 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.63 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.63 12a1.45 1.45 0 1 1-2.9 0 1.45 1.45 0 0 1 2.9 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m8.32 8.83 5.31-1.45"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.29 18.08a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m21.89 21.88-1-1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M12.47 21h-3.7c-4.75 0-6.65-1.9-6.65-6.65v-5.7C2.12 3.9 4.02 2 8.77 2h5.7c4.75 0 6.65 1.9 6.65 6.65v3.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.84 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.6 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.15 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m8.29 8.83 5.31-1.45"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M18.06 21.28a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21.86 21.88-1-1"
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
              d="m22.31 21.26-.72-.72A3.56 3.56 0 0 0 18.6 15a3.58 3.58 0 1 0 1.96 6.57l.72.72a.73.73 0 0 0 1.03-1.03"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.71 1.5H7.34c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.31c0-3.64-2.17-5.81-5.81-5.81"
              fill="currentColor"
            />
            <path
              d="M13.3 4.8c-.32-.25-.9-.49-1.82-.24l-2.98.82c-.89.23-1.47.98-1.47 1.92v3.91a2 2 0 0 0-.74-.14 2.24 2.24 0 1 0 2.24 2.28l.01-.03v-3.7l3.97-1.08v1.68A2.24 2.24 0 1 0 14 12.35l.01-.04V6.48q-.02-1.15-.71-1.68m-7.02 9.25a.74.74 0 1 1 0-1.48.74.74 0 1 1 0 1.48m5.47-1a.74.74 0 1 1 0-1.48.74.74 0 1 1 0 1.48"
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
              d="m22.31 21.26-.72-.72A3.56 3.56 0 0 0 18.6 15a3.58 3.58 0 1 0 1.96 6.57l.72.72a.73.73 0 0 0 1.03-1.03"
              fill="currentColor"
            />
            <path
              d="M11.75 11.57a.74.74 0 1 0 0 1.48.74.74 0 1 0 0-1.48"
              fill="currentColor"
            />
            <path
              d="M6.28 12.56a.74.74 0 1 0 0 1.48.74.74 0 1 0 0-1.48"
              fill="currentColor"
            />
            <path
              d="M15.71 1.5H7.33q-.42 0-.81.05c-3.15.29-5 2.4-5 5.76v8.38c0 3.36 1.85 5.47 5 5.76q.39.05.81.05h5.69c.39 0 .64-.44.49-.8a6 6 0 0 1-.49-2.2 5.5 5.5 0 0 1 7.68-5.05c.37.16.82-.09.82-.49V7.31c0-3.64-2.17-5.81-5.81-5.81M14 7.55v4.76l-.01.04a2.24 2.24 0 1 1-2.24-2.27q.39 0 .75.14V8.53L8.53 9.61v3.7l-.01.03a2.24 2.24 0 1 1-2.24-2.28q.4 0 .74.14V7.29c0-.93.58-1.68 1.47-1.92l2.98-.82c.93-.25 1.5 0 1.82.24q.69.53.69 1.68v1.08z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicSquareSearch;
