import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPostsCarouselVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconPostsCarouselVertical(
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
              d="M5 11.5c0-1.89 0-2.83.59-3.41C6.17 7.5 7.1 7.5 9 7.5h6c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v1c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59C5 15.33 5 14.4 5 12.5z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 22v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5"
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
                d="M8 5.5h8a3 3 0 0 0 3-3 .5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5 3 3 0 0 0 3 3"
                fill="currentColor"
              />
              <path
                d="M16 18.5H8a3 3 0 0 0-3 3c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3"
                fill="currentColor"
              />
            </g>
            <path
              d="M5 11.5c0-1.89 0-2.83.59-3.41C6.17 7.5 7.1 7.5 9 7.5h6c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v1c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59C5 15.33 5 14.4 5 12.5z"
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
              d="M8 5.5h8a3 3 0 0 0 3-3 .5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5 3 3 0 0 0 3 3"
              fill="currentColor"
            />
            <path
              d="M5 11.5c0-1.89 0-2.83.59-3.41C6.17 7.5 7.1 7.5 9 7.5h6c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v1c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59C5 15.33 5 14.4 5 12.5z"
              fill="currentColor"
            />
            <path
              d="M16 18.5H8a3 3 0 0 0-3 3c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPostsCarouselVertical;
