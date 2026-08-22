import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRollingPin = forwardRef<SVGSVGElement, IconProps>(
  function IconRollingPin(
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
              d="M13.16 17.01 17 13.16c1.46-1.46 2.18-2.18 2.18-3.09 0-.6-.32-1.13-.98-1.85q-.48-.52-1.2-1.23-.71-.72-1.23-1.2c-.72-.66-1.25-.98-1.85-.98-.9 0-1.63.72-3.09 2.18L7 10.84c-1.47 1.46-2.2 2.18-2.2 3.09 0 .6.32 1.13.98 1.85q.48.52 1.2 1.23.71.72 1.23 1.2c.72.66 1.25.98 1.85.98.9 0 1.63-.72 3.09-2.18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.22 18.21-1.96 2.75-.16.22a2.18 2.18 0 0 1-3.35.07l-.19-.18a2.2 2.2 0 0 1 .26-3.17l.22-.16 2.75-1.96M18.2 8.22l2.75-1.96.22-.16a2.18 2.18 0 0 0 .07-3.35l-.18-.19a2.18 2.18 0 0 0-3.33.48l-1.96 2.75"
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
              d="M13.16 17.01 17 13.16c1.46-1.46 2.18-2.18 2.18-3.09 0-.6-.32-1.13-.98-1.85q-.48-.52-1.2-1.23-.71-.72-1.23-1.2c-.72-.66-1.25-.98-1.85-.98-.9 0-1.63.72-3.09 2.18L7 10.84c-1.47 1.46-2.2 2.18-2.2 3.09 0 .6.32 1.13.98 1.85q.48.52 1.2 1.23.71.72 1.23 1.2c.72.66 1.25.98 1.85.98.9 0 1.63-.72 3.09-2.18"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m21.25 2.75-.18-.19a2.18 2.18 0 0 0-3.33.48l-1.96 2.75q.52.48 1.23 1.2.72.71 1.2 1.23l2.75-1.96.22-.16a2.18 2.18 0 0 0 .07-3.35"
                fill="currentColor"
              />
              <path
                d="m2.56 21.07.19.18.18.19c.94.84 2.4.72 3.17-.26l.16-.22 1.96-2.75q-.52-.48-1.23-1.2-.72-.71-1.2-1.23l-2.75 1.96-.22.16a2.2 2.2 0 0 0-.26 3.17"
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
              d="M13.16 17.01 17 13.16c1.46-1.46 2.18-2.18 2.18-3.09 0-.6-.32-1.13-.98-1.85q-.48-.52-1.2-1.23-.71-.72-1.23-1.2c-.72-.66-1.25-.98-1.85-.98-.9 0-1.63.72-3.09 2.18L7 10.84c-1.47 1.46-2.2 2.18-2.2 3.09 0 .6.32 1.13.98 1.85q.48.52 1.2 1.23.71.72 1.23 1.2c.72.66 1.25.98 1.85.98.9 0 1.63-.72 3.09-2.18"
              fill="currentColor"
            />
            <path
              d="m21.07 2.56.18.19.19.18c.84.94.72 2.4-.26 3.17l-.22.16-1.52 1.08-.12-.13q-.52-.57-1.23-1.26l-.04-.04a39 39 0 0 0-1.4-1.35l1.1-1.52.15-.22a2.2 2.2 0 0 1 3.17-.26"
              fill="currentColor"
            />
            <path
              d="m4.56 16.66.11.13q.53.57 1.24 1.26l.04.04q.69.71 1.26 1.23l.13.12-1.08 1.52-.16.22a2.2 2.2 0 0 1-3.17.26l-.18-.19-.19-.18a2.2 2.2 0 0 1 .26-3.17l.22-.16z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRollingPin;
