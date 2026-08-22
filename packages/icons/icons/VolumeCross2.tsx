import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolumeCross2 = forwardRef<SVGSVGElement, IconProps>(
  function IconVolumeCross2(
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
              d="M7.02 17.04C6.77 17 6.52 17 6 17c-1.37 0-2.06 0-2.66-.28a3.2 3.2 0 0 1-1.38-1.3c-.31-.58-.35-1.18-.43-2.4a17 17 0 0 1 0-2.05c.08-1.2.12-1.81.43-2.4.28-.52.83-1.04 1.38-1.3C3.94 7 4.63 7 6 7c.51 0 .77 0 1.02-.04a3 3 0 0 0 .7-.22c.24-.1.45-.24.88-.52l.22-.14c2.54-1.68 3.81-2.52 4.88-2.16q.3.11.58.3c.84.59.97 1.88 1.1 4.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.5 8.5V12c0 .53-.04 1.49-.09 2.6-.14 3.02-.2 4.53-1.13 5.18q-.27.19-.58.3c-.97.33-2.1-.33-4.2-1.7C8.83 17.91 7.4 17 7 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 18s1.5-1.8 1.5-6c0-2.43-.5-4.06-.93-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 15s.5-.9.5-3q-.02-1.28-.18-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M22 2 2 22"
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
              d="M21.78 3.53a.75.75 0 0 0-1.06-1.06l-4.45 4.45q-.06-.79-.2-1.39a3 3 0 0 0-1.1-1.92q-.36-.25-.78-.4c-.82-.27-1.63-.05-2.46.35-.8.4-1.8 1.05-3.03 1.86l-.26.17c-.45.3-.6.4-.76.47q-.26.11-.54.16c-.17.03-.35.03-.89.03h-.16c-1.22 0-2.06 0-2.82.35-.69.32-1.36.95-1.72 1.62-.4.73-.44 1.5-.5 2.58l-.01.13a18 18 0 0 0 0 2.14v.13a6 6 0 0 0 .5 2.58c.37.67 1.04 1.3 1.73 1.62a5 5 0 0 0 2.17.35l-2.72 2.72a.75.75 0 1 0 1.06 1.06z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M16.24 9.07 7.6 17.7c.4.47 1.42 1.11 1.73 1.3q1.55 1.04 2.63 1.55c.74.33 1.48.49 2.22.23q.41-.13.77-.39c.7-.5 1-1.28 1.17-2.18.16-.88.21-2.05.28-3.51v-.06c.05-1.11.09-2.09.09-2.64v-.1c0-.58.01-2.44-.26-2.83"
                fill="currentColor"
              />
              <path
                d="M20.51 6.32c.38-.17.83 0 1 .37.46 1.04.99 2.77.99 5.31 0 2.2-.4 3.78-.8 4.84a8 8 0 0 1-.86 1.62v.01h-.01l-.58-.47.58.48a.75.75 0 0 1-1.16-.96l.01-.01.02-.03.14-.21q.2-.3.46-.96c.34-.9.7-2.3.7-4.31 0-2.33-.48-3.85-.86-4.7a.75.75 0 0 1 .37-.98"
                fill="currentColor"
              />
              <path
                d="M19.3 9.85a.75.75 0 1 0-1.47.3Q18 10.8 18 12a9 9 0 0 1-.37 2.55l-.04.08v.02a.75.75 0 0 0 1.32.71l-.66-.36.66.36.01-.03.1-.22q.1-.22.2-.64A10 10 0 0 0 19.5 12q-.02-1.36-.2-2.15"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.51 6.32c.38-.17.83 0 1 .37.46 1.04.99 2.77.99 5.31 0 2.2-.4 3.78-.8 4.84a8 8 0 0 1-.86 1.62v.01h-.01l-.58-.47.58.48a.75.75 0 0 1-1.16-.96l.03-.04.14-.21q.2-.3.46-.96c.34-.9.7-2.3.7-4.31 0-2.33-.48-3.85-.86-4.7a.75.75 0 0 1 .37-.98"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.41 9.27c.41-.09.8.17.9.58q.17.79.19 2.15a10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01l-.66-.36.66.36a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1q-.02-1.21-.17-1.85c-.08-.4.18-.8.58-.88"
              fill="currentColor"
            />
            <path
              d="M21.78 3.53a.75.75 0 0 0-1.06-1.06l-4.45 4.45q-.06-.79-.2-1.39a3 3 0 0 0-1.1-1.92q-.36-.25-.78-.4c-.82-.27-1.63-.05-2.46.35-.8.4-1.8 1.05-3.03 1.86l-.26.17c-.45.3-.6.4-.76.47q-.26.11-.54.16c-.17.03-.35.03-.89.03h-.16c-1.22 0-2.06 0-2.82.35-.69.32-1.36.95-1.72 1.62-.4.73-.44 1.5-.5 2.58l-.01.13a18 18 0 0 0 0 2.14v.13a6 6 0 0 0 .5 2.58c.37.67 1.04 1.3 1.73 1.62a5 5 0 0 0 2.17.35l-2.72 2.72a.75.75 0 1 0 1.06 1.06z"
              fill="currentColor"
            />
            <path
              d="M16.5 12a.75.75 0 0 0-1.26-.55l-.07.07-6 6.27A.78.78 0 0 0 9.34 19q1.55 1.04 2.63 1.55c.74.33 1.48.49 2.22.23q.41-.13.77-.39c.7-.5 1-1.28 1.17-2.18.16-.88.21-2.05.28-3.51v-.06c.05-1.11.09-2.09.09-2.64"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolumeCross2;
