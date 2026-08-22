import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlayCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconPlayCircle(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.89 9.93c1.07.88 1.61 1.32 1.61 2.07s-.54 1.19-1.61 2.07a15 15 0 0 1-1.65 1.16c-1.07.66-1.6.98-2.09.62s-.52-1.12-.61-2.63a22 22 0 0 1 0-2.44c.09-1.51.13-2.27.61-2.63s1.02-.04 2.1.62a15 15 0 0 1 1.64 1.16"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="m13.03 9.27-.79-.5c-1.07-.66-1.6-.98-2.09-.62s-.52 1.12-.61 2.63a22 22 0 0 0 0 2.44c.09 1.51.13 2.27.61 2.63s1.02.04 2.1-.62a15 15 0 0 0 1.64-1.16c1.07-.88 1.61-1.32 1.61-2.07s-.54-1.19-1.61-2.07z"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m1.03-12.73-.79-.5c-1.07-.66-1.6-.98-2.09-.62s-.52 1.12-.61 2.63a22 22 0 0 0 0 2.44c.09 1.51.13 2.27.61 2.63s1.02.04 2.1-.62a15 15 0 0 0 1.64-1.16c1.07-.88 1.61-1.32 1.61-2.07s-.54-1.19-1.61-2.07z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlayCircle;
