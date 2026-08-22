import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBrushSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconBrushSquare(
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
            <g clipPath="url(#clip0_12_78642)">
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M11.64 2h-2c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.55 3.56a27 27 0 0 1-6.9 9.32l-1.58 1.26q-.3.23-.63.36l-.03-.46a3 3 0 0 0-.93-1.83 3.3 3.3 0 0 0-1.89-.95q-.24-.02-.48-.01.13-.38.39-.67L11.76 9a27 27 0 0 1 9.32-6.92 1.13 1.13 0 0 1 1.47 1.48"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.45 14.49a3.3 3.3 0 0 1-2.91 3.29l-1.97.21a1.7 1.7 0 0 1-1.87-1.88l.21-1.97a3.25 3.25 0 0 1 3.21-2.9q.24-.01.48.01c.68.09 1.34.4 1.89.95a3 3 0 0 1 .96 2.29"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M16.49 11.98a3.8 3.8 0 0 0-3.79-3.79"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath>
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  transform="translate(0.669922)"
                />
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M22.5 3.55a28 28 0 0 1-5.71 8.25 4.8 4.8 0 0 0-4.05-3.96 28 28 0 0 1 8.29-5.76c.46-.18.93-.04 1.21.25.31.3.45.76.26 1.22"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.79 11.79q-.6.6-1.18 1.05l-1.57 1.26q-.3.21-.62.36l-.03-.46a3.3 3.3 0 0 0-2.81-2.77q-.25-.03-.48-.02.13-.38.39-.67l1.25-1.57q.45-.57 1.01-1.14a4.8 4.8 0 0 1 4.04 3.96"
              fill="currentColor"
            />
            <path
              d="M13.42 14.47a3.3 3.3 0 0 1-2.91 3.28l-1.96.22a1.7 1.7 0 0 1-1.87-1.88l.22-1.96a3.25 3.25 0 0 1 5.56-1.94c.53.53.84 1.17.93 1.83z"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-5.7 14.72q-.51.52-1.34.64l-1.35.15a1.18 1.18 0 0 1-1.29-1.3l.15-1.36a2.24 2.24 0 0 1 2.21-2q.16-.01.33.01a2.3 2.3 0 0 1 1.94 1.91l.02.32q0 .95-.67 1.63m6.95-9.17a19 19 0 0 1-3.94 5.7 3.3 3.3 0 0 0-2.8-2.74 19 19 0 0 1 5.73-3.98.8.8 0 0 1 .84.17c.2.22.3.53.17.85"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBrushSquare;
