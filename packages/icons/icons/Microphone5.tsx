import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMicrophone5 = forwardRef<SVGSVGElement, IconProps>(
  function IconMicrophone5(
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
              d="M12.67 15.5a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5.5a4 4 0 0 0 4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.28 6.43c.9-.33 1.88-.33 2.78 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.87 8.55a3 3 0 0 1 1.61 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M5.02 9.65v1.7a7.66 7.66 0 0 0 15.3 0v-1.7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 19v3"
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
              opacity={duotone ? "0.4" : "1"}
              d="M19.79 9.12a.7.7 0 0 0-.7.7v1.58a6.43 6.43 0 0 1-12.84 0V9.81a.7.7 0 0 0-.7-.7.7.7 0 0 0-.7.7v1.58a7.83 7.83 0 0 0 7.12 7.78v2.13c0 .39.31.7.7.7a.7.7 0 0 0 .7-.7v-2.13a7.83 7.83 0 0 0 7.12-7.78V9.81a.7.7 0 0 0-.7-.69"
              fill="currentColor"
            />
            <path
              d="M12.67 2a4.4 4.4 0 0 0-4.42 4.42v5.12a4.42 4.42 0 0 0 8.84 0V6.42A4.4 4.4 0 0 0 12.67 2m1.31 6.95a.6.6 0 0 1-.56.43l-.15-.02q-.6-.16-1.19 0a.57.57 0 0 1-.71-.41.57.57 0 0 1 .41-.71 3.4 3.4 0 0 1 1.8 0c.3.08.48.4.4.71m.53-1.94a.6.6 0 0 1-.55.38l-.2-.03a3 3 0 0 0-2.18 0 .6.6 0 0 1-.75-.35.6.6 0 0 1 .35-.74 4.4 4.4 0 0 1 2.98 0c.3.11.46.44.35.74"
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
              d="M19.79 9.12a.7.7 0 0 0-.7.7v1.58a6.43 6.43 0 0 1-12.84 0V9.81a.7.7 0 0 0-.7-.7.7.7 0 0 0-.7.7v1.58a7.83 7.83 0 0 0 7.12 7.78v2.13c0 .39.31.7.7.7a.7.7 0 0 0 .7-.7v-2.13a7.83 7.83 0 0 0 7.12-7.78V9.81a.7.7 0 0 0-.7-.69"
              fill="currentColor"
            />
            <path
              d="M12.67 2a4.4 4.4 0 0 0-4.42 4.42v5.12a4.42 4.42 0 0 0 8.84 0V6.42A4.4 4.4 0 0 0 12.67 2m1.31 6.95a.6.6 0 0 1-.56.43l-.15-.02q-.6-.16-1.19 0a.57.57 0 0 1-.71-.41.57.57 0 0 1 .41-.71 3.4 3.4 0 0 1 1.8 0c.3.08.48.4.4.71m.53-1.94a.6.6 0 0 1-.55.38l-.2-.03a3 3 0 0 0-2.18 0 .6.6 0 0 1-.75-.35.6.6 0 0 1 .35-.74 4.4 4.4 0 0 1 2.98 0c.3.11.46.44.35.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMicrophone5;
