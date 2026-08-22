import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHospital2 = forwardRef<SVGSVGElement, IconProps>(
  function IconHospital2(
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
              d="M2.67 22h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.67 2h-10c-3 0-4 1.79-4 4v16h18V6c0-2.21-1-4-4-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.73 15H10.6a.95.95 0 0 0-.94.94V22h6v-6.06a.9.9 0 0 0-.93-.94"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.67 6v5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.17 8.5h5"
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
              d="M22.67 21.25h-20a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h20c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 2h-10c-3 0-4 1.79-4 4v16h18V6c0-2.21-1-4-4-4"
              fill="currentColor"
            />
            <path
              d="M14.73 15H10.6a.95.95 0 0 0-.94.94V22h6v-6.06a.9.9 0 0 0-.93-.94"
              fill="currentColor"
            />
            <path
              d="M15.17 7.75h-1.75V6a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.75h-1.75a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.75V11c0 .41.34.75.75.75s.75-.34.75-.75V9.25h1.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
              d="M22.67 21.25h-20a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h20c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="M17.67 2h-10c-3 0-4 1.79-4 4v16h6v-6.06c0-.52.42-.94.94-.94h4.13c.51 0 .94.42.94.94V22h6V6c-.01-2.21-1.01-4-4.01-4m-2.5 7.25h-1.75V11c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9.25h-1.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.75V6c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHospital2;
