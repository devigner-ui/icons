import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSidebarLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconSidebarLeft(
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
            d="M7.97 2v20"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.97 9.44 12.41 12l2.56 2.56"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
              d="M7.97 2v20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.97 9.44 12.41 12l2.56 2.56"
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
              d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81l-.59-.02a6 6 0 0 1-3.09-1.03 4 4 0 0 1-1.08-1.08A6 6 0 0 1 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78Q7.51 2 7.81 2h8.38q2.24 0 3.68 1.05.64.44 1.08 1.08A6 6 0 0 1 22 7.81"
              fill="currentColor"
            />
            <path
              d="M8.72 2v20h-.91l-.59-.02V2.03Q7.51 2 7.81 2z"
              fill="currentColor"
            />
            <path
              d="M14.97 15.31a.7.7 0 0 1-.53-.22l-2.56-2.56a.75.75 0 0 1 0-1.06l2.56-2.56a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L13.48 12l2.03 2.03a.75.75 0 0 1-.54 1.28"
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
              d="M2 7.81v8.38q0 2.24 1.05 3.68.44.64 1.08 1.08 1.24.9 3.09 1.03V2.03C3.94 2.24 2 4.37 2 7.81"
              fill="currentColor"
            />
            <path
              d="M20.95 4.13a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.19 2H8.72v20h7.47c3.64 0 5.81-2.17 5.81-5.81V7.81q0-2.25-1.05-3.68m-5.45 9.9c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-2.56-2.56a.75.75 0 0 1 0-1.06l2.56-2.56a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L13.48 12z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSidebarLeft;
