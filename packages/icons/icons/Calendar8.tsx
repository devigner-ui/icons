import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendar8 = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendar8(
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
              d="M8.67 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.67 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.67 3.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18h-6c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.42 17.6H3.92"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 8.25c-1.23 0-2.27.67-2.27 1.97 0 .62.29 1.09.73 1.39-.61.36-.96.94-.96 1.62 0 1.24.95 2.01 2.5 2.01 1.54 0 2.5-.77 2.5-2.01 0-.68-.35-1.27-.97-1.62.45-.31.73-.77.73-1.39 0-1.3-1.03-1.97-2.26-1.97m0 2.84c-.52 0-.9-.31-.9-.8s.38-.79.9-.79.9.29.9.79c0 .49-.38.8-.9.8m0 2.91c-.66 0-1.14-.33-1.14-.93s.48-.92 1.14-.92 1.14.33 1.14.92-.48.93-1.14.93"
              fill="currentColor"
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
              d="M8.67 1.25c.41 0 .75.34.75.75v3a.75.75 0 1 1-1.5 0V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.67 1.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.17 8.37v8.76l-.02.47H3.19l-.02-.47V8.37A4.87 4.87 0 0 1 8.04 3.5h9.26a4.87 4.87 0 0 1 4.87 4.87"
              fill="currentColor"
            />
            <path
              d="M22.15 17.6A4.9 4.9 0 0 1 17.3 22H8.04a4.9 4.9 0 0 1-4.85-4.4z"
              fill="currentColor"
            />
            <path
              d="M14.2 11.62c.45-.31.73-.77.73-1.39 0-1.3-1.04-1.97-2.26-1.97s-2.27.67-2.27 1.97c0 .62.29 1.09.73 1.39-.61.36-.96.94-.96 1.62 0 1.24.95 2.01 2.5 2.01 1.54 0 2.5-.77 2.5-2.01 0-.68-.35-1.27-.97-1.62M12.67 9.5c.52 0 .9.29.9.79 0 .49-.38.8-.9.8s-.9-.31-.9-.8.38-.79.9-.79m0 4.5c-.66 0-1.14-.33-1.14-.93s.48-.92 1.14-.92 1.14.33 1.14.92-.48.93-1.14.93"
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
              d="M8.92 5.75A.76.76 0 0 1 8.17 5V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M16.42 5.75a.76.76 0 0 1-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 14.09c.52 0 .9-.31.9-.8s-.38-.79-.9-.79-.9.29-.9.79c0 .49.38.8.9.8"
              fill="currentColor"
            />
            <path
              d="M12.67 17c.63 0 1.14-.42 1.14-.93s-.51-.93-1.14-.93-1.14.42-1.14.93.51.93 1.14.93"
              fill="currentColor"
            />
            <path
              d="M20.24 4.5a1.01 1.01 0 0 0-1.61.81v.1c0 1.17-.84 2.25-2.01 2.37a2.25 2.25 0 0 1-2.49-2.24V4.5a1 1 0 0 0-1-1h-.92a1 1 0 0 0-1 1v1.04a2.2 2.2 0 0 1-1.32 2.04q-.13.07-.3.12-.18.06-.39.08-.24.03-.48 0a2 2 0 0 1-.69-.2l-.29-.16a2.5 2.5 0 0 1-1.03-2.01v-.1c0-.77-.82-1.23-1.47-.9l-.03.02-.11.07-.1.08A4 4 0 0 0 3.98 5.7l-.03.04-.27.47q-.1.18-.16.37l-.06.14a4 4 0 0 0-.23.89l-.04.34-.02.42v8.76A4.87 4.87 0 0 0 8.04 22h9.26a4.87 4.87 0 0 0 4.87-4.87V8.37c0-1.59-.76-2.98-1.93-3.87m-7.57 13.75c-1.55 0-2.5-.77-2.5-2.01 0-.68.35-1.27.96-1.62a1.6 1.6 0 0 1-.73-1.4c0-1.3 1.04-1.97 2.27-1.97s2.26.67 2.26 1.97c0 .63-.28 1.09-.73 1.4.62.35.97.94.97 1.62 0 1.24-.96 2.01-2.5 2.01"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendar8;
