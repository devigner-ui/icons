import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTransmission = forwardRef<SVGSVGElement, IconProps>(
  function IconTransmission(
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
              d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.75 6a.75.75 0 1 0-1.5 0zm-1.5 12a.75.75 0 0 0 1.5 0zm9.5-12a.75.75 0 0 0-1.5 0zm-1.5 12a.75.75 0 0 0 1.5 0zm9.5-12a.75.75 0 0 0-1.5 0zM4 11.25a.75.75 0 0 0 0 1.5zm15.41.16-.53-.53zM3.25 6v12h1.5V6zm8 0v12h1.5V6zm8 0v2h1.5V6zM16 11.25H4v1.5h12zM19.25 8c0 .96 0 1.61-.07 2.1-.06.46-.17.65-.3.78l1.06 1.06c.46-.45.65-1.02.73-1.64q.1-.92.08-2.3zM16 12.75q1.38.02 2.3-.08a2.7 2.7 0 0 0 1.64-.72l-1.06-1.07c-.13.13-.32.24-.79.3-.48.07-1.13.07-2.09.07z"
              fill="currentColor"
            />
            <path
              d="M18 15v-.75a.75.75 0 0 0-.75.75zm-.75 7a.75.75 0 0 0 1.5 0zm4.11.4a.75.75 0 1 0 1.28-.8zM18 15.74h2.29v-1.5H18zm.75 2.75V15h-1.5v3.5zm2.5-1.75c0 .57-.45 1-.96 1v1.5a2.5 2.5 0 0 0 2.46-2.5zm-.96-1c.51 0 .96.43.96 1h1.5c0-1.37-1.09-2.5-2.46-2.5zm0 2h-.43v1.5h.43zm-.43 0H18v1.5h1.86zm-.64 1.14 2.14 3.5 1.28-.78-2.14-3.5zm-1.97-.39V22h1.5v-3.5z"
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
              d="M2 4a2 2 0 1 1 2.75 1.86v5.39h6.5v-5.4a2 2 0 1 1 1.5 0v5.4H16c.96 0 1.61 0 2.1-.07.46-.06.65-.17.78-.3s.24-.32.3-.78c.07-.49.07-1.14.07-2.1V5.86a2 2 0 1 1 1.5 0v2.2q.02 1.35-.08 2.23c-.08.63-.27 1.2-.73 1.66s-1.02.64-1.65.72q-.89.1-2.24.08h-3.3v5.4a2 2 0 1 1-1.5 0v-5.4h-6.5v5.4a2 2 0 1 1-1.5 0V5.85A2 2 0 0 1 2 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.25 15c0-.41.34-.75.75-.75h2.29a2.5 2.5 0 0 1 2.46 2.5 2.5 2.5 0 0 1-1.64 2.36l1.53 2.5a.75.75 0 1 1-1.28.78l-1.92-3.14h-.69V22a.75.75 0 0 1-1.5 0zm1.5 2.75h1.54c.51 0 .96-.43.96-1s-.45-1-.96-1h-1.54z"
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
              d="M2 4a2 2 0 1 1 2.75 1.86v5.39h6.5v-5.4a2 2 0 1 1 1.5 0v5.4H16c.96 0 1.61 0 2.1-.07.46-.06.65-.17.78-.3s.24-.32.3-.78c.07-.49.07-1.14.07-2.1V5.86a2 2 0 1 1 1.5 0v2.2q.02 1.35-.08 2.23c-.08.63-.27 1.2-.73 1.66s-1.02.64-1.65.72q-.89.1-2.24.08h-3.3v5.4a2 2 0 1 1-1.5 0v-5.4h-6.5v5.4a2 2 0 1 1-1.5 0V5.85A2 2 0 0 1 2 4"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.25 15c0-.41.34-.75.75-.75h2.29a2.5 2.5 0 0 1 2.46 2.5 2.5 2.5 0 0 1-1.64 2.36l1.53 2.5a.75.75 0 1 1-1.28.78l-1.92-3.14h-.69V22a.75.75 0 0 1-1.5 0zm1.5 2.75h1.54c.51 0 .96-.43.96-1s-.45-1-.96-1h-1.54z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTransmission;
