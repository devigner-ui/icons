import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLampCharge = forwardRef<SVGSVGElement, IconProps>(
  function IconLampCharge(
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
              d="M12.67 7.89 11.6 9.75c-.24.41-.04.75.43.75h1.27c.48 0 .67.34.43.75l-1.06 1.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.97 18.04v-1.16c-2.3-1.39-4.19-4.1-4.19-6.98a7.92 7.92 0 0 1 14.96-3.64c2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.93c-1.1.01-.96-.42-.96-.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.17 22a13 13 0 0 1 7 0"
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
              d="M19.88 6.36a8.08 8.08 0 0 0-15.24 3.69c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06s.87.4 1.28.4h5.13q.81 0 1.23-.43c.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56"
              fill="currentColor"
            />
            <path
              d="m15.93 22-.19-.03a11 11 0 0 0-6.13 0 .7.7 0 0 1-.86-.48.7.7 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0a.7.7 0 0 1 .48.86.7.7 0 0 1-.68.51"
              fill="currentColor"
            />
            <path
              d="M12.67 13.85a.75.75 0 0 1-.65-1.12l.85-1.48h-.84c-.5 0-.91-.22-1.13-.59-.22-.38-.2-.84.05-1.28l1.07-1.86a.75.75 0 0 1 1.02-.28c.36.21.48.67.28 1.02l-.85 1.49h.84c.5 0 .91.22 1.13.59.22.38.2.84-.05 1.28l-1.07 1.86a.8.8 0 0 1-.65.37"
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
              d="m15.93 22-.19-.03a11 11 0 0 0-6.13 0 .7.7 0 0 1-.86-.48.7.7 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0a.7.7 0 0 1 .48.86.7.7 0 0 1-.68.51"
              fill="currentColor"
            />
            <path
              d="M19.88 6.36a8.08 8.08 0 0 0-15.24 3.69c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06s.87.4 1.28.4h5.13q.81 0 1.23-.43c.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56m-5.49 5.26-1.07 1.86a.8.8 0 0 1-.65.38.75.75 0 0 1-.65-1.12l.85-1.48h-.84c-.5 0-.91-.22-1.13-.59-.22-.38-.2-.84.05-1.28l1.07-1.86a.75.75 0 0 1 1.02-.28c.36.21.48.67.28 1.02l-.85 1.48h.84c.5 0 .91.22 1.13.59.22.38.2.85-.05 1.28"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLampCharge;
