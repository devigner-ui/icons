import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTransferHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconTransferHorizontal(
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
              d="M20 10H4l5.5-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 14h16l-5.5 6"
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
              d="M10.25 4a.75.75 0 0 0-1.3-.5l-5.5 6A.75.75 0 0 0 4 10.74h16a.75.75 0 0 0 0-1.5h-9.75z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.75 20v-5.25H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .55 1.26l-5.5 6a.75.75 0 0 1-1.3-.51"
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
              d="M10.25 4a.75.75 0 0 0-1.3-.5l-5.5 6A.75.75 0 0 0 4 10.74h16a.75.75 0 0 0 0-1.5h-9.75z"
              fill="currentColor"
            />
            <path
              d="M13.75 20v-5.25H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .55 1.26l-5.5 6a.75.75 0 0 1-1.3-.51"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTransferHorizontal;
