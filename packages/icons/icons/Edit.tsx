import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEdit = forwardRef<SVGSVGElement, IconProps>(function IconEdit(
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
            d="M22 13v2c0 5-2 7-7 7H9c-5 0-7-2-7-7v-1.52"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11 2H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19.93 9.01 1.05-1.05c1.36-1.36 2-2.94 0-4.94s-3.58-1.36-4.94 0L8.16 10.9c-.3.3-.6.89-.66 1.32l-.43 3.01c-.16 1.09.61 1.85 1.7 1.7l3.01-.43a3 3 0 0 0 1.32-.66l3.18-3.18.73-.73"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.91 4.15a7.1 7.1 0 0 0 4.94 4.94"
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
            opacity={duotone ? "0.4" : "1"}
            d="M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.04 3.02 8.16 10.9c-.3.3-.6.89-.66 1.32l-.43 3.01c-.16 1.09.61 1.85 1.7 1.7l3.01-.43a3 3 0 0 0 1.32-.66l7.88-7.88c1.36-1.36 2-2.94 0-4.94s-3.58-1.36-4.94 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.91 4.15a7.1 7.1 0 0 0 4.94 4.94"
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
            d="M15.3 3.2H7.34c-3.45 0-5.52 2.06-5.52 5.52v7.95c0 3.47 2.07 5.53 5.52 5.53h7.95c3.46 0 5.52-2.06 5.52-5.52V8.72c.01-3.46-2.06-5.52-5.51-5.52"
            fill="currentColor"
          />
          <path
            d="M20.84 3.18c-1.79-1.8-3.54-1.84-5.38 0L14.33 4.3q-.15.16-.09.37a7.5 7.5 0 0 0 5.22 5.12q.16 0 .27-.11l1.11-1.12q1.36-1.35 1.36-2.67 0-1.34-1.36-2.71"
            fill="currentColor"
          />
          <path
            d="M17.68 10.62a8 8 0 0 1-2.04-1.34 7 7 0 0 1-1.46-1.64 8 8 0 0 1-1.08-2.1l-5.38 5.38a3 3 0 0 0-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61q.51.5 1.28.5l.33-.02 2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38q-.37-.12-.78-.31"
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
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-5.24 15.51c-.29.29-.84.57-1.24.63l-2.46.35-.27.02c-.41 0-.79-.14-1.06-.41a1.5 1.5 0 0 1-.39-1.34l.35-2.46c.06-.41.33-.95.63-1.24l4.46-4.46q.11.3.27.66a8 8 0 0 0 1.06 1.64q.4.46.79.79l.13.12.43.33q.24.18.49.32.3.18.64.34l.65.26zm6.42-6.42-.92.93a.3.3 0 0 1-.22.09l-.09-.01a6.2 6.2 0 0 1-4.23-4.23.3.3 0 0 1 .08-.3l.93-.93c1.52-1.52 2.97-1.49 4.46 0q1.13 1.12 1.13 2.25 0 1.07-1.14 2.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEdit;
