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
            opacity={duotone ? "0.4" : "1"}
            d="M21.68 11.22v4.49c0 4.49-1.79 6.29-6.29 6.29H10q-.87 0-1.6-.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.71 15.52v-4.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7 12a2.96 2.96 0 0 0 3-3.32L15.03 2h-4.67l-.67 6.68A2.97 2.97 0 0 0 12.7 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C21.66 3 20.66 2 18.04 2h-3.05l.7 7.01A3.4 3.4 0 0 0 19 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.34 12a3.4 3.4 0 0 0 3.3-2.99l.22-2.21.48-4.8H7.29C4.67 2 3.67 3 3.31 5.6l-.28 2.75A3.26 3.26 0 0 0 6.34 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.67 19a4 4 0 0 1-1.37 3 3.94 3.94 0 0 1-5.66-.41l-.07-.08a4 4 0 0 1-.9-2.51 3.97 3.97 0 0 1 4-4 4 4 0 0 1 2.93 1.28A4 4 0 0 1 9.67 19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.16 18.98H4.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.67 17.52v2.99"
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
            d="M21.72 11.71v5.99a5 5 0 0 1-5 5H7.98q-.35 0-.68-.05a4 4 0 0 0 1.1-.75q.4-.35.69-.84.57-.92.58-2.06a4.01 4.01 0 0 0-6.5-3.12l-.2.17v-4.27a4.08 4.08 0 0 0 6.25-.35 3.8 3.8 0 0 0 3.13 1.64c1.28 0 2.42-.6 3.11-1.6a4.1 4.1 0 0 0 3.2 1.6 4 4 0 0 0 3.06-1.36"
            fill="currentColor"
          />
          <path
            d="M15.34 1.57h-6L8.6 8.93q-.09 1.03.29 1.9a3.7 3.7 0 0 0 3.46 2.24 3.73 3.73 0 0 0 3.77-3.67v-.19z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m22.71 8.59-.28-2.78c-.42-3.02-1.79-4.25-4.72-4.25h-3.84l.74 7.5.02.4q.1.78.46 1.43a4.2 4.2 0 0 0 3.58 2.17c1.33 0 2.53-.59 3.28-1.63.59-.79.86-1.8.76-2.84"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.94 1.57C4 1.57 2.64 2.8 2.21 5.85L1.94 8.6a4 4 0 0 0 4.05 4.47 4.14 4.14 0 0 0 4.05-3.66l.78-7.83z"
            fill="currentColor"
          />
          <path
            d="M8.6 16.28q-.15-.17-.33-.31a3.9 3.9 0 0 0-4.56-.45q-.29.15-.54.36a3.97 3.97 0 0 0-.6 5.63l.07.08a3.94 3.94 0 0 0 5.76.31q.4-.35.69-.84.57-.92.58-2.06c0-1.05-.41-2-1.07-2.72m-1.43 3.45h-.75v.78c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.78h-.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.75c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M8.47 22.15a4.8 4.8 0 0 1-4.81-4.81V14.5a.96.96 0 0 1 1.29-.9 4 4 0 0 0 1.15.23q.23.03.46.03c1.11 0 2.21-.41 3.08-1.12a4.7 4.7 0 0 0 6.07.01 4.9 4.9 0 0 0 4.72.83.96.96 0 0 1 1.27.9v2.86a4.8 4.8 0 0 1-4.81 4.81z"
            fill="currentColor"
          />
          <path
            d="m22.65 8.59-.28-2.66c-.4-2.9-1.72-4.08-4.54-4.08H7.49c-2.82 0-4.13 1.18-4.54 4.11L2.69 8.6a3.85 3.85 0 0 0 3.89 4.3c1.21 0 2.37-.61 3.1-1.58a3.6 3.6 0 0 0 3.01 1.58c1.24 0 2.33-.58 2.99-1.54a4 4 0 0 0 3.08 1.54 3.88 3.88 0 0 0 3.89-4.31m-8.48-.86h-.75v.78a.75.75 0 1 1-1.5 0v-.78h-.75a.75.75 0 1 1 0-1.5h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.75a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShopAdd;
