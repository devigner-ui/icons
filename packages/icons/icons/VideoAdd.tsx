import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoAdd = forwardRef<SVGSVGElement, IconProps>(function IconVideoAdd(
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
            d="M1.5 8.5c0-5 2-7 7-7h6c5 0 7 2 7 7v6q0 .34-.02.67l-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36 4 4 0 0 0 .86 1.02l.16.14q-.32.02-.67.02h-6c-5 0-7-2-7-7v-1.97"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.02 6.61h18.96"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.02 1.61v4.86"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.98 1.61v4.41"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22.5 18q0 .54-.13 1.05-.17.68-.52 1.27a4.5 4.5 0 0 1-6.67 1.16h-.01l-.16-.14-.04-.03q-.48-.43-.82-.99a4.5 4.5 0 0 1 7.16-5.36l.03.04.14.17A4.4 4.4 0 0 1 22.5 18Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19.68 17.98h-3.36"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18 16.34v3.36"
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
            d="M21.47 8.5v6q0 .34-.02.67l-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36 4 4 0 0 0 .86 1.02l.16.14q-.32.02-.67.02h-6c-5 0-7-2-7-7v-6c0-5 2-7 7-7h6c5 0 7 2 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M1.99 6.61h18.96"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99 1.61v4.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.95 1.61v4.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M22.47 18q0 .54-.13 1.05-.17.68-.52 1.27a4.5 4.5 0 0 1-6.67 1.16h-.01l-.16-.14-.04-.03q-.49-.43-.82-.99a4.5 4.5 0 0 1 7.16-5.36l.03.04.14.17A4.4 4.4 0 0 1 22.47 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.65 17.98h-3.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.97 16.34v3.36"
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
            d="M21.57 7.31v7.89l-.02-.03-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36 4 4 0 0 0 .86 1.02l.16.14h.01l.03.02h-7.9c-3.64 0-5.81-2.17-5.81-5.81V7.31q0-.77.13-1.45c.51-2.75 2.54-4.35 5.64-4.36h8.46c3.1.01 5.13 1.61 5.64 4.36q.13.68.13 1.45"
            fill="currentColor"
          />
          <path
            d="M21.57 7.31v.05h-20v-.05q0-.77.13-1.45h5.64V1.5h1.5v4.36h5.46V1.5h1.5v4.36h5.64q.13.68.13 1.45"
            fill="currentColor"
          />
          <path
            d="m21.57 15.2-.02-.03-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36 4 4 0 0 0 .86 1.02l.16.14h.01l.03.02a4.49 4.49 0 0 0 6.29-6.3m-1.82 3.53h-.93v.97c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.97h-.93a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.93v-.89c0-.41.34-.75.75-.75s.75.34.75.75v.89h.93a.75.75 0 1 1 0 1.5"
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
            d="M14.3 5.36V2a.5.5 0 0 0-.5-.5H9.34a.5.5 0 0 0-.5.5v3.36c0 .28.22.5.5.5h4.46a.5.5 0 0 0 .5-.5"
            fill="currentColor"
          />
          <path
            d="M6.82 1.52C4.26 1.68 2.51 3 1.86 5.2a.5.5 0 0 0 .48.66h4.5a.5.5 0 0 0 .5-.5V2.02a.5.5 0 0 0-.52-.5"
            fill="currentColor"
          />
          <path
            d="M16.32 1.51c2.56.16 4.31 1.48 4.96 3.68a.5.5 0 0 1-.48.66h-4.5a.5.5 0 0 1-.5-.5V2.01a.5.5 0 0 1 .52-.5"
            fill="currentColor"
          />
          <path
            d="m21.57 15.2-.02-.03-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36 4 4 0 0 0 .86 1.02l.16.14h.01l.03.02a4.49 4.49 0 0 0 6.29-6.3m-1.82 3.53h-.93v.97c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.97h-.93a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.93v-.89c0-.41.34-.75.75-.75s.75.34.75.75v.89h.93a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
          <path
            d="M21.57 7.86v4.38a.5.5 0 0 1-.72.44A6 6 0 0 0 12.07 18c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H7.38a5.8 5.8 0 0 1-5.81-5.81V7.86c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconVideoAdd;
