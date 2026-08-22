import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBanknote = forwardRef<SVGSVGElement, IconProps>(function IconBanknote(
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
            d="M9 19c-2.8 0-4.21 0-5.22-.67a4 4 0 0 1-1.1-1.1C2 16.2 2 14.8 2 12s0-4.21.67-5.22a4 4 0 0 1 1.1-1.1C4.8 5 6.2 5 9 5h6c2.8 0 4.21 0 5.22.67a4 4 0 0 1 1.1 1.1C22 7.8 22 9.2 22 12s0 4.21-.67 5.22a4 4 0 0 1-1.1 1.1C19.2 19 17.8 19 15 19z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5.5 15V9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M18.5 15V9"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3.78 18.33C4.78 19 6.19 19 9 19h6c2.8 0 4.21 0 5.22-.67a4 4 0 0 0 1.1-1.1C22 16.2 22 14.8 22 12s0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C19.2 5 17.8 5 15 5H9c-2.8 0-4.21 0-5.22.67a4 4 0 0 0-1.1 1.1C2 7.8 2 9.2 2 12s0 4.21.67 5.22a4 4 0 0 0 1.1 1.1"
            fill="currentColor"
          />
          <path
            d="M5.5 15.75a.75.75 0 0 1-.75-.75V9a.75.75 0 1 1 1.5 0v6c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17.75 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0m1.5 0a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
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
            d="M9.75 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.78 18.33C4.78 19 6.19 19 9 19h6c2.8 0 4.21 0 5.22-.67a4 4 0 0 0 1.1-1.1C22 16.2 22 14.8 22 12s0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C19.2 5 17.8 5 15 5H9c-2.8 0-4.21 0-5.22.67a4 4 0 0 0-1.1 1.1C2 7.8 2 9.2 2 12s0 4.21.67 5.22a4 4 0 0 0 1.1 1.1M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5m-6.5 0a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v6c0 .41-.34.75-.75.75M17.75 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBanknote;
