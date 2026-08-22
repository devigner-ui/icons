import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTree = forwardRef<SVGSVGElement, IconProps>(function IconTree(
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
            d="M16.84 10.06H8.5c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.26 18H7.09c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22v-4"
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
            d="M16.84 10.06H8.5c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75"
            fill="currentColor"
          />
          <path
            d="M18.26 18H7.08c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.2 2.33"
            fill="currentColor"
          />
          <path
            d="M13.42 18v4c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4z"
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
            d="M16.84 10.06H8.5c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75"
            fill="currentColor"
          />
          <path
            d="M18.26 18H7.08c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.2 2.33"
            fill="currentColor"
          />
          <path
            d="M13.42 18v4c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTree;
