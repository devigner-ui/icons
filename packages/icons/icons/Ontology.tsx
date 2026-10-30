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
        {variant === "Broken" ? (
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
            d="M2.22 6.98V5.2a.5.5 0 0 1 .85-.35L17.9 19.68A9.4 9.4 0 0 1 11.42 22c-5.17-.14-9.2-4.59-9.2-9.76v-1.16"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.22 4.3A9.3 9.3 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96a.5.5 0 0 1-.85.35z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M17.9 19.68A9.4 9.4 0 0 1 11.42 22c-5.17-.14-9.2-4.59-9.2-9.76V5.21a.5.5 0 0 1 .85-.35z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.22 4.3A9.3 9.3 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96a.5.5 0 0 1-.85.35z"
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
              d="M24 0H0v24h24z"
              fill="none"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.9 19.68A9.4 9.4 0 0 1 11.42 22c-5.17-.14-9.2-4.59-9.2-9.76V5.21a.5.5 0 0 1 .85-.35z"
              fill="currentColor"
            />
            <path
              d="M6.22 4.3A9.3 9.3 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96a.5.5 0 0 1-.85.35z"
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
              d="M17.9 19.68A9.4 9.4 0 0 1 11.42 22c-5.17-.14-9.2-4.59-9.2-9.76V5.21a.5.5 0 0 1 .85-.35z"
              fill="currentColor"
            />
            <path
              d="M6.22 4.3A9.3 9.3 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96a.5.5 0 0 1-.85.35z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOntology;
