import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaperclipRounded2 = forwardRef<SVGSVGElement, IconProps>(
  function IconPaperclipRounded2(
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
              d="m12.95 11-2.94 2.94a4.13 4.13 0 0 0 0 5.85 4.17 4.17 0 0 0 5.88 0l3.67-3.66a8.25 8.25 0 0 0 0-11.7 8.34 8.34 0 0 0-11.75 0L4.13 8.07a7.2 7.2 0 0 0 0 10.24"
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
              d="M3.46 3.46C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54"
              fill="currentColor"
            />
            <path
              d="M8.96 6.86a5.9 5.9 0 0 1 8.1 0 5.4 5.4 0 0 1 0 7.86l-2.2 2.12a3.3 3.3 0 0 1-4.57 0 3.1 3.1 0 0 1 0-4.47l1.76-1.7a.75.75 0 0 1 1.04 1.09l-1.76 1.7a1.6 1.6 0 0 0 0 2.3c.68.65 1.8.65 2.48 0l2.2-2.12a3.9 3.9 0 0 0 0-5.7 4.4 4.4 0 0 0-6 0L7.8 10.06a3.33 3.33 0 0 0 0 4.85A.75.75 0 1 1 6.76 16a4.83 4.83 0 0 1 0-7z"
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
              d="M12 2C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2M8.96 6.86a5.9 5.9 0 0 1 8.1 0 5.4 5.4 0 0 1 0 7.86l-2.2 2.12a3.3 3.3 0 0 1-4.57 0 3.1 3.1 0 0 1 0-4.47l1.76-1.7a.75.75 0 0 1 1.04 1.09l-1.76 1.7a1.6 1.6 0 0 0 0 2.3c.68.65 1.8.65 2.48 0l2.2-2.12a3.9 3.9 0 0 0 0-5.7 4.4 4.4 0 0 0-6 0L7.8 10.06a3.33 3.33 0 0 0 0 4.85A.75.75 0 1 1 6.76 16a4.83 4.83 0 0 1 0-7z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPaperclipRounded2;
