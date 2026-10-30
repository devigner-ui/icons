import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSimCardDual = forwardRef<SVGSVGElement, IconProps>(function IconSimCardDual(
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
            d="M2 14.03v-3.72c0-2.34 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.38A4 4 0 0 1 16 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89C3.56 21.97 2 20.42 2 18.08"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 8.25v5.39c0 2.33-1.56 3.89-3.89 3.89H16v-4.84a4 4 0 0 0-1.14-2.75l-2.39-2.38a4 4 0 0 0-2.75-1.14H8v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.39A4 4 0 0 1 22 8.25Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M16 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89C3.56 21.97 2 20.42 2 18.08v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.38A4 4 0 0 1 16 12.69"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 8.25v5.39c0 2.33-1.56 3.89-3.89 3.89H16v-4.84a4 4 0 0 0-1.14-2.75l-2.39-2.38a4 4 0 0 0-2.75-1.14H8v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.39A4 4 0 0 1 22 8.25"
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
            d="M16 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89C3.56 21.97 2 20.42 2 18.08v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.38A4 4 0 0 1 16 12.69"
            fill="currentColor"
          />
          <path
            d="M22 8.25v5.39c0 2.33-1.56 3.89-3.89 3.89H16v-4.84a4 4 0 0 0-1.14-2.75l-2.39-2.38a4 4 0 0 0-2.75-1.14H8v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.39A4 4 0 0 1 22 8.25"
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
            d="M16 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H5.89C3.56 21.97 2 20.42 2 18.08v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.38A4 4 0 0 1 16 12.69"
            fill="currentColor"
          />
          <path
            d="M22 8.25v5.39c0 2.33-1.56 3.89-3.9 3.89H17v-4.84c0-1.29-.52-2.55-1.43-3.46l-2.39-2.38a5 5 0 0 0-3.46-1.43h-1.7c.18-2.08 1.69-3.45 3.87-3.45h3.83a4 4 0 0 1 2.75 1.14l2.39 2.39A4 4 0 0 1 22 8.25"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSimCardDual;
