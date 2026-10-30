import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShopAdd = forwardRef<SVGSVGElement, IconProps>(function IconShopAdd(
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
            d="M3.74 15.02v-4.3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.7 18.5a4 4 0 0 1-1.37 3 3.94 3.94 0 0 1-5.66-.41l-.07-.08a4 4 0 0 1-.9-2.51 3.97 3.97 0 0 1 4-4 4 4 0 0 1 2.93 1.28A4 4 0 0 1 9.7 18.5Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.19 18.48H4.21"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.7 17.02v2.99"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.91 19.17c-.92 1.62-2.67 2.33-5.49 2.33h-5.39q-.87 0-1.6-.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.71 10.72v4.49"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.73 11.5a2.96 2.96 0 0 0 3-3.32l-.67-6.68h-4.67l-.67 6.68a2.97 2.97 0 0 0 3.01 3.32Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.03 11.5c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75c-.36-2.6-1.36-3.6-3.98-3.6h-3.05l.7 7.01a3.4 3.4 0 0 0 3.31 2.99Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m3.34 5.1-.28 2.75a3.26 3.26 0 0 0 3.3 3.65 3.4 3.4 0 0 0 3.3-2.99l.22-2.21.48-4.8H7.31q-1.36 0-2.19.39"
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
            d="M21.68 10.72v4.49c0 4.49-1.79 6.29-6.29 6.29H10q-.87 0-1.6-.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.71 15.02v-4.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7 11.5a2.96 2.96 0 0 0 3-3.32l-.67-6.68h-4.67l-.67 6.68a2.97 2.97 0 0 0 3.01 3.32"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 11.5c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75c-.36-2.6-1.36-3.6-3.98-3.6h-3.05l.7 7.01A3.4 3.4 0 0 0 19 11.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.34 11.5a3.4 3.4 0 0 0 3.3-2.99l.22-2.21.48-4.8H7.29c-2.62 0-3.62 1-3.98 3.6l-.28 2.75a3.26 3.26 0 0 0 3.31 3.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.67 18.5a4 4 0 0 1-1.37 3 3.94 3.94 0 0 1-5.66-.41l-.07-.08a4 4 0 0 1-.9-2.51 3.97 3.97 0 0 1 4-4 4 4 0 0 1 2.93 1.28 4 4 0 0 1 1.07 2.72"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.16 18.48H4.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.67 17.02v2.99"
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
            opacity={duotone ? "0.6" : "1"}
            d="M21.52 11.46v5.99a5 5 0 0 1-5 5H7.78q-.35 0-.68-.05a4 4 0 0 0 1.1-.75q.4-.35.69-.84.57-.92.58-2.06a4.01 4.01 0 0 0-6.5-3.12l-.2.17v-4.27a4.08 4.08 0 0 0 6.25-.35 3.8 3.8 0 0 0 3.13 1.64c1.28 0 2.42-.6 3.11-1.6a4.1 4.1 0 0 0 3.2 1.6 4 4 0 0 0 3.06-1.36"
            fill="currentColor"
          />
          <path
            d="M15.14 1.32h-6L8.4 8.68q-.09 1.03.29 1.9a3.7 3.7 0 0 0 3.46 2.24 3.73 3.73 0 0 0 3.77-3.67v-.19z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m22.51 8.34-.28-2.78c-.42-3.02-1.79-4.25-4.72-4.25h-3.84l.74 7.5.02.4q.1.78.46 1.43a4.2 4.2 0 0 0 3.58 2.17c1.33 0 2.53-.59 3.28-1.63.59-.79.86-1.8.76-2.84"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.74 1.32c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75a4 4 0 0 0 4.05 4.47 4.14 4.14 0 0 0 4.05-3.66l.78-7.83z"
            fill="currentColor"
          />
          <path
            d="M8.4 16.03q-.15-.17-.33-.31a3.9 3.9 0 0 0-4.56-.45q-.29.15-.54.36a3.97 3.97 0 0 0-.6 5.63l.07.08a3.94 3.94 0 0 0 5.76.31q.4-.35.69-.84.57-.92.58-2.06c0-1.05-.41-2-1.07-2.72m-1.43 3.45h-.75v.78c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.78h-.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.75c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M7.8 22.15a4.8 4.8 0 0 1-4.81-4.81V14.5a.96.96 0 0 1 1.29-.9 4 4 0 0 0 1.15.23q.23.03.46.03c1.11 0 2.21-.41 3.08-1.12a4.7 4.7 0 0 0 6.07.01 4.9 4.9 0 0 0 4.72.83.96.96 0 0 1 1.27.9v2.86a4.8 4.8 0 0 1-4.81 4.81z"
            fill="currentColor"
          />
          <path
            d="m21.98 8.59-.28-2.66c-.4-2.9-1.72-4.08-4.54-4.08H6.82C4 1.85 2.69 3.03 2.28 5.96L2.02 8.6a3.85 3.85 0 0 0 3.89 4.3c1.21 0 2.37-.61 3.1-1.58a3.6 3.6 0 0 0 3.01 1.58c1.24 0 2.33-.58 2.99-1.54a4 4 0 0 0 3.08 1.54 3.88 3.88 0 0 0 3.89-4.31m-8.48-.86h-.75v.78a.75.75 0 1 1-1.5 0v-.78h-.75a.75.75 0 1 1 0-1.5h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.75a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShopAdd;
