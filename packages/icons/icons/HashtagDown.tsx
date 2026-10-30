import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHashtagDown = forwardRef<SVGSVGElement, IconProps>(
  function IconHashtagDown(
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
            d="M2 12.95V15c0 5 2 7 7 7h5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19 16v6l2-2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19 22-2-2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.95 6.26 8.9 15.73"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m13.11 6.26-1.05 9.47"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.53 9.42H16"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6 12.58h9.47"
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
              d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19 16v6l2-2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m19 22-2-2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.95 6.26 8.9 15.73"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m13.11 6.26-1.05 9.47"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.53 9.42H16"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12.58h9.47"
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
              d="M20.49 15.5h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m.22 3.31a.6.6 0 0 1-.44.18.6.6 0 0 1-.44-.18l-.18-.18v2.24c0 .35-.28.63-.63.63a.63.63 0 0 1-.63-.63v-2.24l-.18.18a.63.63 0 0 1-.88 0 .63.63 0 0 1 0-.88l1.25-1.25.19-.12.06-.02q.07-.03.16-.03h.06q.1 0 .2.04h.02q.1.05.18.12l.02.01 1.25 1.25c.24.24.24.64-.01.88"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.52 20.47v-2.94c0-1.27.76-2.03 2.03-2.03h2.94q.6 0 1.03.22V7.31c0-3.64-2.17-5.81-5.81-5.81H7.33c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.41a2 2 0 0 1-.22-1.03"
              fill="currentColor"
            />
            <path
              d="M15.52 9.67c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.41l.26-2.32a.75.75 0 0 0-.66-.83.76.76 0 0 0-.83.66l-.28 2.49H9.95l.26-2.32a.75.75 0 0 0-1.49-.17l-.28 2.49h-2.4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.23l-.18 1.66H5.52a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.41l-.26 2.32c-.05.41.25.78.66.83h.08c.38 0 .7-.28.74-.67l.28-2.49h1.65l-.26 2.32c-.05.41.25.78.66.83h.08c.38 0 .7-.28.74-.67l.28-2.49h2.4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.23l.18-1.66h2.59zm-4.27 1.66H9.6l.18-1.66h1.65z"
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
            <path d="M9.6 11.33h1.65l.19-1.66H9.79z" fill="currentColor" />
            <path
              d="M21.49 6.71c-.2-3.08-2.1-4.98-5.18-5.18l-.6-.03H7.33l-.6.03c-3.08.2-4.98 2.1-5.18 5.18l-.03.6v8.38l.03.6c.2 3.08 2.1 4.98 5.18 5.18l.6.03h5.69a1 1 0 0 0 1-1v-2.97A3.53 3.53 0 0 1 17.55 14h2.97a1 1 0 0 0 1-1V7.31zm-5.97 2.96h-2.57l-.19 1.66h2.23a.75.75 0 1 1 0 1.5H12.6l-.28 2.49a.76.76 0 0 1-.75.67l-.08-.01a.74.74 0 0 1-.66-.83l.26-2.32H9.44l-.28 2.49a.75.75 0 0 1-.74.67l-.09-.01a.74.74 0 0 1-.66-.83l.26-2.32H5.52a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.57l.19-1.66H6.05a.75.75 0 1 1 0-1.5h2.39l.28-2.49a.75.75 0 0 1 1.49.17l-.26 2.32h1.65l.28-2.49a.75.75 0 0 1 1.49.17l-.26 2.32h2.41c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M20.49 22.5h-2.94c-1.27 0-2.03-.76-2.03-2.03v-2.94c0-1.27.76-2.03 2.03-2.03h2.94c1.27 0 2.03.76 2.03 2.03v2.94c0 1.27-.76 2.03-2.03 2.03m.22-3.31a.6.6 0 0 0-.44-.18.6.6 0 0 0-.44.18l-.18.18v-2.24a.63.63 0 0 0-.63-.63.63.63 0 0 0-.63.63v2.24l-.18-.18a.63.63 0 0 0-.88 0 .63.63 0 0 0 0 .88l1.25 1.25q.08.08.19.12l.06.02q.07.03.16.03h.06q.1 0 .2-.04h.02l.18-.12.02-.01 1.25-1.25a.6.6 0 0 0-.01-.88"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHashtagDown;
