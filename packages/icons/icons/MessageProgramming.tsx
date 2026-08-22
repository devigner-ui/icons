import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageProgramming = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageProgramming(
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
              d="M9.17 18.97h-.5c-4 0-6-1-6-6v-5q0-6 6-6h8q6 0 6 6v5q0 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.67 8.7-2 2 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.67 8.7 2 2-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m13.67 8.37-2 4.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M9.17 18.97h-.5c-4 0-6-1-6-6v-5q0-6 6-6h8q6 0 6 6v5q0 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4"
              fill="currentColor"
            />
            <path
              d="M8.67 13.45a.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L7.73 10.7l1.47 1.47c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M16.67 13.45a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M11.67 13.78a.74.74 0 0 1-.69-1.05l2-4.67c.16-.38.6-.56.99-.39.38.16.56.6.39.99l-2 4.67a.8.8 0 0 1-.69.45"
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
              d="M16.67 1.97h-8q-6 0-6 6v5c0 5 2 6 6 6h.5c.28 0 .64.18.8.4l1.5 2c.66.88 1.74.88 2.4 0l1.5-2c.19-.25.49-.4.8-.4h.5q6 0 6-6v-5q0-6-6-6M9.2 12.17c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L7.73 10.7zm5.16-3.51-2 4.67a.75.75 0 0 1-.99.39.74.74 0 0 1-.39-.99l2-4.67c.16-.38.6-.56.99-.39.38.17.55.61.39.99m4.84 2.57-2 2a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageProgramming;
