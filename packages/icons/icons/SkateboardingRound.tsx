import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSkateboardingRound = forwardRef<SVGSVGElement, IconProps>(
  function IconSkateboardingRound(
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
              d="m3 17 .6.68A4 4 0 0 0 6.59 19h10.84a4 4 0 0 0 2.97-1.32L21 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="7"
              cy="21.0005"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="17"
              cy="21.0005"
              r="1"
              fill="currentColor"
            />
            <circle
              cx="19"
              cy="4.00049"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15 16.5v-2.13c0-.55-.24-1.07-.67-1.42l-1-.83a1.6 1.6 0 0 1-.1-2.35L14.9 8.1c.53-.53.36-1.43-.34-1.73a4.3 4.3 0 0 0-3.94.3L8.5 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11 14-.62.62a3 3 0 0 1-.93.77c-.27.11-.58.11-1.2.11H7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 10h3"
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
            <path d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.21 6.05c1.4-.87 3.13-1 4.64-.36 1.18.5 1.47 2.05.57 2.96l-1.66 1.65a.84.84 0 0 0 .06 1.24l1 .83c.59.5.93 1.23.93 2v2.13a.75.75 0 0 1-1.5 0v-2.13c0-.33-.14-.64-.4-.85l-1-.83a2.34 2.34 0 0 1-.15-3.45l1.66-1.66a.32.32 0 0 0-.1-.51 3.5 3.5 0 0 0-3.25.25L8.9 8.64a.75.75 0 0 1-.8-1.28zM2.5 16.45a.75.75 0 0 1 1.06.05l.6.67c.62.69 1.5 1.08 2.42 1.08h10.84c.92 0 1.8-.4 2.41-1.08l.61-.67a.75.75 0 1 1 1.12 1l-.61.68c-.9 1-2.18 1.57-3.53 1.57H6.58a4.8 4.8 0 0 1-3.53-1.57l-.6-.68a.75.75 0 0 1 .05-1.06"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
              <path
                d="M18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
              <path
                d="M16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
                fill="currentColor"
              />
              <path
                d="M11.53 14.53a.75.75 0 1 0-1.06-1.06l-.62.62c-.48.48-.58.56-.68.6-.11.05-.24.06-.91.06H7a.75.75 0 0 0 0 1.5h1.36c.51 0 .96 0 1.38-.17s.74-.5 1.1-.85l.07-.08z"
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
            <path d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.21 6.05c1.4-.87 3.13-1 4.64-.36 1.18.5 1.47 2.05.57 2.96l-1.66 1.65a.84.84 0 0 0 .06 1.24l1 .83c.59.5.93 1.23.93 2v2.13a.75.75 0 0 1-1.5 0v-2.13c0-.33-.14-.64-.4-.85l-1-.83a2.34 2.34 0 0 1-.15-3.45l1.66-1.66a.32.32 0 0 0-.1-.51 3.5 3.5 0 0 0-3.25.25L8.9 8.64a.75.75 0 0 1-.8-1.28zM2.5 16.45a.75.75 0 0 1 1.06.05l.6.67c.62.69 1.5 1.08 2.42 1.08h10.84c.92 0 1.8-.4 2.41-1.08l.61-.67a.75.75 0 1 1 1.12 1l-.61.68c-.9 1-2.18 1.57-3.53 1.57H6.58a4.8 4.8 0 0 1-3.53-1.57l-.6-.68a.75.75 0 0 1 .05-1.06"
              fill="currentColor"
            />
            <path d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M11.53 14.53a.75.75 0 1 0-1.06-1.06l-.62.62c-.48.48-.58.56-.68.6-.11.05-.24.06-.91.06H7a.75.75 0 0 0 0 1.5h1.36c.51 0 .96 0 1.38-.17s.74-.5 1.1-.85l.07-.08z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSkateboardingRound;
