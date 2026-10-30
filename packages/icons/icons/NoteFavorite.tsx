import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNoteFavorite = forwardRef<SVGSVGElement, IconProps>(
  function IconNoteFavorite(
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
            d="M7 1.5v3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 1.5v3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 8c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v5.13a5.2 5.2 0 0 0-6.53.03 5.2 5.2 0 0 0-1.21 6.79q.56.92 1.42 1.55H7c-3.5 0-5-2-5-5v-4.43"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6 10.5h6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6 15.5h2.62"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 17.25a5.2 5.2 0 0 1-1.8 3.94 5.15 5.15 0 0 1-6.52.31 5.27 5.27 0 0 1-.21-8.34 5.2 5.2 0 0 1 6.53-.03c1.22.96 2 2.45 2 4.12Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.75 19.75a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5Z"
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
              d="M6.97 1.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.97 1.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.97 8v5.13a5.2 5.2 0 0 0-6.53.03 5.2 5.2 0 0 0-1.21 6.79q.56.92 1.42 1.55H6.97c-3.5 0-5-2-5-5V8c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.97 10.5h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.97 15.5h2.62"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.97 17.25a5.2 5.2 0 0 1-1.8 3.94 5.15 5.15 0 0 1-6.52.31 5.27 5.27 0 0 1-.21-8.34 5.2 5.2 0 0 1 6.53-.03c1.22.96 2 2.45 2 4.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.72 19.75a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5"
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
              d="M6.52 5.75A.76.76 0 0 1 5.77 5V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M14.52 5.75a.76.76 0 0 1-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.52 8.5V17c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
              fill="currentColor"
            />
            <path
              d="M12.52 11.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9.52 16.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M20.52 13.63a5.2 5.2 0 0 0-6.53.03 5.2 5.2 0 0 0-1.21 6.79A5.3 5.3 0 0 0 17.27 23a5.2 5.2 0 0 0 4.49-2.55 5.23 5.23 0 0 0-1.24-6.82m-3.25 6.62a2.5 2.5 0 0 0-2.5-2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0-2.5 2.5"
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
              d="M7.27 3.35v-1.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56q.36-.05.75-.06z"
              fill="currentColor"
            />
            <path
              d="M15.27 3.41V1.85a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h.75q.39 0 .75.06"
              fill="currentColor"
            />
            <path
              d="M20.81 14.82a4.5 4.5 0 0 0-5.6.02 4.46 4.46 0 0 0 .18 7.15 4.4 4.4 0 0 0 5.59-.26q.53-.44.89-1.06a4.47 4.47 0 0 0-1.06-5.85m-2.79 5.67c0-1.18-.96-2.14-2.14-2.14 1.18 0 2.14-.96 2.14-2.14 0 1.18.96 2.14 2.14 2.14-1.18 0-2.14.96-2.14 2.14"
              fill="currentColor"
            />
            <path
              d="M15.27 3.41v1.44c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-1.5h-6.5v1.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V3.41c-2.95.27-4.25 2.17-4.25 4.94v8.5c0 3 1.5 5 5 5h4.13c.76 0 1.27-.85 1.08-1.59a6.7 6.7 0 0 1 2.33-6.93 6.7 6.7 0 0 1 4.21-1.48h.04c.63 0 1.21-.46 1.21-1.09V8.35c0-2.77-1.3-4.67-4.25-4.94M8.52 16.6h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m3-5h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNoteFavorite;
