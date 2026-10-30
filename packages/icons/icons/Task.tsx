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
            d="M11 19.5h10"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20 12.5h1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11 12.5h5.49"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11 5.5h10"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m3 5.5 1 1 3-3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m3 12.5 1 1 3-3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m3 19.5 1 1 3-3"
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
            d="M11 19.5h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 12.5h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 5.5h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3 5.5 1 1 3-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3 12.5 1 1 3-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3 19.5 1 1 3-3"
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
            d="M20 19.26h-9.07a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .46-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M20 12.97h-9.07a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82s-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M20 6.67h-9.07a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82s-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.91 8.03a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16L5.49 7.79a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.91 14.33a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.91 20.33a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72a.8.8 0 0 1-.58.24"
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
            d="M20 19.26h-9.07a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .46-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M20 12.97h-9.07a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82s-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M20 6.67h-9.07a.8.8 0 0 1-.82-.82c0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82s-.37.82-.82.82"
            fill="currentColor"
          />
          <path
            d="M4.91 8.03a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16L5.49 7.79a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
          <path
            d="M4.91 14.33a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
          <path
            d="M4.91 20.33a.8.8 0 0 1-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72a.8.8 0 0 1-.58.24"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTask;
