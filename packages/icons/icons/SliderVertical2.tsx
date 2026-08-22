import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSliderVertical2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSliderVertical2(
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
              d="M8.17 5h9q.93 0 1.66.09c2.63.29 3.34 1.53 3.34 4.91v4c0 3.38-.71 4.62-3.34 4.91q-.73.1-1.66.09h-9q-.93 0-1.66-.09c-2.63-.29-3.34-1.53-3.34-4.91v-4c0-3.38.71-4.62 3.34-4.91q.73-.1 1.66-.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.17 2h15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 22h15"
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
              d="M19.61 3.5H5.73a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h13.88c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M19.61 22H5.73a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h13.88c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.42 7.6v8.8a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V7.6a3 3 0 0 0-3-3H6.42a3 3 0 0 0-3 3"
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
              d="M19.61 3.5H5.73a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h13.88c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M19.61 22H5.73a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h13.88c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M3.42 8v8a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6.42a3 3 0 0 0-3 3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSliderVertical2;
