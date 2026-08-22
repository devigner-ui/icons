import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEarth = forwardRef<SVGSVGElement, IconProps>(function IconEarth(
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
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 4.71c.78.71 2.39 2.65 2.57 4.74.18 1.95 1.47 3.53 3.43 3.55.75 0 1.52-.54 1.52-1.3q0-.35-.1-.68c-.09-.3-.1-.66.08-1.02.61-1.26 1.8-1.6 2.76-2.28.42-.3.8-.62.98-.88.46-.7.93-2.13.7-2.84"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 13c-.33.93-.56 3.38-4.28 3.41 0 0-3.3 0-4.28 1.87a4.2 4.2 0 0 0 0 3.72"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
          />
          <path
            d="M8.58 9.45C8.38 7.36 6.78 5.42 6 4.7l-.43-.37a9.96 9.96 0 0 1 12.35-.4c.23.7-.22 2.2-.68 2.9-.17.26-.56.58-.98.88-.95.68-2.15 1.02-2.76 2.28q-.23.55-.08 1.02.1.33.1.69c0 .75-.76 1.3-1.52 1.29-1.96-.02-3.25-1.6-3.42-3.55"
            fill="currentColor"
          />
          <path
            d="M13.44 18.28c.98-1.87 4.28-1.87 4.28-1.87 3.43-.03 3.9-2.12 4.2-3.17a10 10 0 0 1-8.53 8.66c-.32-.67-.7-2.2.05-3.62"
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
            d="M13.44 18.28c.98-1.87 4.28-1.87 4.28-1.87 3.43-.03 3.9-2.12 4.2-3.17a10 10 0 0 1-8.53 8.66c-.32-.67-.7-2.2.05-3.62"
            fill="currentColor"
          />
          <path
            d="m5 5.83-.4-.35-.1-.09a10 10 0 0 0 7.32 16.6 5.7 5.7 0 0 1 .3-4.42c.8-1.52 2.43-2.12 3.47-2.38a10 10 0 0 1 2.06-.28h.05c1.39-.01 1.92-.42 2.17-.7.3-.34.43-.75.6-1.32l.01-.07c.2-.68.84-1.11 1.52-1.08a10 10 0 0 0-2.6-6.47 7 7 0 0 1-.91 2.4c-.34.52-.95.98-1.35 1.27-.3.22-.62.4-.88.55l-.09.05q-.34.19-.6.36a2 2 0 0 0-.7.72q.13.5.15 1.08a2.7 2.7 0 0 1-1.04 2.1c-.55.46-1.27.7-2 .7-2.95-.03-4.68-2.44-4.9-4.92a5 5 0 0 0-.84-2.22A8 8 0 0 0 5 5.83"
            fill="currentColor"
          />
          <path
            d="M8.58 9.45C8.38 7.36 6.78 5.42 6 4.7l-.43-.37a9.96 9.96 0 0 1 12.35-.4c.23.7-.22 2.2-.68 2.9-.17.26-.56.58-.98.88-.95.68-2.15 1.02-2.76 2.28q-.23.55-.08 1.02.1.33.1.69c0 .75-.76 1.3-1.52 1.29-1.96-.02-3.25-1.6-3.42-3.55"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEarth;
