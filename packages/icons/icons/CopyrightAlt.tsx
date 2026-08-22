import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCopyrightAlt = forwardRef<SVGSVGElement, IconProps>(
  function IconCopyrightAlt(
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
              d="M12.67 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.55 15a4 4 0 1 1 0-6"
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
              d="M12.67 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20"
              fill="currentColor"
            />
            <path
              d="M12.91 16.75a4.75 4.75 0 1 1 3.13-8.31c.31.27.34.75.07 1.06a.76.76 0 0 1-1.06.07 3.24 3.24 0 0 0-5.39 2.44 3.26 3.26 0 0 0 5.39 2.44.76.76 0 0 1 1.06.07c.27.31.24.79-.07 1.06a4.8 4.8 0 0 1-3.13 1.17"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m.24 13.25c.78 0 1.55-.29 2.14-.81a.76.76 0 0 1 1.06.07c.27.31.24.79-.07 1.06a4.75 4.75 0 1 1 0-7.12c.31.27.34.75.07 1.06a.76.76 0 0 1-1.06.07 3.24 3.24 0 1 0-2.14 5.67"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCopyrightAlt;
