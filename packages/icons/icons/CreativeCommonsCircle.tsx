import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCreativeCommonsCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconCreativeCommonsCircle(
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
              d="M12.67 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.55 14.15a2.87 2.87 0 1 1 0-4.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.55 14.15a2.87 2.87 0 1 1 0-4.3"
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
              d="M12.67 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20"
              fill="currentColor"
            />
            <path
              d="M9.66 15.62a3.62 3.62 0 1 1 2.39-6.34c.31.27.34.75.07 1.06a.76.76 0 0 1-1.06.07 2.12 2.12 0 1 0 0 3.18.76.76 0 0 1 1.06.07c.27.31.24.79-.07 1.06-.67.58-1.52.9-2.39.9"
              fill="currentColor"
            />
            <path
              d="M16.66 15.62a3.62 3.62 0 1 1 2.39-6.34c.31.27.34.75.07 1.06a.76.76 0 0 1-1.06.07 2.12 2.12 0 1 0 0 3.18.76.76 0 0 1 1.06.07c.27.31.24.79-.07 1.06-.67.58-1.52.9-2.39.9"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9.66 14.12c.51 0 1.01-.19 1.4-.53a.76.76 0 0 1 1.06.07c.27.31.24.79-.07 1.06a3.62 3.62 0 1 1 0-5.44c.31.27.34.75.07 1.06a.76.76 0 0 1-1.06.07 2.12 2.12 0 1 0-1.4 3.71m7 0c.51 0 1.01-.19 1.4-.53a.76.76 0 0 1 1.06.07c.27.31.24.79-.07 1.06a3.62 3.62 0 1 1 0-5.44c.31.27.34.75.07 1.06a.76.76 0 0 1-1.06.07 2.12 2.12 0 1 0-1.4 3.71"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCreativeCommonsCircle;
