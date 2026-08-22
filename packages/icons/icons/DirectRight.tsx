import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDirectRight = forwardRef<SVGSVGElement, IconProps>(
  function IconDirectRight(
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
              d="M19.96 9.17 8.37 3.07a3.2 3.2 0 0 0-4.35 4.26l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24a3.2 3.2 0 0 0 4.35 4.26l11.59-6.1a3.2 3.2 0 0 0 0-5.66"
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
              d="m3.38 17.02 1.74-3.48c.48-.97.48-2.1 0-3.07L3.38 6.98a3.43 3.43 0 0 1 4.67-4.57l1.54.82a1 1 0 0 1 .48.51l5.69 12.65c.23.52.02 1.13-.48 1.39l-7.24 3.81C5.1 23.15 1.89 20 3.38 17.02"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.98 15.6-3.73-8.28c-.42-.93.58-1.87 1.48-1.39l5.77 3.04a3.43 3.43 0 0 1 0 6.08l-2.04 1.07c-.55.28-1.22.05-1.48-.52"
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
            <g clipPath="url(#clip0_12_64940)">
              <path
                d="m3.38 17.02 1.74-3.48c.48-.97.48-2.1 0-3.07L3.38 6.98a3.43 3.43 0 0 1 4.67-4.57l1.54.82a1 1 0 0 1 .48.51l5.69 12.65c.23.52.02 1.13-.48 1.39l-7.24 3.81C5.1 23.15 1.89 20 3.38 17.02"
                fill="currentColor"
              />
              <path
                d="m16.98 15.6-3.73-8.28c-.42-.93.58-1.87 1.48-1.39l5.77 3.04a3.43 3.43 0 0 1 0 6.08l-2.04 1.07c-.55.28-1.22.05-1.48-.52"
                fill="currentColor"
              />
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
        )}
      </>
    );
  },
);

export default IconDirectRight;
