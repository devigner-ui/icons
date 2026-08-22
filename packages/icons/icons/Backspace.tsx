import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBackspace = forwardRef<SVGSVGElement, IconProps>(
  function IconBackspace(
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
              d="M11.14 20c-2.23 0-3.34 0-4.27-.5s-1.52-1.42-2.7-3.26l-.68-1.06C2.49 13.63 2 12.86 2 12s.5-1.63 1.49-3.18l.68-1.06C5.35 5.92 5.94 5 6.87 4.5S8.91 4 11.14 4h2.64c3.87 0 5.81 0 7.02 1.17C22 6.34 22 8.23 22 12s0 5.66-1.2 6.83S17.65 20 13.78 20z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m15.5 9.5-5 5m0-5 5 5"
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
              d="M6.87 19.5c.93.5 2.04.5 4.27.5h2.64c3.87 0 5.81 0 7.02-1.17C22 17.66 22 15.77 22 12s0-5.66-1.2-6.83S17.65 4 13.78 4h-2.64c-2.23 0-3.34 0-4.27.5s-1.52 1.42-2.7 3.26L3.5 8.82C2.49 10.37 2 11.14 2 12s.5 1.63 1.49 3.18l.68 1.06c1.18 1.84 1.77 2.76 2.7 3.26"
              fill="currentColor"
            />
            <path
              d="M11.03 8.97a.75.75 0 1 0-1.06 1.06L11.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L13 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L14.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L13 10.94z"
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
              d="M6.87 19.5c.93.5 2.04.5 4.27.5h2.64c3.87 0 5.81 0 7.02-1.17C22 17.66 22 15.77 22 12s0-5.66-1.2-6.83S17.65 4 13.78 4h-2.64c-2.23 0-3.34 0-4.27.5s-1.52 1.42-2.7 3.26L3.5 8.82C2.49 10.37 2 11.14 2 12s.5 1.63 1.49 3.18l.68 1.06c1.18 1.84 1.77 2.76 2.7 3.26m4.16-10.53a.75.75 0 0 0-1.06 1.06L11.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L13 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L14.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L13 10.94z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBackspace;
