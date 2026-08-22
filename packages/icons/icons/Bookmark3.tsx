import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookmark3 = forwardRef<SVGSVGElement, IconProps>(
  function IconBookmark3(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79c-1.73 1.03-3.14.27-3.14-1.7V2.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.49C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.92 2v10.42c0 .64-.19 1.12-.52 1.31-.34.2-.88.1-1.48-.26l-1.32-.79a2 2 0 0 0-1.86 0l-1.32.79c-.6.36-1.14.45-1.48.26-.33-.19-.52-.67-.52-1.31V2z"
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
              d="M22.67 7.81v8.38A5.8 5.8 0 0 1 16.86 22H8.48a5.8 5.8 0 0 1-5.81-5.81V7.81c0-2.49 1.02-4.3 2.83-5.18a1 1 0 0 1 1.42.91v8.88c0 1.19.46 2.14 1.29 2.62.84.47 1.9.37 2.98-.28l1.3-.78a.6.6 0 0 1 .34-.01l1.32.79c.72.43 1.34.57 1.84.57.52 0 .92-.16 1.16-.3.81-.47 1.27-1.42 1.27-2.61V3.54c0-.73.77-1.23 1.42-.91 1.81.88 2.83 2.69 2.83 5.18"
              fill="currentColor"
            />
            <path
              d="M15.92 2a1 1 0 0 1 1 1v9.42c0 .64-.19 1.12-.52 1.31-.34.2-.88.1-1.48-.26l-1.32-.79a2 2 0 0 0-1.86 0l-1.32.79c-.6.36-1.14.45-1.48.26-.33-.19-.52-.67-.52-1.31V3a1 1 0 0 1 1-1z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookmark3;
