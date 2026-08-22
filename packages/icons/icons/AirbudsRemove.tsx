import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirbudsRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconAirbudsRemove(
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
              d="M18 11.5v-.2a1 1 0 0 1 1-1 3 3 0 0 0 3-3V4.85A3 3 0 0 0 19.15 2h-.9a5 5 0 0 0-4.74 4.75l-.01.56v6.19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V8.75a5 5 0 0 0-4.75-4.74L5.19 4h-.34A3 3 0 0 0 2 6.85V9.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V19m4.5 0H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.5 5v2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.5 7v2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="18"
              cy="18"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m17 19 2-2m0 2-2-2"
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
              d="M22 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
              fill="currentColor"
            />
            <path
              d="M16.47 16.47c.3-.3.77-.3 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 7.3V4.85A3.1 3.1 0 0 0 18.98 2h-.95a5.15 5.15 0 0 0-5.02 4.75l-.01.56v8.4a5.5 5.5 0 0 1 4.76-3.2V11.3c0-.55.48-1 1.06-1a3.1 3.1 0 0 0 3.18-3M20.25 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 9.3V6.85A3.1 3.1 0 0 1 5.02 4h.95a5.15 5.15 0 0 1 5.02 4.75l.01.56v10.44A2.3 2.3 0 0 1 8.62 22a2.3 2.3 0 0 1-2.38-2.25V13.3c0-.55-.48-1-1.06-1A3.1 3.1 0 0 1 2 9.3"
              fill="currentColor"
            />
            <path d="M11 18.25H6.24v1.5H11z" fill="currentColor" />
            <path
              d="M4.5 6.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75"
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
              d="M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-1.53-5.53c.3-.3.77-.3 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 7.19V9.3c0 1.66 1.42 3 3.18 3 .58 0 1.06.45 1.06 1v4.95H11v-9.5a5.15 5.15 0 0 0-5.03-4.74L5.37 4h-.35A3.1 3.1 0 0 0 2 6.85zM3.75 7a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M8.62 22C9.93 22 11 21 11 19.75H6.24A2.3 2.3 0 0 0 8.62 22"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 7.3V4.85A3.1 3.1 0 0 0 18.98 2h-.95a5.15 5.15 0 0 0-5.02 4.75l-.01.56v8.4a5.5 5.5 0 0 1 4.76-3.2V11.3c0-.55.48-1 1.06-1a3.1 3.1 0 0 0 3.18-3m-2.5-3.05c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0V5c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAirbudsRemove;
