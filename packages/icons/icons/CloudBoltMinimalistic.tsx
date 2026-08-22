import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudBoltMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudBoltMinimalistic(
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
              d="M6.29 18A4.26 4.26 0 0 1 2 13.76a4.26 4.26 0 0 1 5.12-4.15m7.26-2.58A5.8 5.8 0 0 1 18.16 7M7.12 9.61A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5M7.12 9.61q.85.16 1.55.63m9.49-3.23A5.65 5.65 0 0 1 22 12.35a5.7 5.7 0 0 1-4.5 5.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m10 22 4.29-3.7H10l4.29-3.68"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.5 17.91V18h-.21A4.26 4.26 0 0 1 2 13.76a4.26 4.26 0 0 1 5.12-4.15A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5A5.65 5.65 0 0 1 22 12.35a5.7 5.7 0 0 1-4.5 5.52c0-.85 0-1.63-.09-2.26a3.5 3.5 0 0 0-.94-2.08 3.5 3.5 0 0 0-2.08-.94c-.64-.09-1.43-.09-2.3-.09h-.18c-.87 0-1.66 0-2.3.09-.72.1-1.47.32-2.08.94a3.5 3.5 0 0 0-.94 2.08c-.09.64-.09 1.43-.09 2.3"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c-1.89 0-2.83 0-3.41-.59C8 20.83 8 19.9 8 18s0-2.83.59-3.41C9.17 14 10.1 14 12 14s2.83 0 3.41.59c.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C14.83 22 13.9 22 12 22m.92-5.75a.67.67 0 0 0-.95-.94l-2.22 2.22a.67.67 0 0 0 .47 1.14h1.95l-1.09 1.08a.67.67 0 1 0 .95.94l2.22-2.22a.67.67 0 0 0-.47-1.14h-1.95z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c-1.89 0-2.83 0-3.41-.59C8 20.83 8 19.9 8 18s0-2.83.59-3.41C9.17 14 10.1 14 12 14s2.83 0 3.41.59c.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C14.83 22 13.9 22 12 22m.92-5.75a.67.67 0 0 0-.95-.94l-2.22 2.22a.67.67 0 0 0 .47 1.14h1.95l-1.09 1.08a.67.67 0 1 0 .95.94l2.22-2.22a.67.67 0 0 0-.47-1.14h-1.95z"
              fill="currentColor"
            />
            <path
              d="M6.5 17.91V18h-.21A4.26 4.26 0 0 1 2 13.76a4.26 4.26 0 0 1 5.12-4.15A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5A5.65 5.65 0 0 1 22 12.35a5.7 5.7 0 0 1-4.5 5.52c0-.85 0-1.63-.09-2.26a3.5 3.5 0 0 0-.94-2.08 3.5 3.5 0 0 0-2.08-.94c-.64-.09-1.43-.09-2.3-.09h-.18c-.87 0-1.66 0-2.3.09-.72.1-1.47.32-2.08.94a3.5 3.5 0 0 0-.94 2.08c-.09.64-.09 1.43-.09 2.3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudBoltMinimalistic;
