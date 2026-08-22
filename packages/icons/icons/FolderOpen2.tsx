import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderOpen2 = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderOpen2(
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
              d="m22.34 14.3-.4 5c-.15 1.53-.27 2.7-2.98 2.7H6.38c-2.71 0-2.83-1.17-2.98-2.7l-.4-5c-.08-.83.18-1.6.65-2.19l.02-.02A3 3 0 0 1 5.98 11h13.38a3 3 0 0 1 2.31 1.1c.49.59.76 1.36.67 2.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.17 11.43V6.28c0-3.4.85-4.25 4.25-4.25h1.27c1.27 0 1.56.38 2.04 1.02L13 4.75c.32.42.51.68 1.36.68h2.55c3.4 0 4.25.85 4.25 4.25v1.79"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.1 17h5.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="m21.73 11.82-.16-.22a3 3 0 0 0-.99-.81 3.4 3.4 0 0 0-1.69-.44H6.44a3.4 3.4 0 0 0-2.72 1.3 3.5 3.5 0 0 0-.75 2.53l.37 4.67c.13 1.41.3 3.15 3.47 3.15h11.72c3.17 0 3.33-1.74 3.47-3.16l.37-4.65a3.4 3.4 0 0 0-.64-2.37m-6.67 5.52h-4.79a.7.7 0 0 1-.7-.7c0-.38.31-.7.7-.7h4.79c.39 0 .7.32.7.7a.7.7 0 0 1-.7.7"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.05 11.31q.32-.3.7-.52a3.4 3.4 0 0 1 1.69-.44H18.9a3.4 3.4 0 0 1 2.39.97v-1.5c0-3.57-1.09-4.66-4.66-4.66h-2.38c-.44 0-.45-.01-.71-.35l-1.2-1.61C11.77 2.46 11.32 2 9.89 2H8.71C5.14 2 4.05 3.09 4.05 6.66z"
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
              d="m21.73 11.82-.16-.22a3 3 0 0 0-.99-.81 3.4 3.4 0 0 0-1.69-.44H6.44a3.4 3.4 0 0 0-2.72 1.3 3.5 3.5 0 0 0-.75 2.53l.37 4.67c.13 1.41.3 3.15 3.47 3.15h11.72c3.17 0 3.33-1.74 3.47-3.16l.37-4.65a3.4 3.4 0 0 0-.64-2.37m-6.67 5.52h-4.79a.7.7 0 0 1-.7-.7c0-.38.31-.7.7-.7h4.79c.39 0 .7.32.7.7a.7.7 0 0 1-.7.7"
              fill="currentColor"
            />
            <path
              d="M21.23 8.6c.04.38-.38.64-.74.51a5 5 0 0 0-1.59-.25H6.44q-.84 0-1.62.26c-.36.12-.77-.12-.77-.5V6.65C4.05 3.09 5.14 2 8.71 2h1.18c1.43 0 1.88.46 2.46 1.21l1.2 1.6c.25.34.26.36.7.36h2.38c3.13 0 4.35.84 4.6 3.43"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderOpen2;
