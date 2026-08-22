import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSirenOn = forwardRef<SVGSVGElement, IconProps>(function IconSirenOn(
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
            d="M2.67 22h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 6a9 9 0 0 0-9 9v7h18v-7a9 9 0 0 0-9-9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 2v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.67 4 1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.67 4-1 1"
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
            d="M23.42 22c0 .41-.34.75-.75.75h-20a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path d="M21.67 15v6.25h-18V15a9 9 0 0 1 18 0" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 3.75a.76.76 0 0 1-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.67 5.75a.7.7 0 0 1-.53-.22l-1-1a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1 1c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.67 5.75a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-1 1a.7.7 0 0 1-.53.22"
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
            d="M22.67 21.25h-1V15a9 9 0 0 0-18 0v6.25h-1a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h20c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M12.67 3.75a.76.76 0 0 1-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M5.67 5.75a.7.7 0 0 1-.53-.22l-1-1a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1 1c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="M19.67 5.75a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-1 1a.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSirenOn;
