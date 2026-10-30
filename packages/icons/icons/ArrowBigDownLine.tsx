import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowBigDownLine = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowBigDownLine(
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
            d="m16.78 16.68.61-.68c1.95-2.14 2.92-3.22 2.52-4.11S18.08 11 15.19 11H15v-1c0-1.41 0-2.12-.44-2.56S13.41 7 12 7s-2.12 0-2.56.44S9 8.59 9 10v1h-.19c-2.89 0-4.33 0-4.72.89-.21.46-.04.98.44 1.67m2.28 2.66 2.25 2.5C10.44 20.24 11.12 21 12 21s1.56-.76 2.94-2.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 3h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="M14.94 18.72 17.39 16c1.95-2.14 2.92-3.22 2.52-4.11S18.08 11 15.19 11H15v-1c0-1.41 0-2.12-.44-2.56S13.41 7 12 7s-2.12 0-2.56.44S9 8.59 9 10v1h-.19c-2.89 0-4.33 0-4.72.89-.4.89.57 1.97 2.52 4.11l2.45 2.72C10.44 20.24 11.12 21 12 21s1.56-.76 2.94-2.28Z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 3h6"
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
              d="M14.94 18.72 17.39 16c1.95-2.14 2.92-3.22 2.52-4.11S18.08 11 15.19 11H15v-1c0-1.41 0-2.12-.44-2.56S13.41 7 12 7s-2.12 0-2.56.44S9 8.59 9 10v1h-.19c-2.89 0-4.33 0-4.72.89-.4.89.57 1.97 2.52 4.11l2.45 2.72C10.44 20.24 11.12 21 12 21s1.56-.76 2.94-2.28Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 3h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M14.94 18.72 17.39 16c1.95-2.14 2.92-3.22 2.52-4.11S18.08 11 15.19 11H15v-1c0-1.41 0-2.12-.44-2.56S13.41 7 12 7s-2.12 0-2.56.44S9 8.59 9 10v1h-.19c-2.89 0-4.33 0-4.72.89-.4.89.57 1.97 2.52 4.11l2.45 2.72C10.44 20.24 11.12 21 12 21s1.56-.76 2.94-2.28Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 3h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowBigDownLine;
