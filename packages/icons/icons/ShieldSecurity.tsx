import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShieldSecurity = forwardRef<SVGSVGElement, IconProps>(
  function IconShieldSecurity(
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
              d="M11.16 2.23 6.17 4.11a3.5 3.5 0 0 0-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21a4.55 4.55 0 0 0 5.14 0l4.3-3.21a5 5 0 0 0 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02L14.2 2.23a5 5 0 0 0-3.04 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.67 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 12.5v3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="m11.63 2.11-5.5 2.06a3.2 3.2 0 0 0-1.91 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06a3.4 3.4 0 0 0-2.07-.01"
              fill="currentColor"
            />
            <path
              d="M15.17 10.5a2.5 2.5 0 0 0-5 0c0 1.12.74 2.05 1.75 2.37v2.63c0 .41.34.75.75.75s.75-.34.75-.75v-2.63a2.5 2.5 0 0 0 1.75-2.37"
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
              d="m19.21 4.17-5.5-2.06a3.5 3.5 0 0 0-2.07 0l-5.5 2.06a3.2 3.2 0 0 0-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1a3.2 3.2 0 0 0-1.9-2.77m-5.79 8.7v2.63c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.63a2.5 2.5 0 1 1 1.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShieldSecurity;
