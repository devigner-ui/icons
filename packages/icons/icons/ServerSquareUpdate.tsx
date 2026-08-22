import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconServerSquareUpdate = forwardRef<SVGSVGElement, IconProps>(
  function IconServerSquareUpdate(
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
              d="M13 21.75a.75.75 0 0 0 0-1.5zm-9.83-1.92.53-.53zM20.83 4.17l-.53.53zm.42 8.83a.75.75 0 0 0 1.5 0zM10 3.75h4v-1.5h-4zM2.75 13v-1h-1.5v1zm0-1v-1h-1.5v1zM13 20.25h-3v1.5h3zM21.25 11v1h1.5v-1zm-20 2c0 1.86 0 3.34.15 4.49a4.7 4.7 0 0 0 1.24 2.87L3.7 19.3c-.42-.43-.67-1-.81-2.01A36 36 0 0 1 2.75 13zM10 20.25c-1.9 0-3.26 0-4.29-.14-1-.13-1.58-.39-2-.81l-1.07 1.06c.75.75 1.7 1.08 2.87 1.24 1.15.15 2.63.15 4.49.15zm4-16.5a36 36 0 0 1 4.29.14c1 .14 1.58.39 2 .81l1.07-1.06a4.7 4.7 0 0 0-2.87-1.24c-1.15-.15-2.63-.15-4.49-.15zM22.75 11c0-1.86 0-3.34-.15-4.49a4.7 4.7 0 0 0-1.24-2.87L20.3 4.7c.42.43.68 1 .81 2.01.14 1.03.14 2.38.14 4.29zM10 2.25c-1.86 0-3.34 0-4.49.15a4.7 4.7 0 0 0-2.87 1.24L3.7 4.7c.43-.42 1-.67 2.01-.81A36 36 0 0 1 10 3.75zM2.75 11c0-1.9 0-3.26.14-4.29.14-1 .39-1.58.81-2L2.64 3.63A4.7 4.7 0 0 0 1.4 6.51c-.15 1.15-.15 2.63-.15 4.49zM2 12.75h20v-1.5H2zM21.25 12v1h1.5v-1z"
              fill="currentColor"
            />
            <path
              d="M13.5 7.5H18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 17.5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 8.5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 17.5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 8.5v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15.58 17.5h-.75zm0 .5-.48.57c.28.24.7.24.97 0zm1.08.07a.75.75 0 0 0-.98-1.14zm-1.17-1.14a.75.75 0 1 0-.98 1.14zm4.9-.3a.75.75 0 0 0 1.22-.87zm-1.89-2.38c-1.9 0-3.67 1.35-3.67 3.25h1.5c0-.86.86-1.75 2.17-1.75zm-3.67 3.25v.5h1.5v-.5zm1.24 1.07.59-.5-.98-1.14-.58.5zm0-1.14-.58-.5-.98 1.14.59.5zm5.54-1.67a3.8 3.8 0 0 0-3.1-1.51v1.5c.83 0 1.52.38 1.88.89z"
              fill="currentColor"
            />
            <path
              d="M18.5 21v.75zm2.92-2.5h.75zm0-.5.48-.57a.75.75 0 0 0-.97 0zm-1.08-.07a.75.75 0 0 0 .98 1.14zm1.17 1.14a.75.75 0 0 0 .98-1.14zm-4.9.3a.75.75 0 1 0-1.22.87zm1.89 2.38c1.9 0 3.67-1.35 3.67-3.25h-1.5c0 .86-.86 1.75-2.17 1.75zm3.67-3.25V18h-1.5v.5zm-1.24-1.07-.59.5.98 1.14.58-.5zm0 1.14.58.5.98-1.14-.59-.5zm-5.54 1.67a3.8 3.8 0 0 0 3.1 1.51v-1.5a2.3 2.3 0 0 1-1.88-.89z"
              fill="currentColor"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M3.17 19.83C4.34 21 6.23 21 10 21h3.89a5.5 5.5 0 0 1-.82-3.88.75.75 0 0 1 .41-1.37 5.5 5.5 0 0 1 3.38-3H2V13c0 3.77 0 5.66 1.17 6.83"
                fill="currentColor"
              />
              <path
                d="M3.17 4.17C2 5.34 2 7.23 2 11v.25h20V11c0-3.77 0-5.66-1.17-6.83S17.77 3 14 3h-4C6.23 3 4.34 3 3.17 4.17"
                fill="currentColor"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.93 16.75c.39-1.5 1.92-2.5 3.57-2.5a3.8 3.8 0 0 1 3.11 1.51.75.75 0 1 1-1.22.88 2.3 2.3 0 0 0-1.89-.89c-.96 0-1.68.48-2 1.08q.14.06.24.18c.27.32.23.79-.08 1.06l-.59.5a.75.75 0 0 1-.97 0l-.59-.5a.75.75 0 0 1 .42-1.32"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.93 17.43c.28-.24.7-.24.97 0l.59.5a.75.75 0 0 1-.42 1.32c-.39 1.5-1.92 2.5-3.57 2.5a3.8 3.8 0 0 1-3.11-1.51.75.75 0 1 1 1.22-.88 2.3 2.3 0 0 0 1.89.89c.96 0 1.68-.48 2-1.08a.75.75 0 0 1-.15-1.24z"
              fill="currentColor"
            />
            <path
              d="M5.25 17.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M8.25 17.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M8.25 8.5a.75.75 0 1 0 1.5 0v-2a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M6 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M13.5 6.75a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.14 12.75H22v-1.5H2v1.5h14.86a5.5 5.5 0 0 1 3.28 0"
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
              d="M3.17 19.83C4.34 21 6.23 21 10 21h3.89a5.5 5.5 0 0 1-.82-3.88.75.75 0 0 1 .41-1.37 5.5 5.5 0 0 1 3.38-3H2V13c0 3.77 0 5.66 1.17 6.83M6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75m3 0a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17 4.17C2 5.34 2 7.23 2 11v.25h20V11c0-3.77 0-5.66-1.17-6.83S17.77 3 14 3h-4C6.23 3 4.34 3 3.17 4.17M9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75M5.25 8.5a.75.75 0 1 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm7.5-1c0-.41.34-.75.75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.93 16.75c.39-1.5 1.92-2.5 3.57-2.5a3.8 3.8 0 0 1 3.11 1.51.75.75 0 1 1-1.22.88 2.3 2.3 0 0 0-1.89-.89c-.96 0-1.68.48-2 1.08q.14.06.24.18c.27.32.23.79-.08 1.06l-.59.5a.75.75 0 0 1-.97 0l-.59-.5a.75.75 0 0 1 .42-1.32m6 .68c.28-.24.7-.24.97 0l.59.5a.75.75 0 0 1-.42 1.32c-.39 1.5-1.92 2.5-3.57 2.5a3.8 3.8 0 0 1-3.11-1.51.75.75 0 1 1 1.22-.88 2.3 2.3 0 0 0 1.89.89c.96 0 1.68-.48 2-1.08a.75.75 0 0 1-.16-1.24z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconServerSquareUpdate;
