import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUnlimited = forwardRef<SVGSVGElement, IconProps>(
  function IconUnlimited(
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
              d="M10.85 9.32a4.5 4.5 0 0 0-3.64-1.87 4.55 4.55 0 0 0 0 9.1c1.69 0 3.26-.89 4.13-2.34L12.67 12l1.32-2.21a4.8 4.8 0 0 1 4.13-2.34 4.55 4.55 0 0 1 0 9.1 4.5 4.5 0 0 1-3.64-1.87"
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
              d="M18.12 17.3a5.2 5.2 0 0 1-4.24-2.18.76.76 0 0 1 .16-1.05.75.75 0 0 1 1.05.16 3.7 3.7 0 0 0 3.03 1.56 3.8 3.8 0 0 0 0-7.6 4.1 4.1 0 0 0-3.49 1.97l-2.65 4.41a5.6 5.6 0 0 1-4.77 2.7 5.3 5.3 0 0 1 0-10.6 5.2 5.2 0 0 1 4.24 2.18c.24.33.17.8-.16 1.05a.75.75 0 0 1-1.05-.16 3.7 3.7 0 0 0-3.03-1.56 3.8 3.8 0 0 0 0 7.6 4.1 4.1 0 0 0 3.49-1.97l2.65-4.41c1-1.67 2.83-2.7 4.77-2.7a5.3 5.3 0 0 1 0 10.6"
              fill="currentColor"
            />
            <path
              d="M7.17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M18.17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
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
              d="M18.12 17.3a5.2 5.2 0 0 1-4.24-2.18.76.76 0 0 1 .16-1.05.75.75 0 0 1 1.05.16 3.7 3.7 0 0 0 3.03 1.56 3.8 3.8 0 0 0 0-7.6 4.1 4.1 0 0 0-3.49 1.97l-2.65 4.41a5.6 5.6 0 0 1-4.77 2.7 5.3 5.3 0 0 1 0-10.6 5.2 5.2 0 0 1 4.24 2.18c.24.33.17.8-.16 1.05a.75.75 0 0 1-1.05-.16A3.7 3.7 0 0 0 7.22 8.2a3.8 3.8 0 0 0 0 7.6 4.1 4.1 0 0 0 3.49-1.97l2.65-4.41c1-1.67 2.83-2.7 4.77-2.7a5.3 5.3 0 1 1-.01 10.58"
              fill="currentColor"
            />
            <path
              d="M7.17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M18.17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUnlimited;
