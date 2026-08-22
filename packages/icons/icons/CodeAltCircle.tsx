import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCodeAltCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconCodeAltCircle(
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
              d="m8.67 10-2 2 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.67 10 2 2-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m13.67 9.67-2 4.66"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M8.67 14.75a.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L7.73 12l1.47 1.47c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M16.67 14.75a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L17.61 12l-1.47-1.47a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M11.67 15.08q-.15 0-.29-.06a.74.74 0 0 1-.39-.99l2-4.67c.16-.38.6-.56.98-.39.38.16.56.6.39.99l-2 4.67a.8.8 0 0 1-.69.45"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9.2 13.47c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L7.73 12zm5.16-3.51-2 4.67a.75.75 0 0 1-.98.39.74.74 0 0 1-.39-.99l2-4.67c.16-.38.6-.56.98-.39s.55.61.39.99m4.84 2.57-2 2a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L17.61 12l-1.47-1.47a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCodeAltCircle;
