import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWifiRouterSingleAntenna = forwardRef<SVGSVGElement, IconProps>(
  function IconWifiRouterSingleAntenna(
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
            d="M21.58 7.4a5.5 5.5 0 0 0-10.16 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.38 8.66a3 3 0 0 0-5.76 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M13 20H6c-1.89 0-2.83 0-3.41-.59C2 18.83 2 17.9 2 16s0-2.83.59-3.41C3.17 12 4.1 12 6 12h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 20 19.9 20 18 20h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16.5 12V9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M21.58 7.4a5.5 5.5 0 0 0-10.16 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.38 8.66a3 3 0 0 0-5.76 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
              <path
                d="M10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
            </g>
            <path
              d="M2 16c0-1.89 0-2.83.59-3.41C3.17 12 4.1 12 6 12h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 20 19.9 20 18 20H6c-1.89 0-2.83 0-3.41-.59C2 18.83 2 17.9 2 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16.5 12V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3 5.1a4.75 4.75 0 0 0-4.4 2.93.75.75 0 1 1-1.38-.57 6.25 6.25 0 0 1 11.56 0 .75.75 0 0 1-1.39.57A4.8 4.8 0 0 0 16.3 5.1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3 7.6c-1.02 0-1.89.68-2.16 1.62a.75.75 0 0 1-1.44-.42 3.75 3.75 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.3 7.6"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.8 16.35c0-1.89 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41c-.58.59-1.52.59-3.41.59h-12c-1.89 0-2.83 0-3.41-.59-.59-.58-.59-1.52-.59-3.41m4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M17.05 9.35a.75.75 0 0 0-1.5 0v3h1.5z"
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
              d="M11.9 8.03a4.75 4.75 0 0 1 8.79 0 .75.75 0 0 0 1.39-.57 6.25 6.25 0 0 0-11.56 0 .75.75 0 0 0 1.39.57"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.39 12.94c-.59.58-.59 1.52-.59 3.41s0 2.83.59 3.41c.58.59 1.52.59 3.41.59h12c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41s0-2.83-.59-3.41c-.58-.59-1.52-.59-3.41-.59h-.75v-3a.75.75 0 0 0-1.5 0v3H5.8c-1.89 0-2.83 0-3.41.59m3.41 4.41a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M14.14 9.22a2.25 2.25 0 0 1 4.32 0 .75.75 0 1 0 1.44-.42 3.75 3.75 0 0 0-7.2 0 .75.75 0 0 0 1.44.42"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWifiRouterSingleAntenna;
