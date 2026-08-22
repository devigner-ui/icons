import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAdditem = forwardRef<SVGSVGElement, IconProps>(function IconAdditem(
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
          <g clipPath="url(#clip0_12_78604)">
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.67 16H6.1q-3.43 0-3.43-3.43V5.43Q2.67 2 6.1 2h4.57q3.43 0 3.43 3.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.24 22h-4.57q-3.43 0-3.43-3.43v-7.14Q11.24 8 14.67 8h4.57q3.43 0 3.43 3.43v7.14q0 3.43-3.43 3.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M15.54 15h3.26"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.17 16.63v-3.26"
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
                transform="translate(0.669922)"
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
            d="M19.24 22h-4.57q-3.43 0-3.43-3.43v-7.14Q11.24 8 14.67 8h4.57q3.43 0 3.43 3.43v7.14q0 3.43-3.43 3.43"
            fill="currentColor"
          />
          <path
            d="M14.1 5.43v1.34c-2.62.21-4.11 1.89-4.11 4.66V16H6.1q-3.43 0-3.43-3.43V5.43Q2.67 2 6.1 2h4.57q3.43 0 3.43 3.43"
            fill="currentColor"
          />
          <path
            d="M18.8 14.25h-.88v-.88a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.88h-.88a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h.88v.88c0 .41.34.75.75.75s.75-.34.75-.75v-.88h.88c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
            d="M14.1 5.43v1.34c-2.62.21-4.11 1.89-4.11 4.66V16H6.1q-3.43 0-3.43-3.43V5.43Q2.67 2 6.1 2h4.57q3.43 0 3.43 3.43"
            fill="currentColor"
          />
          <path
            d="M19.24 8h-4.57q-3.43 0-3.43 3.43v7.14q0 3.43 3.43 3.43h4.57q3.43 0 3.43-3.43v-7.14Q22.67 8 19.24 8m-.44 7.75h-.88v.88c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.88h-.88a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.88v-.88c0-.41.34-.75.75-.75s.75.34.75.75v.88h.88c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAdditem;
