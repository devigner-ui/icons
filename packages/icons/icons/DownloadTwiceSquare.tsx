import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDownloadTwiceSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconDownloadTwiceSquare(
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
              d="M8.5 7v7m0 0 2.5-3m-2.5 3L6 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 7v7m0 0 2.5-3m-2.5 3L13 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 17H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M8.5 6.25c.41 0 .75.34.75.75v4.93l1.17-1.41a.75.75 0 0 1 1.16.96l-2.5 3a.75.75 0 0 1-1.16 0l-2.5-3a.75.75 0 1 1 1.16-.96l1.17 1.4V7c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M15.5 6.25c.41 0 .75.34.75.75v4.93l1.17-1.41a.75.75 0 0 1 1.16.96l-2.5 3a.75.75 0 0 1-1.16 0l-2.5-3a.75.75 0 1 1 1.16-.96l1.17 1.4V7c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M6 16.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M9.25 7a.75.75 0 0 0-1.5 0v4.93l-1.17-1.41a.75.75 0 0 0-1.16.96l2.5 3a.75.75 0 0 0 1.16 0l2.5-3a.75.75 0 0 0-1.16-.96l-1.17 1.4zm6.25-.75c.41 0 .75.34.75.75v4.93l1.17-1.41a.75.75 0 0 1 1.16.96l-2.5 3a.75.75 0 0 1-1.16 0l-2.5-3a.75.75 0 0 1 1.16-.96l1.17 1.4V7c0-.41.34-.75.75-.75m-9.5 10a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDownloadTwiceSquare;
