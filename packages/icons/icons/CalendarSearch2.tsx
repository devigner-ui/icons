import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarSearch2 = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarSearch2(
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
              d="M8.67 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.67 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.87 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 22-1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.17 9.09h17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.04 22H8.67c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V13"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 13.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.96 13.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.96 16.7"
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
              d="M20.67 9.84a1 1 0 0 1 1 1V17c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5v-6.16a1 1 0 0 1 1-1z"
              fill="currentColor"
            />
            <path
              d="M17.42 3.56V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-6.5V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25a.5.5 0 0 0 .5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              d="m16.33 18.47-.74-.74a3.7 3.7 0 1 0-1.06 1.06l.74.74q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
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
              d="M17.42 3.56V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-6.5V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25a.5.5 0 0 0 .5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              d="M20.67 9.84h-16a1 1 0 0 0-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16a1 1 0 0 0-1-1m-4.34 9.69a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.74-.74a3.7 3.7 0 1 1 1.06-1.06l.74.74c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarSearch2;
