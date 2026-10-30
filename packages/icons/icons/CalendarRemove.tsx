import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarRemove(
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
            d="M7.5 1.5v3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 1.5v3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M3 8.59h17"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.5 18.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m18.57 19.61-2.12-2.11"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m18.55 17.52-2.12 2.12"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.5 12.51V8c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7.86a3.98 3.98 0 0 0-7 2.64 4 4 0 0 0 1.37 3H7.5c-3.5 0-5-2-5-5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.5 13.2z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.8 13.2z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.8 16.2z"
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
              d="M7.47 1.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.47 1.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.97 8.59h17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.47 22.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m18.54 19.61-2.12-2.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m18.52 17.52-2.12 2.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.47 8v7.86a3.98 3.98 0 0 0-7 2.64 4 4 0 0 0 1.37 3H7.47c-3.5 0-5-2-5-5V8c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.47 13.2h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.76 13.2h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.76 16.2h.02"
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
              d="M15.77 3.56V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-6.5V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25a.5.5 0 0 0 .5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.02 10.84v1.74a.98.98 0 0 1-1.14.98 5.5 5.5 0 0 0-6.36 5.43c0 .46.18 1.1.37 1.68a1 1 0 0 1-.95 1.32H7.02c-3.5 0-5-2-5-5v-6.16a1 1 0 0 1 1-1h16c.55.01 1 .46 1 1.01"
              fill="currentColor"
            />
            <path
              d="M18.02 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.6 5.64a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.5-.5a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.5.5.53.53c.29.3.29.77 0 1.06"
              fill="currentColor"
            />
            <path
              d="M7.52 15q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.27-.12l.15.12q.28.3.29.71-.01.4-.29.71l-.15.12-.18.09-.18.06z"
              fill="currentColor"
            />
            <path
              d="M11.02 15q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71-.01.4-.29.71-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M7.52 18.5q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71.14-.14.33-.21a1 1 0 0 1 1.09.21q.28.3.29.71-.01.4-.29.71-.3.28-.71.29"
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
              d="M15.77 3.56V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-6.5V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25a.5.5 0 0 0 .5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              d="M19.02 9.84h-16a1 1 0 0 0-1 1V17c0 3 1.5 5 5 5h4.93a1 1 0 0 0 .95-1.32 6 6 0 0 1-.37-1.68 5.5 5.5 0 0 1 6.36-5.43 1 1 0 0 0 1.14-.98v-1.74a1 1 0 0 0-1.01-1.01M8.23 17.71q-.3.28-.71.29a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.21-1.09q.07-.19.21-.33.15-.14.33-.21a1 1 0 0 1 1.09.21q.13.14.21.33a1 1 0 0 1-.21 1.09m0-3.5q-.3.28-.71.29a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.29-.71 1 1 0 0 1 .08-.38q.07-.18.21-.33.15-.13.33-.21c.36-.15.81-.07 1.09.21q.13.15.21.33a1 1 0 0 1 .08.38q-.01.4-.29.71m3.71-.33q-.08.18-.21.33-.15.13-.33.21a1 1 0 0 1-.38.08q-.4-.01-.71-.29-.13-.15-.21-.33a1 1 0 0 1-.08-.38q.01-.4.29-.71a1 1 0 0 1 1.09-.21q.18.07.33.21.28.3.29.71 0 .2-.08.38"
              fill="currentColor"
            />
            <path
              d="M18.02 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.6 5.64a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.54.5-.5a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarRemove;
