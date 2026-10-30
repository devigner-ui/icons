import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeadphone = forwardRef<SVGSVGElement, IconProps>(
  function IconHeadphone(
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
            d="M2 12.22a9.9 9.9 0 0 1 9.95-10.17C17.57 2.05 22 6.6 22 12.11v6.16a3.6 3.6 0 0 1-3.57 3.57 3.6 3.6 0 0 1-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81a3.6 3.6 0 0 1-3.57 3.57A3.6 3.6 0 0 1 2 18.38V16"
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
              d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81a3.6 3.6 0 0 1-3.57 3.57A3.6 3.6 0 0 1 2 18.38v-6.16a9.9 9.9 0 0 1 9.95-10.17C17.57 2.05 22 6.6 22 12.11v6.16a3.6 3.6 0 0 1-3.57 3.57 3.6 3.6 0 0 1-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
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
              d="M2.75 18.65A.76.76 0 0 1 2 17.9v-5.7a9.94 9.94 0 0 1 9.95-10.15C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-5.7A8.56 8.56 0 0 0 5.91 6.06a8.4 8.4 0 0 0-2.41 6.12v5.71c0 .42-.33.76-.75.76"
              fill="currentColor"
            />
            <path
              d="M5.94 12.45h-.13A3.8 3.8 0 0 0 2 16.26v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
              fill="currentColor"
            />
            <path
              d="M18.19 12.45h-.13a3.8 3.8 0 0 0-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
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
              d="M2.75 18.65A.76.76 0 0 1 2 17.9v-5.7a9.94 9.94 0 0 1 9.95-10.15C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-5.7A8.56 8.56 0 0 0 5.91 6.06a8.4 8.4 0 0 0-2.41 6.12v5.71c0 .42-.33.76-.75.76"
              fill="currentColor"
            />
            <path
              d="M5.94 12.45h-.13A3.8 3.8 0 0 0 2 16.26v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
              fill="currentColor"
            />
            <path
              d="M18.19 12.45h-.13a3.8 3.8 0 0 0-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeadphone;
