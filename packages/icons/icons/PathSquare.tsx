import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPathSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconPathSquare(
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
                d="m17.42 9.12-1.85-1.85c-.7-.7-1.66-.66-2.13.08l-1.03 1.63 3.29 3.29 1.63-1.03c.71-.44.75-1.47.09-2.12"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m12.4 8.98-2.38-.14c-1.34-.08-1.8.33-1.95 1.6l-.6 5.07c-.13 1.07.64 1.83 1.7 1.71l5.08-.6c1.27-.15 1.73-.61 1.6-1.95l-.14-2.39"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m8.16 16.52 1.85-1.85"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="m17.33 11.25-1.62 1.02-3.3-3.29 1.03-1.63c.47-.74 1.43-.78 2.13-.08l1.85 1.85c.66.65.62 1.68-.09 2.13"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14.25 16.62-5.07.6q-.33.05-.61-.04a1.4 1.4 0 0 1-1.06-1.06 1.4 1.4 0 0 1-.04-.61l.59-5.07c.16-1.27.62-1.68 1.96-1.6l2.39.14 3.3 3.29.14 2.4c.13 1.34-.33 1.8-1.6 1.95"
              fill="currentColor"
            />
            <path
              d="m10.55 15.2-1.98 1.98a1.4 1.4 0 0 1-1.06-1.06l1.97-1.98a.77.77 0 0 1 1.07 0c.29.29.29.77 0 1.06"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m.47 9.25-1.62 1.02.14 2.4c.13 1.34-.33 1.8-1.6 1.95l-5.07.6c-.28.04-.37-.28-.17-.48l1.54-1.54a.75.75 0 0 0 0-1.06.77.77 0 0 0-1.07 0l-1.54 1.54c-.2.2-.5.1-.47-.17l.59-5.07c.16-1.27.62-1.68 1.96-1.6l2.39.14 1.03-1.63c.47-.74 1.43-.78 2.13-.08l1.85 1.85c.66.65.62 1.68-.09 2.13"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPathSquare;
