import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFingerCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconFingerCircle(
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
        {variant === "Broken" ? (
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
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 9.12c.91 0 1.65.74 1.65 1.65v2.47a1.65 1.65 0 0 1-3.3 0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="M16.98 13.47a5 5 0 0 1-9.98-.4v-2.14a5 5 0 0 1 9.97-.51"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 14.88c-.91 0-1.65-.74-1.65-1.65v-2.47a1.65 1.65 0 0 1 3.3 0v2.47c0 .91-.74 1.65-1.65 1.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.98 13.47a5 5 0 0 1-9.98-.4v-2.14a5 5 0 0 1 9.97-.51"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M12 9.87a.9.9 0 0 0-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47a.9.9 0 0 0-.9-.9"
              fill="currentColor"
            />
            <path
              d="M12 17.55a4.75 4.75 0 0 1-4.75-4.75v-1.6a4.75 4.75 0 0 1 9.5 0v1.6A4.75 4.75 0 0 1 12 17.55m0-9.6a3.26 3.26 0 0 0-3.25 3.25v1.6a3.26 3.26 0 0 0 6.5 0v-1.6A3.26 3.26 0 0 0 12 7.95"
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
              d="M12 7.95a3.26 3.26 0 0 0-3.25 3.25v1.6a3.26 3.26 0 0 0 6.5 0v-1.6A3.26 3.26 0 0 0 12 7.95m.9 5.29c0 .5-.4.9-.9.9a.9.9 0 0 1-.9-.9v-2.47c0-.49.4-.9.9-.9s.9.4.9.9z"
              fill="currentColor"
            />
            <path
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.75 10.8a4.75 4.75 0 0 1-9.5 0v-1.6a4.75 4.75 0 0 1 9.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFingerCircle;
