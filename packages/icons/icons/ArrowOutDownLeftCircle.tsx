import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowOutDownLeftCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowOutDownLeftCircle(
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
            d="m10 14-8 8m0-6v6h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22a10 10 0 0 0 8.66-15M2 12a10 10 0 0 1 15-8.66"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="m10 14-8 8m0 0h6m-6 0v-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22A10 10 0 1 0 2 12"
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
              d="M12.4 21.6a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.15 21.6c0 .41-.34.75-.75.75h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H8.4c.41 0 .75.34.75.75"
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
              d="m10.4 13.6-8 8m0 0h6m-6 0v-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.15 21.6c0 .41-.34.75-.75.75h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H8.4c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M12.4 21.6a10 10 0 1 0-9.85-8.24 2.25 2.25 0 0 1 2.1 2.24v.57l4.16-4.16a2.25 2.25 0 1 1 3.18 3.18l-4.16 4.16h.57c1.2 0 2.17.93 2.24 2.1q.86.15 1.76.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowOutDownLeftCircle;
