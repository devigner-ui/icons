import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconUserSquare(
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
              d="M18.81 21.62q-1.31.39-3.14.38h-6q-1.82 0-3.14-.38c.22-2.6 2.89-4.65 6.14-4.65s5.92 2.05 6.14 4.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 9v6c0 3.78-1.14 5.85-3.86 6.62q-1.32.39-3.14.38h-6q-1.83 0-3.14-.38c-2.72-.77-3.86-2.84-3.86-6.62V9c0-5 2-7 7-7h6c5 0 7 2 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.25 10.58a3.58 3.58 0 1 1-7.17.01 3.58 3.58 0 0 1 7.17-.01"
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
              d="M22.67 7.81v8.38c0 2.81-1.29 4.74-3.56 5.47q-1 .34-2.25.34H8.48q-1.25 0-2.25-.34c-2.27-.73-3.56-2.66-3.56-5.47V7.81C2.67 4.17 4.84 2 8.48 2h8.38c3.64 0 5.81 2.17 5.81 5.81"
              fill="currentColor"
            />
            <path
              d="M19.11 21.66q-1 .34-2.25.34H8.48q-1.25 0-2.25-.34c.35-2.64 3.11-4.69 6.44-4.69s6.09 2.05 6.44 4.69"
              fill="currentColor"
            />
            <path
              d="M16.25 11.58a3.58 3.58 0 1 1-7.17.01 3.58 3.58 0 0 1 7.17-.01"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38c0 2.81 1.29 4.74 3.56 5.47q1 .34 2.25.34h8.38q1.25 0 2.25-.34c2.27-.73 3.56-2.66 3.56-5.47V7.81C22.67 4.17 20.5 2 16.86 2m4.31 14.19q0 3.21-2.53 4.05c-.97-1.91-3.27-3.27-5.97-3.27s-4.99 1.35-5.97 3.27h-.01q-2.51-.82-2.52-4.04V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31z"
              fill="currentColor"
            />
            <path
              d="M12.67 8a3.58 3.58 0 1 0 0 7.17 3.58 3.58 0 0 0 0-7.17"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserSquare;
