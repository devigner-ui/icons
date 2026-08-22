import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowSwap = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowSwap(
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
              d="m9.68 20.5-5.02-5.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.68 3.5v17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m15.66 3.5 5.02 5.01"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.66 20.5v-17"
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
              d="M8.48 2h8.37c3.65 0 5.82 2.17 5.82 5.81v8.37c0 3.64-2.17 5.81-5.81 5.81H8.48c-3.64.01-5.81-2.16-5.81-5.8V7.81C2.67 4.17 4.84 2 8.48 2"
              fill="currentColor"
            />
            <path
              d="M10.91 6.25a.75.75 0 0 0-.75.75v8.19l-1.67-1.67a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l2.95 2.95a.8.8 0 0 0 .53.22q.14 0 .29-.06a.8.8 0 0 0 .47-.7V7a.77.77 0 0 0-.76-.75"
              fill="currentColor"
            />
            <path
              d="m17.91 9.42-2.95-2.95a1 1 0 0 0-.24-.16.7.7 0 0 0-.57 0 .8.8 0 0 0-.47.69v10c0 .41.34.75.75.75s.75-.34.75-.75V8.81l1.67 1.67q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-5.2 15q0 .15-.06.29a.8.8 0 0 1-.7.47.8.8 0 0 1-.53-.22l-2.95-2.95a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.67 1.67V7c0-.41.34-.75.75-.75s.76.34.76.75zm6.25-6.52a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.67-1.67V17c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7q0-.14.06-.29a.8.8 0 0 1 .41-.41.7.7 0 0 1 .57 0q.13.06.24.16l2.95 2.95c.29.3.29.78 0 1.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowSwap;
