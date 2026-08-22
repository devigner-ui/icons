import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNoteRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconNoteRemove(
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
              d="M7.67 14h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M7.67 5.96 3.92 2.21"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.63 2.25 3.88 6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 10h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.67 2h6c3.33.18 5 1.41 5 5.99V16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.67 9.01v6.97c0 4.01 1 6.02 6 6.02h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21.67 16-6 6v-3q0-3 3-3z"
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
              d="M6.64 1H3.7c-1.27 0-2.03.76-2.03 2.03v2.94C1.67 7.24 2.43 8 3.7 8h2.94c1.27 0 2.03-.76 2.03-2.03V3.03C8.67 1.76 7.91 1 6.64 1m.5 4.56c.25.25.25.66 0 .91a.66.66 0 0 1-.91 0L5.16 5.41 4.12 6.47a.67.67 0 0 1-.92 0 .65.65 0 0 1 0-.91L4.27 4.5 3.21 3.45a.65.65 0 0 1 0-.91.65.65 0 0 1 .91 0L5.16 3.6l1.06-1.06a.65.65 0 0 1 .91 0c.25.25.25.66 0 .91L6.08 4.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.3 2H8.45q.22.43.22 1.03v2.94C8.67 7.24 7.91 8 6.64 8H3.7q-.28 0-.53-.06v9.19A4.87 4.87 0 0 0 8.04 22h7.97q.27 0 .47-.2l5.51-5.55a.6.6 0 0 0 .18-.43V6.87A4.87 4.87 0 0 0 17.3 2"
              fill="currentColor"
            />
            <path
              d="M22.17 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
              fill="currentColor"
            />
            <path
              d="M15.45 12.71H8.03a.75.75 0 1 1 0-1.5h7.42a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M12.67 16.42H8.03a.75.75 0 1 1 0-1.5h4.64a.75.75 0 1 1 0 1.5"
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
              d="M6.64 1H3.7c-1.27 0-2.03.76-2.03 2.03v2.94C1.67 7.24 2.43 8 3.7 8h2.94c1.27 0 2.03-.76 2.03-2.03V3.03C8.67 1.76 7.91 1 6.64 1m.5 4.56c.25.25.25.66 0 .91a.66.66 0 0 1-.91 0L5.16 5.41 4.12 6.47a.67.67 0 0 1-.92 0 .65.65 0 0 1 0-.91L4.27 4.5 3.21 3.45a.65.65 0 0 1 0-.91.65.65 0 0 1 .91 0L5.16 3.6l1.06-1.06a.65.65 0 0 1 .91 0c.25.25.25.66 0 .91L6.08 4.5z"
              fill="currentColor"
            />
            <path
              d="M22.17 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
              fill="currentColor"
            />
            <path
              d="M22.17 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
              fill="currentColor"
            />
            <path
              d="M17.3 2h-6.13a1 1 0 0 0-1 1v3.5a3 3 0 0 1-3 3h-3a1 1 0 0 0-1 1v6.63A4.87 4.87 0 0 0 8.04 22h4.82a1 1 0 0 0 1-1v-3.14c0-2.3 1.91-4.17 4.26-4.17l3.05-.01a1 1 0 0 0 1-1V6.87A4.87 4.87 0 0 0 17.3 2M9.39 17.01H6.75a.76.76 0 0 1 0-1.51h2.64c.43 0 .75.34.75.76 0 .41-.32.75-.75.75m2.79-3.71H6.75a.76.76 0 0 1 0-1.51h5.43c.41 0 .76.34.76.76 0 .41-.35.75-.76.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNoteRemove;
