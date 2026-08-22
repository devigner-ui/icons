import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMultipleForwardLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconMultipleForwardLeft(
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
              d="M11.34 5.48 7.36 9.01c-1.57 1.4-2.35 2.1-2.35 2.99s.78 1.6 2.35 2.99l3.98 3.53c.71.64 1.07.96 1.36.82.3-.13.3-.6.3-1.57v-2.34c3.6 0 7.5 1.71 9 4.57 0-9.14-5.33-11.43-9-11.43V6.23c0-.96 0-1.44-.3-1.57-.29-.14-.65.18-1.36.82"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.46 4.5 3.25 9.34a3.9 3.9 0 0 0 .12 5.83l5.1 4.33"
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
              d="M12.48 5.18 7.5 9.61c-.93.83-1.4 1.24-1.57 1.73a2 2 0 0 0 0 1.32c.17.5.64.9 1.57 1.73l4.97 4.43c.43.37.64.56.82.57a.5.5 0 0 0 .4-.19c.12-.13.12-.42.12-.98v-2.8c2.42 0 4.99.79 6.86 2.17.98.72 1.46 1.08 1.65 1.07q.26 0 .39-.24c.1-.16.01-.66-.16-1.65-1.1-6.47-5.55-8.2-8.74-8.2V5.78c0-.56 0-.85-.12-.98a.5.5 0 0 0-.4-.19c-.18.01-.4.2-.81.57"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.82 3.99a.75.75 0 0 0-1.06-.04L3.54 8.8a4.65 4.65 0 0 0 .15 6.95l5.1 4.33a.75.75 0 0 0 .96-1.14L4.66 14.6a3.15 3.15 0 0 1-.1-4.7l5.22-4.85c.3-.28.32-.76.04-1.06"
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
              d="M12.48 5.18 7.5 9.61c-.93.83-1.4 1.24-1.57 1.73a2 2 0 0 0 0 1.32c.17.5.64.9 1.57 1.73l4.98 4.43c.42.37.63.56.8.57a.5.5 0 0 0 .41-.19c.12-.13.12-.42.12-.98v-2.8c2.42 0 4.99.79 6.86 2.17.98.72 1.46 1.08 1.65 1.07q.26 0 .39-.24c.1-.16.01-.66-.16-1.65-1.1-6.47-5.55-8.2-8.74-8.2V5.78c0-.56 0-.85-.12-.98a.5.5 0 0 0-.4-.19c-.18.01-.4.2-.81.57"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.82 3.99a.75.75 0 0 0-1.06-.04L3.54 8.8a4.65 4.65 0 0 0 .15 6.95l5.1 4.33a.75.75 0 0 0 .96-1.14L4.66 14.6a3.15 3.15 0 0 1-.1-4.7l5.22-4.85c.3-.28.32-.76.04-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMultipleForwardLeft;
