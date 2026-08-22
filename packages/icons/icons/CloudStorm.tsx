import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudStorm = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudStorm(
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
              d="M14.38 8.03A5.8 5.8 0 0 1 18.16 8M7.12 10.6A4.26 4.26 0 0 0 2 14.77c0 1.3.6 2.48 1.55 3.25m3.57-7.41A5.68 5.68 0 0 1 12.48 3a5.7 5.7 0 0 1 5.68 5M7.12 10.6q.85.16 1.55.63M18.16 8a5.62 5.62 0 0 1 1.34 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17 19-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m15 15.5-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m13 20-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6 22.38 4.29-3.69H6L10.29 15"
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
              d="M10.85 14.51c.27.31.24.79-.07 1.06l-2.76 2.37h2.27a.75.75 0 0 1 .49 1.32l-4.29 3.7a.75.75 0 1 1-.98-1.14l2.76-2.38H6a.75.75 0 0 1-.49-1.32l4.29-3.69a.75.75 0 0 1 1.05.08m4.68.46c.3.3.3.77 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m2 3.5c.3.3.3.77 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m-4 1c.3.3.3.77 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.29 19A5.7 5.7 0 0 0 22 13.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 3a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 14.77 4.26 4.26 0 0 0 6.29 19z"
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
              d="M10.85 14.51c.27.31.24.79-.07 1.06l-2.76 2.37h2.27a.75.75 0 0 1 .49 1.32l-4.29 3.7a.75.75 0 1 1-.98-1.14l2.76-2.38H6a.75.75 0 0 1-.49-1.32l4.29-3.69a.75.75 0 0 1 1.05.08m4.68.46c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m2 3.5c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0m-4 1c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M19.12 18.26a2.24 2.24 0 0 0-2.25-1.5 2.25 2.25 0 0 0-3.46-2.85l-.88.88q-.07-.69-.54-1.26a2.25 2.25 0 0 0-3.17-.23l-4.29 3.69a2.2 2.2 0 0 0-.73 1.23 4.22 4.22 0 0 1 2.49-7.7q.42 0 .83.09A5.68 5.68 0 0 1 12.48 3a5.7 5.7 0 0 1 5.68 5 5.63 5.63 0 0 1 .97 10.24"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudStorm;
