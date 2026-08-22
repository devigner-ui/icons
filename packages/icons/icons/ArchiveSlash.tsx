import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArchiveSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconArchiveSlash(
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
              d="m22.67 2-20 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.35 8.71v11c0 2.01-1.44 2.86-3.2 1.88l-6.48-4.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.99 19.95V5.86A3.87 3.87 0 0 1 7.85 2h9.65c1.21 0 2.29.56 3 1.44"
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
              d="M21.35 6.32v13.63c0 1.8-1.29 2.56-2.86 1.69l-4.88-2.72a2.2 2.2 0 0 0-1.88 0l-4.88 2.72q-.64.35-1.18.36z"
              fill="currentColor"
            />
            <path
              d="M20.79 3.88 4.06 20.61q-.07-.3-.07-.66V5.86A3.87 3.87 0 0 1 7.85 2h9.64c1.4 0 2.63.75 3.3 1.88"
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
              d="M20.79 3.88 4.06 20.61q-.07-.3-.07-.66V5.86A3.87 3.87 0 0 1 7.85 2h9.64c1.4 0 2.63.75 3.3 1.88"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
            <path
              d="m19.96 7.71-7.39 7.39a1 1 0 0 0 .19 1.56l7.39 4.43a1 1 0 0 0 1.51-.86V8.41c.01-.89-1.07-1.33-1.7-.7"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArchiveSlash;
