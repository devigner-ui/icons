import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFilterRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconFilterRemove(
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
              d="M22.3 14.75q-.02 1.35-.69 2.45a4.73 4.73 0 0 1-8.81-2.45 4.75 4.75 0 0 1 9.5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m18.82 15.99-2.51-2.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m18.8 13.51-2.51 2.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.36 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.75 4.75 0 0 0-3.6 8.61v.34c0 .61-.4 1.42-.91 1.72l-1.41.91c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.89 8.47a3.4 3.4 0 0 1-.91-2.02V4.12C3.98 2.91 4.88 2 6 2h13.34c1.11 0 2.02.91 2.02 2.02"
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
              d="M6.08 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72l-1.39.92c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.99 8.47c-.5-.51-.9-1.41-.9-2.02V4.13c0-1.22.9-2.13 1.99-2.13"
              fill="currentColor"
            />
            <path
              d="M17.55 10a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m1.8 6.52a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.72-.72-.75.75a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.75-.75-.72-.73a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.72.72.7-.7a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.7.7.72.73c.3.29.3.77 0 1.06"
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
              d="M17.55 10a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m1.8 6.52a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.72-.72-.75.75a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.75-.75-.72-.73a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.72.72.7-.7a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.7.7.72.73c.3.29.3.77 0 1.06"
              fill="currentColor"
            />
            <path
              d="M21.25 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16a.5.5 0 0 1-.53.1q-.3-.1-.6-.17a6.25 6.25 0 0 0-4.78 11.32c.23.15.32.47.12.65l-.21.16-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.99 8.47a3.4 3.4 0 0 1-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFilterRemove;
