import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWatchSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconWatchSquare(
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
              d="M5 12c0-2.8 0-4.21.67-5.22a4 4 0 0 1 1.1-1.1C7.8 5 9.2 5 12 5s4.21 0 5.22.67a4 4 0 0 1 1.1 1.1C19 7.8 19 9.2 19 12s0 4.21-.67 5.22a4 4 0 0 1-1.1 1.1C16.2 19 14.8 19 12 19s-4.21 0-5.22-.67a4 4 0 0 1-1.1-1.1C5 16.2 5 14.8 5 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 9v3.08L14 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.78 5.5-.08-.37c-.34-1.5-.5-2.25-1.05-2.69S14.33 2 12.79 2h-1.58c-1.54 0-2.3 0-2.86.44-.55.44-.71 1.2-1.05 2.7l-.08.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.78 18.5-.08.37c-.34 1.5-.5 2.25-1.05 2.7-.55.43-1.32.43-2.86.43h-1.58c-1.54 0-2.3 0-2.86-.44-.55-.44-.71-1.19-1.05-2.7l-.08-.36"
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
              d="M12.8 2h-1.6c-1.53 0-2.3 0-2.85.44s-.71 1.2-1.05 2.7l-.06.28C8.22 5 9.59 5 12 5s3.78 0 4.76.42l-.06-.29c-.34-1.5-.5-2.25-1.05-2.69S14.33 2 12.79 2"
              fill="currentColor"
            />
            <path
              d="M7.24 18.58C8.22 19 9.59 19 12 19s3.78 0 4.76-.42l-.06.29c-.34 1.5-.5 2.25-1.05 2.7-.55.43-1.32.43-2.86.43h-1.58c-1.54 0-2.3 0-2.86-.44-.55-.44-.71-1.19-1.05-2.7z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.78 18.33c1 .67 2.41.67 5.22.67s4.21 0 5.22-.67a4 4 0 0 0 1.1-1.1C19 16.2 19 14.8 19 12s0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C16.2 5 14.8 5 12 5s-4.21 0-5.22.67a4 4 0 0 0-1.1 1.1C5 7.8 5 9.2 5 12s0 4.21.67 5.22a4 4 0 0 0 1.1 1.1"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08l-2-1.92a.8.8 0 0 1-.23-.54V9c0-.41.34-.75.75-.75"
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
              d="M12.5 22h-1c-1.4 0-2.1 0-2.61-.34a1.8 1.8 0 0 1-.82-1.32l.5.07c.9.09 2.01.09 3.35.09h.16c1.34 0 2.45 0 3.36-.1q.24-.01.5-.05a1.8 1.8 0 0 1-.83 1.31c-.5.34-1.2.34-2.61.34"
              fill="currentColor"
            />
            <path
              d="M12.5 2h-1c-1.4 0-2.1 0-2.61.34a1.8 1.8 0 0 0-.82 1.32l.5-.07c.9-.09 2.01-.09 3.35-.09h.16a36 36 0 0 1 3.85.16 1.8 1.8 0 0 0-.82-1.32C14.61 2 13.91 2 12.5 2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 19c-2.8 0-4.21 0-5.22-.67a4 4 0 0 1-1.1-1.1C5 16.2 5 14.8 5 12s0-4.21.67-5.22a4 4 0 0 1 1.1-1.1C7.8 5 9.2 5 12 5s4.21 0 5.22.67a4 4 0 0 1 1.1 1.1C19 7.8 19 9.2 19 12s0 4.21-.67 5.22a4 4 0 0 1-1.1 1.1C16.2 19 14.8 19 12 19m.75-10a.75.75 0 0 0-1.5 0v3.08q0 .31.23.54l2 1.92a.75.75 0 1 0 1.04-1.08l-1.77-1.7z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWatchSquare;
