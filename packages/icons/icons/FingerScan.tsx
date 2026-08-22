import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFingerScan = forwardRef<SVGSVGElement, IconProps>(
  function IconFingerScan(
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
              d="M12.67 14.88c-.91 0-1.65-.74-1.65-1.65v-2.47a1.65 1.65 0 0 1 3.3 0v2.47c0 .91-.74 1.65-1.65 1.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.65 13.47a5 5 0 0 1-9.98-.4v-2.14a5 5 0 0 1 9.97-.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15.67 2h2c3 0 5 2 5 5v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 9V7c0-3 2-5 5-5h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.67 22h2c3 0 5-2 5-5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 15v2c0 3 2 5 5 5h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M17.66 10.93v2.14a5 5 0 0 1-4.98 5h-.02a5 5 0 0 1-1.85-.36l-.55-.26q-.2-.11-.38-.24a5 5 0 0 1-2.2-4.14v-2.14a5 5 0 0 1 .85-2.79l.29-.39a5 5 0 0 1 1.06-.96q.2-.14.42-.26l.38-.19q.25-.11.51-.18.21-.07.42-.11l.11-.03q.46-.09.94-.09h.02a5 5 0 0 1 1.93.39l.44.21q.63.36 1.15.87c.9.9 1.46 2.15 1.46 3.53"
              fill="currentColor"
            />
            <path
              d="M22.67 9.75a.76.76 0 0 1-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M2.67 9.75A.76.76 0 0 1 1.92 9V7c0-3.44 2.31-5.75 5.75-5.75h2c.41 0 .75.34.75.75s-.34.75-.75.75h-2C5.09 2.75 3.42 4.42 3.42 7v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.67 22.75h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75"
              fill="currentColor"
            />
            <path
              d="M9.67 22.75h-2c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h2c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 15.63a2.4 2.4 0 0 1-2.4-2.4v-2.47a2.4 2.4 0 0 1 2.4-2.4 2.4 2.4 0 0 1 2.4 2.4v2.47a2.4 2.4 0 0 1-2.4 2.4m0-5.76a.9.9 0 0 0-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47a.9.9 0 0 0-.9-.9"
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
              d="M22.67 9.75a.76.76 0 0 1-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M2.67 9.75A.76.76 0 0 1 1.92 9V7c0-3.44 2.31-5.75 5.75-5.75h2c.41 0 .75.34.75.75s-.34.75-.75.75h-2C5.09 2.75 3.42 4.42 3.42 7v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.67 22.75h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75"
              fill="currentColor"
            />
            <path
              d="M9.67 22.75h-2c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h2c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M12.67 9.87a.9.9 0 0 0-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47a.9.9 0 0 0-.9-.9"
              fill="currentColor"
            />
            <path
              d="M16.2 7.4a5 5 0 0 0-1.15-.87l-.44-.21q-.22-.1-.46-.16l-.48-.13-.04-.01a5 5 0 0 0-.95-.09h-.02q-.48 0-.94.09-.06 0-.11.03-.21.04-.42.11-.26.07-.51.18l-.38.19q-.22.12-.42.26a5 5 0 0 0-1.06.96l-.29.39-.25.41q-.58 1.08-.6 2.38v2.14c0 1.73.88 3.25 2.2 4.14q.18.13.38.24l.55.26a5 5 0 0 0 1.85.36h.02a5 5 0 0 0 1.86-.36q.28-.12.54-.26a5 5 0 0 0 2.58-4.38v-2.14c0-1.38-.56-2.63-1.46-3.53m-1.13 5.84a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4v-2.47a2.4 2.4 0 0 1 2.4-2.4 2.4 2.4 0 0 1 2.4 2.4z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFingerScan;
