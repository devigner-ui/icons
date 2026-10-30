import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChartLineUp = forwardRef<SVGSVGElement, IconProps>(
  function IconChartLineUp(
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
            d="M17.97 22H22"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 2v17a3 3 0 0 0 3 3h8.98"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.99 8.18 21 7"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m5 17 4.59-5.36a2 2 0 0 1 2.93-.11l.95.95a2 2 0 0 0 2.93-.11l1.15-1.35"
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
              d="M2 2v17a3 3 0 0 0 3 3h17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 17 4.59-5.36a2 2 0 0 1 2.93-.11l.95.95a2 2 0 0 0 2.93-.11L21 7"
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
              d="M22 22.75H5A3.75 3.75 0 0 1 1.25 19V2c0-.41.34-.75.75-.75s.75.34.75.75v17A2.25 2.25 0 0 0 5 21.25h17c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 17.75a1 1 0 0 1-.49-.18.76.76 0 0 1-.08-1.06l4.59-5.36a2.77 2.77 0 0 1 4.03-.16l.95.95q.38.37.93.37.54-.02.9-.44l4.59-5.36a.76.76 0 0 1 1.06-.08c.31.27.35.74.08 1.06l-4.59 5.36a2.77 2.77 0 0 1-4.03.16l-.94-.95a1.3 1.3 0 0 0-.93-.37q-.54.03-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26"
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
              d="M22 22.75H5A3.75 3.75 0 0 1 1.25 19V2c0-.41.34-.75.75-.75s.75.34.75.75v17A2.25 2.25 0 0 0 5 21.25h17c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M5 17.75a1 1 0 0 1-.49-.18.76.76 0 0 1-.08-1.06l4.59-5.36a2.77 2.77 0 0 1 4.03-.16l.95.95q.38.37.93.37.54-.02.9-.44l4.59-5.36a.76.76 0 0 1 1.06-.08c.31.27.35.74.08 1.06l-4.59 5.36a2.77 2.77 0 0 1-4.03.16l-.94-.95a1.3 1.3 0 0 0-.93-.37q-.54.03-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChartLineUp;
