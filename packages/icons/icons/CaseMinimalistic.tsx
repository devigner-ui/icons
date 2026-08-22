import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCaseMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconCaseMinimalistic(
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
              d="M14 6h-4q-2.02-.02-3.4.06c-1.63.1-2.68.36-3.43 1.11C2 8.34 2 10.23 2 14s0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14s0-5.66-1.17-6.83c-.75-.75-1.8-1.02-3.44-1.11Q16.02 5.98 14 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.6 6.06a2.05 2.05 0 0 0 1.87-1.48l.03-.08.09-.25A2 2 0 0 1 10.32 3h3.36a2 2 0 0 1 1.73 1.25l.09.25.03.08.03.1c.28.78 1 1.35 1.83 1.38"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.66 8.72c-3 1.96-4.51 2.93-6.1 3.43a12 12 0 0 1-7.12 0c-1.59-.5-3.1-1.47-6.1-3.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 11v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 11v2"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.58 2.25h-.3a2.75 2.75 0 0 0-2.51 2.07v.01c-.1.28-.3.52-.5.7l-.66.02c-1.64.1-2.69.37-3.44 1.12q-.36.37-.59.84l.17.08a52 52 0 0 0 4.51 2.77.75.75 0 0 1 1.49.14v.46c2.12.64 4.38.64 6.5 0V10a.75.75 0 0 1 1.49-.14c1.1-.55 2.41-1.4 4.51-2.77l.17-.08q-.23-.48-.6-.84c-.74-.75-1.79-1.02-3.43-1.12l-.62-.02a2 2 0 0 1-.56-.78l-.1-.28a2.75 2.75 0 0 0-2.67-1.72zm4.24 2.57V4.8l-.01-.02-.01-.02v-.02h-.01v-.03l-.07-.19c-.18-.44-.6-.75-1.09-.78h-3.26c-.49.03-.9.34-1.09.78v.03l-.09.23v.04l-.01.01v.02l-.01.01v.01l-.01.01L9.1 5h5.79z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.16 8.5C2 9.6 2 11.05 2 13c0 3.77 0 5.66 1.17 6.83S6.23 21 10 21h4c3.77 0 5.66 0 6.83-1.17S22 16.77 22 13c0-1.95 0-3.4-.16-4.5-2.28 1.48-3.74 2.42-5.09 3v.5a.75.75 0 0 1-1.5.02c-2.13.56-4.37.56-6.5 0a.75.75 0 0 1-1.5-.02v-.5c-1.35-.58-2.81-1.52-5.09-3"
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
              d="M2.16 8.5C2 9.6 2 11.05 2 13c0 3.77 0 5.66 1.17 6.83S6.23 21 10 21h4c3.77 0 5.66 0 6.83-1.17S22 16.77 22 13c0-1.95 0-3.4-.16-4.5-2.28 1.48-3.74 2.42-5.09 3v.5a.75.75 0 0 1-1.5.02c-2.13.56-4.37.56-6.5 0a.75.75 0 0 1-1.5-.02v-.5c-1.35-.58-2.81-1.52-5.09-3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.58 2.25h-.3a2.75 2.75 0 0 0-2.51 2.07v.01c-.1.28-.3.52-.5.7l-.66.02c-1.64.1-2.69.37-3.44 1.12q-.36.37-.59.84l.17.08a52 52 0 0 0 4.51 2.77.75.75 0 0 1 1.49.14v.46c2.12.64 4.38.64 6.5 0V10a.75.75 0 0 1 1.49-.14c1.1-.55 2.41-1.4 4.51-2.77l.17-.08q-.23-.48-.6-.84c-.74-.75-1.79-1.02-3.43-1.12l-.62-.02-.04-.04c-.24-.2-.43-.48-.52-.74l-.1-.28a2.75 2.75 0 0 0-2.67-1.72zm4.24 2.57V4.8l-.01-.02-.01-.02v-.02h-.01v-.03l-.07-.19c-.18-.44-.6-.75-1.09-.78h-3.26c-.49.03-.9.34-1.09.78v.03l-.09.23v.04l-.01.01v.02l-.01.01v.01l-.01.01L9.1 5h5.79z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCaseMinimalistic;
