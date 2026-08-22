import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkRoundAngle = forwardRef<SVGSVGElement, IconProps>(
  function IconLinkRoundAngle(
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
              d="m12.8 15.8 1.42-1.43a6.08 6.08 0 0 0-8.58-8.6L2.78 8.65A6.08 6.08 0 0 0 6.73 19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.2 8.2 9.79 9.63a6.08 6.08 0 0 0 8.58 8.6l2.86-2.87A6.08 6.08 0 0 0 17.27 5"
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
              d="M2.28 7.93a6.75 6.75 0 0 0 4.4 11.52.75.75 0 0 0 .08-1.5A5.25 5.25 0 0 1 3.34 9l2.83-2.83a5.25 5.25 0 1 1 7.42 7.42l-1.41 1.42a.75.75 0 1 0 1.06 1.06l1.41-1.42a6.75 6.75 0 0 0-9.54-9.54z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.4 17.83a5.25 5.25 0 0 1 0-7.42L11.83 9a.75.75 0 0 0-1.06-1.07L9.35 9.35a6.75 6.75 0 0 0 9.54 9.54l2.83-2.82a6.75 6.75 0 0 0-4.4-11.52.75.75 0 1 0-.08 1.5A5.25 5.25 0 0 1 20.66 15l-2.83 2.83a5.25 5.25 0 0 1-7.42 0"
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
              d="M6.17 6.3a5.32 5.32 0 1 1 7.52 7.54l-1.43 1.43a.75.75 0 0 0 1.06 1.06l1.43-1.43a6.83 6.83 0 0 0-9.64-9.65L2.25 8.1a6.83 6.83 0 0 0 4.44 11.64.75.75 0 1 0 .08-1.5 5.33 5.33 0 0 1-3.46-9.08z"
              fill="currentColor"
            />
            <path
              d="M17.31 4.25a.75.75 0 0 0-.08 1.5 5.33 5.33 0 0 1 3.47 9.08l-2.87 2.86a5.32 5.32 0 1 1-7.52-7.53l1.43-1.43a.75.75 0 0 0-1.06-1.06L9.25 9.1a6.83 6.83 0 0 0 9.64 9.65l2.86-2.86a6.83 6.83 0 0 0-4.44-11.64"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLinkRoundAngle;
