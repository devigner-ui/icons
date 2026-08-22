import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconImage = forwardRef<SVGSVGElement, IconProps>(function IconImage(
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
            d="m22.35 16.96-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22l-1.89 3.41c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45A3.6 3.6 0 0 0 6.26 22h12.76c2.6 0 4.35-2.65 3.33-5.04"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.64 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
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
            d="M22.69 16.82 19.56 9.5c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2s-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23s-1.67.71-2.18 1.72L2.69 16.6a3.97 3.97 0 0 0 3.56 5.77h12.76a4 4 0 0 0 3.68-5.55"
            fill="currentColor"
          />
          <path
            d="M7.64 8.38a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76"
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
            d="M22.69 16.82 19.56 9.5c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2s-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23s-1.67.71-2.18 1.72L2.69 16.6a3.97 3.97 0 0 0 3.56 5.77h12.76a4 4 0 0 0 3.68-5.55"
            fill="currentColor"
          />
          <path
            d="M7.64 8.38a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconImage;
