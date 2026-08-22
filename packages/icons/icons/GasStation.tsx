import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGasStation = forwardRef<SVGSVGElement, IconProps>(
  function IconGasStation(
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
              d="M16 22V8c0-2.83 0-4.24-.88-5.12S12.82 2 10 2H9c-2.83 0-4.24 0-5.12.88S3 5.18 3 8v14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11 6H8c-.94 0-1.41 0-1.7.3C6 6.58 6 7.05 6 8s0 1.41.3 1.7c.29.3.76.3 1.7.3h3c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7s0-1.41-.3-1.7C12.42 6 11.95 6 11 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 17h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17 22H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.97 3.41a.75.75 0 1 0-.94 1.18zM20.73 5l.47-.59zM16 16.25a.75.75 0 0 0 0 1.5zm5-11.04-.5.56zm1 2.06.74-.04zm0 1.48a.75.75 0 0 0 0-1.5zm-1.97 4.6-.24.7zm1.73 1.36a.75.75 0 0 0 .48-1.42zM19.03 4.6l1.23.98.94-1.17-1.23-.99zm2.22 3.03V18.5h1.5V7.62zm-1.5 10.88v-.07h-1.5v.07zm-2.18-2.25H16v1.5h1.57zm2.18 2.18c0-1.2-.98-2.18-2.18-2.18v1.5c.38 0 .68.3.68.68zm.75.82a.75.75 0 0 1-.75-.75h-1.5c0 1.24 1 2.25 2.25 2.25zm.75-.75c0 .41-.34.75-.75.75v1.5c1.24 0 2.25-1 2.25-2.25zm-.99-12.93.24.2 1-1.12-.3-.25zm2.49 2.05v-.39l-1.5.09v.3zM20.5 5.77c.45.4.71.95.75 1.55l1.5-.09a3.7 3.7 0 0 0-1.25-2.58zM22 7.25h-1.5v1.5H22zM18.25 9.5v2.42h1.5V9.5zm1.54 4.55 1.97.66.48-1.42-1.98-.66zm-1.54-2.13c0 .97.62 1.83 1.54 2.13l.47-1.42a.75.75 0 0 1-.51-.71zm2.25-4.67c-1.24 0-2.25 1-2.25 2.25h1.5c0-.41.34-.75.75-.75z"
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
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.75 2h-1c-2.83 0-4.24 0-5.12.88S2.75 5.18 2.75 8v13.25h13V8c0-2.83 0-4.24-.88-5.12S12.57 2 9.75 2"
              fill="currentColor"
            />
            <path
              d="M2.75 21.25h-1a.75.75 0 0 0 0 1.5h15.12a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M8 6h3c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3H8c-.94 0-1.41 0-1.7-.3C6 9.42 6 8.95 6 8s0-1.41.3-1.7C6.58 6 7.05 6 8 6"
              fill="currentColor"
            />
            <path
              d="M7 16.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M15.75 17.75h1.57c.38 0 .68.3.68.68v.07a2.25 2.25 0 1 0 4.5 0V7.23a3.7 3.7 0 0 0-1.25-2.58l-.28-.24-1.25-1a.75.75 0 0 0-.94 1.18l1.23.98.24.2A2.3 2.3 0 0 1 21 7.62V8h-.75c-.83 0-1.5.67-1.5 1.5v2.42c0 .64.41 1.22 1.03 1.42l1.22.41v4.75a.75.75 0 0 1-1.5 0v-.07c0-1.2-.98-2.18-2.18-2.18h-1.57z"
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
              d="M8.75 2h1c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8.25h1.57c1.2 0 2.18.98 2.18 2.18v.07a.75.75 0 0 0 1.5 0v-4.75l-1.22-.4a1.5 1.5 0 0 1-1.03-1.43V9.5c0-.83.67-1.5 1.5-1.5H21v-.68a2.3 2.3 0 0 0-1-1.75l-1.23-.98a.75.75 0 1 1 .94-1.18l1.25 1 .28.24A3.8 3.8 0 0 1 22.5 7.6v10.9a2.25 2.25 0 1 1-4.5 0v-.07c0-.38-.3-.68-.68-.68h-1.57v3.5h1.12a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h1V8c0-2.83 0-4.24.88-5.12S5.93 2 8.75 2M7 16.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM11 6H8c-.94 0-1.41 0-1.7.3C6 6.58 6 7.05 6 8s0 1.41.3 1.7c.29.3.76.3 1.7.3h3c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7s0-1.41-.3-1.7C12.42 6 11.95 6 11 6"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGasStation;
