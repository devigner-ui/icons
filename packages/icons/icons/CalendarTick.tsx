import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarTick = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarTick(
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
            d="M7.5 1.5v3m8-3v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 8.59h17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5 18.5q-.01 1.14-.58 2.06a4 4 0 1 1 .58-2.06Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m15.94 18.5.99.99 2.13-1.97"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.11 21.5H7.5c-3.5 0-5-2-5-5V8q0-.98.22-1.8m2.09-2.66A6 6 0 0 1 7.5 3h8c3.5 0 5 2 5 5v7.86a3.98 3.98 0 0 0-6.65 4.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.8 16.2h.02Zm0-3.51h.02Zm3.5.01h.02Z"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 1.2}
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M7.5 1.5v3m8-3v3"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M3 8.59h17"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M21.5 18.5q-.01 1.14-.58 2.06a4 4 0 0 1-3.42 1.94 4 4 0 0 1-2.63-1 4 4 0 0 1-.79-.94 4 4 0 0 1-.58-2.06 4 4 0 0 1 7-2.64 4 4 0 0 1 1 2.64"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.94 18.5.99.99 2.13-1.97"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M20.5 8v7.86a3.98 3.98 0 0 0-7 2.64 4 4 0 0 0 1.37 3H7.5c-3.5 0-5-2-5-5V8c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.8 16.2h.02m-.02-3.51h.02m3.48.01h.02"
              opacity={duotone ? "0.4" : "1"}
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
              d="M18.02 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m2.07 3.57-2.13 1.97a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.76.76 0 0 1 1.06.04c.28.3.26.77-.04 1.06"
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
              d="M18.02 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m2.07 3.57-2.13 1.97a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.76.76 0 0 1 1.06.04c.28.3.26.77-.04 1.06"
              fill="currentColor"
            />
            <path
              d="M19.02 9.84h-16a1 1 0 0 0-1 1V17c0 3 1.5 5 5 5h4.93a1 1 0 0 0 .95-1.32 6 6 0 0 1-.37-1.68 5.5 5.5 0 0 1 6.36-5.43 1 1 0 0 0 1.14-.98v-1.74a1 1 0 0 0-1.01-1.01M8.23 18.21q-.3.28-.71.29-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71.14-.14.33-.21a1 1 0 0 1 1.09.21q.28.3.29.71-.01.4-.29.71m0-3.5-.15.12-.18.09-.18.06-.2.02q-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1 1 0 0 1 1.27-.12l.15.12q.28.3.29.71-.01.4-.29.71m3.5 0q-.3.28-.71.29-.4-.01-.71-.29a1 1 0 0 1-.29-.71q.01-.4.29-.71a1.05 1.05 0 0 1 1.42 0q.28.3.29.71-.01.4-.29.71"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarTick;
