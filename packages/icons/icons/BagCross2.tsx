import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBagCross2 = forwardRef<SVGSVGElement, IconProps>(
  function IconBagCross2(
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M13.74 16.11 11.62 14"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m13.72 14.02-2.12 2.12"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6c.27-2.44-.43-4.43-4.7-4.43h-8C4.4 8 3.7 9.99 3.97 12.43l.75 6c.21 1.96.93 3.57 4.95 3.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.17 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38"
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
              d="M16.86 8.86a.7.7 0 0 1-.7-.7V6.88a3.5 3.5 0 0 0-3.83-3.47c-1.68.16-3.15 1.87-3.15 3.65v.9a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7v-.9c0-2.5 2.02-4.81 4.41-5.04a4.87 4.87 0 0 1 5.36 4.86v1.28a.7.7 0 0 1-.69.7"
              fill="currentColor"
            />
            <path
              d="M20.63 8.96c-.84-.93-2.22-1.38-4.24-1.38H8.95c-2.02 0-3.4.45-4.24 1.38-.97 1.08-.94 2.52-.83 3.52l.7 5.57C4.79 20 5.58 22 9.88 22h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.14-2.43-.83-3.51m-7.96 9.62a3.8 3.8 0 1 1 0-7.59 3.8 3.8 0 0 1 0 7.59"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 18.58a3.79 3.79 0 1 0 0-7.58 3.79 3.79 0 0 0 0 7.58"
              fill="currentColor"
            />
            <path
              d="m14.27 15.31-.53-.53.5-.5a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.5.5-.53-.53a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.53.53-.55.55a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l.55-.55.53.53q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
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
              d="M20.63 8.96q-1-1.1-3.08-1.32v-.76a4.87 4.87 0 0 0-5.36-4.86c-2.39.23-4.4 2.54-4.4 5.04v.58q-2.09.22-3.08 1.32c-.97 1.08-.94 2.52-.83 3.52l.7 5.57C4.79 20 5.58 22 9.88 22h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.14-2.43-.83-3.51m-8.3-5.55a3.5 3.5 0 0 1 3.83 3.47v.7H9.18v-.52c0-1.78 1.47-3.49 3.15-3.65m.34 15.17a3.8 3.8 0 1 1 0-7.59 3.8 3.8 0 0 1 0 7.59"
              fill="currentColor"
            />
            <path
              d="m14.27 15.31-.53-.53.5-.5a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.5.5-.53-.53a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.53.53-.55.55a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l.55-.55.53.53q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBagCross2;
