import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGlasses = forwardRef<SVGSVGElement, IconProps>(function IconGlasses(
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
          <circle
            cx="18"
            cy="16"
            r="4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="6"
            cy="16"
            r="4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14 16.21-.66-.23a4 4 0 0 0-2.68 0l-.66.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2 16 .76-8.4c.12-1.26.18-1.9.55-2.36.37-.47.97-.67 2.17-1.07L6 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m22 16-.76-8.4c-.12-1.26-.18-1.9-.55-2.36-.37-.47-.97-.67-2.17-1.07L18 4"
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
            d="M6.71 3.76c.13.4-.08.82-.47.95l-.52.17c-.62.21-1.03.35-1.33.49a1.3 1.3 0 0 0-.5.34c-.08.1-.15.25-.22.56-.06.33-.1.76-.16 1.4l-.37 4.04-.05.53a4.75 4.75 0 0 1 7.59 2.94Q11.33 15 12 15v1.5q-.56 0-1.1.19l-.21.07a4.75 4.75 0 1 1-9.37-1.6l.7-7.66q.07-.9.18-1.52c.1-.44.23-.84.52-1.2q.43-.52 1.05-.78.58-.25 1.44-.53l.55-.18c.4-.13.82.08.95.47"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.9 12.24a4.75 4.75 0 0 0-7.59 2.94A5 5 0 0 0 12 15v1.5q.56 0 1.1.19l.21.07a4.75 4.75 0 1 0 9.37-1.6l-.7-7.66q-.07-.9-.18-1.52a3 3 0 0 0-.52-1.2A3 3 0 0 0 20.23 4a15 15 0 0 0-1.44-.53l-.55-.18a.75.75 0 0 0-.48 1.42l.52.17c.62.21 1.03.35 1.33.49.28.13.41.23.5.34.08.1.15.25.22.56.06.33.1.76.16 1.4z"
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
            d="M6.24 4.71a.75.75 0 0 0-.48-1.42l-.55.18q-.86.29-1.44.53c-.41.19-.77.42-1.05.78s-.43.76-.52 1.2q-.11.62-.18 1.52l-.7 7.67q-.07.4-.07.82a4.75 4.75 0 0 0 9.44.77l.22-.07c.7-.26 1.48-.26 2.18 0l.22.07a4.75 4.75 0 1 0 9.37-1.6l-.7-7.66q-.07-.9-.18-1.52a3 3 0 0 0-.52-1.2A3 3 0 0 0 20.23 4a15 15 0 0 0-1.44-.53l-.55-.18a.75.75 0 0 0-.48 1.42l.52.17c.62.21 1.03.35 1.33.49.28.13.41.23.5.34.08.1.15.25.22.56.06.33.1.76.16 1.4l.42 4.57a4.75 4.75 0 0 0-7.59 2.94 5 5 0 0 0-2.64 0 4.75 4.75 0 0 0-7.59-2.94l.05-.53.37-4.04c.06-.64.1-1.07.16-1.4.07-.3.14-.45.22-.56.09-.11.22-.21.5-.34.3-.14.71-.28 1.33-.49z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGlasses;
