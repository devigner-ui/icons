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
        {variant === "Broken" ? (
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
            d="M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.5 6.5 0 0 0-5.96-5.96L9 8.5a6.5 6.5 0 1 1 13 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M4.68 20.76A6.5 6.5 0 1 1 8.5 22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.62 14.62 8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.5 6.5 0 0 0-5.96-5.96L9 8.5a6.5 6.5 0 1 1 13 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.62 14.62 8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5z"
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
              d="M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.5 6.5 0 0 0-5.96-5.96L9 8.5a6.5 6.5 0 1 1 13 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
              fill="currentColor"
            />
            <path
              d="M7.62 14.62 8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5z"
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
              d="M22 8.5a6.5 6.5 0 0 1-5.52 6.42v-.06a8.06 8.06 0 0 0-7.37-7.34h-.03A6.5 6.5 0 0 1 22 8.5"
              fill="currentColor"
            />
            <path
              d="M14.98 14.98A6.5 6.5 0 1 0 2 16.03a6.5 6.5 0 0 0 12.98-1.05m-5.6 1.4L8.5 18l-.88-1.62L6 15.5l1.62-.88L8.5 13l.88 1.62 1.62.88z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBuyCrypto;
