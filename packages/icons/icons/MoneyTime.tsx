import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoneyTime = forwardRef<SVGSVGElement, IconProps>(
  function IconMoneyTime(
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
              d="M12.67 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.17 9.5v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.67 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.92 16.75v.93c0 .35-.18.68-.49.86l-.76.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 15.2V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5h-8.5"
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
              d="M5.67 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1 3.68c0 .61-.33 1.19-.85 1.5l-.76.46a1 1 0 0 1-.38.11.8.8 0 0 1-.64-.36.75.75 0 0 1 .26-1.03l.76-.46a.3.3 0 0 0 .12-.21v-.93c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 9v6c0 3.5-2 5-5 5H9.12a4 4 0 0 0-6.45-4.64V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
              fill="currentColor"
            />
            <path
              d="M12.67 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              fill="currentColor"
            />
            <path
              d="M19.17 14.75a.76.76 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
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
              d="M5.67 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1 3.68c0 .61-.33 1.19-.85 1.5l-.76.46a.75.75 0 0 1-1.03-.25.75.75 0 0 1 .26-1.03l.76-.46a.3.3 0 0 0 .12-.21v-.93c0-.42.34-.76.75-.76s.75.34.75.75z"
              fill="currentColor"
            />
            <path
              d="M17.67 4h-10c-3 0-5 1.5-5 5v3.56c0 .37.38.6.71.45a5.5 5.5 0 0 1 3.3-.41A5.56 5.56 0 0 1 11 19.41c-.08.31.17.6.5.6h6.18c3 0 5-1.5 5-5V9c0-3.5-2-5-5-5m-5 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m7.25-.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMoneyTime;
