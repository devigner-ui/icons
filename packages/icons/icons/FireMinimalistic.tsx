import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFireMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconFireMinimalistic(
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
              d="M12 21c4.42 0 8-3.36 8-7.5 0-3.74-2.03-6.66-3.44-8.06-.26-.25-.7-.14-.84.2-.75 1.68-2.3 4.12-4.3 4.12-1.22.16-3.1-.9-1.59-6.11.14-.47-.36-.85-.74-.53C6.9 4.9 4 8.52 4 13.5c0 4.14 3.58 7.5 8 7.5"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 21c4.42 0 8-3.36 8-7.5 0-3.74-2.03-6.66-3.44-8.06-.26-.25-.7-.14-.84.2-.75 1.68-2.3 4.12-4.3 4.12-1.22.16-3.1-.9-1.59-6.11.14-.47-.36-.85-.74-.53C6.9 4.9 4 8.52 4 13.5c0 4.14 3.58 7.5 8 7.5"
              fill="currentColor"
            />
            <path
              d="M4.48 16.06a9 9 0 0 1 15.04 0q.47-1.2.48-2.56c0-3.74-2.03-6.66-3.44-8.06-.26-.25-.7-.14-.84.2-.75 1.68-2.3 4.12-4.3 4.12-1.22.16-3.1-.9-1.59-6.11.14-.47-.36-.85-.74-.53C6.9 4.9 4 8.52 4 13.5q0 1.36.48 2.56"
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
              d="M12 21c4.42 0 8-3.36 8-7.5 0-3.74-2.03-6.66-3.44-8.06-.26-.25-.7-.14-.84.2-.75 1.68-2.3 4.12-4.3 4.12-1.22.16-3.1-.9-1.59-6.11.14-.47-.36-.85-.74-.53C6.9 4.9 4 8.52 4 13.5c0 4.14 3.58 7.5 8 7.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFireMinimalistic;
