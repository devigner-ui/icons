import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScroll = forwardRef<SVGSVGElement, IconProps>(function IconScroll(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.27 8.97-2.49 2.49a.77.77 0 0 0 0 1.07l2.49 2.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.07 8.97 2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M10.27 15.78a.7.7 0 0 1-.53-.22l-2.49-2.49a1.5 1.5 0 0 1 0-2.13l2.49-2.49a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L8.31 12l2.49 2.5c.29.29.29.77 0 1.06a.8.8 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="M15.07 15.78a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l2.49-2.5-2.49-2.5a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2.49 2.49a1.5 1.5 0 0 1 0 2.13l-2.49 2.49a.7.7 0 0 1-.53.23"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2M10.8 14.5c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-2.49-2.49a1.5 1.5 0 0 1 0-2.13l2.49-2.49a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L8.31 12zm7.29-1.44-2.49 2.49a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L17.03 12l-2.49-2.5a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2.49 2.49a1.5 1.5 0 0 1 0 2.13"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScroll;
