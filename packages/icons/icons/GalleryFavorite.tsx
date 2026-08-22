import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGalleryFavorite = forwardRef<SVGSVGElement, IconProps>(
  function IconGalleryFavorite(
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
              d="M9.67 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 2h-3c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.79 5.11c-.33-1.04.06-2.33 1.14-2.68a1.5 1.5 0 0 1 1.68.52c.38-.57 1.11-.71 1.68-.52 1.09.35 1.48 1.64 1.15 2.68-.52 1.64-2.32 2.5-2.82 2.5-.51 0-2.3-.84-2.83-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m3.34 18.95 4.93-3.31a2.25 2.25 0 0 1 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0l1.63 1.4"
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
              d="M22.67 13.9v2.29c0 3.64-2.17 5.81-5.81 5.81H8.48c-2.55 0-4.4-1.07-5.25-2.97l.1-.08 4.93-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0z"
              fill="currentColor"
            />
            <path
              d="M21.64 1H18.7c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.03c0-1.27-.76-2.03-2.03-2.03m.64 3.68c-.37 1.18-1.66 1.82-2.11 1.82s-1.73-.62-2.11-1.82a2 2 0 0 1-.09-.57c0-.65.33-1.32 1.02-1.54.41-.13.85-.06 1.16.2a1.3 1.3 0 0 1 1.18-.2c.92.29 1.21 1.32.95 2.11"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.64 8H18.7c-1.27 0-2.03-.76-2.03-2.03V3.03q0-.6.22-1.03H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38q0 1.64.56 2.84l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0l1.63 1.4V7.78q-.43.21-1.03.22"
              fill="currentColor"
            />
            <path
              d="M9.67 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
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
              d="M9.67 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
              fill="currentColor"
            />
            <path
              d="M21.64 8h-.47v4.61l-.13-.11a2.2 2.2 0 0 0-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28a2.2 2.2 0 0 0-2.64-.14l-3.74 2.51a5 5 0 0 1-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31h8.19v-.47q0-.6.23-1.03H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38q0 1.64.56 2.84c.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.77q-.43.23-1.03.23"
              fill="currentColor"
            />
            <path
              d="M21.64 1H18.7c-.87 0-1.51.36-1.8 1q-.23.43-.23 1.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94q.6 0 1.03-.23c.64-.29 1-.93 1-1.8V3.03c0-1.27-.76-2.03-2.03-2.03m-.67 5.21c-.32.19-.63.29-.8.29-.45 0-1.73-.62-2.11-1.82a2 2 0 0 1-.02-1.07c.13-.47.44-.88.96-1.05q.3-.1.6-.04.3.04.56.24a1.3 1.3 0 0 1 1.18-.2c.91.3 1.2 1.33.94 2.12q-.06.18-.15.35c-.27.54-.73.94-1.16 1.18"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGalleryFavorite;
