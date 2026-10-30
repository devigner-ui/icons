import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPrinterSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconPrinterSlash(
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
            d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.97 15H16v4q0 3-3 3h-2q-2.54 0-2.93-2.14"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6 18q-3 0-3-3v-5q0-3 3-3h10.59"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21 14v1q0 3-3 3h-2v-3h-3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.97 7.52Q21.01 8.24 21 10"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17 15h-1.21"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 11h2"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 2 2 22"
            strokeWidth={strokeWidth}
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
              opacity={duotone ? "0.4" : "1"}
              d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.97 15H16v4q0 3-3 3h-2q-2.54 0-2.93-2.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 18q-3 0-3-3v-5q0-3 3-3h10.59"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.97 7.52Q21 8.24 21 10v5q0 3-3 3h-2v-3h-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 15h-1.21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 11h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2 2 22"
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
              d="M6 7q-3 0-3 3v5q0 3 3 3l2-2v-1h1l8-8zm1 4.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z"
              fill="currentColor"
            />
            <path d="m9 15-1 1v-1z" fill="currentColor" />
            <path
              d="M17 5v2H7V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.53 1.47c.3.3.3.77 0 1.06l-20 20a.75.75 0 0 1-1.06-1.06l20-20c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M9.75 11c0 .41-.34.75-.75.75H7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M17.75 15c0 .41-.34.75-.75.75h-5.75l1.5-1.5H17c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M16 15v4a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3l4-4z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 10v5q0 3-3 3h-2v-3h-4l7.67-7.67Q21 8.01 21 10"
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
              d="M6 7q-3 0-3 3v5q0 3 3 3l2-2v-1h1l8-8zm1 4.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z"
              fill="currentColor"
            />
            <path d="m9 15-1 1v-1z" fill="currentColor" />
            <path
              d="M17 5v2H7V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3"
              fill="currentColor"
            />
            <path
              d="M22.53 1.47a.75.75 0 0 0-1.06 0l-20 20a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l20-20a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              d="M17 14.25h-4.04a.5.5 0 0 0-.36.15l-.6.6-.75.75L8.8 18.2c-.64.64-.77 1.8-.25 2.54A3 3 0 0 0 11 22h2a3 3 0 0 0 3-3v-3.25h1c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="m19.02 7.98-3.56 3.56a1 1 0 0 0 .71 1.71h.74c.87 0 1.68.59 1.82 1.45.15.92-.42 1.74-1.24 1.98-.26.08-.49.3-.49.57v.25c0 .28.22.5.5.5h.5a3 3 0 0 0 3-3v-5q0-1.19-.47-1.91c-.34-.51-1.08-.54-1.51-.11"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPrinterSlash;
