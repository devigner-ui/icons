import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlayAdd = forwardRef<SVGSVGElement, IconProps>(function IconPlayAdd(
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
            d="M13.5 21.29A9.99 9.99 0 0 1 3.27 5.82m2.44-2.48a10 10 0 0 1 15.07 11.88 4 4 0 0 0-6.21 4.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88 11.5v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 18.5c0 1.15-.5 2.24-1.37 3a3.98 3.98 0 0 1-6.05-.94 3.98 3.98 0 0 1 3.42-6.06 4 4 0 0 1 4 4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.99 18.48h-2.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 17.02v2.99"
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
            opacity={duotone ? "0.4" : "1"}
            d="M21.5 11.5q0 1.98-.72 3.72a4 4 0 0 0-4.78.16 3.97 3.97 0 0 0-.77 5.39 10 10 0 1 1 6.27-9.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88 11.5v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 18.5a4 4 0 0 1-1.37 3 3.97 3.97 0 0 1-6.05-.94 3.97 3.97 0 0 1 3.42-6.06 4 4 0 0 1 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.99 18.48h-2.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 17.02v2.99"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M21.5 11.5q0 1.98-.72 3.72a4 4 0 0 0-4.78.16 3.97 3.97 0 0 0-.77 5.39 10 10 0 1 1 6.27-9.27"
            fill="currentColor"
          />
          <path
            d="M8.88 11.5v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57z"
            fill="currentColor"
          />
          <path
            d="M18.5 14.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.5 4.73h-.75v.78c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.78H17a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71H20c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M21.35 9.8a10 10 0 1 0-8.26 11.61.5.5 0 0 0 .37-.67 5.45 5.45 0 0 1 1.61-6.49 5.5 5.5 0 0 1 5.62-.75c.29.13.62-.06.68-.37a10 10 0 0 0-.02-3.33M14 13.12l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57v-2.77c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.88 1.49 2.28 0 3.15"
            fill="currentColor"
          />
          <path
            d="M18.5 14.55a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.5 4.73h-.75v.78c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.78H17a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71H20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlayAdd;
