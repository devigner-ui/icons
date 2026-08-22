import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMonitorCamera = forwardRef<SVGSVGElement, IconProps>(
  function IconMonitorCamera(
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
              d="M12 5c0-1.41 0-2.12.44-2.56S13.59 2 15 2h1c1.41 0 2.12 0 2.56.44S19 3.59 19 5s0 2.12-.44 2.56S17.41 8 16 8h-1c-1.41 0-2.12 0-2.56-.44S12 6.41 12 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m19 3.75 1.62-.67c.62-.26.93-.4 1.16-.25S22 3.33 22 4v2c0 .68 0 1.02-.22 1.17-.23.14-.54.01-1.16-.25L19 6.25z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 22H8m4-5v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 13H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M22 10v1c0 2.83 0 4.24-.88 5.12S18.82 17 16 17H8c-2.83 0-4.24 0-5.12-.88S2 13.82 2 11V9.5c0-3.29 0-4.93.9-6.04a4 4 0 0 1 .56-.55C4.56 2 6.21 2 9.5 2"
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
              d="M16 2h-1c-1.41 0-2.12 0-2.56.44S12 3.59 12 5s0 2.12.44 2.56S13.59 8 15 8h1c1.41 0 2.12 0 2.56-.44.29-.28.39-.68.42-1.31H19l1.62.67c.62.26.93.4 1.16.25S22 6.67 22 6V4c0-.68 0-1.02-.22-1.17-.23-.14-.54-.01-1.16.25L19 3.75h-.02c-.03-.63-.13-1.03-.42-1.31C18.12 2 17.41 2 16 2"
              fill="currentColor"
            />
            <path
              d="M7.98 17.5c-2.83 0-4.25 0-5.14-.88-.57-.57-.77-1.36-.84-2.62v-1h20v1c-.07 1.26-.27 2.05-.84 2.62-.89.88-2.3.88-5.14.88h-3.27v4h3.27a.75.75 0 1 1 0 1.5H7.98a.75.75 0 1 1 0-1.5h3.27v-4z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M22 10v1l-.01 2H2v-3c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h.92c-.2.38-.3.79-.35 1.15-.07.51-.07 1.13-.07 1.77v.16c0 .64 0 1.26.07 1.77.08.57.26 1.23.8 1.77.55.55 1.2.73 1.78.81.51.07 1.13.07 1.77.07h1.16c.64 0 1.26 0 1.77-.07a3 3 0 0 0 1.77-.8q.18-.18.3-.37l.12.05.06.02c.25.11.58.25.88.32.23.06.6.12 1.02.03z"
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
              d="M16 2h-1c-1.41 0-2.12 0-2.56.44S12 3.59 12 5s0 2.12.44 2.56S13.59 8 15 8h1c1.41 0 2.12 0 2.56-.44.29-.28.39-.68.42-1.31H19l1.62.67c.62.26.93.4 1.16.25S22 6.67 22 6V4c0-.68 0-1.02-.22-1.17-.23-.14-.54-.01-1.16.25L19 3.75h-.02c-.03-.63-.13-1.03-.42-1.31C18.12 2 17.41 2 16 2"
              fill="currentColor"
            />
            <path
              d="M8 17c-2.83 0-4.24 0-5.12-.88-.57-.57-.77-1.36-.84-2.62h19.92c-.07 1.26-.27 2.05-.84 2.62-.88.88-2.3.88-5.12.88h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4z"
              fill="currentColor"
            />
            <path
              d="M22 10v2.5H2V10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h.92c-.2.38-.3.79-.35 1.15-.07.51-.07 1.13-.07 1.77v.16c0 .64 0 1.26.07 1.77.08.57.26 1.23.8 1.77.55.55 1.2.73 1.78.81.51.07 1.13.07 1.77.07h1.16c.64 0 1.26 0 1.77-.07a3 3 0 0 0 1.77-.8q.18-.18.3-.37l.12.05.06.02c.25.11.58.25.88.32.23.06.6.12 1.02.03z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMonitorCamera;
