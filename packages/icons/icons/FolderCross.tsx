import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderCross = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderCross(
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
                d="m14.48 15.73-3.54-3.54"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m14.44 12.23-3.54 3.54"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22.67 11v6c0 4-1 5-5 5h-10c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M22.54 9.44H2.8V6.42A4.4 4.4 0 0 1 7.22 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79a5.3 5.3 0 0 1 5.08 3.71"
              fill="currentColor"
            />
            <path
              d="M22.66 10.84q-.03-.72-.25-1.4H2.67v7.21c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58zm-7.65 6.94a.8.8 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.24-1.24-1.28 1.28a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.28-1.28-1.24-1.24a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.24 1.24 1.2-1.2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-1.2 1.2 1.24 1.24c.29.29.29.77 0 1.06"
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
              d="M21.69 8c.4.56-.08 1.25-.77 1.25H3.67a1 1 0 0 1-1-1V6.42A4.4 4.4 0 0 1 7.09 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c1.8 0 3.4.9 4.37 2.27"
              fill="currentColor"
            />
            <path
              d="M22.65 11.75a1 1 0 0 0-1-1H3.67a1 1 0 0 0-1 1v4.9c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35zm-7.64 6.53a.8.8 0 0 1-.53.22.8.8 0 0 1-.53-.22l-1.24-1.24-1.28 1.28a.8.8 0 0 1-.53.22.8.8 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.28-1.28-1.24-1.24a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.24 1.24 1.2-1.2a.75.75 0 0 1 1.06 0c.29.3.29.77 0 1.06l-1.2 1.2 1.24 1.24c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderCross;
