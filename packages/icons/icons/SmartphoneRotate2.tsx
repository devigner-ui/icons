import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartphoneRotate2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartphoneRotate2(
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
              d="m18.44 19.12.53.53zm-8.14 0 .53-.53zm8.82-8.82-.53.53zm0 8.14-.53-.53zM22 14.37h.75zM5.56 4.87l.53.54zm8.14 0 .53-.52zM9.63 2v.75zM4.88 5.56l-.53-.53zm0 8.14-.53.53zM2 9.63h-.75zm3.4-3.54.69-.68-1.06-1.06-.68.68zm7.77-.68 5.42 5.42 1.06-1.06-5.42-5.42zm5.42 12.5-.68.68 1.06 1.06.68-.68zm-7.76.68-5.42-5.42-1.06 1.06 5.42 5.42zm7.08 0c-.97.98-1.65 1.65-2.23 2.1-.56.42-.94.56-1.3.56v1.5a3.6 3.6 0 0 0 2.21-.87c.68-.52 1.44-1.28 2.38-2.23zm-8.14 1.06c.95.95 1.7 1.71 2.39 2.23.7.53 1.39.87 2.21.87v-1.5c-.36 0-.74-.14-1.3-.57a26 26 0 0 1-2.24-2.09zm8.82-8.82a27 27 0 0 1 2.1 2.24c.42.56.56.94.56 1.3h1.5a3.6 3.6 0 0 0-.87-2.21c-.52-.68-1.28-1.44-2.23-2.39zm1.06 8.14c.95-.94 1.71-1.7 2.23-2.38.53-.7.87-1.39.87-2.22h-1.5c0 .37-.14.75-.57 1.31-.44.58-1.11 1.26-2.09 2.23zM6.1 5.41c.97-.98 1.65-1.65 2.23-2.1.56-.42.94-.56 1.3-.56v-1.5a3.6 3.6 0 0 0-2.21.87c-.68.52-1.44 1.28-2.38 2.23zm8.14-1.06c-.95-.95-1.7-1.7-2.39-2.23a3.6 3.6 0 0 0-2.21-.87v1.5c.36 0 .74.14 1.3.57a25 25 0 0 1 2.24 2.09zm-9.88.68c-.95.94-1.7 1.7-2.23 2.38a3.6 3.6 0 0 0-.87 2.22h1.5c0-.37.14-.75.57-1.31.44-.58 1.11-1.26 2.09-2.23zm1.06 8.14a26 26 0 0 1-2.1-2.24c-.42-.56-.56-.94-.56-1.3h-1.5c0 .82.34 1.52.87 2.21.52.68 1.28 1.44 2.23 2.39z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.48 6.09a.75.75 0 0 0-1.06-1.06zM5.03 8.42a.75.75 0 0 0 1.06 1.06zm3.39-3.4-3.4 3.4L6.1 9.48l3.39-3.4zm7.8 10.22a.7.7 0 0 1 0 .98l1.06 1.06a2.2 2.2 0 0 0 0-3.1zm0 .98a.7.7 0 0 1-.98 0l-1.06 1.06a2.2 2.2 0 0 0 3.1 0zm-.98 0a.7.7 0 0 1 0-.98l-1.06-1.06a2.2 2.2 0 0 0 0 3.1zm0-.98c.27-.26.7-.26.98 0l1.06-1.06a2.2 2.2 0 0 0-3.1 0z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.5 6.99 22 8a6.06 6.06 0 0 0-5-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 17.01 2 16a6.06 6.06 0 0 0 5 6"
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
              d="M4.88 13.7C2.96 11.78 2 10.82 2 9.63s.96-2.16 2.88-4.07l.68-.68C7.47 2.96 8.43 2 9.63 2c1.19 0 2.15.96 4.07 2.88l5.42 5.42c1.92 1.92 2.88 2.88 2.88 4.07s-.96 2.16-2.88 4.07l-.68.68C16.53 21.04 15.57 22 14.37 22c-1.19 0-2.15-.96-4.07-2.88z"
              fill="currentColor"
            />
            <path
              d="M9.48 6.09a.75.75 0 0 0-1.06-1.06l-3.4 3.39A.75.75 0 0 0 6.1 9.48z"
              fill="currentColor"
            />
            <path
              d="M16.75 16.75a1.44 1.44 0 1 0-2.04-2.04 1.44 1.44 0 0 0 2.04 2.04"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.26 1.87c.07-.4.46-.68.87-.6A6.8 6.8 0 0 1 22.75 8a.75.75 0 0 1-1.17.62l-1.5-1.01a.75.75 0 1 1 .84-1.25l.1.07a5.3 5.3 0 0 0-4.15-3.69.75.75 0 0 1-.6-.87"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.74 22.13a.75.75 0 0 1-.87.61A6.8 6.8 0 0 1 1.25 16a.75.75 0 0 1 1.17-.62l1.5 1.01a.75.75 0 0 1-.84 1.25l-.1-.07a5.3 5.3 0 0 0 4.15 3.7c.4.06.68.45.6.86"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 9.63c0 1.19.96 2.15 2.88 4.07l5.42 5.42c1.92 1.92 2.88 2.88 4.07 2.88s2.16-.96 4.07-2.88l.68-.68c1.92-1.91 2.88-2.87 2.88-4.07 0-1.19-.96-2.15-2.88-4.07L13.7 4.88C11.78 2.96 10.82 2 9.63 2s-2.16.96-4.07 2.88l-.68.68C2.96 7.47 2 8.43 2 9.63m7.48-3.54a.75.75 0 0 0-1.06-1.06l-3.4 3.39A.75.75 0 0 0 6.1 9.48zm7.27 10.66a1.44 1.44 0 1 0-2.04-2.04 1.44 1.44 0 0 0 2.04 2.04"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.26 1.87c.07-.4.46-.68.87-.6A6.8 6.8 0 0 1 22.75 8a.75.75 0 0 1-1.17.62l-1.5-1.01a.75.75 0 1 1 .84-1.25l.1.07a5.3 5.3 0 0 0-4.15-3.69.75.75 0 0 1-.6-.87"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.74 22.13a.75.75 0 0 1-.87.61A6.8 6.8 0 0 1 1.25 16a.75.75 0 0 1 1.17-.62l1.5 1.01a.75.75 0 0 1-.84 1.25l-.1-.07a5.3 5.3 0 0 0 4.15 3.7c.4.06.68.45.6.86"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartphoneRotate2;
