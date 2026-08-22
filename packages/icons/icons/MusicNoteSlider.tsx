import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicNoteSlider = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicNoteSlider(
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
              d="M13 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0V8c0 1.1.9 2 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 19.5c-.46 0-.7 0-.9-.03a2.5 2.5 0 0 1-2.07-2.08C2 17.2 2 16.96 2 16.5v-9c0-.46 0-.7.03-.9a2.5 2.5 0 0 1 2.08-2.07c.2-.03.43-.03.89-.03"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.72 3.76H5.27q-.23 0-.44.03-.64.03-1.18.31a3.2 3.2 0 0 0-1.62 2.7Q2 7.46 2 8.47v7.06q0 1.02.03 1.67a3.2 3.2 0 0 0 1.62 2.7q.54.28 1.18.31l.44.03h1.45c-.3-.9-.3-2.2-.3-4.24V8c0-2.04 0-3.34.3-4.24"
                fill="currentColor"
              />
              <path
                d="M17.28 20.24c.3-.9.3-2.2.3-4.24V8c0-2.04 0-3.34-.3-4.24h1.45q.23 0 .44.03.64.03 1.18.31a3.2 3.2 0 0 1 1.62 2.7q.04.66.03 1.67v7.06q0 1.02-.03 1.67a3.2 3.2 0 0 1-1.62 2.7q-.54.28-1.18.31l-.44.03z"
                fill="currentColor"
              />
            </g>
            <path
              d="M11 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.42 8c0-2.83 0-4.24.82-5.12S9.37 2 12 2s3.95 0 4.76.88c.82.88.82 2.3.82 5.12v8c0 2.83 0 4.24-.82 5.12S14.63 22 12 22s-3.95 0-4.76-.88c-.82-.88-.82-2.3-.82-5.12zm7.33 0a.75.75 0 0 0-1.5 0v3.55q-.57-.3-1.25-.3A2.75 2.75 0 1 0 13.75 14v-3.55q.57.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25"
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
              d="M11 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.42 8c0-2.83 0-4.24.82-5.12S9.37 2 12 2s3.95 0 4.76.88c.82.88.82 2.3.82 5.12v8c0 2.83 0 4.24-.82 5.12S14.63 22 12 22s-3.95 0-4.76-.88c-.82-.88-.82-2.3-.82-5.12zm7.33 0a.75.75 0 0 0-1.5 0v3.55q-.57-.3-1.25-.3A2.75 2.75 0 1 0 13.75 14v-3.55q.57.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25"
              fill="currentColor"
            />
            <path
              d="M5.02 7.9v8.2q-.01 1.47.05 2.63a12 12 0 0 0 .11 1.08c.04.22-.13.42-.35.4a3 3 0 0 1-1.18-.31 3.2 3.2 0 0 1-1.62-2.7Q2 16.54 2 15.53V8.47q0-1 .03-1.67a3.2 3.2 0 0 1 1.62-2.7q.54-.28 1.18-.31c.22-.02.39.18.35.4a8 8 0 0 0-.11 1.08Q5 6.43 5.02 7.9"
              fill="currentColor"
            />
            <path
              d="M18.98 7.9v8.2q.01 1.47-.05 2.63a12 12 0 0 1-.11 1.08c-.04.22.13.42.35.4q.64-.04 1.18-.31a3.2 3.2 0 0 0 1.62-2.7q.04-.66.03-1.67V8.47q0-1-.03-1.67a3.2 3.2 0 0 0-1.62-2.7q-.54-.28-1.18-.31c-.22-.02-.39.18-.35.4a8 8 0 0 1 .11 1.08q.06 1.16.05 2.63"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicNoteSlider;
