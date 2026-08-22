import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSliderHorizontal2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSliderHorizontal2(
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
              d="M5.67 16.5v-9q0-.93.09-1.66c.29-2.63 1.53-3.34 4.91-3.34h4c3.38 0 4.62.71 4.91 3.34q.1.73.09 1.66v9q0 .93-.09 1.66c-.29 2.63-1.53 3.34-4.91 3.34h-4c-3.38 0-4.62-.71-4.91-3.34q-.1-.73-.09-1.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 19.5v-15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 19V4"
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
              d="M4.17 5.06v13.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M22.67 5.06v13.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.27 21.25h8.8a3 3 0 0 0 3-3V5.75a3 3 0 0 0-3-3h-8.8a3 3 0 0 0-3 3v12.5a3 3 0 0 0 3 3"
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
              d="M4.17 5.06v13.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M22.67 5.06v13.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M8.67 21.25h8a3 3 0 0 0 3-3V5.75a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v12.5a3 3 0 0 0 3 3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSliderHorizontal2;
