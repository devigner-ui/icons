import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarCircle(
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M10.56 5.83v2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.78 5.83v2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.2 10.14h8.94"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.17 17.67h-3c-2.5 0-4-1.8-4-4v-3c0-2.2 1.5-4 4-4h3c2.5 0 4 1.8 4 4v3c0 2.2-1.5 4-4 4"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M17.82 9.44a3.6 3.6 0 0 0-2.3-2.06v-.79a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.59h-2.71v-.59a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.79a3.6 3.6 0 0 0-2.3 2.06c-.14.33.1.71.46.71h9.37a.52.52 0 0 0 .48-.71"
              fill="currentColor"
            />
            <path
              d="M17.67 11.14c.28 0 .5.22.5.5v2.53c0 2.2-1.5 4-4 4h-3c-2.5 0-4-1.8-4-4v-2.53c0-.28.22-.5.5-.5z"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M7.52 9.44a3.6 3.6 0 0 1 2.3-2.06v-.8c0-.41.34-.75.75-.75s.75.34.75.75v.59h2.71v-.59c0-.41.34-.75.75-.75s.75.34.75.75v.79a3.6 3.6 0 0 1 2.3 2.06c.14.33-.1.71-.46.71H7.98a.5.5 0 0 1-.46-.7m10.65 4.73c0 2.2-1.5 4-4 4h-3c-2.5 0-4-1.8-4-4v-2.53c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarCircle;
