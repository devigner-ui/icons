import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoneyForbidden = forwardRef<SVGSVGElement, IconProps>(
  function IconMoneyForbidden(
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
            d="M22.5 12.14V14c0 3.5-2 5-5 5H9"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.5 14.3V8c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 11a2.5 2.5 0 1 0-2.5 2.5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19 8.5v5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.5 17q-.01 1.14-.58 2.06a3.97 3.97 0 0 1-6.84 0A4 4 0 1 1 9.5 17Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m8.25 14.25-5.5 5.5"
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
              d="M2.47 14.2V8c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5h-8.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.47 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.97 8.5v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.47 17q-.01 1.14-.58 2.06a3.97 3.97 0 0 1-6.84 0A4 4 0 1 1 9.47 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m8.22 14.25-5.5 5.5"
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
              d="m2.17 19.24.01-.02 5.5-5.5.03-.02a4 4 0 0 0-5.54 5.54"
              fill="currentColor"
            />
            <path
              d="m8.77 14.75-.02.03-5.5 5.5-.03.02q.98.68 2.25.7c1.46 0 2.73-.78 3.42-1.94a3.9 3.9 0 0 0-.12-4.31"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.47 8v6c0 3.5-2 5-5 5H8.92a4 4 0 0 0-6.45-4.64V8c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
              fill="currentColor"
            />
            <path
              d="M12.47 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              fill="currentColor"
            />
            <path
              d="M18.97 13.75a.76.76 0 0 1-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
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
              d="m2.17 19.24.01-.02 5.5-5.5.03-.02a4 4 0 0 0-5.54 5.54"
              fill="currentColor"
            />
            <path
              d="M8.77 14.75q0 .02-.02.03l-5.5 5.5-.03.02q.97.68 2.25.7c1.46 0 2.73-.78 3.42-1.94a3.9 3.9 0 0 0-.12-4.31"
              fill="currentColor"
            />
            <path
              d="M17.47 3h-10c-3 0-5 1.5-5 5v3.56c0 .37.38.6.71.45a5.5 5.5 0 0 1 3.3-.41 5.56 5.56 0 0 1 4.32 6.81c-.08.31.17.6.5.6h6.18c3 0 5-1.5 5-5V8c0-3.5-2-5-5-5m-5 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m7.25-.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMoneyForbidden;
