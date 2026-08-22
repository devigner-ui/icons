import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkMinimalistic2 = forwardRef<SVGSVGElement, IconProps>(
  function IconLinkMinimalistic2(
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
              d="m14.16 18.49-.72.72a6.12 6.12 0 1 1-8.65-8.65l.72-.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m9.84 14.16 4.32-4.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m9.84 5.51.72-.72a6.12 6.12 0 1 1 8.65 8.65l-.72.72"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19.74 4.26a6.87 6.87 0 0 0-9.71 0l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a5.37 5.37 0 1 1 7.59 7.6l-.72.71a.75.75 0 0 0 1.06 1.06l.72-.72a6.87 6.87 0 0 0 0-9.7"
                fill="currentColor"
              />
              <path
                d="M6.04 9.3c.3.3.3.78 0 1.07l-.72.72a5.37 5.37 0 1 0 7.6 7.59l.71-.72a.75.75 0 0 1 1.06 1.06l-.72.72a6.87 6.87 0 0 1-9.7-9.71l.71-.72c.3-.3.77-.3 1.06 0"
                fill="currentColor"
              />
            </g>
            <path
              d="M14.7 9.3c.29.3.29.78 0 1.07l-4.33 4.32a.75.75 0 1 1-1.06-1.06l4.32-4.32c.3-.3.77-.3 1.06 0"
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
              d="M19.74 4.26a6.87 6.87 0 0 0-9.71 0l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a5.37 5.37 0 1 1 7.59 7.6l-.72.71a.75.75 0 0 0 1.06 1.06l.72-.72a6.87 6.87 0 0 0 0-9.7"
              fill="currentColor"
            />
            <path
              d="M6.04 9.3c.3.3.3.78 0 1.07l-.72.72a5.37 5.37 0 1 0 7.6 7.59l.71-.72a.75.75 0 0 1 1.06 1.06l-.72.72a6.87 6.87 0 0 1-9.7-9.71l.71-.72c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M14.7 9.3c.29.3.29.78 0 1.07l-4.33 4.32a.75.75 0 1 1-1.06-1.06l4.32-4.32c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLinkMinimalistic2;
