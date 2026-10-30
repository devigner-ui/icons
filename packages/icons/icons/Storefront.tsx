import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStorefront = forwardRef<SVGSVGElement, IconProps>(
  function IconStorefront(
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
            d="M1.97 5.95v-.86c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18a3.4 3.4 0 0 1 1.75 2.78V22H4.08a2.1 2.1 0 0 1-2.1-2.07v-9.91"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.97 15.06v3.78c0 2.16-1 3.16-3.16 3.16H12.5V10.42l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.5 9h3.47"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.5 13h3.47"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.47 11.53v3.22a2.25 2.25 0 0 1-4.5 0v-4.23z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.96 14.87a2.25 2.25 0 0 1-4.49-.12v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89Z"
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
              d="M12.5 22H4.08a2.1 2.1 0 0 1-2.11-2.07V5.09c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18a3.4 3.4 0 0 1 1.75 2.78z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.97 15.06v3.78c0 2.16-1 3.16-3.16 3.16H12.5V10.42l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.5 9h3.47"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.5 13h3.47"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.47 11.53v3.22a2.25 2.25 0 0 1-4.5 0v-4.23z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.96 14.87a2.25 2.25 0 0 1-4.49-.12v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89"
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
              opacity={duotone ? "0.6" : "1"}
              d="M12.5 7.41V22H4.08a2.1 2.1 0 0 1-2.11-2.07V5.09c0-2.62 1.96-3.81 4.35-2.64l4.43 2.19a3.4 3.4 0 0 1 1.75 2.77"
              fill="currentColor"
            />
            <path
              d="M8.97 9.75H5.5A.76.76 0 0 1 4.75 9c0-.41.34-.75.75-.75h3.47a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M8.97 13.75H5.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.47a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 15.05v4.45a2.5 2.5 0 0 1-2.5 2.5h-7V10.42l.47.1 4.04.9.48.11 2.04.46a4 4 0 0 1 1.34.53q.15.1.29.24c.46.46.76 1.13.83 2.11z"
              fill="currentColor"
            />
            <path
              d="M12.5 10.42v6a2.5 2.5 0 0 0 4.51-1.5v-3.49l-4.04-.9z"
              fill="currentColor"
            />
            <path
              d="M21.99 14.87a3.2 3.2 0 0 0-.83-2.11l-.29-.24-.01-.01a4 4 0 0 0-1.33-.52l-2.04-.46-.48-.11v3.5a2.5 2.5 0 0 0 4.99.14v-.01z"
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
              d="M10.75 4.64 6.32 2.45c-2.39-1.17-4.35.02-4.35 2.64v14.84A2.1 2.1 0 0 0 4.08 22h7.42a1 1 0 0 0 1-1V7.41a3.4 3.4 0 0 0-1.75-2.77m-1.78 9.11H5.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.47a.75.75 0 1 1 0 1.5m0-4H5.5A.76.76 0 0 1 4.75 9c0-.41.34-.75.75-.75h3.47a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M22 18.04v1.46a2.5 2.5 0 0 1-2.5 2.5h-4.53a.96.96 0 0 1-.97-.97v-2.16c1.07.13 2.2-.18 3.01-.83a3.96 3.96 0 0 0 4.99 0"
              fill="currentColor"
            />
            <path
              d="M22 15.05a2.5 2.5 0 0 1-4.99-.14A2.52 2.52 0 0 1 14 17.36V12a1 1 0 0 1 1.22-.98l1.79.4.48.11 2.04.46a4 4 0 0 1 1.34.53q.15.1.29.24c.46.46.76 1.13.83 2.11z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStorefront;
