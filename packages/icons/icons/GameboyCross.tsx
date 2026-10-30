import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGameboyCross = forwardRef<SVGSVGElement, IconProps>(function IconGameboyCross(
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
            d="M20.8 18.73C20.29 20.75 18.77 22 16 22H8c-3.5 0-5-2-5-5V7c0-2.45 1-4.24 3.28-4.81M9.77 2H16c3.5 0 5 2 5 5v8.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.3 15.28 8 17.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.03 15.31 2.3 2.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.49 15.33h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.49 17.5v-.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.3 15.28 8 17.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.03 15.31 2.3 2.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.49 15.33h.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.49 17.5v-.02"
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
            d="M17 22H7c-2.2 0-4-1.8-4-4V6c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4"
            fill="currentColor"
          />
          <path
            d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75"
            fill="currentColor"
          />
          <path
            d="m10.86 17.08-.65-.65.62-.62a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.62.62-.59-.59a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.59.59-.62.62a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l.62-.62.65.65q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
            fill="currentColor"
          />
          <path
            d="M16.51 16.33c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M14.49 18.49a1 1 0 0 1-1-.99v-.02a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01"
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
            d="M17 2H7C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4m-6.14 16.14a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.65-.65-.62.62a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.62-.62-.59-.59a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.59.59.62-.62a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.62.62.65.65c.29.29.29.77 0 1.06m3.63.35a1 1 0 0 1-1-.99v-.02a1 1 0 0 1 1-1 1 1 0 0 1 0 2.01m2.02-2.16c-.55 0-1.01-.45-1.01-1a1 1 0 0 1 .99-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1 1M18 9.25c0 .96-.79 1.75-1.75 1.75h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGameboyCross;
