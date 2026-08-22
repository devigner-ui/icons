import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTheGraphGrt = forwardRef<SVGSVGElement, IconProps>(
  function IconTheGraphGrt(
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
              d="M11.98 13.94a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.73 14.81-3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.17 9.31"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
            <path d="M24.67 0h-24v24h24z" fill="none" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M11.98 13.94a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76"
              fill="currentColor"
            />
            <path
              d="M17.18 8.31a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1c-.01.55-.46 1-1.01 1"
              fill="currentColor"
            />
            <path
              d="M12.73 18.56a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-3 3a.7.7 0 0 1-.53.22"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-4.06 8.56a3.38 3.38 0 1 1 6.76 0 3.38 3.38 0 0 1-6.76 0m7.65 4.78-3 3a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0c.29.29.3.77 0 1.06m.92-7.03a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1c0 .55-.46 1-1.01 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTheGraphGrt;
