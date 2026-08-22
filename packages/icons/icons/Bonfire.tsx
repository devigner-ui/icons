import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBonfire = forwardRef<SVGSVGElement, IconProps>(function IconBonfire(
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
            d="M18 8.8c0 4.96-4.27 6.2-6.4 6.2C9.73 15 6 13.76 6 8.8c0-2.09 1.2-3.44 2.26-4.15.54-.36 1.22-.1 1.31.53.18 1.24 1.3 2.17 1.99 1.1.58-.91.8-2.15.8-2.9 0-1.09 1.14-1.79 2.04-1.12C16.15 3.58 18 5.78 18 8.81"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20 15 4 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4 15 5 2.19M20 22l-5.5-2.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 10c-.2.67-1.08 2-3 2"
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.31 14.7a.77.77 0 0 1 1-.39l5 2.2a.75.75 0 0 1-.61 1.37l-5-2.2a.75.75 0 0 1-.39-.98m17.38 0a.76.76 0 0 1-.39.99l-16 7a.75.75 0 1 1-.6-1.38l16-7c.38-.16.82.01.99.39m-6.88 4.6a.76.76 0 0 1 1-.4l5.5 2.41a.75.75 0 0 1-.61 1.38l-5.5-2.4a.75.75 0 0 1-.39-1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6 15c2.13 0 6.4-1.24 6.4-6.2 0-3.02-1.85-5.22-3.6-6.54-.9-.67-2.05.03-2.05 1.13 0 .74-.2 1.98-.79 2.89-.68 1.07-1.8.14-1.99-1.1-.09-.63-.77-.89-1.3-.53A5 5 0 0 0 6 8.81C6 13.76 9.73 15 11.6 15m3.62-5.72c.4.12.62.54.5.94A3.8 3.8 0 0 1 12 12.75a.75.75 0 0 1 0-1.5c1.5 0 2.15-1.03 2.28-1.47.12-.4.54-.62.94-.5"
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
            d="M3.31 14.7a.77.77 0 0 1 1-.39l5 2.2a.75.75 0 0 1-.61 1.37l-5-2.2a.75.75 0 0 1-.39-.98m17.38 0a.76.76 0 0 1-.39.99l-16 7a.75.75 0 1 1-.6-1.38l16-7c.38-.16.82.01.99.39m-6.88 4.6a.76.76 0 0 1 1-.4l5.5 2.41a.75.75 0 0 1-.61 1.38l-5.5-2.4a.75.75 0 0 1-.39-1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6 15c2.13 0 6.4-1.24 6.4-6.2 0-3.02-1.85-5.22-3.6-6.54-.9-.67-2.05.03-2.05 1.13 0 .74-.2 1.98-.79 2.89-.68 1.07-1.8.14-1.99-1.1-.09-.63-.77-.89-1.3-.53A5 5 0 0 0 6 8.81C6 13.76 9.73 15 11.6 15m3.62-5.72c.4.12.62.54.5.94A3.8 3.8 0 0 1 12 12.75a.75.75 0 0 1 0-1.5c1.5 0 2.15-1.03 2.28-1.47.12-.4.54-.62.94-.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBonfire;
