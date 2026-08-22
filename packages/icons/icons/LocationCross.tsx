import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLocationCross = forwardRef<SVGSVGElement, IconProps>(
  function IconLocationCross(
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
              d="M4.29 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.2 5.2 0 0 1-7.21 0C6.3 17.88 3.14 13.57 4.29 8.49"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M14.67 12.96 10.7 9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.63 9.04 10.67 13"
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
              d="m15.2 12.42-1.45-1.45 1.4-1.4a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.4 1.4-1.45-1.45a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.45 1.45-1.49 1.49a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l1.49-1.49 1.45 1.45q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.29 8.7C20.25 4.07 16.21 2 12.67 2h-.01C9.13 2 5.1 4.07 4.05 8.69c-1.18 5.16 1.98 9.53 4.84 12.29a5.44 5.44 0 0 0 7.55 0c2.86-2.76 6.02-7.12 4.85-12.28"
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
            <g clipPath="url(#clip0_12_64827)">
              <path
                d="M21.29 8.7C20.25 4.07 16.21 2 12.67 2h-.01C9.13 2 5.1 4.07 4.05 8.69c-1.18 5.16 1.98 9.53 4.84 12.29a5.44 5.44 0 0 0 7.55 0c2.86-2.76 6.02-7.12 4.85-12.28m-6.09 4.79a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.45-1.45-1.49 1.49a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.49-1.49-1.45-1.45a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.45 1.45 1.4-1.4a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-1.4 1.4 1.45 1.45c.29.29.29.76 0 1.06"
                fill="currentColor"
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
        )}
      </>
    );
  },
);

export default IconLocationCross;
