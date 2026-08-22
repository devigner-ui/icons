import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTemperature = forwardRef<SVGSVGElement, IconProps>(
  function IconTemperature(
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
              d="M12 22a5.5 5.5 0 0 0 3.44-9.8 1.1 1.1 0 0 1-.44-.85V5a3 3 0 1 0-6 0v6.35q-.02.53-.44.86A5.49 5.49 0 0 0 12 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 0V5"
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
              opacity={duotone ? "0.4" : "1"}
              d="M17.5 16.5a5.5 5.5 0 1 1-8.94-4.3c.27-.2.44-.51.44-.85V5a3 3 0 1 1 6 0v6.35q.02.53.44.86a5.5 5.5 0 0 1 2.06 4.29"
              fill="currentColor"
            />
            <path
              d="M12.75 5a.75.75 0 0 0-1.5 0v8.38c0 .44-.3.8-.66 1.05a2.5 2.5 0 1 0 2.82 0c-.36-.24-.66-.61-.66-1.05z"
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
              d="M17.5 16.5a5.5 5.5 0 1 1-8.94-4.3c.27-.2.44-.51.44-.85V5a3 3 0 1 1 6 0v6.35q.02.53.44.86a5.5 5.5 0 0 1 2.06 4.29M12 4.25c.41 0 .75.34.75.75v8.38c0 .44.3.8.66 1.05a2.5 2.5 0 1 1-2.82 0c.36-.24.66-.61.66-1.05V5c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTemperature;
