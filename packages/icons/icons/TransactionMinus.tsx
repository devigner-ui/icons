import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTransactionMinus = forwardRef<SVGSVGElement, IconProps>(
  function IconTransactionMinus(
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
              d="M7.4 19.7a1.76 1.76 0 0 1 2.8.15l1 1.35c.82 1.07 2.13 1.07 2.94 0l1-1.35a1.76 1.76 0 0 1 2.8-.15c1.78 1.9 3.23 1.27 3.23-1.39V7.04c0-4.03-.94-5.04-4.72-5.04H8.89C5.1 2 4.17 3.01 4.17 7.04V18.3c0 2.67 1.47 3.29 3.24 1.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.93 10h5.5"
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
              d="M7.4 19.7a1.76 1.76 0 0 1 2.8.15l1 1.35c.82 1.07 2.13 1.07 2.94 0l1-1.35a1.76 1.76 0 0 1 2.8-.15c1.78 1.9 3.23 1.27 3.23-1.39V7.04c0-4.03-.94-5.04-4.72-5.04H8.89C5.1 2 4.17 3.01 4.17 7.04V18.3c0 2.67 1.47 3.29 3.24 1.4"
              fill="currentColor"
            />
            <path
              d="M15.43 10.75h-5.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.5c.4 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M16.46 2H8.9C5.12 2 4.18 3.01 4.18 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.79-.15c1.78 1.9 3.23 1.27 3.23-1.39V7.04C21.18 3.01 20.24 2 16.46 2m-1.03 8.75h-5.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTransactionMinus;
