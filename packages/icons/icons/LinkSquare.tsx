import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconLinkSquare(
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
                d="M8.85 16.02a3.3 3.3 0 0 1-2.09-1.03 3.73 3.73 0 0 1 0-5.06l2.2-2.3a3.3 3.3 0 0 1 4.81 0 3.73 3.73 0 0 1 0 5.06l-1.09 1.15"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 7.98c.75.07 1.5.42 2.08 1.03a3.73 3.73 0 0 1 0 5.06l-2.19 2.3a3.3 3.3 0 0 1-4.82 0 3.73 3.73 0 0 1 0-5.06l1.1-1.15"
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
              d="M16.86 2H8.5C4.85 2 2.7 4.17 2.7 7.81v8.37c0 3.64 2.16 5.81 5.8 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.8-5.81"
              fill="currentColor"
            />
            <path
              d="M8.85 16.77h-.07a4 4 0 0 1-2.56-1.26 4.46 4.46 0 0 1 0-6.09l2.2-2.3a4.05 4.05 0 0 1 5.9 0 4.46 4.46 0 0 1 0 6.09l-1.1 1.15a.75.75 0 0 1-1.06.03.75.75 0 0 1-.03-1.06l1.1-1.15a2.94 2.94 0 0 0 0-4.02 2.6 2.6 0 0 0-3.74 0l-2.19 2.3a2.94 2.94 0 0 0 0 4.02c.43.46 1.01.74 1.62.8.41.04.71.41.67.82a.74.74 0 0 1-.74.67"
              fill="currentColor"
            />
            <path
              d="M13.98 18.16a4 4 0 0 1-2.95-1.28 4.46 4.46 0 0 1 0-6.09l1.1-1.15a.75.75 0 0 1 1.05-.03c.3.29.31.76.03 1.06l-1.09 1.15a2.94 2.94 0 0 0 0 4.02 2.6 2.6 0 0 0 3.73 0l2.2-2.3a2.94 2.94 0 0 0 0-4.02 2.6 2.6 0 0 0-1.63-.8.75.75 0 0 1-.67-.82c.04-.41.4-.72.82-.67.97.1 1.88.54 2.56 1.26a4.46 4.46 0 0 1 0 6.09l-2.19 2.3a4 4 0 0 1-2.96 1.28"
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
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-8 14.77h-.08a4 4 0 0 1-2.56-1.26 4.46 4.46 0 0 1 0-6.09l2.2-2.3a4.05 4.05 0 0 1 5.9 0 4.46 4.46 0 0 1 0 6.09l-1.1 1.15a.75.75 0 0 1-1.06.03.75.75 0 0 1-.03-1.06l1.1-1.15a2.94 2.94 0 0 0 0-4.02 2.6 2.6 0 0 0-3.74 0l-2.19 2.3a2.94 2.94 0 0 0 0 4.02c.43.46 1.01.74 1.62.8.41.04.71.41.67.82a.74.74 0 0 1-.74.67m10.26-2.18-2.19 2.3a4.05 4.05 0 0 1-5.9 0 4.46 4.46 0 0 1 0-6.09l1.1-1.15a.75.75 0 0 1 1.05-.03c.3.29.31.76.03 1.06l-1.09 1.15a2.94 2.94 0 0 0 0 4.02 2.6 2.6 0 0 0 3.73 0l2.2-2.3a2.94 2.94 0 0 0 0-4.02 2.6 2.6 0 0 0-1.63-.8.75.75 0 0 1-.67-.82c.04-.41.4-.72.82-.67.97.1 1.88.54 2.56 1.26a4.47 4.47 0 0 1 0 6.09"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLinkSquare;
