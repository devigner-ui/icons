import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLetterOpened = forwardRef<SVGSVGElement, IconProps>(
  function IconLetterOpened(
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
              d="M18 6.1c1.3.13 2.18.42 2.83 1.07C22 8.34 22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14s0-5.66 1.17-6.83C3.82 6.52 4.7 6.23 6 6.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10 6h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M11 9h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m8.16 11.8-.72-.6c-.7-.59-1.06-.89-1.25-1.29S6 9.05 6 8.13V7c0-2.36 0-3.54.73-4.27S8.64 2 11 2h2c2.36 0 3.54 0 4.27.73S18 4.64 18 7v1.13c0 .92 0 1.38-.19 1.78s-.54.7-1.25 1.29l-.72.6C14 13.33 13.1 14.1 12 14.1s-2-.77-3.84-2.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6 10 2.16 1.8C10 13.33 10.9 14.1 12 14.1s2-.77 3.84-2.3L18 10"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="m6.72 10.6 1.44 1.2C10 13.33 10.9 14.1 12 14.1s2-.77 3.84-2.3l1.44-1.2c.35-.3.53-.44.63-.64s.09-.44.09-.9V6.1c-.01-1.77-.1-2.73-.73-3.37C16.54 2 15.36 2 13 2h-2c-2.36 0-3.54 0-4.27.73-.63.64-.72 1.6-.73 3.37v2.96c0 .46 0 .7.1.9.09.2.27.34.62.64M9.25 6c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6m1 3c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.16 11.8-1.44-1.2c-.35-.3-.53-.44-.63-.64S6 9.52 6 9.06V6.1c-1.3.13-2.18.42-2.83 1.07C2 8.34 2 10.23 2 14s0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14s0-5.66-1.17-6.83c-.66-.65-1.53-.94-2.83-1.07v2.96c0 .46 0 .7-.1.9-.09.2-.27.34-.62.64l-1.44 1.2C14 13.33 13.1 14.1 12 14.1s-2-.77-3.84-2.3"
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
              d="M10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14s0-5.66-1.17-6.83q-.54-.53-1.33-.78v2.77c0 .34 0 .91-.24 1.43a3 3 0 0 1-1.02 1.16l-1.5 1.26c-.87.72-1.62 1.34-2.29 1.77-.73.47-1.51.82-2.45.82s-1.72-.35-2.45-.82a25 25 0 0 1-2.28-1.77l-1.51-1.26-.07-.06c-.27-.21-.7-.58-.95-1.1a3 3 0 0 1-.24-1.43V6.39q-.8.25-1.33.78C2 8.34 2 10.23 2 14s0 5.66 1.17 6.83S6.23 22 10 22"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m6.72 10.6 1.44 1.2C10 13.33 10.9 14.1 12 14.1s2-.77 3.84-2.3l1.44-1.2c.35-.3.53-.44.63-.64s.09-.44.09-.9V6.1c-.01-1.77-.1-2.73-.73-3.37C16.54 2 15.36 2 13 2h-2c-2.36 0-3.54 0-4.27.73-.63.64-.72 1.6-.73 3.37v2.96c0 .46 0 .7.1.9.09.2.27.34.62.64M9.25 6c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6m1 3c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLetterOpened;
