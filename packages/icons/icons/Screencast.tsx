import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScreencast = forwardRef<SVGSVGElement, IconProps>(
  function IconScreencast(
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
              d="M11 20h3c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83S17.77 4 14 4H6.5c-.46 0-.7 0-.9.02a4 4 0 0 0-3.58 3.59C2 7.8 2 8.04 2 8.5V11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 20a9 9 0 0 0-9-9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 20a6 6 0 0 0-6-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M5 20a3 3 0 0 0-3-3"
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
              d="M14 4h-4C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83S17.77 4 14 4"
              fill="currentColor"
            />
            <path
              d="M2.75 9.5a.75.75 0 0 0 0 1.5C7.31 11 11 14.7 11 19.25a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2.75 9.5"
              fill="currentColor"
            />
            <path
              d="M2.75 12.5a.75.75 0 0 0 0 1.5C5.65 14 8 16.35 8 19.25a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-6.75-6.75"
              fill="currentColor"
            />
            <path
              d="M2.75 15.5a.75.75 0 0 0 0 1.5C3.99 17 5 18 5 19.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75"
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
              d="M6.5 4H14c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12s0 5.66-1.17 6.83c-1.1 1.1-3.7 1.17-7.14 1.17a.7.7 0 0 1-.69-.69A10.3 10.3 0 0 0 2.69 9 .7.7 0 0 1 2 8.31c0-.3 0-.6.02-.7a4 4 0 0 1 3.59-3.59C5.8 4 6.04 4 6.5 4"
              fill="currentColor"
            />
            <path
              d="M2 10.25a.75.75 0 0 0 0 1.5c4.56 0 8.25 3.7 8.25 8.25a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2 10.25"
              fill="currentColor"
            />
            <path
              d="M2 13.25a.75.75 0 0 0 0 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 0 0 1.5 0A6.75 6.75 0 0 0 2 13.25"
              fill="currentColor"
            />
            <path
              d="M2 16.25a.75.75 0 0 0 0 1.5c1.24 0 2.25 1 2.25 2.25a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 16.25"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconScreencast;
