import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookmark2 = forwardRef<SVGSVGElement, IconProps>(
  function IconBookmark2(
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
              d="M14.67 2q3 0 3 3.03v7.05c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8c-1.73 1.04-3.14.27-3.14-1.72V5.03q0-3.03 3-3.03z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.49 4.99c-3.41.57-4.82 2.67-4.82 6.91v3.03c0 5.05 2 7.07 7 7.07h6c5 0 7-2.02 7-7.07V11.9c0-4.31-1.46-6.42-5-6.94"
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
              d="M17.67 4.96v7.12c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8c-1.73 1.04-3.14.27-3.14-1.72V4.99Q7.68 2 10.67 2h4q2.97 0 3 2.96"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 11.9v3.03c0 5.05-2 7.07-7 7.07h-6c-5 0-7-2.02-7-7.07V11.9c0-4.24 1.41-6.34 4.82-6.91h.18v7.09c0 1.99 1.41 2.76 3.14 1.72l1.32-.8c.3-.18.78-.18 1.08 0l1.32.8c1.73 1.04 3.14.27 3.14-1.72V4.96c3.54.52 5 2.63 5 6.94"
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
              d="M17.67 4.96v7.12c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8c-1.73 1.04-3.14.27-3.14-1.72V4.99Q7.68 2 10.67 2h4q2.97 0 3 2.96"
              fill="currentColor"
            />
            <path
              d="M22.67 11.9v3.03c0 5.05-2 7.07-7 7.07h-6c-5 0-7-2.02-7-7.07V11.9c0-2.69.57-4.52 1.85-5.64.65-.55 1.65-.07 1.65.78v5.04c0 1.49.61 2.69 1.67 3.29 1.07.61 2.43.5 3.75-.29l1.08-.65 1.09.65q1.13.68 2.23.68.82 0 1.51-.39c1.06-.6 1.67-1.8 1.67-3.29V7.03c0-.85 1.01-1.33 1.65-.77 1.28 1.12 1.85 2.95 1.85 5.64"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookmark2;
