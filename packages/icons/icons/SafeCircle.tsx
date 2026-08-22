import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSafeCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconSafeCircle(
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
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 8v8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16 10 1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11 15 1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12 10-1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17 15-1-1"
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
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.47 8.47c.3-.3.77-.3 1.06 0l1 1 .11.14a2.7 2.7 0 0 1 2.72 0l.11-.14 1-1a.75.75 0 1 1 1.06 1.06l-1 1-.14.11a2.7 2.7 0 0 1 0 2.72l.14.11 1 1a.75.75 0 1 1-1.06 1.06l-1-1-.11-.14a2.7 2.7 0 0 1-2.72 0l-.11.14-1 1a.75.75 0 1 1-1.06-1.06l1-1 .14-.11a2.7 2.7 0 0 1 0-2.72l-.14-.1-1-1a.75.75 0 0 1 0-1.07M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
              fill="currentColor"
            />
            <path
              d="M7 7.25c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
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
              d="M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M7.75 8a.75.75 0 1 0-1.5 0v8a.75.75 0 0 0 1.5 0zm3.78.47a.75.75 0 1 0-1.06 1.06l1 1 .14.11a2.7 2.7 0 0 0 0 2.72l-.14.11-1 1a.75.75 0 1 0 1.06 1.06l1-1 .11-.14a2.7 2.7 0 0 0 2.72 0l.11.14 1 1a.75.75 0 1 0 1.06-1.06l-1-1-.14-.11a2.7 2.7 0 0 0 0-2.72l.14-.1 1-1a.75.75 0 0 0-1.06-1.07l-1 1-.11.14a2.7 2.7 0 0 0-2.72 0l-.11-.14z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSafeCircle;
