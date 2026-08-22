import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconForwardItem = forwardRef<SVGSVGElement, IconProps>(
  function IconForwardItem(
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
              d="M18.05 10.38v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23c-2.69 0-3.77-1.08-3.77-3.77v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.7.01 3.77 1.08 3.77 3.77"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77H11.9v-.85C11.9 3.08 12.98 2 15.67 2h3.23c2.69 0 3.77 1.08 3.77 3.77"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85v2.38c0 2.69 1.08 3.77 3.77 3.77h2.38v.85c0 2.69-1.08 3.77-3.77 3.77H6.44c-2.69 0-3.77-1.08-3.77-3.77"
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
              d="M21.92 5.77V9c0 2.29-.73 3.02-3.02 3.02h-.1v-1.64c0-3.12-1.39-4.51-4.51-4.51h-1.64v-.1c0-2.29.73-3.02 3.02-3.02h3.23c2.29 0 3.02.73 3.02 3.02"
              fill="currentColor"
            />
            <path
              d="M17.3 10.38v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.69 18.13v.1c0 2.29-.73 3.02-3.02 3.02H6.44c-2.29 0-3.02-.73-3.02-3.02V15c0-2.29.73-3.02 3.02-3.02h.1v1.64c0 3.12 1.39 4.51 4.51 4.51z"
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
              d="M21.92 5.77V9c0 2.11-.7 2.9-2.62 3a.5.5 0 0 1-.5-.48v-1.14c0-3.12-1.39-4.51-4.51-4.51h-1.14a.5.5 0 0 1-.49-.5c.11-1.91.9-2.62 3.01-2.62h3.23c2.29 0 3.02.73 3.02 3.02"
              fill="currentColor"
            />
            <path
              d="M17.3 10.38v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01"
              fill="currentColor"
            />
            <path
              d="M12.19 18.13c.28 0 .5.23.49.5-.11 1.91-.9 2.62-3.01 2.62H6.44c-2.29 0-3.02-.73-3.02-3.02V15c0-2.11.7-2.9 2.62-3 .27-.02.5.2.5.48v1.14c0 3.12 1.39 4.51 4.51 4.51z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconForwardItem;
