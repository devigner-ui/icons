import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOntology = forwardRef<SVGSVGElement, IconProps>(
  function IconOntology(
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
              d="M18.57 19.68A9.4 9.4 0 0 1 12.09 22c-5.17-.14-9.2-4.59-9.2-9.76V5.21a.5.5 0 0 1 .85-.35z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.89 4.3A9.3 9.3 0 0 1 13.32 2c5.13.14 9.12 4.55 9.12 9.68v6.96a.5.5 0 0 1-.85.35z"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M24.67 0h-24v24h24z"
              fill="none"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.57 19.68A9.4 9.4 0 0 1 12.09 22c-5.17-.14-9.2-4.59-9.2-9.76V5.21a.5.5 0 0 1 .85-.35z"
              fill="currentColor"
            />
            <path
              d="M6.89 4.3A9.3 9.3 0 0 1 13.32 2c5.13.14 9.12 4.55 9.12 9.68v6.96a.5.5 0 0 1-.85.35z"
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
              d="M18.57 19.68A9.4 9.4 0 0 1 12.09 22c-5.17-.14-9.2-4.59-9.2-9.76V5.21a.5.5 0 0 1 .85-.35z"
              fill="currentColor"
            />
            <path
              d="M6.89 4.3A9.3 9.3 0 0 1 13.32 2c5.13.14 9.12 4.55 9.12 9.68v6.96a.5.5 0 0 1-.85.35z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOntology;
