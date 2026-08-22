import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCompassNeedle = forwardRef<SVGSVGElement, IconProps>(
  function IconCompassNeedle(
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
              d="M14.79 18.97c-6.3 2.52-9.44 3.78-11.24 2.56q-.64-.45-1.08-1.08c-1.22-1.8.04-4.95 2.56-11.24.53-1.34.8-2.01 1.26-2.54l.38-.38c.53-.46 1.2-.73 2.54-1.26 6.3-2.52 9.44-3.78 11.24-2.56q.64.45 1.08 1.08c1.22 1.8-.04 4.95-2.56 11.24-.53 1.34-.8 2.01-1.26 2.54l-.38.38c-.53.46-1.2.73-2.54 1.26"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="12"
              cy="12.0002"
              r="3"
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
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.79 18.97c-6.3 2.52-9.44 3.78-11.24 2.56q-.64-.45-1.08-1.08c-1.22-1.8.04-4.95 2.56-11.24.53-1.34.8-2.01 1.26-2.54l.38-.38c.53-.46 1.2-.73 2.54-1.26 6.3-2.52 9.44-3.78 11.24-2.56q.64.45 1.08 1.08c1.22 1.8-.04 4.95-2.56 11.24-.53 1.34-.8 2.01-1.26 2.54l-.38.38c-.53.46-1.2.73-2.54 1.26"
              fill="currentColor"
            />
            <path
              d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.55 21.53c1.8 1.22 4.95-.04 11.24-2.56 1.34-.53 2.01-.8 2.54-1.26l.38-.38c.46-.53.73-1.2 1.26-2.54 2.52-6.3 3.78-9.44 2.56-11.24q-.45-.64-1.08-1.08c-1.8-1.22-4.95.04-11.24 2.56-1.34.53-2.01.8-2.54 1.26l-.38.38c-.46.53-.73 1.2-1.26 2.54-2.52 6.3-3.78 9.44-2.56 11.24q.45.64 1.08 1.08M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCompassNeedle;
