import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarDate = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarDate(
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
              d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12v2c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 4V2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 4V2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 9h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m9 14.5 1.5-1.5v4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0"
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
              d="M6.96 2c.42 0 .76.31.76.7v1.39l2.26-.01h6.3V2.7c0-.38.34-.69.76-.69s.76.31.76.7v1.45c1.45.1 2.4.37 3.1 1 .7.65.98 1.52 1.1 2.85v1H2V8c.12-1.33.4-2.2 1.1-2.84s1.65-.9 3.1-1V2.68c0-.38.34-.69.76-.69"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 14v-2c0-.84-.01-2.33-.03-3H2.01c-.02.67 0 2.16 0 3v2c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 12.25c-.97 0-1.75.78-1.75 1.75v2a1.75 1.75 0 1 0 3.5 0v-2c0-.97-.78-1.75-1.75-1.75m0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25"
              fill="currentColor"
            />
            <path
              d="M11.25 13a.75.75 0 0 0-1.28-.53l-1.5 1.5a.75.75 0 1 0 1.06 1.06l.22-.22V17a.75.75 0 0 0 1.5 0z"
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
              d="M7.75 2.5a.75.75 0 1 0-1.5 0v1.58c-1.44.12-2.38.4-3.08 1.1-.7.69-.98 1.63-1.1 3.07h19.85c-.11-1.44-.4-2.38-1.1-3.08-.69-.7-1.63-.97-3.07-1.09V2.5a.75.75 0 0 0-1.5 0v1.51L14 4h-4l-2.25.01z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m22 12-.01-2.25H2V14c0 3.77 0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14zm-8 .25c-.97 0-1.75.78-1.75 1.75v2a1.75 1.75 0 1 0 3.5 0v-2c0-.97-.78-1.75-1.75-1.75m0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25m-3.21-1.44c.28.11.46.39.46.7V17a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5a.8.8 0 0 1 .82-.16"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarDate;
