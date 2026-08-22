import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicFilter = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicFilter(
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
              d="M2.67 3h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 9h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 15h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 21h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.51 22a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.67 18.37V9.86c0-1.81-1.14-2.06-2.3-1.75L16.04 9.3c-.8.22-1.34.84-1.34 1.75v8.77"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 20.55a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m14.69 13.6 7.98-2.18"
                stroke="currentColor"
                strokeWidth={strokeWidth}
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
              d="M22.67 3.75h-20A.76.76 0 0 1 1.92 3c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.67 9.75h-9A.76.76 0 0 1 1.92 9c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.67 15.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.67 21.75h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M22.53 7.68q-.9-.67-2.35-.28l-4.35 1.18a2.5 2.5 0 0 0-1.89 2.47v6.23a3 3 0 0 0-1.43-.39 2.93 2.93 0 1 0 2.93 2.93v-5.65l6.48-1.77v3.43a3 3 0 0 0-1.43-.39 2.93 2.93 0 1 0 2.93 2.93v-8.5q0-1.52-.89-2.19M12.51 21.25a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86m7.98-1.45a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86"
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
              d="M22.67 3.75h-20A.76.76 0 0 1 1.92 3c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M11.67 9.75h-9A.76.76 0 0 1 1.92 9c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.67 15.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M6.67 21.75h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M22.53 7.68q-.9-.67-2.35-.28l-4.35 1.18a2.5 2.5 0 0 0-1.89 2.47v6.23a3 3 0 0 0-1.43-.39 2.93 2.93 0 1 0 2.93 2.93v-5.65l6.48-1.77v3.43a3 3 0 0 0-1.43-.39 2.93 2.93 0 1 0 2.93 2.93v-8.5q0-1.52-.89-2.19M12.51 21.25a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86m7.98-1.45a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicFilter;
