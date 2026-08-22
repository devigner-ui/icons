import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserBlock = forwardRef<SVGSVGElement, IconProps>(
  function IconUserBlock(
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
            <circle
              cx="12"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.5 13.54A11 11 0 0 0 12 13c-3.87 0-7 1.8-7 4s0 4 7 4l1-.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m19.95 17.05-3.9 3.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="18"
              cy="19.0005"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
            <path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 15.75a2.75 2.75 0 0 0-2.38 4.12l3.75-3.75q-.61-.36-1.37-.37m2.42 1.44-3.73 3.73q.6.32 1.31.33a2.75 2.75 0 0 0 2.42-4.06m-6.67 1.31a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 14.52a4.24 4.24 0 0 0-5.75 3.98 4.2 4.2 0 0 0 1.77 3.45Q13.1 22 12 22c-8 0-8-2.01-8-4.5 0-2.48 3.58-4.5 8-4.5 2.39 0 4.53.59 6 1.52"
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
            <path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 15.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M16.25 19a1.75 1.75 0 0 1 2.34-1.65l-2.24 2.24q-.1-.28-.1-.59m1.16 1.65 2.24-2.24a1.75 1.75 0 0 1-2.24 2.24"
              fill="currentColor"
            />
            <path
              d="M12 22c-8 0-8-2.01-8-4.5 0-2.48 3.58-4.5 8-4.5 2.37 0 4.5.58 5.96 1.5a4.5 4.5 0 0 0-3.39 7.41Q13.45 22 12 22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserBlock;
