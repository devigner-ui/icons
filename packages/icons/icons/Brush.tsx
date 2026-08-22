import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBrush = forwardRef<SVGSVGElement, IconProps>(function IconBrush(
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
            d="M6.67 2h12a2 2 0 0 1 2 2v4.32h-16V4c0-1.1.9-2 2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.67 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67a2 2 0 0 1 1.02 1.74V20c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-2.1a2 2 0 0 1 1.02-1.74l2.96-1.67a3 3 0 0 0 1.53-2.61V8.32z"
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
            d="M6.67 2h12a2 2 0 0 1 2 2v4.32h-16V4c0-1.1.9-2 2-2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.67 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67a2 2 0 0 1 1.02 1.74V20c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-2.1a2 2 0 0 1 1.02-1.74l2.96-1.67a3 3 0 0 0 1.53-2.61V8.32z"
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
            d="M6.67 2h12a2 2 0 0 1 2 2v3.32a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V4c0-1.1.9-2 2-2"
            fill="currentColor"
          />
          <path
            d="M4.67 10.32v1.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67a2 2 0 0 1 1.02 1.74V20c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-2.1a2 2 0 0 1 1.02-1.74l2.96-1.67a3 3 0 0 0 1.53-2.61v-1.56a1 1 0 0 0-1-1H5.67a1 1 0 0 0-1 1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBrush;
