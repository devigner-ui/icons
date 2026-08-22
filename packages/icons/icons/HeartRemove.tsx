import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartRemove(
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
              d="M22.67 17.2a4.8 4.8 0 1 1-1.31-3.29v.01a4.8 4.8 0 0 1 1.31 3.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.15 18.54 16.62 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.12 16.03-2.53 2.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 8.69c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-7.06 6.49q-.56.26-1.01.41c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12a5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
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
              fill="currentColor"
              d="M22 8.69a11 11 0 0 1-1.32 5.21 4.8 4.8 0 0 0-7.05 6.5q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.97 19.99 4.1 17 2.52 12A11 11 0 0 1 2 8.69a5.55 5.55 0 0 1 10-3.36 5.6 5.6 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              fill="currentColor"
              d="m20.69 13.92-.01-.01v-.01a4.8 4.8 0 1 0 .01.02m-1.68 5.15q-.23.21-.53.22c-.3.01-.38-.08-.53-.22l-.74-.74-.76.77a.8.8 0 0 1-.53.22 1 1 0 0 1-.28-.06 1 1 0 0 1-.25-.16.74.74 0 0 1 0-1.06l.76-.77-.73-.74a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.73.74.71-.71a.75.75 0 0 1 1.06 0q.25.27.21.61a.7.7 0 0 1-.21.45l-.71.71.74.74c.3.29.3.76 0 1.06"
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
              fill="currentColor"
              d="m20.69 13.92-.01-.01v-.01a4.8 4.8 0 1 0 .01.02m-1.68 5.15q-.23.22-.53.22c-.3 0-.38-.08-.53-.22l-.74-.74-.76.77a.8.8 0 0 1-.53.22 1 1 0 0 1-.28-.06 1 1 0 0 1-.25-.16.74.74 0 0 1 0-1.06l.76-.77-.73-.74a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.73.74.71-.71a.75.75 0 0 1 1.06 0q.25.27.21.6a.7.7 0 0 1-.21.46l-.71.7.74.75c.3.29.3.76 0 1.06"
            />
            <path
              fill="currentColor"
              d="M22 8.73q-.01 1.78-.52 3.31c-.06.21-.31.27-.49.14a6.4 6.4 0 0 0-3.79-1.24 6.3 6.3 0 0 0-5.49 9.38c.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81A11 11 0 0 1 2 8.73a5.55 5.55 0 0 1 10-3.36 5.6 5.6 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartRemove;
