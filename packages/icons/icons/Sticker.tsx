import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSticker = forwardRef<SVGSVGElement, IconProps>(function IconSticker(
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
            d="M22.6 12.86q-.03.28-.1.55a6 6 0 0 0-8.45 8.45q-.27.07-.55.1-1.27.12-2.62-.11a10 10 0 0 1 3.46-19.71 10 10 0 0 1 8.26 10.72"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 13.41q-.21.74-.77 1.3l-6.38 6.38q-.56.56-1.3.77a6 6 0 0 1 8.45-8.45"
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
            d="M22.6 12.86q-.03.28-.1.55a6 6 0 0 0-8.45 8.45q-.27.07-.55.1-1.27.12-2.62-.11a10 10 0 0 1 3.46-19.71 10 10 0 0 1 8.26 10.72"
            fill="currentColor"
          />
          <path
            d="M22.5 13.41q-.21.74-.77 1.3l-6.38 6.38q-.56.56-1.3.77a6 6 0 0 1 8.45-8.45"
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
            d="M22.63 11.66a7.48 7.48 0 0 0-10.34 10.32q-.69-.02-1.41-.13a10 10 0 0 1 3.46-19.71 10 10 0 0 1 8.29 9.52"
            fill="currentColor"
          />
          <path d="M14.05 21.86a6 6 0 0 1 8.45-8.45" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconSticker;
