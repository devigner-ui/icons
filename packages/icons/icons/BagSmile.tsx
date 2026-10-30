import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBagSmile = forwardRef<SVGSVGElement, IconProps>(function IconBagSmile(
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
      {variant === "Broken" ? (
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
            d="M9 6V5a3 3 0 1 1 6 0v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9.17 15a3 3 0 0 0 5.66 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20.22 12.53c-.58-3.13-.87-4.69-1.99-5.6C17.13 6 15.53 6 12.36 6h-.72c-3.18 0-4.76 0-5.87.92s-1.4 2.48-2 5.6c-.82 4.4-1.23 6.59-.03 8.03C4.94 22 7.17 22 11.64 22h.72c4.47 0 6.7 0 7.9-1.45.7-.83.85-1.92.7-3.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M3.8 12.53c.53-2.69.8-4.03 1.69-4.9a4 4 0 0 1 .53-.43c1.02-.7 2.38-.7 5.13-.7h1.7c2.74 0 4.11 0 5.13.7a4 4 0 0 1 .53.44c.89.86 1.16 2.2 1.7 4.89.77 3.86 1.15 5.78.27 7.15a4 4 0 0 1-.56.68c-1.17 1.14-3.14 1.14-7.07 1.14h-1.7c-3.93 0-5.9 0-7.07-1.14a4 4 0 0 1-.55-.68c-.9-1.37-.5-3.3.26-7.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 6.5v-1a3 3 0 1 1 6 0v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.17 15.5a3 3 0 0 0 5.66 0"
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
            d="M4.08 11.23c.44-2.35.66-3.52 1.5-4.2.82-.7 2.02-.7 4.39-.7h4.04c2.38 0 3.57 0 4.4.7.84.68 1.06 1.85 1.5 4.2l.75 4c.62 3.29.92 4.93.02 6.02s-2.56 1.08-5.91 1.08H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03z"
            fill="currentColor"
          />
          <path
            d="M9.75 5.32a2.25 2.25 0 0 1 4.5 0v1l1.5.01V5.32a3.75 3.75 0 1 0-7.5 0v1.01l1.5-.01z"
            fill="currentColor"
          />
          <path
            d="M9.88 15.08a2.25 2.25 0 0 0 4.24 0 .75.75 0 1 1 1.42.5 3.75 3.75 0 0 1-7.08 0 .75.75 0 0 1 1.42-.5"
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
            d="M8.25 7.01V6a3.75 3.75 0 1 1 7.5 0v1.01c1.3.04 2.09.17 2.7.67.82.68 1.05 1.83 1.51 4.14l.6 3c.67 3.32 1 4.98.1 6.08s-2.6 1.1-5.98 1.1H9.32c-3.39 0-5.08 0-5.98-1.1s-.57-2.76.1-6.08l.6-3c.46-2.3.69-3.46 1.52-4.14.6-.5 1.4-.63 2.69-.67M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM12 17.25c-.98 0-1.81-.62-2.12-1.5a.75.75 0 1 0-1.42.5 3.75 3.75 0 0 0 7.08 0 .75.75 0 0 0-1.42-.5c-.3.88-1.14 1.5-2.12 1.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBagSmile;
