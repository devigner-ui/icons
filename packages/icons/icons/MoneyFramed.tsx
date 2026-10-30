import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoneyFramed = forwardRef<SVGSVGElement, IconProps>(function IconMoneyFramed(
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
            d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.97"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 12a3 3 0 1 0-3 3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14"
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
            d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5"
            fill="currentColor"
          />
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="currentColor" />
          <path
            d="M4.5 10.75a.76.76 0 0 1-.75-.75V8.5A3.26 3.26 0 0 1 7 5.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M19.5 10.75a.76.76 0 0 1-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75H17a3.26 3.26 0 0 1 3.25 3.25V10c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M8.5 18.75H7a3.26 3.26 0 0 1-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.8 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17 18.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75H17c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5A3.26 3.26 0 0 1 17 18.75"
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
            d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5m-13.25 5A3.26 3.26 0 0 1 7 5.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75zM8.5 18.75H7a3.26 3.26 0 0 1-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.8 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m8.25.5A3.26 3.26 0 0 1 17 18.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75H17c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75zm0-5.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75H17a3.26 3.26 0 0 1 3.25 3.25z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMoneyFramed;
