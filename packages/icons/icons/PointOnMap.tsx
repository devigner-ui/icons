import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPointOnMap = forwardRef<SVGSVGElement, IconProps>(
  function IconPointOnMap(
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
              d="m18 8 .95.32c.99.33 1.48.5 1.77.88.28.4.28.92.28 1.96v5.67c0 1.29 0 1.94-.34 2.35a2 2 0 0 1-.41.35c-.47.27-1.1.16-2.38-.05-1.25-.21-1.88-.32-2.5-.26q-.33.03-.65.1c-.62.13-1.19.42-2.34.99-1.5.75-2.25 1.12-3.05 1.24a5 5 0 0 1-.72.05c-.81 0-1.6-.26-3.18-.79l-.38-.13c-.99-.33-1.48-.5-1.77-.88C3 19.4 3 18.88 3 17.84V12.9c0-1.66 0-2.49.49-2.94l.28-.2c.58-.32 1.36-.06 2.94.47"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M6 7.7C6 4.55 8.69 2 12 2s6 2.55 6 5.7c0 3.12-1.91 6.77-4.9 8.07-.7.3-1.5.3-2.2 0C7.91 14.47 6 10.82 6 7.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="12"
              cy="8.00024"
              r="2"
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
              d="M3 13.04c0-1.1 0-1.66.4-1.98q.2-.16.49-.27c.53-.17 1.23 0 2.63.35 1.07.26 1.6.4 2.14.38q.3 0 .59-.05c.52-.1.99-.33 1.93-.8l1.38-.69c1.2-.6 1.8-.9 2.49-.96.68-.07 1.37.1 2.73.44l1.17.29c.99.25 1.48.37 1.77.66.28.3.28.69.28 1.47v6.08c0 1.1 0 1.66-.4 1.98q-.2.16-.49.27c-.53.18-1.23 0-2.63-.35-1.07-.26-1.6-.4-2.14-.38q-.3 0-.59.06c-.52.09-.99.32-1.93.79l-1.38.69c-1.2.6-1.8.9-2.49.97-.68.06-1.37-.1-2.73-.45l-1.17-.29c-.99-.25-1.48-.37-1.77-.66C3 20.29 3 19.9 3 19.12z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C8.69 2 6 4.55 6 7.7c0 3.12 1.91 6.77 4.9 8.07.7.3 1.5.3 2.2 0 2.99-1.3 4.9-4.95 4.9-8.07C18 4.55 15.31 2 12 2m0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
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
              d="M21 16.83v-5.67c0-1.04 0-1.56-.28-1.96-.23-.31-.6-.48-1.25-.7-.14 1.6-.67 3.24-1.5 4.67a9.4 9.4 0 0 1-4.27 3.98 4.3 4.3 0 0 1-3.4 0 9.4 9.4 0 0 1-4.27-3.98A12 12 0 0 1 4.7 9.66a1.4 1.4 0 0 0-.93.11q-.16.1-.28.2C3 10.42 3 11.25 3 12.91v4.93c0 1.04 0 1.56.28 1.96s.78.55 1.77.88l.38.13c1.58.53 2.37.79 3.18.8a5 5 0 0 0 .72-.06c.8-.12 1.55-.49 3.05-1.24 1.15-.57 1.72-.86 2.33-1a5 5 0 0 1 .65-.1c.63-.05 1.26.06 2.51.27 1.28.21 1.91.32 2.38.05q.23-.13.41-.35c.34-.41.34-1.06.34-2.35"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C8.69 2 6 4.55 6 7.7c0 3.12 1.91 6.77 4.9 8.07.7.3 1.5.3 2.2 0 2.99-1.3 4.9-4.95 4.9-8.07C18 4.55 15.31 2 12 2m0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPointOnMap;
