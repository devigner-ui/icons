import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBolt = forwardRef<SVGSVGElement, IconProps>(function IconBolt(
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
            d="M13.93 9.7c-.38-.37-.38-.96-.38-2.14v-.31c0-3.29 0-4.93-.93-5.21-.92-.29-1.9 1.05-3.89 3.73L5.67 9.91c-1.29 1.74-1.93 2.61-1.57 3.3l.01.03c.38.67 1.49.67 3.7.67 1.24 0 1.86 0 2.24.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m13.93 9.7.02.02c.38.37 1 .37 2.23.37 2.22 0 3.33 0 3.7.67l.02.04c.36.68-.28 1.55-1.57 3.29l-3.06 4.14c-1.98 2.68-2.97 4.02-3.9 3.73s-.92-1.92-.92-5.2v-.32c0-1.18 0-1.77-.38-2.15l-.02-.01"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.73 5.77 5.67 9.91c-1.29 1.74-1.93 2.61-1.57 3.3l.01.03c.38.67 1.49.67 3.7.67 1.24 0 1.86 0 2.24.37l.02.01 3.88-4.57-.02-.01c-.38-.38-.38-.97-.38-2.15v-.31c0-3.29 0-4.93-.93-5.21-.92-.29-1.9 1.05-3.89 3.73"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.45 16.44v.31c0 3.29 0 4.93.93 5.21.92.29 1.9-1.05 3.89-3.73l3.06-4.14c1.29-1.74 1.93-2.61 1.57-3.3l-.01-.03c-.38-.67-1.49-.67-3.7-.67-1.24 0-1.86 0-2.24-.37l-3.88 4.57c.38.38.38.97.38 2.15"
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
            d="m5.67 9.91 3.06-4.14c1.98-2.68 2.97-4.02 3.9-3.73s.92 1.92.92 5.2v.32c0 1.18 0 1.77.38 2.15l.02.01c.38.37 1 .37 2.23.37 2.22 0 3.33 0 3.7.67l.02.04c.36.68-.28 1.55-1.57 3.29l-3.06 4.14c-1.98 2.68-2.97 4.02-3.9 3.73s-.92-1.92-.92-5.2v-.32c0-1.18 0-1.77-.38-2.15l-.02-.01c-.38-.37-1-.37-2.23-.37-2.22 0-3.33 0-3.7-.67l-.02-.04c-.36-.68.28-1.55 1.57-3.29"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBolt;
