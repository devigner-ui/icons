import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagniferZoomIn = forwardRef<SVGSVGElement, IconProps>(
  function IconMagniferZoomIn(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="11.5"
              cy="11.5005"
              r="9.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18.5 18.5 22 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.16 20.31a9.16 9.16 0 1 0 0-18.31 9.16 9.16 0 0 0 0 18.31"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.16 8.02c.4 0 .72.33.72.73v1.68h1.69a.72.72 0 0 1 0 1.45h-1.7v1.69a.72.72 0 1 1-1.44 0v-1.69H8.75a.72.72 0 1 1 0-1.45h1.68V8.75c0-.4.33-.73.73-.73"
              fill="currentColor"
            />
            <path
              d="m17.1 18.12 3.67 3.67a.72.72 0 0 0 1.02-1.02l-3.67-3.67q-.46.55-1.02 1.02"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.79 21.79a.7.7 0 0 0 0-1.02l-3.67-3.67a9.16 9.16 0 1 0-1.02 1.02l3.67 3.67c.28.28.74.28 1.02 0M11.16 8.02c.4 0 .72.33.72.73v1.68h1.69a.72.72 0 0 1 0 1.45h-1.7v1.69a.72.72 0 0 1-1.44 0v-1.69H8.75a.72.72 0 1 1 0-1.45h1.68V8.75c0-.4.33-.73.73-.73"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagniferZoomIn;
