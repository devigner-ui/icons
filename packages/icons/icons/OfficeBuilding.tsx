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
              d="M1.67 22h22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.45 22.01v-4.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.47 10.89a2.2 2.2 0 0 0-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2v-2.27a2.2 2.2 0 0 0-2.2-2.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.77 22V6.03q0-3.02 2.99-3.02h6.23q2.98 0 2.98 3.02V22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.47 8.25h4.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.47 12h4.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.92 22v-3.75"
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
              d="M2.77 22V6.03q0-3.02 2.99-3.02h6.23q2.98 0 2.98 3.02V22"
              fill="currentColor"
            />
            <path
              d="M11.42 9H6.47a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M11.42 12.75H6.47a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.92 22.75a.76.76 0 0 1-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M23.67 21.25H21.4v-3A2.4 2.4 0 0 0 23.04 16v-2a2.39 2.39 0 0 0-4.76 0v2c0 1.04.68 1.92 1.61 2.24v3.01H1.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75H20.6l.05.01.05-.01h2.97c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
              d="M11.99 3H5.76Q2.77 3 2.77 6.02V22h5.4v-3.75a.75.75 0 1 1 1.5 0V22h5.3V6.02Q14.97 3 11.99 3m-.57 9.75H6.47a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75m0-3.75H6.47a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M23.67 21.25H21.4v-3A2.4 2.4 0 0 0 23.04 16v-2a2.39 2.39 0 0 0-4.76 0v2c0 1.04.68 1.92 1.61 2.24v3.01H1.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75H20.6l.05.01.05-.01h2.97c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOfficeBuilding;
