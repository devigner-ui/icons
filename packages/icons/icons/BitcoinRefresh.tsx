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
            d="M4.47 11.42 2.73 9.68 1 11.42"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19.53 12.58 1.74 1.74L23 12.58"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 2.74a9.3 9.3 0 0 0-7.23 3.47"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.26 14.32V12A9.3 9.3 0 0 0 16 3.64"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 21.26a9.3 9.3 0 0 0 7.23-3.47"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.74 9.68V12a9.3 9.3 0 0 0 5.19 8.32"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 8.5h4.38c.97 0 1.75.88 1.75 1.75 0 .97-.78 1.75-1.75 1.75H9z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 12h5c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75H9z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.8 15.5v1.75"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.8 6.75V8.5"
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
              d="M4.47 11.42 2.73 9.68 1 11.42"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.53 12.58 1.74 1.74 1.74-1.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.26 14.32V12A9.26 9.26 0 0 0 4.77 6.21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.74 9.68V12a9.26 9.26 0 0 0 16.49 5.79"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9 8.5h4.38c.97 0 1.75.88 1.75 1.75 0 .97-.78 1.75-1.75 1.75H9z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12h5c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75H9z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8 15.5v1.75"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8 6.75V8.5"
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
              d="M23.53 12.05a.75.75 0 0 0-1.06 0l-.46.46V12A10.02 10.02 0 0 0 4.19 5.74c-.26.32-.21.8.12 1.05.32.26.8.21 1.05-.12a8.52 8.52 0 0 1 15.15 5.32v.5l-.46-.46a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.74 1.74a.8.8 0 0 0 .53.22.8.8 0 0 0 .53-.22l1.74-1.74a.73.73 0 0 0 0-1.04"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.69 17.2a.74.74 0 0 0-1.05.12A8.52 8.52 0 0 1 3.49 12v-.5l.46.46q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06L3.27 9.16A1 1 0 0 0 3.03 9a.7.7 0 0 0-.57 0 1 1 0 0 0-.24.16L.48 10.9a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0L2 11.5v.5a10.02 10.02 0 0 0 17.82 6.26c.25-.32.2-.8-.13-1.06"
              fill="currentColor"
            />
            <path
              d="M15.45 11.64q.41-.6.42-1.39c0-1.33-1.17-2.5-2.5-2.5h-.82v-1A.76.76 0 0 0 11.8 6a.76.76 0 0 0-.75.75v1H9a.76.76 0 0 0-.75.75v7c0 .41.34.75.75.75h2.05v1c0 .41.34.75.75.75s.75-.34.75-.75v-1H14c1.52 0 2.75-1.12 2.75-2.5 0-.89-.52-1.67-1.3-2.11m-5.7-2.39h3.62c.55 0 1 .55 1 1a1 1 0 0 1-1 1H9.75zm4.25 5.5H9.75v-2H14c.69 0 1.25.45 1.25 1s-.56 1-1.25 1"
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
              d="M23.53 12.05a.75.75 0 0 0-1.06 0l-.46.46V12A10.02 10.02 0 0 0 4.19 5.74a.75.75 0 1 0 1.17.94A8.52 8.52 0 0 1 20.51 12v.5l-.46-.46a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.74 1.74a.8.8 0 0 0 .53.22.8.8 0 0 0 .53-.22l1.74-1.74a.74.74 0 0 0 0-1.05"
              fill="currentColor"
            />
            <path
              d="M19.69 17.2a.74.74 0 0 0-1.05.12A8.52 8.52 0 0 1 3.49 12v-.5l.46.46q.24.22.53.22t.52-.23a.75.75 0 0 0 0-1.06L3.27 9.15a1 1 0 0 0-.25-.16.7.7 0 0 0-.57 0 1 1 0 0 0-.24.16L.47 10.89a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.46-.46V12a10.02 10.02 0 0 0 17.82 6.26.75.75 0 0 0-.12-1.06"
              fill="currentColor"
            />
            <path
              d="M15.45 11.64q.41-.6.42-1.39c0-1.33-1.17-2.5-2.5-2.5h-.82v-1A.76.76 0 0 0 11.8 6a.76.76 0 0 0-.75.75v1H9a.76.76 0 0 0-.75.75v7c0 .41.34.75.75.75h2.05v1c0 .41.34.75.75.75s.75-.34.75-.75v-1H14c1.52 0 2.75-1.12 2.75-2.5 0-.89-.52-1.67-1.3-2.11m-5.7-2.39h3.62c.55 0 1 .55 1 1a1 1 0 0 1-1 1H9.75zm4.25 5.5H9.75v-2H14c.69 0 1.25.45 1.25 1s-.56 1-1.25 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBitcoinRefresh;
