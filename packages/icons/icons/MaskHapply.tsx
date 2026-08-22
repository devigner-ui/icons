import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaskHapply = forwardRef<SVGSVGElement, IconProps>(
  function IconMaskHapply(
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
              d="M21 12V6.72c0-2.2 0-3.29-.7-3.89-.71-.6-1.8-.41-3.96-.05l-1.05.17a21 21 0 0 1-3.29.41c-.83 0-1.65-.13-3.29-.4l-1.05-.18c-2.16-.36-3.25-.54-3.95.05S3 4.53 3 6.72V12c0 5.49 4.24 8.15 6.9 9.29.72.3 1.08.46 2.1.46s1.38-.16 2.1-.46c2.66-1.14 6.9-3.8 6.9-9.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M6.5 9c.3-.58 1.08-1 2-1s1.7.42 2 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.5 9c.3-.58 1.08-1 2-1s1.7.42 2 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8.5 14s1.05 1 3.5 1 3.5-1 3.5-1"
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
              d="M21 6.43v5.47c0 5.69-4.24 8.45-6.9 9.62-.72.32-1.08.48-2.1.48s-1.38-.16-2.1-.48C7.24 20.35 3 17.6 3 11.9V6.43c0-2.27 0-3.4.7-4.03.71-.62 1.8-.43 3.96-.06l1.05.19c1.64.28 2.46.42 3.29.42s1.65-.14 3.29-.42l1.05-.19c2.16-.37 3.25-.56 3.95.06S21 4.16 21 6.43"
              fill="currentColor"
            />
            <path
              d="M7.17 9.14c.12-.26.59-.6 1.33-.6s1.2.34 1.33.6c.18.38.63.54 1 .35.38-.2.53-.66.34-1.04-.46-.96-1.57-1.47-2.67-1.47s-2.21.51-2.67 1.47a.8.8 0 0 0 .33 1.04c.38.19.83.03 1.01-.35"
              fill="currentColor"
            />
            <path
              d="M15.5 8.53c-.74 0-1.2.35-1.33.61a.74.74 0 0 1-1 .35.8.8 0 0 1-.34-1.04c.46-.96 1.57-1.47 2.67-1.47s2.21.51 2.67 1.47c.19.38.04.85-.33 1.04a.74.74 0 0 1-1.01-.35c-.12-.26-.59-.6-1.33-.6"
              fill="currentColor"
            />
            <path
              d="M7.99 14.54a.8.8 0 0 1-.03-1.1.75.75 0 0 1 1.06-.02 3 3 0 0 0 .61.36c.48.22 1.25.45 2.37.45s1.9-.23 2.37-.45a3 3 0 0 0 .6-.36l.02-.02a.73.73 0 0 1 1.05.04.8.8 0 0 1-.02 1.1H16l-.02.03-.26.2q-.26.2-.75.43c-.66.3-1.64.59-2.97.59s-2.3-.29-2.97-.59a5 5 0 0 1-1.04-.66"
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
              d="M21 11.9V6.43c0-2.27 0-3.4-.7-4.03-.71-.62-1.8-.43-3.96-.06l-1.05.19c-1.64.28-2.46.42-3.29.42s-1.65-.14-3.29-.42l-1.05-.19C5.5 1.97 4.4 1.78 3.7 2.4S3 4.16 3 6.43v5.47c0 5.69 4.24 8.45 6.9 9.62.72.32 1.08.48 2.1.48s1.38-.16 2.1-.48c2.66-1.17 6.9-3.93 6.9-9.62M7.17 9.14c.12-.26.59-.6 1.33-.6s1.2.34 1.33.6c.18.38.63.54 1 .35.38-.2.53-.66.34-1.04-.46-.96-1.57-1.47-2.67-1.47s-2.21.51-2.67 1.47a.8.8 0 0 0 .33 1.04c.38.19.83.03 1.01-.35m8.33-.6c-.74 0-1.2.34-1.33.6a.74.74 0 0 1-1 .35.8.8 0 0 1-.34-1.04c.46-.96 1.57-1.47 2.67-1.47s2.21.51 2.67 1.47c.19.38.04.85-.33 1.04a.74.74 0 0 1-1.01-.35c-.12-.26-.59-.6-1.33-.6m-7.51 6a.8.8 0 0 1-.03-1.1.75.75 0 0 1 1.06-.02 3 3 0 0 0 .61.36c.48.22 1.25.45 2.37.45s1.9-.23 2.37-.45a3 3 0 0 0 .62-.38.73.73 0 0 1 1.05.04.8.8 0 0 1-.02 1.1H16l-.02.03-.26.2q-.26.2-.75.43c-.66.3-1.64.59-2.97.59s-2.3-.29-2.97-.59a5 5 0 0 1-1.04-.66"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMaskHapply;
