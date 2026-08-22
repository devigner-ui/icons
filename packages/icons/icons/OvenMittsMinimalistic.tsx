import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOvenMittsMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconOvenMittsMinimalistic(
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
              d="M10.33 4.78C9.91 3.15 8.67 1.98 7.21 2c-1.77.03-3.18 1.82-3.14 4l-.04 3.34c0 .76 0 1.13-.14 1.47-.13.34-.43.66-1.02 1.3-.58.63-.87 1.1-.87 1.64 0 .81.67 1.47 2.02 2.79l3.57 3.49C8.93 21.34 9.6 22 10.44 22s1.51-.66 2.86-1.97l6.78-6.63a6.3 6.3 0 0 0 0-9.08 6.67 6.67 0 0 0-9.28 0zm0 0-.96.94"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.8 17.58 6.52 13.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="m7.59 20.03-3.57-3.5C2.67 15.24 2 14.57 2 13.76c0-.54.29-1 .87-1.64s.89-.96 1.02-1.3.14-.71.14-1.47L4.07 6C4.03 3.82 5.44 2.03 7.2 2c1.46-.02 2.7 1.15 3.12 2.78l.47-.46a6.67 6.67 0 0 1 9.28 0 6.3 6.3 0 0 1 0 9.08l-6.78 6.63C11.95 21.34 11.28 22 10.44 22s-1.5-.66-2.85-1.97"
              fill="currentColor"
            />
            <path
              d="M7.04 12.86A.75.75 0 0 0 6 13.93l4.28 4.19a.75.75 0 1 0 1.05-1.07z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="m7.59 20.03-3.57-3.5C2.67 15.24 2 14.57 2 13.76c0-.54.29-1 .87-1.64s.89-.96 1.02-1.3.14-.71.14-1.47L4.07 6C4.03 3.82 5.44 2.03 7.2 2c1.46-.02 2.7 1.15 3.12 2.78l.47-.46a6.67 6.67 0 0 1 9.28 0 6.3 6.3 0 0 1 0 9.08l-6.78 6.63C11.95 21.34 11.28 22 10.44 22s-1.5-.66-2.85-1.97m-1.61-7.16c.29-.3.76-.3 1.06-.01l4.28 4.19a.75.75 0 0 1-1.05 1.07L6 13.93a.75.75 0 0 1-.01-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOvenMittsMinimalistic;
