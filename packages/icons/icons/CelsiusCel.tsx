import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCelsiusCel = forwardRef<SVGSVGElement, IconProps>(
  function IconCelsiusCel(
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
              d="M17 15.28a5.42 5.42 0 0 1-9.77-3.29 5.43 5.43 0 0 1 8.71-4.35"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.09 11.34a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M12.67 18.19a6.2 6.2 0 1 1 3.72-11.14.75.75 0 0 1-.9 1.2 4.69 4.69 0 1 0 .92 6.58.75.75 0 1 1 1.19.91 6.2 6.2 0 0 1-4.93 2.45"
              fill="currentColor"
            />
            <path
              d="M18.09 11.34a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.93 13.74a6.2 6.2 0 1 1-1.21-8.69.75.75 0 0 1-.9 1.2 4.7 4.7 0 1 0 .92 6.58.75.75 0 1 1 1.19.91m.49-4.4c-.65 0-1.17-.52-1.17-1.17S17.44 9 18.09 9s1.17.52 1.17 1.17-.52 1.17-1.17 1.17"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCelsiusCel;
