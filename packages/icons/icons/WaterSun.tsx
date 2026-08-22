import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWaterSun = forwardRef<SVGSVGElement, IconProps>(function IconWaterSun(
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
            opacity={duotone ? "0.4" : "1"}
            d="M22 16.77a4.8 4.8 0 0 1-3.08-2.31c-.42-.64-1.35-.6-1.81.01A6 6 0 0 1 12 17c-2.5 0-4.08-1.43-5.13-2.78a1.02 1.02 0 0 0-1.67.05c-.7 1.1-1.52 2.1-3.2 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 21.77a4.8 4.8 0 0 1-3.08-2.31c-.42-.64-1.35-.6-1.81.01A6 6 0 0 1 12 22c-2.5 0-4.08-1.43-5.13-2.78a1.02 1.02 0 0 0-1.67.05c-.7 1.1-1.52 2.1-3.2 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.92 11a6 6 0 0 0-11.84 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 2v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.07 4.93-.4.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.32 5.32-.4-.4"
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
            d="M12 1.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M1.25 12c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M22.17 16.04c-1.32-.3-2-1.05-2.62-2a1.8 1.8 0 0 0-1.68-.79A6.02 6.02 0 0 0 12 6a6 6 0 0 0-5.9 7.06 1.7 1.7 0 0 0-1.53.8c-.66 1.04-1.34 1.85-2.74 2.18a.75.75 0 1 0 .34 1.46c1.97-.46 2.92-1.67 3.66-2.83a.2.2 0 0 1 .2-.1.3.3 0 0 1 .25.12c1.1 1.42 2.88 3.06 5.72 3.06a6.8 6.8 0 0 0 5.7-2.83.4.4 0 0 1 .34-.18q.17 0 .25.13a5.6 5.6 0 0 0 3.54 2.63.75.75 0 1 0 .34-1.46"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M4.4 4.4c.3-.3.77-.3 1.06 0l.4.4a.75.75 0 1 1-1.07 1.05l-.4-.39a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              d="M19.6 4.4c.3.3.3.77 0 1.06l-.4.4a.75.75 0 0 1-1.05-1.07l.39-.4a.77.77 0 0 1 1.06 0"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M4.57 18.87a1.76 1.76 0 0 1 2.89-.1c.99 1.26 2.37 2.48 4.54 2.48 2.2 0 3.57-.98 4.5-2.23.73-.96 2.3-1.12 3.05.02.62.95 1.3 1.7 2.62 2a.75.75 0 1 1-.34 1.46 5.6 5.6 0 0 1-3.54-2.63.3.3 0 0 0-.25-.13.4.4 0 0 0-.33.18A6.8 6.8 0 0 1 12 22.75c-2.84 0-4.61-1.64-5.72-3.06a.3.3 0 0 0-.25-.13.2.2 0 0 0-.2.11c-.74 1.16-1.7 2.37-3.66 2.83a.75.75 0 1 1-.34-1.46c1.4-.33 2.08-1.14 2.74-2.17"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M4.4 4.4c.3-.3.77-.3 1.06 0l.4.4a.75.75 0 0 1-1.07 1.05l-.4-.39a.75.75 0 0 1 0-1.06m15.2 0c.3.3.3.77 0 1.06l-.4.4a.75.75 0 1 1-1.05-1.07l.39-.4a.77.77 0 0 1 1.06 0M1.25 12c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M4.57 18.87a1.76 1.76 0 0 1 2.89-.1c.99 1.26 2.37 2.48 4.54 2.48 2.2 0 3.57-.98 4.5-2.23.72-.96 2.3-1.12 3.05.02.62.95 1.3 1.7 2.62 2a.75.75 0 1 1-.34 1.46 5.6 5.6 0 0 1-3.54-2.63.3.3 0 0 0-.25-.13.4.4 0 0 0-.33.18A6.8 6.8 0 0 1 12 22.75c-2.84 0-4.61-1.64-5.72-3.06a.3.3 0 0 0-.25-.13.2.2 0 0 0-.2.11c-.74 1.16-1.7 2.37-3.66 2.83a.75.75 0 1 1-.34-1.46c1.4-.33 2.08-1.14 2.74-2.17"
            fill="currentColor"
          />
          <path
            d="M22.17 16.04c-1.32-.3-2-1.05-2.62-2a1.8 1.8 0 0 0-1.68-.79A6.02 6.02 0 0 0 12 6a6 6 0 0 0-5.9 7.06 1.7 1.7 0 0 0-1.53.8c-.66 1.04-1.34 1.85-2.74 2.18a.75.75 0 1 0 .34 1.46c1.97-.46 2.92-1.67 3.66-2.83a.2.2 0 0 1 .2-.1.3.3 0 0 1 .25.12c1.1 1.42 2.88 3.06 5.72 3.06a6.8 6.8 0 0 0 5.7-2.83.4.4 0 0 1 .34-.18q.17 0 .25.13a5.6 5.6 0 0 0 3.54 2.63.75.75 0 1 0 .34-1.46"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWaterSun;
