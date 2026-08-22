import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBitcoinRefresh = forwardRef<SVGSVGElement, IconProps>(
  function IconBitcoinRefresh(
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
              d="M5.14 11.42 3.4 9.68l-1.73 1.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.2 12.58 1.74 1.74 1.74-1.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.93 14.32V12A9.26 9.26 0 0 0 5.44 6.21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.41 9.68V12a9.26 9.26 0 0 0 16.49 5.79"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.67 8.5h4.38c.97 0 1.75.88 1.75 1.75 0 .97-.78 1.75-1.75 1.75H9.67z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.67 12h5c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75h-5z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.47 15.5v1.75"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.47 6.75V8.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
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
              d="M24.2 12.05a.75.75 0 0 0-1.06 0l-.46.46V12A10.02 10.02 0 0 0 4.86 5.74c-.26.32-.21.8.12 1.05.32.26.8.21 1.05-.12a8.52 8.52 0 0 1 15.15 5.32v.5l-.46-.46a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.74 1.74a.8.8 0 0 0 .53.22.8.8 0 0 0 .53-.22l1.74-1.74a.73.73 0 0 0 0-1.04"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.36 17.2a.74.74 0 0 0-1.05.12A8.52 8.52 0 0 1 4.16 12v-.5l.46.46q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06L3.94 9.16A1 1 0 0 0 3.7 9a.7.7 0 0 0-.57 0 1 1 0 0 0-.24.16L1.15 10.9a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.46-.46v.5a10.02 10.02 0 0 0 17.82 6.26c.25-.32.2-.8-.13-1.06"
              fill="currentColor"
            />
            <path
              d="M16.12 11.64q.41-.6.42-1.39c0-1.33-1.17-2.5-2.5-2.5h-.82v-1a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1H9.67a.76.76 0 0 0-.75.75v7c0 .41.34.75.75.75h2.05v1c0 .41.34.75.75.75s.75-.34.75-.75v-1h1.45c1.52 0 2.75-1.12 2.75-2.5 0-.89-.52-1.67-1.3-2.11m-5.7-2.39h3.62c.55 0 1 .55 1 1a1 1 0 0 1-1 1h-3.62zm4.25 5.5h-4.25v-2h4.25c.69 0 1.25.45 1.25 1s-.56 1-1.25 1"
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
              d="M24.2 12.05a.75.75 0 0 0-1.06 0l-.46.46V12A10.02 10.02 0 0 0 4.86 5.74a.75.75 0 1 0 1.17.94A8.52 8.52 0 0 1 21.18 12v.5l-.46-.46a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.74 1.74a.8.8 0 0 0 .53.22.8.8 0 0 0 .53-.22l1.74-1.74a.74.74 0 0 0 0-1.05"
              fill="currentColor"
            />
            <path
              d="M20.36 17.2a.74.74 0 0 0-1.05.12A8.52 8.52 0 0 1 4.16 12v-.5l.46.46q.24.22.53.22t.52-.23a.75.75 0 0 0 0-1.06L3.94 9.15a1 1 0 0 0-.25-.16.7.7 0 0 0-.57 0 1 1 0 0 0-.24.16l-1.74 1.74a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.46-.46V12a10.02 10.02 0 0 0 17.82 6.26.75.75 0 0 0-.12-1.06"
              fill="currentColor"
            />
            <path
              d="M16.12 11.64q.41-.6.42-1.39c0-1.33-1.17-2.5-2.5-2.5h-.82v-1a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1H9.67a.76.76 0 0 0-.75.75v7c0 .41.34.75.75.75h2.05v1c0 .41.34.75.75.75s.75-.34.75-.75v-1h1.45c1.52 0 2.75-1.12 2.75-2.5 0-.89-.52-1.67-1.3-2.11m-5.7-2.39h3.62c.55 0 1 .55 1 1a1 1 0 0 1-1 1h-3.62zm4.25 5.5h-4.25v-2h4.25c.69 0 1.25.45 1.25 1s-.56 1-1.25 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBitcoinRefresh;
