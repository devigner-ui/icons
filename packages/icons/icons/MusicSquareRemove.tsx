import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicSquareRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicSquareRemove(
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
            d="M2 8.65C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65v5.7q0 .51-.03.98a4 4 0 1 0-5.63 5.64q-.47.03-.99.03h-5.7C3.9 21 2 19.1 2 14.35v-1.38"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.17 12.97a1.45 1.45 0 1 1-2.9 0 1.45 1.45 0 0 1 2.9 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.47 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.48 12a1.45 1.45 0 1 1-2.9 0 1.45 1.45 0 0 1 2.9 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m8.17 8.83 5.3-1.45"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 18q-.01 1.14-.58 2.06a3.97 3.97 0 0 1-6.84 0A4 4 0 1 1 22 18Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19.07 19.04-2.12-2.11"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19.05 16.96-2.12 2.11"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
              d="M21 8.65v5.7q0 .51-.03.98a4 4 0 1 0-5.63 5.64q-.47.03-.99.03h-5.7C3.9 21 2 19.1 2 14.35v-5.7C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.72 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.47 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.03 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m8.17 8.83 5.3-1.45"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22 18q-.01 1.14-.58 2.06a3.97 3.97 0 0 1-6.84 0A4 4 0 1 1 22 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m19.07 19.04-2.12-2.11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m19.05 16.96-2.12 2.11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
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
              d="M21.54 15.88a4 4 0 1 0-5.94 5.34 4 4 0 0 0 5.94-5.34m-1.37 4.25a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.5-.5a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.91 21.52q-.45-.4-.76-.91a4 4 0 0 1 6.39-4.73l.02.02.01-.16V7.36c0-3.64-2.17-5.81-5.81-5.81H7.38q-.42 0-.81.05c-3.15.29-5 2.4-5 5.76v8.38c0 3.36 1.85 5.47 5 5.76q.39.05.81.05h8.38l.17-.01z"
              fill="currentColor"
            />
            <path
              d="M13.35 4.85c-.32-.25-.9-.49-1.82-.24l-2.98.82c-.89.23-1.47.98-1.47 1.92v3.91a2 2 0 0 0-.74-.14 2.24 2.24 0 1 0 2.24 2.28l.01-.03v-3.7l3.97-1.08v1.68a2.24 2.24 0 1 0 1.49 2.13l.01-.04V6.53q-.02-1.15-.71-1.68M6.33 14.1a.74.74 0 1 1 0-1.48.74.74 0 1 1 0 1.48m5.47-1a.74.74 0 1 1 0-1.48.74.74 0 1 1 0 1.48"
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
              d="M21.54 15.88a4 4 0 1 0-5.94 5.34 4 4 0 0 0 5.94-5.34m-1.37 4.25a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.5-.5a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06"
              fill="currentColor"
            />
            <path
              d="M11.8 11.62a.74.74 0 1 0 0 1.48.74.74 0 1 0 0-1.48"
              fill="currentColor"
            />
            <path
              d="M6.33 12.61a.74.74 0 1 0 0 1.48.74.74 0 1 0 0-1.48"
              fill="currentColor"
            />
            <path
              d="M15.76 1.55H7.38q-.42 0-.81.05c-3.15.29-5 2.4-5 5.76v8.38c0 3.36 1.85 5.47 5 5.76q.39.05.81.05h5.69c.39 0 .64-.44.49-.8a6 6 0 0 1-.49-2.2 5.5 5.5 0 0 1 7.68-5.05c.37.16.82-.09.82-.49V7.36c0-3.64-2.17-5.81-5.81-5.81M14.05 7.6v4.76l-.01.04a2.24 2.24 0 1 1-2.24-2.27q.39 0 .75.14V8.58L8.58 9.66v3.7l-.01.03a2.24 2.24 0 1 1-2.24-2.28q.4 0 .74.14V7.34c0-.93.58-1.68 1.47-1.92l2.98-.82c.93-.25 1.5 0 1.82.24q.69.53.69 1.68V7.6z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicSquareRemove;
