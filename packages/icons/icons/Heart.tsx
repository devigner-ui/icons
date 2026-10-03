import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeart = forwardRef<SVGSVGElement, IconProps>(function IconHeart(
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
            d="m8.96 18.91.47-.59zM12 5.51l-.54.51a.75.75 0 0 0 1.08 0zm3.04 13.4.46.59zM7 16.42a.75.75 0 0 0-.95 1.16zm-4.66-3a.75.75 0 1 0 1.32-.73zm.41-4.28a5.1 5.1 0 0 1 2.87-4.72c1.62-.73 3.78-.54 5.84 1.6l1.08-1.04C10.1 2.44 7.26 2.03 5 3.06a6.6 6.6 0 0 0-3.75 6.08zM8.5 19.5c.51.4 1.06.83 1.62 1.16a3.7 3.7 0 0 0 1.88.59v-1.5q-.45 0-1.13-.39a13 13 0 0 1-1.44-1.04zm7 0c1.43-1.12 3.25-2.41 4.68-4.02a9.3 9.3 0 0 0 2.57-6.34h-1.5c0 2.2-.9 3.89-2.19 5.34-1.31 1.48-2.97 2.65-4.49 3.84zm7.25-10.36A6.6 6.6 0 0 0 19 3.06c-2.26-1.03-5.1-.62-7.54 1.92l1.08 1.04c2.06-2.14 4.22-2.33 5.84-1.6a5.1 5.1 0 0 1 2.87 4.72zm-8.18 9.18q-.78.64-1.44 1.04-.68.4-1.13.39v1.5a3.7 3.7 0 0 0 1.88-.59 15 15 0 0 0 1.62-1.16zm-5.14 0c-.8-.63-1.6-1.22-2.43-1.9l-.95 1.16c.83.68 1.7 1.33 2.45 1.92zM3.66 12.7a7 7 0 0 1-.91-3.55h-1.5c0 1.63.42 3.04 1.1 4.27z"
            fill="currentColor"
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
            d="M12 5.5C7.5.83 2 4.27 2 9.14s4.02 7.45 6.96 9.77C10 19.73 11 20.5 12 20.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 5.5C16.5.83 22 4.27 22 9.14s-4.02 7.45-6.96 9.77C14 19.73 13 20.5 12 20.5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.1 18.25C5.3 16.08 2 13.55 2 9.14 2 4.27 7.5.83 12 5.5v15c-1 0-2-.77-3.04-1.59z"
            fill="currentColor"
          />
          <path
            d="M15.04 18.91C17.98 16.6 22 14 22 9.14 22 4.27 16.5.83 12 5.5v15c1 0 2-.77 3.04-1.59"
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
            d="M2 9.14C2 14 6.02 16.59 8.96 18.9 10 19.73 11 20.5 12 20.5s2-.77 3.04-1.59C17.98 16.6 22 14 22 9.14 22 4.27 16.5.83 12 5.5 7.5.83 2 4.27 2 9.14"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHeart;
