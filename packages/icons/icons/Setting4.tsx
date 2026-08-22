import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSetting4 = forwardRef<SVGSVGElement, IconProps>(function IconSetting4(
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
            d="M22.67 6.5h-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M6.67 6.5h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.67 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M8.67 17.5h-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M22.67 17.5h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.67 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
            d="M21.9 7.62h-5.54a.7.7 0 0 1-.69-.7.7.7 0 0 1 .69-.69h5.54a.7.7 0 0 1 .69.69.7.7 0 0 1-.69.7"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.13 7.62H3.44a.7.7 0 0 1 0-1.38h3.69a.7.7 0 0 1 0 1.38"
            fill="currentColor"
          />
          <path
            d="M10.82 10.84a3.92 3.92 0 1 0 0-7.84 3.92 3.92 0 0 0 0 7.84"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.9 17.77h-3.69a.7.7 0 0 1 0-1.38h3.69a.7.7 0 0 1 0 1.38"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.98 17.77H3.44a.7.7 0 0 1 0-1.38h5.54a.7.7 0 0 1 0 1.38"
            fill="currentColor"
          />
          <path
            d="M14.52 21a3.92 3.92 0 1 0 0-7.84 3.92 3.92 0 0 0 0 7.84"
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
            d="M21.97 7.58h-5.58a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7"
            fill="currentColor"
          />
          <path
            d="M7.09 7.58H3.37a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7"
            fill="currentColor"
          />
          <path
            d="M10.81 10.83a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9"
            fill="currentColor"
          />
          <path
            d="M21.97 17.81h-3.72a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7"
            fill="currentColor"
          />
          <path
            d="M8.95 17.81H3.37a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7"
            fill="currentColor"
          />
          <path
            d="M14.53 21.07a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSetting4;
