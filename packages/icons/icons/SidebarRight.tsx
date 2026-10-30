import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSidebarRight = forwardRef<SVGSVGElement, IconProps>(
  function IconSidebarRight(
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
            d="M1.97 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.97 2v20"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.97 9.44 10.53 12l-2.56 2.56"
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
              d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.97 2v20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.97 9.44 10.53 12l-2.56 2.56"
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
              d="M2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38l.59-.02a6 6 0 0 0 3.09-1.03q.64-.44 1.08-1.08A6 6 0 0 0 22 16.19V7.81c0-3.44-1.94-5.57-5.22-5.78L16.19 2H7.81Q5.57 2 4.13 3.05q-.64.44-1.08 1.08A6 6 0 0 0 2 7.81"
              fill="currentColor"
            />
            <path
              d="M15.28 2v20h.91l.59-.02V2.03L16.19 2z"
              fill="currentColor"
            />
            <path
              d="M9.03 15.31q.3 0 .53-.22l2.56-2.56a.75.75 0 0 0 0-1.06L9.56 8.91a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06L10.52 12 8.5 14.03a.75.75 0 0 0 0 1.06q.22.22.53.22"
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
              d="M7.81 2Q5.57 2 4.13 3.05q-.64.44-1.08 1.08A6 6 0 0 0 2 7.81v8.38C2 19.83 4.17 22 7.81 22h7.47V2zm4.31 10.53-2.56 2.56a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L10.52 12 8.5 9.97a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2.56 2.56c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
            <path
              d="M16.78 2.03v19.95a6 6 0 0 0 3.09-1.03q.64-.44 1.08-1.08A6 6 0 0 0 22 16.19V7.81c0-3.44-1.94-5.57-5.22-5.78"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSidebarRight;
