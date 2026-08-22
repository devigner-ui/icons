import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconThreeSquares = forwardRef<SVGSVGElement, IconProps>(
  function IconThreeSquares(
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
              d="M7 12H6c-1.89 0-2.83 0-3.41.59C2 13.17 2 14.1 2 16v2c0 1.89 0 2.83.59 3.41C3.17 22 4.1 22 6 22h2c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41v-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 7h-1c-1.89 0-2.83 0-3.41.59C7 8.17 7 9.1 7 11v2c0 1.89 0 2.83.59 3.41C8.17 17 9.1 17 11 17h2c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41v-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 6c0-1.89 0-2.83.59-3.41C13.17 2 14.1 2 16 2h2c1.89 0 2.83 0 3.41.59C22 3.17 22 4.1 22 6v2c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-2c-1.89 0-2.83 0-3.41-.59C12 10.83 12 9.9 12 8z"
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
            <rect
              x="12"
              y="2"
              width="10"
              height="10"
              rx="2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M12 7h-1c-1.89 0-2.83 0-3.41.59C7 8.17 7 9.1 7 11v2c0 1.89 0 2.83.59 3.41C8.17 17 9.1 17 11 17h2c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41v-1h-1c-1.89 0-2.83 0-3.41-.59C12 10.83 12 9.9 12 8z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 12v1c0 1.89 0 2.83.59 3.41C8.17 17 9.1 17 11 17h1v1c0 1.89 0 2.83-.59 3.41C10.83 22 9.9 22 8 22H6c-1.89 0-2.83 0-3.41-.59C2 20.83 2 19.9 2 18v-2c0-1.89 0-2.83.59-3.41C3.17 12 4.1 12 6 12z"
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
              d="M12 6c0-1.89 0-2.83.59-3.41C13.17 2 14.1 2 16 2h2c1.89 0 2.83 0 3.41.59C22 3.17 22 4.1 22 6v2c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-2c-1.89 0-2.83 0-3.41-.59C12 10.83 12 9.9 12 8z"
              fill="currentColor"
            />
            <path
              d="M10.5 7c-1.56 0-2.38.05-2.91.59C7 8.17 7 9.1 7 11v2c0 1.44 0 2.33.26 2.93a2 2 0 0 0 .33.48C8.17 17 9.1 17 11 17h2c1.89 0 2.83 0 3.41-.59.54-.53.59-1.35.59-2.91h-1.09c-.87 0-1.66 0-2.3-.09a3.5 3.5 0 0 1-2.08-.94 3.5 3.5 0 0 1-.94-2.08c-.09-.64-.09-1.43-.09-2.3z"
              fill="currentColor"
            />
            <path
              d="M5.5 12c-1.56 0-2.38.05-2.91.59C2 13.17 2 14.1 2 16v2c0 1.89 0 2.83.59 3.41C3.17 22 4.1 22 6 22h2c1.89 0 2.83 0 3.41-.59.54-.53.58-1.35.59-2.91h-1.1c-.87 0-1.66 0-2.3-.09a3.5 3.5 0 0 1-2.08-.94 3.5 3.5 0 0 1-.94-2.08c-.09-.64-.09-1.43-.09-2.3z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconThreeSquares;
