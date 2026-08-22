import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCopy3 = forwardRef<SVGSVGElement, IconProps>(function IconCopy3(
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
            d="M9 15c0-2.83 0-4.24.88-5.12S12.18 9 15 9h1c2.83 0 4.24 0 5.12.88S22 12.18 22 15v1c0 2.83 0 4.24-.88 5.12S18.82 22 16 22h-1c-2.83 0-4.24 0-5.12-.88S9 18.82 9 16z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 9c0-2.96-.05-4.49-.9-5.54a4 4 0 0 0-.56-.55C14.44 2 12.79 2 9.5 2s-4.93 0-6.04.9a4 4 0 0 0-.55.56C2 4.56 2 6.21 2 9.5s0 4.93.9 6.04a4 4 0 0 0 .56.55c1.05.86 2.58.9 5.54.91"
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
            d="M16.05 8.25c1.37 0 2.47 0 3.34.12.9.12 1.66.38 2.26.98s.86 1.36.98 2.26c.12.87.12 1.97.12 3.34v1.1c0 1.37 0 2.47-.12 3.34-.12.9-.38 1.66-.98 2.26s-1.36.86-2.26.98c-.87.12-1.97.12-3.34.12h-1.1c-1.37 0-2.47 0-3.34-.12a3.7 3.7 0 0 1-2.26-.98c-.6-.6-.86-1.36-.98-2.26-.12-.87-.12-1.97-.12-3.34v-1.1c0-1.37 0-2.47.12-3.34.12-.9.38-1.66.98-2.26s1.36-.86 2.26-.98c.87-.12 1.97-.12 3.34-.12z"
            fill="currentColor"
          />
          <path
            d="M6.75 14.86c0-1.3 0-2.48.13-3.45a5.2 5.2 0 0 1 1.4-3.12 5.2 5.2 0 0 1 3.13-1.41c.97-.13 2.15-.13 3.45-.13h2.23c.3 0 .45 0 .54-.1s.07-.24.05-.52l-.07-.71a4.6 4.6 0 0 0-.94-2.43q-.3-.36-.66-.66a5 5 0 0 0-2.59-.96c-1-.12-2.27-.12-3.87-.12h-.1c-1.6 0-2.87 0-3.87.12a5 5 0 0 0-2.6.96q-.35.3-.65.66c-.58.7-.84 1.55-.96 2.59-.12 1-.12 2.27-.12 3.87v.1c0 1.6 0 2.87.12 3.87.12 1.04.38 1.88.96 2.6q.3.35.66.65c.67.55 1.47.81 2.43.94l.7.07c.3.02.44.04.53-.05.1-.1.1-.24.1-.54z"
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
            d="M16.05 8.25c1.37 0 2.47 0 3.34.12.9.12 1.66.38 2.26.98s.86 1.36.98 2.26c.12.87.12 1.97.12 3.34v1.1c0 1.37 0 2.47-.12 3.34-.12.9-.38 1.66-.98 2.26s-1.36.86-2.26.98c-.87.12-1.97.12-3.34.12h-1.1c-1.37 0-2.47 0-3.34-.12a3.7 3.7 0 0 1-2.26-.98c-.6-.6-.86-1.36-.98-2.26-.12-.87-.12-1.97-.12-3.34v-1.1c0-1.37 0-2.47.12-3.34.12-.9.38-1.66.98-2.26s1.36-.86 2.26-.98c.87-.12 1.97-.12 3.34-.12z"
            fill="currentColor"
          />
          <path
            d="M6.75 14.86c0-1.3 0-2.48.13-3.45a5.2 5.2 0 0 1 1.4-3.12 5.2 5.2 0 0 1 3.13-1.41c.97-.13 2.15-.13 3.45-.13h2.23c.3 0 .45 0 .54-.1s.07-.24.05-.52l-.07-.71a4.6 4.6 0 0 0-.94-2.43q-.3-.36-.66-.66a5 5 0 0 0-2.59-.96c-1-.12-2.27-.12-3.87-.12h-.1c-1.6 0-2.87 0-3.87.12a5 5 0 0 0-2.6.96q-.35.3-.65.66c-.58.7-.84 1.55-.96 2.59-.12 1-.12 2.27-.12 3.87v.1c0 1.6 0 2.87.12 3.87.12 1.04.38 1.88.96 2.6q.3.35.66.65c.67.55 1.47.81 2.43.94l.7.07c.3.02.44.04.53-.05.1-.1.1-.24.1-.54z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCopy3;
