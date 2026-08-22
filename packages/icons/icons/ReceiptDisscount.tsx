import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReceiptDisscount = forwardRef<SVGSVGElement, IconProps>(
  function IconReceiptDisscount(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.73 19.7a1.76 1.76 0 0 1 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.79-.15c1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 13 6-6"
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 7.5"
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
              fill="currentColor"
              d="M6.73 19.7a1.76 1.76 0 0 1 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.79-.15c1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              fill="currentColor"
              d="M15 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M9 9c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m-.37 5.55a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.73-6.73c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.73 6.73a.7.7 0 0 1-.53.22"
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
              d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.79-.15c1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2M9 7c.55 0 1 .45 1 1s-.44 1-1 1-1-.45-1-1 .44-1 1-1m6 7c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m.9-6.41-6.73 6.73q-.23.22-.53.22c-.3 0-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l6.73-6.73c.29-.29.77-.29 1.06 0s.29.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconReceiptDisscount;
