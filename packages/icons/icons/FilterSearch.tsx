import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFilterSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconFilterSearch(
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
              d="M14.99 19.07c0 .61-.4 1.41-.91 1.72l-1.41.91c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.89 8.47a3.3 3.3 0 0 1-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.74 16.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.54 17.12-1-1"
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
              d="m20.42 15.41-.85-.85q.68-1.02.7-2.32a4.24 4.24 0 1 0-1.92 3.54l.85.85q.27.25.61.25t.61-.25a.9.9 0 0 0 0-1.22"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.08 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.98 8.46c-.5-.51-.9-1.41-.9-2.02V4.12c.01-1.21.91-2.12 2-2.12"
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
              d="m21.39 18.24-.94-.94a4.71 4.71 0 1 0-1.34 1.34l.94.94q.3.28.68.28t.68-.28a.97.97 0 0 0-.02-1.34"
              fill="currentColor"
            />
            <path
              d="M20.25 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16a.5.5 0 0 1-.53.1q-.3-.1-.6-.17a6.25 6.25 0 0 0-4.78 11.32c.23.15.32.47.12.65l-.21.16-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L3.99 8.47a3.4 3.4 0 0 1-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFilterSearch;
