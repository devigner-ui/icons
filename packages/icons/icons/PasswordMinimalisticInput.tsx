import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPasswordMinimalisticInput = forwardRef<SVGSVGElement, IconProps>(
  function IconPasswordMinimalisticInput(
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
              d="M3.17 18.83C4.34 20 6.23 20 10 20h5c3.11-.01 4.77-.1 5.83-1.17C22 17.66 22 15.77 22 12s0-5.66-1.17-6.83C19.77 4.11 18.1 4.01 15 4h-5C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M15 2v20"
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
              d="M3.17 18.83C4.34 20 6.23 20 10 20h5.75c2.64-.03 4.1-.2 5.08-1.17C22 17.66 22 15.77 22 12s0-5.66-1.17-6.83c-.98-.97-2.46-1.14-5.1-1.17H10C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83"
              fill="currentColor"
            />
            <path d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0" fill="currentColor" />
            <path d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 1.25c.41 0 .75.34.75.75v20a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
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
              d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2c2.64-.03 4.1-.2 5.08-1.17C22 17.66 22 15.77 22 12s0-5.66-1.17-6.83c-.98-.97-2.44-1.14-5.08-1.16z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17 18.83C4.34 20 6.23 20 10 20h3V4h-3C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPasswordMinimalisticInput;
