import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRealEstate = forwardRef<SVGSVGElement, IconProps>(
  function IconRealEstate(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    const fill = variant === "Bold" || variant === "Bulk";
    const duotone = variant === "TwoTone" || variant === "Bulk";

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
              d="M2.67 22h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15.68 21.99-12 .02-.01-14.94a2 2 0 0 1 .89-1.66l4-2.67a2 2 0 0 1 2.22 0l4 2.67c.56.37.89.99.89 1.66z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.65 22.01V18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.67 12a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.67 14h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 22v-3.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
              d="M15.68 14.75v7.24l-12 .02v-7.26l-.01-1.5V7.07a2 2 0 0 1 .89-1.66l4-2.67a2 2 0 0 1 2.22 0l4 2.67c.56.37.89.99.89 1.66v6.18z"
              fill="currentColor"
            />
            <path
              d="M22.67 21.25H21.4v-3A2.4 2.4 0 0 0 23.04 16v-2a2.39 2.39 0 0 0-4.76 0v2c0 1.04.68 1.92 1.61 2.24v3.01H2.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75H20.6l.05.01.05-.01h1.97c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path d="M15.68 14.75h-12l-.01-1.5h12z" fill="currentColor" />
            <path
              d="M9.67 22.75a.76.76 0 0 1-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9.67 10.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
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
              d="M15.67 7.07c0-.67-.33-1.29-.89-1.66l-4-2.67a2 2 0 0 0-2.22 0l-4 2.67a2 2 0 0 0-.89 1.66v5.68c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5zm-6 3.68c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75"
              fill="currentColor"
            />
            <path
              d="M22.67 21.25H21.4v-3A2.4 2.4 0 0 0 23.04 16v-2a2.39 2.39 0 0 0-4.76 0v2c0 1.04.68 1.92 1.61 2.24v3.01h-4.22v-6a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6h-1a.76.76 0 0 0-.75.75c0 .41.34.75.75.75H20.6l.05.01.05-.01h1.97c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75m-13.75-3c0-.41.34-.75.75-.75s.75.34.75.75v3h-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRealEstate;
