import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBackSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconBackSquare(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.67 15.38h4.92a3.08 3.08 0 0 0 0-6.16H7.82"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.24 10.77 7.67 9.19l1.57-1.57"
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
              d="M16.86 2H8.49C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M14.59 8.48H9.44l.33-.33a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L7.14 8.66a.75.75 0 0 0 0 1.06l1.57 1.57q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-.26-.26h5.08a2.33 2.33 0 0 1 0 4.66H9.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h4.92a3.83 3.83 0 1 0 0-7.65"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-2.27 14.13H9.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4.92a2.33 2.33 0 0 0 0-4.66H9.52l.26.26a.76.76 0 0 1-1.07 1.07L7.14 9.72a.75.75 0 0 1 0-1.06l1.57-1.57a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.33.33h5.15a3.83 3.83 0 1 1 0 7.65"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBackSquare;
