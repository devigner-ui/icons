import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentMedicine = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentMedicine(
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
              opacity={duotone ? "0.4" : "1"}
              d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 6v2m0 0v2m0-2h-2m2 0h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 14h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 18h6"
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
              opacity={duotone ? "0.4" : "1"}
              d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 5.25c.41 0 .75.34.75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V10a.75.75 0 0 1-1.5 0V8.75H10a.75.75 0 1 1 0-1.5h1.25V6c0-.41.34-.75.75-.75M7.25 14c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 4c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
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
              d="M4.17 3.17C3 4.34 3 6.23 3 10v4c0 3.77 0 5.66 1.17 6.83S7.23 22 11 22h2c3.77 0 5.66 0 6.83-1.17S21 17.77 21 14v-4c0-3.77 0-5.66-1.17-6.83S16.77 2 13 2h-2C7.23 2 5.34 2 4.17 3.17M12.75 6a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 1 0 0 1.5h1.25V10a.75.75 0 0 0 1.5 0V8.75H14a.75.75 0 0 0 0-1.5h-1.25zM8 13.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm1 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentMedicine;
