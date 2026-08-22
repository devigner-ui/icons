import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTicketDiscount = forwardRef<SVGSVGElement, IconProps>(
  function IconTicketDiscount(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12.5A2.5 2.5 0 0 1 22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 14.75 6-6"
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9.25"
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
              d="M21.97 10.84a.7.7 0 0 0 .7-.7v-.93c0-4.1-1.25-5.35-5.35-5.35h-9.3c-4.1 0-5.35 1.25-5.35 5.35v.47c0 .39.31.7.7.7a1.62 1.62 0 1 1 0 3.25.7.7 0 0 0-.7.7v.47c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35a.7.7 0 0 0-.7-.7 1.63 1.63 0 0 1 0-3.26"
              fill="currentColor"
            />
            <path
              d="M15.67 15.88a1 1 0 0 1-1.01-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.43 1-.99 1"
              fill="currentColor"
            />
            <path
              d="M9.67 10.88a1 1 0 0 1-1.01-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .55-.43 1-.99 1"
              fill="currentColor"
            />
            <path
              d="M9.3 16.43a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.73-6.73a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-6.73 6.73a.7.7 0 0 1-.53.22"
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
              d="M21.97 10.84a.7.7 0 0 0 .7-.7v-.93c0-4.1-1.25-5.35-5.35-5.35h-9.3c-4.1 0-5.35 1.25-5.35 5.35v.47c0 .39.31.7.7.7a1.62 1.62 0 1 1 0 3.25.7.7 0 0 0-.7.7v.47c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35a.7.7 0 0 0-.7-.7 1.63 1.63 0 0 1 0-3.26M9.67 8.88a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1m6 7a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m.9-6.4-6.73 6.73a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.73-6.73a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTicketDiscount;
