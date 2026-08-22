import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPostsCarouselHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconPostsCarouselHorizontal(
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
              d="M12.5 5c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v6c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-1c-1.89 0-2.83 0-3.41-.59-.59-.58-.59-1.52-.59-3.41V9c0-1.89 0-2.83.59-3.41C8.67 5 9.6 5 11.5 5z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2"
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
                d="M5.5 16V8a3 3 0 0 0-3-3 .5.5 0 0 0-.5.5v13c0 .28.22.5.5.5a3 3 0 0 0 3-3"
                fill="currentColor"
              />
              <path
                d="M18.5 8v8a3 3 0 0 0 3 3 .5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5 3 3 0 0 0-3 3"
                fill="currentColor"
              />
            </g>
            <path
              d="M11.5 19c-1.89 0-2.83 0-3.41-.59-.59-.58-.59-1.52-.59-3.41V9c0-1.89 0-2.83.59-3.41C8.67 5 9.6 5 11.5 5h1c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v6c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59z"
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
              d="M5.5 16V8a3 3 0 0 0-3-3 .5.5 0 0 0-.5.5v13c0 .28.22.5.5.5a3 3 0 0 0 3-3"
              fill="currentColor"
            />
            <path
              d="M12.5 5c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v6c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-1c-1.89 0-2.83 0-3.41-.59-.59-.58-.59-1.52-.59-3.41V9c0-1.89 0-2.83.59-3.41C8.67 5 9.6 5 11.5 5z"
              fill="currentColor"
            />
            <path
              d="M18.5 8v8a3 3 0 0 0 3 3 .5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5 3 3 0 0 0-3 3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPostsCarouselHorizontal;
