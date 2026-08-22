import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageCircle(
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
              d="M17.92 10.18v2.63q0 .25-.03.49-.23 2.65-3.12 2.65h-.26a.5.5 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.6.6 0 0 0-.42-.21h-.26c-2.1 0-3.15-.52-3.15-3.15v-2.63q0-2.89 2.65-3.12.24-.03.49-.03h4.2q3.16.03 3.16 3.16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M17.92 10.18v2.63q0 .25-.03.49-.23 2.65-3.12 2.65h-.26a.5.5 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.6.6 0 0 0-.42-.21h-.26c-2.1 0-3.15-.52-3.15-3.15v-2.63q0-2.89 2.65-3.12.24-.03.49-.03h4.2q3.16.03 3.16 3.16"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m5.25 10.81q0 .25-.03.49-.23 2.65-3.12 2.65h-.26a.5.5 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.6.6 0 0 0-.42-.21h-.26c-2.09 0-3.15-.52-3.15-3.15v-2.63q0-2.89 2.65-3.12l.5-.01h4.2q3.14 0 3.15 3.15z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageCircle;
