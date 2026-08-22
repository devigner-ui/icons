import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconToteBag = forwardRef<SVGSVGElement, IconProps>(function IconToteBag(
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
            d="M3.56 14.26c-.72-3.36-1.08-5.03-.18-6.15C4.28 7 5.99 7 9.42 7h5.16c3.43 0 5.14 0 6.04 1.11.9 1.12.54 2.8-.18 6.15l-.42 2c-.5 2.27-.73 3.4-1.56 4.07-.82.67-1.99.67-4.31.67h-4.3c-2.32 0-3.49 0-4.31-.67-.83-.66-1.07-1.8-1.56-4.07z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 12h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 15h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18 9-3-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6 9 3-6"
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
            d="M3.56 14.26c-.72-3.36-1.08-5.03-.18-6.15C4.28 7 5.99 7 9.42 7h5.16c3.43 0 5.14 0 6.04 1.11.9 1.12.54 2.8-.18 6.15l-.42 2c-.5 2.27-.73 3.4-1.56 4.07-.82.67-1.99.67-4.31.67h-4.3c-2.32 0-3.49 0-4.31-.67-.83-.66-1.07-1.8-1.56-4.07z"
            fill="currentColor"
          />
          <path
            d="M8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M9.25 15c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.66 2.33a.75.75 0 0 1 1.01.34l3 6a.75.75 0 1 1-1.34.67l-3-6a.75.75 0 0 1 .33-1.01"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.34 2.33a.75.75 0 0 0-1.01.34l-3 6a.75.75 0 0 0 1.34.67l3-6a.75.75 0 0 0-.33-1.01"
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
            d="M14.66 2.33a.75.75 0 0 1 1.01.34l2.2 4.4c1.36.1 2.2.37 2.75 1.04.9 1.12.54 2.8-.18 6.15l-.42 2c-.5 2.27-.73 3.4-1.56 4.07-.82.67-1.99.67-4.31.67h-4.3c-2.32 0-3.49 0-4.31-.67-.83-.66-1.07-1.8-1.56-4.07l-.42-2c-.72-3.36-1.08-5.03-.18-6.15.55-.67 1.4-.94 2.75-1.04l2.2-4.4a.75.75 0 0 1 1.34.67L7.84 7h8.32l-1.83-3.67a.75.75 0 0 1 .33-1.01M7.25 12c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconToteBag;
