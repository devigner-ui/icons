import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrafficEconomy = forwardRef<SVGSVGElement, IconProps>(
  function IconTrafficEconomy(
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
              d="M22 12A10 10 0 1 1 12 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 12h-3m0 0H9m3 0V9m0 3v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14.5 2.31c3.51.9 6.28 3.68 7.18 7.19"
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
              fill="currentColor"
            />
            <path
              d="M10.68 18.62A6.75 6.75 0 0 0 18.75 12a.75.75 0 0 0-1.5 0A5.25 5.25 0 1 1 12 6.75a.75.75 0 0 0 0-1.5 6.75 6.75 0 0 0-1.32 13.37"
              fill="currentColor"
            />
            <path
              d="M13.31 6.05c.16-.39.6-.56.99-.4a7.7 7.7 0 0 1 4.05 4.05.75.75 0 0 1-1.38.6 6.2 6.2 0 0 0-3.27-3.27.75.75 0 0 1-.39-.98"
              fill="currentColor"
            />
            <path
              d="M12 9.75c.41 0 .75.34.75.75v.75h.75a.75.75 0 1 1 0 1.5h-.75v.75a.75.75 0 1 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75v-.75c0-.41.34-.75.75-.75"
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
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54m11.12-2.3A6.75 6.75 0 1 1 12 5.25a.75.75 0 0 1 0 1.5A5.25 5.25 0 1 0 17.25 12a.75.75 0 0 1 1.5 0 6.75 6.75 0 0 1-4.17 6.24M14.3 5.65a.75.75 0 1 0-.6 1.38 6.2 6.2 0 0 1 3.27 3.27.75.75 0 1 0 1.38-.6 7.7 7.7 0 0 0-4.05-4.05M12 9.75c.41 0 .75.34.75.75v.75h.75a.75.75 0 1 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75v-.75c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrafficEconomy;
