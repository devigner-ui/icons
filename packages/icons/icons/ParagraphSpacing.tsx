import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconParagraphSpacing = forwardRef<SVGSVGElement, IconProps>(
  function IconParagraphSpacing(
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
              d="M4 21h16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 3h16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12 5.5 3 3m-3-3-3 3m3-3v13m0 0 3-3m-3 3-3-3"
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
                d="M3.25 3c0-.41.34-.75.75-.75h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3"
                fill="currentColor"
              />
              <path
                d="M3.25 21c0-.41.34-.75.75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
                fill="currentColor"
              />
            </g>
            <path
              d="M12.53 4.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3c.3.3.77.3 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"
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
              d="M3.25 3c0-.41.34-.75.75-.75h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3"
              fill="currentColor"
            />
            <path
              d="M3.25 21c0-.41.34-.75.75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M12.53 4.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3c.3.3.77.3 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconParagraphSpacing;
