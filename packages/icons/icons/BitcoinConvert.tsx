import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBitcoinConvert = forwardRef<SVGSVGElement, IconProps>(
  function IconBitcoinConvert(
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
              d="M23.67 15.97a7 7 0 0 1-7 7l1.05-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M1.67 7.97a7 7 0 0 1 7-7L7.62 2.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.29 13.07h2.81c.62 0 1.13.56 1.13 1.13 0 .62-.5 1.13-1.13 1.13H7.29z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.29 15.33h3.22c.71 0 1.29.5 1.29 1.13s-.58 1.13-1.29 1.13H7.29z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 17.58v1.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 11.95v1.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.52 15.33a6.17 6.17 0 1 1-6.17-6.17l.48.02a6.2 6.2 0 0 1 5.68 5.68z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.17 8.67A6.17 6.17 0 0 1 16 14.84h-.49a6.2 6.2 0 0 0-5.68-5.68v-.49a6.17 6.17 0 1 1 12.34 0"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.67 15.22c.41 0 .75.34.75.75a7.74 7.74 0 0 1-7.75 7.75.75.75 0 0 1-.64-1.14l1.05-1.75a.75.75 0 1 1 1.28.78l-.27.45a6.25 6.25 0 0 0 4.83-6.09c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.25 1.88a6.25 6.25 0 0 0-4.83 6.09.75.75 0 1 1-1.5 0A7.74 7.74 0 0 1 8.67.22a.75.75 0 0 1 .64 1.14L8.26 3.1a.75.75 0 1 1-1.28-.78z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.52 15.33a6.17 6.17 0 1 1-6.17-6.17l.48.02a6.2 6.2 0 0 1 5.68 5.68z"
              fill="currentColor"
            />
            <path
              d="M22.17 8.67A6.17 6.17 0 0 1 16 14.84h-.49a6.2 6.2 0 0 0-5.68-5.68v-.49a6.17 6.17 0 1 1 12.34 0"
              fill="currentColor"
            />
            <path
              d="M11.79 15.01q.19-.37.19-.81c0-1-.88-1.88-1.88-1.88h-.26v-.38a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.38H7.29a.76.76 0 0 0-.75.75v4.5c0 .41.34.75.75.75h1.05v.38c0 .41.34.75.75.75s.75-.34.75-.75v-.38h.66c1.12 0 2.04-.84 2.04-1.88 0-.57-.3-1.09-.75-1.43m-3.75-1.19h2.06c.21 0 .38.23.38.38 0 .21-.17.38-.38.38H8.04zm2.46 3.01H8.03v-.75h2.46c.32 0 .54.2.54.38s-.21.37-.53.37"
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
              d="M23.67 15.22a.76.76 0 0 0-.75.75 6.26 6.26 0 0 1-4.83 6.09l.27-.45a.75.75 0 1 0-1.29-.77l-1.05 1.75a.75.75 0 0 0 .64 1.13 7.76 7.76 0 0 0 7.75-7.75.74.74 0 0 0-.74-.75"
              fill="currentColor"
            />
            <path
              d="M8.67.22A7.76 7.76 0 0 0 .92 7.97c0 .41.34.75.75.75s.75-.34.75-.75a6.26 6.26 0 0 1 4.83-6.09l-.27.45a.75.75 0 1 0 1.29.77l1.05-1.75A.75.75 0 0 0 8.67.22"
              fill="currentColor"
            />
            <path
              d="M22.17 8.67A6.16 6.16 0 0 1 17 14.76v-.02a7.75 7.75 0 0 0-7.09-7.07 6.16 6.16 0 0 1 12.26 1"
              fill="currentColor"
            />
            <path
              d="M10.48 14.2c0-.15-.17-.38-.38-.38H8.04v.75h2.06c.21.01.38-.16.38-.37"
              fill="currentColor"
            />
            <path
              d="M10.5 16.08H8.04v.75h2.47c.32 0 .54-.2.54-.38s-.23-.37-.55-.37"
              fill="currentColor"
            />
            <path
              d="M15.5 14.85a6.2 6.2 0 0 0-5.68-5.68l-.48-.02a6.17 6.17 0 1 0 6.18 6.18zm-5 3.48h-.66v.38c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.38H7.29a.76.76 0 0 1-.75-.75v-4.5c0-.41.34-.75.75-.75h1.05v-.38c0-.41.34-.75.75-.75s.75.34.75.75v.38h.26c1 0 1.88.88 1.88 1.88q0 .44-.19.81c.46.34.75.86.75 1.44 0 1.03-.91 1.87-2.04 1.87"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBitcoinConvert;
