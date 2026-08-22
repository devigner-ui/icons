import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOmegaCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconOmegaCircle(
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 16.5h-3.1l1.62-1.79a4.8 4.8 0 0 0 1.24-3.18c0-1.2-.5-2.35-1.39-3.2a4.9 4.9 0 0 0-6.74 0c-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79h-3.1"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M17.67 17.25h-3.1a.7.7 0 0 1-.69-.45.8.8 0 0 1 .13-.81l1.62-1.79a4 4 0 0 0 1.05-2.68c0-1-.41-1.94-1.16-2.65a4.2 4.2 0 0 0-5.7 0 3.6 3.6 0 0 0-1.16 2.65c0 .98.37 1.93 1.05 2.68l1.62 1.79a.75.75 0 0 1-.56 1.26h-3.1a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.41l-.49-.54a5.5 5.5 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74a5.6 5.6 0 0 1 3.88-1.53 5.6 5.6 0 0 1 3.88 1.53 5.2 5.2 0 0 1 1.63 3.74c0 1.35-.51 2.66-1.43 3.69l-.49.54h1.41c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m5 15.25h-3.1a.7.7 0 0 1-.69-.45.8.8 0 0 1 .13-.81l1.62-1.79a4 4 0 0 0 1.05-2.68c0-1-.41-1.94-1.16-2.65a4.2 4.2 0 0 0-5.7 0 3.6 3.6 0 0 0-1.16 2.65c0 .98.37 1.93 1.05 2.68l1.61 1.8a.75.75 0 0 1-.56 1.26H7.67a.76.76 0 0 1-.75-.75c0-.41.34-.76.75-.76h1.41l-.49-.54a5.5 5.5 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74a5.6 5.6 0 0 1 3.88-1.53c1.47 0 2.84.54 3.88 1.53a5.2 5.2 0 0 1 1.63 3.74c0 1.35-.51 2.66-1.43 3.69l-.49.54h1.41c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOmegaCircle;
