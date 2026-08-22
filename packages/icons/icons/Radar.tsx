import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRadar = forwardRef<SVGSVGElement, IconProps>(function IconRadar(
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
            d="M12 12 5 6.34c-.43-.35-1.06-.29-1.36.17A10 10 0 1 0 7.09 3.3"
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
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M11.13 6.82q1.09-.2 2.23.11a5.25 5.25 0 1 1-5.87 2.38l4.04 3.27a.75.75 0 1 0 .94-1.16l-4.2-3.4a1.3 1.3 0 0 0-1.91.28 6.74 6.74 0 1 0 4.51-2.96.75.75 0 1 0 .26 1.48"
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
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-8.64-5.07a5 5 0 0 0-2.23-.1.75.75 0 0 1-.26-1.49q1.41-.24 2.88.14a6.75 6.75 0 1 1-7.4 2.82 1.3 1.3 0 0 1 1.92-.28l4.2 3.4a.75.75 0 1 1-.94 1.16L7.49 9.31a5.25 5.25 0 1 0 5.87-2.38"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRadar;
