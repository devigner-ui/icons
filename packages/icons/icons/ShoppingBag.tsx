import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShoppingBag = forwardRef<SVGSVGElement, IconProps>(
  function IconShoppingBag(
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
              d="M9.07 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5c.29 2.46-.47 4.47-3.97 4.47H8.18c-3.51 0-4.27-2.01-3.97-4.47l.9-7.5c.22-1.94.56-3.53 3.96-3.53"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.67 8V4.5c0-1.5 1-2.5 2.5-2.5h3c1.5 0 2.5 1 2.5 2.5V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.08 17.03H8.67"
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
              opacity={duotone ? "0.4" : "1"}
              d="M17.16 22H8.18c-3.51 0-4.27-2.01-3.98-4.47l.9-7.5c.23-1.94.57-3.53 3.97-3.53h7.2c3.4 0 3.74 1.59 3.97 3.53l.75 6.25.15 1.25.03.24c.21 2.35-.61 4.23-4.01 4.23"
              fill="currentColor"
            />
            <path
              d="M16.67 8.75a.76.76 0 0 1-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75A.76.76 0 0 1 7.92 8V4.5a3.1 3.1 0 0 1 3.25-3.25h3a3.1 3.1 0 0 1 3.25 3.25V8c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="m21.17 17.77-.09.01H8.67a.75.75 0 1 1 0-1.5h12.32l.15 1.25z"
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
              d="M16.67 8.75a.76.76 0 0 1-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75A.76.76 0 0 1 7.92 8V4.5a3.1 3.1 0 0 1 3.25-3.25h3a3.1 3.1 0 0 1 3.25 3.25V8c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M8.67 17.78a.75.75 0 1 1 0-1.5h11.76a.5.5 0 0 0 .5-.56l-.68-5.69c-.24-1.94-.58-3.53-3.98-3.53h-7.2c-3.4 0-3.74 1.59-3.97 3.53l-.9 7.5C3.91 19.99 4.67 22 8.18 22h8.98c3.16 0 4.09-1.63 4.04-3.75a.5.5 0 0 0-.5-.47z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShoppingBag;
