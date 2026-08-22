import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBroom2 = forwardRef<SVGSVGElement, IconProps>(function IconBroom2(
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
            d="M12.73 5.54a4 4 0 1 1 5.65 5.65m-14.8 1.79-.67-1.1a3.63 3.63 0 0 1 1.5-4.87c.85-.45 1.8-.88 2.76-1.15 2.86-.82 5.36-.52 5.36-.52l6.05 6.05s.3 2.5-.52 5.36c-.27.95-.7 1.9-1.15 2.76a3.63 3.63 0 0 1-4.87 1.5l-1.1-.67a22 22 0 0 1-7.36-7.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.5 3.41-2.12 2.13"
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
            d="M22.53 2.53a.75.75 0 0 0-1.06-1.06l-2.4 2.4a5 5 0 0 1 1.06 1.06z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.45 11.41.74 1.22a24.5 24.5 0 0 0 8.18 8.18l1.22.74c1.9.97 4.35.35 5.41-1.66a16.4 16.4 0 0 0 2-7.4c.03-.64.04-.96-.11-1.36s-.42-.66-.94-1.18l-4.83-4.83c-.5-.49-.74-.74-1.1-.89a3 3 0 0 0-1.26-.15c-1.11 0-2.78.12-4.58.64-1.06.3-2.12.78-3.07 1.28a4.04 4.04 0 0 0-1.66 5.41"
            fill="currentColor"
          />
          <path
            d="M19.64 4.36a4.45 4.45 0 0 0-6.28 0l-.04.04c.23.15.45.38.8.72l4.83 4.83c.3.3.51.51.67.72l.02-.03a4.45 4.45 0 0 0 0-6.28"
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
            d="M18.22 19.64c.48-.9.94-1.93 1.24-2.98.41-1.44.56-2.78.6-3.81l-1.55-1.56-5.8-5.8-1.56-1.55c-1.03.04-2.37.19-3.81.6-1.05.3-2.08.76-2.98 1.24A4.5 4.5 0 0 0 2.5 11.8l.01.02.7 1.15A23 23 0 0 0 11 20.8l1.16.7.02.01a4.5 4.5 0 0 0 6.03-1.86"
            fill="currentColor"
          />
          <path
            d="M21.77 3.31a.77.77 0 0 0-1.08-1.08L19 3.9a4.9 4.9 0 0 0-5.72 0L14.4 5 19 9.6l1.1 1.1a4.9 4.9 0 0 0 0-5.71z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBroom2;
