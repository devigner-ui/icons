import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoonFog = forwardRef<SVGSVGElement, IconProps>(function IconMoonFog(
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
            d="M8 22h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 19h14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 16h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21.07 11.86-.64-.4zm-8.93-8.93-.38-.64zM2.75 12c0-5.1 4.14-9.25 9.25-9.25v-1.5A10.75 10.75 0 0 0 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5c0 4 3.25 7.25 7.25 7.25zm4.93-2.78a5.8 5.8 0 0 1-4.93 2.78v1.5c2.63 0 4.94-1.4 6.2-3.5zM9.75 8.5a5.8 5.8 0 0 1 2.78-4.93l-.77-1.28A7.3 7.3 0 0 0 8.25 8.5zm11.5 3.5q-.01 2-.77 3.7l1.38.6q.87-2 .89-4.3zM3.52 15.7a9 9 0 0 1-.77-3.7h-1.5q.02 2.3.9 4.3zM12 2.75a.4.4 0 0 1-.27-.12.3.3 0 0 1-.08-.15c0-.03 0-.12.1-.19l.78 1.28c.5-.3.67-.86.6-1.3A1.13 1.13 0 0 0 12 1.25zm9.7 9.5c-.06.1-.15.1-.18.1a.3.3 0 0 1-.15-.08.4.4 0 0 1-.12-.27h1.5c0-.72-.57-1.08-1.03-1.14-.43-.06-1 .1-1.3.6z"
            fill="currentColor"
          />
          <path
            d="M19.9 2.3a.48.48 0 0 0-.9 0l-.43 1.1a.5.5 0 0 1-.27.28l-1.1.43c-.4.16-.4.74 0 .9l1.1.43q.19.08.27.28l.43 1.1c.16.4.74.4.9 0l.43-1.1a.5.5 0 0 1 .27-.28l1.1-.43c.4-.16.4-.74 0-.9l-1.1-.43a.5.5 0 0 1-.27-.28z"
            stroke="currentColor"
          />
          <path
            d="M16.03 8.13a.48.48 0 0 0-.9 0l-.15.4a.5.5 0 0 1-.28.27l-.4.16c-.4.16-.4.74 0 .9l.4.16q.2.08.28.27l.15.4c.16.41.74.41.9 0l.16-.4a.5.5 0 0 1 .27-.27l.4-.16c.4-.16.4-.74 0-.9l-.4-.16a.5.5 0 0 1-.27-.27z"
            stroke="currentColor"
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
            d="M1.25 16c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m6 6c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.25 19c0-.41.34-.75.75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2a10 10 0 0 0-9.17 14h18.34q.81-1.85.83-4c0-.46-.7-.54-.93-.14a6.5 6.5 0 1 1-8.93-8.93c.4-.24.32-.93-.14-.93"
            fill="currentColor"
          />
          <path
            d="M19.9 2.3a.48.48 0 0 0-.9 0l-.43 1.1a.5.5 0 0 1-.27.28l-1.1.43c-.4.16-.4.74 0 .9l1.1.43q.19.08.27.28l.43 1.1c.16.4.74.4.9 0l.43-1.1a.5.5 0 0 1 .27-.28l1.1-.43c.4-.16.4-.74 0-.9l-1.1-.43a.5.5 0 0 1-.27-.28z"
            fill="currentColor"
          />
          <path
            d="M16.03 8.13a.48.48 0 0 0-.9 0l-.15.4a.5.5 0 0 1-.28.27l-.4.16c-.4.16-.4.74 0 .9l.4.16q.2.08.28.27l.15.4c.16.41.74.41.9 0l.16-.4a.5.5 0 0 1 .27-.27l.4-.16c.4-.16.4-.74 0-.9l-.4-.16a.5.5 0 0 1-.27-.27z"
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
            d="M2 12A10 10 0 0 1 12 2c.46 0 .54.7.14.93a6.5 6.5 0 1 0 8.93 8.93c.24-.4.93-.32.93.14q0 1.72-.54 3.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.54A10 10 0 0 1 2 12"
            fill="currentColor"
          />
          <path
            d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M19.9 2.3a.48.48 0 0 0-.9 0l-.43 1.1a.5.5 0 0 1-.27.28l-1.1.43c-.4.16-.4.74 0 .9l1.1.43q.19.08.27.28l.43 1.1c.16.4.74.4.9 0l.43-1.1a.5.5 0 0 1 .27-.28l1.1-.43c.4-.16.4-.74 0-.9l-1.1-.43a.5.5 0 0 1-.27-.28z"
            fill="currentColor"
          />
          <path
            d="M16.03 8.13a.48.48 0 0 0-.9 0l-.15.4a.5.5 0 0 1-.28.27l-.4.16c-.4.16-.4.74 0 .9l.4.16q.2.08.28.27l.15.4c.16.41.74.41.9 0l.16-.4a.5.5 0 0 1 .27-.27l.4-.16c.4-.16.4-.74 0-.9l-.4-.16a.5.5 0 0 1-.27-.27z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMoonFog;
