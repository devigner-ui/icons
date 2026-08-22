import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignBottom2 = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignBottom2(
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
              d="M19.93 18.9V7.1c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v11.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.93 18.9v-6.8c0-1.5.64-2.1 2.23-2.1H9.2c1.59 0 2.23.6 2.23 2.1v6.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 19h20"
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
              d="M8.69 4.62H7.65c-1.59 0-2.23.6-2.23 2.12v11.88h5.5V6.74c-.01-1.52-.65-2.12-2.23-2.12"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.19 9.62h-1.04c-1.59 0-2.23.61-2.23 2.12v6.88h5.5v-6.88c0-1.51-.65-2.12-2.23-2.12"
              fill="currentColor"
            />
            <path
              d="M3.42 17.88h18.5c.41 0 .75.34.75.75s-.34.75-.75.75H3.42a.76.76 0 0 1-.75-.76c0-.42.34-.74.75-.74"
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
              d="M8.69 4.62H7.65c-1.59 0-2.23.6-2.23 2.12v11.88h5.5V6.74c-.01-1.52-.65-2.12-2.23-2.12"
              fill="currentColor"
            />
            <path
              d="M17.19 9.62h-1.04c-1.59 0-2.23.61-2.23 2.12v6.88h5.5v-6.88c0-1.51-.65-2.12-2.23-2.12"
              fill="currentColor"
            />
            <path
              d="M3.42 17.88h18.5c.41 0 .75.34.75.75s-.34.75-.75.75H3.42a.76.76 0 0 1-.75-.76c0-.42.34-.74.75-.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignBottom2;
