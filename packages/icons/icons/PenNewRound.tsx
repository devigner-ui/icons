import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPenNewRound = forwardRef<SVGSVGElement, IconProps>(
  function IconPenNewRound(
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
              d="M16.65 3.46s.08 1.37 1.3 2.6a4.5 4.5 0 0 0 2.6 1.29M10.1 15.59 8.41 13.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m16.65 3.46.65-.65a2.75 2.75 0 0 1 3.9 3.89l-.66.65-5.96 5.96c-.4.4-.6.6-.83.78q-.4.3-.85.53c-.25.12-.52.2-1.06.39l-1.74.58-1.12.37a.74.74 0 0 1-.94-.94l.37-1.12.58-1.74c.18-.54.27-.8.4-1.06q.2-.46.52-.85c.17-.22.37-.43.78-.83z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12A10 10 0 1 1 12 2"
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12.0002"
              r="10"
              fill="currentColor"
            />
            <path
              d="M13.93 14.3c.24-.19.46-.41.9-.86l5.55-5.54c.13-.13.07-.36-.1-.42a6 6 0 0 1-3.76-3.75c-.06-.18-.29-.24-.42-.1l-5.54 5.53c-.45.45-.67.67-.86.91q-.34.44-.58.94c-.13.28-.23.58-.43 1.17l-.26.77-.4 1.23-.39 1.15a.82.82 0 0 0 1.03 1.03l1.15-.38 1.23-.41.77-.26c.6-.2.9-.3 1.17-.43q.5-.24.94-.58"
              fill="currentColor"
            />
            <path
              d="M22.11 6.17a3.03 3.03 0 1 0-4.28-4.28l-.18.18a.7.7 0 0 0-.2.65q.03.23.16.63a4.9 4.9 0 0 0 3.67 3.2q.37.06.66-.2z"
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
              d="M21.2 2.8a2.75 2.75 0 0 1 0 3.9l-.5.5-.53-.16A5.2 5.2 0 0 1 16.8 3.3l.5-.5a2.75 2.75 0 0 1 3.88 0"
              fill="currentColor"
            />
            <path
              d="M14.58 13.31c-.4.4-.6.6-.83.78q-.4.3-.85.53c-.25.12-.52.2-1.06.39l-2.86.95a.74.74 0 0 1-.94-.94l.95-2.86c.18-.54.27-.8.4-1.06q.2-.46.52-.85c.17-.22.37-.43.78-.83L15.6 4.5a6.7 6.7 0 0 0 3.9 3.9z"
              fill="currentColor"
            />
            <path
              d="M12 22a10 10 0 0 0 9.4-13.4l-5.81 5.83c-.36.35-.62.61-.92.85a6 6 0 0 1-2.29 1.13l-2.93.98a2.24 2.24 0 0 1-2.83-2.84l.97-2.93c.16-.47.28-.83.44-1.17q.28-.6.7-1.12c.23-.3.49-.56.84-.92L15.4 2.6A10 10 0 1 0 12 22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPenNewRound;
