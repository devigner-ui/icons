import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoundSortVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconRoundSortVertical(
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
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9.5 8v8m0 0L7 13.25M9.5 16l2.5-2.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 16V8m0 0L12 10.75M14.5 8l2.5 2.75"
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
              d="M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0"
              fill="currentColor"
            />
            <path
              d="M11.45 10.25a.75.75 0 1 0 1.1 1l1.2-1.31V16a.75.75 0 0 0 1.5 0V9.94l1.2 1.31a.75.75 0 1 0 1.1-1l-2.5-2.75a.75.75 0 0 0-1.1 0z"
              fill="currentColor"
            />
            <path
              d="M7.55 12.75a.75.75 0 1 0-1.1 1l2.5 2.75a.75.75 0 0 0 1.1 0l2.5-2.75a.75.75 0 0 0-1.1-1l-1.2 1.31V8a.75.75 0 1 0-1.5 0v6.06z"
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-7.5-4.75q.33 0 .55.25l2.5 2.75a.75.75 0 0 1-1.1 1l-1.2-1.31V16a.75.75 0 0 1-1.5 0V9.94l-1.2 1.31a.75.75 0 0 1-1.1-1l2.5-2.75a.8.8 0 0 1 .55-.25m-5 0c.41 0 .75.34.75.75v6.06l1.2-1.31a.75.75 0 0 1 1.1 1l-2.5 2.75a.75.75 0 0 1-1.1 0l-2.5-2.75a.75.75 0 0 1 1.1-1l1.2 1.31V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRoundSortVertical;
