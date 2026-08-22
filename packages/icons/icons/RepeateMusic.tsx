import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRepeateMusic = forwardRef<SVGSVGElement, IconProps>(
  function IconRepeateMusic(
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
              d="m14.67 3 2.44 2.34-7.95-.02a6.53 6.53 0 0 0-4.59 11.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m10.67 21-2.44-2.34 7.95.02a6.53 6.53 0 0 0 4.59-11.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 12h6"
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
              d="M4.33 16.93a.7.7 0 0 1-.53-.22 7.27 7.27 0 0 1 5.12-12.4l6.07.02L13.9 3.3a.75.75 0 0 1-.02-1.06.75.75 0 0 1 1.06-.02l2.44 2.34c.22.21.29.54.18.82a.8.8 0 0 1-.7.47l-7.95-.02a5.77 5.77 0 0 0-4.06 9.84c.29.3.29.77 0 1.06a.7.7 0 0 1-.52.21"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.42 21.5a.8.8 0 0 1-.52-.2l-2.44-2.35a.8.8 0 0 1-.18-.82.8.8 0 0 1 .7-.47l7.95.02a5.77 5.77 0 0 0 4.06-9.84.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0 7.27 7.27 0 0 1-5.12 12.4l-6.07-.02 1.09 1.04c.3.3.31.76.02 1.06a.8.8 0 0 1-.55.24"
              fill="currentColor"
            />
            <path
              d="M9.67 15.5h6c1.93 0 3.5-1.58 3.5-3.5s-1.57-3.5-3.5-3.5h-6a3.5 3.5 0 0 0-3.5 3.5c0 1.92 1.57 3.5 3.5 3.5"
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
              d="M4.58 17.18a.7.7 0 0 1-.53-.22 7.27 7.27 0 0 1 5.12-12.4l6.07.02-1.09-1.04a.75.75 0 0 1-.02-1.06.75.75 0 0 1 1.06-.02l2.44 2.34c.22.21.29.54.18.82a.8.8 0 0 1-.7.47l-7.94-.02a5.77 5.77 0 0 0-4.06 9.84c.29.29.29.77 0 1.06a.8.8 0 0 1-.53.21"
              fill="currentColor"
            />
            <path
              d="M10.67 21.75a.8.8 0 0 1-.52-.21L7.71 19.2a.8.8 0 0 1-.18-.82.8.8 0 0 1 .7-.47l7.95.02a5.77 5.77 0 0 0 4.06-9.84.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0 7.27 7.27 0 0 1-5.12 12.4l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06a.8.8 0 0 1-.55.24"
              fill="currentColor"
            />
            <path
              d="M9.67 15.5h6c1.92 0 3.5-1.57 3.5-3.5 0-1.92-1.57-3.5-3.5-3.5h-6a3.5 3.5 0 0 0 0 7"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRepeateMusic;
