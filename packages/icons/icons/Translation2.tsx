import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTranslation2 = forwardRef<SVGSVGElement, IconProps>(
  function IconTranslation2(
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
              d="M16.24 16.24a6 6 0 1 0-8.49 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.07 19.07a10 10 0 1 0-14.14 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="12.0004"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9.89 17.34c.96-.87 1.44-1.3 2.03-1.34h.16c.6.03 1.07.47 2.03 1.34 2.09 1.91 3.13 2.86 2.84 3.68q-.03.11-.1.21c-.42.77-1.9.77-4.85.77s-4.43 0-4.86-.77l-.1-.2c-.28-.83.76-1.78 2.85-3.69"
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
              d="M10.31 17.34c.77-.87 1.15-1.3 1.63-1.34h.13c.47.03.85.47 1.62 1.34 1.67 1.91 2.5 2.86 2.27 3.68l-.07.21c-.35.77-1.53.77-3.89.77s-3.54 0-3.89-.77l-.07-.2c-.24-.83.6-1.78 2.27-3.69"
              fill="currentColor"
            />
            <path
              d="M14.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 8.04a4.85 4.85 0 0 0-4.88 4.8c0 1.33.54 2.53 1.43 3.4.27.27.27.7 0 .97a.7.7 0 0 1-.99 0 6 6 0 0 1-1.84-4.37A6.23 6.23 0 0 1 12 6.66a6.23 6.23 0 0 1 6.28 6.18c0 1.7-.7 3.25-1.84 4.37a.7.7 0 0 1-.99 0 .7.7 0 0 1 0-.97 4.8 4.8 0 0 0 1.43-3.4c0-2.65-2.18-4.8-4.88-4.8"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4.37c-4.75 0-8.6 3.8-8.6 8.47 0 2.34.96 4.46 2.52 5.99.27.27.27.7 0 .97a.7.7 0 0 1-1 0A9.7 9.7 0 0 1 2 12.84 9.9 9.9 0 0 1 12 3c5.52 0 10 4.4 10 9.84a9.7 9.7 0 0 1-2.93 6.96.7.7 0 0 1-.99 0 .7.7 0 0 1 0-.97 8.4 8.4 0 0 0 2.52-5.99A8.54 8.54 0 0 0 12 4.37"
                fill="currentColor"
              />
            </g>
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
              d="M12 8.04a4.85 4.85 0 0 0-4.88 4.8c0 1.33.54 2.53 1.43 3.4.27.27.27.7 0 .97a.7.7 0 0 1-.99 0 6 6 0 0 1-1.84-4.37A6.23 6.23 0 0 1 12 6.66a6.23 6.23 0 0 1 6.28 6.18c0 1.7-.7 3.25-1.84 4.37a.7.7 0 0 1-.99 0 .7.7 0 0 1 0-.97 4.8 4.8 0 0 0 1.43-3.4c0-2.65-2.18-4.8-4.88-4.8"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4.37c-4.75 0-8.6 3.8-8.6 8.47 0 2.34.96 4.46 2.52 5.99.27.27.27.7 0 .97a.7.7 0 0 1-1 0A9.7 9.7 0 0 1 2 12.84 9.9 9.9 0 0 1 12 3c5.52 0 10 4.4 10 9.84a9.7 9.7 0 0 1-2.93 6.96.7.7 0 0 1-.99 0 .7.7 0 0 1 0-.97 8.4 8.4 0 0 0 2.52-5.99A8.54 8.54 0 0 0 12 4.37"
              fill="currentColor"
            />
            <path
              d="M10.31 17.34c.77-.87 1.15-1.3 1.63-1.34h.13c.47.03.85.47 1.62 1.34 1.67 1.91 2.5 2.86 2.27 3.68l-.07.21c-.35.77-1.53.77-3.89.77s-3.54 0-3.89-.77l-.07-.2c-.24-.83.6-1.78 2.27-3.69"
              fill="currentColor"
            />
            <path
              d="M14.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTranslation2;
