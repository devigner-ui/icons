import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagicStick2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMagicStick2(
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
              d="M13.04 3.65c2.21-1.31 3.32-1.97 4.13-1.5s.8 1.74.76 4.3l-.01.66c-.01.73-.02 1.1.12 1.41.13.32.4.56.91 1.04l.48.43c1.84 1.69 2.75 2.53 2.54 3.47-.22.95-1.42 1.37-3.84 2.21l-.62.22c-.69.24-1.03.36-1.3.6-.25.24-.4.58-.71 1.25l-.28.6c-1.08 2.36-1.62 3.53-2.57 3.65s-1.67-.9-3.13-2.93l-.37-.53c-.41-.58-.62-.87-.92-1.04s-.65-.2-1.36-.26l-.65-.06c-2.5-.23-3.76-.35-4.13-1.22s.4-1.92 1.9-4.02l.4-.55c.43-.6.64-.9.72-1.24.08-.35.02-.7-.12-1.41l-.12-.64c-.47-2.5-.7-3.74.02-4.4s1.91-.3 4.3.44l.62.2c.68.2 1.01.3 1.36.26s.66-.23 1.3-.6z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.53 16.47a.75.75 0 1 0-1.06 1.06zm2.94 5.06a.75.75 0 1 0 1.06-1.06zm-4-4 4 4 1.06-1.06-4-4z"
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
              d="M16.71 2.13c-.83-.43-1.92.26-4.1 1.65l-.55.36c-.62.4-.93.59-1.28.64s-.69-.03-1.38-.21l-.63-.16c-2.42-.64-3.64-.96-4.33-.28-.7.68-.42 1.9.15 4.36l.15.64c.16.7.24 1.05.18 1.4-.07.34-.27.64-.68 1.25l-.37.56C2.43 14.48 1.7 15.55 2.1 16.4s1.67.92 4.2 1.05l.65.03c.71.04 1.07.06 1.38.22.3.15.52.43.96.99l.4.5c1.54 1.97 2.3 2.95 3.25 2.8s1.45-1.35 2.44-3.72l.25-.62c.29-.67.43-1 .68-1.26.26-.25.6-.38 1.28-.64l.61-.25c2.4-.93 3.59-1.4 3.77-2.34.18-.95-.78-1.74-2.69-3.34l-.5-.41c-.54-.46-.8-.69-.96-1-.15-.3-.15-.67-.17-1.39l-.02-.66c-.06-2.53-.1-3.8-.93-4.23"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.93 17q.18-.4.4-.6.22-.25.7-.43l4.5 4.5a.75.75 0 0 1-1.06 1.06z"
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
              d="m13.04 3.65-.58.34c-.63.37-.94.56-1.29.6-.35.05-.68-.06-1.36-.27l-.62-.19C6.8 3.4 5.6 3.03 4.89 3.7s-.49 1.9-.02 4.4l.12.64c.14.7.2 1.06.12 1.4-.08.36-.3.65-.72 1.25l-.4.55c-1.5 2.1-2.27 3.15-1.9 4.02s1.62.99 4.13 1.22l.65.06c.7.06 1.06.1 1.36.26.3.17.5.46.92 1.04l.37.53c1.46 2.03 2.18 3.05 3.13 2.93s1.49-1.3 2.57-3.65l.28-.6q.22-.51.38-.8l4.59 4.59a.75.75 0 1 0 1.06-1.06l-4.43-4.43.41-.15.62-.22c2.42-.84 3.62-1.26 3.84-2.2s-.7-1.8-2.54-3.48l-.48-.43c-.52-.48-.78-.72-.91-1.04a4 4 0 0 1-.12-1.4v-.67c.05-2.56.06-3.84-.75-4.3-.81-.47-1.92.19-4.13 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagicStick2;
