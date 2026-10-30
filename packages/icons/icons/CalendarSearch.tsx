import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarSearch(
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
            d="M22 13.75v-2c0-3.77 0-5.66-1.17-6.83S17.77 3.75 14 3.75m0 18h-4c-3.77 0-5.66 0-6.83-1.17S2 17.52 2 13.75v-2c0-3.77 0-5.66 1.17-6.83S6.23 3.75 10 3.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 3.75v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 3.75v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            cx="18"
            cy="17.75"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m20.5 20.25 1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M21.5 8.75H10.75M2 8.75h3.88"
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
              d="M22 13.75v-2c0-3.77 0-5.66-1.17-6.83S17.77 3.75 14 3.75h-4c-3.77 0-5.66 0-6.83 1.17S2 7.98 2 11.75v2c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 3.75v-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 3.75v-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 8.75h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="18"
              cy="17.75"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m20.5 20.25 1.5 1.5"
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
              d="M6.16 1.2c.42 0 .76.31.76.7v1.39l2.26-.01h6.3V1.9c0-.38.34-.69.76-.69s.76.31.76.7v1.45c1.45.1 2.4.37 3.1 1 .7.65.98 1.52 1.1 2.85v1h-20V7.2c.12-1.33.4-2.2 1.1-2.84s1.65-.9 3.1-1V1.88c0-.38.34-.69.76-.69"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.2 13.2v-2c0-.84-.01-2.33-.03-3H1.21c-.02.67 0 2.16 0 3v2c0 3.77 0 5.66 1.17 6.83S5.43 21.2 9.2 21.2h4c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.95 15.7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-3.75 2.25a3.75 3.75 0 1 1 6.88 2.07l1.4 1.4a.75.75 0 1 1-1.06 1.06l-1.4-1.4q-.9.61-2.07.62a3.75 3.75 0 0 1-3.75-3.75"
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
              d="M17.6 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-3.75 2.25a3.75 3.75 0 1 1 6.88 2.07l1.4 1.4a.75.75 0 1 1-1.06 1.06l-1.4-1.4q-.9.61-2.07.62a3.75 3.75 0 0 1-3.75-3.75"
              fill="currentColor"
            />
            <path
              d="M7.35 2.25a.75.75 0 1 0-1.5 0v1.58c-1.44.12-2.38.4-3.08 1.1-.7.69-.98 1.63-1.1 3.07h19.85c-.11-1.44-.4-2.38-1.1-3.08-.69-.7-1.63-.97-3.07-1.09V2.25a.75.75 0 0 0-1.5 0v1.51l-2.25-.01h-4l-2.25.01z"
              fill="currentColor"
            />
            <path
              d="M21.6 11.75v2.6a5.24 5.24 0 1 0-7.4 7.4H9.6c-3.77 0-5.66 0-6.83-1.17S1.6 17.52 1.6 13.75v-2l.01-2.25H21.6z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarSearch;
