import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMirror = forwardRef<SVGSVGElement, IconProps>(function IconMirror(
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
            d="M4.35 16.5A9.4 9.4 0 0 1 3 11.67a9.1 9.1 0 0 1 9-9.17c4.97 0 9 4.1 9 9.17 0 1.7-.47 3.37-1.35 4.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.72 20.95q.85.54 1.92.55h12.72a3.6 3.6 0 0 0 2.57-1.07A3.6 3.6 0 0 0 22 17.86c0-.75-.61-1.36-1.36-1.36h-3.81a2 2 0 0 0-1.42.59l-.82.82a2 2 0 0 1-1.42.59h-2.34a2 2 0 0 1-1.42-.59l-.82-.82a2 2 0 0 0-1.42-.59h-3.8a1.36 1.36 0 0 0-1.36 1.56"
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
            opacity={duotone ? "0.4" : "1"}
            d="M4.35 16.5A9.3 9.3 0 0 1 3 11.67a9.1 9.1 0 0 1 9-9.17c4.97 0 9 4.1 9 9.17a9.3 9.3 0 0 1-1.35 4.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5.64 21.5h12.72A3.64 3.64 0 0 0 22 17.86c0-.75-.61-1.36-1.36-1.36h-3.81a2 2 0 0 0-1.42.59l-.82.82a2 2 0 0 1-1.42.59h-2.34a2 2 0 0 1-1.42-.59l-.82-.82a2 2 0 0 0-1.42-.59h-3.8c-.77 0-1.37.61-1.37 1.36a3.64 3.64 0 0 0 3.64 3.64"
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
            d="M5.64 21.5h12.72A3.64 3.64 0 0 0 22 17.86c0-.75-.61-1.36-1.36-1.36h-3.81a2 2 0 0 0-1.42.59l-.82.82a2 2 0 0 1-1.42.59h-2.34a2 2 0 0 1-1.42-.59l-.82-.82a2 2 0 0 0-1.42-.59h-3.8c-.77 0-1.37.61-1.37 1.36a3.64 3.64 0 0 0 3.64 3.64"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.48 16.5a9 9 0 1 0-14.97 0h2.66a2 2 0 0 1 1.42.59l.82.82a2 2 0 0 0 1.42.59h2.34a2 2 0 0 0 1.42-.59l.82-.82a2 2 0 0 1 1.42-.59z"
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
            d="M5.64 21.5h12.72A3.64 3.64 0 0 0 22 17.86c0-.75-.61-1.36-1.36-1.36h-3.81a2 2 0 0 0-1.42.59l-.82.82a2 2 0 0 1-1.42.59h-2.34a2 2 0 0 1-1.42-.59l-.82-.82a2 2 0 0 0-1.42-.59h-3.8c-.77 0-1.37.61-1.37 1.36a3.64 3.64 0 0 0 3.64 3.64"
            fill="currentColor"
          />
          <path
            d="M3 11.5A9 9 0 1 1 20.3 15h-3.47a3.5 3.5 0 0 0-2.48 1.03l-.82.82a.5.5 0 0 1-.36.15h-2.34a.5.5 0 0 1-.36-.15l-.82-.82A3.5 3.5 0 0 0 7.17 15H3.71A9 9 0 0 1 3 11.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMirror;
