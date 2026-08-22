import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClapperboardOpen = forwardRef<SVGSVGElement, IconProps>(
  function IconClapperboardOpen(
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
              d="M4 11h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v1c0 2.83 0 4.24-.88 5.12S16.82 22 14 22h-4c-2.83 0-4.24 0-5.12-.88S4 18.82 4 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M4 11c-.48-1.8-.72-2.7-.52-3.49a3 3 0 0 1 .78-1.34c.57-.57 1.47-.81 3.28-1.3l7-1.87a8 8 0 0 1 1.3-.29 3 3 0 0 1 2.9 1.67c.12.26.21.6.4 1.27.05.23.08.34.09.44a1 1 0 0 1-.56.96q-.1.05-.42.13z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14.7 2.94-.64 5.35"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.42 4.62-.64 5.35"
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
              d="M4 11h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v1c0 2.83 0 4.24-.88 5.12S16.82 22 14 22h-4c-2.83 0-4.24 0-5.12-.88S4 18.82 4 16z"
              fill="currentColor"
            />
            <path
              d="m13.32 8.2.6-5.03L9.2 4.43l-.04.28-.6 5.07 4.71-1.27z"
              fill="currentColor"
            />
            <path
              d="M3.48 7.51c-.2.78.04 1.68.52 3.49l3-.8.04-.32.6-5.03-.1.03c-1.8.48-2.71.72-3.28 1.29a3 3 0 0 0-.78 1.34"
              fill="currentColor"
            />
            <path
              d="m18.25 7.18-3.4.92.6-5.07.05-.27q.2-.04.34-.05a3 3 0 0 1 2.9 1.67c.12.26.21.6.4 1.27.05.23.08.34.09.44a1 1 0 0 1-.56.96c-.09.04-.2.07-.42.13"
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
              d="M4 11h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v1c0 2.83 0 4.24-.88 5.12S16.82 22 14 22h-4c-2.83 0-4.24 0-5.12-.88S4 18.82 4 16z"
              fill="currentColor"
            />
            <path
              d="M13.92 3.17 9.15 4.44q.03.13.02.27l-.6 5.07 4.77-1.28a1 1 0 0 1-.02-.3z"
              fill="currentColor"
            />
            <path
              d="m14.84 8.1 3.4-.92q.33-.08.43-.13a1 1 0 0 0 .56-.96c0-.1-.04-.21-.1-.44-.18-.67-.27-1-.4-1.27a3 3 0 0 0-3.3-1.6q.03.11.02.25z"
              fill="currentColor"
            />
            <path
              d="M7.06 10.18a1 1 0 0 1-.02-.3l.6-5.03-.1.03c-1.8.48-2.71.72-3.28 1.29a3 3 0 0 0-.78 1.34c-.2.78.04 1.68.52 3.49z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClapperboardOpen;
