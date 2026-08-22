import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrangeVerticalCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconArrangeVerticalCircle(
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
                d="m14.49 6.85 3.04 3.04"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.49 17.15V6.85"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.85 17.15-3.04-3.04"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.85 6.85v10.3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
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
              d="m18.06 9.26-3.04-3.04a1 1 0 0 0-.24-.16.7.7 0 0 0-.57 0 .8.8 0 0 0-.47.7v10.31c0 .41.34.75.75.75s.75-.34.75-.75v-8.5L17 10.33q.23.22.53.22t.53-.22a.77.77 0 0 0 0-1.07"
              fill="currentColor"
            />
            <path
              d="M11.6 6.75a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v8.5l-1.76-1.76a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l3.04 3.04a.8.8 0 0 0 .53.22q.14 0 .29-.06a.8.8 0 0 0 .47-.7z"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M11.6 17.15q0 .15-.06.29a.8.8 0 0 1-.7.47.8.8 0 0 1-.53-.22l-3.04-3.04a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.76 1.76v-8.5c0-.41.34-.75.75-.75s.75.34.75.75zm6.46-6.73a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.76-1.76v8.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V6.85q0-.14.06-.29a.8.8 0 0 1 .41-.41.7.7 0 0 1 .57 0q.13.06.24.16l3.04 3.04c.29.3.29.77 0 1.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrangeVerticalCircle;
