import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotificationFavorite = forwardRef<SVGSVGElement, IconProps>(
  function IconNotificationFavorite(
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
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.67 2h-5c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.48 14.93c-.35-1.1.06-2.47 1.22-2.84a1.6 1.6 0 0 1 1.79.56c.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66a4.2 4.2 0 0 1-3.01-2.66"
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
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 9.5a4.5 4.5 0 0 1-4.5-4.5q.02-1.08.49-2H8.19C4.74 3 2.67 5.06 2.67 8.52v7.95c0 3.47 2.07 5.53 5.52 5.53h7.95c3.46 0 5.52-2.06 5.52-5.52V9.01q-.9.47-1.99.49"
              fill="currentColor"
            />
            <path
              d="M11.57 12.36a1.8 1.8 0 0 0-1.61.26 1.7 1.7 0 0 0-1.6-.26c-1.23.4-1.62 1.8-1.27 2.88.53 1.64 2.26 2.49 2.88 2.49.61 0 2.37-.87 2.88-2.49.35-1.08-.05-2.48-1.28-2.88"
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
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              d="m20.47 9.42-.09.02-.24.03-.47.03a4 4 0 0 1-1.71-.34l-.45-.22a4.5 4.5 0 0 1-2.31-4.41l.03-.24.02-.09a1 1 0 0 0-.98-1.2H8.19a5 5 0 0 0-1.11.11 4.8 4.8 0 0 0-4.3 4.3l-.05.35a4 4 0 0 0-.06.76v7.96a5 5 0 0 0 .11 1.11 4.8 4.8 0 0 0 4.3 4.3l.35.05a4 4 0 0 0 .76.06h7.96a5 5 0 0 0 1.11-.11 4.8 4.8 0 0 0 4.3-4.3l.05-.35a4 4 0 0 0 .06-.76V10.4a1 1 0 0 0-1.2-.98m-7.52 5.83c-.53 1.67-2.35 2.57-2.98 2.57-.64 0-2.43-.88-2.97-2.57h-.01c-.35-1.11.05-2.56 1.32-2.97.58-.19 1.2-.08 1.65.27a1.8 1.8 0 0 1 1.67-.27c1.27.41 1.67 1.86 1.32 2.97"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotificationFavorite;
