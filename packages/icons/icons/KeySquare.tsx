import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeySquare = forwardRef<SVGSVGElement, IconProps>(
  function IconKeySquare(
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
              d="M14.2 13.55a3.78 3.78 0 1 0-3.78-3.77c0 .96.44 1.67.44 1.67L6.27 16c-.2.2-.5.74 0 1.23l.53.53c.2.17.72.42 1.15 0l.62-.62c.61.62 1.32.27 1.58-.08.44-.62-.09-1.23-.09-1.23l.18-.18c.85.84 1.59.35 1.85 0 .44-.61 0-1.23 0-1.23-.17-.35-.53-.35-.09-.79l.53-.53c.43.35 1.3.44 1.68.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 9.78c0 2.08-1.7 3.77-3.8 3.77-.37 0-1.24-.09-1.67-.44l-.53.53c-.3.31-.22.4-.08.55q.08.09.17.24s.44.62 0 1.23c-.26.35-1 .84-1.85 0l-.18.18s.53.61.1 1.23c-.27.35-.98.7-1.6.08l-.61.62c-.43.42-.94.17-1.15 0l-.53-.53c-.5-.5-.2-1.02 0-1.23l4.59-4.57s-.44-.7-.44-1.66a3.78 3.78 0 0 1 7.58 0m-3.8 1.31a1.32 1.32 0 1 0 .01-2.64 1.32 1.32 0 0 0 0 2.64"
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
              d="M14.2 11.1a1.32 1.32 0 1 0 .01-2.65 1.32 1.32 0 0 0 0 2.64"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m10.75 10.1a3.78 3.78 0 1 0-3.8-3.78c0 .96.45 1.67.45 1.67L6.27 16c-.2.2-.5.74 0 1.23l.53.53c.2.17.72.42 1.15 0l.62-.62c.61.62 1.32.27 1.58-.08.44-.62-.09-1.23-.09-1.23l.18-.18c.85.84 1.59.35 1.85 0 .44-.61 0-1.23 0-1.23q-.08-.15-.17-.24c-.14-.15-.23-.24.08-.55l.53-.53c.43.35 1.3.44 1.68.44"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeySquare;
