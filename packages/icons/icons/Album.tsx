import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlbum = forwardRef<SVGSVGElement, IconProps>(function IconAlbum(
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
            d="M2.9 13.8c-.42-3.17-.63-4.75.27-5.78C4.07 7 5.67 7 8.85 7h6.3c3.19 0 4.78 0 5.68 1.02.9 1.03.69 2.6.26 5.77l-.4 3c-.33 2.48-.5 3.72-1.34 4.47s-2.1.74-4.6.74h-5.5c-2.5 0-3.75 0-4.6-.74-.85-.75-1.01-1.99-1.34-4.47z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.56 7c.23-1.3-.77-2.5-2.1-2.5H6.54A2.13 2.13 0 0 0 4.44 7M17.5 4.5l.04-.5a2 2 0 0 0-1.78-1.99l-.5-.01H8.74l-.5.01a2 2 0 0 0-1.78 2l.04.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="16.5"
            cy="11.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20 20-2.88-2.15a3.1 3.1 0 0 0-3.34-.16l-.27.15c-.71.41-1.68.34-2.3-.16L7.39 14.5c-.77-.64-2-.67-2.81-.08l-1.33.96"
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
            d="M17.3 11.97c0 .74-.6 1.34-1.33 1.34s-1.32-.6-1.32-1.34.59-1.34 1.32-1.34 1.32.6 1.32 1.34"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.13 7.4c-.85-.11-1.94-.11-3.3-.11H9.17c-1.36 0-2.45 0-3.3.12-.88.12-1.61.4-2.15 1.02-.55.63-.71 1.4-.72 2.3 0 .86.14 1.95.32 3.32l.36 2.77c.15 1.07.26 1.93.44 2.61.18.7.45 1.29.96 1.74s1.12.65 1.84.74c.69.09 1.55.09 2.61.09h4.94c1.06 0 1.92 0 2.61-.09a3.3 3.3 0 0 0 1.84-.74c.5-.45.78-1.03.96-1.74q.25-1.02.44-2.6l.36-2.78c.18-1.37.33-2.46.32-3.33 0-.9-.17-1.66-.72-2.3a3.3 3.3 0 0 0-2.15-1.01M6.05 8.74c-.72.1-1.1.3-1.34.58-.25.28-.38.68-.39 1.42 0 .76.13 1.76.32 3.2l.05.37.37-.27c.96-.7 2.37-.67 3.29.1l3.38 2.83c.32.27.87.32 1.27.08l.23-.13a3.4 3.4 0 0 1 3.68.19l1.83 1.38q.13-.73.27-1.88l.35-2.68c.2-1.43.32-2.43.32-3.19 0-.74-.14-1.14-.4-1.42-.24-.29-.6-.47-1.33-.58-.75-.1-1.75-.1-3.18-.1H9.23c-1.43 0-2.43 0-3.18.1"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.7" : "1"}>
            <path
              d="M6.88 4.5a2.75 2.75 0 0 0-2.64 2.02q.54-.18 1.1-.25a28 28 0 0 1 3.64-.14h6.2a28 28 0 0 1 3.63.14q.57.07 1.1.25a2.8 2.8 0 0 0-2.63-2.02z"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.86 2h6.28q.3 0 .51.02c1 .1 1.81.77 2.16 1.67H6.19A2.6 2.6 0 0 1 8.86 2"
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
            d="M17.3 11.97c0 .74-.6 1.34-1.33 1.34s-1.32-.6-1.32-1.34.59-1.34 1.32-1.34 1.32.6 1.32 1.34"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.13 7.4c-.85-.11-1.94-.11-3.3-.11H9.17c-1.36 0-2.45 0-3.3.12-.88.12-1.61.4-2.15 1.02-.55.63-.71 1.4-.72 2.3 0 .86.14 1.95.32 3.32l.36 2.77c.15 1.07.26 1.93.44 2.61.18.7.45 1.29.96 1.74s1.12.65 1.84.74c.69.09 1.55.09 2.61.09h4.94c1.06 0 1.92 0 2.61-.09a3.3 3.3 0 0 0 1.84-.74c.5-.45.78-1.03.96-1.74q.25-1.02.44-2.6l.36-2.78c.18-1.37.33-2.46.32-3.33 0-.9-.17-1.66-.72-2.3a3.3 3.3 0 0 0-2.15-1.01M6.05 8.74c-.72.1-1.1.3-1.34.58-.25.28-.38.68-.39 1.42 0 .76.13 1.76.32 3.2l.05.37.37-.27c.96-.7 2.37-.67 3.29.1l3.38 2.83c.32.27.87.32 1.27.08l.23-.13a3.4 3.4 0 0 1 3.68.19l1.83 1.38q.13-.73.27-1.88l.35-2.68c.2-1.43.32-2.43.32-3.19 0-.74-.14-1.14-.4-1.42-.24-.29-.6-.47-1.33-.58-.75-.1-1.75-.1-3.18-.1H9.23c-1.43 0-2.43 0-3.18.1"
            fill="currentColor"
          />
          <path
            d="M8.86 2h6.28q.3 0 .51.02c1 .1 1.81.77 2.16 1.67H6.19A2.6 2.6 0 0 1 8.86 2"
            fill="currentColor"
          />
          <path
            d="M6.88 4.5a2.75 2.75 0 0 0-2.64 2.02q.54-.18 1.1-.25a28 28 0 0 1 3.64-.14h6.2a28 28 0 0 1 3.63.14q.57.07 1.1.25a2.8 2.8 0 0 0-2.63-2.02z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAlbum;
