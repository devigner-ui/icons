import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBank = forwardRef<SVGSVGElement, IconProps>(function IconBank(
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
            d="m13.04 2.15 9 3.6c.35.14.63.56.63.93V10a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V6.68c0-.37.28-.79.63-.93l9-3.6c.2-.08.54-.08.74 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 22h-20v-3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.67 18v-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 18v-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 18v-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 18v-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.67 18v-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.67 22h22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
            d="M22.67 19v3h-20v-3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"
            fill="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 11h-4v7h4z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 11h-4v7h4z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 11h-4v7h4z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.67 11h-4v7h4z"
            fill="currentColor"
          />
          <path
            d="M23.67 22.75h-22A.76.76 0 0 1 .92 22c0-.41.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="m22.04 5.75-9-3.6c-.2-.08-.54-.08-.74 0l-9 3.6c-.35.14-.63.55-.63.93V10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.68c0-.38-.28-.79-.63-.93M12.67 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
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
            d="M22.67 19v3h-20v-3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"
            fill="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M7.67 11h-2v7h2z" fill="currentColor" />
          <path d="M11.67 11h-2v7h2z" fill="currentColor" />
          <path d="M15.67 11h-2v7h2z" fill="currentColor" />
          <path d="M19.67 11h-2v7h2z" fill="currentColor" />
          <path
            d="M23.67 22.75h-22A.76.76 0 0 1 .92 22c0-.41.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="m22.04 5.75-9-3.6c-.2-.08-.54-.08-.74 0l-9 3.6c-.35.14-.63.55-.63.93V10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.68c0-.38-.28-.79-.63-.93M12.67 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBank;
