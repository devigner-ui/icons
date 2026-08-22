import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowLeftDown = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowLeftDown(
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
              d="M18.53 6.53a.75.75 0 0 0-1.06-1.06zm-1.06-1.06-12 12 1.06 1.06 12-12z"
              fill="currentColor"
            />
            <path
              d="M6 9v9h9"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="m11.56 13.5-1.06-1.06-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .41.34.75.75.75h9a.75.75 0 0 0 .53-1.28z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97 1.06 1.06z"
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
              d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .41.34.75.75.75h9a.75.75 0 0 0 .53-1.28l-3.97-3.97z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowLeftDown;
