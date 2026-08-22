import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLayoutCircles = forwardRef<SVGSVGElement, IconProps>(
  function IconLayoutCircles(
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
              d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10.5 17.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.25 17.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
                fill="currentColor"
              />
            </g>
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.25 17.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLayoutCircles;
