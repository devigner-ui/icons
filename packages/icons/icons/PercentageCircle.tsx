import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPercentageCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconPercentageCircle(
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
              d="m9 15.27 6.54-6.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.41 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.95 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.68 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.68 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M9 16.02a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.55-6.55a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06L9.53 15.8a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M9.41 7.66a1.48 1.48 0 0 0 0 2.96 1.48 1.48 0 0 0 0-2.96"
              fill="currentColor"
            />
            <path
              d="M15.95 13.39a1.48 1.48 0 0 0 0 2.96 1.48 1.48 0 0 0 0-2.96"
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
              d="M12.69 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9.42 7.66a1.48 1.48 0 0 1 0 2.96 1.48 1.48 0 0 1 0-2.96m.12 8.14a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.55-6.55a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06zm6.42.54a1.48 1.48 0 0 1 0-2.96 1.48 1.48 0 0 1 0 2.96"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPercentageCircle;
