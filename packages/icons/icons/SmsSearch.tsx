import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmsSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconSmsSearch(
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
              d="M12.67 20.5h-5c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.67 9-3.13 2.5a3.2 3.2 0 0 1-3.75 0L7.67 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M18.87 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m22.67 22-1-1"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M17.67 20.5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.26 8.53c.25.33.2.8-.12 1.06L15 12.09a3.9 3.9 0 0 1-4.69 0L7.2 9.59a.75.75 0 1 1 .94-1.18l3.12 2.5c.75.6 2.06.6 2.81 0l3.13-2.5c.33-.25.8-.2 1.06.12"
              fill="currentColor"
            />
            <path
              d="m23.33 21.47-.74-.74a3.7 3.7 0 1 0-1.06 1.06l.74.74q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
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
              d="M17.67 3h-10c-3 0-5 1.5-5 5v7.96a4.14 4.14 0 0 0 4.14 4.14h6.26c.58 0 1.08-.49 1.02-1.07a5.54 5.54 0 0 1 3.72-5.72 5.5 5.5 0 0 1 3.53.02 1 1 0 0 0 1.33-.94V8c0-3.5-2-5-5-5m.47 5.59-3.13 2.5c-.66.53-1.5.79-2.34.79s-1.69-.26-2.34-.79L7.2 8.59a.77.77 0 0 1-.12-1.06.75.75 0 0 1 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5a.74.74 0 0 1 1.05.12c.26.33.21.8-.11 1.06"
              fill="currentColor"
            />
            <path
              d="m23.32 21.45-.75-.75q.6-.9.62-2.06a3.76 3.76 0 1 0-1.7 3.13l.75.75q.23.22.54.22.3 0 .54-.22c.3-.29.3-.77 0-1.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmsSearch;
