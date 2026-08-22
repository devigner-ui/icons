import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBrush4 = forwardRef<SVGSVGElement, IconProps>(function IconBrush4(
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
          <g clipPath="url(#clip0_12_78657)">
            <path
              d="M10.17 19.5V18h-5c-.55 0-1.05-.22-1.41-.59A2 2 0 0 1 3.17 16c0-1.03.8-1.89 1.81-1.99l.19-.01h15l.19.01q.73.07 1.22.58c.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82h-4.89v1.5a2.5 2.5 0 0 1-5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m20.84 5.3-.48 8.71-.19-.01h-15l-.19.01L4.5 5.3A3 3 0 0 1 7.48 2h10.38a3 3 0 0 1 2.98 3.3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.66 2v5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 2v2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
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
            d="M10.17 19.5V18h-5c-.55 0-1.05-.22-1.41-.59A2 2 0 0 1 3.17 16c0-1.03.8-1.89 1.81-1.99l.19-.01h15l.19.01q.73.07 1.22.58c.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82h-4.89v1.5a2.5 2.5 0 0 1-5 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.84 5.3-.48 8.71-.19-.01h-15l-.19.01L4.5 5.3A3 3 0 0 1 7.48 2h10.38a3 3 0 0 1 2.98 3.3"
            fill="currentColor"
          />
          <path
            d="M9.41 2v5c0 .41-.34.75-.75.75A.76.76 0 0 1 7.91 7V2z"
            fill="currentColor"
          />
          <path
            d="M13.42 2v2c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V2z"
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
            d="M10.17 19.5V18h-5c-.55 0-1.05-.22-1.41-.59A2 2 0 0 1 3.17 16c0-1.03.8-1.89 1.81-1.99l.19-.01h15l.19.01q.73.07 1.22.58c.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82h-4.89v1.5a2.5 2.5 0 0 1-5 0"
            fill="currentColor"
          />
          <path
            d="M17.86 2h-3.94a.5.5 0 0 0-.5.5V4c0 .41-.34.75-.75.75l-.25-.05a.75.75 0 0 1-.5-.7V2.5a.5.5 0 0 0-.5-.5H9.9a.5.5 0 0 0-.5.5V7c0 .41-.34.75-.75.75A.76.76 0 0 1 7.91 7V2.5a.5.5 0 0 0-.47-.5h-.03A3 3 0 0 0 4.5 5.3l.37 6.75a1 1 0 0 0 1 .95h13.6a1 1 0 0 0 1-.95l.37-6.75A3 3 0 0 0 17.86 2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBrush4;
