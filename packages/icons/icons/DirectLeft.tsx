import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDirectLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconDirectLeft(
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
              d="m5.38 9.17 11.59-6.1a3.2 3.2 0 0 1 4.35 4.26l-1.62 3.24a3.2 3.2 0 0 0 0 2.86l1.62 3.24a3.2 3.2 0 0 1-4.35 4.26l-11.59-6.1a3.2 3.2 0 0 1 0-5.66"
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
              d="m21.96 17.02-1.74-3.48a3.5 3.5 0 0 1 0-3.07l1.74-3.48a3.43 3.43 0 0 0-4.67-4.57l-1.54.82q-.32.17-.48.51l-5.7 12.64c-.23.52-.02 1.13.48 1.39l7.24 3.81a3.43 3.43 0 0 0 4.67-4.57"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.36 15.6 3.73-8.28c.42-.93-.58-1.87-1.48-1.39L4.84 8.96a3.43 3.43 0 0 0 0 6.08l2.04 1.07c.55.29 1.22.06 1.48-.51"
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
            <g clipPath="url(#clip0_12_64934)">
              <path
                d="m21.96 17.02-1.74-3.48a3.5 3.5 0 0 1 0-3.07l1.74-3.48a3.43 3.43 0 0 0-4.67-4.57l-1.54.82q-.32.17-.48.51l-5.7 12.64c-.23.52-.02 1.13.48 1.39l7.24 3.81a3.43 3.43 0 0 0 4.67-4.57"
                fill="currentColor"
              />
              <path
                d="m8.36 15.6 3.73-8.28c.42-.93-.58-1.87-1.48-1.39L4.84 8.96a3.43 3.43 0 0 0 0 6.08l2.04 1.07c.55.29 1.22.06 1.48-.51"
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

export default IconDirectLeft;
