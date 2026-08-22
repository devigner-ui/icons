import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShop = forwardRef<SVGSVGElement, IconProps>(function IconShop(
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
            d="M9.5 2h5l.65 6.52a3.17 3.17 0 1 1-6.3 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M3.33 5.35c.18-.89.27-1.33.45-1.7a3 3 0 0 1 1.89-1.54C6.06 2 6.5 2 7.42 2H9.5l-.72 7.25a3.06 3.06 0 1 1-6.05-.9z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20.67 5.35a7 7 0 0 0-.45-1.7 3 3 0 0 0-1.89-1.54C17.94 2 17.5 2 16.58 2H14.5l.72 7.25a3.06 3.06 0 1 0 6.05-.9z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.75 21.5a.75.75 0 0 0 1.5 0zm5 0a.75.75 0 0 0 1.5 0zm0-5.3.38-.65zm.55.55-.65.38zm-4.6 0 .65.38zm.55-.55.38.65zm2.25 5.05h-1v1.5h1zM4.25 14v-3h-1.5v3zm15.5-3v3h1.5v-3zM11.5 21.25c-1.9 0-3.26 0-4.29-.14-1-.13-1.58-.39-2-.81l-1.07 1.06c.75.75 1.7 1.08 2.87 1.24 1.15.15 2.63.15 4.49.15zM2.75 14c0 1.86 0 3.34.15 4.49a4.7 4.7 0 0 0 1.24 2.87L5.2 20.3c-.42-.42-.67-1-.81-2.01A36 36 0 0 1 4.25 14zm9.75 8.75c1.86 0 3.34 0 4.49-.15a4.7 4.7 0 0 0 2.87-1.24L18.8 20.3c-.43.42-1 .68-2.01.81-1.03.14-2.38.14-4.29.14zM19.75 14c0 1.9 0 3.26-.14 4.29-.13 1-.39 1.59-.81 2l1.06 1.07a4.7 4.7 0 0 0 1.24-2.87c.15-1.15.15-2.63.15-4.49zm-9.5 7.5v-3h-1.5v3zm3.5-3v3h1.5v-3zM12 16.75q.7 0 1.03.02c.22.02.3.06.35.08l.74-1.3a2 2 0 0 0-.96-.27q-.47-.04-1.16-.03zm3.25 1.75q0-.68-.03-1.16-.03-.5-.27-.96l-1.3.75c.02.04.06.12.08.34.02.24.02.55.02 1.03zm-1.87-1.65q.16.1.27.28l1.3-.75q-.3-.53-.82-.83zm-3.13 1.65q0-.7.02-1.03c.02-.22.06-.3.08-.34l-1.3-.75c-.18.3-.24.63-.27.96q-.04.48-.03 1.16zM12 15.25q-.68 0-1.16.03-.5.03-.96.27l.74 1.3a1 1 0 0 1 .35-.08c.24-.02.55-.02 1.03-.02zm-1.65 1.88q.1-.18.28-.28l-.76-1.3q-.52.3-.82.83z"
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
          <path
            fill="currentColor"
            d="M21.37 11.39v5.99a5 5 0 0 1-5 5H7.63a5 5 0 0 1-5-5v-5.92a4.08 4.08 0 0 0 6.24-.35A3.8 3.8 0 0 0 12 12.75c1.28 0 2.42-.6 3.11-1.6a4.1 4.1 0 0 0 3.2 1.6c1.21 0 2.31-.49 3.06-1.36"
            opacity={duotone ? "0.6" : "1"}
          />
          <path
            fill="currentColor"
            d="M14.99 1.25h-6l-.74 7.36q-.09 1.03.29 1.9A3.7 3.7 0 0 0 12 12.75a3.73 3.73 0 0 0 3.77-3.67v-.19z"
          />
          <path
            fill="currentColor"
            d="m22.36 8.27-.29-2.77c-.42-3.02-1.79-4.25-4.72-4.25h-3.84l.74 7.5.02.4q.1.78.46 1.43a4.2 4.2 0 0 0 3.58 2.17c1.33 0 2.53-.59 3.28-1.63.6-.8.87-1.81.77-2.85M6.59 1.25c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75a4 4 0 0 0 4.05 4.47 4.14 4.14 0 0 0 4.05-3.66l.78-7.83z"
            opacity={duotone ? "0.4" : "1"}
          />
          <path
            fill="currentColor"
            d="M11.35 16.66a2.5 2.5 0 0 0-2.23 2.49v3.23h5.75V19.5c.01-2.09-1.22-3.08-3.52-2.84"
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
            d="M3.78 3.66c-.18.36-.27.8-.45 1.7l-.6 2.98a3.06 3.06 0 1 0 6.05.9l.06-.68a3.17 3.17 0 1 0 6.31-.04l.07.73a3.06 3.06 0 1 0 6.05-.9l-.6-3a7 7 0 0 0-.45-1.7 3 3 0 0 0-1.89-1.54C17.94 2 17.5 2 16.58 2H7.42c-.91 0-1.36 0-1.75.1a3 3 0 0 0-1.9 1.56"
            fill="currentColor"
          />
          <path
            d="M18.27 13.5q1.24-.01 2.23-.58V14c0 3.77 0 5.66-1.17 6.83-.94.94-2.35 1.13-4.83 1.16V18.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2s-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75V22c-2.48-.04-3.89-.23-4.83-1.17C3.5 19.66 3.5 17.77 3.5 14v-1.08a4.5 4.5 0 0 0 5.34-.65 4.64 4.64 0 0 0 6.32 0 4.6 4.6 0 0 0 3.1 1.23"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShop;
