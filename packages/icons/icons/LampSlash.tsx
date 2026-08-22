import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLampSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconLampSlash(
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
              d="M20.7 2.48 4.85 18.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.92 13a8 8 0 0 1-.67-3.1c0-4.91 4.22-8.78 9.02-7.73a7.3 7.3 0 0 1 3.76 2.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.73 7.3c1.22 3.88-.75 7.78-3.54 9.57v1.16c0 .29.1.96-.9.96h-5.2c-1.03 0-.9-.43-.9-.96v-1.16q-.72-.45-1.36-1.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.17 22a13 13 0 0 1 7 0"
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
              d="m15.93 22-.19-.03a11 11 0 0 0-6.13 0 .7.7 0 0 1-.86-.48.7.7 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0a.7.7 0 0 1 .48.86.7.7 0 0 1-.68.51"
              fill="currentColor"
            />
            <path
              d="M4.85 19.08a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L20.17 1.95a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L5.38 18.86a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.3 3.42 6.16 14.56a8 8 0 0 1-1.52-4.51A8.03 8.03 0 0 1 14.5 2.2q1.53.34 2.8 1.22"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.84 16.92v.7c.01.26.03.76-.36 1.16q-.42.43-1.23.43h-5.13c-.41 0-.93-.05-1.28-.4-.33-.35-.32-.78-.31-1.06v-.83q-.68-.45-1.25-1.02L18.62 4.56q.76.8 1.26 1.8c2.02 4.06.07 8.47-3.04 10.56"
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
              d="m16.37 4.35-9.3 9.3c-.47.47-1.29.37-1.59-.23a7.6 7.6 0 0 1-.84-3.37A8.03 8.03 0 0 1 14.5 2.2q.82.18 1.57.52a1 1 0 0 1 .3 1.63"
              fill="currentColor"
            />
            <path
              d="M16.12 20.63a12.6 12.6 0 0 0-6.9 0 .7.7 0 0 0-.48.86.7.7 0 0 0 .86.48 11 11 0 0 1 6.32.03.7.7 0 0 0 .2-1.37"
              fill="currentColor"
            />
            <path
              d="M21.23 1.95a.75.75 0 0 0-1.06 0L4.32 17.8a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l2.46-2.46q.33.27.69.52v.83c-.01.28-.02.71.31 1.06.35.35.87.4 1.28.4h5.13q.81 0 1.23-.43c.39-.4.37-.9.36-1.16v-.7c3.11-2.09 5.06-6.5 3.04-10.56a8 8 0 0 0-.79-1.22l2.13-2.13c.3-.29.3-.77.01-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLampSlash;
