import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignHorizontalSpacing = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignHorizontalSpacing(
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
              d="M3 2v20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 2v20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 4c-1.89 0-2.83 0-3.41.59C8 5.17 8 6.1 8 8v8c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59s2.83 0 3.41-.59C16 18.83 16 17.9 16 16V8c0-1.89 0-2.83-.59-3.41C14.83 4 13.9 4 12 4"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 22.75a.75.75 0 0 1-.75-.75V2a.75.75 0 1 1 1.5 0v20c0 .41-.34.75-.75.75m-18 0a.75.75 0 0 1-.75-.75V2a.75.75 0 1 1 1.5 0v20c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12 20c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41V8c0-1.89 0-2.83-.59-3.41C14.83 4 13.9 4 12 4s-2.83 0-3.41.59C8 5.17 8 6.1 8 8v8c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59"
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
              d="M3 1.25c.41 0 .75.34.75.75v20a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75m18 0c.41 0 .75.34.75.75v20a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M12 4c-1.89 0-2.83 0-3.41.59C8 5.17 8 6.1 8 8v8c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59s2.83 0 3.41-.59C16 18.83 16 17.9 16 16V8c0-1.89 0-2.83-.59-3.41C14.83 4 13.9 4 12 4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignHorizontalSpacing;
