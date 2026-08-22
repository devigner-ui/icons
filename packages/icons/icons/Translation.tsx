import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTranslation = forwardRef<SVGSVGElement, IconProps>(
  function IconTranslation(
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
              d="M19.14 5a9.97 9.97 0 0 1-.06 14.06M5 19.14a9.97 9.97 0 0 1-.06-14.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.28 8.04A5.4 5.4 0 0 1 18 11.98c0 1.55-.67 2.96-1.75 3.98M7.8 16A5.4 5.4 0 0 1 6 11.98c0-1.55.67-2.96 1.76-3.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12.0004"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M5.47 4.4c.29.29.29.76 0 1.05a9.2 9.2 0 0 0 .06 13.16.75.75 0 0 1-1.06 1.07 10.7 10.7 0 0 1-.06-15.29c.29-.3.76-.3 1.06 0"
                fill="currentColor"
              />
              <path
                d="M18.62 4.46a.75.75 0 0 1 1.06.02 10.7 10.7 0 0 1-.07 15.11.75.75 0 1 1-1.06-1.06 9.2 9.2 0 0 0 .06-13 .75.75 0 0 1 0-1.07"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.3 7.49c.3.3.28.77-.03 1.06a4.7 4.7 0 0 0-1.52 3.43 4.7 4.7 0 0 0 1.56 3.47.75.75 0 1 1-1.02 1.1 6.2 6.2 0 0 1-2.04-4.57c0-1.78.77-3.38 2-4.53a.75.75 0 0 1 1.06.04"
                fill="currentColor"
              />
              <path
                d="M15.74 7.53a.75.75 0 0 1 1.06-.03 6.2 6.2 0 0 1 1.95 4.48c0 1.78-.77 3.38-1.99 4.52a.75.75 0 0 1-1.03-1.09 4.7 4.7 0 0 0 1.52-3.43c0-1.31-.56-2.5-1.48-3.4a.75.75 0 0 1-.03-1.05"
                fill="currentColor"
              />
            </g>
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
              d="M5.47 4.4c.29.29.29.76 0 1.05a9.2 9.2 0 0 0 .06 13.16.75.75 0 0 1-1.06 1.07 10.7 10.7 0 0 1-.06-15.29c.29-.3.76-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M18.62 4.46a.75.75 0 0 1 1.06.02 10.7 10.7 0 0 1-.07 15.11.75.75 0 1 1-1.06-1.06 9.2 9.2 0 0 0 .06-13 .75.75 0 0 1 0-1.07"
              fill="currentColor"
            />
            <path
              d="M8.3 7.49c.3.3.28.77-.03 1.06a4.7 4.7 0 0 0-1.52 3.43 4.7 4.7 0 0 0 1.56 3.47.75.75 0 0 1-1.02 1.1 6.2 6.2 0 0 1-2.04-4.57c0-1.78.77-3.38 2-4.53a.75.75 0 0 1 1.06.04"
              fill="currentColor"
            />
            <path
              d="M15.74 7.53a.75.75 0 0 1 1.06-.03 6.2 6.2 0 0 1 1.95 4.48c0 1.78-.77 3.38-1.99 4.52a.75.75 0 1 1-1.03-1.09 4.7 4.7 0 0 0 1.52-3.43c0-1.31-.56-2.5-1.48-3.4a.75.75 0 0 1-.03-1.05"
              fill="currentColor"
            />
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconTranslation;
