import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUploadTrack2 = forwardRef<SVGSVGElement, IconProps>(
  function IconUploadTrack2(
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
              d="M13 15V7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="11"
              cy="15"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16 10a3 3 0 0 1-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.75 21.27a10 10 0 1 1 5.7-6l-1.86-1.86a2.25 2.25 0 0 0-3.18 0l-2.5 2.5a2.25 2.25 0 0 0 1.84 3.83z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.75 7a.75.75 0 0 0-1.5 0v5.55q-.57-.3-1.25-.3A2.75 2.75 0 1 0 13.75 15v-5c.63.47 1.4.75 2.25.75a.75.75 0 0 0 0-1.5c-1.24 0-2.25-1-2.25-2.25"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.47 14.47c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"
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
              d="M17.47 14.47c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="M12.25 15a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.75 21.27a10 10 0 1 1 5.7-6l-1.86-1.86a2.25 2.25 0 0 0-3.18 0l-2.5 2.5a2.25 2.25 0 0 0 1.84 3.83zM13 6.25c.41 0 .75.34.75.75 0 1.24 1 2.25 2.25 2.25a.75.75 0 0 1 0 1.5c-.84 0-1.62-.28-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45V7c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUploadTrack2;
