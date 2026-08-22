import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentUpload = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentUpload(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.67 17v-6l-2 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m9.67 11 2 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22.67 10v5c0 5-2 7-7 7h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 10h-4c-3 0-4-1-4-4V2z"
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
              d="M21.17 10.19h-2.89a4.3 4.3 0 0 1-4.3-4.3V3a1 1 0 0 0-1-1H8.74C5.66 2 3.17 4 3.17 7.57v8.86C3.17 20 5.66 22 8.74 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24a1 1 0 0 0-1-1"
              fill="currentColor"
            />
            <path
              d="M16.47 2.21c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67l3.4.01c.57 0 .87-.67.47-1.07z"
              fill="currentColor"
            />
            <path
              d="m12.2 12.47-2-2-.02-.02-.22-.15h-.02l-.24-.05h-.08l-.19.04-.07.03-.22.15-2 2a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.72-.72V17c0 .41.34.75.75.75s.75-.34.75-.75v-4.19l.72.72q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
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
              d="M21.17 10.19h-2.89a4.3 4.3 0 0 1-4.3-4.3V3a1 1 0 0 0-1-1H8.74C5.66 2 3.17 4 3.17 7.57v8.86C3.17 20 5.66 22 8.74 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24a1 1 0 0 0-1-1m-8.97 3.34a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.72-.72V17c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4.19l-.72.72a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l2-2q.1-.09.22-.15l.07-.03.19-.04h.08q.12 0 .24.05h.02q.13.05.22.15l.02.02 2 2c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
            <path
              d="m18.1 8.81 3.4.01c.57 0 .87-.67.47-1.07l-5.5-5.54c-.41-.41-1.12-.13-1.12.44v3.49a2.73 2.73 0 0 0 2.75 2.67"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentUpload;
