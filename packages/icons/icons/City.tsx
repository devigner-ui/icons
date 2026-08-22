import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCity = forwardRef<SVGSVGElement, IconProps>(function IconCity(
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
            d="M17 22v-6c0-1.89 0-2.83-.59-3.41C15.83 12 14.9 12 13 12h-2c-1.89 0-2.83 0-3.41.59C7 13.17 7 14.1 7 16v6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 22V7.77c0-1.34 0-2-.36-2.52-.35-.52-.98-.75-2.24-1.22-2.45-.92-3.68-1.38-4.54-.79-.86.6-.86 1.91-.86 4.53V12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.25 8a.75.75 0 0 0 1.5 0zm6 0a.75.75 0 0 0 1.5 0zm.46-3.2-.53.52zM6.25 4a.75.75 0 0 0 1.5 0zm1.5-2a.75.75 0 0 0-1.5 0zm-4 20V12h-1.5v10zM7 8.75c.96 0 1.61 0 2.1.07.46.06.65.17.78.3l1.06-1.06a2.7 2.7 0 0 0-1.65-.73c-.6-.08-1.37-.08-2.29-.08zM11.75 12q.02-1.38-.08-2.3a2.7 2.7 0 0 0-.73-1.64L9.88 9.12c.13.13.24.32.3.79.07.48.07 1.13.07 2.09zM7 7.25c-.92 0-1.69 0-2.3.08-.62.08-1.19.27-1.64.73l1.06 1.06c.13-.13.32-.24.79-.3.48-.07 1.13-.07 2.09-.07zM3.75 12c0-.96 0-1.61.07-2.1.06-.46.17-.65.3-.78L3.06 8.06a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.37-.08 2.29zm1-4V6.5h-1.5V8zM6 5.25h2v-1.5H6zM9.25 6.5V8h1.5V6.5zM8 5.25a9 9 0 0 1 1.17.07l1.07-1.06c-.31-.3-.69-.42-1.04-.47q-.52-.05-1.2-.04zm2.75 1.25q.01-.68-.04-1.2a1.7 1.7 0 0 0-.47-1.04L9.18 5.32v.02q.02.03.04.16c.03.21.03.5.03 1zm-6 0a9 9 0 0 1 .07-1.17L3.76 4.25c-.3.31-.42.69-.47 1.04q-.05.52-.04 1.2zM6 3.75q-.68-.01-1.2.04c-.35.05-.73.16-1.04.47l1.06 1.06h.02L5 5.28c.21-.03.5-.03 1-.03zM7.75 4V2h-1.5v2z"
            fill="currentColor"
          />
          <path
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 15h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 18h4"
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
            d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-5V16c0-1.89 0-2.83-.59-3.41C15.83 12 14.9 12 13 12h-2c-1.89 0-2.83 0-3.41.59C7 13.17 7 14.1 7 16v5.25zM9.25 15c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8 4.5c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v1.8q.24.1.41.29c.4.4.53.97.57 1.91V12c-1.87 0-2.81 0-3.4.59C7 13.17 7 14.1 7 16v5.25H3V12c0-1.89 0-2.83.59-3.41q.18-.19.41-.3V6.5c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h.25V3a.75.75 0 0 1 1.5 0v1.5z"
              fill="currentColor"
            />
            <path
              d="M20.64 5.25c-.35-.52-.98-.75-2.24-1.22-2.45-.92-3.68-1.38-4.54-.79-.86.6-.86 1.91-.86 4.53V12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v5.25h4V7.77c0-1.34 0-2-.36-2.52"
              fill="currentColor"
            />
          </g>
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
            d="M9.7 4.8c-.29-.3-.76-.3-1.7-.3h-.25V3a.75.75 0 0 0-1.5 0v1.5H6c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v.2l.6-.11c.65-.09 1.44-.09 2.31-.09h.18c.87 0 1.66 0 2.3.09q.3.03.61.11v-.2c0-.94 0-1.41-.3-1.7"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1V7.77c0-1.34 0-2-.36-2.52-.35-.52-.98-.75-2.24-1.22-2.45-.92-3.68-1.38-4.54-.79-.86.6-.86 1.91-.86 4.53v2.73h.09c.87 0 1.66 0 2.3.09.72.1 1.47.32 2.08.94s.85 1.36.94 2.08c.09.64.09 1.43.09 2.3v5.34H17V16c0-1.89 0-2.83-.59-3.41C15.83 12 14.9 12 13 12h-2c-1.89 0-2.83 0-3.41.59C7 13.17 7 14.1 7 16v5.25H5.5v-5.34c0-.87 0-1.66.09-2.3.1-.72.32-1.47.94-2.08a3.5 3.5 0 0 1 2.08-.94c.64-.09 1.43-.09 2.3-.09h.07c-.04-.94-.16-1.51-.57-1.91C9.83 8 8.9 8 7 8s-2.83 0-3.41.59C3 9.17 3 10.1 3 12v9.25zM9.25 15c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCity;
