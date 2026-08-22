import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInboxEmptyAlt = forwardRef<SVGSVGElement, IconProps>(
  function IconInboxEmptyAlt(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 13h3.76a2 2 0 0 1 1.79 1.11l.89 1.79c.56 1.1 1.56 1.1 1.8 1.1h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M21.97 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.6 2.6 0 0 0-2.29-1.42h-3.5a.7.7 0 0 0-.7.7v3.26c0 3.63 2.18 5.8 5.82 5.8h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85a.7.7 0 0 0-.7-.7"
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
              d="M21.97 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.6 2.6 0 0 0-2.29-1.42h-3.5a.7.7 0 0 0-.7.7v3.26c0 3.63 2.18 5.8 5.82 5.8h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85a.7.7 0 0 0-.7-.7"
              fill="currentColor"
            />
            <path
              d="M22.67 7.81v3.04a2 2 0 0 0-.7-.12h-3.48c-1.55 0-2.94.86-3.63 2.24l-.75 1.48h-2.86l-.75-1.47a4 4 0 0 0-3.63-2.25h-3.5q-.36 0-.7.12V7.81C2.67 4.17 4.84 2 8.48 2h8.38c3.64 0 5.81 2.17 5.81 5.81"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconInboxEmptyAlt;
