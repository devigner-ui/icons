import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDumbbellLargeMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconDumbbellLargeMinimalistic(
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
              d="m8.32 12.2 3.88-3.88m3.1 3.1-3.88 3.88"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M3.43 15.62c-.9-.9-1.35-1.36-1.42-1.9v-.38c.07-.55.52-1 1.42-1.9.9-.91 1.36-1.36 1.91-1.43h.37c.55.07 1 .52 1.9 1.42l4.96 4.95c.9.9 1.35 1.36 1.42 1.91v.37c-.07.55-.52 1-1.42 1.9-.9.91-1.36 1.37-1.91 1.43h-.37c-.55-.06-1-.52-1.9-1.42z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11.43 7.62c-.9-.9-1.35-1.36-1.42-1.9v-.38c.07-.55.52-1 1.42-1.9.9-.91 1.36-1.36 1.91-1.43h.37c.55.07 1 .52 1.9 1.42l4.96 4.95c.9.9 1.35 1.36 1.42 1.91v.37c-.07.55-.52 1-1.42 1.9-.9.91-1.36 1.37-1.91 1.43h-.37c-.55-.06-1-.52-1.9-1.42z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m18.02 2.5 3.1 3.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m2.5 18.02 3.1 3.1"
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
              d="m3.43 15.62 4.95 4.95c.9.9 1.36 1.36 1.9 1.42h.38c.55-.06 1-.52 1.9-1.42.91-.9 1.36-1.36 1.43-1.91v-.37c-.07-.55-.52-1-1.42-1.9l-1.11-1.12-3.1-3.1-.74-.74c-.9-.9-1.36-1.35-1.9-1.42h-.38c-.55.07-1 .52-1.9 1.42-.91.9-1.36 1.36-1.43 1.91v.37c.07.55.52 1 1.42 1.91m8.73-7.27 3.1 3.1 1.12 1.12c.9.9 1.36 1.36 1.9 1.42h.38c.55-.06 1-.52 1.9-1.42.91-.9 1.36-1.36 1.43-1.9v-.38c-.07-.55-.52-1-1.42-1.9l-4.95-4.96c-.9-.9-1.36-1.35-1.9-1.42h-.38c-.55.07-1 .52-1.9 1.42-.91.9-1.36 1.36-1.43 1.91v.37c.07.55.52 1 1.42 1.91z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11.46 15.27 3.8-3.81-3.1-3.1-3.8 3.8z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.49 1.97c.3-.3.77-.3 1.06 0l3.1 3.1a.75.75 0 0 1-1.06 1.06l-3.1-3.1a.75.75 0 0 1 0-1.06M1.97 17.49c.29-.3.76-.3 1.06 0l3.1 3.1a.75.75 0 0 1-1.06 1.06l-3.1-3.1a.75.75 0 0 1 0-1.06"
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
              d="m8.38 20.57-4.95-4.95c-.9-.9-1.35-1.36-1.42-1.9v-.38c.07-.55.52-1 1.42-1.9.9-.91 1.36-1.36 1.91-1.43h.37c.55.07 1 .52 1.9 1.42l.74.74 3.81-3.82-.73-.73c-.9-.9-1.35-1.36-1.42-1.9v-.38c.07-.55.52-1 1.42-1.9.9-.91 1.36-1.36 1.91-1.43h.37c.55.07 1 .52 1.9 1.42l4.96 4.95c.9.9 1.35 1.36 1.42 1.91v.37c-.07.55-.52 1-1.42 1.9-.9.91-1.36 1.37-1.91 1.43h-.37c-.55-.06-1-.52-1.9-1.42l-1.12-1.11-3.81 3.8 1.1 1.12c.91.9 1.36 1.36 1.43 1.91v.37c-.07.55-.52 1-1.42 1.9-.9.91-1.36 1.37-1.91 1.43h-.37c-.55-.06-1-.52-1.9-1.42"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.49 1.97c.3-.3.77-.3 1.06 0l3.1 3.1a.75.75 0 0 1-1.06 1.06l-3.1-3.1a.75.75 0 0 1 0-1.06M1.97 17.49c.29-.3.76-.3 1.06 0l3.1 3.1a.75.75 0 1 1-1.06 1.06l-3.1-3.1a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDumbbellLargeMinimalistic;
