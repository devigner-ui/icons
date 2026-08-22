import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoonStars = forwardRef<SVGSVGElement, IconProps>(
  function IconMoonStars(
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
              d="M19.9 2.3a.48.48 0 0 0-.9 0l-.43 1.1a.5.5 0 0 1-.27.28l-1.1.43c-.4.16-.4.74 0 .9l1.1.43q.19.08.27.28l.43 1.1c.16.4.74.4.9 0l.43-1.1a.5.5 0 0 1 .27-.28l1.1-.43c.4-.16.4-.74 0-.9l-1.1-.43a.5.5 0 0 1-.27-.28z"
              stroke="currentColor"
            />
            <path
              d="M16.03 8.13a.48.48 0 0 0-.9 0l-.15.4a.5.5 0 0 1-.28.27l-.4.16c-.4.16-.4.74 0 .9l.4.16q.2.08.28.27l.15.4c.16.41.74.41.9 0l.16-.4a.5.5 0 0 1 .27-.27l.4-.16c.4-.16.4-.74 0-.9l-.4-.16a.5.5 0 0 1-.27-.27z"
              stroke="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21.07 11.86-.64-.4zm-8.93-8.93-.38-.64zM21.25 12c0 5.1-4.14 9.25-9.25 9.25v1.5c5.94 0 10.75-4.81 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.94 4.81 10.75 10.75 10.75zM2.75 12c0-5.1 4.14-9.25 9.25-9.25v-1.5A10.75 10.75 0 0 0 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5c0 4 3.25 7.25 7.25 7.25zm4.93-2.78a5.8 5.8 0 0 1-4.93 2.78v1.5c2.63 0 4.94-1.4 6.2-3.5zM9.75 8.5a5.8 5.8 0 0 1 2.78-4.93l-.77-1.28A7.3 7.3 0 0 0 8.25 8.5zM12 2.75a.4.4 0 0 1-.27-.12.3.3 0 0 1-.08-.15c0-.03 0-.12.1-.19l.78 1.28c.5-.3.67-.86.6-1.3A1.13 1.13 0 0 0 12 1.25zm9.7 9.5c-.06.1-.15.1-.18.1a.3.3 0 0 1-.15-.08.4.4 0 0 1-.12-.27h1.5c0-.72-.57-1.08-1.03-1.14-.43-.06-1 .1-1.3.6z"
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
              d="M19.9 2.3a.48.48 0 0 0-.9 0l-.43 1.1a.5.5 0 0 1-.27.28l-1.1.43c-.4.16-.4.74 0 .9l1.1.43q.19.08.27.28l.43 1.1c.16.4.74.4.9 0l.43-1.1a.5.5 0 0 1 .27-.28l1.1-.43c.4-.16.4-.74 0-.9l-1.1-.43a.5.5 0 0 1-.27-.28z"
              fill="currentColor"
            />
            <path
              d="M16.03 8.13a.48.48 0 0 0-.9 0l-.15.4a.5.5 0 0 1-.28.27l-.4.16c-.4.16-.4.74 0 .9l.4.16q.2.08.28.27l.15.4c.16.41.74.41.9 0l.16-.4a.5.5 0 0 1 .27-.27l.4-.16c.4-.16.4-.74 0-.9l-.4-.16a.5.5 0 0 1-.27-.27z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22a10 10 0 0 0 10-10c0-.46-.7-.54-.93-.14a6.5 6.5 0 1 1-8.93-8.93c.4-.24.32-.93-.14-.93a10 10 0 1 0 0 20"
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
              d="M19.9 2.3a.48.48 0 0 0-.9 0l-.43 1.1a.5.5 0 0 1-.27.28l-1.1.43c-.4.16-.4.74 0 .9l1.1.43q.19.08.27.28l.43 1.1c.16.4.74.4.9 0l.43-1.1a.5.5 0 0 1 .27-.28l1.1-.43c.4-.16.4-.74 0-.9l-1.1-.43a.5.5 0 0 1-.27-.28z"
              fill="currentColor"
            />
            <path
              d="M16.03 8.13a.48.48 0 0 0-.9 0l-.15.4a.5.5 0 0 1-.28.27l-.4.16c-.4.16-.4.74 0 .9l.4.16q.2.08.28.27l.15.4c.16.41.74.41.9 0l.16-.4a.5.5 0 0 1 .27-.27l.4-.16c.4-.16.4-.74 0-.9l-.4-.16a.5.5 0 0 1-.27-.27z"
              fill="currentColor"
            />
            <path
              d="M12 22a10 10 0 0 0 10-10c0-.46-.7-.54-.93-.14a6.5 6.5 0 1 1-8.93-8.93c.4-.24.32-.93-.14-.93a10 10 0 1 0 0 20"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMoonStars;
