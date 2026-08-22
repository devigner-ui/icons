import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArchiveDown = forwardRef<SVGSVGElement, IconProps>(
  function IconArchiveDown(
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
            <path
              d="M12 7v9m0 0 3-3.33M12 16l-3-3.33"
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
              d="M12.56 17.5a.75.75 0 0 1-1.12 0l-3-3.33a.75.75 0 0 1 1.12-1l1.69 1.88V7H3.5v6c0 3.77 0 5.66 1.17 6.83S7.73 21 11.5 21h1c3.77 0 5.66 0 6.83-1.17S20.5 16.77 20.5 13V7h-7.75v8.05l1.7-1.88a.75.75 0 0 1 1.1 1z"
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
              d="M12.56 17.5a.75.75 0 0 1-1.12 0l-3-3.33a.75.75 0 0 1 1.12-1l1.69 1.88V8H3.5v5c0 3.77 0 5.66 1.17 6.83S7.73 21 11.5 21h1c3.77 0 5.66 0 6.83-1.17S20.5 16.77 20.5 13V8h-7.75v7.05l1.7-1.88a.75.75 0 0 1 1.1 1z"
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

export default IconArchiveDown;
