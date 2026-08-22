import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefreshCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconRefreshCircle(
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
              d="M7.38 11.63h-.75zm0 .93-.56.5a.75.75 0 0 0 1.08.04zm2.14-1.02a.75.75 0 0 0-1.04-1.08zM6.56 10.5a.75.75 0 1 0-1.12 1zM14.93 9a.75.75 0 1 0 1.1-1zm-2.89-2.75a5.4 5.4 0 0 0-5.41 5.38h1.5a3.9 3.9 0 0 1 3.91-3.88zm-5.41 5.38v.93h1.5v-.93zM7.9 13.1l1.62-1.56-1.04-1.08L6.86 12zm.04-1.04L6.56 10.5l-1.12 1 1.38 1.55zm8.1-4.07a5.4 5.4 0 0 0-4-1.74v1.5c1.15 0 2.18.49 2.9 1.26z"
              fill="currentColor"
            />
            <path
              d="m16.62 11.44.56-.5a.75.75 0 0 0-1.08-.04zm-2.14 1.02a.75.75 0 1 0 1.04 1.08zm2.96 1.04a.75.75 0 0 0 1.12-1zM9.04 15a.75.75 0 0 0-1.09 1.03zm2.9 2.75a5.4 5.4 0 0 0 5.43-5.38h-1.5a3.9 3.9 0 0 1-3.94 3.88zm5.43-5.38v-.93h-1.5v.93zM16.1 10.9l-1.62 1.56 1.04 1.08 1.62-1.55zm-.04 1.04 1.38 1.56 1.12-1-1.38-1.55zm-8.1 4.1a5.5 5.5 0 0 0 3.97 1.71v-1.5A4 4 0 0 1 9.05 15z"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              fill="currentColor"
            />
            <path
              d="M7.38 11.63h-.75zm0 .93-.56.5a.75.75 0 0 0 1.08.04zm2.14-1.02a.75.75 0 0 0-1.04-1.08zM6.56 10.5a.75.75 0 1 0-1.12 1zM14.93 9a.75.75 0 1 0 1.1-1zm-2.89-2.75a5.4 5.4 0 0 0-5.41 5.38h1.5a3.9 3.9 0 0 1 3.91-3.88zm-5.41 5.38v.93h1.5v-.93zM7.9 13.1l1.62-1.56-1.04-1.08L6.86 12zm.04-1.04L6.56 10.5l-1.12 1 1.38 1.55zm8.1-4.07a5.4 5.4 0 0 0-4-1.74v1.5c1.15 0 2.18.49 2.9 1.26z"
              fill="currentColor"
            />
            <path
              d="m16.62 11.44.56-.5a.75.75 0 0 0-1.08-.04zm-2.14 1.02a.75.75 0 1 0 1.04 1.08zm2.96 1.04a.75.75 0 0 0 1.12-1zM9.04 15a.75.75 0 0 0-1.09 1.03zm2.9 2.75a5.4 5.4 0 0 0 5.43-5.38h-1.5a3.9 3.9 0 0 1-3.94 3.88zm5.43-5.38v-.93h-1.5v.93zM16.1 10.9l-1.62 1.56 1.04 1.08 1.62-1.55zm-.04 1.04 1.38 1.56 1.12-1-1.38-1.55zm-8.1 4.1a5.5 5.5 0 0 0 3.97 1.71v-1.5A4 4 0 0 1 9.05 15z"
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-16.54-.92a6.59 6.59 0 0 1 11.8-3.24.75.75 0 0 1-1.2.91 5.08 5.08 0 0 0-9.09 2.33h.37a.75.75 0 0 1 .53 1.28L6.7 13.53c-.3.3-.77.3-1.06 0l-1.17-1.17A.75.75 0 0 1 5 11.08zm12.9-.61a.75.75 0 0 0-1.06 0l-1.17 1.17a.75.75 0 0 0 .53 1.28h.37a5.09 5.09 0 0 1-9.08 2.34.75.75 0 0 0-1.19.92 6.58 6.58 0 0 0 11.78-3.26H19a.75.75 0 0 0 .53-1.28z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRefreshCircle;
