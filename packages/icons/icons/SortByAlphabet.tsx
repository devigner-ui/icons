import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSortByAlphabet = forwardRef<SVGSVGElement, IconProps>(
  function IconSortByAlphabet(
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
              d="M13 7H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 12H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 17H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M11.32 16.7a.75.75 0 1 0 1.36.6zM16.5 7l.68-.3a.75.75 0 0 0-1.36 0zm3.82 10.3a.75.75 0 1 0 1.36-.6zm-.96-3.94.69-.3zm-5.72-.75a.75.75 0 0 0 0 1.5zm-.96 4.7 4.5-10-1.36-.62-4.5 10zm9-.62-1.63-3.63-1.37.61 1.64 3.64zm-1.63-3.63-2.87-6.37-1.36.62 2.86 6.36zm-.69-.45h-5.72v1.5h5.72z"
              fill="currentColor"
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
              d="M17.18 6.7a.75.75 0 0 0-1.36 0l-4.5 10a.75.75 0 1 0 1.36.6l1.44-3.19h4.76l1.44 3.2a.75.75 0 0 0 1.36-.62zm-.68 2.13-1.7 3.78h3.4z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 7c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.25 12c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.25 17c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
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
              d="M2.25 7c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7m14.25-.75c.3 0 .56.17.68.44l4.5 10a.75.75 0 1 1-1.36.62l-1.44-3.2h-4.76l-1.44 3.2a.75.75 0 1 1-1.36-.62l4.5-10a.8.8 0 0 1 .68-.44m-1.7 6.36h3.4l-1.7-3.78zM2.25 12c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSortByAlphabet;
