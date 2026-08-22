import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShareCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconShareCircle(
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
              d="M12 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M5.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 13a8 8 0 0 0-2.7-6M4 13a8 8 0 0 1 2.7-6M10 20.75a8 8 0 0 0 4 0"
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
                d="M7.2 7.56a.75.75 0 0 0-.99-1.12A8.7 8.7 0 0 0 3.25 13a.75.75 0 0 0 1.5 0c0-2.17.95-4.1 2.45-5.44"
                fill="currentColor"
              />
              <path
                d="M17.79 6.44a.75.75 0 0 0-1 1.12A7.2 7.2 0 0 1 19.26 13a.75.75 0 0 0 1.5 0 8.7 8.7 0 0 0-2.96-6.56"
                fill="currentColor"
              />
              <path
                d="M10.19 20.02a.75.75 0 1 0-.38 1.45 9 9 0 0 0 4.38 0 .75.75 0 1 0-.38-1.45 7 7 0 0 1-3.62 0"
                fill="currentColor"
              />
            </g>
            <path d="M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0" fill="currentColor" />
            <path d="M2.5 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0" fill="currentColor" />
            <path
              d="M18.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
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
            <path d="M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0" fill="currentColor" />
            <path d="M2.5 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0" fill="currentColor" />
            <path
              d="M18.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
              fill="currentColor"
            />
            <path
              d="M7.2 7.56a.75.75 0 0 0-.99-1.12A8.7 8.7 0 0 0 3.25 13a.75.75 0 0 0 1.5 0c0-2.17.95-4.1 2.45-5.44"
              fill="currentColor"
            />
            <path
              d="M17.79 6.44a.75.75 0 0 0-1 1.12A7.2 7.2 0 0 1 19.26 13a.75.75 0 0 0 1.5 0 8.7 8.7 0 0 0-2.96-6.56"
              fill="currentColor"
            />
            <path
              d="M10.19 20.02a.75.75 0 1 0-.38 1.45 9 9 0 0 0 4.38 0 .75.75 0 1 0-.38-1.45 7 7 0 0 1-3.62 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShareCircle;
