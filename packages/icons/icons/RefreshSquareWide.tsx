import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefreshSquareWide = forwardRef<SVGSVGElement, IconProps>(
  function IconRefreshSquareWide(
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
            d="M18.46 21.53C20.95 20.68 22 18.63 22 15V9c0-5-2-7-7-7H9.05m-3.46.46C3.07 3.3 2 5.35 2 9v6c0 5 2 7 7 7h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 12a5.5 5.5 0 0 1-5.5 5.5c-3.04 0-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
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
            <path
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.5 12a5.5 5.5 0 0 1-5.5 5.5c-3.04 0-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
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
              d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="M18 11.27a.74.74 0 0 0-.75.75 5.23 5.23 0 0 1-8.95 3.69l-.08-.09h.83c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H6.4a.76.76 0 0 0-.75.75v2.65c0 .41.34.75.75.75s.75-.34.75-.75v-.85l.09.11a6.7 6.7 0 0 0 9.54 0 6.7 6.7 0 0 0 1.97-4.75.76.76 0 0 0-.75-.76"
              fill="currentColor"
            />
            <path
              d="M6 12.65c.41 0 .74-.33.75-.74a5.25 5.25 0 0 1 8.95-3.63l.08.09h-.83a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.65c.41 0 .75-.34.75-.75V6.48a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.86l-.09-.11a6.7 6.7 0 0 0-9.54 0 6.6 6.6 0 0 0-1.97 4.66c-.01.41.32.75.74.76z"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M5.25 11.89A6.73 6.73 0 0 1 12 5.25c1.8 0 3.5.7 4.77 1.98l.09.11v-.86c0-.41.34-.75.75-.75s.75.34.75.75v2.65c0 .41-.34.75-.75.75h-2.65a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.83l-.08-.09a5.2 5.2 0 0 0-7.42 0 5.2 5.2 0 0 0-1.53 3.63.76.76 0 0 1-.76.73h-.01a.76.76 0 0 1-.74-.76m11.52 4.88a6.7 6.7 0 0 1-9.54 0l-.09-.11v.85c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.65c0-.41.34-.75.75-.75h2.65c.41 0 .75.34.75.75s-.34.75-.75.75h-.83l.08.09a5.2 5.2 0 0 0 7.42 0 5.2 5.2 0 0 0 1.53-3.69c0-.41.34-.75.75-.75s.75.34.75.75c0 1.81-.7 3.5-1.97 4.76"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRefreshSquareWide;
