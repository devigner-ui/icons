import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageSearch(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5q0-6 6-6h8q6 0 6 6v5"
            />
            <g
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={duotone ? "0.4" : "1"}
            >
              <path d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4m3.8.6-1-1" />
            </g>
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 11"
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
              d="M2.67 12.97V6.99a5 5 0 0 1 5-4.98h10a5 5 0 0 1 5 4.99v6.98a5 5 0 0 1-5 4.98h-1.5c-.31 0-.61.15-.8.4l-1.5 1.99c-.66.88-1.74.88-2.4 0l-1.5-1.99c-.17-.22-.52-.4-.8-.4h-1.5a5 5 0 0 1-5-4.98z"
              fill="currentColor"
            />
            <path
              d="M12.67 12a1 1 0 0 1-1.01-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.43 1-.99 1"
              fill="currentColor"
            />
            <path
              d="M16.67 12a1 1 0 0 1-1.01-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.43 1-.99 1"
              fill="currentColor"
            />
            <path
              d="M8.67 12a1 1 0 0 1-1.01-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.43 1-.99 1"
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
              d="M17.67 2h-10a5 5 0 0 0-5 4.98v6.98a5 5 0 0 0 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4h1.5a5 5 0 0 0 5-4.98V6.98a5 5 0 0 0-5-4.98m-1.34 12.53a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.74-.74a3.7 3.7 0 1 1 1.06-1.06l.74.74c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageSearch;
