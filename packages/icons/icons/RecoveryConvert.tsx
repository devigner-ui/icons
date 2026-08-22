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
              d="M15.27 12.58v2.73c0 2.28-.91 3.19-3.19 3.19H9.36c-2.27 0-3.19-.91-3.19-3.19v-2.73c0-2.27.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.17 8.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18h-2.01v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 15a7 7 0 0 1-7 7l1.05-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 9a7 7 0 0 1 7-7L8.62 3.75"
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
              d="M15.67 22.75a.75.75 0 0 1-.64-1.14l1.05-1.75a.75.75 0 1 1 1.29.77l-.27.45a6.3 6.3 0 0 0 4.83-6.09c0-.41.34-.75.75-.75s.75.34.75.75a7.8 7.8 0 0 1-7.76 7.76"
              fill="currentColor"
            />
            <path
              d="M2.67 9.75A.76.76 0 0 1 1.92 9a7.76 7.76 0 0 1 7.75-7.75.75.75 0 0 1 .64 1.14L9.26 4.14a.75.75 0 0 1-1.03.25.75.75 0 0 1-.25-1.03l.27-.45A6.26 6.26 0 0 0 3.42 9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.47 12.63v2.94c0 2.45-.98 3.43-3.43 3.43H9.1c-2.45 0-3.43-.98-3.43-3.43v-2.94c0-2.45.98-3.43 3.43-3.43h2.94c2.45 0 3.43.98 3.43 3.43"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.24 5H13.3c-2.41 0-3.39.96-3.42 3.32h2.16c2.94 0 4.3 1.37 4.3 4.3v2.16c2.37-.03 3.32-1.01 3.32-3.42V8.43C19.67 5.98 18.69 5 16.24 5"
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
              d="M15.67 22.75a.75.75 0 0 1-.64-1.14l1.05-1.75a.75.75 0 1 1 1.29.77l-.27.45a6.3 6.3 0 0 0 4.83-6.09c0-.41.34-.75.75-.75s.75.34.75.75a7.8 7.8 0 0 1-7.76 7.76"
              fill="currentColor"
            />
            <path
              d="M2.67 9.75A.76.76 0 0 1 1.92 9a7.76 7.76 0 0 1 7.75-7.75.75.75 0 0 1 .64 1.14L9.26 4.14a.75.75 0 0 1-1.03.25.75.75 0 0 1-.25-1.03l.27-.45A6.26 6.26 0 0 0 3.42 9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.47 12.63v2.94c0 2.45-.98 3.43-3.43 3.43H9.1c-2.45 0-3.43-.98-3.43-3.43v-2.94c0-2.45.98-3.43 3.43-3.43h2.94c2.45 0 3.43.98 3.43 3.43"
              fill="currentColor"
            />
            <path
              d="M16.24 5H13.3c-2.41 0-3.39.96-3.42 3.32h2.16c2.94 0 4.3 1.37 4.3 4.3v2.16c2.37-.03 3.32-1.01 3.32-3.42V8.43C19.67 5.98 18.69 5 16.24 5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRecoveryConvert;
