import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentNormal = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentNormal(
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
              d="M10.67 6h4c2 0 2-1 2-2 0-2-1-2-2-2h-4c-1 0-2 0-2 2s1 2 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6h-6c-5 0-6-2-6-6v-6c0-4.56 1.67-5.8 5-5.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M16.91 3.65H8.43a4.47 4.47 0 0 0-4.47 4.47v9.41A4.5 4.5 0 0 0 8.43 22h8.47a4.47 4.47 0 0 0 4.47-4.47V8.12c.01-2.47-2-4.47-4.46-4.47"
              fill="currentColor"
            />
            <path
              d="M15.02 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94A1.87 1.87 0 0 0 15.02 2"
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
              d="M21.38 8.12v9.41A4.5 4.5 0 0 1 16.91 22H8.43a4.5 4.5 0 0 1-4.47-4.47V8.12c0-1.71.96-3.2 2.37-3.95a.75.75 0 0 1 1.1.65 2.9 2.9 0 0 0 2.89 2.89h4.7a2.9 2.9 0 0 0 2.89-2.89c0-.56.6-.91 1.1-.65a4.5 4.5 0 0 1 2.37 3.95"
              fill="currentColor"
            />
            <path
              d="M15.02 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94A1.87 1.87 0 0 0 15.02 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentNormal;
