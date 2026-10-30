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
            d="M12 20.55q-.35 0-.62-.09C8.48 19.47 2 15.34 2 8.33c0-1.4.51-2.68 1.36-3.66"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.5 11.65q.48-1.53.5-3.31a5.57 5.57 0 0 0-5.56-5.59c-1.82 0-3.43.88-4.44 2.24a5.5 5.5 0 0 0-4.44-2.24"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.94 17.45a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m21.54 21.25-1-1"
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
              opacity={duotone ? "0.4" : "1"}
              d="M21.49 11.65q.5-1.53.51-3.31a5.57 5.57 0 0 0-5.56-5.59c-1.82 0-3.43.88-4.44 2.24a5.5 5.5 0 0 0-4.44-2.24A5.57 5.57 0 0 0 2 8.34c0 7 6.48 11.13 9.38 12.13q.27.09.62.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.74 20.65a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21.54 21.25-1-1"
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
              d="M16.44 2.43c-1.81 0-3.43.88-4.44 2.23A5.55 5.55 0 0 0 2 8.02q.01 1.78.52 3.31c1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81q.5-1.53.52-3.31a5.57 5.57 0 0 0-5.56-5.59"
              fill="currentColor"
            />
            <path
              d="m21.77 20.01-.76-.76q.61-.92.63-2.09a3.82 3.82 0 1 0-1.73 3.19l.76.76q.24.23.55.23t.55-.23a.77.77 0 0 0 0-1.1"
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
              d="m21.74 19.84-.86-.86q.7-1.04.71-2.36a4.3 4.3 0 1 0-1.93 3.6l.86.86a.87.87 0 0 0 1.24 0 .9.9 0 0 0-.02-1.24"
              fill="currentColor"
            />
            <path
              d="M22 8.06q-.01 1.78-.52 3.31c-.06.21-.31.27-.49.14a6.35 6.35 0 0 0-10.09 5.06c0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81A11 11 0 0 1 2 8.06 5.55 5.55 0 0 1 12 4.7a5.55 5.55 0 0 1 10 3.36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartSearch;
