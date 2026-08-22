import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGrammerly = forwardRef<SVGSVGElement, IconProps>(
  function IconGrammerly(
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
              d="M19.74 4.95a10 10 0 0 1-.2 14.34 10.1 10.1 0 0 1-13.74 0A10 10 0 1 1 19.74 4.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.51 16.07c-2.12 2-5.56 2-7.67 0"
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
              d="M19.74 4.95a10 10 0 0 1-.2 14.34 10.1 10.1 0 0 1-13.74 0A10 10 0 1 1 19.74 4.95"
              fill="currentColor"
            />
            <path
              d="M12.67 18.32a6.3 6.3 0 0 1-4.35-1.7.75.75 0 0 1-.03-1.06.75.75 0 0 1 1.06-.03 4.9 4.9 0 0 0 6.64 0 .75.75 0 0 1 1.06.03c.28.3.27.78-.03 1.06a6.3 6.3 0 0 1-4.35 1.7"
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
              d="M19.78 4.96A10.03 10.03 0 1 0 5.81 19.33a10.14 10.14 0 0 0 13.76 0 10 10 0 0 0 .21-14.37m-2.73 11.69a6.3 6.3 0 0 1-4.36 1.71 6.3 6.3 0 0 1-4.36-1.71.75.75 0 0 1-.03-1.06.75.75 0 0 1 1.06-.03 4.9 4.9 0 0 0 6.66 0 .75.75 0 0 1 1.06.03c.29.3.27.77-.03 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGrammerly;
