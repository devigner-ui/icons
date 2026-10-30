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
            d="M18.14 21.62q-1.3.4-3.14.38H9q-1.82 0-3.14-.38c.22-2.6 2.89-4.65 6.14-4.65s5.92 2.05 6.14 4.65Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.53 18.45a4.7 4.7 0 0 1-3.39 3.17q-1.32.4-3.14.38H9q-1.83 0-3.14-.38C3.14 20.85 2 18.78 2 15V9.05m.46-3.46C3.3 3.07 5.35 2 9 2h6c5 0 7 2 7 7v6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.58 10.58a3.58 3.58 0 1 1-7.17.01 3.58 3.58 0 0 1 7.17-.01Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M18.14 21.62q-1.31.39-3.14.38H9q-1.82 0-3.14-.38c.22-2.6 2.89-4.65 6.14-4.65s5.92 2.05 6.14 4.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 9v6c0 3.78-1.14 5.85-3.86 6.62q-1.32.39-3.14.38H9q-1.83 0-3.14-.38C3.14 20.85 2 18.78 2 15V9c0-5 2-7 7-7h6c5 0 7 2 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.58 10.58a3.58 3.58 0 1 1-7.17.01 3.58 3.58 0 0 1 7.17-.01"
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
              d="M22 7.81v8.38c0 2.81-1.29 4.74-3.56 5.47q-1 .34-2.25.34H7.81q-1.25 0-2.25-.34C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81"
              fill="currentColor"
            />
            <path
              d="M18.44 21.66q-1 .34-2.25.34H7.81q-1.25 0-2.25-.34c.35-2.64 3.11-4.69 6.44-4.69s6.09 2.05 6.44 4.69"
              fill="currentColor"
            />
            <path
              d="M15.58 11.58a3.58 3.58 0 1 1-7.17.01 3.58 3.58 0 0 1 7.17-.01"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 2.81 1.29 4.74 3.56 5.47q1 .34 2.25.34h8.38q1.25 0 2.25-.34C20.71 20.93 22 19 22 16.19V7.81C22 4.17 19.83 2 16.19 2m4.31 14.19q0 3.21-2.53 4.05C17 18.33 14.7 16.97 12 16.97s-4.99 1.35-5.97 3.27h-.01q-2.51-.82-2.52-4.04V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31z"
              fill="currentColor"
            />
            <path
              d="M12 8a3.58 3.58 0 1 0 0 7.17A3.58 3.58 0 0 0 12 8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserSquare;
