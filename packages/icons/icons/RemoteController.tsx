import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRemoteController = forwardRef<SVGSVGElement, IconProps>(
  function IconRemoteController(
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
              d="M5 9c0-2.8 0-4.21.67-5.22a4 4 0 0 1 1.1-1.1C7.8 2 9.2 2 12 2s4.21 0 5.22.67a4 4 0 0 1 1.1 1.1C19 4.8 19 6.2 19 9v6c0 2.8 0 4.21-.67 5.22a4 4 0 0 1-1.1 1.1C16.2 22 14.8 22 12 22s-4.21 0-5.22-.67a4 4 0 0 1-1.1-1.1C5 19.2 5 17.8 5 15z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9 5.5h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle cx="9" cy="9.00012" r="1" fill="currentColor" />
            <circle cx="12" cy="9.00012" r="1" fill="currentColor" />
            <circle cx="15" cy="9.00012" r="1" fill="currentColor" />
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
              d="M5.67 3.78C5 4.78 5 6.19 5 9v6c0 2.8 0 4.21.67 5.22a4 4 0 0 0 1.1 1.1C7.8 22 9.2 22 12 22s4.21 0 5.22-.67a4 4 0 0 0 1.1-1.1C19 19.2 19 17.8 19 15V9c0-2.8 0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C16.2 2 14.8 2 12 2s-4.21 0-5.22.67a4 4 0 0 0-1.1 1.1"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 15.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path d="M16 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M9 4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
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
              d="M9.75 15.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.67 3.78C5 4.78 5 6.19 5 9v6c0 2.8 0 4.21.67 5.22a4 4 0 0 0 1.1 1.1C7.8 22 9.2 22 12 22s4.21 0 5.22-.67a4 4 0 0 0 1.1-1.1C19 19.2 19 17.8 19 15V9c0-2.8 0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C16.2 2 14.8 2 12 2s-4.21 0-5.22.67a4 4 0 0 0-1.1 1.1M12 11.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M8.25 5.5c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRemoteController;
