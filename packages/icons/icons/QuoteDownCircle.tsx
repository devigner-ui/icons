import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconQuoteDownCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconQuoteDownCircle(
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
                d="M7.67 12.16h2.68c.71 0 1.2.54 1.2 1.19v1.49c0 .65-.49 1.19-1.2 1.19H8.86a1.2 1.2 0 0 1-1.19-1.19z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.67 12.16c0-2.79.52-3.26 2.1-4.19"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.81 12.16h2.68c.71 0 1.2.54 1.2 1.19v1.49c0 .65-.49 1.19-1.2 1.19H15a1.2 1.2 0 0 1-1.19-1.19z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.81 12.16c0-2.79.52-3.26 2.1-4.19"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M8.86 16.78h1.5c1.08 0 1.93-.85 1.93-1.94v-1.49c0-1.09-.85-1.94-1.94-1.94h-1.9c.07-1.81.5-2.08 1.7-2.79a.75.75 0 0 0 .26-1.03.8.8 0 0 0-.65-.37 1 1 0 0 0-.38.1C7.6 8.38 6.92 9.07 6.92 12.15v2.67c0 1.09.87 1.96 1.94 1.96"
              fill="currentColor"
            />
            <path
              d="M15 16.78h1.48c1.1 0 1.94-.85 1.94-1.94v-1.49c0-1.09-.85-1.94-1.94-1.94h-1.9c.07-1.81.5-2.08 1.7-2.79a.75.75 0 0 0 .26-1.03.8.8 0 0 0-.65-.37 1 1 0 0 0-.38.1c-1.79 1.06-2.46 1.75-2.46 4.83v2.67A1.96 1.96 0 0 0 15 16.78"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-.39 12.84c0 1.09-.85 1.94-1.94 1.94H8.86a1.94 1.94 0 0 1-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83q.18-.1.38-.1c.26 0 .51.13.65.37.21.36.1.82-.26 1.03-1.2.7-1.63.96-1.7 2.77h1.9c1.1 0 1.94.85 1.94 1.94v1.49m6.14 0c0 1.09-.85 1.94-1.94 1.94H15a1.94 1.94 0 0 1-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83q.18-.1.38-.1c.26 0 .51.13.65.37.21.36.1.82-.26 1.03-1.2.72-1.63.98-1.7 2.79h1.9c1.1 0 1.94.85 1.94 1.94z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconQuoteDownCircle;
