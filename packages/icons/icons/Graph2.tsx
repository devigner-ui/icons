import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGraph2 = forwardRef<SVGSVGElement, IconProps>(function IconGraph2(
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
            d="M18.99 12c2.6 0 3.68-1 2.72-4.28a7.3 7.3 0 0 0-4.76-4.76c-3.28-.96-4.28.12-4.28 2.72v2.88c0 2.44 1 3.44 3 3.44z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.67 14.7A9.1 9.1 0 1 1 9.93 4.01"
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
            d="M22.34 6.95a7 7 0 0 0-4.62-4.62c-1.65-.48-2.79-.44-3.58.15-.95.71-1.06 1.99-1.06 2.9v2.49q.01 3.7 3.32 3.71h2.87c.9 0 2.19-.11 2.9-1.06.61-.78.66-1.92.17-3.57"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.58 13.36c-.26-.3-.64-.47-1.03-.47h-3.58a3.2 3.2 0 0 1-3.19-3.19V6.12a1.37 1.37 0 0 0-1.54-1.36 8.7 8.7 0 0 0-5.92 3.53 8.64 8.64 0 1 0 15.59 6.14c.05-.39-.07-.78-.33-1.07"
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
            d="M22.34 6.95a7 7 0 0 0-4.62-4.62c-1.65-.48-2.79-.44-3.58.15-.95.71-1.06 1.99-1.06 2.9v2.49q.01 3.7 3.32 3.71h2.87c.9 0 2.19-.11 2.9-1.06.61-.78.66-1.92.17-3.57"
            fill="currentColor"
          />
          <path
            d="M19.58 13.36c-.26-.3-.64-.47-1.03-.47h-3.58a3.2 3.2 0 0 1-3.19-3.19V6.12a1.37 1.37 0 0 0-1.54-1.36 8.7 8.7 0 0 0-5.92 3.53 8.64 8.64 0 1 0 15.59 6.14c.05-.39-.07-.78-.33-1.07"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGraph2;
