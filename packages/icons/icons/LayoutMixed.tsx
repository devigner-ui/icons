import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLayoutMixed = forwardRef<SVGSVGElement, IconProps>(
  function IconLayoutMixed(
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
              d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2.5 17.5c0-1.89 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59s2.83 0 3.41.59c.59.58.59 1.52.59 3.41s0 2.83-.59 3.41c-.58.59-1.52.59-3.41.59s-2.83 0-3.41-.59c-.59-.58-.59-1.52-.59-3.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 6.5c0-1.89 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59s2.83 0 3.41.59c.59.58.59 1.52.59 3.41s0 2.83-.59 3.41c-.58.6-1.52.6-3.41.6s-2.83 0-3.41-.6c-.59-.58-.59-1.52-.59-3.41"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 6.63a4.63 4.63 0 1 1 9.27 0 4.63 4.63 0 0 1-9.27 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.73 17.37a4.63 4.63 0 1 1 9.27 0 4.63 4.63 0 0 1-9.27 0"
              fill="currentColor"
            />
            <path
              d="M2 17.5c0-2.12 0-3.18.66-3.84S4.38 13 6.5 13s3.18 0 3.84.66.66 1.72.66 3.84 0 3.18-.66 3.84S8.62 22 6.5 22s-3.18 0-3.84-.66S2 19.62 2 17.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 6.5c0-2.12 0-3.18.66-3.84S15.38 2 17.5 2s3.18 0 3.84.66S22 4.38 22 6.5s0 3.18-.66 3.84-1.72.66-3.84.66-3.18 0-3.84-.66S13 8.62 13 6.5"
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
              d="M2 6.63a4.63 4.63 0 1 1 9.27 0 4.63 4.63 0 0 1-9.27 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.73 17.37a4.63 4.63 0 1 1 9.27 0 4.63 4.63 0 0 1-9.27 0"
              fill="currentColor"
            />
            <path
              d="M2 17.5c0-2.12 0-3.18.66-3.84S4.38 13 6.5 13s3.18 0 3.84.66.66 1.72.66 3.84 0 3.18-.66 3.84S8.62 22 6.5 22s-3.18 0-3.84-.66S2 19.62 2 17.5"
              fill="currentColor"
            />
            <path
              d="M13 6.5c0-2.12 0-3.18.66-3.84S15.38 2 17.5 2s3.18 0 3.84.66S22 4.38 22 6.5s0 3.18-.66 3.84-1.72.66-3.84.66-3.18 0-3.84-.66S13 8.62 13 6.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLayoutMixed;
