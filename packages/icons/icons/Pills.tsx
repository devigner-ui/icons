import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPills = forwardRef<SVGSVGElement, IconProps>(function IconPills(
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
            d="M17.84 6.16s-.43 2.24-2.93 4.75-4.75 2.93-4.75 2.93m11.62-2.8a5.4 5.4 0 0 0-1.37-2.32l-5.13-5.13a5.44 5.44 0 1 0-7.69 7.7l5.13 5.12a5.44 5.44 0 0 0 8.7-1.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14.5 6.5 13 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.89 10.87a.75.75 0 1 0-.32-1.47zm-1.08 9.9a.75.75 0 1 0-.62 1.37zm-3.95-1.96a.75.75 0 1 0 1.37-.62zM2.75 16a5.25 5.25 0 0 1 4.14-5.13L6.57 9.4A6.75 6.75 0 0 0 1.25 16zm10.39 1.08A5.25 5.25 0 0 1 8 21.25v1.5c3.25 0 5.97-2.3 6.6-5.36zM8 21.25q-1.18 0-2.19-.48l-.62 1.37q1.28.6 2.81.61zm-4.77-3.06q-.46-1-.48-2.19h-1.5q.01 1.52.61 2.81z"
            fill="currentColor"
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
            d="M17.84 6.16s-.43 2.24-2.93 4.75-4.75 2.93-4.75 2.93m10.25 2.57a5.44 5.44 0 0 1-7.7 0L7.6 11.28a5.44 5.44 0 0 1 7.7-7.69l5.12 5.13a5.44 5.44 0 0 1 0 7.69"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.5 6.5 13 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.73 10.13a6 6 0 1 0 7.14 7.1"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m10.01 13.1-.5.1-1.92-1.92a5.44 5.44 0 0 1 7.7-7.69l1.91 1.93-.1.5-.08.3a7 7 0 0 1-.38.95c-.39.8-1.08 1.92-2.26 3.1a12 12 0 0 1-3.11 2.27 7 7 0 0 1-1.25.47zm3.52-8.63a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06z"
            fill="currentColor"
          />
          <path
            d="m20.4 8.72-1.95-1.95q-.12.43-.46 1.15a13 13 0 0 1-2.55 3.52 13 13 0 0 1-3.52 2.55q-.72.33-1.15.46l1.95 1.96a5.44 5.44 0 1 0 7.69-7.7"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.72 10.14q.34.62.87 1.14l5.13 5.13q.53.52 1.14.87a5.99 5.99 0 1 1-7.14-7.14"
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
            d="M7.6 11.28a5.44 5.44 0 0 1 7.68-7.69l1.92 1.93-.1.5v.05l-.08.25q-.1.33-.38.95c-.39.8-1.08 1.92-2.26 3.1a12 12 0 0 1-3.11 2.27 7 7 0 0 1-1.25.47H10l-.5.1zm5.93-6.81a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06z"
            fill="currentColor"
          />
          <path
            d="m18.45 6.77 1.96 1.95a5.44 5.44 0 1 1-7.7 7.69l-1.94-1.95q.43-.14 1.15-.47a13 13 0 0 0 3.52-2.55 13 13 0 0 0 2.55-3.52q.34-.72.46-1.15"
            fill="currentColor"
          />
          <path
            d="M5.29 10.65a6 6 0 1 0 8.06 8.06 7 7 0 0 1-1.7-1.24l-5.12-5.13a7 7 0 0 1-1.24-1.7"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPills;
