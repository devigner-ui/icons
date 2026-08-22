import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDirectUp = forwardRef<SVGSVGElement, IconProps>(function IconDirectUp(
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
            d="M9.84 4.71 3.74 16.3A3.2 3.2 0 0 0 8 20.65l3.24-1.62a3.2 3.2 0 0 1 2.86 0l3.24 1.62a3.2 3.2 0 0 0 4.26-4.35L15.5 4.71a3.2 3.2 0 0 0-5.66 0"
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
            d="m17.69 21.29-3.48-1.74a3.5 3.5 0 0 0-3.07 0l-3.48 1.74c-2.99 1.49-6.14-1.72-4.58-4.67l.82-1.54q.17-.32.51-.48l12.64-5.7a1.1 1.1 0 0 1 1.39.48l3.81 7.24a3.43 3.43 0 0 1-4.56 4.67"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.27 7.69-8.28 3.73c-.93.42-1.87-.58-1.39-1.48l3.04-5.77a3.43 3.43 0 0 1 6.08 0l1.07 2.04c.28.55.04 1.23-.52 1.48"
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
          <g clipPath="url(#clip0_12_64922)">
            <path
              d="m17.69 21.29-3.48-1.74a3.5 3.5 0 0 0-3.07 0l-3.48 1.74c-2.99 1.49-6.14-1.72-4.58-4.67l.82-1.54q.17-.32.51-.48l12.64-5.7a1.1 1.1 0 0 1 1.39.48l3.81 7.24a3.43 3.43 0 0 1-4.56 4.67"
              fill="currentColor"
            />
            <path
              d="m16.27 7.69-8.28 3.73c-.93.42-1.87-.58-1.39-1.48l3.04-5.77a3.43 3.43 0 0 1 6.08 0l1.07 2.04c.28.55.04 1.23-.52 1.48"
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
});

export default IconDirectUp;
