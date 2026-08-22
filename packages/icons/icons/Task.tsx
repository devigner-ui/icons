import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTask = forwardRef<SVGSVGElement, IconProps>(function IconTask(
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
            d="M11.67 19.5h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.67 12.5h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.67 5.5h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.67 5.5 1 1 3-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.67 12.5 1 1 3-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.67 19.5 1 1 3-3"
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
            d="M20.67 19.26H11.6a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82h9.07c.45 0 .82.37.82.82 0 .46-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M20.67 12.97H11.6a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82h9.07c.45 0 .82.37.82.82s-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M20.67 6.67H11.6a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82h9.07c.45 0 .82.37.82.82s-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.58 8.03A.8.8 0 0 1 5 7.79l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16L6.16 7.79a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.58 14.33a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.58 20.33a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72a.8.8 0 0 1-.58.24"
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
            d="M20.67 19.26H11.6a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82h9.07c.45 0 .82.37.82.82 0 .46-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M20.67 12.97H11.6a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82h9.07c.45 0 .82.37.82.82s-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M20.67 6.67H11.6a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82h9.07c.45 0 .82.37.82.82s-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M5.58 8.03A.8.8 0 0 1 5 7.79l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16L6.16 7.79a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
          <path
            d="M5.58 14.33a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
          <path
            d="M5.58 20.33a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTask;
