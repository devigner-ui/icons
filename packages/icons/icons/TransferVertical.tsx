import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTransferVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconTransferVertical(
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
              d="M10 4v16l-6-5.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 20V4l6 5.5"
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
              d="M20 10.25a.75.75 0 0 0 .5-1.3l-6-5.5a.75.75 0 0 0-1.25.55v16a.75.75 0 0 0 1.5 0v-9.75z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 13.75h5.25V4a.75.75 0 1 1 1.5 0v16a.75.75 0 0 1-1.26.55l-6-5.5a.75.75 0 0 1 .51-1.3"
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
              d="M4 13.75a.75.75 0 0 0-.5 1.3l6 5.5a.75.75 0 0 0 1.25-.55V4a.75.75 0 0 0-1.5 0v9.75z"
              fill="currentColor"
            />
            <path
              d="M20 10.25h-5.25V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 1.26-.55l6 5.5a.75.75 0 0 1-.51 1.3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTransferVertical;
