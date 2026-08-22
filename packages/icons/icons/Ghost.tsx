import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGhost = forwardRef<SVGSVGElement, IconProps>(function IconGhost(
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
            d="M16 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
            fill="currentColor"
          />
          <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 19.72V12.3C22 6.61 17.52 2 12 2S2 6.61 2 12.3v7.42c0 1.33 1.35 2.19 2.5 1.6a2.8 2.8 0 0 1 2.9.18 2.8 2.8 0 0 0 3.2 0l.36-.24a1.8 1.8 0 0 1 2.08 0l.36.24a2.8 2.8 0 0 0 3.2 0c.87-.6 1.97-.66 2.9-.19 1.15.6 2.5-.26 2.5-1.59"
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
            d="M22 19.2V12a10 10 0 0 0-20 0v7.2a1.73 1.73 0 0 0 2.5 1.55 2.9 2.9 0 0 1 2.9.18 2.9 2.9 0 0 0 3.2 0l.36-.23a1.9 1.9 0 0 1 2.08 0l.36.23a2.9 2.9 0 0 0 3.2 0 2.9 2.9 0 0 1 2.9-.18c1.15.57 2.5-.26 2.5-1.54"
            fill="currentColor"
          />
          <path
            d="M15 12c.55 0 1-.67 1-1.5S15.55 9 15 9s-1 .67-1 1.5.45 1.5 1 1.5"
            fill="currentColor"
          />
          <path
            d="M10 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5S8.45 9 9 9s1 .67 1 1.5"
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
            d="M22 19.2V12a10 10 0 0 0-20 0v7.2a1.73 1.73 0 0 0 2.5 1.55 2.9 2.9 0 0 1 2.9.18 2.9 2.9 0 0 0 3.2 0l.36-.23a1.9 1.9 0 0 1 2.08 0l.36.23a2.9 2.9 0 0 0 3.2 0 2.9 2.9 0 0 1 2.9-.18c1.15.57 2.5-.26 2.5-1.54m-6-8.7c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5M9 12c.55 0 1-.67 1-1.5S9.55 9 9 9s-1 .67-1 1.5.45 1.5 1 1.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGhost;
