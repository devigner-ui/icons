import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGalleryMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconGalleryMinimalistic(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="16"
              cy="8"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 13.3.81-.75a2.3 2.3 0 0 1 3.24.11l2.65 2.81c.54.57 1.42.65 2.05.18.9-.67 2.16-.6 2.98.18L19 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              d="M8.5 13.18a1.55 1.55 0 0 0-2.18-.08l-.81.76a.75.75 0 0 1-1.02-1.1L5.3 12a3.05 3.05 0 0 1 4.3.15l2.64 2.8a.8.8 0 0 0 1.06.1c1.2-.9 2.87-.8 3.95.24l2.27 2.17a.75.75 0 0 1-1.04 1.08l-2.27-2.16a1.6 1.6 0 0 0-2.02-.13 2.3 2.3 0 0 1-3.04-.26z"
              fill="currentColor"
            />
            <path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M16 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9.68 3.1c.63-.58 1.6-.54 2.18.08l2.65 2.8c.8.86 2.11.97 3.04.27.62-.45 1.47-.4 2.02.13l2.27 2.16a.75.75 0 0 0 1.04-1.08l-2.27-2.17a3.1 3.1 0 0 0-3.95-.24.8.8 0 0 1-1.06-.1l-2.64-2.8A3.05 3.05 0 0 0 5.3 12l-.81.76a.75.75 0 1 0 1.02 1.1z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGalleryMinimalistic;
