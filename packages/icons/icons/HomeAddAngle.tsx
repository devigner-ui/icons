import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHomeAddAngle = forwardRef<SVGSVGElement, IconProps>(
  function IconHomeAddAngle(
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
              d="M2.36 12.96C1.98 10.32 1.8 9 2.34 7.88s1.69-1.82 3.99-3.19l1.38-.82C9.81 2.62 10.85 2 12 2s2.2.62 4.29 1.87l1.38.82c2.3 1.37 3.45 2.06 4 3.19s.35 2.44-.03 5.08l-.28 1.94c-.49 3.38-.73 5.08-1.9 6.09C18.27 22 16.55 22 13.1 22h-2.22c-3.44 0-5.17 0-6.34-1.01-1.18-1.01-1.42-2.7-1.9-6.1z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15 13h-3m0 0H9m3 0v-3m0 3v3"
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
              d="M13.1 22h-2.2c-3.45 0-5.18 0-6.35-1.01-1.18-1.01-1.42-2.7-1.9-6.1l-.29-1.93C1.98 10.32 1.8 9 2.34 7.87s1.69-1.8 3.99-3.18l1.38-.82C9.81 2.62 10.85 2 12 2s2.2.62 4.29 1.87l1.38.82c2.3 1.37 3.45 2.06 4 3.18s.35 2.45-.03 5.09l-.28 1.94c-.49 3.38-.73 5.08-1.9 6.09C18.27 22 16.55 22 13.1 22"
              fill="currentColor"
            />
            <path
              d="M12 9.25c.41 0 .75.34.75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10c0-.41.34-.75.75-.75"
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
              d="M2.34 7.87c-.55 1.13-.36 2.45.02 5.09l.28 1.94c.49 3.38.73 5.08 1.9 6.09C5.73 22 7.45 22 10.9 22h2.22c3.44 0 5.17 0 6.34-1.01 1.18-1.01 1.42-2.7 1.9-6.1l.29-1.93c.38-2.64.57-3.96.02-5.09s-1.69-1.8-3.99-3.18l-1.38-.82C14.19 2.62 13.15 2 12 2s-2.2.62-4.29 1.87l-1.38.82c-2.3 1.37-3.45 2.06-4 3.18M12 9.25c.41 0 .75.34.75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHomeAddAngle;
