import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicPlaylist = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicPlaylist(
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
              d="M17.67 22h-10c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.67 4.5h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 2h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.56 19.11a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.95 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.58 18.2a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.93 13.83 5.02-1.37"
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
              d="M18.67 5.25h-12a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.67 2.75h-6A.76.76 0 0 1 8.92 2c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 7h-12c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4"
              fill="currentColor"
            />
            <path
              d="M16.04 9.89c-.3-.24-.85-.47-1.73-.24l-2.73.75c-.85.22-1.4.94-1.4 1.83v3.5q-.3-.1-.62-.1a2.12 2.12 0 1 0 2.12 2.12v-3.34l3.52-.96v1.37q-.3-.1-.62-.1a2.12 2.12 0 0 0 0 4.24 2.1 2.1 0 0 0 2.1-2.07l.02-.05v-5.35c0-.9-.36-1.37-.66-1.6m-6.48 8.47a.6.6 0 0 1-.62-.62.62.62 0 0 1 1.24-.01c0 .35-.28.63-.62.63m5.02-.91a.6.6 0 0 1-.62-.62c0-.34.28-.62.62-.62s.62.28.62.62-.28.62-.62.62"
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
              d="M18.67 5.25h-12a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.67 2.75h-6A.76.76 0 0 1 8.92 2c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M14.58 16.21a.6.6 0 0 0-.62.62c0 .34.28.62.62.62s.62-.28.62-.62a.6.6 0 0 0-.62-.62"
              fill="currentColor"
            />
            <path
              d="M10.18 17.74a.6.6 0 0 0-.62-.61.6.6 0 0 0-.62.62c0 .34.28.62.62.62a.64.64 0 0 0 .62-.63"
              fill="currentColor"
            />
            <path
              d="M18.67 7h-12c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4m-1.97 5.46v4.37l-.01.05a2.1 2.1 0 0 1-2.11 2.07 2.12 2.12 0 1 1 .62-4.14v-1.37l-3.52.96v3.34a2.12 2.12 0 1 1-1.5-2.02v-3.5c0-.89.55-1.61 1.4-1.83l2.73-.75c.88-.23 1.42 0 1.73.24.3.23.66.7.66 1.59z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicPlaylist;
