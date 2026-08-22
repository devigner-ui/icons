import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSimcard3 = forwardRef<SVGSVGElement, IconProps>(function IconSimcard3(
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
            d="m20.21 6.54-3.07-3.07a5 5 0 0 0-3.54-1.46H8.67c-3 0-5 2-5 5v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93a5 5 0 0 0-1.46-3.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m10.17 14-2 2 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15.17 14 2 2-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="m20.21 6.54-3.07-3.07a5 5 0 0 0-3.54-1.46H8.67c-3 0-5 2-5 5v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93a5 5 0 0 0-1.46-3.54"
            fill="currentColor"
          />
          <path
            d="M10.17 18.75a.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L9.23 16l1.47 1.47c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="M15.17 18.75a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L16.11 16l-1.47-1.47a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2a.7.7 0 0 1-.53.22"
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
            d="m20.21 6.54-3.07-3.07A5 5 0 0 0 13.6 2H8.67c-3 0-5 2-5 5v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93a5 5 0 0 0-1.46-3.53M10.7 17.47c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L9.23 16zm7-.94-2 2a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L16.11 16l-1.47-1.47a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSimcard3;
