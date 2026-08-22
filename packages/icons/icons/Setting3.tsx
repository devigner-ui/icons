import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSetting3 = forwardRef<SVGSVGElement, IconProps>(function IconSetting3(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={duotone ? "0.4" : "1"}
          />
          <g>
            <path
              d="M16.24 18.5v-3.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.24 7.45V5.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.24 12.65a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.1 18.5v-1.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.1 9.4V5.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.1 16.55a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M16.25 19.25a.76.76 0 0 1-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M16.25 8.2a.76.76 0 0 1-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M9.09 19.25a.76.76 0 0 1-.75-.75v-1.95c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.33.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M9.09 10.15a.76.76 0 0 1-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.33.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M16.25 7.33a2.73 2.73 0 0 0 0 5.45 2.72 2.72 0 0 0 0-5.45"
            fill="currentColor"
          />
          <path
            d="M9.09 11.23a2.72 2.72 0 1 0 .01 5.45 2.72 2.72 0 0 0-.01-5.45"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2M8.34 5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75zm1.85 10.93a.6.6 0 0 0-.35.5v1.57c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-1.56a.6.6 0 0 0-.35-.5 2.73 2.73 0 1 1 3.83-2.48 2.7 2.7 0 0 1-1.63 2.47M17 18.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75zm-.75-5.73a2.72 2.72 0 0 1-1.1-5.21c.2-.1.35-.28.35-.5V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.56c0 .23.15.42.35.5a2.71 2.71 0 0 1-1.1 5.21"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSetting3;
