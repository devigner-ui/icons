import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserMinus2 = forwardRef<SVGSVGElement, IconProps>(
  function IconUserMinus2(
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
              d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.08 22c0-3.87 3.85-7 8.59-7q1.45 0 2.76.37"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 18q0 .48-.12.93-.14.61-.46 1.13a3.97 3.97 0 0 1-6.84 0A4 4 0 1 1 22.67 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.16 17.98h-2.98"
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
              d="M21.64 14.33a4 4 0 1 0-5.95 5.33 4 4 0 0 0 5.95-5.33m-1.47 3.4h-2.99a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.99c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.76 21.5a.5.5 0 0 1-.5.5H4.08a.5.5 0 0 1-.5-.5c0-4.14 4.08-7.5 9.09-7.5q1.56 0 2.95.41a4 4 0 0 0-.37 4.65q.3.52.76.91a3.96 3.96 0 0 0 5.51-.17q.24.81.24 1.7"
              fill="currentColor"
            />
            <path
              d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
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
              d="M12.67 14c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18a.5.5 0 0 0 .5-.5c0-4.14-4.08-7.5-9.09-7.5"
              fill="currentColor"
            />
            <path
              d="M16.38 3.66a4.98 4.98 0 1 0-7.03 7.05A4.98 4.98 0 0 0 17.67 7c0-1.28-.49-2.45-1.29-3.34m-1.84 4.26H10.8a.94.94 0 1 1 0-1.88h3.74a.94.94 0 1 1 0 1.88"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserMinus2;
