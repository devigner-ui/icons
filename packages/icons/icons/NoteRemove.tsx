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
        {variant === "Broken" ? (
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
            d="M7 14h5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 5.96 3.25 2.21"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.96 2.25 3.21 6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 10h8"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21 12v4"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 2h6c3.33.18 5 1.41 5 5.99"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M3 9.01v6.97C3 19.99 4 22 9 22h6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m21 16-6 6v-3q0-3 3-3z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M7 14h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M7 5.96 3.25 2.21"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.96 2.25 3.21 6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 10h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 2h6c3.33.18 5 1.41 5 5.99V16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 9.01v6.97C3 19.99 4 22 9 22h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21 16-6 6v-3q0-3 3-3z"
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
              d="M6.64 1.5H3.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.53c0-1.27-.76-2.03-2.03-2.03m.5 4.56c.25.25.25.66 0 .91a.66.66 0 0 1-.91 0L5.16 5.91 4.12 6.97a.67.67 0 0 1-.92 0 .65.65 0 0 1 0-.91L4.27 5 3.21 3.95a.65.65 0 0 1 0-.91.65.65 0 0 1 .91 0L5.16 4.1l1.06-1.06a.65.65 0 0 1 .91 0c.25.25.25.66 0 .91L6.08 5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.3 2.5H8.45q.22.43.22 1.03v2.94c0 1.27-.76 2.03-2.03 2.03H3.7q-.28 0-.53-.06v9.19a4.87 4.87 0 0 0 4.87 4.87h7.97q.27 0 .47-.2l5.51-5.55a.6.6 0 0 0 .18-.43V7.37A4.87 4.87 0 0 0 17.3 2.5"
              fill="currentColor"
            />
            <path
              d="M22.17 16.32q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
              fill="currentColor"
            />
            <path
              d="M15.45 13.21H8.03a.75.75 0 1 1 0-1.5h7.42a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M12.67 16.92H8.03a.75.75 0 1 1 0-1.5h4.64a.75.75 0 1 1 0 1.5"
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
              d="M6.64 1.5H3.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.53c0-1.27-.76-2.03-2.03-2.03m.5 4.56c.25.25.25.66 0 .91a.66.66 0 0 1-.91 0L5.16 5.91 4.12 6.97a.67.67 0 0 1-.92 0 .65.65 0 0 1 0-.91L4.27 5 3.21 3.95a.65.65 0 0 1 0-.91.65.65 0 0 1 .91 0L5.16 4.1l1.06-1.06a.65.65 0 0 1 .91 0c.25.25.25.66 0 .91L6.08 5z"
              fill="currentColor"
            />
            <path
              d="M22.17 16.32q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
              fill="currentColor"
            />
            <path
              d="M22.17 16.32q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
              fill="currentColor"
            />
            <path
              d="M17.3 2.5h-6.13a1 1 0 0 0-1 1V7a3 3 0 0 1-3 3h-3a1 1 0 0 0-1 1v6.63a4.87 4.87 0 0 0 4.87 4.87h4.82a1 1 0 0 0 1-1v-3.14c0-2.3 1.91-4.17 4.26-4.17l3.05-.01a1 1 0 0 0 1-1V7.37A4.87 4.87 0 0 0 17.3 2.5M9.39 17.51H6.75a.76.76 0 0 1 0-1.51h2.64c.43 0 .75.34.75.76 0 .41-.32.75-.75.75m2.79-3.71H6.75a.76.76 0 0 1 0-1.51h5.43c.41 0 .76.34.76.76 0 .41-.35.75-.76.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNoteRemove;
