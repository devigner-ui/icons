import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSliderSideBars = forwardRef<SVGSVGElement, IconProps>(
  function IconSliderSideBars(
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
            d="M11.55 2.5H14c3.38 0 4.62.71 4.91 3.34q.1.73.09 1.66v9q0 .93-.09 1.66c-.23 2.08-1.05 2.96-3.07 3.24m-3.49.1H10c-3.38 0-4.62-.71-4.91-3.34q-.1-.73-.09-1.66v-9q0-.93.09-1.66c.23-2.05 1.03-2.93 2.96-3.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 19.5v-15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 19V4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="M5 16.5v-9q0-.93.09-1.66C5.38 3.21 6.62 2.5 10 2.5h4c3.38 0 4.62.71 4.91 3.34q.1.73.09 1.66v9q0 .93-.09 1.66c-.29 2.63-1.53 3.34-4.91 3.34h-4c-3.38 0-4.62-.71-4.91-3.34q-.1-.73-.09-1.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 19.5v-15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 19V4"
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
              d="M3.5 5.06v13.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M22 5.06v13.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.6 21.25h8.8a3 3 0 0 0 3-3V5.75a3 3 0 0 0-3-3H7.6a3 3 0 0 0-3 3v12.5a3 3 0 0 0 3 3"
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
              d="M3.5 5.06v13.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M22 5.06v13.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M8 21.25h8a3 3 0 0 0 3-3V5.75a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v12.5a3 3 0 0 0 3 3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSliderSideBars;
