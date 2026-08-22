import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLocationSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconLocationSlash(
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
              d="M11.09 13a3.11 3.11 0 1 1 4.27-4.26"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66 17.81C4.82 15.3 3.48 12.09 4.3 8.49 5.95 1.23 15.24.06 19.35 4.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.05 8.5c1.15 5.08-2.01 9.38-4.78 12.04a5.2 5.2 0 0 1-7.21 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 2-20 20"
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
              opacity={duotone ? "0.4" : "1"}
              d="m19.56 5.11-13.1 13.1c-1.89-2.57-3.25-5.85-2.41-9.52a8.3 8.3 0 0 1 3.38-5.08A9.3 9.3 0 0 1 12.67 2a9 9 0 0 1 6.89 3.11"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.45 20.98a5.44 5.44 0 0 1-7.56-.01q-.54-.52-1.08-1.11l12.9-12.9q.37.8.58 1.74c1.17 5.16-1.99 9.52-4.84 12.28"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.74.74 0 0 0-1.08 0L15.69 7.9l-.72.72a2.9 2.9 0 0 0-2.3-1.18 2.9 2.9 0 0 0-2.87 2.87c0 .9.44 1.75 1.18 2.3L2.9 20.69a.74.74 0 0 0 0 1.08q.23.23.54.23.3 0 .54-.23L22.44 3.31a.74.74 0 0 0 0-1.08"
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
            <g clipPath="url(#clip0_12_64837)">
              <path
                d="M16.45 20.98a5.44 5.44 0 0 1-7.56-.01q-.54-.52-1.08-1.11l12.9-12.9q.37.8.58 1.74c1.17 5.16-1.99 9.52-4.84 12.28"
                fill="currentColor"
              />
              <path
                d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
                fill="currentColor"
              />
              <path
                d="M9.52 10.31a3.15 3.15 0 0 1 6.06-1.21l3.98-3.98A9 9 0 0 0 12.67 2a9.3 9.3 0 0 0-5.24 1.61 8.3 8.3 0 0 0-3.38 5.08c-.84 3.67.52 6.95 2.41 9.52l5-5a3.1 3.1 0 0 1-1.94-2.9"
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

export default IconLocationSlash;
