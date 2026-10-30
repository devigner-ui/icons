import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardReceive = forwardRef<SVGSVGElement, IconProps>(
  function IconCardReceive(
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
            d="M2 8.5h12.5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6 16.5h2"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.5 16.5h4"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 11.06V7.89c0-3.51.89-4.39 4.44-4.39h8.06"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.08"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20 3.5v6l2-2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m20 9.5-2-2"
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
              d="M2 8.5h12.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 16.5h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 16.5h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h8.06"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M20 3.5v6l2-2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m20 9.5-2-2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M20.49 9.2h-2.94c-1.27 0-2.03-.76-2.03-2.03V4.23c0-1.27.76-2.03 2.03-2.03h2.94c1.27 0 2.03.76 2.03 2.03v2.94c0 1.27-.76 2.03-2.03 2.03m.22-3.31a.6.6 0 0 0-.44-.18.6.6 0 0 0-.44.18l-.18.18V3.83a.63.63 0 0 0-.63-.63.63.63 0 0 0-.63.63v2.24l-.18-.18a.63.63 0 0 0-.88 0 .63.63 0 0 0 0 .88l1.25 1.25q.08.07.19.12l.06.02q.07.03.16.03h.06q.1 0 .2-.04h.02l.18-.12.02-.01 1.25-1.25a.6.6 0 0 0-.01-.88"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.52 8.97v1.23h-20V8.74A4.14 4.14 0 0 1 5.67 4.6h9.85v2.57c0 1.27.76 2.03 2.03 2.03h2.94q.6 0 1.03-.23"
              fill="currentColor"
            />
            <path
              d="M1.52 10.2v7.46a4.14 4.14 0 0 0 4.15 4.14h11.7a4.14 4.14 0 0 0 4.15-4.14V10.2zm6 8.25h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 0h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M19.97 9.6h-2.94C15.76 9.6 15 8.84 15 7.57V4.63c0-1.27.76-2.03 2.03-2.03h2.94c1.27 0 2.03.76 2.03 2.03v2.94c0 1.27-.76 2.03-2.03 2.03m.22-3.31a.6.6 0 0 0-.44-.18.6.6 0 0 0-.44.18l-.18.18V4.23a.63.63 0 0 0-.63-.63.63.63 0 0 0-.63.63v2.24l-.18-.18a.63.63 0 0 0-.88 0 .63.63 0 0 0 0 .88l1.25 1.25q.08.07.2.12l.05.02q.07.03.16.03h.06q.1 0 .2-.04h.02l.18-.12.02-.01 1.25-1.25a.6.6 0 0 0 0-.88"
              fill="currentColor"
            />
            <path
              d="M2 12.31v5a4.14 4.14 0 0 0 4.14 4.14h11.71A4.15 4.15 0 0 0 22 17.3v-4.99a1.2 1.2 0 0 0-1.2-1.21H3.2A1.2 1.2 0 0 0 2 12.31m6 5.79H6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 0h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M13.5 5.46v2.93a1.2 1.2 0 0 1-1.2 1.21H3.2C2.52 9.6 2 9.04 2 8.37a4.15 4.15 0 0 1 4.13-4.12h6.15c.67 0 1.21.54 1.21 1.21"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCardReceive;
