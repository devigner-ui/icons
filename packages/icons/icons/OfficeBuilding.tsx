import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOfficeBuilding = forwardRef<SVGSVGElement, IconProps>(
  function IconOfficeBuilding(
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
            d="M1 21.5h22"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.78 21.51v-4.46"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.8 10.39a2.2 2.2 0 0 0-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2v-2.27a2.2 2.2 0 0 0-2.2-2.2Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.1 5.52q0-3.02 2.99-3.02h6.23q2.98 0 2.98 3.02V21.5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.1 21.5V9.51"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.8 7.75h4.95"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.8 11.5h4.95"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.25 21.5v-3.75"
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
              d="M1 21.5h22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.78 21.51v-4.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.8 10.39a2.2 2.2 0 0 0-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2v-2.27a2.2 2.2 0 0 0-2.2-2.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.1 21.5V5.53q0-3.02 2.99-3.02h6.23q2.98 0 2.98 3.02V21.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.8 7.75h4.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.8 11.5h4.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.25 21.5v-3.75"
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
              d="M2.1 21.1V5.13q0-3.02 2.99-3.02h6.23q2.98 0 2.98 3.02V21.1"
              fill="currentColor"
            />
            <path
              d="M10.75 8.1H5.8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M10.75 11.85H5.8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.25 21.85a.76.76 0 0 1-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75v3.75c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M23 20.35h-2.27v-3a2.4 2.4 0 0 0 1.64-2.25v-2a2.39 2.39 0 0 0-4.76 0v2c0 1.04.68 1.92 1.61 2.24v3.01H1a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h18.93l.05.01.05-.01H23c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
              d="M11.32 2.1H5.09Q2.1 2.1 2.1 5.12V21.1h5.4v-3.75a.75.75 0 1 1 1.5 0v3.75h5.3V5.12q0-3.02-2.98-3.02m-.57 9.75H5.8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75m0-3.75H5.8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M23 20.35h-2.27v-3a2.4 2.4 0 0 0 1.64-2.25v-2a2.39 2.39 0 0 0-4.76 0v2c0 1.04.68 1.92 1.61 2.24v3.01H1a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h18.93l.05.01.05-.01H23c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOfficeBuilding;
