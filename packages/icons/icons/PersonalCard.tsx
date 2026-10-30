import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPersonalCard = forwardRef<SVGSVGElement, IconProps>(
  function IconPersonalCard(
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
            d="M2 8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5H7c-4 0-5-1-5-5v-3.6"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14 8h5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 12h4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17 16h2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.3 9.48a1.81 1.81 0 1 1-3.61 0 1.81 1.81 0 0 1 3.62 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 16.33a3 3 0 0 0-2.74-2.72 8 8 0 0 0-1.52 0A3 3 0 0 0 5 16.33"
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
              d="M17 21H7c-4 0-5-1-5-5V8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M14 8h5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 12h4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 16h2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 11.29a1.81 1.81 0 1 0 0-3.62 1.81 1.81 0 0 0 0 3.62"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16.33a3 3 0 0 0-2.74-2.72 8 8 0 0 0-1.52 0A3 3 0 0 0 5 16.33"
                stroke="currentColor"
                strokeWidth={strokeWidth}
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
              d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06A4 4 0 0 0 6 21h12c2.21 0 4-1.78 4-3.97V6.97A4 4 0 0 0 18 3"
              fill="currentColor"
            />
            <path
              d="M19 8.75h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M19 12.75h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M19 16.75h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.5 11.79a2.31 2.31 0 1 0 0-4.62 2.31 2.31 0 0 0 0 4.62"
              fill="currentColor"
            />
            <path
              d="M9.3 13.11a9 9 0 0 0-1.61 0 3.54 3.54 0 0 0-3.2 3.17q0 .22.14.38.16.16.37.17h7a.5.5 0 0 0 .37-.16q.14-.16.13-.38a3.55 3.55 0 0 0-3.2-3.18"
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
              d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06A4 4 0 0 0 6 21h12c2.21 0 4-1.78 4-3.97V6.97A4 4 0 0 0 18 3M8.5 7.17a2.3 2.3 0 0 1 2.31 2.31 2.3 2.3 0 0 1-2.31 2.31 2.3 2.3 0 0 1-2.31-2.31A2.3 2.3 0 0 1 8.5 7.17m3.87 9.49a.5.5 0 0 1-.37.16H5a.5.5 0 0 1-.37-.16.5.5 0 0 1-.13-.38 3.55 3.55 0 0 1 3.19-3.17 9 9 0 0 1 1.61 0 3.54 3.54 0 0 1 3.19 3.17.5.5 0 0 1-.12.38m6.63.09h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPersonalCard;
