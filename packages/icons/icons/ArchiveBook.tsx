import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArchiveBook = forwardRef<SVGSVGElement, IconProps>(
  function IconArchiveBook(
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
            d="M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.05"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 5.99v3.87a.5.5 0 0 1-.84.37l-2.32-2.14a.5.5 0 0 0-.68 0l-2.32 2.14a.5.5 0 0 1-.84-.37V2h7"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.25 14h4.25"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 18h8.5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
              d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.5 2v7.86a.5.5 0 0 1-.84.37l-2.32-2.14a.5.5 0 0 0-.68 0l-2.32 2.14a.5.5 0 0 1-.84-.37V2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.25 14h4.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 18h8.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
              fill="currentColor"
            />
            <path
              d="M15.5 2v7.86a.5.5 0 0 1-.84.37l-2.32-2.14a.5.5 0 0 0-.68 0l-2.32 2.14a.5.5 0 0 1-.84-.37V2z"
              fill="currentColor"
            />
            <path
              d="M17.5 14.75h-4.25a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.25c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.5 18.75H9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8.5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M14.93 2.5v5.9a.5.5 0 0 1-.84.37l-1.75-1.61a.5.5 0 0 0-.68 0l-1.75 1.6a.5.5 0 0 1-.84-.36V2.5c0-.28.22-.5.5-.5h4.86c.28 0 .5.22.5.5"
              fill="currentColor"
            />
            <path
              d="M16.98 2.06c-.29-.04-.55.21-.55.5v6.02a1.92 1.92 0 0 1-3.22 1.41l-.87-.8a.5.5 0 0 0-.68 0l-.87.8a1.9 1.9 0 0 1-2.07.35c-.7-.31-1.15-1-1.15-1.76V2.56c0-.29-.26-.54-.55-.5C4.22 2.41 3 4.3 3 7v10c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5V7c0-2.7-1.22-4.59-4.02-4.94m.52 16.69H9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-4.25a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.25c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArchiveBook;
