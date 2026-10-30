import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShopWide = forwardRef<SVGSVGElement, IconProps>(function IconShopWide(
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
            d="M12 12c.86.02 1.68-.34 2.26-.97.57-.64.84-1.5.74-2.35L14.34 2H9.67L9 8.68c-.1.85.17 1.71.74 2.35.58.63 1.4.99 2.26.97Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.48 3.77 15 9.01A3.4 3.4 0 0 0 18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2h-1.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.34 8.3v.05A3.25 3.25 0 0 0 5.64 12a3.4 3.4 0 0 0 3.3-2.99l.22-2.21.48-4.8H6.59c-2.34 0-3.39.8-3.84 2.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17q-2.5 0-2.5 2.5V22h5v-2.5q0-2.5-2.5-2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 12a2.96 2.96 0 0 0 3-3.32L14.34 2H9.67L9 8.68A2.96 2.96 0 0 0 12 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01A3.4 3.4 0 0 0 18.31 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.64 12a3.4 3.4 0 0 0 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75A3.26 3.26 0 0 0 5.64 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17q-2.5 0-2.5 2.5V22h5v-2.5q0-2.5-2.5-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            opacity={duotone ? "0.6" : "1"}
            d="M21.37 11.59v5.99a5 5 0 0 1-5 5H7.63a5 5 0 0 1-5-5v-5.92a4.08 4.08 0 0 0 6.24-.35A3.8 3.8 0 0 0 12 12.95c1.28 0 2.42-.6 3.11-1.6a4.1 4.1 0 0 0 3.2 1.6c1.21 0 2.31-.49 3.06-1.36"
            fill="currentColor"
          />
          <path
            d="M14.99 1.45h-6l-.74 7.36q-.09 1.03.29 1.9A3.7 3.7 0 0 0 12 12.95a3.73 3.73 0 0 0 3.77-3.67v-.19z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m22.36 8.47-.29-2.77c-.42-3.02-1.79-4.25-4.72-4.25h-3.84l.74 7.5.02.4q.1.78.46 1.43a4.2 4.2 0 0 0 3.58 2.17c1.33 0 2.53-.59 3.28-1.63.6-.8.87-1.81.77-2.85"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.59 1.45c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75a4 4 0 0 0 4.05 4.47 4.14 4.14 0 0 0 4.05-3.66l.78-7.83z"
            fill="currentColor"
          />
          <path
            d="M11.35 16.86a2.5 2.5 0 0 0-2.23 2.49v3.23h5.75V19.7c.01-2.09-1.22-3.08-3.52-2.84"
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
            d="m22.36 8.47-.29-2.77c-.42-3.02-1.79-4.25-4.72-4.25H6.59c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75a4 4 0 0 0 4.05 4.47 4.1 4.1 0 0 0 3.23-1.64A3.8 3.8 0 0 0 12 12.95c1.29 0 2.42-.6 3.11-1.6a4.1 4.1 0 0 0 3.2 1.6c1.33 0 2.53-.59 3.28-1.63.6-.8.87-1.81.77-2.85"
            fill="currentColor"
          />
          <path
            d="M11.35 16.86a2.5 2.5 0 0 0-2.23 2.49v2.74c0 .27.22.49.49.49h4.77a.5.5 0 0 0 .49-.49V19.7c.01-2.09-1.22-3.08-3.52-2.84"
            fill="currentColor"
          />
          <path
            d="M21.37 14.6v2.98a5 5 0 0 1-5 5 .5.5 0 0 1-.49-.49V19.7q0-1.93-1.15-2.96a4 4 0 0 0-2.71-.91q-.37 0-.77.04a3.5 3.5 0 0 0-3.13 3.48v2.74a.5.5 0 0 1-.49.49 5 5 0 0 1-5-5v-2.96a1 1 0 0 1 1.34-.94 5 5 0 0 0 1.67.27c1.16 0 2.3-.43 3.2-1.17a4.85 4.85 0 0 0 6.31.02 5 5 0 0 0 4.9.86 1 1 0 0 1 1.32.94"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShopWide;
