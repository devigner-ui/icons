import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMapArrowRight = forwardRef<SVGSVGElement, IconProps>(
  function IconMapArrowRight(
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
              d="M5.53 12q0-.38-.19-.73L2.2 5.37c-.74-1.4.81-2.87 2.3-2.2l16.52 7.36c.66.3.99.88.99 1.47"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.53 12q0 .38-.19.73l-3.15 5.9c-.74 1.4.81 2.87 2.3 2.2l16.52-7.36c.66-.3.99-.88.99-1.47"
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
              d="M14.14 15.96a.5.5 0 0 1-.24.68l-9.4 4.2c-1.5.66-3.05-.82-2.3-2.2l3.14-5.91c.25-.46.25-1 0-1.46L2.2 5.37c-.74-1.4.81-2.87 2.3-2.2l3.53 1.57a2 2 0 0 1 .98.93z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.53 15.4a.5.5 0 0 0 .65.22l4.83-2.15a1.59 1.59 0 0 0 0-2.94l-8.9-3.97a.5.5 0 0 0-.65.68z"
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
              d="M4.5 20.84 21 13.47a1.59 1.59 0 0 0 0-2.94L4.5 3.17c-1.5-.67-3.05.8-2.3 2.2l3.14 5.9c.25.46.25 1 0 1.46l-3.15 5.9c-.74 1.4.81 2.87 2.3 2.2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMapArrowRight;
