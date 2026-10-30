import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDeviceMessage = forwardRef<SVGSVGElement, IconProps>(
  function IconDeviceMessage(
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
            d="M22 5.25v3.9c0 1.49-.76 2.61-2 3.05q-.57.2-1.25.2h-2.6l-2.89 1.93a.7.7 0 0 1-.67.03.6.6 0 0 1-.34-.57V12.4c-.97 0-1.79-.32-2.36-.89A3.3 3.3 0 0 1 9 9.15v-3.9q0-.68.2-1.25c.44-1.24 1.56-2 3.05-2h6.5C20.7 2 22 3.3 22 5.25Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.47 18.4H6.5c-2.7 0-4.5-1.35-4.5-4.5v-3.26m.13-3.49C2.59 4.96 4.22 4 6.5 4h2.7Q9 4.57 9 5.25v3.9c0 .97.32 1.79.89 2.36s1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54l2.89-1.93h2.6q.68 0 1.25-.2v1.7c0 2.54-1.17 3.91-3.04 4.35M7.4 22h7.2M11 18.4V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9 7.25h.02Zm2.82 0h.02Zm2.81 0h.02Z"
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M22 5.25v3.9c0 1.49-.76 2.61-2 3.05q-.57.2-1.25.2h-2.6l-2.89 1.93a.65.65 0 0 1-1.01-.54V12.4c-.97 0-1.79-.32-2.36-.89S9 10.12 9 9.15v-3.9q0-.68.2-1.25c.44-1.24 1.56-2 3.05-2h6.5C20.7 2 22 3.3 22 5.25"
            />
            <g
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              opacity={duotone ? "0.4" : "1"}
            >
              <path d="M20 12.2v1.7c0 3.15-1.8 4.5-4.5 4.5h-9c-2.7 0-4.5-1.35-4.5-4.5V8.5C2 5.35 3.8 4 6.5 4h2.7Q9 4.57 9 5.25v3.9c0 .97.32 1.79.89 2.36s1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54l2.89-1.93h2.6q.68 0 1.25-.2M7.4 22h7.2M11 18.4V22" />
            </g>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              d="M12.9 7.25h.02m2.8 0h.02m2.79 0h.02"
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
              d="M20 11.8v1.7c0 3.15-1.8 4.5-4.5 4.5h-9C3.8 18 2 16.65 2 13.5V8.1c0-3.15 1.8-4.5 4.5-4.5h2.7Q9 4.17 9 4.85v3.9c0 .97.32 1.79.89 2.36s1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54L16.15 12h2.6q.68 0 1.25-.2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 4.85v3.9c0 1.49-.76 2.61-2 3.05q-.57.2-1.25.2h-2.6l-2.89 1.93a.65.65 0 0 1-1.01-.54V12c-.97 0-1.79-.32-2.36-.89A3.3 3.3 0 0 1 9 8.75v-3.9q0-.68.2-1.25c.44-1.24 1.56-2 3.05-2h6.5C20.7 1.6 22 2.9 22 4.85"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.6 20.85h-2.85V18a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v2.85H7.4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h7.2c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="M15.44 7.6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M18.25 7.6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M12.62 7.6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
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
              d="M18.75 13.5H16.9a1 1 0 0 0-.55.17l-2.26 1.51a2.14 2.14 0 0 1-3.22-1.16 1.7 1.7 0 0 0-.82-1q-.7-.32-1.22-.85A4.8 4.8 0 0 1 7.5 8.75V4.6a1 1 0 0 0-1-1C3.8 3.6 2 4.95 2 8.1v5.4C2 16.65 3.8 18 6.5 18h3.75v2.85H7.4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h7.2c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.85V18h3.75c2.4 0 4.08-1.06 4.43-3.5.08-.55-.38-1-.93-1z"
              fill="currentColor"
            />
            <path
              d="M18.75 1.6h-6.5c-1.49 0-2.61.76-3.05 2Q9 4.17 9 4.85v3.9c0 .97.32 1.79.89 2.36s1.39.89 2.36.89v1.39c0 .51.58.82 1.01.54L16.15 12h2.6q.68 0 1.25-.2c1.24-.44 2-1.56 2-3.05v-3.9c0-1.95-1.3-3.25-3.25-3.25m-6.13 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.82 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.81 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDeviceMessage;
