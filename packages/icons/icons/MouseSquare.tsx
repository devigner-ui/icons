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
        {variant === "Broken" ? (
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
            d="M2 13.02V15c0 5 2 7 7 7h3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L13.08 15a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L13.08 15a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
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
              d="M15 1.48H7.05C3.59 1.48 1.53 3.54 1.53 7v7.95c0 3.46 2.07 5.52 5.52 5.52H15c3.46 0 5.52-2.06 5.52-5.52V7c0-3.46-2.07-5.52-5.52-5.52"
              fill="currentColor"
            />
            <path
              d="m21.48 18.32-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03l-1.85-5.95a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
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
              d="M20.52 7v5.88a.5.5 0 0 1-.65.48l-3.93-1.22a3.02 3.02 0 0 0-3.78 3.79l1.21 3.9a.5.5 0 0 1-.48.65H7.04c-3.45 0-5.52-2.06-5.52-5.52V7c0-3.46 2.07-5.52 5.52-5.52H15c3.45 0 5.52 2.06 5.52 5.52"
              fill="currentColor"
            />
            <path
              d="m21.48 18.32-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03l-1.85-5.95a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMouseSquare;
