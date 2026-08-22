import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconElectricity = forwardRef<SVGSVGElement, IconProps>(
  function IconElectricity(
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
              d="M11.17 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H9.09c-1.05 0-1.91.86-1.91 1.91V12c-.01 2.2 1.49 4 3.99 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.17 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.17 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22v-6"
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
              d="M11.17 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H9.09c-1.05 0-1.91.86-1.91 1.91V12c-.01 2.2 1.49 4 3.99 4"
              fill="currentColor"
            />
            <path
              d="M10.92 2v3h-1.5V2c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M15.92 2v3h-1.5V2c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M13.42 16v6c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-6z"
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
              d="M16.26 5h-.34V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v3h-3.5V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v3h-.34c-1.05 0-1.91.86-1.91 1.91V12c0 2.2 1.5 4 4 4h.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-6h.75c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconElectricity;
