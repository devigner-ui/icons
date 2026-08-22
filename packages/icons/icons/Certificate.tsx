import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCertificate = forwardRef<SVGSVGElement, IconProps>(
  function IconCertificate(
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
            <circle
              cx="12"
              cy="16.0005"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m12 19.26-2.26 2.17c-.33.31-.49.47-.63.52a.7.7 0 0 1-.82-.25c-.07-.12-.1-.33-.14-.75a2 2 0 0 0-.08-.46.8.8 0 0 0-.5-.48q-.13-.04-.47-.07a2 2 0 0 1-.79-.13.6.6 0 0 1-.26-.8c.06-.13.22-.28.55-.6l1.47-1.4 1.04-1.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m12 19.26 2.26 2.17c.33.31.49.47.63.52.3.12.66.02.82-.25.07-.12.1-.33.14-.75.03-.24.04-.36.08-.46q.13-.34.5-.48.13-.04.47-.07c.44-.04.67-.07.79-.13a.6.6 0 0 0 .26-.8c-.06-.13-.22-.28-.55-.6L15.93 17l-.93-.93"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.32 18c1.97-.02 3.07-.15 3.8-.88.88-.88.88-2.3.88-5.12V8c0-2.83 0-4.24-.88-5.12S18.82 2 16 2H8c-2.83 0-4.24 0-5.12.88S2 5.18 2 8v4c0 2.83 0 4.24.88 5.12.77.77 1.94.87 4.12.88"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 6h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 9.5h10"
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
              d="M2 8v4c0 2.83 0 4.24.88 5.12.48.48 1.1.7 2.04.8q.1-.15.2-.24.18-.2.4-.41l1.5-1.47.54-.56a4.5 4.5 0 0 1 8.88 0l.55.56 1.49 1.47q.22.21.4.41.1.09.2.24c.93-.1 1.57-.32 2.04-.8.88-.88.88-2.3.88-5.12V8c0-2.83 0-4.24-.88-5.12S18.82 2 16 2H8c-2.83 0-4.24 0-5.12.88S2 5.18 2 8"
              fill="currentColor"
            />
            <path
              d="M7 8.75a.75.75 0 1 0 0 1.5h10a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M8.25 6c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6"
              fill="currentColor"
            />
            <path d="M9 15.92V16a3 3 0 1 0 0-.08" fill="currentColor" />
            <path
              d="M7.68 17.25 6.6 18.32c-.33.31-.5.47-.55.61-.12.3-.02.65.26.81.12.07.35.1.79.14.24.03.37.04.47.08q.37.13.5.49.05.13.08.47c.05.43.07.65.14.77.16.28.51.38.82.26.14-.06.3-.22.63-.54l1.08-1.07a4.5 4.5 0 0 1-3.14-3.09"
              fill="currentColor"
            />
            <path
              d="m13.18 20.34 1.08 1.07c.33.32.49.48.63.54.3.12.66.02.82-.26.07-.12.1-.34.14-.77.03-.25.04-.37.08-.47q.13-.35.5-.5.13-.04.47-.07c.44-.04.67-.07.79-.14.28-.16.38-.5.26-.81a2 2 0 0 0-.55-.61l-1.08-1.07a4.5 4.5 0 0 1-3.14 3.1"
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
              d="M2 12V8c0-2.83 0-4.24.88-5.12S5.18 2 8 2h8c2.83 0 4.24 0 5.12.88S22 5.18 22 8v4c0 2.83 0 4.24-.88 5.12-.48.48-1.1.7-2.04.8q-.1-.15-.2-.24-.18-.2-.4-.41l-1.5-1.47-.54-.56a4.5 4.5 0 0 0-8.88 0l-.55.56-1.49 1.47q-.22.21-.4.41-.1.09-.2.24c-.93-.1-1.56-.32-2.04-.8C2 16.24 2 14.82 2 12m7-6.75a.75.75 0 1 0 0 1.5h6a.75.75 0 0 0 0-1.5zM6.25 9.5c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path d="M15 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path d="M9 15.92V16a3 3 0 1 0 0-.08" fill="currentColor" />
            <path
              d="M7.68 17.25 6.6 18.32c-.33.31-.5.47-.55.61-.12.3-.02.65.26.81.12.07.35.1.79.14.24.03.37.04.47.08q.37.13.5.49.05.13.08.47c.05.43.07.65.14.77.16.28.51.38.82.26.14-.06.3-.22.63-.54l1.08-1.07a4.5 4.5 0 0 1-3.14-3.09"
              fill="currentColor"
            />
            <path
              d="m13.18 20.34 1.08 1.07c.33.32.49.48.63.54.3.12.66.02.82-.26.07-.12.1-.34.14-.77.03-.25.04-.37.08-.47q.13-.35.5-.5.13-.04.47-.07c.44-.04.67-.07.79-.14.28-.16.38-.5.26-.81a2 2 0 0 0-.55-.61l-1.08-1.07a4.5 4.5 0 0 1-3.14 3.1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCertificate;
