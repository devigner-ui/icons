import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLockCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconLockCircle(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.67 11v-1c0-1.66.5-3 3-3s3 1.34 3 3v1"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 14.6a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.17 17h-5c-2 0-2.5-.5-2.5-2.5v-1c0-2 .5-2.5 2.5-2.5h5c2 0 2.5.5 2.5 2.5v1c0 2-.5 2.5-2.5 2.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M16.42 10.73V10c0-.93 0-3.75-3.75-3.75S8.92 9.07 8.92 10v.73C7.7 11 7.29 11.79 7.29 13.5v1c0 2.2.68 2.88 2.88 2.88h5c2.2 0 2.88-.68 2.88-2.88v-1c0-1.71-.41-2.5-1.63-2.77m-3.75 4.37a1.1 1.1 0 0 1-1.1-1.1c0-.61.49-1.1 1.1-1.1s1.1.49 1.1 1.1-.49 1.1-1.1 1.1m2.25-4.48h-4.5V10c0-1.46.36-2.25 2.25-2.25s2.25.79 2.25 2.25z"
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
              d="M12.67 7.75c-1.89 0-2.25.79-2.25 2.25v.62h4.5V10c0-1.46-.36-2.25-2.25-2.25"
              fill="currentColor"
            />
            <path
              d="M12.67 15.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2"
              fill="currentColor"
            />
            <path
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m5.38 12.5c0 2.2-.68 2.88-2.88 2.88h-5c-2.2 0-2.88-.68-2.88-2.88v-1c0-1.71.41-2.5 1.63-2.77V10c0-.93 0-3.75 3.75-3.75s3.75 2.82 3.75 3.75v.73c1.22.27 1.63 1.06 1.63 2.77z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLockCircle;
