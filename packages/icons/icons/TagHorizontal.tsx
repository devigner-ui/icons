import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTagHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconTagHorizontal(
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
            d="M12.86 20.5c2.23 0 3.34 0 4.27-.53.93-.54 1.52-1.51 2.7-3.46l.68-1.13c1-1.64 1.49-2.47 1.49-3.38s-.5-1.74-1.49-3.38l-.68-1.12c-1.18-1.96-1.77-2.93-2.7-3.47-.93-.53-2.04-.53-4.27-.53h-2.64q-1.55 0-2.72.02M3.2 4.74C2 6 2 8 2 12s0 6.01 1.2 7.26c1 1.03 2.5 1.2 5.2 1.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 7.5v9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M10.22 20.5h2.64c2.23 0 3.34 0 4.27-.53.93-.54 1.52-1.51 2.7-3.46l.68-1.13c1-1.64 1.49-2.47 1.49-3.38s-.5-1.74-1.49-3.38l-.68-1.12c-1.18-1.96-1.77-2.93-2.7-3.47-.93-.53-2.04-.53-4.27-.53h-2.64c-3.87 0-5.81 0-7.02 1.25C2 5.99 2 7.99 2 12s0 6.01 1.2 7.26c1.2 1.24 3.15 1.24 7.02 1.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 7.5v9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M10.22 20h2.64c2.23 0 3.34 0 4.27-.5s1.52-1.42 2.7-3.26l.68-1.06c1-1.55 1.49-2.32 1.49-3.18s-.5-1.63-1.49-3.18l-.68-1.06C18.65 5.92 18.06 5 17.13 4.5S15.09 4 12.86 4h-2.64C6.35 4 4.41 4 3.2 5.17 2 6.34 2 8.23 2 12s0 5.66 1.2 6.83S6.35 20 10.22 20"
              fill="currentColor"
            />
            <path
              d="M7 7.06c.41 0 .75.31.75.7v8.48c0 .39-.34.7-.75.7s-.75-.31-.75-.7V7.76c0-.39.34-.7.75-.7"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.86 20h-2.64c-3.87 0-5.81 0-7.02-1.17C2 17.66 2 15.77 2 12s0-5.66 1.2-6.83S6.35 4 10.22 4h2.64c2.23 0 3.34 0 4.27.5s1.52 1.42 2.7 3.26l.68 1.06c1 1.55 1.49 2.32 1.49 3.18s-.5 1.63-1.49 3.18l-.68 1.06c-1.18 1.84-1.77 2.76-2.7 3.26s-2.04.5-4.27.5M7 7.05c.41 0 .75.32.75.71v8.48c0 .39-.34.7-.75.7s-.75-.31-.75-.7V7.76c0-.39.34-.7.75-.7"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTagHorizontal;
