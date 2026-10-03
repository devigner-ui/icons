import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolumeCross = forwardRef<SVGSVGElement, IconProps>(
  function IconVolumeCross(
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
            d="M15.5 12c0 .53-.04 1.49-.09 2.6-.14 3.02-.2 4.53-1.13 5.18q-.28.18-.58.3c-.97.32-2.1-.33-4.2-1.7m-2.48-1.34C6.77 17 6.52 17 6 17c-1.37 0-2.06 0-2.66-.28a3.2 3.2 0 0 1-1.38-1.3c-.31-.58-.35-1.18-.43-2.4l-.02-.52m.45-3.92c.28-.53.83-1.05 1.38-1.3C3.94 7 4.63 7 6 7c.51 0 .77 0 1.02-.04a3 3 0 0 0 .7-.22c.24-.1.45-.24.88-.52l.22-.14c2.54-1.68 3.81-2.52 4.88-2.16q.3.11.58.3c.84.59.97 1.88 1.1 4.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20 18s1.5-1.8 1.5-6c0-2.43-.5-4.06-.93-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M18 15s.5-.9.5-3q-.02-1.28-.18-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 2 2 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M2.67 9.84v4q0 3 3 3H7.1q.57 0 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.25c0-2.98-2.07-4.12-4.59-2.54L8.16 6.54q-.5.3-1.06.3H5.67q-3 0-3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M22.67 13.8 18.7 9.84"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m22.63 9.88-3.96 3.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="m23.2 13.42-1.45-1.45 1.4-1.4a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.4 1.4-1.45-1.45a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.45 1.45-1.49 1.49a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l1.49-1.49 1.45 1.45q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.42 7.41v9.18c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37q-1.21 0-2.54-.82l-2.92-1.83a1.3 1.3 0 0 0-.66-.19h-.93V6.25h.93q.35 0 .66-.19l2.92-1.83c1.46-.91 2.89-1.07 4.01-.45s1.73 1.91 1.73 3.63"
              fill="currentColor"
            />
            <path
              d="M6.17 6.25v11.5h-.5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75z"
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
              d="m23.2 13.42-1.45-1.45 1.4-1.4a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.4 1.4-1.45-1.45a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.45 1.45-1.49 1.49a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l1.49-1.49 1.45 1.45q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              d="M14.69 3.78c-1.12-.62-2.55-.46-4.01.45L7.76 6.06q-.3.19-.66.19H5.67c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H7.1q.35 0 .66.19l2.92 1.83q1.33.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63V7.41c0-1.72-.62-3.01-1.73-3.63"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolumeCross;
