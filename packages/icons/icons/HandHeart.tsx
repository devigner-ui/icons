import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHandHeart = forwardRef<SVGSVGElement, IconProps>(
  function IconHandHeart(
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
              d="m10.15 8.8-.44.6zM12 3.1l-.5.56c.28.26.72.26 1 0zm1.85 5.7.44.6zM12 9.68v.75zM10.6 8.2c-.7-.5-1.43-1.12-2-1.76q-.85-1.01-.85-1.73h-1.5c0 1.02.58 1.96 1.22 2.7.67.77 1.5 1.46 2.24 2zM7.74 4.7c0-1.05.52-1.66 1.15-1.87.65-.22 1.62-.08 2.6.82l1-1.1C11.24 1.37 9.7.98 8.43 1.41c-1.31.44-2.17 1.68-2.17 3.3zm6.54 4.7a14 14 0 0 0 2.24-2 4.3 4.3 0 0 0 1.22-2.7h-1.5q0 .71-.86 1.73c-.56.64-1.3 1.25-1.98 1.76zm3.46-4.7c0-1.61-.86-2.85-2.17-3.29-1.28-.43-2.81-.04-4.09 1.13l1.02 1.1c.97-.89 1.94-1.03 2.6-.8.62.2 1.14.8 1.14 1.86zM9.7 9.4c.75.55 1.35 1.02 2.29 1.02v-1.5c-.37 0-.57-.12-1.4-.73zm3.7-1.21c-.84.61-1.04.73-1.41.73v1.5c.94 0 1.54-.47 2.3-1.02z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 21.39h2.26q1.53 0 3.02.3c1.74.36 3.57.4 5.33.12a9 9 0 0 0 4.61-2.06c.57-.53 1.17-1.4 1.6-2.08.35-.58.18-1.3-.4-1.73a1.9 1.9 0 0 0-2.22 0l-1.8 1.37a5.4 5.4 0 0 1-2.72 1.2m0 0-.11.02m.1-.01a1 1 0 0 0 .43-.24 1.5 1.5 0 0 0 .13-2.14 2 2 0 0 0-.45-.36c-2.8-1.67-7.15-.4-9.78 1.46m9.68 1.28h-.11m0 0q-.8.1-1.82.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M7 4.83C7 6.38 8.73 8 10.15 9.09c.8.6 1.2.91 1.85.91s1.05-.3 1.85-.91C15.27 8 17 6.38 17 4.83c0-2.8-2.75-3.83-5-1.68C9.75 1 7 2.04 7 4.83"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.26 21.39H6c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7v-1.11c0-.52 0-.78.13-1.01.14-.23.34-.35.74-.58 2.64-1.54 6.4-2.41 8.9-.91q.27.15.46.36a1.5 1.5 0 0 1-.13 2.14 1 1 0 0 1-.42.24l.34-.05a5.4 5.4 0 0 0 2.38-1.16l1.8-1.37a1.9 1.9 0 0 1 2.22 0c.58.44.75 1.15.4 1.73-.43.68-1.03 1.55-1.6 2.08a9 9 0 0 1-4.61 2.06c-1.76.29-3.6.25-5.33-.11q-1.49-.3-3.02-.31"
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
              d="M7 4.83C7 6.38 8.73 8 10.15 9.09c.8.6 1.2.91 1.85.91s1.05-.3 1.85-.91C15.27 8 17 6.38 17 4.83c0-2.8-2.75-3.83-5-1.68C9.75 1 7 2.04 7 4.83"
              fill="currentColor"
            />
            <path
              d="M6.26 21.39H6c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7v-1.11c0-.52 0-.78.13-1.01.14-.23.34-.35.74-.58 2.64-1.54 6.4-2.41 8.9-.91q.27.15.46.36a1.5 1.5 0 0 1-.13 2.14 1 1 0 0 1-.42.24l.34-.05a5.4 5.4 0 0 0 2.38-1.16l1.8-1.37a1.9 1.9 0 0 1 2.22 0c.58.44.75 1.15.4 1.73-.43.68-1.03 1.55-1.6 2.08a9 9 0 0 1-4.61 2.06c-1.76.29-3.6.25-5.33-.11q-1.49-.3-3.02-.31"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHandHeart;
