import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartphoneUpdate = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartphoneUpdate(
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
            <g clipPath="url(#clip0_1_21956)">
              <path
                d="M13 2c3.11.01 4.77.1 5.83 1.17C20 4.34 20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14v-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d="M2.73 4h-.75zm0 .8-.55.5a.75.75 0 0 0 1.1 0zm1.28-.3a.75.75 0 1 0-1.1-1zm-1.46-1a.75.75 0 0 0-1.1 1zm5.99-1.67A.75.75 0 1 0 9.71.9zM6.38-.75c-2.5 0-4.4 2.2-4.4 4.75h1.5c0-1.86 1.36-3.25 2.9-3.25zM1.98 4v.8h1.5V4zm1.3 1.3.73-.8-1.1-1-.73.8zm0-1-.73-.8-1.1 1 .73.8zM9.71.9c-.8-1-1.98-1.65-3.33-1.65v1.5c.84 0 1.62.4 2.16 1.08z"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="m10.27 3.2.55-.5a.75.75 0 0 0-1.1 0zm-1.28.3a.75.75 0 1 0 1.1 1zm1.46 1a.75.75 0 0 0 1.1-1zM4.58 6.3a.75.75 0 1 0-1.12 1.01zm2.04 2.45c2.5 0 4.4-2.2 4.4-4.75h-1.5c0 1.86-1.36 3.25-2.9 3.25zM11.02 4v-.8h-1.5V4zm-1.3-1.3-.73.8 1.1 1 .73-.8zm0 1 .73.8 1.1-1-.73-.8zM3.46 7.32c.8.88 1.9 1.44 3.16 1.44v-1.5c-.79 0-1.51-.35-2.04-.94z"
                fill="currentColor"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M15 19H9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath>
                <rect width="24" height="24" fill="none" />
              </clipPath>
            </defs>
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
            <g clipPath="url(#clip0_1_21969)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.14 4.24q.33 0 .56.24l.74.81a.76.76 0 0 1-.6 1.27c-.33 2.25-2.12 4.04-4.4 4.04a4.3 4.3 0 0 1-3.2-1.45.76.76 0 0 1 .06-1.07.76.76 0 0 1 1.07.05c.54.6 1.28.96 2.07.96 1.34 0 2.55-1.04 2.86-2.54a.76.76 0 0 1-.46-1.26l.74-.8a.8.8 0 0 1 .56-.25"
                fill="currentColor"
              />
              <g opacity={duotone ? "0.4" : "1"}>
                <path
                  d="M7.2 1C4.92 1 3.13 2.8 2.8 5.04a.76.76 0 0 0-.6 1.27l.74.81a.76.76 0 0 0 1.12 0l.74-.8a.76.76 0 0 0-.46-1.27c.3-1.5 1.52-2.53 2.86-2.53.85 0 1.64.4 2.19 1.09a.76.76 0 0 0 1.18-.95c-.8-1-2-1.66-3.37-1.66"
                  fill="currentColor"
                />
              </g>
              <g opacity={duotone ? "0.4" : "1"}>
                <path
                  d="M21 11.87v4.04c0 3.82 0 5.72-1.19 6.9-1.18 1.2-3.1 1.2-6.92 1.2s-5.73 0-6.92-1.2c-1.18-1.18-1.18-3.08-1.18-6.9v-1.73c0-.27 0-.4.02-.51.09-.38.39-.68.76-.76.12-.03.25-.03.52-.03 1.61 0 2.42 0 3.09-.15a6.1 6.1 0 0 0 4.58-4.57c.15-.66.15-1.47.15-3.08q0-.37.02-.5c.1-.39.4-.69.78-.77.12-.02.24-.02.5-.02 2.34.05 3.69.26 4.6 1.18C21 6.15 21 8.06 21 11.87"
                  fill="currentColor"
                />
              </g>
              <path
                d="M9.1 20.97c0-.42.33-.76.75-.76h6.08a.76.76 0 1 1 0 1.52H9.85a.76.76 0 0 1-.76-.76"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath>
                <rect width="24" height="24" fill="none" />
              </clipPath>
            </defs>
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
              d="M2.8 5.04C3.13 2.8 4.92 1 7.2 1c1.36 0 2.57.66 3.37 1.66.27.33.21.8-.11 1.07a.77.77 0 0 1-1.07-.12 2.8 2.8 0 0 0-2.2-1.1c-1.33 0-2.54 1.05-2.85 2.54a.76.76 0 0 1 .46 1.26l-.74.81a.76.76 0 0 1-1.12 0l-.74-.8a.76.76 0 0 1 .6-1.28m8.34-.8q.33 0 .56.24l.74.81a.76.76 0 0 1-.6 1.27c-.33 2.25-2.12 4.04-4.4 4.04a4.3 4.3 0 0 1-3.2-1.45.76.76 0 0 1 .06-1.07.76.76 0 0 1 1.07.05c.54.6 1.28.96 2.07.96 1.34 0 2.55-1.04 2.86-2.54a.76.76 0 0 1-.46-1.26l.74-.8a.8.8 0 0 1 .56-.25"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 11.87v4.04c0 3.81 0 5.72-1.19 6.9C18.63 24 16.71 24 12.9 24s-5.73 0-6.92-1.18c-1.18-1.19-1.18-3.1-1.18-6.9v-1.74c0-.27 0-.4.02-.51.09-.38.39-.68.76-.76.12-.03.25-.03.52-.03 1.61 0 2.42 0 3.09-.15a6.1 6.1 0 0 0 4.57-4.57c.16-.66.16-1.47.16-3.08q0-.37.02-.5c.09-.39.4-.69.78-.77.12-.02.24-.02.5-.02 2.33.05 3.68.26 4.6 1.17C21 6.15 21 8.06 21 11.86M9.85 20.2a.76.76 0 1 0 0 1.52h6.08a.76.76 0 1 0 0-1.52z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartphoneUpdate;
