import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlashSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconFlashSlash(
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
            d="M9.18 18.04v2.44c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-.93"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m9.98 5.96-4.76 5.41c-.93 1.05-.54 1.92.87 1.92h3.09v1.18"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.82 8.84V3.52c0-1.68-.9-2.02-2.02-.76"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 2 2 22"
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
              d="M9.18 18.04v2.44c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-.93"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.82 8.84V3.52c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.93 1.05-.54 1.92.87 1.92h3.09v1.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2 2 22"
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
              d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.82 3.52v5.66l-5.64 5.64v-1.54h-3.1c-1.4 0-1.78-.86-.85-1.91L12 3.67l.8-.91c1.1-1.26 2.02-.92 2.02.76"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.77 12.63 12 20.33l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-2.66l7.1-7.1h1.63c1.4 0 1.79.86.86 1.91"
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
              d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
            <path
              d="M14.82 3.52v5.66l-5.64 5.64v-1.54h-3.1c-1.4 0-1.78-.86-.85-1.91L12 3.67l.8-.91c1.1-1.26 2.02-.92 2.02.76"
              fill="currentColor"
            />
            <path
              d="M18.77 12.63 12 20.33l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-2.66l7.1-7.1h1.63c1.4 0 1.79.86.86 1.91"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFlashSlash;
