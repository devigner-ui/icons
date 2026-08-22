import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRulerPen = forwardRef<SVGSVGElement, IconProps>(function IconRulerPen(
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
            d="M16 22c-1.89 0-2.83 0-3.41-.59C12 20.83 12 19.9 12 18V6c0-1.89 0-2.83.59-3.41C13.17 2 14.1 2 16 2h2c1.89 0 2.83 0 3.41.59C22 3.17 22 4.1 22 6v12c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m6.01 21.03-.29.55A.8.8 0 0 1 5 22a.8.8 0 0 1-.72-.42l-.3-.55m2.03 0H4m2.02 0 1.18-2.25c.28-.52.42-.79.52-1.06q.18-.5.25-1c.04-.3.04-.6.04-1.19V4.85A2.93 2.93 0 0 0 5 2C3.34 2 2 3.28 2 4.85v10.68c0 .6 0 .9.04 1.18q.06.52.25 1a8 8 0 0 0 .52 1.07l1.18 2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 5.8s1.13.95 3 .95 3-.95 3-.95"
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
            d="M16 22c-1.89 0-2.83 0-3.41-.59-.5-.5-.58-1.26-.59-2.66V5.25c.01-1.4.08-2.16.59-2.66C13.17 2 14.1 2 16 2h2c1.89 0 2.83 0 3.41.59C22 3.17 22 4.1 22 6v12c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59z"
            fill="currentColor"
          />
          <path d="M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5" fill="currentColor" />
          <path d="M14 5.25h-2v1.5h2a.75.75 0 0 0 0-1.5" fill="currentColor" />
          <path d="M14 11.25h-2v1.5h2a.75.75 0 0 0 0-1.5" fill="currentColor" />
          <path d="M15 14.25h-3v1.5h3a.75.75 0 0 0 0-1.5" fill="currentColor" />
          <path d="M14 17.25h-2v1.5h2a.75.75 0 0 0 0-1.5" fill="currentColor" />
          <path
            d="M8 14.98V7a8 8 0 0 1-6 0v7.98c0 .62 0 .93.04 1.24a5 5 0 0 0 .25 1.06c.1.29.24.56.52 1.12l1.47 2.94a.8.8 0 0 0 1.44 0L7.2 18.4c.28-.55.42-.83.52-1.12a5 5 0 0 0 .25-1.06c.04-.3.04-.62.04-1.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 2a3 3 0 0 1 3 3v2a8 8 0 0 1-6 0V5a3 3 0 0 1 3-3"
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
            d="M12.59 21.41c.58.59 1.52.59 3.41.59h2c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41V6c0-1.89 0-2.83-.59-3.41C20.83 2 19.9 2 18 2h-2c-1.89 0-2.83 0-3.41.59-.5.5-.58 1.26-.59 2.66h2a.75.75 0 0 1 0 1.5h-2v1.5h3a.75.75 0 0 1 0 1.5h-3v1.5h2a.75.75 0 0 1 0 1.5h-2v1.5h3a.75.75 0 0 1 0 1.5h-3v1.5h2a.75.75 0 0 1 0 1.5h-2c.01 1.4.08 2.16.59 2.66"
            fill="currentColor"
          />
          <path
            d="M8 15.2v-8a8 8 0 0 1-6 0v7.98c0 .63 0 .94.04 1.24a5 5 0 0 0 .25 1.06c.1.29.24.57.52 1.13l1.47 2.93a.8.8 0 0 0 1.44 0l1.47-2.93c.28-.56.42-.84.52-1.13a5 5 0 0 0 .25-1.06c.04-.3.04-.61.04-1.24"
            fill="currentColor"
          />
          <path
            d="M8 5a3 3 0 0 0-6 0v.96a6.4 6.4 0 0 0 3 .7 7 7 0 0 0 3-.7z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRulerPen;
