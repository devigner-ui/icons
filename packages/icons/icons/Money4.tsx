import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoney4 = forwardRef<SVGSVGElement, IconProps>(function IconMoney4(
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
            d="M17.67 20.5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.17 6h-1.5a2.5 2.5 0 0 0-2.5 2.5V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.17 6h1.5a2.5 2.5 0 0 1 2.5 2.5V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.17 18h-1.5a2.5 2.5 0 0 1-2.5-2.5V14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.17 18h1.5a2.5 2.5 0 0 0 2.5-2.5V14"
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
            d="M17.67 20.5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5"
            fill="currentColor"
          />
          <path d="M12.67 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="currentColor" />
          <path
            d="M5.17 10.75a.76.76 0 0 1-.75-.75V8.5a3.26 3.26 0 0 1 3.25-3.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M20.17 10.75a.76.76 0 0 1-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.5a3.26 3.26 0 0 1 3.25 3.25V10c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M9.17 18.75h-1.5a3.26 3.26 0 0 1-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.8 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17.67 18.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.5c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5a3.26 3.26 0 0 1-3.25 3.25"
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
            d="M17.67 3.5h-10c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5m-13.25 5a3.26 3.26 0 0 1 3.25-3.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75zm4.75 10.25h-1.5a3.26 3.26 0 0 1-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.8 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75m3.5-3.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6m8.25.5a3.26 3.26 0 0 1-3.25 3.25h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.5c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75zm0-5.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.5a3.26 3.26 0 0 1 3.25 3.25z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMoney4;
