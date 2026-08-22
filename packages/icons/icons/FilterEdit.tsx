import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFilterEdit = forwardRef<SVGSVGElement, IconProps>(
  function IconFilterEdit(
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
              d="m14.08 20.79-1.41.91c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.89 8.47a3.3 3.3 0 0 1-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m17.75 11.89-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.25 12.39a3.2 3.2 0 0 0 2.22 2.22"
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
              d="M21.25 4.02v1.95a6 6 0 0 0-3.7-1.22 6.25 6.25 0 0 0-2.58 11.93v2.39c0 .61-.4 1.42-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.99 8.47a3.4 3.4 0 0 1-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
              fill="currentColor"
            />
            <path
              d="M18.59 6.37a4.75 4.75 0 1 0-2.07 9.27 4.75 4.75 0 0 0 2.07-9.27m.91 4.2L17.07 13a1 1 0 0 1-.41.2l-.93.13c-.34.05-.57-.19-.52-.52l.13-.93a1 1 0 0 1 .2-.41l2.08-2.08.35-.35c.42-.42.91-.62 1.52 0s.43 1.11.01 1.53"
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
              d="M18.59 6.37a4.75 4.75 0 1 0-2.07 9.27 4.75 4.75 0 0 0 2.07-9.27m.91 4.2L17.07 13a1 1 0 0 1-.41.2l-.93.13c-.34.05-.57-.19-.52-.52l.13-.93a1 1 0 0 1 .2-.41l2.08-2.08.35-.35c.42-.42.91-.62 1.52 0s.43 1.11.01 1.53"
              fill="currentColor"
            />
            <path
              d="M21.25 4.02v.96c0 .41-.47.66-.84.47a6 6 0 0 0-2.86-.7 6.25 6.25 0 0 0-3.39 11.48l.52.31q.27.16.29.46v2.07c0 .61-.4 1.42-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.99 8.47a3.4 3.4 0 0 1-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFilterEdit;
