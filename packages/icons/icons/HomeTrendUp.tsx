import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHomeTrendUp = forwardRef<SVGSVGElement, IconProps>(
  function IconHomeTrendUp(
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
            d="M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33a4.5 4.5 0 0 0-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41a4.23 4.23 0 0 0 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m11.17 14-.47-.7-3.2 3.2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16.5 11.5-1.51 1.51L14 14"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.5 11.5h2v2"
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
              d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41a4.23 4.23 0 0 0 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33a4.5 4.5 0 0 0-5 .12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m16.5 11.5-4.2 4.2-1.6-2.4-3.2 3.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 11.5h2v2"
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
              d="m20.04 6.82-5.76-4.03a4.85 4.85 0 0 0-5.49.13L3.78 6.83a5.2 5.2 0 0 0-1.79 3.64v6.9A4.63 4.63 0 0 0 6.61 22h10.78a4.6 4.6 0 0 0 4.62-4.62V10.6a5.1 5.1 0 0 0-1.97-3.78"
              fill="currentColor"
            />
            <path
              d="M16.83 11.27a.7.7 0 0 0-.38-.38l-.27-.05h-1.85a.7.7 0 0 0-.7.7c0 .39.31.7.7.7h.18l-2.1 2.11-1.03-1.52a.7.7 0 0 0-.5-.31.7.7 0 0 0-.57.2L7.33 15.7a.7.7 0 0 0 0 .99q.21.2.5.2a.7.7 0 0 0 .48-.2l2.38-2.38 1.02 1.52q.19.27.51.31.33.03.56-.2l2.72-2.72v.18c0 .39.31.7.7.7a.7.7 0 0 0 .7-.7v-1.86z"
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
              d="m20.04 6.82-5.76-4.03a4.85 4.85 0 0 0-5.49.13L3.78 6.83a5.2 5.2 0 0 0-1.79 3.64v6.9A4.63 4.63 0 0 0 6.61 22h10.78a4.6 4.6 0 0 0 4.62-4.62V10.6a5.1 5.1 0 0 0-1.97-3.78m-3.16 6.58a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7v-.18l-2.72 2.72a.7.7 0 0 1-.56.2.7.7 0 0 1-.5-.31l-1.02-1.52-2.38 2.38a.7.7 0 0 1-.98 0 .7.7 0 0 1 0-.99l2.98-2.98a.7.7 0 0 1 .56-.2q.33.04.51.31l1.02 1.52 2.11-2.11h-.18a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h1.86q.13 0 .27.05a.7.7 0 0 1 .38.38q.05.13.05.27z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHomeTrendUp;
