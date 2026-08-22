import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRouting2 = forwardRef<SVGSVGElement, IconProps>(function IconRouting2(
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
            d="M2 5.26C2 3.46 3.57 2 5.5 2S9 3.46 9 5.26c0 1.78-1.12 3.87-2.86 4.61-.4.17-.87.17-1.28 0C3.12 9.13 2 7.04 2 5.26"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 17.26c0-1.8 1.57-3.26 3.5-3.26s3.5 1.46 3.5 3.26c0 1.78-1.12 3.87-2.86 4.61-.4.17-.87.17-1.28 0-1.74-.74-2.86-2.83-2.86-4.61"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M19.5 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path d="M6.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 4.25a.75.75 0 0 0 0 1.5zM12 19l.53.53c.3-.3.3-.77 0-1.06zm5.2-10.31.4.63zM6.8 15.3l.4.64zm4.23 1.66a.75.75 0 1 0-1.06 1.06zm-1.06 3a.75.75 0 0 0 1.06 1.06zm6.16-15.72H12v1.5h4.13zm-4.13 14H7.87v1.5H12zm4.8-10.2L6.4 14.68l.8 1.27 10.4-6.63zm-4.27 10.42-1.5-1.5-1.06 1.06 1.5 1.5zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5zm-3.6-.22c-1.25 0-1.73-1.63-.67-2.3l-.8-1.27a2.75 2.75 0 0 0 1.47 5.07zm8.26-12.5c1.25 0 1.73 1.63.67 2.3l.8 1.27a2.75 2.75 0 0 0-1.47-5.07z"
            fill="currentColor"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5 14c-1.93 0-3.5 1.46-3.5 3.26 0 1.78 1.12 3.87 2.86 4.61.4.17.87.17 1.28 0 1.74-.74 2.86-2.83 2.86-4.61 0-1.8-1.57-3.26-3.5-3.26"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 2C3.57 2 2 3.46 2 5.26c0 1.78 1.12 3.87 2.86 4.61.4.17.87.17 1.28 0C7.88 9.13 9 7.04 9 5.26 9 3.46 7.43 2 5.5 2"
              fill="currentColor"
            />
          </g>
          <path
            d="M19.5 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path d="M6.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 5c0-.41.34-.75.75-.75h4.13c2.75 0 3.8 3.6 1.48 5.07L7.2 15.95c-1.06.67-.58 2.3.67 2.3h2.32l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.87c-2.75 0-3.8-3.6-1.48-5.07L16.8 8.05c1.06-.67.58-2.3-.67-2.3H12a.75.75 0 0 1-.75-.75"
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
            d="M18.5 14c-1.93 0-3.5 1.46-3.5 3.26 0 1.78 1.12 3.87 2.86 4.61.4.17.87.17 1.28 0 1.74-.74 2.86-2.83 2.86-4.61 0-1.8-1.57-3.26-3.5-3.26m0 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 2C3.57 2 2 3.46 2 5.26c0 1.78 1.12 3.87 2.86 4.61.4.17.87.17 1.28 0C7.88 9.13 9 7.04 9 5.26 9 3.46 7.43 2 5.5 2m0 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 5c0-.41.34-.75.75-.75h4.13c2.75 0 3.8 3.6 1.48 5.07L7.2 15.95c-1.06.67-.58 2.3.67 2.3h2.32l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.87c-2.75 0-3.8-3.6-1.48-5.07L16.8 8.05c1.06-.67.58-2.3-.67-2.3H12a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRouting2;
