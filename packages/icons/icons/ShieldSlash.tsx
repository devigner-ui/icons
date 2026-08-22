import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShieldSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconShieldSlash(
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
              d="m8.51 20.02 1.59 1.19a4.55 4.55 0 0 0 5.14 0l4.3-3.21a5 5 0 0 0 1.73-3.44V7.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.65 4.34-.47-.24-4.99-1.87a5 5 0 0 0-3.02 0l-5 1.88a3.5 3.5 0 0 0-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l.2.15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 2-20 20"
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
              d="M20.03 4.64 6.5 18.17l-1.1-.82a3.3 3.3 0 0 1-1.18-2.37V6.89a3.2 3.2 0 0 1 1.91-2.77l5.5-2.06a3.5 3.5 0 0 1 2.08 0l5.5 2.06q.44.17.82.52"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.12 6.89v8.09c0 .82-.53 1.88-1.18 2.37l-5.5 4.11c-.98.72-2.56.72-3.54 0l-2.69-2L21.09 6.58q.03.16.03.31"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
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
              d="M20.03 4.64 6.5 18.17l-1.1-.82a3.3 3.3 0 0 1-1.18-2.37V6.89a3.2 3.2 0 0 1 1.91-2.77l5.5-2.06a3.5 3.5 0 0 1 2.08 0l5.5 2.06q.44.17.82.52"
              fill="currentColor"
            />
            <path
              d="M21.12 14.98c0 .82-.53 1.88-1.18 2.37l-5.5 4.11c-.98.72-2.56.72-3.54 0l-1.76-1.31a1 1 0 0 1-.11-1.51L19.41 8.26a1 1 0 0 1 1.71.71z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShieldSlash;
