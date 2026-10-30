import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPolyswarm = forwardRef<SVGSVGElement, IconProps>(
  function IconPolyswarm(
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
            d="M19.72 14.9a7 7 0 0 1-5.22 2.35h-11"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.5 3.25h5c3.85 0 7 3.15 7 7"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M3.17 6.75h10.64a3.7 3.7 0 0 1 3.69 3.69 3.7 3.7 0 0 1-3.69 3.69H8"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.5 10.75h-3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.5 20.75h-4"
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
              d="M9.5 3.25h5c3.85 0 7 3.15 7 7s-3.15 7-7 7h-11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.17 6.75h10.64a3.7 3.7 0 0 1 3.69 3.69 3.7 3.7 0 0 1-3.69 3.69H8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.5 10.75h-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.5 20.75h-4"
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
              d="M24 0H0v24h24z"
              fill="none"
            />
            <path
              d="M14.5 18h-11a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h11a6.25 6.25 0 0 0 0-12.5h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5a7.76 7.76 0 0 1 7.75 7.75A7.76 7.76 0 0 1 14.5 18"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.81 14.89H8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.81a2.94 2.94 0 0 0 0-5.88H3.17a.76.76 0 0 1 0-1.51h10.64a4.44 4.44 0 0 1 0 8.89"
              fill="currentColor"
            />
            <path
              d="M8.5 11.5h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.5 21.5h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M14.5 18h-11a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h11a6.25 6.25 0 0 0 0-12.5h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5a7.76 7.76 0 0 1 7.75 7.75A7.76 7.76 0 0 1 14.5 18"
              fill="currentColor"
            />
            <path
              d="M13.81 14.89H8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.81a2.94 2.94 0 0 0 0-5.88H3.17a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10.64a4.44 4.44 0 0 1 0 8.88"
              fill="currentColor"
            />
            <path
              d="M8.5 11.5h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M6.5 21.5h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPolyswarm;
