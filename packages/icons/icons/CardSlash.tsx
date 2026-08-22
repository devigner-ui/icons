import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconCardSlash(
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
              d="M2.67 8.5h13.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.67 16.5h1.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.67 16.5h3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.65 20.5h9.58c3.56 0 4.44-.88 4.44-4.39V6.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.66 3.75a9 9 0 0 0-2.43-.25H7.11c-3.55 0-4.44.88-4.44 4.39v8.21c0 2.34.39 3.51 1.71 4.03"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 2-20 20"
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
              d="M22.67 9v7.46a4.14 4.14 0 0 1-4.15 4.14H7.07l3.57-3.57 1.28-1.28L18.67 9z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.67 9-11 11c-1.2-.72-2-2.04-2-3.54V9z"
              fill="currentColor"
            />
            <path
              d="M22.67 7.54V9h-4l3.47-3.47q.52.9.53 2.01"
              fill="currentColor"
            />
            <path
              d="m20.67 4-5 5h-13V7.54A4.14 4.14 0 0 1 6.82 3.4h11.7q1.2.02 2.15.6"
              fill="currentColor"
            />
            <path
              d="m8.88 15.79-1.46 1.46h-.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2q.1 0 .21.04"
              fill="currentColor"
            />
            <path
              d="M15.92 16.5c0 .41-.34.75-.75.75h-4a.8.8 0 0 1-.53-.22l1.28-1.28h3.25c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
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
              d="m19.94 3.65-5.1 5.1H3.87a1.2 1.2 0 0 1-1.2-1.2v-.01A4.14 4.14 0 0 1 6.81 3.4h11.71q.75 0 1.42.25"
              fill="currentColor"
            />
            <path
              d="m13.34 10.25-5.5 5.5H6.67a.76.76 0 0 0-.75.75c0 .31.2.59.48.69l-2.35 2.35a4 4 0 0 1-1.38-3.08v-5.01c0-.66.54-1.2 1.2-1.2z"
              fill="currentColor"
            />
            <path
              d="M22.67 11v5.46a4.14 4.14 0 0 1-4.14 4.14H9.48a1 1 0 0 1-.7-1.71l1.34-1.35a1 1 0 0 1 .71-.29h4.34c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-.84a1 1 0 0 1-.7-1.71l3.45-3.46c.38-.37.9-.58 1.42-.58h3.17a1 1 0 0 1 1 1"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
            <path
              d="m22.44 3.31-1.16 1.16L17 8.75 3.98 21.77a.8.8 0 0 1-.54.23.8.8 0 0 1-.54-.23.74.74 0 0 1 0-1.08l1.15-1.15 2.35-2.35L19.94 3.65l1.42-1.42a.74.74 0 0 1 1.08 0c.31.3.31.78 0 1.08"
              fill="currentColor"
            />
            <path
              d="M22.67 7.41a1 1 0 0 0-1.7-.71l-.3.3-.29.29a1 1 0 0 0 .7 1.71h.6a1 1 0 0 0 1-1z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCardSlash;
