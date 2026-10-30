import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGridLock = forwardRef<SVGSVGElement, IconProps>(function IconGridLock(
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
            d="M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.03 8.5H22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.03 15.5H12"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.51 21.99V2.01"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.51 11.99V2.01"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.6 17.2v-.8c0-1.33.4-2.4 2.4-2.4s2.4 1.07 2.4 2.4v.8"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20 22h-4c-1.6 0-2-.4-2-2v-.8c0-1.6.4-2 2-2h4c1.6 0 2 .4 2 2v.8c0 1.6-.4 2-2 2Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2.03 8.5H22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.03 15.5H12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.51 21.99V2.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.51 11.99V2.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M15.6 17.2v-.8c0-1.33.4-2.4 2.4-2.4s2.4 1.07 2.4 2.4v.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 22h-4c-1.6 0-2-.4-2-2v-.8c0-1.6.4-2 2-2h4c1.6 0 2 .4 2 2v.8c0 1.6-.4 2-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M21.05 16.64v-.16q-.01-2.9-2.9-2.9-2.89.01-2.9 2.9v.16c-1.05.26-1.47.98-1.47 2.42v.74c0 1.85.69 2.53 2.53 2.53h3.68c1.85 0 2.53-.69 2.53-2.53v-.74c0-1.43-.42-2.16-1.47-2.42m-2.91-1.68c1.29 0 1.52.49 1.52 1.52v.05h-3.04v-.05c0-1.03.23-1.52 1.52-1.52"
            fill="currentColor"
          />
          <path
            d="M7.91 1.5v6.45H1.45v-.68c0-3.61 2.15-5.76 5.76-5.76z"
            fill="currentColor"
          />
          <path
            d="M21.29 7.26c0 .38-.31.68-.68.68h-5.75V1.49h.67a5.8 5.8 0 0 1 5.76 5.77"
            fill="currentColor"
          />
          <path
            d="M7.91 14.88v5.76c0 .38-.31.68-.68.68h-.01a5.76 5.76 0 0 1-5.76-5.76v-.68z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.92 7.94H1.46v6.94h6.46z"
            fill="currentColor"
          />
          <path
            d="M14.85 7.94v5.94a1 1 0 0 1-1 1H7.91V7.94z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.85 1.5H7.91v6.45h6.94z"
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
            d="M21.05 16.81v-.16q-.01-2.9-2.9-2.9-2.89.01-2.9 2.9v.16c-1.05.26-1.47.98-1.47 2.42v.74c0 1.85.69 2.53 2.53 2.53h3.68c1.85 0 2.53-.69 2.53-2.53v-.74c0-1.43-.42-2.16-1.47-2.42m-2.91-1.68c1.29 0 1.52.49 1.52 1.52v.05h-3.04v-.05c0-1.03.23-1.52 1.52-1.52"
            fill="currentColor"
          />
          <path
            d="M6.27 1.57c.55-.08 1 .38 1 .94V6.3a1 1 0 0 1-1 1H2.52c-.55 0-1-.45-.94-1a5.1 5.1 0 0 1 4.69-4.73"
            fill="currentColor"
          />
          <path
            d="M20.45 7.3h-3.68a1 1 0 0 1-1-1V2.5c0-.55.45-1 1-.93 2.64.34 4.31 2 4.68 4.61a1 1 0 0 1-1 1.12"
            fill="currentColor"
          />
          <path
            d="M6.27 15.8a1 1 0 0 1 1 1v3.62a1 1 0 0 1-1.13 1 5.06 5.06 0 0 1-4.55-4.61c-.07-.55.39-1.01.94-1.01z"
            fill="currentColor"
          />
          <path
            d="M7.27 9.8a1 1 0 0 0-1-1H2.52a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.75a1 1 0 0 0 1-1z"
            fill="currentColor"
          />
          <path
            d="M14.27 9.8a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1z"
            fill="currentColor"
          />
          <path
            d="M14.27 2.5a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v3.8a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGridLock;
