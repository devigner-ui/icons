import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudSnowfall = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudSnowfall(
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
            d="M12 14.5v7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m9 16.23 6 3.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M15 16.23 9 19.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12.85a5.7 5.7 0 0 1-4.5 5.52m-8.83-7.63a4.3 4.3 0 0 0-2.38-.71A4.26 4.26 0 0 0 2 14.26a4.26 4.26 0 0 0 4.29 4.24m8.1-10.97a5.8 5.8 0 0 1 3.76-.03M7.11 10.1a5.68 5.68 0 0 1 5.37-7.6 5.7 5.7 0 0 1 5.68 5m0 0q1.03.37 1.84 1.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M6.29 18.5A4.26 4.26 0 0 1 2 14.26a4.26 4.26 0 0 1 5.12-4.15m7.26-2.58a5.8 5.8 0 0 1 3.78-.03M7.12 10.1a5.68 5.68 0 0 1 5.36-7.6 5.7 5.7 0 0 1 5.68 5M7.12 10.1q.85.16 1.55.63m9.49-3.23A5.65 5.65 0 0 1 22 12.85a5.7 5.7 0 0 1-4.5 5.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 14.5v7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m9 16.23 6 3.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 16.23 9 19.7"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 13.35c.42 0 .75.34.75.75v2.16l1.87-1.08a.75.75 0 1 1 .75 1.3l-1.87 1.08 1.88 1.09a.75.75 0 0 1-.75 1.3l-1.88-1.09v2.24a.75.75 0 0 1-1.5 0v-2.24l-1.87 1.08a.75.75 0 0 1-.75-1.3l1.87-1.08-1.87-1.08a.75.75 0 0 1 .75-1.3l1.87 1.08V14.1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.29 18.1A5.7 5.7 0 0 0 22 12.45c0-2.47-1.6-4.57-3.84-5.34a5.7 5.7 0 0 0-5.68-5.01 5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 13.87a4.26 4.26 0 0 0 4.29 4.23z"
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
              d="M12 13.35c.42 0 .75.34.75.75v2.16l1.87-1.08a.75.75 0 1 1 .75 1.3l-1.87 1.08 1.88 1.09a.75.75 0 1 1-.75 1.3l-1.88-1.09v2.24a.75.75 0 0 1-1.5 0v-2.24l-1.87 1.08a.75.75 0 0 1-.75-1.3l1.87-1.08-1.87-1.08a.75.75 0 0 1 .75-1.3l1.87 1.08V14.1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M7.56 17.56a2.25 2.25 0 0 1 2.22-3.84 2.25 2.25 0 0 1 4.44 0 2.25 2.25 0 0 1 2.22 3.84l-.44.54.89-.03A5.67 5.67 0 0 0 22 12.45c0-2.47-1.6-4.57-3.84-5.34a5.7 5.7 0 0 0-5.68-5.01 5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 13.87a4.26 4.26 0 0 0 4.29 4.23H8z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudSnowfall;
