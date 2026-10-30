import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarAddCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarAddCircle(
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
            d="M7.47 1.5v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.47 1.5v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.97 8.59h17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.47 22.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.96 18.55h-2.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.47 17.09v2.99"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.08 21.5H7.47c-3.5 0-5-2-5-5V8q0-.98.22-1.8m2.09-2.66A6 6 0 0 1 7.47 3h8c3.5 0 5 2 5 5v7.86a3.98 3.98 0 0 0-6.65 4.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.47 13.2h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.76 13.2h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.76 16.2h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="M18.96 18.55h-2.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.47 17.09v2.99"
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
              d="M15.77 3.41V1.85a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-6.5v-1.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25a.5.5 0 0 0 .5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.02 10.69v1.74a.98.98 0 0 1-1.14.98 5.5 5.5 0 0 0-6.36 5.43c0 .46.18 1.1.37 1.68a1 1 0 0 1-.95 1.32H7.02c-3.5 0-5-2-5-5v-6.16a1 1 0 0 1 1-1h16c.55.01 1 .46 1 1.01"
              fill="currentColor"
            />
            <path
              d="M7.52 14.85q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.27-.12l.15.12q.28.3.29.71-.01.4-.29.71l-.15.12-.18.09-.18.06z"
              fill="currentColor"
            />
            <path
              d="M11.02 14.85q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71-.01.4-.29.71-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M7.52 18.35q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71.14-.14.33-.21a1 1 0 0 1 1.09.21q.28.3.29.71-.01.4-.29.71-.3.28-.71.29"
              fill="currentColor"
            />
            <path
              d="M20.85 16.02a4 4 0 1 0-5.66 5.68 4 4 0 0 0 5.66-5.68m-.76 3.39a.7.7 0 0 1-.53.22h-.74v.78q0 .32-.22.53a.7.7 0 0 1-.53.22.76.76 0 0 1-.75-.75v-.78h-.75a.75.75 0 1 1 0-1.5h.75v-.71a.75.75 0 1 1 1.5 0v.71h.74a.75.75 0 0 1 .53 1.28"
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
              d="M15.77 3.41V1.85a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-6.5v-1.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25a.5.5 0 0 0 .5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              d="M19.02 9.69h-16a1 1 0 0 0-1 1v6.16c0 3 1.5 5 5 5h4.93a1 1 0 0 0 .95-1.32 6 6 0 0 1-.37-1.68 5.5 5.5 0 0 1 6.36-5.43 1 1 0 0 0 1.14-.98V10.7a1 1 0 0 0-1.01-1.01M8.23 17.56q-.15.14-.33.21a1 1 0 0 1-.38.08 1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.29-.71l.02-.19.06-.19.09-.18.12-.15q.15-.14.33-.21a1 1 0 0 1 .76 0q.18.08.33.21l.12.15.09.18.06.19.02.19q-.01.4-.29.71m0-3.5q-.15.13-.33.21a1 1 0 0 1-.38.08 1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.29-.71q.01-.4.29-.71.15-.13.33-.21a1 1 0 0 1 .76 0q.18.07.33.21l.12.15.09.18.06.18.02.2q-.01.4-.29.71m3.5 0q-.3.28-.71.29a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.29-.71l.02-.2.06-.18.09-.18.12-.15a1.05 1.05 0 0 1 1.42 0l.12.15.09.18.06.18.02.2q-.01.4-.29.71"
              fill="currentColor"
            />
            <path
              d="M20.85 16.02a4 4 0 1 0-5.66 5.68 4 4 0 0 0 5.66-5.68m-.76 3.39a.7.7 0 0 1-.53.22h-.74v.78q0 .32-.22.53a.7.7 0 0 1-.53.22.76.76 0 0 1-.75-.75v-.78h-.75a.75.75 0 1 1 0-1.5h.75v-.71a.75.75 0 1 1 1.5 0v.71h.74a.75.75 0 0 1 .53 1.28"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarAddCircle;
