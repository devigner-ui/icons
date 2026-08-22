import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFerrisWheel = forwardRef<SVGSVGElement, IconProps>(
  function IconFerrisWheel(
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
              cy="11"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M20.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M20.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M5.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M5.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 18.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m13.5 13 5 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10.5 13-5 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.56 3.78a3 3 0 0 1 2.88 0l4.79 2.62a3 3 0 0 1 1.56 2.63v4.94a3 3 0 0 1-1.56 2.63l-4.8 2.62a3 3 0 0 1-2.87 0L5.77 16.6a3 3 0 0 1-1.56-2.63V9.03A3 3 0 0 1 5.77 6.4z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 11a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
              fill="currentColor"
            />
            <path
              d="m9.82 12.68-4.98 8.96a.75.75 0 0 0 1.32.72l4.88-8.78q-.74-.28-1.22-.9"
              fill="currentColor"
            />
            <path
              d="m12.96 13.58 4.88 8.78a.75.75 0 0 0 1.32-.72l-4.98-8.96q-.47.62-1.22.9"
              fill="currentColor"
            />
            <path
              d="M12 5.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5"
              fill="currentColor"
            />
            <path
              d="M2.75 7.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
              fill="currentColor"
            />
            <path
              d="M19.5 5.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
              fill="currentColor"
            />
            <path
              d="M19.5 14.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
              fill="currentColor"
            />
            <path
              d="M4.5 14.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
              fill="currentColor"
            />
            <path
              d="M10.25 19.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.64 4.6a1.7 1.7 0 0 1-.34-1.53l-.1.05-4.79 2.62-.24.14c.49.2.87.63 1.01 1.14zM4.96 9.19a1.8 1.8 0 0 1-1.5-.28v5.06q0 .3.04.6a1.7 1.7 0 0 1 1.48-.25l-.02-.35zm1.29 6.82c0 .55-.26 1.03-.65 1.35l4.6 2.52.1.05a1.8 1.8 0 0 1 .34-1.53zm7.11 2.4a1.7 1.7 0 0 1 .34 1.52l.1-.05 4.6-2.52c-.4-.32-.65-.8-.65-1.35zm5.66-4.1a1.8 1.8 0 0 1 1.48.25q.04-.3.04-.6V8.92a1.7 1.7 0 0 1-1.5.28v4.78l-.02.35m-1.2-7.28c.14-.52.52-.94 1.01-1.15l-.24-.14-4.8-2.62-.1-.05a1.8 1.8 0 0 1-.33 1.53z"
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
              d="M13.7 3.07a1.75 1.75 0 0 0-3.4 0l-.1.05-4.79 2.62-.24.14A1.74 1.74 0 0 0 2.75 7.5c0 .58.28 1.09.7 1.4v5.07q0 .3.05.6a1.75 1.75 0 1 0 2.1 2.8l1.3.7-2.05 3.55a.75.75 0 0 0 1.3.76l2.07-3.59 1.98 1.09.1.05a1.75 1.75 0 0 0 3.4 0l.1-.05 1.98-1.09 2.07 3.59a.75.75 0 0 0 1.3-.76l-2.06-3.54 1.31-.72q.46.38 1.1.39a1.75 1.75 0 0 0 1-3.19q.04-.3.04-.6V8.92a1.75 1.75 0 0 0-1.7-3.03l-.25-.14-4.8-2.62zM10.64 4.6a1.75 1.75 0 0 0 2.72 0l4.46 2.43a1.75 1.75 0 0 0 1.22 2.16v4.78l-.02.35c-.73.2-1.27.88-1.27 1.68v.01l-1.4.77-2.7-4.65a2 2 0 1 0-3.3 0l-2.7 4.65-1.4-.77V16c0-.8-.54-1.47-1.27-1.68l-.02-.35V9.19a1.75 1.75 0 0 0 1.22-2.16zM8.97 17.5l1.67.9a1.75 1.75 0 0 1 2.72 0l1.67-.9-2.63-4.54a2 2 0 0 1-.8 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFerrisWheel;
