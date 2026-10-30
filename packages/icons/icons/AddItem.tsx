import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAddItem = forwardRef<SVGSVGElement, IconProps>(function IconAddItem(
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
            d="M2 5.43Q2 2 5.43 2H10q3.43 0 3.43 3.43"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8 16H5.43Q2 16 2 12.57V9.98"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.57 22H14q-3.43 0-3.43-3.43v-7.14Q10.57 8 14 8h4.57Q22 8 22 11.43v7.14Q22 22 18.57 22Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.87 15h3.26"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.5 16.63v-3.26"
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
          <g clipPath="url(#clip0_12_78604)">
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 16H5.43Q2 16 2 12.57V5.43Q2 2 5.43 2H10q3.43 0 3.43 3.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.57 22H14q-3.43 0-3.43-3.43v-7.14Q10.57 8 14 8h4.57Q22 8 22 11.43v7.14Q22 22 18.57 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M14.87 15h3.26"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 16.63v-3.26"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
              />
            </clipPath>
          </defs>
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
            d="M18.57 22H14q-3.43 0-3.43-3.43v-7.14Q10.57 8 14 8h4.57Q22 8 22 11.43v7.14Q22 22 18.57 22"
            fill="currentColor"
          />
          <path
            d="M13.43 5.43v1.34c-2.62.21-4.11 1.89-4.11 4.66V16H5.43Q2 16 2 12.57V5.43Q2 2 5.43 2H10q3.43 0 3.43 3.43"
            fill="currentColor"
          />
          <path
            d="M18.13 14.25h-.88v-.88a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.88h-.88a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h.88v.88c0 .41.34.75.75.75s.75-.34.75-.75v-.88h.88c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
            d="M13.43 5.43v1.34c-2.62.21-4.11 1.89-4.11 4.66V16H5.43Q2 16 2 12.57V5.43Q2 2 5.43 2H10q3.43 0 3.43 3.43"
            fill="currentColor"
          />
          <path
            d="M18.57 8H14q-3.43 0-3.43 3.43v7.14Q10.57 22 14 22h4.57Q22 22 22 18.57v-7.14Q22 8 18.57 8m-.44 7.75h-.88v.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.88h-.88a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.88v-.88c0-.41.34-.75.75-.75s.75.34.75.75v.88h.88c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAddItem;
