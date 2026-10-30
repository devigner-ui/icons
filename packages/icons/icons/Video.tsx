import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideo = forwardRef<SVGSVGElement, IconProps>(function IconVideo(
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
            d="M2 7.79c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.05 4.21-4.21 4.21H6.21c-3.16 0-4.21-2.1-4.21-4.21v-4.09"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19.52 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13 9.5a1.5 1.5 0 1 0-1.5 1.5"
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
            d="M12.53 20.42H6.21c-3.16 0-4.21-2.1-4.21-4.21V7.79c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.06 4.21-4.21 4.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.52 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
            d="M12.47 3.25h-6C3.05 3.25 1.72 4.58 1.72 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.42 0 4.75-1.33 4.75-4.75V8c0-3.42-1.33-4.75-4.75-4.75"
            fill="currentColor"
          />
          <path
            d="M10.97 11.38a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76"
            fill="currentColor"
          />
          <path
            d="M21.12 6.17c-.41-.21-1.27-.45-2.44.37L17.2 7.58l.02.42v8l-.02.42 1.48 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.1.85-.2.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21"
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
            d="M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21M11 11.38a1.88 1.88 0 0 1 0-3.76 1.88 1.88 0 0 1 0 3.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconVideo;
