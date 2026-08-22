import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconColorsSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconColorsSquare(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M13.87 14.4a3.6 3.6 0 0 1-3.6 3.6 3.6 3.6 0 0 1-.95-7.07 3.6 3.6 0 0 0 4.3 2.15q.24.6.25 1.32"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.27 9.6q0 .71-.25 1.33a3.61 3.61 0 1 1 .25-1.33"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.67 14.4a3.6 3.6 0 0 1-6 2.68 3.55 3.55 0 0 0 .95-4.01c1.1-.3 1.99-1.1 2.4-2.15a3.6 3.6 0 0 1 2.65 3.48"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.49C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M13.87 14.4a3.6 3.6 0 0 1-3.6 3.6 3.6 3.6 0 0 1-.95-7.07 3.6 3.6 0 0 0 4.3 2.15q.24.6.25 1.32"
              fill="currentColor"
            />
            <path
              d="M16.27 9.6q0 .71-.25 1.33a3.61 3.61 0 1 1 .25-1.33"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 14.4a3.6 3.6 0 0 1-6 2.68 3.55 3.55 0 0 0 .95-4.01c1.1-.3 1.99-1.1 2.4-2.15a3.6 3.6 0 0 1 2.65 3.48"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-4.19 4a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2m-2.4 12a3.6 3.6 0 0 1-2.26-6.4c.24-.2.58-.07.73.2a4.5 4.5 0 0 0 4.65 2.23c.24-.03.48.12.48.36 0 1.06-.46 2.02-1.2 2.68-.64.58-1.48.93-2.4.93m4.8 0q-.53 0-1.01-.14c-.33-.1-.39-.5-.18-.78a4.5 4.5 0 0 0 .84-3.28.3.3 0 0 1 .14-.28c.72-.4 1.33-1 1.73-1.73.15-.26.5-.39.73-.2A3.6 3.6 0 0 1 15.07 18"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconColorsSquare;
