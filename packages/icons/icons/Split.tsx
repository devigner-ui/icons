import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSplit = forwardRef<SVGSVGElement, IconProps>(function IconSplit(
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
            d="M12.67 22v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 18v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 14v-3a7 7 0 0 1 7-7h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.67 4h3a7 7 0 0 1 7 7v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m4.67 2-2 2 2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m20.67 2 2 2-2 2"
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
            d="M12.67 22.75a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 18.75a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.67 14.75a.76.76 0 0 1-.75-.75v-3a7.76 7.76 0 0 1 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3A6.25 6.25 0 0 0 13.42 11v3c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.67 14.75a.76.76 0 0 1-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25h-3A.76.76 0 0 1 1.92 4c0-.41.34-.75.75-.75h3A7.76 7.76 0 0 1 13.42 11v3c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M4.67 6.75a.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L3.73 4 5.2 5.47c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="M20.67 6.75a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L21.6 4l-1.47-1.47a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2a.7.7 0 0 1-.53.22"
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
          <g clipPath="url(#clip0_12_64986)">
            <path
              d="M12.67 22.75a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 18.75a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 14.75a.76.76 0 0 1-.75-.75v-3a7.76 7.76 0 0 1 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3A6.25 6.25 0 0 0 13.42 11v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 14.75a.76.76 0 0 1-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25h-3A.76.76 0 0 1 1.92 4c0-.41.34-.75.75-.75h3A7.76 7.76 0 0 1 13.42 11v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M4.67 6.75a.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L3.73 4 5.2 5.47c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M20.67 6.75a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L21.61 4l-1.47-1.47a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2a.7.7 0 0 1-.53.22"
              fill="currentColor"
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
      )}
    </>
  );
});

export default IconSplit;
