import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeadphonesRound = forwardRef<SVGSVGElement, IconProps>(
  function IconHeadphonesRound(
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
              d="M21 17v-5a9 9 0 1 0-18 0v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 15.5v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 15.5v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 13.84c0-.76 0-1.14-.17-1.4q-.14-.21-.35-.33c-.27-.16-.63-.12-1.36-.05-1.24.12-1.85.18-2.3.52q-.33.25-.54.63C3 13.7 3 14.34 3 15.63v1.56c0 1.28 0 1.92.28 2.4q.16.3.4.5c.4.38 1 .5 2.21.74.85.16 1.27.25 1.59.07q.17-.1.3-.26c.22-.28.22-.73.22-1.63z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16 13.84c0-.76 0-1.14.17-1.4q.14-.21.35-.33c.27-.16.63-.12 1.36-.05 1.24.12 1.85.18 2.3.52q.33.25.54.63c.28.49.28 1.13.28 2.42v1.56c0 1.28 0 1.92-.28 2.4q-.16.3-.4.5c-.4.38-1 .5-2.21.74-.85.16-1.27.25-1.59.07a1 1 0 0 1-.3-.26c-.22-.28-.22-.73-.22-1.63z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 12a9.75 9.75 0 1 1 19.5 0v2.8a.75.75 0 0 1 1 .7v2a.75.75 0 0 1-1.5 0V17h-1v-5a8.25 8.25 0 0 0-16.5 0v5h-1v.5a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1-.7z"
              fill="currentColor"
            />
            <path
              d="M8 14.05c0-.85 0-1.27-.21-1.57q-.16-.23-.4-.36c-.33-.17-.77-.13-1.65-.05-1.48.13-2.22.2-2.75.57q-.4.29-.66.7C2 13.88 2 14.6 2 16.04v1.73c0 1.42 0 2.13.34 2.67q.19.31.47.55c.5.42 1.22.55 2.66.82 1.02.18 1.53.28 1.9.08q.21-.1.36-.29c.27-.32.27-.8.27-1.8z"
              fill="currentColor"
            />
            <path
              d="M16 14.05c0-.85 0-1.27.21-1.57q.16-.23.4-.36c.33-.17.77-.13 1.65-.05 1.48.13 2.22.2 2.75.57q.4.29.66.7c.33.54.33 1.26.33 2.7v1.73c0 1.42 0 2.13-.34 2.67q-.18.31-.47.55c-.5.42-1.22.55-2.66.82-1.02.18-1.53.28-1.9.08a1 1 0 0 1-.36-.29c-.27-.32-.27-.8-.27-1.8z"
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
              d="M2 12.12C2 6.53 6.48 2 12 2s10 4.53 10 10.12v5.25c0 .81 0 1.37-.14 1.87A3.5 3.5 0 0 1 20 21.42c-.46.22-1 .31-1.8.44l-.13.02q-.43.07-.73.1-.3.04-.64-.01a2.1 2.1 0 0 1-1.68-2v-4.91c0-.42 0-.79.09-1.1a2.1 2.1 0 0 1 1.53-1.43q.46-.09 1.1-.01h.09l.1.02c.79.06 1.33.1 1.78.27q.49.18.88.49v-1.18a8.66 8.66 0 0 0-8.6-8.7c-4.75 0-8.6 3.9-8.6 8.7v1.18q.4-.3.88-.49c.45-.17.99-.21 1.77-.27l.11-.01.1-.01q.63-.08 1.1 0c.72.18 1.3.72 1.52 1.44.1.31.1.68.1 1.1v4.18q0 .44-.02.74 0 .32-.11.64a2.1 2.1 0 0 1-1.56 1.35q-.33.05-.64.01-.3-.03-.73-.1l-.13-.02a7 7 0 0 1-1.8-.44 3.5 3.5 0 0 1-1.85-2.18c-.12-.4-.14-.86-.14-1.47z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeadphonesRound;
