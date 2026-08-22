import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconForbidden3 = forwardRef<SVGSVGElement, IconProps>(
  function IconForbidden3(
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
              d="M15.57 2h-5.8c-.68 0-1.64.4-2.12.88l-4.1 4.1a3.5 3.5 0 0 0-.88 2.12v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1A3.5 3.5 0 0 0 15.57 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.61 19.08 19.75 4.94"
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
              d="M15.57 2h-5.8c-.68 0-1.64.4-2.12.88l-4.1 4.1a3.5 3.5 0 0 0-.88 2.12v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1A3.5 3.5 0 0 0 15.57 2"
              fill="currentColor"
            />
            <path
              d="M3.69 21.75a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L21.14 2.49a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L4.22 21.53a.7.7 0 0 1-.53.22"
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
              d="M17.69 2.88A3.5 3.5 0 0 0 15.57 2h-5.8c-.68 0-1.64.4-2.12.88l-4.1 4.1a3.5 3.5 0 0 0-.88 2.12v5.8c0 .68.4 1.64.88 2.12l1.53 1.53L19.22 4.41z"
              fill="currentColor"
            />
            <path
              d="m21.79 6.98-1.51-1.51L6.14 19.61l1.51 1.51c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12"
              fill="currentColor"
            />
            <path
              d="M3.16 20.47a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l1.92-1.92-1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="M22.2 3.55a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.92 1.92 1.06 1.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconForbidden3;
