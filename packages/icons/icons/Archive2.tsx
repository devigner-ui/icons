import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArchive2 = forwardRef<SVGSVGElement, IconProps>(function IconArchive2(
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
            d="M9.92 9.05a8 8 0 0 0 5.5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.49 2H7.85a3.87 3.87 0 0 0-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86A3.9 3.9 0 0 0 17.49 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.49 2H7.85a3.87 3.87 0 0 0-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86A3.9 3.9 0 0 0 17.49 2"
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
            d="M17.49 2H7.85a3.87 3.87 0 0 0-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86A3.9 3.9 0 0 0 17.49 2"
            fill="currentColor"
          />
          <path
            d="M12.67 10.28a9 9 0 0 1-3.01-.53.75.75 0 0 1-.45-.96.76.76 0 0 1 .97-.45c1.61.58 3.38.58 4.99 0a.75.75 0 1 1 .51 1.41q-1.47.53-3.01.53"
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
            d="M17.49 2H7.85a3.87 3.87 0 0 0-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86A3.9 3.9 0 0 0 17.49 2m-1.81 7.75a9 9 0 0 1-6.02 0 .75.75 0 0 1-.45-.96.76.76 0 0 1 .97-.45c1.61.58 3.38.58 4.99 0a.75.75 0 1 1 .51 1.41"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconArchive2;
