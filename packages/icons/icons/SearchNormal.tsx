import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSearchNormal = forwardRef<SVGSVGElement, IconProps>(
  function IconSearchNormal(
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
              d="M12.17 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m22.67 22-2-2"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.17 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19"
              fill="currentColor"
            />
            <path
              d="M21.97 22a.7.7 0 0 1-.49-.2l-1.86-1.86a.7.7 0 0 1 0-.99.7.7 0 0 1 .99 0l1.86 1.86a.7.7 0 0 1 0 .99.7.7 0 0 1-.5.2"
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
              d="M12.17 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19"
              fill="currentColor"
            />
            <path
              d="M21.97 22a.7.7 0 0 1-.49-.2l-1.86-1.86a.7.7 0 0 1 0-.99.7.7 0 0 1 .99 0l1.86 1.86a.7.7 0 0 1 0 .99.7.7 0 0 1-.5.2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSearchNormal;
