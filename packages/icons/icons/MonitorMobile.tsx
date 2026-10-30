import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMonitorMobile = forwardRef<SVGSVGElement, IconProps>(
  function IconMonitorMobile(
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
            d="M2 6.74c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-1.89"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 21.47v-4.52"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 12.95h8"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.74 21.47H10"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 12.8c0-2.37-.6-2.96-2.96-2.96h-3.55c-2.37 0-2.96.59-2.96 2.96v5.71c0 2.37.59 2.96 2.96 2.96h3.55c2.37 0 2.96-.59 2.96-2.96v-1.57"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.24 18.25h.01"
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
              d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 21.47v-4.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12.95h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.74 21.47H10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.24 18.25h.01"
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
              d="M16.8 2H6.21a4.2 4.2 0 0 0-4.2 4.19v6.37a4.2 4.2 0 0 0 4.19 4.19h3.6a1 1 0 0 1 1 1v.82a1 1 0 0 1-1 1H7.55a.7.7 0 0 0-.71.71c0 .39.32.71.71.71h7.93c.39 0 .71-.32.71-.71a.7.7 0 0 0-.71-.71h-2.25a1 1 0 0 1-1-1v-.82a1 1 0 0 1 1-1h3.57a4.2 4.2 0 0 0 4.19-4.19V6.19A4.2 4.2 0 0 0 16.8 2"
              fill="currentColor"
            />
            <path
              d="M19.64 9.5h-5.29c-1.73 0-2.36.63-2.36 2.38v7.73c0 1.76.62 2.38 2.36 2.38h5.29c1.73 0 2.36-.63 2.36-2.38v-7.73c0-1.76-.62-2.38-2.36-2.38M17 20.32a1.1 1.1 0 0 1-1.1-1.1c0-.61.49-1.1 1.1-1.1s1.1.49 1.1 1.1-.49 1.1-1.1 1.1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.1 19.22c0 .61-.49 1.1-1.1 1.1a1.1 1.1 0 0 1-1.1-1.1c0-.61.49-1.1 1.1-1.1s1.1.5 1.1 1.1"
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
              d="M20.99 9.71a4 4 0 0 0-1.35-.21h-5.28c-1.74 0-2.36.62-2.36 2.38v7.74q0 .86.22 1.38c.31.72.97 1 2.14 1h5.28c1.74 0 2.36-.63 2.36-2.38v-7.74c0-1.19-.28-1.86-1.01-2.17M18 19.75h-2l-.07-.01a.6.6 0 0 1-.39-.16.7.7 0 0 1-.29-.58c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M20.99 6.19V7a1 1 0 0 1-1 1h-5.63q-3.85.01-3.86 3.88V21a1 1 0 0 1-1 1H7.55a.7.7 0 1 1 0-1.42H9.5v-3.83H6a4.2 4.2 0 0 1-3.99-4.19V6.19A4.2 4.2 0 0 1 6.21 2H16.8a4.2 4.2 0 0 1 4.19 4.19"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMonitorMobile;
