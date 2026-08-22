import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageFavorite = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageFavorite(
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              d="M22 8v5q0 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8q0-6 6-6h4"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.2 4.62c-.33-.99.06-2.21 1.14-2.55a1.5 1.5 0 0 1 1.66.5c.38-.55 1.1-.67 1.66-.5 1.08.33 1.47 1.56 1.14 2.55C20.29 6.19 18.5 7 18 7s-2.27-.8-2.8-2.38"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.5}
              d="M8 11"
              opacity={duotone ? "0.4" : "1"}
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
              d="M21.64 1H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.03c0-1.27-.76-2.03-2.03-2.03m.64 3.68c-.37 1.18-1.66 1.82-2.11 1.82s-1.73-.62-2.11-1.82a2 2 0 0 1-.09-.57c0-.65.33-1.32 1.02-1.54.41-.13.85-.06 1.16.2a1.3 1.3 0 0 1 1.18-.2c.92.29 1.21 1.32.95 2.11"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.64 8H18.7c-1.27 0-2.03-.76-2.03-2.03V3.03q0-.6.22-1.03H7.67a5 5 0 0 0-5 4.98v6.98a5 5 0 0 0 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4h1.5a5 5 0 0 0 5-4.98V7.77a2 2 0 0 1-1.03.23"
              fill="currentColor"
            />
            <path
              d="M12.67 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M16.67 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M8.67 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
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
              d="M21.64 1H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.03c0-1.27-.76-2.03-2.03-2.03m.64 3.68c-.37 1.18-1.66 1.82-2.11 1.82s-1.73-.62-2.11-1.82a2 2 0 0 1-.09-.57c0-.65.33-1.32 1.02-1.54.41-.13.85-.06 1.16.2a1.3 1.3 0 0 1 1.18-.2c.92.29 1.21 1.32.95 2.11"
              fill="currentColor"
            />
            <path
              d="M18.7 9.5a3.53 3.53 0 0 1-3.53-3.53V3a1 1 0 0 0-1-1h-6.5a5 5 0 0 0-5 4.98v6.97a5 5 0 0 0 5 5h1.5c.28 0 .64.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4h1.51a5 5 0 0 0 4.99-4.99V10.5a1 1 0 0 0-1-1zM8.67 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m4 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageFavorite;
