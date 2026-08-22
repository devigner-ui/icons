import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageNotification = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageNotification(
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
              d="M22.67 10v3q0 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4h-.5c-4 0-6-1-6-6V8q0-6 6-6h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.17 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.66 11"
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
              d="M20.67 6.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.67 8a4 4 0 0 1-4-4q.02-1.1.56-2H7.67a5 5 0 0 0-5 4.98v6.98a5 5 0 0 0 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4h1.5a5 5 0 0 0 5-4.98V7.44a4 4 0 0 1-2 .56"
              fill="currentColor"
            />
            <path
              d="M12.67 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M16.67 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M8.67 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
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
              d="M20.67 6.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5"
              fill="currentColor"
            />
            <path
              d="M19.71 8.15a4.23 4.23 0 0 1-3.22-4.95 1 1 0 0 0-.97-1.2H7.67a5 5 0 0 0-5 5v6.95a5 5 0 0 0 5 5h1.5c.28 0 .64.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99a1 1 0 0 1 .8-.4h1.51a5 5 0 0 0 4.99-4.99V9.15a1 1 0 0 0-1.2-.97q-.84.16-1.76-.03M8.67 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m4 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m4 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageNotification;
