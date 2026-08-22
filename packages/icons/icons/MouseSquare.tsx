import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMouseSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconMouseSquare(
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
              d="M22.67 12V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21.63 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L13.75 15a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
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
              d="M16.15 2H8.2C4.74 2 2.68 4.06 2.68 7.52v7.95c0 3.46 2.07 5.52 5.52 5.52h7.95c3.46 0 5.52-2.06 5.52-5.52V7.52C21.67 4.06 19.6 2 16.15 2"
              fill="currentColor"
            />
            <path
              d="m22.63 18.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L14.75 16a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
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
              d="M21.67 7.52v5.88a.5.5 0 0 1-.65.48l-3.93-1.22a3.02 3.02 0 0 0-3.78 3.79l1.21 3.9a.5.5 0 0 1-.48.65H8.19c-3.45 0-5.52-2.06-5.52-5.52V7.52C2.67 4.06 4.74 2 8.19 2h7.96c3.45 0 5.52 2.06 5.52 5.52"
              fill="currentColor"
            />
            <path
              d="m22.63 18.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L14.75 16a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMouseSquare;
