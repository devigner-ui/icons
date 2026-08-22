import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRanking2 = forwardRef<SVGSVGElement, IconProps>(function IconRanking2(
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
            d="m13.97 8.11 1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46l-1.86 1.86c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33a1.6 1.6 0 0 0-1.48 0L9.69 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.43 1.89-1.43 2.6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.67 9V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 9V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 4V2"
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
            d="m13.97 8.11 1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46l-1.86 1.86c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33a1.6 1.6 0 0 0-1.48 0L9.69 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.43 1.89-1.43 2.6 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.67 9.75A.76.76 0 0 1 5.92 9V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 9.75a.76.76 0 0 1-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 4.75a.76.76 0 0 1-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
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
            d="m13.97 8.11 1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46l-1.86 1.87c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33a1.6 1.6 0 0 0-1.48 0L9.68 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36L5.81 14.4c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.44 1.89-1.44 2.6-.01"
            fill="currentColor"
          />
          <path
            d="M6.67 9.75A.76.76 0 0 1 5.92 9V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.67 9.75a.76.76 0 0 1-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.67 4.75a.76.76 0 0 1-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRanking2;
