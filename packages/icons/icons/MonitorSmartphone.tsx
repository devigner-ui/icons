import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMonitorSmartphone = forwardRef<SVGSVGElement, IconProps>(
  function IconMonitorSmartphone(
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
              d="M11 17H8c-2.83 0-4.24 0-5.12-.88S2 13.82 2 11v-1c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h5.5c2.33 0 3.5 0 4.39.47a4 4 0 0 1 1.64 1.64C22 5 22 6.17 22 8.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14 15c0-1.89 0-2.83.59-3.41C15.17 11 16.1 11 18 11s2.83 0 3.41.59c.59.58.59 1.52.59 3.41v3c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59s-2.83 0-3.41-.59C14 20.83 14 19.9 14 18z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 20h-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11 22v.75c.41 0 .75-.34.75-.75zm-3-.75a.75.75 0 0 0 0 1.5zM11.75 17a.75.75 0 0 0-1.5 0zM11 21.25H8v1.5h3zm.75.75v-5h-1.5v5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11 13H2"
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
              d="M22 15v3c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59s-2.83 0-3.41-.59C14 20.83 14 19.9 14 18v-3c0-1.89 0-2.83.59-3.41C15.17 11 16.1 11 18 11s2.83 0 3.41.59c.59.58.59 1.52.59 3.41m-5.75 5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M8 17c-2.83 0-4.24 0-5.12-.88-.57-.57-.8-1.36-.88-2.62V13h10.52v.5q-.03.66-.02 1.41v3.18c0 .87 0 1.66.09 2.3.1.72.32 1.47.93 2.08l.03.03H8A.75.75 0 0 1 8 21h3.25v-4z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v.14a4 4 0 0 0-1.6-.55c-.65-.09-1.44-.09-2.31-.09h-.18c-.87 0-1.66 0-2.3.09-.72.1-1.47.32-2.08.94a3.4 3.4 0 0 0-.93 1.97v.5H2v-3c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2"
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
              d="M14 2h-4C6.23 2 4.34 2 3.17 3.17S2 6.23 2 10v2.5h10.6c.1-.68.34-1.39.93-1.97a3.5 3.5 0 0 1 2.08-.94c.64-.09 1.43-.09 2.3-.09h.18c.87 0 1.66 0 2.3.09.54.07 1.1.21 1.61.55V10c0-3.77 0-5.66-1.17-6.83S17.77 2 14 2"
              fill="currentColor"
            />
            <path
              d="M2.88 16.12C3.76 17 5.18 17 8 17h3.25v4H8a.75.75 0 0 0 0 1.5h5.55l-.02-.03a3.5 3.5 0 0 1-.94-2.08c-.09-.64-.09-1.43-.09-2.3v-3.18q0-.75.02-1.41H2.04c.07 1.26.27 2.05.84 2.62"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 15v3c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59s-2.83 0-3.41-.59C14 20.83 14 19.9 14 18v-3c0-1.89 0-2.83.59-3.41C15.17 11 16.1 11 18 11s2.83 0 3.41.59c.59.58.59 1.52.59 3.41m-5.75 5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMonitorSmartphone;
