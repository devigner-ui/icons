import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBarChartAlt = forwardRef<SVGSVGElement, IconProps>(
  function IconBarChartAlt(
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
              d="M3 22h18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 11c0-.94 0-1.41.3-1.7C3.58 9 4.05 9 5 9s1.41 0 1.7.3c.3.29.3.76.3 1.7v6c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3s-1.41 0-1.7-.3C3 18.42 3 17.95 3 17z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10 7c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3s1.41 0 1.7.3c.3.29.3.76.3 1.7v10c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3s-1.41 0-1.7-.3c-.3-.29-.3-.76-.3-1.7z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M17 4c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3s1.41 0 1.7.3c.3.29.3.76.3 1.7v13c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3s-1.41 0-1.7-.3c-.3-.29-.3-.76-.3-1.7z"
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
              d="M3.3 9.3c-.3.29-.3.76-.3 1.7v6c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3s1.41 0 1.7-.3c.3-.29.3-.76.3-1.7v-6c0-.94 0-1.41-.3-1.7C6.42 9 5.95 9 5 9s-1.41 0-1.7.3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.3 2.3c-.3.29-.3.76-.3 1.7v13c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3s1.41 0 1.7-.3c.3-.29.3-.76.3-1.7V4c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3s-1.41 0-1.7.3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M10 7c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3s1.41 0 1.7.3c.3.29.3.76.3 1.7v10c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3s-1.41 0-1.7-.3c-.3-.29-.3-.76-.3-1.7z"
              fill="currentColor"
            />
            <path
              d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"
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
              d="M17.3 2.3c-.3.29-.3.76-.3 1.7v13c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3s1.41 0 1.7-.3c.3-.29.3-.76.3-1.7V4c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3s-1.41 0-1.7.3"
              fill="currentColor"
            />
            <path
              d="M10 7c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3s1.41 0 1.7.3c.3.29.3.76.3 1.7v10c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3s-1.41 0-1.7-.3c-.3-.29-.3-.76-.3-1.7z"
              fill="currentColor"
            />
            <path
              d="M3.3 9.3c-.3.29-.3.76-.3 1.7v6c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3s1.41 0 1.7-.3c.3-.29.3-.76.3-1.7v-6c0-.94 0-1.41-.3-1.7C6.42 9 5.95 9 5 9s-1.41 0-1.7.3"
              fill="currentColor"
            />
            <path
              d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBarChartAlt;
