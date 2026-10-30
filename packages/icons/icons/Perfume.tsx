import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPerfume = forwardRef<SVGSVGElement, IconProps>(function IconPerfume(
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
            d="M7 5.92V5.5c0-1.41 0-2.12.44-2.56S8.59 2.5 10 2.5s2.12 0 2.56.44S13 4.09 13 5.5v2H7V6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 7.5H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 5.5c.55 0 1 .05 1-.5s-.45-.5-1-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2.16 16.5Q2.01 15.77 2 15c0-4.14 3.58-7.5 8-7.5s8 3.36 8 7.5a7.2 7.2 0 0 1-2.03 4.98c-.45.47-.67.71-1.62 1.12-.94.4-1.59.4-2.9.4h-2.9c-1.31 0-1.96 0-2.9-.4L5 20.79"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2.5 13.5c1.44.58 3.14 1.73 5.36 1.98 2.5.28 4-1.4 6.14-1.69"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13.5 5.5h.82a5 5 0 0 1 2.24.53l.94.47"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20.5 5.75c1.2.69 1.72 2.03 1.17 2.98-.56.96-1.97 1.17-3.17.48s-1.72-2.02-1.16-2.98c.55-.95 1.96-1.17 3.16-.48Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M7 5.92V5.5c0-1.41 0-2.12.44-2.56S8.59 2.5 10 2.5s2.12 0 2.56.44S13 4.09 13 5.5v2H7V6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 7.5H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 5.5c.55 0 1 .05 1-.5s-.45-.5-1-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M10 7.5c-4.42 0-8 3.36-8 7.5a7.2 7.2 0 0 0 2.03 4.98c.45.47.67.71 1.62 1.12.94.4 1.59.4 2.9.4h2.9c1.31 0 1.96 0 2.9-.4.95-.4 1.17-.65 1.62-1.12A7.2 7.2 0 0 0 18 15c0-4.14-3.58-7.5-8-7.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.5 13.5c1.44.58 3.14 1.73 5.36 1.98 3 .34 4.56-2.16 7.54-1.66 1.05.17 2.02.47 2.6.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.5 5.5h.82a5 5 0 0 1 2.24.53l.94.47"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20.5 5.75c1.2.69 1.72 2.03 1.17 2.98-.56.96-1.97 1.17-3.17.48s-1.72-2.02-1.16-2.98c.55-.95 1.96-1.17 3.16-.48"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 6.25h.41q.22 0 .52-.08c.2-.06.44-.18.6-.43q.24-.37.22-.74.02-.36-.21-.74-.28-.36-.61-.43a2 2 0 0 0-.52-.08H7z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2.15 13.56a7 7 0 0 0 1.88 6.42c.45.47.67.71 1.62 1.12.94.4 1.59.4 2.9.4h2.9c1.31 0 1.96 0 2.9-.4.95-.4 1.17-.65 1.62-1.12A7.2 7.2 0 0 0 18 14.6c-.6-.32-1.6-.61-2.68-.78-3.07-.5-4.68 1.98-7.78 1.65-2.21-.24-3.93-1.32-5.38-1.91"
              fill="currentColor"
            />
            <path
              d="M7.53 15.47c3.1.33 4.71-2.15 7.78-1.65 1.08.17 2.08.46 2.68.78-.22-3.96-3.71-7.1-7.99-7.1-3.9 0-7.14 2.6-7.85 6.06 1.45.6 3.17 1.67 5.38 1.9"
              fill="currentColor"
            />
          </g>
          <path
            d="M13 8.04V5.5c0-1.41 0-2.12-.44-2.56S11.41 2.5 10 2.5s-2.12 0-2.56.44q-.29.3-.37.81h.34q.22 0 .52.08c.2.06.44.18.6.43q.24.37.22.74.02.36-.21.74-.28.36-.61.43-.3.08-.52.08H7v1.8a8.5 8.5 0 0 1 6 0"
            fill="currentColor"
          />
          <path
            d="M2.15 13.56a7 7 0 0 0 1.88 6.42c.45.47.67.71 1.62 1.12.94.4 1.59.4 2.9.4h2.9c1.31 0 1.96 0 2.9-.4.95-.4 1.17-.65 1.62-1.12A7.2 7.2 0 0 0 18 14.6c-.6-.32-1.6-.61-2.68-.78-3.07-.5-4.68 1.98-7.78 1.65-2.21-.24-3.93-1.32-5.38-1.91"
            fill="currentColor"
          />
          <path
            d="M20.55 5.88c1.25.64 1.8 1.9 1.22 2.79s-2.06 1.1-3.32.45c-1.25-.64-1.8-1.9-1.22-2.79s2.06-1.1 3.32-.45"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 6.25h1.32q1 0 1.9.45l.78.39q0-.41.23-.76.21-.34.56-.52l-.9-.45q-1.22-.6-2.57-.61H13z"
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
            d="M2.4 12.65A8 8 0 0 1 10 7.5c3.96 0 7.24 2.7 7.89 6.23-.66-.28-1.5-.5-2.37-.65-1.73-.29-3.06.31-4.2.83-1.16.53-2.12.97-3.38.83-1-.12-1.9-.44-2.75-.81l-1.11-.53-.12-.05q-.6-.3-1.18-.55z"
            fill="currentColor"
          />
          <path
            d="M2.05 14.13a7.1 7.1 0 0 0 1.98 5.85c.45.47.67.71 1.62 1.12.94.4 1.59.4 2.9.4h2.9c1.31 0 1.96 0 2.9-.4.95-.4 1.17-.65 1.62-1.12a7.2 7.2 0 0 0 2.01-4.52l-.34-.2a8 8 0 0 0-2.37-.7c-1.23-.2-2.18.2-3.32.71l-.11.05c-1.1.5-2.39 1.1-4.06.9a11 11 0 0 1-3.2-.92l-1.16-.55-.12-.06q-.6-.3-1.08-.5z"
            fill="currentColor"
          />
          <path
            d="M12.56 2.94c.35.35.42.88.44 1.81h1.32q1.36 0 2.57.6l.84.43c.68-.55 1.8-.6 2.77-.03 1.2.69 1.72 2.03 1.17 2.98-.56.96-1.97 1.17-3.17.48a2.6 2.6 0 0 1-1.38-2.06l-.9-.45a4 4 0 0 0-1.9-.45H13v.73a9.5 9.5 0 0 0-6 0v-.73h.41q.22 0 .52-.08c.2-.06.44-.18.6-.43q.24-.37.22-.74.02-.36-.21-.74-.28-.36-.61-.43a2 2 0 0 0-.52-.08h-.34q.08-.52.37-.81C7.88 2.5 8.59 2.5 10 2.5s2.12 0 2.56.44"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPerfume;
