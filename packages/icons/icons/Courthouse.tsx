import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCourthouse = forwardRef<SVGSVGElement, IconProps>(
  function IconCourthouse(
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
              d="M12.67 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.67 8h-10q-3 0-3 3v11h16V11q0-3-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 12h14.84"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.66 12v10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.66 12v10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.66 12v10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M18.09 1.38a.8.8 0 0 0-.7-.08 6 6 0 0 1-4.44 0 .76.76 0 0 0-1.03.7v6c0 .41.34.75.75.75s.75-.34.75-.75V6.02a7.4 7.4 0 0 0 4.53-.32.8.8 0 0 0 .47-.7V2a.7.7 0 0 0-.33-.62"
              fill="currentColor"
            />
            <path
              d="M22.67 21.25h-1.25V11c0-2.42-1.33-3.75-3.75-3.75h-10c-2.42 0-3.75 1.33-3.75 3.75v10.25H2.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h20c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75m-2.75-8.5v8.5h-2.51v-8.5zm-8.01 8.5h-2.5v-8.5h2.5zm1.5-8.5h2.5v8.5h-2.5zm-7.99 0h2.49v8.5H5.42z"
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
              d="M22.67 21.25h-1.25V11c0-2.42-1.33-3.75-3.75-3.75h-4.25V6.02a7.4 7.4 0 0 0 4.53-.32.8.8 0 0 0 .47-.7V2a.76.76 0 0 0-1.03-.7 6 6 0 0 1-4.44 0 .76.76 0 0 0-1.03.7v5.25H7.67c-2.42 0-3.75 1.33-3.75 3.75v10.25H2.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h20c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75m-14.76 0H5.42v-8.5h2.49zm4 0h-2.5v-8.5h2.5zm4 0h-2.5v-8.5h2.5zm4.01 0h-2.51v-8.5h2.51z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCourthouse;
