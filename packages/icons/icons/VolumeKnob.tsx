import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolumeKnob = forwardRef<SVGSVGElement, IconProps>(
  function IconVolumeKnob(
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
            d="M17 13.25a5 5 0 1 0-5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 8.25v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 4.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M20.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            fill="currentColor"
          />
          <path
            d="M3.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            fill="currentColor"
          />
          <path
            d="M6.7 6.53a1 1 0 1 1-1.42 1.42A1 1 0 0 1 6.7 6.53Z"
            fill="currentColor"
          />
          <path
            d="M18.72 18.55a1 1 0 1 1-1.42 1.42 1 1 0 0 1 1.42-1.42Z"
            fill="currentColor"
          />
          <path
            d="M18.72 7.95a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42Z"
            fill="currentColor"
          />
          <path
            d="M6.7 19.97a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42Z"
            fill="currentColor"
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
            <circle
              cx="12"
              cy="13.25"
              r="5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 8.25v4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path d="M13 4.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.7 6.53a1 1 0 1 1-1.42 1.42A1 1 0 0 1 6.7 6.53"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.72 18.55a1 1 0 1 1-1.42 1.42 1 1 0 0 1 1.42-1.42"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.72 7.95a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.7 19.97a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42"
              fill="currentColor"
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
              d="M11.25 8.31a5 5 0 1 0 1.5 0v3.94a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
            <path d="M13 4.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.7 6.53a1 1 0 1 1-1.42 1.42A1 1 0 0 1 6.7 6.53"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.72 18.55a1 1 0 1 1-1.42 1.42 1 1 0 0 1 1.42-1.42"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.72 7.95a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.7 19.97a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42"
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
              d="M11.25 8.31a5 5 0 1 0 1.5 0v3.94a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
            <path d="M13 4.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M20.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
              fill="currentColor"
            />
            <path d="M3.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2" fill="currentColor" />
            <path
              d="M6.7 6.53a1 1 0 1 1-1.42 1.42A1 1 0 0 1 6.7 6.53"
              fill="currentColor"
            />
            <path
              d="M18.72 18.55a1 1 0 1 1-1.42 1.42 1 1 0 0 1 1.42-1.42"
              fill="currentColor"
            />
            <path
              d="M18.72 7.95a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42"
              fill="currentColor"
            />
            <path
              d="M6.7 19.97a1 1 0 1 1-1.42-1.42 1 1 0 0 1 1.42 1.42"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolumeKnob;
