import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDatabase = forwardRef<SVGSVGElement, IconProps>(function IconDatabase(
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
            d="M4 18V6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20 6v12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 10c4.42 0 8-1.8 8-4s-3.58-4-8-4-8 1.8-8 4 3.58 4 8 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 12c0 2.2-3.58 4-8 4s-8-1.8-8-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20 18c0 2.2-3.58 4-8 4s-8-1.8-8-4"
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
            d="M12 10c4.42 0 8-1.8 8-4s-3.58-4-8-4-8 1.8-8 4 3.58 4 8 4"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.3" : "1"}
            d="M4 12v6c0 2.2 3.58 4 8 4s8-1.8 8-4v-6c0 2.2-3.58 4-8 4s-8-1.8-8-4"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M4 6v6c0 2.2 3.58 4 8 4s8-1.8 8-4V6c0 2.2-3.58 4-8 4S4 8.2 4 6"
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
            d="M20 18c0 2.2-3.58 4-8 4s-8-1.8-8-4v-4.03a6 6 0 0 0 2 1.53c1.58.79 3.7 1.25 6 1.25s4.42-.46 6-1.25c.79-.4 1.5-.9 2-1.53z"
            fill="currentColor"
          />
          <path
            d="M12 10.75c2.3 0 4.42-.46 6-1.25.79-.4 1.5-.9 2-1.53V12c0 .5-1.79 1.6-2.68 2.16-1.32.66-3.2 1.09-5.32 1.09s-4-.43-5.32-1.1C5.5 13.58 4 12.5 4 12V7.97A6 6 0 0 0 6 9.5c1.58.79 3.7 1.25 6 1.25"
            fill="currentColor"
          />
          <path
            d="M17.32 8.16C16 8.82 14.12 9.25 12 9.25s-4-.43-5.32-1.1A6.5 6.5 0 0 1 4.2 6.29a.8.8 0 0 1-.16-.62q.03-.24.1-.4C4.83 3.41 8.09 2 12 2s7.17 1.4 7.86 3.26q.07.16.1.4a.8.8 0 0 1-.16.62 6.5 6.5 0 0 1-2.48 1.88"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDatabase;
