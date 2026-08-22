import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDiscountShape = forwardRef<SVGSVGElement, IconProps>(
  function IconDiscountShape(
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
              d="m3.99 14.66-1.52-1.52a1.6 1.6 0 0 1 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6h2.15c.36 0 .87-.21 1.13-.47l1.52-1.52a1.6 1.6 0 0 1 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52a1.6 1.6 0 0 1 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6h-2.15c-.36 0-.87.21-1.13.47l-1.52 1.52a1.6 1.6 0 0 1-2.26 0l-1.52-1.52a2 2 0 0 0-1.13-.47H6.06a1.6 1.6 0 0 1-1.6-1.6v-2.15c0-.37-.21-.88-.47-1.13"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              d="m9 15 6-6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              d="M9.5 9.5"
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
              d="m3.99 14.66-1.52-1.52a1.6 1.6 0 0 1 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6h2.15c.36 0 .87-.21 1.13-.47l1.52-1.52a1.6 1.6 0 0 1 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52a1.6 1.6 0 0 1 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6h-2.15c-.36 0-.87.21-1.13.47l-1.52 1.52a1.6 1.6 0 0 1-2.26 0l-1.52-1.52a2 2 0 0 0-1.13-.47H6.06a1.6 1.6 0 0 1-1.6-1.6v-2.15c0-.37-.21-.88-.47-1.13"
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
              d="M21.53 10.87 20 9.35a2 2 0 0 1-.47-1.13V6.06c0-.88-.72-1.6-1.6-1.6h-2.15c-.36 0-.87-.21-1.13-.47l-1.52-1.52a1.6 1.6 0 0 0-2.26 0L9.34 3.99a1.8 1.8 0 0 1-1.13.47H6.06c-.88 0-1.6.72-1.6 1.6V8.2c0 .36-.21.87-.47 1.13l-1.52 1.52a1.6 1.6 0 0 0 0 2.26l1.52 1.52c.26.26.47.77.47 1.13v2.15c0 .88.72 1.6 1.6 1.6H8.2c.36 0 .87.2 1.13.47l1.52 1.52a1.6 1.6 0 0 0 2.26 0l1.52-1.52c.26-.26.77-.47 1.13-.47h2.15c.88 0 1.6-.72 1.6-1.6v-2.15c0-.36.2-.87.47-1.13l1.52-1.52c.65-.61.65-1.63.02-2.25M8 9c0-.55.45-1 1-1s1 .45 1 1-.44 1-1 1a1 1 0 0 1-1-1m1.53 6.53q-.24.22-.53.22c-.3 0-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l6-6c.29-.3.77-.3 1.06 0s.29.77 0 1.06zM15 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDiscountShape;
