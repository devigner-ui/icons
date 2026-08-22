import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChrome = forwardRef<SVGSVGElement, IconProps>(function IconChrome(
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
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.84 8a21.5 21.5 0 0 0-9.17 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m4.62 6.06.02.06A24 24 0 0 0 9.2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.55 21.94a22 22 0 0 0 4.55-7.86l.03-.08"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M22.67 12a10 10 0 0 1-9.84 10h-.16q-.92 0-1.79-.16A10 10 0 1 1 22.67 12"
            fill="currentColor"
          />
          <path
            d="M15.77 8.02a22 22 0 0 1 6.24.4q-.36-.93-.89-1.76a23 23 0 0 0-8.63.24 5 5 0 0 0-4.78 4.23 22 22 0 0 1-2.77-5.48q-.62.76-1.08 1.62a24 24 0 0 0 4.46 7.2l.07.05a5 5 0 0 0 6 2.05 22 22 0 0 1-3.51 5.27q.87.16 1.79.16h.16a24 24 0 0 0 4.19-7.7 4.96 4.96 0 0 0-1.25-6.28m-.17 5.59a3.42 3.42 0 1 1-5.93-3.43 3.42 3.42 0 0 1 5.93 3.43"
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
            d="M12.49 6.9a23 23 0 0 1 8.63-.24A9.98 9.98 0 0 0 4.94 5.65Q5.6 7.6 6.6 9.37c.38.68 1.35.65 1.74-.02a5 5 0 0 1 4.14-2.45"
            fill="currentColor"
          />
          <path
            d="M8.39 14.72Q5.38 11.5 3.76 7.44a9.98 9.98 0 0 0 7.44 14.4 22 22 0 0 0 2.34-3.34c.39-.68-.14-1.49-.92-1.49a5 5 0 0 1-4.23-2.29"
            fill="currentColor"
          />
          <path
            d="M9.24 12q0 .91.46 1.72A3.42 3.42 0 1 0 9.24 12"
            fill="currentColor"
          />
          <path
            d="M22.01 8.42a22 22 0 0 0-4.14-.47c-.79-.01-1.24.85-.85 1.54a4.9 4.9 0 0 1 0 4.81 24 24 0 0 1-4.19 7.7 10 10 0 0 0 9.18-13.58"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconChrome;
