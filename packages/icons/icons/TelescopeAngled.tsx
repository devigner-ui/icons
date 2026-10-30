import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTelescopeAngled = forwardRef<SVGSVGElement, IconProps>(
  function IconTelescopeAngled(
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
            d="M13.84 4.52 11.63 6l3.2 4.78 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71a1.24 1.24 0 0 0-1.72-.34"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m7.2 9.68 4.77-3.2 2.56 3.82-4.77 3.2z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m5.63 15.9 3.95-2.64-2.24-3.34-3.95 2.64a1 1 0 0 0-.27 1.39l1.13 1.68a1 1 0 0 0 1.38.27Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.85 12.2 7.36 22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m11.8 12.2 4.44 9.8"
            strokeWidth={strokeWidth}
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
              d="m14.85 10.77 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71a1.24 1.24 0 0 0-1.72-.34L11.65 6z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m11.99 6.48-4.77 3.2 2.56 3.82 4.77-3.2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m5.65 15.9 3.95-2.64-2.24-3.34-3.95 2.64a1 1 0 0 0-.27 1.39l1.13 1.68a1 1 0 0 0 1.38.27"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.87 12.2 7.37 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11.82 12.2 4.44 9.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="m14.84 10.9 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71a1.24 1.24 0 0 0-1.72-.34l-5.66 3.79z"
              fill="currentColor"
            />
            <path
              d="m14.52 10.42-1.76 1.18-2.67 1.79-.35.23-.16-.24-2.24-3.34-.16-.24 4.78-3.2z"
              fill="currentColor"
            />
            <path
              d="m5.64 16.02 3.95-2.64-2.24-3.34-3.95 2.64a1 1 0 0 0-.27 1.39l1.13 1.68c.3.46.92.58 1.38.27"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.56 21.81a1 1 0 0 1-.31.07.8.8 0 0 1-.69-.45l-3.73-8.24-3.78 8.25a.8.8 0 0 1-.69.44 1 1 0 0 1-.31-.07.77.77 0 0 1-.37-1l3.41-7.42 2.67-1.79 4.17 9.22c.17.37 0 .82-.37.99"
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
              d="m14.84 10.9 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71a1.24 1.24 0 0 0-1.72-.34l-5.66 3.79z"
              fill="currentColor"
            />
            <path
              d="m14.52 10.42-1.76 1.18-2.67 1.79-.35.23-.16-.24-2.24-3.34-.16-.24 4.78-3.2z"
              fill="currentColor"
            />
            <path
              d="m5.64 16.02 3.95-2.64-2.24-3.34-3.95 2.64a1 1 0 0 0-.27 1.39l1.13 1.68c.3.46.92.58 1.38.27"
              fill="currentColor"
            />
            <path
              d="M16.56 21.81a1 1 0 0 1-.31.07.8.8 0 0 1-.69-.45l-3.73-8.24-3.78 8.25a.8.8 0 0 1-.69.44 1 1 0 0 1-.31-.07.77.77 0 0 1-.37-1l3.41-7.42 2.67-1.79 4.17 9.22c.17.37 0 .82-.37.99"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTelescopeAngled;
