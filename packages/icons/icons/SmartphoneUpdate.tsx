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
            d="M14 3c3.11.01 4.77.1 5.83 1.17C21 5.34 21 7.23 21 11v2.68m-.01 3.51c-.04 2.36-.24 3.72-1.16 4.64C18.66 23 16.77 23 13 23s-5.66 0-6.83-1.17S5 18.77 5 15v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m4.46 5-.73.8c0-1.15.06-2.22.73-3.2C5.87.55 8.54.5 10.13 2.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3 5 .73.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.54 5 .73-.8c0 1.12-.05 2.17-.69 3.13a3.46 3.46 0 0 1-5.56.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12 5-.73-.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 20h-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            <g clipPath="url(#clip0_1_21956)">
              <path
                d="M14 3c3.11.01 4.77.1 5.83 1.17C21 5.34 21 7.23 21 11v4c0 3.77 0 5.66-1.17 6.83S16.77 23 13 23s-5.66 0-6.83-1.17S5 18.77 5 15v-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d="m4.46 5-.73.8c0-1.15.06-2.22.73-3.2C5.87.55 8.54.5 10.13 2.37"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m3 5 .73.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="m10.54 5 .73-.8c0 1.12-.05 2.17-.69 3.13a3.46 3.46 0 0 1-5.56.49"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="m12 5-.73-.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16 20h-6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath>
                <rect x="1" width="24" height="24" fill="none" />
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
                d="M11.64 3.74q.33 0 .56.24l.74.81a.76.76 0 0 1-.6 1.27c-.33 2.25-2.12 4.04-4.4 4.04a4.3 4.3 0 0 1-3.2-1.45.76.76 0 0 1 .06-1.07.76.76 0 0 1 1.07.05c.54.6 1.28.96 2.07.96 1.34 0 2.55-1.04 2.86-2.54a.76.76 0 0 1-.46-1.26l.74-.8a.8.8 0 0 1 .56-.25"
                fill="currentColor"
              />
              <g opacity={duotone ? "0.4" : "1"}>
                <path
                  d="M7.7.5C5.42.5 3.63 2.3 3.3 4.54a.76.76 0 0 0-.6 1.27l.74.81a.76.76 0 0 0 1.12 0l.74-.8a.76.76 0 0 0-.46-1.27c.3-1.5 1.52-2.53 2.86-2.53.85 0 1.64.4 2.19 1.09a.76.76 0 0 0 1.18-.95c-.8-1-2-1.66-3.37-1.66"
                  fill="currentColor"
                />
              </g>
              <g opacity={duotone ? "0.4" : "1"}>
                <path
                  d="M21.5 11.37v4.04c0 3.82 0 5.72-1.19 6.9-1.18 1.2-3.1 1.2-6.92 1.2s-5.73 0-6.92-1.2c-1.18-1.18-1.18-3.08-1.18-6.9v-1.73c0-.27 0-.4.02-.51.09-.38.39-.68.76-.76.12-.03.25-.03.52-.03 1.61 0 2.42 0 3.09-.15a6.1 6.1 0 0 0 4.58-4.57c.15-.66.15-1.47.15-3.08q0-.37.02-.5c.1-.39.4-.69.78-.77.12-.02.24-.02.5-.02 2.34.05 3.69.26 4.6 1.18 1.19 1.18 1.19 3.09 1.19 6.9"
                  fill="currentColor"
                />
              </g>
              <path
                d="M9.6 20.47c0-.42.33-.76.75-.76h6.08a.76.76 0 1 1 0 1.52h-6.08a.76.76 0 0 1-.76-.76"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath>
                <rect y="-0.5" x="0.5" width="24" height="24" fill="none" />
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
              d="M3.3 4.54C3.63 2.3 5.42.5 7.7.5c1.36 0 2.57.66 3.37 1.66.27.33.21.8-.11 1.07a.77.77 0 0 1-1.07-.12 2.8 2.8 0 0 0-2.2-1.1c-1.33 0-2.54 1.05-2.85 2.54a.76.76 0 0 1 .46 1.26l-.74.81a.76.76 0 0 1-1.12 0l-.74-.8a.76.76 0 0 1 .6-1.28m8.34-.8q.33 0 .56.24l.74.81a.76.76 0 0 1-.6 1.27c-.33 2.25-2.12 4.04-4.4 4.04a4.3 4.3 0 0 1-3.2-1.45.76.76 0 0 1 .06-1.07.76.76 0 0 1 1.07.05c.54.6 1.28.96 2.07.96 1.34 0 2.55-1.04 2.86-2.54a.76.76 0 0 1-.46-1.26l.74-.8a.8.8 0 0 1 .56-.25"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.5 11.37v4.04c0 3.81 0 5.72-1.19 6.9-1.18 1.19-3.1 1.19-6.91 1.19s-5.73 0-6.92-1.18c-1.18-1.19-1.18-3.1-1.18-6.9v-1.74c0-.27 0-.4.02-.51.09-.38.39-.68.76-.76.12-.03.25-.03.52-.03 1.61 0 2.42 0 3.09-.15a6.1 6.1 0 0 0 4.57-4.57c.16-.66.16-1.47.16-3.08q0-.37.02-.5c.09-.39.4-.69.78-.77.12-.02.24-.02.5-.02 2.33.05 3.68.26 4.6 1.17 1.18 1.19 1.18 3.1 1.18 6.9M10.35 19.7a.76.76 0 1 0 0 1.52h6.08a.76.76 0 1 0 0-1.52z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartphoneUpdate;
