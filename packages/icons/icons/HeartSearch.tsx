import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartSearch(
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
              d="M22.16 12q.5-1.53.51-3.31a5.57 5.57 0 0 0-5.56-5.59c-1.82 0-3.43.88-4.44 2.24A5.5 5.5 0 0 0 8.23 3.1a5.57 5.57 0 0 0-5.56 5.59c0 7 6.48 11.13 9.38 12.13q.27.09.62.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.41 21a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.21 21.6-1-1"
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
              d="M17.11 3.1c-1.81 0-3.43.88-4.44 2.23a5.55 5.55 0 0 0-10 3.36q.01 1.78.52 3.31c1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81q.5-1.53.52-3.31a5.57 5.57 0 0 0-5.56-5.59"
              fill="currentColor"
            />
            <path
              d="m22.44 20.68-.76-.76q.61-.92.63-2.09a3.82 3.82 0 1 0-1.73 3.19l.76.76q.24.23.55.23t.55-.23a.77.77 0 0 0 0-1.1"
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
              d="m22.41 20.51-.86-.86q.7-1.04.71-2.36a4.3 4.3 0 1 0-1.93 3.6l.86.86a.87.87 0 0 0 1.24 0 .9.9 0 0 0-.02-1.24"
              fill="currentColor"
            />
            <path
              d="M22.67 8.73q-.01 1.78-.52 3.31c-.06.21-.31.27-.49.14a6.35 6.35 0 0 0-10.09 5.06c0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81a11 11 0 0 1-.52-3.31 5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartSearch;
