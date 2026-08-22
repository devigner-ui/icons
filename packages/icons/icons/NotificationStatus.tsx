import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotificationStatus = forwardRef<SVGSVGElement, IconProps>(
  function IconNotificationStatus(
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
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 13h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 17h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.67 2h-5c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
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
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 9.5a4.5 4.5 0 0 1-4.5-4.5q.02-1.08.49-2H8.19C4.74 3 2.67 5.06 2.67 8.52v7.95c0 3.47 2.07 5.53 5.52 5.53h7.95c3.46 0 5.52-2.06 5.52-5.52V9.01q-.9.47-1.99.49"
              fill="currentColor"
            />
            <path
              d="M12.42 14h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M16.42 18h-9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              d="m20.47 9.42-.06.01-.31.05q-.64.06-1.33-.07l-.33-.09a3 3 0 0 1-.93-.38l-.35-.21a5 5 0 0 1-1.22-1.22l-.21-.35q-.26-.44-.38-.93l-.09-.33a5 5 0 0 1-.07-1.33l.05-.31.01-.06a1 1 0 0 0-.98-1.2H8.19a5 5 0 0 0-1.11.11 4.8 4.8 0 0 0-4.3 4.3l-.05.35a4 4 0 0 0-.06.76v7.96a5 5 0 0 0 .11 1.11 4.8 4.8 0 0 0 4.3 4.3l.35.05a4 4 0 0 0 .76.06h7.96a5 5 0 0 0 1.11-.11 4.8 4.8 0 0 0 4.3-4.3l.05-.35a4 4 0 0 0 .06-.76V10.4a1 1 0 0 0-1.2-.98M7.42 12.5h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75m9 5.5h-9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotificationStatus;
