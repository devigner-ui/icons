import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextBold2 = forwardRef<SVGSVGElement, IconProps>(
  function IconTextBold2(
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
              d="M5.55 4.5c0-1.1.9-2 2-2h5.12a4.75 4.75 0 0 1 0 9.5H5.55z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.55 12h9.5a4.75 4.75 0 0 1 0 9.5h-7.5a2 2 0 0 1-2-2z"
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
              d="M22.67 7.81v8.38c0 3.64-2.17 5.81-5.8 5.81h-8.4l-.59-.02a6 6 0 0 1-3.09-1.03 4 4 0 0 1-1.08-1.08 6 6 0 0 1-1.05-3.68V7.81c0-3.44 1.94-5.57 5.22-5.78L8.5 2h8.37q2.25 0 3.68 1.05.65.44 1.08 1.08a6 6 0 0 1 1.05 3.68"
              fill="currentColor"
            />
            <path
              d="M15.7 11.49c.6-.66.97-1.53.97-2.49a3.75 3.75 0 0 0-3.75-3.75H9.68a2 2 0 0 0-2 2.01v9.48a2 2 0 0 0 2 2.01h4.74a3.75 3.75 0 0 0 1.28-7.26M9.17 7.26c0-.28.23-.51.51-.51h3.24a2.25 2.25 0 0 1 0 4.5H9.17zm5.25 9.99H9.68a.5.5 0 0 1-.5-.51v-3.99h5.24a2.25 2.25 0 0 1 0 4.5"
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
              d="M14.42 12.75H9.17v3.99c0 .28.23.51.51.51h4.74a2.25 2.25 0 0 0 0-4.5"
              fill="currentColor"
            />
            <path
              d="M15.17 9a2.25 2.25 0 0 0-2.25-2.25H9.68a.5.5 0 0 0-.5.51v3.99h3.74A2.25 2.25 0 0 0 15.17 9"
              fill="currentColor"
            />
            <path
              d="M21.62 4.13a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.86 2H8.48q-.3 0-.59.03c-3.28.21-5.22 2.34-5.22 5.78v8.38q0 2.24 1.05 3.68.45.64 1.08 1.08 1.24.9 3.1 1.03l.58.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81q0-2.25-1.05-3.68m-7.2 14.62H9.68a2 2 0 0 1-2-2.01V7.26a2 2 0 0 1 2-2.01h3.24A3.75 3.75 0 0 1 16.67 9c0 .96-.37 1.83-.97 2.49a3.75 3.75 0 0 1-1.28 7.26"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextBold2;
