import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserHands = forwardRef<SVGSVGElement, IconProps>(
  function IconUserHands(
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
              d="m20 21.5-.65-5.52A3.37 3.37 0 0 0 16 13H8a3.37 3.37 0 0 0-3.35 2.98L4 21.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 13v5c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59s2.83 0 3.41-.59C16 20.83 16 19.9 16 18v-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="12"
              cy="6.00049"
              r="4"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.9 15.9c.25-2.08 2-3.65 4.1-3.65h8c2.1 0 3.85 1.57 4.1 3.64l.64 5.52a.75.75 0 1 1-1.48.18l-.65-5.52A2.6 2.6 0 0 0 16 13.75H8c-1.33 0-2.45 1-2.6 2.32l-.66 5.52a.75.75 0 0 1-1.48-.18z"
              fill="currentColor"
            />
            <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 13.75V18c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59s2.83 0 3.41-.59C16 20.83 16 19.9 16 18v-4.25z"
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
            <path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="currentColor" />
            <path
              d="M8 12.25a4.1 4.1 0 0 0-4.1 3.64l-.64 5.52a.75.75 0 1 0 1.48.18l.65-5.52a2.6 2.6 0 0 1 1.86-2.21v4.2q-.02 1.35.08 2.24c.08.62.27 1.19.73 1.64.45.46 1.02.65 1.65.73q.89.1 2.24.08h.1q1.35.02 2.24-.08c.63-.08 1.2-.27 1.65-.73.46-.45.65-1.02.73-1.64q.1-.9.08-2.25v-4.19c.98.3 1.73 1.14 1.86 2.2l.65 5.53a.75.75 0 0 0 1.48-.18l-.64-5.52a4.1 4.1 0 0 0-4.1-3.64z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserHands;
