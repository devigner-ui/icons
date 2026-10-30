import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRecoveryConvert = forwardRef<SVGSVGElement, IconProps>(
  function IconRecoveryConvert(
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
            d="M5.53 15.98c.17 1.79 1.1 2.52 3.16 2.52h2.73c2.28 0 3.19-.91 3.19-3.19v-2.73c0-2.27-.91-3.18-3.2-3.18H8.7c-2.07 0-3.01.75-3.16 2.6"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.5 8.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H9.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 15a7 7 0 0 1-7 7l1.05-1.75"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 9a7 7 0 0 1 7-7L7.95 3.75"
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
              d="M14.6 12.58v2.73c0 2.28-.91 3.19-3.19 3.19H8.69c-2.27 0-3.19-.91-3.19-3.19v-2.73c0-2.27.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 8.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H9.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 15a7 7 0 0 1-7 7l1.05-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 9a7 7 0 0 1 7-7L7.95 3.75"
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
              d="M15 22.75a.75.75 0 0 1-.64-1.14l1.05-1.75a.75.75 0 1 1 1.29.77l-.27.45a6.3 6.3 0 0 0 4.83-6.09c0-.41.34-.75.75-.75s.75.34.75.75A7.8 7.8 0 0 1 15 22.75"
              fill="currentColor"
            />
            <path
              d="M2 9.75A.76.76 0 0 1 1.25 9 7.76 7.76 0 0 1 9 1.25a.75.75 0 0 1 .64 1.14L8.59 4.14a.75.75 0 0 1-1.03.25.75.75 0 0 1-.25-1.03l.27-.45A6.26 6.26 0 0 0 2.75 9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.8 12.63v2.94c0 2.45-.98 3.43-3.43 3.43H8.43C5.98 19 5 18.02 5 15.57v-2.94c0-2.45.98-3.43 3.43-3.43h2.94c2.45 0 3.43.98 3.43 3.43"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.57 5h-2.94c-2.41 0-3.39.96-3.42 3.32h2.16c2.94 0 4.3 1.37 4.3 4.3v2.16c2.37-.03 3.32-1.01 3.32-3.42V8.43C19 5.98 18.02 5 15.57 5"
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
              d="M15 22.75a.75.75 0 0 1-.64-1.14l1.05-1.75a.75.75 0 1 1 1.29.77l-.27.45a6.3 6.3 0 0 0 4.83-6.09c0-.41.34-.75.75-.75s.75.34.75.75A7.8 7.8 0 0 1 15 22.75"
              fill="currentColor"
            />
            <path
              d="M2 9.75A.76.76 0 0 1 1.25 9 7.76 7.76 0 0 1 9 1.25a.75.75 0 0 1 .64 1.14L8.59 4.14a.75.75 0 0 1-1.03.25.75.75 0 0 1-.25-1.03l.27-.45A6.26 6.26 0 0 0 2.75 9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M14.8 12.63v2.94c0 2.45-.98 3.43-3.43 3.43H8.43C5.98 19 5 18.02 5 15.57v-2.94c0-2.45.98-3.43 3.43-3.43h2.94c2.45 0 3.43.98 3.43 3.43"
              fill="currentColor"
            />
            <path
              d="M15.57 5h-2.94c-2.41 0-3.39.96-3.42 3.32h2.16c2.94 0 4.3 1.37 4.3 4.3v2.16c2.37-.03 3.32-1.01 3.32-3.42V8.43C19 5.98 18.02 5 15.57 5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRecoveryConvert;
