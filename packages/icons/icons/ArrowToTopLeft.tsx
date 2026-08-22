import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowToTopLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowToTopLeft(
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
              d="m17 9.5-5-5-5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 4.5v10c0 1.67-1 5-5 5"
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
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.53 10.03c.3-.3.3-.77 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06L12 5.56l4.47 4.47c.3.3.77.3 1.06 0"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.75 14.5c0 .95-.28 2.37-1.14 3.56A5.4 5.4 0 0 1 7 20.25a.75.75 0 0 1 0-1.5c1.76 0 2.78-.71 3.4-1.56.63-.89.85-1.98.85-2.69V6.31l.75-.75.75.75z"
                fill="currentColor"
              />
              <path d="M12.2 3.78" fill="currentColor" />
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
              d="M17.53 10.03c.3-.3.3-.77 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06l3.72-3.72v8.19c0 .71-.22 1.8-.86 2.69-.61.85-1.63 1.56-3.39 1.56a.75.75 0 0 0 0 1.5c2.24 0 3.72-.95 4.6-2.19a6.3 6.3 0 0 0 1.15-3.56V6.31l3.72 3.72c.3.3.77.3 1.06 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowToTopLeft;
