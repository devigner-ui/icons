import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMicrophoneSlash2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMicrophoneSlash2(
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
              d="M16.67 6.3V6a4 4 0 1 0-8 0v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.02 9.65v1.7q0 1.6.6 2.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.74 2.84 4.6 18.99"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.67 3v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.7 14.19a4 4 0 0 0 6.96-2.69V11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.45 16.95a7.65 7.65 0 0 0 12.87-5.6v-1.7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 19v3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M17.09 6.42v1.16l-7.28 7.28a4.8 4.8 0 0 1-1.56-3.52V6.42a4.4 4.4 0 0 1 3.3-4.26c.19-.05.37.11.37.3V4c0 .41.34.75.75.75s.75-.34.75-.75V2.46c0-.19.18-.35.37-.3a4.4 4.4 0 0 1 3.3 4.26"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.45 16.22-.99.99a7.8 7.8 0 0 1-2.6-5.81V9.81a.7.7 0 0 1 .69-.69c.39 0 .7.31.7.69v1.59c0 1.92.85 3.65 2.2 4.82"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.48 9.81v1.59a7.8 7.8 0 0 1-7.11 7.77v2.13a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7v-2.13a8 8 0 0 1-3.04-.93l1.03-1.03a6.44 6.44 0 0 0 9.13-5.81V9.81a.7.7 0 0 1 .7-.69.7.7 0 0 1 .69.69"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.09 10.08v1.45a4.43 4.43 0 0 1-5.68 4.23z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
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
              d="M17.09 6.42v1.16l-7.28 7.28a4.8 4.8 0 0 1-1.56-3.52V6.42a4.4 4.4 0 0 1 3.3-4.26c.19-.05.37.11.37.3V4c0 .41.34.75.75.75s.75-.34.75-.75V2.46c0-.19.18-.35.37-.3a4.4 4.4 0 0 1 3.3 4.26"
              fill="currentColor"
            />
            <path
              d="M20.48 9.81v1.59a7.8 7.8 0 0 1-7.11 7.77v2.13a.7.7 0 0 1-.7.7.7.7 0 0 1-.7-.7v-2.13a8 8 0 0 1-3.04-.93l1.03-1.03a6.44 6.44 0 0 0 9.13-5.81V9.81a.7.7 0 0 1 .7-.69.7.7 0 0 1 .69.69"
              fill="currentColor"
            />
            <path
              d="M17.09 10.08v1.45a4.43 4.43 0 0 1-5.68 4.23z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L7.9 15.68a6.3 6.3 0 0 1-1.65-4.28V9.81a.7.7 0 0 0-.7-.69.7.7 0 0 0-.69.69v1.59a7.8 7.8 0 0 0 2.05 5.27l-4.02 4.02c-.3.3-.3.79 0 1.09q.25.21.55.22.3 0 .54-.23L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMicrophoneSlash2;
