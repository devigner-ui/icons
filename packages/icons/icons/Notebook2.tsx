import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotebook2 = forwardRef<SVGSVGElement, IconProps>(
  function IconNotebook2(
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
              d="M20.5 15v-5c0-2.83 0-4.24-.88-5.12S17.32 4 14.5 4h-5c-2.83 0-4.24 0-5.12.88S3.5 7.18 3.5 10v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M5 20h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.33a2 2 0 0 0-1.2.4l-.94.7a2 2 0 0 1-1.2.4h-2.66a2 2 0 0 1-1.2-.4l-.94-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M9.5 2h5c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v7h-3.83c-.76 0-1.5.25-2.1.7l-.94.7a.5.5 0 0 1-.3.1h-2.66a.5.5 0 0 1-.3-.1l-.94-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.83 0-4.24.88-5.12S6.68 2 9.5 2"
              fill="currentColor"
            />
            <path
              d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.33a2 2 0 0 0-1.2.4l-.94.7a2 2 0 0 1-1.2.4h-2.66a2 2 0 0 1-1.2-.4l-.94-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3"
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
              d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.33a2 2 0 0 0-1.2.4l-.94.7a2 2 0 0 1-1.2.4h-2.66a2 2 0 0 1-1.2-.4l-.94-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3"
              fill="currentColor"
            />
            <path
              d="M9.5 2h5c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v7h-3.83c-.76 0-1.5.25-2.1.7l-.94.7a.5.5 0 0 1-.3.1h-2.66a.5.5 0 0 1-.3-.1l-.94-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.83 0-4.24.88-5.12S6.68 2 9.5 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotebook2;
