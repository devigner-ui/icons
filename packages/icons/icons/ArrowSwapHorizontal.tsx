import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowSwapHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowSwapHorizontal(
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
                d="m21.17 14.99-5.01 5.02"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.17 14.99h17"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="m4.17 9.01 5.01-5.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.17 9.01h-17"
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
              opacity={duotone ? "0.4" : "1"}
              d="M8.48 2h8.37c3.65 0 5.82 2.17 5.82 5.81v8.37c0 3.64-2.17 5.81-5.81 5.81H8.48c-3.64.01-5.81-2.16-5.81-5.8V7.81C2.67 4.17 4.84 2 8.48 2"
              fill="currentColor"
            />
            <path
              d="M18.36 13.48a.8.8 0 0 0-.7-.47H7.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h8.19l-1.67 1.67a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l2.95-2.95a1 1 0 0 0 .16-.24.7.7 0 0 0 0-.57"
              fill="currentColor"
            />
            <path
              d="M6.98 10.52a.8.8 0 0 0 .69.47h10c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H9.48l1.67-1.67a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L7.14 9.71a1 1 0 0 0-.16.24.7.7 0 0 0 0 .57"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m1.5 12.05a1 1 0 0 1-.16.24l-2.95 2.95a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.67-1.67H7.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10q.15 0 .29.06.28.12.41.41.1.28-.01.57m-.69-3.06h-10a.8.8 0 0 1-.7-.47.7.7 0 0 1 0-.57q.07-.14.17-.24l2.95-2.95a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L9.48 9.49h8.19c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowSwapHorizontal;
