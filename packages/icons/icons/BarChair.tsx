import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBarChair = forwardRef<SVGSVGElement, IconProps>(function IconBarChair(
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
            d="M5.03 6.94a4.2 4.2 0 0 1 3.51-4.62l.4-.06a19 19 0 0 1 6.12 0l.4.06a4.2 4.2 0 0 1 3.5 4.62v.14c-.07.53-.53.92-1.07.92H6.11c-.54 0-1-.4-1.06-.92z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9 8 6 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m15 8 3 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 17h-9"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.46 6.73a4 4 0 0 1 3.3-4.42l.37-.07a17 17 0 0 1 5.74 0l.38.07a4 4 0 0 1 3.3 4.42l-.03.14a1 1 0 0 1-.99.88H6.47a1 1 0 0 1-1-.88z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.23 7.75 5.27 21.6a.75.75 0 0 0 1.46.32l.95-4.4h8.64l.95 4.4a.75.75 0 0 0 1.46-.32L15.77 7.75h-1.52l.02.16L16 16H8l1.73-8.1.02-.16z"
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
            d="M8.75 2.3a4 4 0 0 0-3.29 4.43l.02.14a1 1 0 0 0 .99.88h1.76L5.27 21.6a.75.75 0 1 0 1.46.32l.95-4.4h8.64l.95 4.4a.75.75 0 1 0 1.46-.32L15.77 7.75h1.76a1 1 0 0 0 1-.88l.01-.14a4 4 0 0 0-3.3-4.42l-.37-.07a17 17 0 0 0-5.74 0zm5.5 5.45h-4.5l-.02.16L8 16h8l-1.73-8.1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBarChair;
