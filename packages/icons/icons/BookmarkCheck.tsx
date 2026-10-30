import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookmarkCheck = forwardRef<SVGSVGElement, IconProps>(
  function IconBookmarkCheck(
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
            d="M3.32 10.02v9.93c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86A3.9 3.9 0 0 0 16.83 2H7.18a3.87 3.87 0 0 0-3.86 3.86"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m9.59 11 1.5 1.5 4-4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="M16.82 2H7.18a3.87 3.87 0 0 0-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86A3.9 3.9 0 0 0 16.82 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m9.59 11 1.5 1.5 4-4"
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
              d="M16.82 1.91H7.18a3.9 3.9 0 0 0-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.77a3.9 3.9 0 0 0-3.87-3.86"
              fill="currentColor"
            />
            <path
              d="M11.09 13.25a.7.7 0 0 1-.53-.22l-1.5-1.5a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.97.97 3.47-3.47a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-4 4a.7.7 0 0 1-.53.22"
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
              d="M16.82 1.91H7.18a3.9 3.9 0 0 0-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.77a3.9 3.9 0 0 0-3.87-3.86m-1.2 7.12-4 4a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.5-1.5a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.97.97 3.47-3.47a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookmarkCheck;
