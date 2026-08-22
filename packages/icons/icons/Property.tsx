import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProperty = forwardRef<SVGSVGElement, IconProps>(function IconProperty(
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
            d="M2 12.03c0 5.14 3.87 9.38 8.85 9.96.73.08 1.44-.23 1.97-.76.65-.65.65-1.71 0-2.37-.53-.52-.95-1.3-.56-1.93 1.58-2.51 9.74 3.25 9.74-4.9C22 6.49 17.52 2 12 2S2 6.49 2 12.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="17.5"
            cy="11.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="6.5"
            cy="11.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M10.85 21.93A10 10 0 1 1 22 12c0 5.16-3.28 4.73-6.09 4.37-1.61-.2-3.07-.4-3.65.52-.4.62.03 1.4.56 1.93.65.65.65 1.71 0 2.36a2.4 2.4 0 0 1-1.97.75"
            fill="currentColor"
          />
          <path
            d="M11.09 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            fill="currentColor"
          />
          <path
            d="M6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            fill="currentColor"
          />
          <path
            d="M17.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            fill="currentColor"
          />
          <path
            d="M14.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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
            d="M10.85 21.93A10 10 0 1 1 22 12c0 5.16-3.28 4.73-6.09 4.37-1.61-.2-3.07-.4-3.65.52-.4.62.03 1.4.56 1.93.65.65.65 1.71 0 2.36a2.4 2.4 0 0 1-1.97.75M11.09 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconProperty;
