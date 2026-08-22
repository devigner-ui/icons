import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDiscountCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconDiscountCircle(
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
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              d="m9 15 6-6"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              d="M9.5 9.5"
              opacity={duotone ? "0.4" : "1"}
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
              fill="currentColor"
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              fill="currentColor"
              d="M15 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1m-5.99-6C8.45 10 8 9.55 8 9s.45-1 1-1 1 .45 1 1-.44 1-.99 1M9 15.75a.7.7 0 0 1-.53-.22.76.76 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6 6a.7.7 0 0 1-.53.22"
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
              fill="currentColor"
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9 8c.55 0 1 .45 1 1s-.44 1-1 1c-.55 0-1-.45-1-1s.45-1 1-1m.53 7.53q-.23.22-.53.22c-.3 0-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0s.29.77 0 1.06zM15 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDiscountCircle;
