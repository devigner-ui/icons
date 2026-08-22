import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWeigher = forwardRef<SVGSVGElement, IconProps>(function IconWeigher(
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
            d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M8 18h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m16.41 9.97.67-1.66a2 2 0 0 0-1.53-2.72l-.43-.07a19 19 0 0 0-6.24 0l-.43.07a2 2 0 0 0-1.53 2.72l.67 1.66c.23.6.87.92 1.49.76 1.92-.48 3.92-.48 5.85 0 .61.16 1.25-.17 1.48-.76"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10.18 9.93 9.5 8.05"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14z"
            fill="currentColor"
          />
          <path
            d="M7.25 18c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M8.64 6.31c2.23-.41 4.5-.41 6.72 0l.47.09c.88.16 1.4 1.2 1.07 2.12l-.75 2.07c-.1.3-.4.47-.68.4a13 13 0 0 0-4.72-.43L10 8.22c-.16-.48-.64-.74-1.07-.56s-.67.7-.51 1.2l.64 1.98-.53.14c-.29.08-.58-.09-.68-.39L7.1 8.52c-.33-.93.19-1.96 1.07-2.12z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14zm4.25 8c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m8.1-11.69a18 18 0 0 0-6.7 0l-.48.09c-.88.16-1.4 1.2-1.07 2.12l.75 2.07c.1.3.4.47.68.4l.53-.15-.64-1.99c-.16-.48.07-1.02.5-1.2.44-.17.92.09 1.08.57l.75 2.34c1.58-.15 3.18-.01 4.72.42.29.08.58-.09.68-.39l.75-2.07c.33-.93-.19-1.96-1.07-2.12z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWeigher;
