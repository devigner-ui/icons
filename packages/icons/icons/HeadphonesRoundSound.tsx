import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeadphonesRoundSound = forwardRef<SVGSVGElement, IconProps>(
  function IconHeadphonesRoundSound(
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
              d="M22 17v-5a10 10 0 0 0-20 0v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 15.19c0-.58 0-.87-.07-1.1a1.5 1.5 0 0 0-1.1-1.06 4 4 0 0 0-1.05.02 6 6 0 0 0-1.82.27A3.1 3.1 0 0 0 2.1 15.4c-.11.42-.11.92-.11 1.93v.18c0 1.03 0 1.55.12 1.98a3 3 0 0 0 1.6 1.95c.38.2.87.27 1.84.43.65.1.97.16 1.23.1.51-.1.94-.48 1.12-1 .09-.25.09-.6.09-1.28z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16 15.19c0-.58 0-.87.07-1.1.16-.53.58-.93 1.1-1.06.22-.05.5-.03 1.05.02a6 6 0 0 1 1.82.27c.9.34 1.59 1.12 1.85 2.08.11.42.11.92.11 1.93v.18c0 1.03 0 1.55-.12 1.98a3 3 0 0 1-1.6 1.95c-.38.2-.87.27-1.84.43-.65.1-.97.16-1.23.1a1.5 1.5 0 0 1-1.12-1c-.09-.25-.09-.6-.09-1.28z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 6.5v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 8v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 8v2"
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
              d="M2 12.12C2 6.53 6.48 2 12 2s10 4.53 10 10.12v5.25c0 .81 0 1.37-.14 1.87A3.5 3.5 0 0 1 20 21.42c-.46.22-1 .31-1.8.44l-.13.02q-.43.07-.73.1-.3.04-.64-.01a2.1 2.1 0 0 1-1.68-2v-4.91c0-.42 0-.79.09-1.1a2.1 2.1 0 0 1 1.53-1.43q.46-.09 1.1-.01h.09l.1.02c.79.06 1.33.1 1.78.27q.49.18.88.49v-1.18a8.66 8.66 0 0 0-8.6-8.7c-4.75 0-8.6 3.9-8.6 8.7v1.18q.4-.3.88-.49c.45-.17.99-.21 1.77-.27l.11-.01.1-.01q.63-.08 1.1 0c.72.18 1.3.72 1.52 1.44.1.31.1.68.1 1.1v4.18q0 .44-.02.74 0 .32-.11.64a2.1 2.1 0 0 1-1.56 1.35q-.33.05-.64.01-.3-.03-.73-.1l-.13-.02a7 7 0 0 1-1.8-.44 3.5 3.5 0 0 1-1.85-2.18c-.12-.4-.14-.86-.14-1.47z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 5.75c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 7.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 7.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
                fill="currentColor"
              />
            </g>
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
              d="M2 12.12C2 6.53 6.48 2 12 2s10 4.53 10 10.12v5.25c0 .81 0 1.37-.14 1.87A3.5 3.5 0 0 1 20 21.42c-.46.22-1 .31-1.8.44l-.13.02q-.43.07-.73.1-.3.04-.64-.01a2.1 2.1 0 0 1-1.68-2v-4.91c0-.42 0-.79.09-1.1a2.1 2.1 0 0 1 1.53-1.43q.46-.09 1.1-.01h.09l.1.02c.79.06 1.33.1 1.78.27q.49.18.88.49v-1.18a8.66 8.66 0 0 0-8.6-8.7c-4.75 0-8.6 3.9-8.6 8.7v1.18q.4-.3.88-.49c.45-.17.99-.21 1.77-.27l.11-.01.1-.01q.63-.08 1.1 0c.72.18 1.3.72 1.52 1.44.1.31.1.68.1 1.1v4.18q0 .44-.02.74 0 .32-.11.64a2.1 2.1 0 0 1-1.56 1.35q-.33.05-.64.01-.3-.03-.73-.1l-.13-.02a7 7 0 0 1-1.8-.44 3.5 3.5 0 0 1-1.85-2.18c-.12-.4-.14-.86-.14-1.47z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 5.75c.41 0 .75.34.75.75v5a.75.75 0 1 1-1.5 0v-5c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 7.25c.41 0 .75.34.75.75v2a.75.75 0 1 1-1.5 0V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 7.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeadphonesRoundSound;
