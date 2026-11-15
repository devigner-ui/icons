import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiScan = forwardRef<SVGSVGElement, IconProps>(function IconAiScan(
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
            d="M3 8V6a3 3 0 0 1 3-3h2m8 0h2a3 3 0 0 1 3 3v2M8 21H6a3 3 0 0 1-3-3v-2m18 0v2a3 3 0 0 1-.66 1.88m-2.05 1.1L18 21h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8c.36 2.64 1.36 3.64 4 4-2.64.36-3.64 1.36-4 4-.36-2.64-1.36-3.64-4-4 2.64-.36 3.64-1.36 4-4Z"
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
            d="M3 8V6a3 3 0 0 1 3-3h2m8 0h2a3 3 0 0 1 3 3v2m0 8v2a3 3 0 0 1-3 3h-2m-8 0H6a3 3 0 0 1-3-3v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8c.36 2.64 1.36 3.64 4 4-2.64.36-3.64 1.36-4 4-.36-2.64-1.36-3.64-4-4 2.64-.36 3.64-1.36 4-4Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M2.25 8c0-.9-.1-1.89.08-2.78a3.8 3.8 0 0 1 2.9-2.89c.88-.19 1.86-.08 2.77-.08a.75.75 0 0 1 0 1.5c-1.24 0-2.76-.28-3.68.76a2.2 2.2 0 0 0-.55 1.2c-.1.74-.02 1.54-.02 2.29a.75.75 0 0 1-1.5 0zM16 2.25c.9 0 1.89-.1 2.78.08a3.8 3.8 0 0 1 2.89 2.9c.19.88.08 1.86.08 2.77a.75.75 0 0 1-1.5 0c0-1.24.28-2.76-.76-3.68a2.2 2.2 0 0 0-1.2-.55c-.74-.1-1.54-.02-2.29-.02a.75.75 0 0 1 0-1.5zM21.75 16c0 .9.1 1.89-.08 2.78a3.8 3.8 0 0 1-2.9 2.89c-.88.19-1.86.08-2.77.08a.75.75 0 0 1 0-1.5c1.24 0 2.76.28 3.68-.76a2.2 2.2 0 0 0 .55-1.2c.1-.74.02-1.54.02-2.29a.75.75 0 0 1 1.5 0zM8 21.75c-.9 0-1.89.1-2.78-.08a3.8 3.8 0 0 1-2.89-2.9c-.19-.88-.08-1.86-.08-2.77a.75.75 0 0 1 1.5 0c0 1.24-.28 2.76.76 3.68a2.2 2.2 0 0 0 1.2.55c.74.1 1.54.02 2.29.02a.75.75 0 0 1 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.6c.18 1.39.5 2.25 1.13 2.87s1.48.95 2.87 1.13a.4.4 0 0 1 0 .8c-1.39.18-2.25.5-2.87 1.13S12.58 15 12.4 16.4a.4.4 0 0 1-.8 0c-.18-1.39-.5-2.25-1.13-2.87S9 12.58 7.6 12.4a.4.4 0 0 1 0-.8c1.39-.18 2.25-.5 2.87-1.13S11.42 9 11.6 7.6a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M3 8.75c.41 0 .75-.34.75-.75 0-.75-.08-1.55.02-2.3a2.2 2.2 0 0 1 .55-1.2c.92-1.03 2.44-.75 3.68-.75a.75.75 0 0 0 0-1.5c-.9 0-1.89-.1-2.78.08a3.8 3.8 0 0 0-2.89 2.9c-.19.88-.08 1.86-.08 2.77 0 .41.33.75.75.75zM15.25 3c0 .41.34.75.75.75.75 0 1.55-.08 2.3.02a2.2 2.2 0 0 1 1.2.55c1.03.92.75 2.44.75 3.68a.75.75 0 0 0 1.5 0c0-.9.1-1.89-.08-2.78a3.8 3.8 0 0 0-2.9-2.89c-.88-.19-1.87-.08-2.77-.08a.75.75 0 0 0-.75.75zM21 15.25a.75.75 0 0 0-.75.75c0 .75.08 1.55-.02 2.3a2.2 2.2 0 0 1-.55 1.2c-.92 1.03-2.44.75-3.68.75a.75.75 0 0 0 0 1.5c.9 0 1.89.1 2.78-.08a3.8 3.8 0 0 0 2.89-2.9c.19-.88.08-1.87.08-2.77a.75.75 0 0 0-.75-.75zM8.75 21a.75.75 0 0 0-.75-.75c-.75 0-1.55.08-2.3-.02a2.2 2.2 0 0 1-1.2-.55c-1.03-.92-.75-2.44-.75-3.68a.75.75 0 0 0-1.5 0c0 .9-.1 1.89.08 2.78a3.8 3.8 0 0 0 2.9 2.89c.88.19 1.86.08 2.77.08.41 0 .75-.34.75-.75zM12 7.25a.4.4 0 0 0-.4.35c-.18 1.39-.5 2.25-1.13 2.87S9 11.42 7.6 11.6a.4.4 0 0 0 0 .8c1.39.18 2.25.5 2.87 1.13s.95 1.48 1.13 2.87a.4.4 0 0 0 .8 0c.18-1.39.5-2.25 1.13-2.87s1.48-.95 2.87-1.13a.4.4 0 0 0 0-.8c-1.39-.18-2.25-.5-2.87-1.13S12.58 9 12.4 7.6a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiScan;
