import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRestart = forwardRef<SVGSVGElement, IconProps>(function IconRestart(
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
          <g clipPath="url(#clip0_1_28336)">
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.73 10.93a8 8 0 1 1-2.07-3.59l.7.71"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.12 8.05h4.24V3.81"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath>
              <rect width="24" height="24" fill="none" />
            </clipPath>
          </defs>
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
            d="M6.87 7.87a7.25 7.25 0 0 1 7.93-1.56l1.13-1.13a8.75 8.75 0 1 0 4.75 6.73.75.75 0 0 0-1.49.18 7.24 7.24 0 0 1-12.32 6.04 7.25 7.25 0 0 1 0-10.26"
            fill="currentColor"
          />
          <path
            d="M18.72 4.2a.75.75 0 0 0-1.28-.53l-1.5 1.51-1.14 1.13-1.6 1.6a.75.75 0 0 0 .53 1.28h4.24c.42 0 .75-.33.75-.75z"
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
            d="M18.26 3.5c.28.12.46.4.46.7v4.24c0 .42-.34.75-.75.75h-4.24a.75.75 0 0 1-.53-1.28l1.6-1.6a7.25 7.25 0 1 0 4.4 5.78.75.75 0 0 1 1.48-.18 8.74 8.74 0 0 1-14.87 7.28A8.75 8.75 0 0 1 15.93 5.18l1.51-1.5a.8.8 0 0 1 .82-.17"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRestart;
