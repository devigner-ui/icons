import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCameraSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconCameraSlash(
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
            d="M6 10h3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26c.06-.93-.23-1.8-.74-2.48"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.77 18.25c.05.82.26 1.59.67 2.21"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.15 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6a3.75 3.75 0 0 0-3.75 3.99l.25 4.03"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 17.31a3.25 3.25 0 0 0 4.75-4.29"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 2 2 22"
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
              opacity={duotone ? "0.4" : "1"}
              d="M6 10h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26c.06-.93-.23-1.8-.74-2.48"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.15 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6a3.75 3.75 0 0 0-3.75 3.99l.52 8.26c.05.82.26 1.59.67 2.21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 17.31a3.25 3.25 0 0 0 4.75-4.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2 2 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21.75 9.99-.52 8.26C21.1 20.31 20 22 17.24 22H6.76q-.88 0-1.54-.22L20.25 6.75a3.7 3.7 0 0 1 1.5 3.24"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 6 3.48 20.52a4.3 4.3 0 0 1-.71-2.27l-.52-8.26A3.75 3.75 0 0 1 6 6c.61 0 1.17-.35 1.45-.89l.72-1.45A3.3 3.3 0 0 1 10.86 2h2.29a3.3 3.3 0 0 1 2.68 1.66l.72 1.45c.28.54.84.89 1.45.89"
              fill="currentColor"
            />
            <path
              d="M9.5 10.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="m12.57 11.43-3.89 3.89a3.37 3.37 0 0 1 3.89-3.89"
              fill="currentColor"
            />
            <path
              d="M15.38 14.75a3.38 3.38 0 0 1-5.63 2.5l4.75-4.75c.55.59.88 1.38.88 2.25"
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
              d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
            <path
              d="m16.55 5.11-.72-1.45A3.3 3.3 0 0 0 13.15 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6a3.75 3.75 0 0 0-3.75 3.99l.52 8.26c.05.85.26 1.64.71 2.27L18 6c-.61 0-1.17-.35-1.45-.89M9.5 10.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="m21.75 9.99-.52 8.26C21.1 20.31 20 22 17.24 22H7.41a1 1 0 0 1-.71-1.71l2.47-2.47a1 1 0 0 1 1.18-.13 3.37 3.37 0 0 0 4.59-4.58c-.22-.39-.19-.88.13-1.19l4.5-4.5a.96.96 0 0 1 1.45.11c.52.68.79 1.54.73 2.46"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCameraSlash;
