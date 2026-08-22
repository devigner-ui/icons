import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMailbox = forwardRef<SVGSVGElement, IconProps>(function IconMailbox(
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
            d="M10.5 22v-2m4 2v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11 20v.75h.75V20zm3-.75a.75.75 0 0 0 0 1.5zm3.5-14a.75.75 0 0 0 0 1.5zM7 5.25a.75.75 0 0 0 0 1.5zm2 14a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 1 0 0-1.5zm-4.75-9.5V20h1.5v-8.75zm.75 8H4.23v1.5H11zM2.75 17.4v-6.15h-1.5v6.15zm1.48 1.85c-.71 0-1.48-.72-1.48-1.85h-1.5c0 1.74 1.23 3.35 2.98 3.35zM6.5 6.75c1.97 0 3.75 1.9 3.75 4.5h1.5c0-3.2-2.25-6-5.25-6zm0-1.5c-3 0-5.25 2.8-5.25 6h1.5c0-2.6 1.78-4.5 3.75-4.5zm14.75 6v6.18h1.5v-6.18zm-1.46 8H14v1.5h5.8zm1.46-1.82c0 1.12-.76 1.82-1.46 1.82v1.5c1.74 0 2.96-1.6 2.96-3.32zm1.5-6.18c0-3.2-2.25-6-5.25-6v1.5c1.97 0 3.75 1.9 3.75 4.5zM7 6.75h11v-1.5H7zm2 14h6v-1.5H9z"
            fill="currentColor"
          />
          <path
            d="M5 16h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 9.88V5.41m0 0V2.64a.5.5 0 0 1 .4-.49l.49-.1a3 3 0 0 1 1.75.16l.08.03c.55.22 1.16.26 1.74.12.27-.07.54.14.54.43V5c0 .23-.16.44-.4.5l-.06.01c-.63.15-1.3.11-1.9-.12a3 3 0 0 0-1.75-.16z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M2 11.25C2 8.35 4.01 6 6.5 6S11 8.35 11 11.25V20H4.23C3 20 2 18.83 2 17.4z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 11.25V20h8.8c1.2 0 2.2-1.15 2.2-2.57v-6.18C22 8.35 19.99 6 17.5 6h-11C8.99 6 11 8.35 11 11.25"
            fill="currentColor"
          />
          <path d="M9.5 20v2a.75.75 0 1 0 1.5 0v-2z" fill="currentColor" />
          <path d="M15 20h-1.5v2a.75.75 0 1 0 1.5 0z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.25 16c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m17.38 6.58.26-.05q.64-.12 1.24.12 1.07.41 2.17.15l.06-.02c.52-.13.89-.62.89-1.18V3.47a1.1 1.1 0 0 0-1.35-1.1q-.61.15-1.2-.09l-.07-.03a3.5 3.5 0 0 0-2-.18l-.45.09c-.54.1-.93.6-.93 1.17v6.95c0 .4.31.72.7.72a.7.7 0 0 0 .68-.72z"
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
          <path d="M9.5 20v2a.75.75 0 1 0 1.5 0v-2z" fill="currentColor" />
          <path d="M15 20h-1.5v2a.75.75 0 1 0 1.5 0z" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m17.38 6.58.26-.05q.64-.12 1.24.12 1.07.41 2.17.15l.06-.02c.52-.13.89-.62.89-1.18V3.47a1.1 1.1 0 0 0-1.35-1.1q-.61.15-1.2-.09l-.07-.03a3.5 3.5 0 0 0-2-.18l-.45.09c-.54.1-.93.6-.93 1.17v6.95c0 .4.31.72.7.72a.7.7 0 0 0 .68-.72z"
            fill="currentColor"
          />
          <path
            d="M14.5 6v4.28a2.2 2.2 0 0 0 2.2 2.22 2.2 2.2 0 0 0 2.18-2.22V8.23q1.16.3 2.34.07.77 1.28.78 2.95v6.18c0 1.42-.99 2.57-2.2 2.57h-7.3v-8.75c0-2.03-.83-3.97-2.22-5.25z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 11.25C2 8.35 4.01 6 6.5 6S11 8.35 11 11.25V20H4.23C3 20 2 18.83 2 17.4zM4.25 16c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMailbox;
