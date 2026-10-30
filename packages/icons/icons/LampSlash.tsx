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
            d="M20.03 2.48 4.18 18.33"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.6 2.17a7.3 7.3 0 0 1 3.76 2.18"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.25 13A7.9 7.9 0 0 1 9.38 2.51"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.06 7.3c1.22 3.88-.75 7.78-3.54 9.57v1.16c0 .29.1.96-.9.96h-5.2c-1.03 0-.9-.43-.9-.96v-1.16q-.72-.45-1.36-1.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.5 22a13 13 0 0 1 7 0"
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
              d="M19.9 2.48 4.05 18.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.12 13a8 8 0 0 1-.67-3.1c0-4.91 4.22-8.78 9.02-7.73a7.3 7.3 0 0 1 3.76 2.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.93 7.3c1.22 3.88-.75 7.78-3.54 9.57v1.16c0 .29.1.96-.9.96h-5.2c-1.03 0-.9-.43-.9-.96v-1.16q-.72-.45-1.36-1.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.37 22a13 13 0 0 1 7 0"
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
              d="m15.13 22.15-.19-.03a11 11 0 0 0-6.13 0 .7.7 0 0 1-.86-.48.7.7 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0a.7.7 0 0 1 .48.86.7.7 0 0 1-.68.51"
              fill="currentColor"
            />
            <path
              d="M4.05 19.23a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L19.37 2.1a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L4.58 19.01a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 3.57 5.36 14.71a8 8 0 0 1-1.52-4.51 8.03 8.03 0 0 1 9.86-7.85q1.53.34 2.8 1.22"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.04 17.07v.7c.01.26.03.76-.36 1.16q-.42.43-1.23.43H9.32c-.41 0-.93-.05-1.28-.4-.33-.35-.32-.78-.31-1.06v-.83q-.68-.45-1.25-1.02L17.82 4.71q.76.8 1.26 1.8c2.02 4.06.07 8.47-3.04 10.56"
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
              d="m15.57 4.5-9.3 9.3c-.47.47-1.29.37-1.59-.23a7.6 7.6 0 0 1-.84-3.37 8.03 8.03 0 0 1 9.86-7.85q.82.18 1.57.52a1 1 0 0 1 .3 1.63"
              fill="currentColor"
            />
            <path
              d="M15.32 20.78a12.6 12.6 0 0 0-6.9 0 .7.7 0 0 0-.48.86.7.7 0 0 0 .86.48 11 11 0 0 1 6.32.03.7.7 0 0 0 .2-1.37"
              fill="currentColor"
            />
            <path
              d="M20.43 2.1a.75.75 0 0 0-1.06 0L3.52 17.95a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l2.46-2.46q.33.27.69.52v.83c-.01.28-.02.71.31 1.06.35.35.87.4 1.28.4h5.13q.81 0 1.23-.43c.39-.4.37-.9.36-1.16v-.7c3.11-2.09 5.06-6.5 3.04-10.56a8 8 0 0 0-.79-1.22l2.13-2.13c.3-.29.3-.77.01-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLampSlash;
