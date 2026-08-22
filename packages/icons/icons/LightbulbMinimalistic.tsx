import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLightbulbMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconLightbulbMinimalistic(
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
              d="M10 19.5h4M10.67 22h2.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m7.41 13.68 1.1 1.04q.48.47.49 1.12c0 .64.52 1.16 1.16 1.16h3.68c.64 0 1.16-.52 1.16-1.16 0-.42.18-.83.49-1.12l1.1-1.04A7.5 7.5 0 0 0 19 8.3v-.08C19 4.8 15.87 2 12 2S5 4.8 5 8.22v.08c0 2 .87 3.92 2.41 5.38"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m7.41 13.83 1.1 1.05q.48.46.49 1.14c0 .65.52 1.17 1.16 1.17h3.68c.64 0 1.16-.52 1.16-1.17 0-.43.18-.84.49-1.14l1.1-1.05A7.6 7.6 0 0 0 19 8.38V8.3C19 4.84 15.87 2 12 2S5 4.84 5 8.3v.08a7.6 7.6 0 0 0 2.41 5.45"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.25 18.7c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.76s-.34.76-.75.76h-4a.75.75 0 0 1-.75-.76m.67 2.54c0-.42.33-.76.75-.76h2.66c.42 0 .75.34.75.76s-.33.76-.75.76h-2.66a.75.75 0 0 1-.75-.76"
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
              d="M9.25 18.7c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.76s-.34.76-.75.76h-4a.75.75 0 0 1-.75-.76m.67 2.54c0-.42.33-.76.75-.76h2.66c.42 0 .75.34.75.76s-.33.76-.75.76h-2.66a.75.75 0 0 1-.75-.76"
              fill="currentColor"
            />
            <path
              d="m7.41 13.83 1.1 1.05q.48.46.49 1.14c0 .65.52 1.17 1.16 1.17h3.68c.64 0 1.16-.52 1.16-1.17 0-.43.18-.84.49-1.14l1.1-1.05A7.6 7.6 0 0 0 19 8.38V8.3C19 4.84 15.87 2 12 2S5 4.84 5 8.3v.08a7.6 7.6 0 0 0 2.41 5.45"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLightbulbMinimalistic;
