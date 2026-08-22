import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFaceScanCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconFaceScanCircle(
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
              d="M9 16a5 5 0 0 0 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.2 10C3 6.08 6.08 3 10 2.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.2 14c.8 3.92 3.88 7 7.8 7.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.8 10C21 6.08 17.92 3 14 2.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.8 14c-.8 3.92-3.88 7-7.8 7.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8 2.57a.7.7 0 0 1-.55.84 8.8 8.8 0 0 0-6.84 6.84.71.71 0 1 1-1.4-.29c.82-4 3.96-7.13 7.95-7.95.39-.07.76.17.84.56"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.57 13.2c.38-.08.76.17.84.55a8.8 8.8 0 0 0 6.84 6.84.71.71 0 1 1-.29 1.4 10.2 10.2 0 0 1-7.95-7.95.7.7 0 0 1 .56-.84"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2 2.57a.7.7 0 0 1 .84-.56c4 .81 7.14 3.96 7.95 7.95a.71.71 0 0 1-1.4.29 8.8 8.8 0 0 0-6.84-6.84.7.7 0 0 1-.55-.84"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.43 13.2c.39.08.63.45.56.84a10.2 10.2 0 0 1-7.95 7.95.71.71 0 0 1-.29-1.4 8.8 8.8 0 0 0 6.84-6.84.7.7 0 0 1 .84-.55"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 19.58a7.58 7.58 0 1 0 0-15.16 7.58 7.58 0 0 0 0 15.16"
              fill="currentColor"
            />
            <path
              d="M8.94 14.54a.7.7 0 0 1 1-.15 3.45 3.45 0 0 0 4.12 0 .71.71 0 1 1 .85 1.14 4.9 4.9 0 0 1-5.82 0 .7.7 0 0 1-.15-1"
              fill="currentColor"
            />
            <path
              d="M14.49 11.64c.46 0 .83-.55.83-1.24s-.37-1.24-.83-1.24-.83.55-.83 1.24.37 1.24.83 1.24"
              fill="currentColor"
            />
            <path
              d="M9.51 11.64c.46 0 .83-.55.83-1.24s-.37-1.24-.83-1.24-.83.55-.83 1.24.37 1.24.83 1.24"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8 2.57a.7.7 0 0 1-.55.84 8.8 8.8 0 0 0-6.84 6.84.71.71 0 1 1-1.4-.29c.82-4 3.96-7.13 7.95-7.95.39-.07.76.17.84.56"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.57 13.2c.38-.08.76.17.84.55a8.8 8.8 0 0 0 6.84 6.84.71.71 0 1 1-.29 1.4 10.2 10.2 0 0 1-7.95-7.95.7.7 0 0 1 .56-.84"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2 2.57a.7.7 0 0 1 .84-.56c4 .81 7.14 3.96 7.95 7.95a.71.71 0 0 1-1.4.29 8.8 8.8 0 0 0-6.84-6.84.7.7 0 0 1-.55-.84"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.43 13.2c.39.08.63.45.56.84a10.2 10.2 0 0 1-7.95 7.95.71.71 0 0 1-.29-1.4 8.8 8.8 0 0 0 6.84-6.84.7.7 0 0 1 .84-.55"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 19.58a7.58 7.58 0 1 0 0-15.16 7.58 7.58 0 0 0 0 15.16m-3.06-5.04a.7.7 0 0 1 1-.15 3.45 3.45 0 0 0 4.12 0 .71.71 0 1 1 .85 1.14 4.9 4.9 0 0 1-5.82 0 .7.7 0 0 1-.15-1m6.38-4.14c0 .69-.37 1.24-.83 1.24s-.83-.55-.83-1.24.37-1.24.83-1.24.83.55.83 1.24m-5.8 1.24c.45 0 .82-.55.82-1.24s-.37-1.24-.83-1.24-.83.55-.83 1.24.37 1.24.83 1.24"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFaceScanCircle;
