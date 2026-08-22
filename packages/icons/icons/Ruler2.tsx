import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRuler2 = forwardRef<SVGSVGElement, IconProps>(function IconRuler2(
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
          <g clipPath="url(#clip0_12_78719)">
            <path
              d="M5.67 17h14q3 0 3-3v-4q0-3-3-3h-14q-3 0-3 3v4q0 3 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 7v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.67 7v4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10.72 7-.05 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.67 7v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
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
            d="M5.67 17h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-14a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3"
            fill="currentColor"
          />
          <path
            d="M19.42 7v5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7z"
            fill="currentColor"
          />
          <path
            d="M7.42 7v3.8c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7z"
            fill="currentColor"
          />
          <path
            d="m11.46 7-.04 5.01c0 .41-.34.74-.75.74h-.01a.75.75 0 0 1-.74-.76L9.96 7z"
            fill="currentColor"
          />
          <path
            d="M15.42 7v2.6c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7z"
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
            d="M19.67 7a.25.25 0 0 0-.25.25V12c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.25a.25.25 0 0 0-.25-.25h-2a.25.25 0 0 0-.25.25V9.6c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.25a.25.25 0 0 0-.25-.25h-1.96a.25.25 0 0 0-.25.25l-.04 4.76c0 .41-.34.74-.75.74h-.01a.75.75 0 0 1-.74-.76l.04-4.74A.25.25 0 0 0 9.71 7H7.67a.25.25 0 0 0-.25.25v3.55c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.25A.25.25 0 0 0 5.67 7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRuler2;
