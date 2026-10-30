import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlertTriangle = forwardRef<SVGSVGElement, IconProps>(
  function IconAlertTriangle(
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
            d="M12 9v5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m20.24 14 1.06 1.9c1.68 3.03.22 5.51-3.24 5.51H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 17z"
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
              d="M5.31 10.76C8.23 5.6 9.7 3 12 3s3.77 2.59 6.69 7.76l.36.65c2.43 4.3 3.64 6.45 2.54 8.02S17.8 21 12.36 21h-.72C6.2 21 3.5 21 2.4 19.43s.11-3.72 2.54-8.02z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 8v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
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
              d="M12 3c-2.31 0-3.77 2.59-6.69 7.76l-.36.65c-2.43 4.3-3.64 6.45-2.54 8.02S6.2 21 11.64 21h.72c5.43 0 8.14 0 9.23-1.57 1.1-1.57-.11-3.72-2.54-8.02l-.36-.65C15.77 5.6 14.3 3 12 3"
              fill="currentColor"
            />
            <path
              d="M12 7.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
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
              d="M5.31 10.76C8.23 5.6 9.7 3 12 3s3.77 2.59 6.69 7.76l.36.65c2.43 4.3 3.64 6.45 2.54 8.02S17.8 21 12.36 21h-.72C6.2 21 3.5 21 2.4 19.43s.11-3.72 2.54-8.02zM12 7.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlertTriangle;
