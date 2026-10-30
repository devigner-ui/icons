import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCartLarge = forwardRef<SVGSVGElement, IconProps>(
  function IconCartLarge(
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
            d="M8.45 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M17.45 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M11.95 9h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m2.95 3 .26.09c1.32.44 1.98.66 2.36 1.18.38.53.38 1.23.38 2.61V9.5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h2m6 0h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.95 6h3m-2.5 7h10.52c.96 0 1.44 0 1.82-.25.37-.25.56-.69.94-1.57l.43-1c.8-1.89 1.21-2.83.77-3.5C20.48 6 19.45 6 17.4 6h-4.45"
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
              d="m2.95 3 .26.09c1.32.44 1.98.66 2.36 1.18.38.53.38 1.23.38 2.61V9.5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.45 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.45 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.95 9h-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M5.95 6H17.4c2.06 0 3.08 0 3.53.67.44.68.04 1.62-.77 3.51l-.43 1c-.38.88-.57 1.33-.94 1.57-.38.25-.86.25-1.82.25H5.95"
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
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.59 3.16c.13-.39.55-.6.95-.47l.26.09.04.01q.95.3 1.57.58c.45.2.83.46 1.12.86s.41.85.47 1.34q.06.68.05 1.67V9.9c0 1.44 0 2.44.1 3.2.1.73.28 1.11.56 1.4.28.27.66.45 1.4.55.75.1 1.75.1 3.19.1h7a.75.75 0 0 1 0 1.5h-7.05c-1.37 0-2.47 0-3.34-.12a3.7 3.7 0 0 1-2.26-.98c-.6-.6-.86-1.36-.98-2.26-.12-.86-.12-1.97-.12-3.33V7.28c0-.71 0-1.18-.04-1.54-.04-.34-.11-.5-.2-.63a1.3 1.3 0 0 0-.53-.38c-.33-.15-.78-.3-1.45-.53l-.27-.09a.75.75 0 0 1-.47-.95"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.05 6.4v3.5a27 27 0 0 0 .15 3.5h10.12c.96 0 1.44 0 1.82-.25.37-.24.56-.69.94-1.57l.43-1c.8-1.89 1.21-2.83.77-3.5-.45-.68-1.48-.68-3.53-.68z"
              fill="currentColor"
            />
            <path
              d="M8.55 9.4c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M8.8 18.4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
            <path
              d="M19.3 19.9a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
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
              d="M2.59 3.16c.13-.39.55-.6.95-.47l.3.1q.95.3 1.57.58c.45.2.83.46 1.12.86s.41.85.47 1.34l.05.83h10.7c2.06 0 3.08 0 3.53.67.44.68.04 1.62-.77 3.51l-.43 1c-.38.88-.57 1.33-.94 1.57-.38.25-.86.25-1.82.25H7.2c.1.54.27.86.5 1.1.29.27.67.45 1.4.55.76.1 1.76.1 3.2.1h7a.75.75 0 0 1 0 1.5h-7.05c-1.37 0-2.47 0-3.34-.12a3.7 3.7 0 0 1-2.26-.98c-.6-.6-.86-1.36-.98-2.26-.12-.86-.12-1.97-.12-3.33V7.28c0-.71 0-1.18-.04-1.54-.04-.34-.1-.5-.2-.63a1.3 1.3 0 0 0-.53-.38c-.33-.15-.78-.3-1.45-.53l-.27-.09a.75.75 0 0 1-.47-.95M9.3 8.65a.75.75 0 1 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M8.8 18.4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
            <path
              d="M17.8 18.4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCartLarge;
