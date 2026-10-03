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
        {variant === "Broken" ? (
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
            d="m17.56 10.33 2.98-2.98.65-.65a2.75 2.75 0 0 0-3.89-3.9l-.65.66m0 0s.08 1.37 1.3 2.59a4.4 4.4 0 0 0 2.6 1.3m-3.9-3.9L10.7 9.43c-.4.4-.6.6-.78.83q-.3.4-.53.85c-.12.25-.2.52-.39 1.06l-.58 1.74m0 0-.37 1.12a.74.74 0 0 0 .94.94l1.12-.37 1.74-.58c.54-.18.8-.27 1.06-.4q.46-.2.85-.52c.22-.17.43-.37.83-.78M10.1 15.6l-1.69-1.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22.75 12a.75.75 0 0 0-1.5 0zM12 2.75a.75.75 0 0 0 0-1.5zM7.38 20.01a.75.75 0 1 0-.76 1.3zm-4.7-2.63a.75.75 0 1 0 1.3-.76zM21.26 12c0 5.1-4.14 9.25-9.25 9.25v1.5c5.94 0 10.75-4.81 10.75-10.75zM12 1.25A10.75 10.75 0 0 0 1.25 12h1.5c0-5.1 4.14-9.25 9.25-9.25zM6.62 21.31A10.7 10.7 0 0 0 12 22.75v-1.5a9 9 0 0 1-4.62-1.24zM1.25 12c0 1.96.52 3.8 1.44 5.38l1.3-.76A9 9 0 0 1 2.75 12z"
            fill="currentColor"
          />
        </svg>
      ) : !fill ? (
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
