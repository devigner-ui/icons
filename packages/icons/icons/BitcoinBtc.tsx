import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBitcoinBtc = forwardRef<SVGSVGElement, IconProps>(
  function IconBitcoinBtc(
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.45 7.67h5.42c1.2 0 2.17 1.08 2.17 2.17 0 1.2-.97 2.17-2.17 2.17H9.45z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.45 12h6.19c1.37 0 2.48.97 2.48 2.17s-1.11 2.17-2.48 2.17H9.45z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.24 16.33v2.17"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.54 16.33v2.17"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.24 5.5v2.17"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.54 5.5v2.17"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.51 7.67H7.72"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.51 16.33H7.72"
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
            <path d="M24.67 0h-24v24h24z" fill="none" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M17.16 11.61c.38-.49.62-1.11.62-1.78a3 3 0 0 0-2.92-2.92h-.88V5.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.42h-1.21V5.5a.76.76 0 0 0-.75-.75.74.74 0 0 0-.73.75v1.42H7.72a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h.98v7.16h-.98a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.06v1.42c0 .41.34.75.75.75s.75-.34.75-.75v-1.42h1.21v1.42c0 .41.34.75.75.75s.75-.34.75-.75v-1.42h1.65c1.78 0 3.23-1.31 3.23-2.92 0-1.1-.7-2.06-1.71-2.55m-5.65-3.19h3.36c.8 0 1.42.76 1.42 1.42 0 .78-.64 1.42-1.42 1.42H10.2V8.42zm4.13 7.16H10.2v-2.83h5.44c.95 0 1.73.64 1.73 1.42s-.78 1.41-1.73 1.41"
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
              d="M15.64 12.75H10.2v2.83h5.44c.95 0 1.73-.64 1.73-1.42s-.78-1.41-1.73-1.41"
              fill="currentColor"
            />
            <path
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m2.97 15.08h-1.65v1.42c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-1.42h-1.21v1.42c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-1.42H7.72a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.98V8.42h-.98a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.06V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.42h1.21V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.42h.88a3 3 0 0 1 2.92 2.92c0 .67-.24 1.28-.62 1.78a2.9 2.9 0 0 1 1.7 2.56c0 1.59-1.45 2.9-3.23 2.9"
              fill="currentColor"
            />
            <path
              d="M16.29 9.83c0-.66-.62-1.42-1.42-1.42H10.2v2.83h4.67c.78.01 1.42-.63 1.42-1.41"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBitcoinBtc;
