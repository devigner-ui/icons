import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSidebarTop = forwardRef<SVGSVGElement, IconProps>(
  function IconSidebarTop(
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
            d="M22 8.5H2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.56 15.5 12 12.94 9.44 15.5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M1.97 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7"
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
              d="M22 8.5H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.56 15.5 12 12.94 9.44 15.5"
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
              d="M7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81l-.02-.59a6 6 0 0 0-1.03-3.09 4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22Q2 7.51 2 7.81v8.38q0 2.24 1.05 3.68.44.64 1.08 1.08A6 6 0 0 0 7.81 22"
              fill="currentColor"
            />
            <path
              d="M2 8.72h20v-.91l-.02-.59H2.03Q2 7.51 2 7.81z"
              fill="currentColor"
            />
            <path
              d="M15.31 14.97a.7.7 0 0 0-.22-.53l-2.56-2.56a.75.75 0 0 0-1.06 0l-2.56 2.56a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0L12 13.48l2.03 2.03a.75.75 0 0 0 1.28-.54"
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
              d="M20.95 4.13a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22h19.95a6 6 0 0 0-1.03-3.09"
              fill="currentColor"
            />
            <path
              d="M2 16.19q0 2.24 1.05 3.68.44.64 1.08 1.08A6 6 0 0 0 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V8.72H2zm6.91-1.75 2.56-2.56a.75.75 0 0 1 1.06 0l2.56 2.56q.22.23.22.53t-.22.53a.75.75 0 0 1-1.06 0L12 13.48 9.97 15.5a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSidebarTop;
