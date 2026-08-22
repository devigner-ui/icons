import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPanelLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconPanelLeft(
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
              d="M2.5 6.5c0-1.89 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59s2.83 0 3.41.59c.59.58.59 1.52.59 3.41v11c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59s-2.83 0-3.41-.59c-.59-.58-.59-1.52-.59-3.41z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.5 15.5c0-1.89 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59s2.83 0 3.41.59c.59.58.59 1.52.59 3.41v2c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59s-2.83 0-3.41-.59c-.59-.58-.59-1.52-.59-3.41z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.5 5.5c0-.93 0-1.4.15-1.76a2 2 0 0 1 1.08-1.09c.37-.15.84-.15 1.77-.15h2c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.09c.15.36.15.83.15 1.76s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15h-2c-.93 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08c-.15-.37-.15-.84-.15-1.77"
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
              d="M2 6.21c0-1.98 0-2.98.66-3.6C3.32 2 4.38 2 6.5 2s3.18 0 3.84.62c.66.61.66 1.6.66 3.6v11.57c0 1.98 0 2.98-.66 3.6-.66.61-1.72.61-3.84.61s-3.18 0-3.84-.62C2 20.77 2 19.78 2 17.8z"
              fill="currentColor"
            />
            <path
              d="M13 15.4c0-2.07 0-3.11.66-3.76S15.38 11 17.5 11s3.18 0 3.84.64c.66.65.66 1.69.66 3.76v2.2c0 2.07 0 3.11-.66 3.76s-1.72.64-3.84.64-3.18 0-3.84-.64C13 20.7 13 19.67 13 17.6z"
              fill="currentColor"
            />
            <path
              d="M13 5.5c0-1.09 0-1.63.17-2.06a2.3 2.3 0 0 1 1.22-1.26C14.8 2 15.33 2 16.37 2h2.25c1.05 0 1.58 0 2 .18.54.23.98.69 1.2 1.26.18.43.18.97.18 2.06s0 1.63-.17 2.06a2.3 2.3 0 0 1-1.22 1.26c-.41.18-.94.18-1.98.18h-2.25c-1.05 0-1.58 0-2-.18a2.3 2.3 0 0 1-1.2-1.26C13 7.13 13 6.59 13 5.5"
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
              d="M2 6.21c0-1.98 0-2.98.66-3.6C3.32 2 4.38 2 6.5 2s3.18 0 3.84.62c.66.61.66 1.6.66 3.6v11.57c0 1.98 0 2.98-.66 3.6-.66.61-1.72.61-3.84.61s-3.18 0-3.84-.62C2 20.77 2 19.78 2 17.8z"
              fill="currentColor"
            />
            <path
              d="M13 15.4c0-2.07 0-3.11.66-3.76S15.38 11 17.5 11s3.18 0 3.84.64c.66.65.66 1.69.66 3.76v2.2c0 2.07 0 3.11-.66 3.76s-1.72.64-3.84.64-3.18 0-3.84-.64C13 20.7 13 19.67 13 17.6z"
              fill="currentColor"
            />
            <path
              d="M13 5.5c0-1.09 0-1.63.17-2.06a2.3 2.3 0 0 1 1.22-1.26C14.8 2 15.33 2 16.37 2h2.25c1.05 0 1.58 0 2 .18.54.23.98.69 1.2 1.26.18.43.18.97.18 2.06s0 1.63-.17 2.06a2.3 2.3 0 0 1-1.22 1.26c-.41.18-.94.18-1.98.18h-2.25c-1.05 0-1.58 0-2-.18a2.3 2.3 0 0 1-1.2-1.26C13 7.13 13 6.59 13 5.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPanelLeft;
