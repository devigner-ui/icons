import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRepeatCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconRepeatCircle(
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
                d="M8.17 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.86 6.66 8.17 8.34l1.69 1.69"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.17 15.66h-7.4a1.6 1.6 0 0 1-1.6-1.6v-1.77"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.48 17.34 1.69-1.68-1.69-1.69"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M15.57 7.59H9.98l.41-.41a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L7.64 7.81a1 1 0 0 0-.16.24.7.7 0 0 0 0 .57q.06.13.16.24l1.69 1.69q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-.41-.41h5.59c.47 0 .85.38.85.85v1.77c0 .41.34.75.75.75s.75-.34.75-.75V9.93a2.36 2.36 0 0 0-2.35-2.34"
              fill="currentColor"
            />
            <path
              d="M17.86 15.37a1 1 0 0 0-.16-.24l-1.69-1.69a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.41.41H9.77a.85.85 0 0 1-.85-.85v-1.77a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.77c0 1.3 1.06 2.35 2.35 2.35h5.59l-.41.41a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l1.69-1.69a1 1 0 0 0 .16-.24.7.7 0 0 0 0-.58"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m5.19 13.94a1 1 0 0 1-.16.24l-1.69 1.69a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.41-.41H9.77a2.35 2.35 0 0 1-2.35-2.35v-1.77c0-.41.34-.75.75-.75s.75.34.75.75v1.77c0 .47.38.85.85.85h5.59l-.41-.41a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.69 1.69q.1.1.16.24.12.3 0 .58m.06-4.22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9.95a.85.85 0 0 0-.85-.85H9.98l.41.4c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22L7.64 8.87a1 1 0 0 1-.16-.24.7.7 0 0 1 0-.57 1 1 0 0 1 .16-.25l1.69-1.69a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.41.41h5.59c1.3 0 2.35 1.06 2.35 2.35z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRepeatCircle;
