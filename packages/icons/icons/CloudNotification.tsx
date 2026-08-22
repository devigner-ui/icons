import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudNotification = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudNotification(
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
              d="M22.57 13.96a5.1 5.1 0 0 1-1.63 4.72 5.3 5.3 0 0 1-3.64 1.4H6.21c-4.67-.34-4.68-7.14 0-7.48h.05c-2.19-6.13 3.5-9.73 7.79-8.35"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.93 13.01a4 4 0 0 0-1.67-.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.64 8.5c0 1.1-.51 2.09-1.32 2.73a3.5 3.5 0 0 1-5.68-2.73c0-.96.39-1.83 1.03-2.46v-.01a3.5 3.5 0 0 1 5.97 2.47"
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
              d="M21.24 11.01a5.2 5.2 0 0 0-2.9-1.77 7 7 0 0 0-1.36-2.97l-.06-.08c-2.19-2.65-5.78-2.64-8.2-1.27a6.2 6.2 0 0 0-2.91 7.24 4.1 4.1 0 0 0-3.1 4.04 4.1 4.1 0 0 0 3.95 4.17H17c1.42 0 2.77-.52 3.81-1.48 2.52-2.2 2.19-5.81.43-7.88"
              fill="currentColor"
            />
            <path
              d="M21.94 8.76c0 1.02-.47 1.94-1.23 2.54a3.26 3.26 0 0 1-5.28-2.53c0-.89.36-1.7.96-2.29v-.01a3.24 3.24 0 0 1 5.55 2.29"
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
              d="M21.94 8.76c0 1.02-.47 1.94-1.23 2.54a3.26 3.26 0 0 1-5.28-2.53c0-.89.36-1.7.96-2.29v-.01a3.24 3.24 0 0 1 5.55 2.29"
              fill="currentColor"
            />
            <path
              d="M20.85 18.73a5.7 5.7 0 0 1-3.83 1.49H6.64a4.1 4.1 0 0 1-3.96-4.19c0-1.68.97-3.54 3.1-4.06A6.2 6.2 0 0 1 8.71 4.7c2.06-1.17 4.96-1.36 7.14.25a5 5 0 0 0-.53.46l-.43.45v.06c-.62.81-.96 1.8-.96 2.84a4.76 4.76 0 0 0 8.14 3.32 5.55 5.55 0 0 1-1.22 6.65"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudNotification;
