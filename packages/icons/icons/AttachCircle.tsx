import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAttachCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconAttachCircle(
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
              d="m12.87 11.8-1.4 1.41a2 2 0 0 0 2.82 2.83l2.22-2.22a4 4 0 0 0-5.66-5.66l-2.42 2.42a3.43 3.43 0 0 0 0 4.85"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M12.87 17.38a2.75 2.75 0 0 1-1.94-4.68l1.41-1.41a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06L12 13.76a1.23 1.23 0 0 0 0 1.76c.48.49 1.27.49 1.76 0l2.22-2.22a3.25 3.25 0 0 0-4.6-4.6l-2.42 2.42a2.66 2.66 0 0 0 0 3.78c.3.29.3.77 0 1.06a.75.75 0 0 1-1.06 0A4.2 4.2 0 0 1 6.68 13c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.76 4.76 0 0 1 6.72 6.72l-2.22 2.22c-.54.55-1.24.82-1.95.82"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.37 12.35-2.22 2.22a2.75 2.75 0 0 1-3.88-3.88l1.41-1.41a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06l-1.4 1.41a1.23 1.23 0 0 0 0 1.76c.48.49 1.27.49 1.76 0L16 13.29a3.25 3.25 0 0 0-4.6-4.6l-2.42 2.42a2.66 2.66 0 0 0 0 3.78c.3.29.3.77 0 1.06a.75.75 0 0 1-1.06 0 4.15 4.15 0 0 1-.02-5.9l2.42-2.42a4.76 4.76 0 0 1 6.73 6.72"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAttachCircle;
