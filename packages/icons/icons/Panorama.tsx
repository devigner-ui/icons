import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPanorama = forwardRef<SVGSVGElement, IconProps>(function IconPanorama(
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
            d="M22 5.86c0-.8-.8-1.53-2.12-2.1-1.17-.52-2.38.46-2.38 1.74v3.22M22 5.86v12.72C22 20.47 17.52 22 12 22S2 20.47 2 18.58V5.86m20 0c0 1.2-1.79 2.25-4.5 2.86M2 5.86c0-.8.8-1.53 2.12-2.1 1.17-.52 2.38.46 2.38 1.74v3.22M2 5.86c0 1.2 1.79 2.25 4.5 2.86m0 0c1.58.36 3.47.56 5.5.56s3.92-.2 5.5-.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21 20-2.5-2.15c-.8-.7-2-.76-2.88-.16l-.24.15a1.6 1.6 0 0 1-1.98-.16l-3.32-3.18a1.84 1.84 0 0 0-2.43-.08l-1.36 1.14L2.5 19.1"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.45 3.07c-1.06-.33-2.03.52-2.03 1.55v3.63c-1.3.25-2.8.4-4.42.4a24 24 0 0 1-4.42-.4V4.62c0-1.03-.97-1.88-2.03-1.55-.98.31-1.83.7-2.45 1.17-.6.47-1.1 1.1-1.1 1.9v11.94q0 .32.1.61.1.27.25.5c.32.49.84.89 1.44 1.22q.92.5 2.18.85c1.67.47 3.77.74 6.03.74 1.9 0 3.68-.2 5.19-.53 1.5-.33 2.77-.82 3.63-1.44q.3-.24.57-.52c.36-.4.61-.87.61-1.43V6.13c0-.8-.5-1.42-1.1-1.89a8 8 0 0 0-2.45-1.17m2.15 5.16-.08.05c-.82.52-1.95.93-3.25 1.23a24 24 0 0 1-5.27.54c-1.93 0-3.75-.2-5.27-.54A11 11 0 0 1 3.4 8.23v9.16l2.83-2.68 1.27-1.08a2.4 2.4 0 0 1 3.2.1l3.08 3a.8.8 0 0 0 .98.07l.21-.14a2.9 2.9 0 0 1 3.54.2l1.9 1.66q.21-.3.2-.44z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.21 12.84c0 .78-.63 1.4-1.4 1.4a1.4 1.4 0 0 1-1.4-1.4 1.4 1.4 0 1 1 2.8 0"
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
            d="M19.2 12.84c0 .78-.62 1.4-1.39 1.4a1.4 1.4 0 0 1-1.4-1.4c0-.78.63-1.41 1.4-1.41s1.4.63 1.4 1.41"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.45 3.07c-1.06-.33-2.03.52-2.03 1.55v3.63c-1.3.25-2.8.4-4.42.4a24 24 0 0 1-4.42-.4V4.62c0-1.03-.97-1.88-2.03-1.55-.98.31-1.83.7-2.45 1.17-.6.47-1.1 1.1-1.1 1.9v11.94q0 .32.1.61.1.27.25.5c.32.49.84.89 1.44 1.22q.92.5 2.18.85c1.67.47 3.77.74 6.03.74 1.9 0 3.68-.2 5.19-.53 1.5-.33 2.77-.82 3.63-1.44q.3-.24.57-.52c.36-.4.61-.87.61-1.43V6.13c0-.8-.5-1.42-1.1-1.89a8 8 0 0 0-2.45-1.17m2.15 5.16-.08.05c-.82.52-1.95.93-3.25 1.23a24 24 0 0 1-5.27.54c-1.93 0-3.75-.2-5.27-.54A11 11 0 0 1 3.4 8.23v9.16l2.83-2.68 1.27-1.08a2.4 2.4 0 0 1 3.2.1l3.08 3a.8.8 0 0 0 .98.07l.21-.14a2.9 2.9 0 0 1 3.54.2l1.9 1.66q.21-.3.2-.44z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPanorama;
