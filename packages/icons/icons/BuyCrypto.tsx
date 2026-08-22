import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBuyCrypto = forwardRef<SVGSVGElement, IconProps>(
  function IconBuyCrypto(
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
              d="M22.67 8.5a6.5 6.5 0 0 1-7.02 6.48 6.5 6.5 0 0 0-5.96-5.96l-.02-.52a6.5 6.5 0 1 1 13 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.67 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.29 14.62 9.17 13l.88 1.62 1.62.88-1.62.88L9.17 18l-.88-1.62-1.62-.88z"
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
              d="M22.67 8.5a6.5 6.5 0 0 1-7.02 6.48 6.5 6.5 0 0 0-5.96-5.96l-.02-.52a6.5 6.5 0 1 1 13 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.67 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
              fill="currentColor"
            />
            <path
              d="M8.29 14.62 9.17 13l.88 1.62 1.62.88-1.62.88L9.17 18l-.88-1.62-1.62-.88z"
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
              d="M22.67 8.5a6.5 6.5 0 0 1-5.52 6.42v-.06a8.06 8.06 0 0 0-7.37-7.34h-.03a6.5 6.5 0 0 1 12.92.98"
              fill="currentColor"
            />
            <path
              d="M15.65 14.98a6.5 6.5 0 1 0-12.98 1.05 6.5 6.5 0 0 0 12.98-1.05m-5.6 1.4L9.17 18l-.88-1.62-1.62-.88 1.62-.88.88-1.62.88 1.62 1.62.88z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBuyCrypto;
