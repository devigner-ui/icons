import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMenuDots2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMenuDots2(
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
            <circle
              cx="12"
              cy="5"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="12"
              cy="19"
              r="2"
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
            <path d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4" fill="currentColor" />
            <path d="M12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
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
            <path d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4" fill="currentColor" />
            <path d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4" fill="currentColor" />
            <path d="M12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconMenuDots2;
