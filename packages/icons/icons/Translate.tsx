import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTranslate = forwardRef<SVGSVGElement, IconProps>(
  function IconTranslate(
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
            d="m19.06 18.67-2.14-4.27-2.14 4.27"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.17 17.91h3.52"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.92 21.02a5.07 5.07 0 1 1 2.09-4.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.95 8.93q.08 3.1-3.02 3.02H5.01Q2 12.03 2 8.93V5.01q0-3.02 3.02-3.02h3.92q3.1 0 3.02 3.02"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 5.85H4.96"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.97 5.17v.68"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.99 5.84a3.1 3.1 0 0 1-3.05 3.17"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.01 9.01c-.73 0-1.39-.39-1.85-1.01"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 15a7 7 0 0 0 7 7l-1.05-1.75"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 9a7 7 0 0 0-7-7l1.05 1.75"
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
              d="m19.06 18.67-2.13-4.27-2.14 4.27"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.17 17.91h3.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.93 22a5.08 5.08 0 1 1 0-10.16 5.08 5.08 0 0 1 0 10.16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.03 2h3.9q3.1 0 3.02 3.02v3.92q.08 3.1-3.02 3.02h-3.9q-3.02.07-3.02-3.03V5.01Q2 2 5.03 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.01 5.85H4.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.97 5.17v.68"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99 5.84a3.1 3.1 0 0 1-3.05 3.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.01 9.01c-.73 0-1.39-.39-1.85-1.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 15a7 7 0 0 0 7 7l-1.05-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 9a7 7 0 0 0-7-7l1.05 1.75"
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
              d="M16.93 22a5.08 5.08 0 1 1 0-10.16 5.08 5.08 0 0 1 0 10.16"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.03 2h3.9q3.1 0 3.02 3.02v3.92q.08 3.1-3.02 3.02h-3.9q-3.02.07-3.02-3.03V5.01Q2 2 5.03 2"
              fill="currentColor"
            />
            <path
              d="M9.01 8.26q-.46-.01-.87-.32.38-.6.52-1.34H9c.41 0 .75-.34.75-.75A.76.76 0 0 0 9 5.1H7.71a.75.75 0 0 0-.74-.68c-.39 0-.7.3-.74.68H4.94a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.17a2.3 2.3 0 0 1-2.18 1.66.76.76 0 0 0-.75.75c0 .41.34.75.75.75a3.7 3.7 0 0 0 2.18-.72q.85.7 1.9.72c.4 0 .74-.34.74-.75a.75.75 0 0 0-.74-.75"
              fill="currentColor"
            />
            <path
              d="M9 22.75A7.76 7.76 0 0 1 1.25 15c0-.41.34-.75.75-.75s.75.34.75.75a6.26 6.26 0 0 0 4.83 6.09l-.27-.45a.75.75 0 1 1 1.29-.77l1.05 1.75c.14.23.14.52.01.75a.8.8 0 0 1-.66.38"
              fill="currentColor"
            />
            <path
              d="M22 9.75a.76.76 0 0 1-.75-.75 6.26 6.26 0 0 0-4.83-6.09l.27.45a.75.75 0 1 1-1.29.77l-1.05-1.75a.75.75 0 0 1 .64-1.13A7.76 7.76 0 0 1 22.74 9a.74.74 0 0 1-.74.75"
              fill="currentColor"
            />
            <path
              d="m19.73 18.33-2.14-4.27a.8.8 0 0 0-.67-.42.8.8 0 0 0-.67.41l-2.14 4.27a.75.75 0 0 0 .34 1.01 1 1 0 0 0 .33.08c.27 0 .54-.15.67-.41l.17-.34h2.6l.16.34c.2.37.64.52 1.01.34a.75.75 0 0 0 .34-1.01m-3.35-1.17.55-1.09.55 1.09z"
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
              d="M8.93 2h-3.9Q1.98 2 1.99 5.02v3.92q0 3.09 3.02 3.01h3.92q3.09.08 3.01-3.02V5.02Q12.03 1.99 8.93 2m.08 7.76c-.68 0-1.34-.26-1.89-.72a3.7 3.7 0 0 1-2.18.72.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75 1.02 0 1.87-.7 2.18-1.66H4.94a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.3a.75.75 0 0 1 .73-.68c.4 0 .7.3.74.68h1.3a.75.75 0 0 1 0 1.5h-.34a4 4 0 0 1-.53 1.34q.4.31.87.32c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9 22.75A7.76 7.76 0 0 1 1.25 15c0-.41.34-.75.75-.75s.75.34.75.75a6.26 6.26 0 0 0 4.83 6.09l-.27-.45a.75.75 0 1 1 1.29-.77l1.05 1.75c.14.23.14.52.01.75a.8.8 0 0 1-.66.38"
              fill="currentColor"
            />
            <path
              d="M22 9.75a.76.76 0 0 1-.75-.75 6.26 6.26 0 0 0-4.83-6.09l.27.45a.75.75 0 1 1-1.29.77l-1.05-1.75a.8.8 0 0 1 0-.75.8.8 0 0 1 .65-.38A7.76 7.76 0 0 1 22.75 9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M16.93 11.85a5.08 5.08 0 1 0 0 10.16 5.08 5.08 0 0 0 0-10.16m2.47 7.49a.75.75 0 0 1-1-.34l-.18-.34h-2.59l-.17.34a.75.75 0 0 1-1 .33.76.76 0 0 1-.34-1.01l2.14-4.27a.75.75 0 0 1 1.34.01l2.14 4.27c.18.37.03.82-.34 1.01"
              fill="currentColor"
            />
            <path d="M16.38 17.16h1.1l-.56-1.09z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconTranslate;
