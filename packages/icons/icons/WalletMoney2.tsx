import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalletMoney2 = forwardRef<SVGSVGElement, IconProps>(
  function IconWalletMoney2(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.42 16.86v2.03c0 1.72-1.6 3.11-3.57 3.11s-3.58-1.39-3.58-3.11v-2.03c0 1.72 1.6 2.94 3.58 2.94 1.97 0 3.57-1.23 3.57-2.94"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.42 14.11q-.01.76-.38 1.36c-.59.97-1.8 1.58-3.2 1.58a3.7 3.7 0 0 1-3.2-1.58q-.37-.6-.38-1.36c0-.86.4-1.63 1.04-2.19a3.8 3.8 0 0 1 2.53-.91c.99 0 1.88.35 2.53.91a2.8 2.8 0 0 1 1.06 2.19"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.42 14.11v2.75c0 1.72-1.6 2.94-3.57 2.94s-3.58-1.23-3.58-2.94v-2.75c0-1.72 1.6-3.11 3.58-3.11.99 0 1.88.35 2.53.91a3 3 0 0 1 1.04 2.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22.67 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 10.5v-2c0-2.72 1.64-4.62 4.19-4.94q.39-.06.81-.06h9q.39 0 .75.05c2.58.3 4.25 2.21 4.25 4.95v1.45h-2.08a2 2 0 0 0-1.44.6 2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.96v1.45c0 3-2 5-5 5h-2.5"
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
              opacity={duotone ? "0.4" : "1"}
              d="M18.15 10.55a2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.96v1.45c0 3-2 5-5 5h-9c-3 0-5-2-5-5v-7c0-2.72 1.64-4.62 4.19-4.94q.39-.06.81-.06h9q.39 0 .75.05c2.58.3 4.25 2.21 4.25 4.95v1.45h-2.08a2 2 0 0 0-1.44.6"
              fill="currentColor"
            />
            <path
              d="M22.67 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
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
              d="M21.64 16.08c-.24 2.67-2.17 4.42-4.97 4.42h-9a5 5 0 0 1-5-5v-7c0-2.72 1.64-4.62 4.2-4.94q.38-.06.8-.06h9q.39 0 .75.05a4.6 4.6 0 0 1 4.22 4.37.5.5 0 0 1-.5.53H19.6c-.96 0-1.85.37-2.49 1.03a3.5 3.5 0 0 0-1.05 2.82 3.65 3.65 0 0 0 3.66 3.25h1.43a.5.5 0 0 1 .5.53"
              fill="currentColor"
            />
            <path
              d="M22.67 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWalletMoney2;
