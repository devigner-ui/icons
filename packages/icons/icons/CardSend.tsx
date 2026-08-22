import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardSend = forwardRef<SVGSVGElement, IconProps>(function IconCardSend(
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
            d="M19 20v-6m0 0 2 2m-2-2-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 12c0-3.77 0-5.66-1.17-6.83S17.77 4 14 4h-4C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 16H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 16h-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 10h20"
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
            d="M14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12v-2h20v3.81l-1.4-1.4a2.25 2.25 0 0 0-3.2 0l-2 2a2.25 2.25 0 0 0 1.35 3.83v1.73q-1.18.04-2.75.03"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.47 13.47c.3-.3.77-.3 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z"
            fill="currentColor"
          />
          <path
            d="M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M10 4h4c3.79 0 5.68 0 6.85 1.12.85.8 1.08 1.96 1.15 3.88v1H2V9c.07-1.92.3-3.08 1.15-3.88C4.32 4 6.2 4 9.99 4"
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
            d="M18.47 13.47c.3-.3.77-.3 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z"
            fill="currentColor"
          />
          <path
            d="M10 4h4c3.77 0 5.66 0 6.83 1.17.84.85 1.08 2.06 1.14 4.08H2.03c.06-2.02.3-3.23 1.14-4.08C4.34 4 6.23 4 10 4"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 20h4q1.58 0 2.75-.03v-1.73a2.25 2.25 0 0 1-1.34-3.83l2-2c.88-.88 2.3-.88 3.18 0l1.4 1.4.01-1.8v-1.26H2V12c0 3.77 0 5.66 1.17 6.83S6.23 20 10 20m-4.75-4c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m7.25-.75a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCardSend;
