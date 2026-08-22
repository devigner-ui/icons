import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScreencast2 = forwardRef<SVGSVGElement, IconProps>(
  function IconScreencast2(
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
              d="M7.14 18.97C5.2 18.9 4 18.66 3.17 17.83 2 16.66 2 14.77 2 11s0-5.66 1.17-6.83S6.23 3 10 3h4c3.77 0 5.66 0 6.83 1.17S22 7.23 22 11s0 5.66-1.17 6.83c-.81.8-1.96 1.06-3.83 1.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9.95 16.05c.93-.93 1.4-1.4 1.97-1.43h.16c.57.03 1.04.5 1.97 1.43 2.03 2.03 3.04 3.04 2.76 3.91l-.1.22C16.3 21 14.86 21 12 21c-2.87 0-4.3 0-4.72-.82l-.09-.22c-.28-.87.73-1.88 2.76-3.9"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 3h-4C6.23 3 4.34 3 3.17 4.17S2 7.23 2 11s0 5.66 1.17 6.83S6.23 19 10 19h4c3.77 0 5.66 0 6.83-1.17S22 14.77 22 11s0-5.66-1.17-6.83S17.77 3 14 3"
              fill="currentColor"
            />
            <path
              d="M9.95 16.05c.93-.93 1.4-1.4 1.97-1.43h.16c.57.03 1.04.5 1.97 1.43 2.03 2.03 3.04 3.04 2.76 3.91l-.1.22C16.3 21 14.86 21 12 21c-2.87 0-4.3 0-4.72-.82l-.09-.22c-.28-.87.73-1.88 2.76-3.9"
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
              d="M9.95 16.05c.93-.93 1.4-1.4 1.97-1.43h.16c.57.03 1.04.5 1.97 1.43 2.03 2.03 3.04 3.04 2.76 3.91l-.1.22C16.3 21 14.86 21 12 21c-2.87 0-4.3 0-4.72-.82l-.09-.22c-.28-.87.73-1.88 2.76-3.9"
              fill="currentColor"
            />
            <path
              d="M14 3h-4C6.23 3 4.34 3 3.17 4.17S2 7.23 2 11s0 5.66 1.17 6.83q.36.36.83.59a6 6 0 0 0 1.77.45c.17-.53.47-.99.74-1.34.54-.7 1.35-1.52 2.3-2.46l.13-.13c.42-.42.83-.83 1.2-1.13a3 3 0 0 1 2.02-.68c.71.03 1.26.35 1.7.68q.56.47 1.2 1.13l.13.13c.94.94 1.76 1.76 2.3 2.46.27.35.57.81.74 1.34a6 6 0 0 0 1.77-.45q.47-.23.83-.6C22 16.67 22 14.78 22 11s0-5.66-1.17-6.83S17.77 3 14 3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconScreencast2;
