import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageTime = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageTime(
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
              d="M22.67 7.43v6a5 5 0 0 1-1.38 3.63 5 5 0 0 1-3.62 1.37v2.13a1 1 0 0 1-1.55.84l-4.45-2.97H9.55q.12-.45.12-.93a4 4 0 0 0-4-4 4 4 0 0 0-2.87 1.21q-.13-.6-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 17.5a4 4 0 0 1-4 4 4 4 0 1 1 4-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.92 16.25v1.5l-1.25.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.17 10.5h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M22.67 7.43v6a5 5 0 0 1-1.38 3.63 5 5 0 0 1-3.62 1.37v2.13a1 1 0 0 1-1.55.84l-4.45-2.97H9.55q.12-.45.12-.93a4 4 0 0 0-4-4 4 4 0 0 0-2.87 1.21q-.13-.6-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5"
              fill="currentColor"
            />
            <path
              d="M16.17 11.25h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M5.67 13.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1 4.25c0 .26-.14.51-.36.64l-1.25.75a.75.75 0 0 1-1.03-.25.75.75 0 0 1 .26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.75.34.75.75z"
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
              d="M5.67 13.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1 4.25c0 .26-.14.51-.36.64l-1.25.75a.75.75 0 0 1-1.03-.25.75.75 0 0 1 .26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.74.34.74.75z"
              fill="currentColor"
            />
            <path
              d="M17.92 2.43h-9.5c-2.85 0-4.75 1.9-4.75 4.75v4.46c0 .35.36.6.7.51Q5 12 5.67 12a5.6 5.6 0 0 1 5.48 5.13c.02.28.25.5.52.5h.55l4.23 2.82c.62.42 1.47-.04 1.47-.8v-2.02a4.8 4.8 0 0 0 3.44-1.3 4.8 4.8 0 0 0 1.31-3.45v-5.7c0-2.85-1.9-4.75-4.75-4.75m-1.42 8.38H9.84a.71.71 0 0 1 0-1.43h6.66a.71.71 0 0 1 0 1.43"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageTime;
