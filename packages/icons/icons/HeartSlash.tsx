import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartSlash(
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
              d="M6.78 17.5c-2.21-2.07-4.11-5.02-4.11-8.82a5.57 5.57 0 0 1 5.56-5.59c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 7.55-1.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.4 7q.27.8.27 1.69c0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-.65-.22-1.47-.6-2.36-1.13"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 2-20 20"
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
              d="M22.67 8.69q-.01 1.78-.52 3.31c-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0-.64-.22-1.45-.59-2.32-1.11a1 1 0 0 1-.19-1.57L20.82 6.85c.54-.54 1.49-.31 1.68.43q.17.67.17 1.41"
              fill="currentColor"
            />
            <path
              d="M23.2 1.47a.75.75 0 0 0-1.06 0L19.8 3.81a5.55 5.55 0 0 0-7.13 1.52 5.55 5.55 0 0 0-10 3.36q.01 1.78.52 3.31c.65 2.07 1.87 3.8 3.25 5.17l-4.3 4.3a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l20-20a.75.75 0 0 0 0-1.06"
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
              d="M22.67 8.69q-.01 1.78-.52 3.31c-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0-.64-.22-1.45-.59-2.32-1.11a1 1 0 0 1-.19-1.57L20.82 6.85c.54-.54 1.49-.31 1.68.43q.17.67.17 1.41"
              fill="currentColor"
            />
            <path
              d="M23.2 1.47a.75.75 0 0 0-1.06 0L19.8 3.81a5.55 5.55 0 0 0-7.13 1.52 5.55 5.55 0 0 0-10 3.36q.01 1.78.52 3.31c.65 2.07 1.87 3.8 3.25 5.17l-4.3 4.3a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l20-20a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartSlash;
