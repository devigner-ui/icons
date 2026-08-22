import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLogout = forwardRef<SVGSVGElement, IconProps>(function IconLogout(
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
            d="M8 7c.01-2.18.11-3.35.88-4.12C9.76 2 11.18 2 14 2h1c2.83 0 4.24 0 5.12.88S21 5.18 21 8v8c0 2.83 0 4.24-.88 5.12S17.82 22 15 22h-1c-2.83 0-4.24 0-5.12-.88C8.1 20.35 8 19.17 8 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 19.5c-2.36 0-3.54 0-4.27-.73S3 16.86 3 14.5v-5c0-2.36 0-3.54.73-4.27S5.64 4.5 8 4.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 12H6m0 0 2 2m-2-2 2-2"
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
            opacity={duotone ? "0.6" : "1"}
            d="M15 2h-1c-2.83 0-4.24 0-5.12.88S8 5.18 8 8v8c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1c2.83 0 4.24 0 5.12-.88S21 18.82 21 16V8c0-2.83 0-4.24-.88-5.12S17.82 2 15 2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 8c0-1.54 0-2.66.14-3.5H8c-2.36 0-3.54 0-4.27.73S3 7.14 3 9.5v5c0 2.36 0 3.54.73 4.27s1.91.73 4.27.73h.14C8 18.66 8 17.54 8 16z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.47 11.47c-.3.3-.3.77 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H14a.75.75 0 0 0 0-1.5H6.81l.72-.72a.75.75 0 1 0-1.06-1.06z"
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
            d="M3.5 9.57v4.86c0 2.3 0 3.44.72 4.15.66.65 1.68.71 3.6.72q-.13-1.01-.13-2.43c0-.4.33-.73.74-.73s.74.32.74.72c0 1.06.03 1.82.14 2.4.1.54.27.86.5 1.1.28.27.66.44 1.39.54.74.1 1.73.1 3.14.1h.99c1.41 0 2.4 0 3.14-.1.72-.1 1.1-.27 1.38-.54s.45-.65.55-1.36c.1-.74.1-1.71.1-3.1V8.1c0-1.39 0-2.36-.1-3.1-.1-.71-.28-1.09-.55-1.36s-.66-.44-1.38-.54c-.74-.1-1.73-.1-3.14-.1h-.99c-1.41 0-2.4 0-3.14.1-.73.1-1.11.27-1.38.54-.24.24-.4.56-.51 1.1-.1.58-.14 1.34-.14 2.4 0 .4-.34.73-.74.72a.73.73 0 0 1-.74-.73q-.01-1.42.13-2.43c-1.92 0-2.94.07-3.6.72-.72.7-.72 1.85-.72 4.15m2.43 2.95a.7.7 0 0 1 0-1.04L7.9 9.54a.75.75 0 0 1 1.05 0c.29.28.29.75 0 1.03l-.7.7h7.08c.4 0 .74.33.74.73s-.34.73-.74.73H8.24l.71.7c.29.28.29.75 0 1.03a.75.75 0 0 1-1.05 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLogout;
