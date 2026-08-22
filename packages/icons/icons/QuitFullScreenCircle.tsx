import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconQuitFullScreenCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconQuitFullScreenCircle(
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
              d="M10 6c-.02 1.7-.11 2.65-.73 3.27S7.7 9.98 6 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10 18c-.02-1.7-.11-2.65-.73-3.27S7.7 14.01 6 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14 6c.01 1.7.1 2.65.73 3.27.62.62 1.56.71 3.27.73"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14 18c.01-1.7.1-2.65.73-3.27.62-.62 1.56-.72 3.27-.73"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M5.25 14c0-.42.34-.75.76-.75q1.27-.02 2.18.15a3 3 0 0 1 1.6.8 3 3 0 0 1 .8 1.61q.16.9.16 2.18a.75.75 0 0 1-1.5.01c-.01-.85-.04-1.45-.13-1.9a1.5 1.5 0 0 0-.38-.84 1.6 1.6 0 0 0-.84-.39c-.45-.08-1.05-.11-1.9-.12a.75.75 0 0 1-.75-.76"
              fill="currentColor"
            />
            <path
              d="M10 5.25c.42 0 .75.34.75.76q0 1.27-.15 2.18a3 3 0 0 1-.8 1.6 3 3 0 0 1-1.61.8q-.9.16-2.18.16a.75.75 0 1 1-.02-1.5c.86 0 1.46-.04 1.9-.13s.67-.2.85-.38.3-.41.38-.84c.1-.45.12-1.05.13-1.9 0-.42.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M14 5.25c.4 0 .75.33.75.74 0 .86.04 1.46.12 1.9.09.44.22.67.39.85s.41.3.84.38c.45.1 1.05.12 1.9.13a.75.75 0 0 1 0 1.5q-1.29 0-2.19-.15a3 3 0 0 1-1.61-.8 3 3 0 0 1-.8-1.61c-.12-.6-.14-1.33-.15-2.18 0-.42.33-.76.74-.76"
              fill="currentColor"
            />
            <path
              d="M18.75 14c0 .4-.33.75-.75.75-.85 0-1.45.04-1.9.12-.43.09-.67.22-.84.39s-.3.41-.39.84c-.08.45-.11 1.05-.12 1.9a.75.75 0 1 1-1.5 0q-.02-1.29.15-2.19a3 3 0 0 1 .8-1.61 3 3 0 0 1 1.61-.8c.6-.12 1.33-.14 2.18-.15.42 0 .75.33.76.74"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M10 5.25c.42 0 .75.34.75.76q0 1.27-.15 2.18a3 3 0 0 1-.8 1.6 3 3 0 0 1-1.61.8q-.9.16-2.18.16a.75.75 0 1 1-.02-1.5c.86 0 1.46-.04 1.9-.13s.67-.2.85-.38.3-.41.38-.84c.1-.45.12-1.05.13-1.9 0-.42.34-.75.75-.75m4 0c.4 0 .75.33.75.74 0 .86.04 1.46.12 1.9.09.44.22.67.39.85s.41.3.84.38c.45.1 1.05.12 1.9.13a.75.75 0 0 1 0 1.5q-1.29 0-2.19-.15a3 3 0 0 1-1.61-.8 3 3 0 0 1-.8-1.61c-.12-.6-.14-1.33-.15-2.18 0-.42.33-.76.74-.76m-8 8a.75.75 0 0 0 0 1.5c.85 0 1.45.04 1.9.12.43.09.66.22.84.39s.3.41.38.84c.1.45.12 1.05.13 1.9a.75.75 0 0 0 1.5 0q0-1.29-.15-2.19a3 3 0 0 0-.8-1.61 3 3 0 0 0-1.61-.8A12 12 0 0 0 6 13.25m12.75.74c0 .42-.33.76-.75.76-.85 0-1.45.04-1.9.12-.43.09-.67.22-.84.39s-.3.41-.39.84c-.08.45-.11 1.05-.12 1.9a.75.75 0 1 1-1.5 0q-.02-1.29.15-2.19a3 3 0 0 1 .8-1.61 3 3 0 0 1 1.61-.8c.6-.12 1.33-.14 2.18-.15.42 0 .75.33.76.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconQuitFullScreenCircle;
