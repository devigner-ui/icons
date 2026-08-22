import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSortFromBottomToTop = forwardRef<SVGSVGElement, IconProps>(
  function IconSortFromBottomToTop(
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
              d="M4 8h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 13h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 18h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17 20V4l3 4"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 20.75c.41 0 .75-.34.75-.75V6.25l1.65 2.2a.75.75 0 0 0 1.2-.9l-3-4a.75.75 0 0 0-1.35.45v16c0 .41.34.75.75.75"
              fill="currentColor"
            />
            <path
              d="M3.25 8c0 .41.34.75.75.75h9a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.25 13c0 .41.34.75.75.75h7a.75.75 0 1 0 0-1.5H6a.75.75 0 0 0-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.25 18c0 .41.34.75.75.75h5a.75.75 0 1 0 0-1.5H8a.75.75 0 0 0-.75.75"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.76 3.29c.3-.1.65 0 .84.26l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2V20a.75.75 0 1 1-1.5 0V4c0-.32.2-.6.51-.71M3.25 8c0-.41.34-.75.75-.75h9a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8m2 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m2 5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSortFromBottomToTop;
