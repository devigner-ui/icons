import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRouting3 = forwardRef<SVGSVGElement, IconProps>(function IconRouting3(
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
            cx="5"
            cy="5.00024"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="19"
            cy="19.0002"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 4.25a.75.75 0 0 0 0 1.5zM13 19l.53.53c.3-.3.3-.77 0-1.06zm4.2-10.31.4.63zM6.8 15.3l.4.64zm5.23 1.66a.75.75 0 0 0-1.06 1.06zm-1.06 3a.75.75 0 0 0 1.06 1.06zm5.16-15.72H11v1.5h5.13zm-3.13 14H7.87v1.5H13zm3.8-10.2L6.4 14.68l.8 1.27 10.4-6.63zm-3.27 10.42-1.5-1.5-1.06 1.06 1.5 1.5zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5zm-4.6-.22c-1.25 0-1.73-1.63-.67-2.3l-.8-1.27a2.75 2.75 0 0 0 1.47 5.07zm8.26-12.5c1.25 0 1.73 1.63.67 2.3l.8 1.27a2.75 2.75 0 0 0-1.47-5.07z"
            fill="currentColor"
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
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="5"
            cy="5.00024"
            r="3"
            fill="currentColor"
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="19"
            cy="19.0002"
            r="3"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.25 5c0-.41.34-.75.75-.75h5.13c2.75 0 3.8 3.6 1.48 5.07L7.2 15.95c-1.06.67-.58 2.3.67 2.3h3.32l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l.22-.22H7.87c-2.75 0-3.8-3.6-1.48-5.07L16.8 8.05c1.06-.67.58-2.3-.67-2.3H11a.75.75 0 0 1-.75-.75"
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
          <circle cx="5" cy="5.00024" r="3" fill="currentColor" />
          <circle cx="19" cy="19.0002" r="3" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.25 5c0-.41.34-.75.75-.75h5.13c2.75 0 3.8 3.6 1.48 5.07L7.2 15.95c-1.06.67-.58 2.3.67 2.3h3.32l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l.22-.22H7.87c-2.75 0-3.8-3.6-1.48-5.07L16.8 8.05c1.06-.67.58-2.3-.67-2.3H11a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRouting3;
