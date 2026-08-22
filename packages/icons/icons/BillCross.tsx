import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBillCross = forwardRef<SVGSVGElement, IconProps>(
  function IconBillCross(
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
              d="M17.67 2H6.33l-.6.01a3.1 3.1 0 0 0-2.72 2.86L3 5.5v14.76c0 .87 1.06 1.24 1.56.54a.84.84 0 0 1 1.38 0l.43.61c.57.79 1.7.79 2.26 0a1.37 1.37 0 0 1 2.24 0c.57.79 1.7.79 2.26 0a1.37 1.37 0 0 1 2.24 0c.57.79 1.7.79 2.26 0l.43-.6a.84.84 0 0 1 1.38 0c.5.7 1.56.32 1.56-.55V5.5l-.01-.63a3.1 3.1 0 0 0-2.73-2.86z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7.5 15.5h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m14 8-4 4m0-4 4 4"
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
              d="M6.33 2h11.34l.6.01a3.1 3.1 0 0 1 2.72 2.86l.01.63v14.76c0 .87-1.06 1.24-1.56.54a.84.84 0 0 0-1.38 0l-.43.61c-.57.79-1.7.79-2.25 0a1.37 1.37 0 0 0-2.26 0c-.56.79-1.68.79-2.24 0a1.37 1.37 0 0 0-2.26 0c-.56.79-1.68.79-2.24 0l-.44-.6a.84.84 0 0 0-1.38 0c-.5.7-1.56.32-1.56-.55V5.5l.01-.63a3.1 3.1 0 0 1 2.73-2.86z"
              fill="currentColor"
            />
            <path
              d="M10.53 7.47a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94z"
              fill="currentColor"
            />
            <path
              d="M7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"
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
              d="M6.33 2h11.34l.6.01a3.1 3.1 0 0 1 2.72 2.86l.01.63v14.76c0 .87-1.06 1.24-1.56.54a.84.84 0 0 0-1.38 0l-.43.61c-.57.79-1.7.79-2.25 0a1.37 1.37 0 0 0-2.26 0c-.56.79-1.68.79-2.24 0a1.37 1.37 0 0 0-2.26 0c-.56.79-1.68.79-2.24 0l-.44-.6a.84.84 0 0 0-1.38 0c-.5.7-1.56.32-1.56-.55V5.5l.01-.63a3.1 3.1 0 0 1 2.73-2.86zm4.2 5.47a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94zM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBillCross;
