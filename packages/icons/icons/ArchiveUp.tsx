import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArchiveUp = forwardRef<SVGSVGElement, IconProps>(
  function IconArchiveUp(
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
              d="M12 21v-9m0 0 3 3.33M12 12l-3 3.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.5 7v6c0 3.77 0 5.66-1.17 6.83S16.27 21 12.5 21h-1c-3.77 0-5.66 0-6.83-1.17S3.5 16.77 3.5 13V7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M2 5c0-.94 0-1.41.3-1.7C2.58 3 3.05 3 4 3h16c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3H4c-.94 0-1.41 0-1.7-.3C2 6.42 2 5.95 2 5"
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
              d="M12.75 21c3.6 0 5.43-.03 6.58-1.17 1.17-1.17 1.17-3.06 1.17-6.83V7h-17v6c0 3.77 0 5.66 1.17 6.83C5.82 20.97 7.64 21 11.25 21v-7.05l-1.7 1.89a.75.75 0 1 1-1.1-1l3-3.34a.75.75 0 0 1 1.1 0l3 3.33a.75.75 0 1 1-1.1 1l-1.7-1.88z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M2 5c0-.94 0-1.41.3-1.7C2.58 3 3.05 3 4 3h16c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3H4c-.94 0-1.41 0-1.7-.3C2 6.42 2 5.95 2 5"
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
              d="M12.75 21c3.6 0 5.43-.03 6.58-1.17 1.17-1.17 1.17-3.06 1.17-6.83V8h-17v5c0 3.77 0 5.66 1.17 6.83C5.82 20.97 7.64 21 11.25 21v-7.05l-1.7 1.89a.75.75 0 1 1-1.1-1l3-3.34a.75.75 0 0 1 1.1 0l3 3.33a.75.75 0 1 1-1.1 1l-1.7-1.88z"
              fill="currentColor"
            />
            <path
              d="M2 5c0-.94 0-1.41.3-1.7C2.58 3 3.05 3 4 3h16c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3H4c-.94 0-1.41 0-1.7-.3C2 6.42 2 5.95 2 5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArchiveUp;
