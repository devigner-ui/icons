import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTagBlank = forwardRef<SVGSVGElement, IconProps>(function IconTagBlank(
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
            d="m19.77 15.51.07-.07a4.8 4.8 0 0 0 0-6.75L15.3 4.17a4.8 4.8 0 0 0-3.6-1.39l-2.03.1m-3.5.2a3.86 3.86 0 0 0-3.16 3.61l-.24 5a4.8 4.8 0 0 0 1.4 3.61l4.53 4.53a4.8 4.8 0 0 0 6.75 0l1.84-1.84"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="m4.17 15.3 4.53 4.53a4.8 4.8 0 0 0 6.75 0l4.39-4.39a4.8 4.8 0 0 0 0-6.75L15.3 4.17a4.8 4.8 0 0 0-3.6-1.39l-5 .24a3.86 3.86 0 0 0-3.69 3.67l-.24 5a4.8 4.8 0 0 0 1.4 3.61"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
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
            d="m4.17 15.3 4.53 4.53a4.8 4.8 0 0 0 6.75 0l4.39-4.39a4.8 4.8 0 0 0 0-6.75L15.3 4.17a4.8 4.8 0 0 0-3.6-1.39l-5 .24a3.86 3.86 0 0 0-3.69 3.67l-.24 5a4.8 4.8 0 0 0 1.4 3.61"
            fill="currentColor"
          />
          <path
            d="M9.5 12.38a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76"
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
            d="M19.83 8.7 15.3 4.17a4.8 4.8 0 0 0-3.6-1.39l-5 .24a3.86 3.86 0 0 0-3.69 3.67l-.24 5a4.8 4.8 0 0 0 1.4 3.6l4.52 4.53a4.8 4.8 0 0 0 6.75 0l4.4-4.39a4.74 4.74 0 0 0 0-6.73M9.51 12.38a2.88 2.88 0 1 1 0-5.76 2.88 2.88 0 0 1 0 5.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTagBlank;
