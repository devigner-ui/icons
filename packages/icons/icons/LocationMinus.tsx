import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLocationMinus = forwardRef<SVGSVGElement, IconProps>(
  function IconLocationMinus(
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
            d="M9.25 11h5.5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2 9.38-4.78 12.04a5.2 5.2 0 0 1-7.2 0C5.62 17.88 2.45 13.58 3.61 8.5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              opacity={duotone ? "0.4" : "1"}
              d="M9.25 11h5.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.2 5.2 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M20.62 8.45c-1.04-4.63-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.56 2.07-8.61 6.69-1.18 5.16 1.98 9.53 4.84 12.29a5.44 5.44 0 0 0 7.55 0c2.86-2.76 6.02-7.12 4.85-12.28"
              fill="currentColor"
            />
            <path
              d="M14.75 11.5h-5.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            <g clipPath="url(#clip0_12_64822)">
              <path
                d="M20.62 8.45c-1.04-4.63-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.56 2.07-8.61 6.69-1.18 5.16 1.98 9.53 4.84 12.29a5.44 5.44 0 0 0 7.55 0c2.86-2.76 6.02-7.12 4.85-12.28m-5.87 3.05h-5.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath>
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  transform="translate(-0.67 -0.25) translate(0.669922)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </>
    );
  },
);

export default IconLocationMinus;
