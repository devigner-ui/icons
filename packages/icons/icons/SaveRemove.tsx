import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSaveRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconSaveRemove(
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
            d="M2 20.35c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11H5.11A3.1 3.1 0 0 0 2 8.99v7.58"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m7.59 13.41 2.82-2.82"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m10.41 13.41-2.82-2.82"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11Z"
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
              d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19a1.8 1.8 0 0 0-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m7.59 13.41 2.82-2.82"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.41 13.41-2.82-2.82"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11"
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
              d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19a1.8 1.8 0 0 0-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11"
              fill="currentColor"
            />
            <path
              d="m10.06 12 .88-.88a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.88.88-.88-.88a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.88.88-.88.88a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l.88-.88.88.88q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06z"
              fill="currentColor"
            />
            <path
              d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11"
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
              d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36l-1.93-1.08a.5.5 0 0 1-.26-.44V8.99a4.6 4.6 0 0 0-4.61-4.61H8.82c-.37 0-.63-.39-.46-.71A3.1 3.1 0 0 1 11.11 2h7.78C20.6 2 22 3.4 22 5.11"
              fill="currentColor"
            />
            <path
              d="M12.89 5.88H5.11A3.1 3.1 0 0 0 2 8.99v11.36c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11m-1.95 7c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22L9 13.06l-.88.88a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.88-.88-.88-.88a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.88.88.88-.88a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.88.88z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSaveRemove;
