import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStreetsMapPoint = forwardRef<SVGSVGElement, IconProps>(
  function IconStreetsMapPoint(
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.5 8.76C5.5 6.96 7.07 5.5 9 5.5s3.5 1.46 3.5 3.26c0 1.78-1.12 3.87-2.86 4.61-.4.17-.87.17-1.28 0-1.74-.74-2.86-2.83-2.86-4.61"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14 14 6.5 6.5M14 14l-7.6 7.6M14 14l7.6-7.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2c4.71 0 7.07 0 8.54 1.46q.73.74 1.05 1.9L5.35 21.58a4 4 0 0 1-1.89-1.05C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2M5.5 8.76c0 1.78 1.12 3.87 2.86 4.61.4.17.87.17 1.28 0 1.74-.74 2.86-2.83 2.86-4.61 0-1.8-1.57-3.26-3.5-3.26S5.5 6.96 5.5 8.76"
              fill="currentColor"
            />
            <path
              d="M10.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M21.89 7.17C22 8.43 22 10.01 22 12c0 4.13 0 6.46-.99 7.95L15.06 14z"
                fill="currentColor"
              />
              <path
                d="M19.95 21.01 14 15.06 7.17 21.9c1.26.1 2.84.1 4.83.1 4.13 0 6.46 0 7.95-.99"
                fill="currentColor"
              />
            </g>
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
              d="M21.89 7.17C22 8.43 22 10.01 22 12c0 4.13 0 6.46-.99 7.95L15.06 14z"
              fill="currentColor"
            />
            <path
              d="M19.95 21.01 14 15.06 7.17 21.9c1.26.1 2.84.1 4.83.1 4.13 0 6.46 0 7.95-.99"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2c4.71 0 7.07 0 8.54 1.46q.73.74 1.05 1.9L5.35 21.58a4 4 0 0 1-1.89-1.05C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2M5.5 8.76c0 1.78 1.12 3.87 2.86 4.61.4.17.87.17 1.28 0 1.74-.74 2.86-2.83 2.86-4.61 0-1.8-1.57-3.26-3.5-3.26S5.5 6.96 5.5 8.76"
              fill="currentColor"
            />
            <path
              d="M10.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStreetsMapPoint;
