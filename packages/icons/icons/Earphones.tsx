import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEarphones = forwardRef<SVGSVGElement, IconProps>(
  function IconEarphones(
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
            d="M8.5 11.7V6.92"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.5 21.7v-3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 9.7V6.92"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 21.7v-9"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.1 5c0 .49-.2.95-.53 1.27q-.5.51-1.27.53H6.05c.28-.37.45-.85.45-1.35v-.9c0-.5-.17-.98-.45-1.35H8.3c1 0 1.8.81 1.8 1.8Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.5 4.55v.9c0 .5-.17.98-.45 1.35-.76 1.01-2.32 1.35-3.77.06A1 1 0 0 1 2 6.2V3.86c0-.19.1-.47.23-.61 1.26-1.32 2.78-1.13 3.61-.3l.21.24c.28.38.45.86.45 1.36Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.9 5c0 .49.2.95.53 1.27q.5.51 1.27.53h2.25a2.3 2.3 0 0 1-.45-1.35v-.9c0-.5.17-.98.45-1.35H15.7c-.99 0-1.8.81-1.8 1.8Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.5 4.55v.9c0 .5.17.98.45 1.35.76 1.01 2.32 1.35 3.77.06A1 1 0 0 0 22 6.2V3.86c0-.19-.1-.47-.23-.61-1.26-1.32-2.78-1.13-3.61-.3l-.21.24c-.28.38-.45.86-.45 1.36Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 13.2v4a1.5 1.5 0 1 1-3 0v-4a1.5 1.5 0 1 1 3 0Z"
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
              opacity={duotone ? "0.4" : "1"}
              d="M15.5 21.7V6.92"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1 5c0 .49-.2.95-.53 1.27q-.5.51-1.27.53H6.05c.28-.37.45-.85.45-1.35v-.9c0-.5-.17-.98-.45-1.35H8.3c.99 0 1.8.81 1.8 1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 4.55v.9c0 .5-.17.98-.45 1.35-.76 1.01-2.32 1.35-3.77.06A1 1 0 0 1 2 6.2V3.86c0-.19.1-.47.23-.61 1.26-1.32 2.78-1.13 3.61-.3l.21.24c.28.38.45.86.45 1.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9 5c0 .49.2.95.53 1.27q.5.51 1.27.53h2.25a2.3 2.3 0 0 1-.45-1.35v-.9c0-.5.17-.98.45-1.35H15.7c-.99 0-1.8.81-1.8 1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 4.55v.9c0 .5.17.98.45 1.35.76 1.01 2.32 1.35 3.77.06A1 1 0 0 0 22 6.2V3.86c0-.19-.1-.47-.23-.61-1.26-1.32-2.78-1.13-3.61-.3l-.21.24c-.28.38-.45.86-.45 1.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.5 11.7V6.92"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 21.7v-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 13.2v4a1.5 1.5 0 1 1-3 0v-4a1.5 1.5 0 1 1 3 0"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.5 12.08a.76.76 0 0 1-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.5 22.08a.76.76 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.5 22.08a.76.76 0 0 1-.75-.75v-16c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M10.1 4.63c0 .49-.2.95-.53 1.27q-.5.51-1.27.53H6.05c.28-.37.45-.85.45-1.35v-.9c0-.5-.17-.98-.45-1.35H8.3c.99 0 1.8.81 1.8 1.8"
              fill="currentColor"
            />
            <path
              d="M6.5 4.18v.9c0 .5-.17.98-.45 1.35-.76 1.01-2.32 1.35-3.77.06A1 1 0 0 1 2 5.83V3.49c0-.19.1-.47.23-.61 1.26-1.32 2.78-1.13 3.61-.3l.21.24q.44.59.45 1.36"
              fill="currentColor"
            />
            <path
              d="M13.9 4.63c0 .49.2.95.53 1.27q.5.51 1.27.53h2.25a2.3 2.3 0 0 1-.45-1.35v-.9c0-.5.17-.98.45-1.35H15.7c-.99 0-1.8.81-1.8 1.8"
              fill="currentColor"
            />
            <path
              d="M17.5 4.18v.9c0 .5.17.98.45 1.35.76 1.01 2.32 1.35 3.77.06a1 1 0 0 0 .28-.66V3.49c0-.19-.1-.47-.23-.61-1.26-1.32-2.78-1.13-3.61-.3l-.21.24q-.44.59-.45 1.36"
              fill="currentColor"
            />
            <path
              d="M10 12.83v4a1.5 1.5 0 1 1-3 0v-4a1.5 1.5 0 1 1 3 0"
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
              d="M8.5 12.08a.76.76 0 0 1-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.5 22.08a.76.76 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.5 22.08a.76.76 0 0 1-.75-.75v-16c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M10.1 4.63q-.02.75-.53 1.27a1.8 1.8 0 0 1-1.27.53H6.05c.28-.37.45-.85.45-1.35v-.9c0-.5-.17-.98-.45-1.35H8.3c.99 0 1.8.81 1.8 1.8"
              fill="currentColor"
            />
            <path
              d="M6.5 4.18v.9c0 .5-.17.98-.45 1.35-.76 1.01-2.32 1.35-3.77.06A1 1 0 0 1 2 5.84V3.5c0-.2.1-.47.23-.61 1.26-1.32 2.78-1.13 3.61-.3q.11.1.21.24c.28.37.45.85.45 1.35"
              fill="currentColor"
            />
            <path
              d="M13.9 4.63q.02.75.53 1.27.51.51 1.27.53h2.25a2.3 2.3 0 0 1-.45-1.35v-.9c0-.5.17-.98.45-1.35H15.7c-.99 0-1.8.81-1.8 1.8"
              fill="currentColor"
            />
            <path
              d="M17.5 4.18v.9c0 .5.17.98.45 1.35.76 1.01 2.32 1.35 3.77.06a1 1 0 0 0 .28-.65V3.5c0-.19-.1-.47-.23-.61-1.26-1.32-2.78-1.13-3.61-.3l-.21.24c-.28.37-.45.85-.45 1.35"
              fill="currentColor"
            />
            <path
              d="M10 12.83v4a1.5 1.5 0 1 1-3 0v-4a1.5 1.5 0 1 1 3 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEarphones;
