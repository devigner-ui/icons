import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudBolt = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudBolt(
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
              d="M6.29 18A4.26 4.26 0 0 1 2 13.76a4.26 4.26 0 0 1 5.12-4.15m7.26-2.58A5.8 5.8 0 0 1 18.16 7M7.12 9.61A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5M7.12 9.61q.85.16 1.55.63m9.49-3.23A5.65 5.65 0 0 1 22 12.35a5.7 5.7 0 0 1-4.5 5.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m9.63 17.45 1.14-1.55c.75-1 1.12-1.5 1.46-1.4.35.1.35.72.35 1.95v.12c0 .44 0 .67.14.8l.01.01c.14.14.38.14.84.14.83 0 1.25 0 1.39.25v.01c.14.26-.1.59-.59 1.24l-1.14 1.55c-.75 1-1.12 1.5-1.46 1.4-.35-.1-.35-.72-.35-1.95v-.12c0-.44 0-.66-.14-.8l-.01-.01c-.14-.14-.38-.14-.84-.14-.83 0-1.25 0-1.39-.25v-.01c-.14-.26.1-.58.59-1.24"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.29 18A5.7 5.7 0 0 0 22 12.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 2a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 13.77 4.26 4.26 0 0 0 6.29 18z"
              fill="currentColor"
            />
            <path
              d="m9.63 17.47 1.14-1.56c.75-1 1.12-1.5 1.46-1.4.35.1.35.72.35 1.95v.12c0 .45 0 .67.14.8l.01.01c.14.14.38.14.84.14.83 0 1.25 0 1.39.25v.02c.14.25-.1.58-.59 1.23l-1.14 1.56c-.75 1-1.12 1.5-1.46 1.4-.35-.11-.35-.73-.35-1.96v-.11c0-.45 0-.67-.14-.81h-.01c-.14-.14-.38-.14-.84-.14-.83 0-1.25 0-1.39-.26v-.01c-.14-.26.1-.58.59-1.23"
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
              d="m9.63 17.46 1.14-1.55c.75-1 1.12-1.5 1.46-1.4.35.1.35.72.35 1.95v.12c0 .44 0 .67.14.8l.01.01c.14.14.38.14.84.14.83 0 1.25 0 1.39.25v.02c.14.25-.1.58-.59 1.23l-1.14 1.55c-.75 1.01-1.12 1.51-1.46 1.4-.35-.1-.35-.72-.35-1.95v-.12c0-.44 0-.66-.14-.8h-.01c-.14-.15-.38-.15-.84-.15-.83 0-1.25 0-1.39-.25v-.01c-.14-.26.1-.58.59-1.24"
              fill="currentColor"
            />
            <path
              d="M7.58 18.01q.1-.3.2-.49c.15-.3.4-.62.6-.9l1.24-1.67c.33-.44.65-.89.95-1.2.22-.22 1-1.02 2.1-.68 1.14.35 1.31 1.48 1.35 1.8q.07.51.06 1.16.34 0 .65.04a2 2 0 0 1 1.57 1.03q.23.49.2.9a5.7 5.7 0 0 0 5.5-5.64c0-2.47-1.6-4.58-3.84-5.34A5.7 5.7 0 0 0 12.48 2a5.68 5.68 0 0 0-5.36 7.61A4.26 4.26 0 0 0 2 13.77a4.26 4.26 0 0 0 4.29 4.24z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudBolt;
