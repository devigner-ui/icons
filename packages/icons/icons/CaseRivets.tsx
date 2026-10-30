import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCaseRivets = forwardRef<SVGSVGElement, IconProps>(
  function IconCaseRivets(
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
            d="M22 13.5c0-3.77 0-5.66-1.17-6.83-.75-.75-1.8-1.02-3.44-1.12Q16.02 5.5 14 5.5h-4q-2.02-.01-3.4.05c-1.63.1-2.68.37-3.43 1.12C2 7.84 2 9.73 2 13.5s0 5.66 1.17 6.83S6.23 21.5 10 21.5h4c3.77 0 5.66 0 6.83-1.17.65-.65.94-1.53 1.07-2.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.6 5.55a2.05 2.05 0 0 0 1.87-1.47L8.5 4l.09-.25a2 2 0 0 1 1.73-1.25h3.36a2 2 0 0 1 1.73 1.25l.09.25.03.08.03.1c.28.77 1 1.35 1.83 1.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M21.66 8.22c-3 1.96-4.51 2.93-6.1 3.43a12 12 0 0 1-7.12 0c-1.59-.5-3.1-1.47-6.1-3.43"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 10.5v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16 10.5v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M14 5.5h-4q-2.02-.02-3.4.06c-1.63.1-2.68.36-3.43 1.11C2 7.84 2 9.73 2 13.5s0 5.66 1.17 6.83S6.23 21.5 10 21.5h4c3.77 0 5.66 0 6.83-1.17S22 17.27 22 13.5s0-5.66-1.17-6.83c-.75-.75-1.8-1.02-3.44-1.11Q16.02 5.48 14 5.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.6 5.56a2.05 2.05 0 0 0 1.87-1.48L8.5 4l.09-.25a2 2 0 0 1 1.73-1.25h3.36a2 2 0 0 1 1.73 1.25l.09.25.03.08.03.1c.28.78 1 1.35 1.83 1.38"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.66 8.22c-3 1.96-4.51 2.93-6.1 3.43a12 12 0 0 1-7.12 0c-1.59-.5-3.1-1.47-6.1-3.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 10.5v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 10.5v2"
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
              d="M10.58 2.65h-.3a2.75 2.75 0 0 0-2.51 2.07v.01c-.1.28-.3.52-.5.7l-.66.02c-1.64.1-2.69.37-3.44 1.12q-.36.37-.59.84l.17.08a52 52 0 0 0 4.51 2.77.75.75 0 0 1 1.49.14v.46c2.12.64 4.38.64 6.5 0v-.46a.75.75 0 0 1 1.49-.14c1.1-.55 2.41-1.4 4.51-2.77l.17-.08q-.23-.48-.6-.84c-.74-.75-1.79-1.02-3.43-1.12l-.62-.02a2 2 0 0 1-.56-.78l-.1-.28a2.75 2.75 0 0 0-2.67-1.72zm4.24 2.57V5.2l-.01-.02-.01-.02v-.02h-.01v-.03l-.07-.19c-.18-.44-.6-.75-1.09-.78h-3.26c-.49.03-.9.34-1.09.78v.03l-.09.23v.04l-.01.01v.02l-.01.01v.01l-.01.01-.06.12h5.79z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.16 8.9C2 10 2 11.45 2 13.4c0 3.77 0 5.66 1.17 6.83S6.23 21.4 10 21.4h4c3.77 0 5.66 0 6.83-1.17S22 17.17 22 13.4c0-1.95 0-3.4-.16-4.5-2.28 1.48-3.74 2.42-5.09 3v.5a.75.75 0 0 1-1.5.02c-2.13.56-4.37.56-6.5 0a.75.75 0 0 1-1.5-.02v-.5c-1.35-.58-2.81-1.52-5.09-3"
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
              d="M2.16 8.9C2 10 2 11.45 2 13.4c0 3.77 0 5.66 1.17 6.83S6.23 21.4 10 21.4h4c3.77 0 5.66 0 6.83-1.17S22 17.17 22 13.4c0-1.95 0-3.4-.16-4.5-2.28 1.48-3.74 2.42-5.09 3v.5a.75.75 0 0 1-1.5.02c-2.13.56-4.37.56-6.5 0a.75.75 0 0 1-1.5-.02v-.5c-1.35-.58-2.81-1.52-5.09-3"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.58 2.65h-.3a2.75 2.75 0 0 0-2.51 2.07v.01c-.1.28-.3.52-.5.7l-.66.02c-1.64.1-2.69.37-3.44 1.12q-.36.37-.59.84l.17.08a52 52 0 0 0 4.51 2.77.75.75 0 0 1 1.49.14v.46c2.12.64 4.38.64 6.5 0v-.46a.75.75 0 0 1 1.49-.14c1.1-.55 2.41-1.4 4.51-2.77l.17-.08q-.23-.48-.6-.84c-.74-.75-1.79-1.02-3.43-1.12l-.62-.02-.04-.04c-.24-.2-.43-.48-.52-.74l-.1-.28a2.75 2.75 0 0 0-2.67-1.72zm4.24 2.57V5.2l-.01-.02-.01-.02v-.02h-.01v-.03l-.07-.19c-.18-.44-.6-.75-1.09-.78h-3.26c-.49.03-.9.34-1.09.78v.03l-.09.23v.04l-.01.01v.02l-.01.01v.01l-.01.01-.06.12h5.79z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCaseRivets;
