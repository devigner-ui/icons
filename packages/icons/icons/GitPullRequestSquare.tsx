import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGitPullRequestSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconGitPullRequestSquare(
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
        {variant === "Broken" ? (
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
            d="M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.45 14.4V8.5a1 1 0 0 0-1-1h-2.9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m14.05 6-1.8 1.5 1.8 1.5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.55 10.2v4.2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.65 7.95a1.95 1.95 0 1 1-3.9 0 1.95 1.95 0 0 1 3.9 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.35 16.2a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.25 16.2a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
                d="M16.45 14.4V8.5a1 1 0 0 0-1-1h-2.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m14.05 6-1.8 1.5 1.8 1.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.55 10.2v4.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.7 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.55 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.45 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
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
              d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="M8.55 14.55v-4.29A2.2 2.2 0 0 0 10 8.2 2.2 2.2 0 0 0 7.8 6a2.2 2.2 0 0 0-2.2 2.2c0 .95.61 1.75 1.45 2.06v4.29a2.05 2.05 0 1 0 1.5 0"
              fill="currentColor"
            />
            <path
              d="M17.5 14.55v-5.8c0-.96-.79-1.75-1.75-1.75h-1.13l.21-.17a.76.76 0 0 0 .1-1.06.76.76 0 0 0-1.06-.1l-1.8 1.5a.76.76 0 0 0 0 1.16l1.8 1.5q.22.17.48.17.33 0 .58-.27a.75.75 0 0 0-.1-1.06l-.21-.17h1.13q.23.02.25.25v5.8a2.05 2.05 0 1 0 1.5 0"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M9.85 16.45a2.05 2.05 0 0 1-4.1 0c0-.87.54-1.6 1.3-1.9v-4.29A2.2 2.2 0 0 1 5.6 8.2c0-1.21.99-2.2 2.2-2.2s2.2.99 2.2 2.2a2.2 2.2 0 0 1-1.45 2.06v4.29c.76.3 1.3 1.04 1.3 1.9m6.9 2.05a2.05 2.05 0 0 1-2.05-2.05c0-.87.54-1.6 1.3-1.9v-5.8a.25.25 0 0 0-.25-.25h-1.13l.21.17c.32.27.36.74.1 1.06a.76.76 0 0 1-1.06.1l-1.8-1.5a.8.8 0 0 1-.27-.58q0-.34.27-.58l1.8-1.5a.76.76 0 0 1 1.06.1c.27.32.22.79-.1 1.06l-.21.17h1.13c.96 0 1.75.79 1.75 1.75v5.8a2.05 2.05 0 0 1-.75 3.95"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGitPullRequestSquare;
