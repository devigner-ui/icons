import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconElectricRefueling = forwardRef<SVGSVGElement, IconProps>(
  function IconElectricRefueling(
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
              opacity={duotone ? "0.4" : "1"}
              d="M9.5 10 8 12.5h3L9.5 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M10 2H9c-2.83 0-4.24 0-5.12.88S3 5.18 3 8v13.25h13V8c0-2.83 0-4.24-.88-5.12S12.82 2 10 2"
              fill="currentColor"
            />
            <path
              d="M3 21.25H2a.75.75 0 0 0 0 1.5h15.25a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M10.14 10.39a.75.75 0 1 0-1.28-.78l-1.5 2.5A.75.75 0 0 0 8 13.25h1.68l-.82 1.36a.75.75 0 0 0 1.28.78l1.5-2.5a.75.75 0 0 0-.64-1.14H9.32z"
              fill="currentColor"
            />
            <path
              d="M16 17.75h1.57c.38 0 .68.3.68.68v.07a2.25 2.25 0 1 0 4.5 0V7.23a3.7 3.7 0 0 0-1.25-2.58l-.28-.24-1.25-1a.75.75 0 0 0-.94 1.18l1.23.98.24.2a2.3 2.3 0 0 1 .75 1.85V8h-.75c-.83 0-1.5.67-1.5 1.5v2.42c0 .64.41 1.22 1.03 1.42l1.22.41v4.75a.75.75 0 0 1-1.5 0v-.07c0-1.2-.98-2.18-2.18-2.18H16z"
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
              d="M10 2H9c-2.83 0-4.24 0-5.12.88S3 5.18 3 8v13.25H2a.75.75 0 0 0 0 1.5h15.25a.75.75 0 0 0 0-1.5H16v-3.5h1.57c.38 0 .68.3.68.68v.07a2.25 2.25 0 1 0 4.5 0V7.23a3.7 3.7 0 0 0-1.25-2.58l-.28-.24-1.25-1a.75.75 0 0 0-.94 1.18l1.23.98.24.2a2.3 2.3 0 0 1 .75 1.85V8h-.75c-.83 0-1.5.67-1.5 1.5v2.42c0 .64.41 1.22 1.03 1.42l1.22.41v4.75a.75.75 0 0 1-1.5 0v-.07c0-1.2-.98-2.18-2.18-2.18H16V8c0-2.83 0-4.24-.88-5.12S12.82 2 10 2m-.11 7.36c.35.21.47.67.25 1.03l-.82 1.36H11a.75.75 0 0 1 .64 1.14l-1.5 2.5a.75.75 0 0 1-1.28-.78l.82-1.36H8a.75.75 0 0 1-.64-1.14l1.5-2.5a.75.75 0 0 1 1.03-.25"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconElectricRefueling;
