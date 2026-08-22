import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudWaterdrops = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudWaterdrops(
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
              d="M14.38 8.03A5.8 5.8 0 0 1 18.16 8M7.12 10.6A4.26 4.26 0 0 0 2 14.77c0 1.9 1.26 3.5 3 4.04m2.12-8.2A5.68 5.68 0 0 1 12.48 3a5.7 5.7 0 0 1 5.68 5M7.12 10.6q.85.16 1.55.63M18.16 8A5.65 5.65 0 0 1 22 13.35a5.65 5.65 0 0 1-3.5 5.21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M11 20.33c0 .92-.67 1.67-1.5 1.67S8 21.25 8 20.33c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16 20.33c0 .92-.67 1.67-1.5 1.67s-1.5-.75-1.5-1.67c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.5 15.33c0 .92-.67 1.67-1.5 1.67s-1.5-.75-1.5-1.67c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
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
              d="M16.29 19A5.7 5.7 0 0 0 22 13.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 3a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 14.77 4.26 4.26 0 0 0 6.29 19z"
              fill="currentColor"
            />
            <path
              d="M11 20.33c0 .92-.67 1.67-1.5 1.67S8 21.25 8 20.33c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
              fill="currentColor"
            />
            <path
              d="M16 20.33c0 .92-.67 1.67-1.5 1.67s-1.5-.75-1.5-1.67c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
              fill="currentColor"
            />
            <path
              d="M13.5 15.33c0 .92-.67 1.67-1.5 1.67s-1.5-.75-1.5-1.67c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
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
              d="M11 20.33c0 .92-.67 1.67-1.5 1.67S8 21.25 8 20.33c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
              fill="currentColor"
            />
            <path
              d="M16 20.33c0 .92-.67 1.67-1.5 1.67s-1.5-.75-1.5-1.67c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
              fill="currentColor"
            />
            <path
              d="M13.5 15.33c0 .92-.67 1.67-1.5 1.67s-1.5-.75-1.5-1.67c0-.5.45-1.15.86-1.64.34-.4.94-.4 1.28 0 .4.49.86 1.14.86 1.64"
              fill="currentColor"
            />
            <path
              d="m6.85 19 .12-.24q.36-.6.74-1.03a2.3 2.3 0 0 1 1.68-.84A3.3 3.3 0 0 1 9 15.33c0-.64.27-1.21.47-1.57q.36-.6.74-1.03a2.33 2.33 0 0 1 3.58 0q.38.43.74 1.03c.2.36.47.93.47 1.57q0 .82-.39 1.56c.62.03 1.24.3 1.68.84a7 7 0 0 1 .83 1.21A5.7 5.7 0 0 0 22 13.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 3a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 14.77 4.26 4.26 0 0 0 6.29 19z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudWaterdrops;
