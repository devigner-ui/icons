import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCaseRound = forwardRef<SVGSVGElement, IconProps>(
  function IconCaseRound(
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
            d="M9.17 3.5a3 3 0 0 1 5.66 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 21.75a.75.75 0 0 0 0 1.5zm-7.68-.42.5-.56zm15.36 0-.5-.56zM7.95 23.18a.75.75 0 1 0 .1-1.5zM2.25 12.5c0 1.87 0 3.83.17 5.47q.11 1.24.42 2.24c.2.65.5 1.26.98 1.68l1-1.12a2.3 2.3 0 0 1-.55-1.01q-.24-.79-.36-1.95a55 55 0 0 1-.16-5.31zM12 23.25c2.1 0 3.75 0 5.03-.15a5.5 5.5 0 0 0 3.15-1.21l-1-1.12c-.5.44-1.17.7-2.33.84s-2.71.14-4.85.14zm-3.95-1.56c-1.72-.1-2.62-.38-3.23-.92l-1 1.12c1.02.9 2.36 1.19 4.13 1.3zm12.2-8.8c0 1.83-.01 3.61-.18 5.08q-.12 1.1-.36 1.84-.25.73-.53.96l1 1.12c.46-.41.76-1 .96-1.61q.3-.96.42-2.14c.18-1.57.19-3.44.19-5.25z"
            fill="currentColor"
          />
          <path
            d="m14.66 14.5 3-.78m-8.32.78-6-1.57c-.6-.15-.9-.23-1.09-.42l-.1-.11C2 12.19 2 11.92 2 11.38c0-2.13 0-3.2.67-3.92q.2-.2.44-.37c.82-.59 2.05-.59 4.49-.59h8.78c2.45 0 3.68 0 4.5.59q.24.15.44.37c.67.72.67 1.79.67 3.92 0 .54 0 .8-.15 1.02l-.1.11c-.15.15-.37.23-.75.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14 13h-4a.5.5 0 0 0-.5.5v2.16c0 .2.12.39.31.47l.7.28a4 4 0 0 0 2.98 0l.7-.28a.5.5 0 0 0 .31-.47V13.5a.5.5 0 0 0-.5-.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M3 12c0 3.77 0 7.66 1.32 8.83S7.76 22 12 22s6.36 0 7.68-1.17S21 15.77 21 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m14.66 14.2 6.2-1.86c.4-.12.61-.18.77-.3a1 1 0 0 0 .3-.4c.07-.19.07-.4.07-.83 0-1.69 0-2.53-.33-3.18a3 3 0 0 0-1.3-1.3C19.72 6 18.88 6 17.19 6H6.81c-1.69 0-2.53 0-3.18.33a3 3 0 0 0-1.3 1.3C2 8.28 2 9.13 2 10.81c0 .43 0 .64.07.82a1 1 0 0 0 .3.4c.16.13.36.19.77.31l6.2 1.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.16c0 .2.12.39.31.47l.7.28a4 4 0 0 0 2.98 0l.7-.28a.5.5 0 0 0 .31-.47V13a.5.5 0 0 0-.5-.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.17 4a3 3 0 0 1 5.66 0"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.2 6.4H6.8c-1.68 0-2.52 0-3.17.33a3 3 0 0 0-1.3 1.3C2 8.68 2 9.53 2 11.21c0 .43 0 .64.07.82a1 1 0 0 0 .3.4c.16.13.36.19.77.31l5.36 1.61v1.21c0 .77.46 1.47 1.19 1.77l.56.23a4.7 4.7 0 0 0 3.5 0l.56-.23c.73-.3 1.19-1 1.19-1.77v-1.21l5.36-1.6c.4-.13.61-.2.77-.31a1 1 0 0 0 .3-.4c.07-.19.07-.4.07-.83 0-1.69 0-2.53-.33-3.18a3 3 0 0 0-1.3-1.3c-.65-.33-1.49-.33-3.18-.33m-3.6 7h-3.2a.4.4 0 0 0-.4.4v1.76q.01.27.25.38l.56.23c.76.3 1.62.3 2.38 0l.56-.23a.4.4 0 0 0 .25-.38v-1.75a.4.4 0 0 0-.4-.4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.96 12.71-.04.01-5.42 1.63v1.21a1.9 1.9 0 0 1-1.19 1.77l-.56.23a4.7 4.7 0 0 1-3.5 0l-.56-.23a1.9 1.9 0 0 1-1.19-1.77v-1.21L3 12.7c0 3.68.03 7.39 1.32 8.53C5.64 22.4 7.76 22.4 12 22.4s6.36 0 7.68-1.17C20.97 20.09 21 16.38 21 12.7z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.17 4.4a3 3 0 0 1 5.66 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M12 3.15c-.98 0-1.81.63-2.12 1.5a.75.75 0 0 1-1.42-.5 3.75 3.75 0 0 1 7.08 0 .75.75 0 1 1-1.42.5A2.25 2.25 0 0 0 12 3.15"
              fill="currentColor"
            />
            <path
              d="M14 12.9h-4a.5.5 0 0 0-.5.5v2.16c0 .2.12.39.31.47l.7.28a4 4 0 0 0 2.98 0l.7-.28a.5.5 0 0 0 .31-.47V13.4a.5.5 0 0 0-.5-.5"
              fill="currentColor"
            />
            <path
              d="m8.01 15.77-5-1.5c.03 3.11.2 5.98 1.3 6.96C5.65 22.4 7.77 22.4 12 22.4s6.36 0 7.68-1.17c1.1-.98 1.28-3.85 1.31-6.96l-5 1.5a2 2 0 0 1-1.25 1.65l-.7.28a5.5 5.5 0 0 1-4.08 0l-.7-.28A2 2 0 0 1 8 15.77"
              fill="currentColor"
            />
            <path
              d="M7.6 5.4h8.8c2.44 0 3.67 0 4.5.67a3 3 0 0 1 .43.44c.67.82.67 2.05.67 4.5 0 .62 0 .93-.15 1.17l-.1.14c-.19.21-.49.3-1.08.48L16 14.2v-.8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.67-1.4c-.6-.18-.9-.27-1.08-.48l-.1-.14C2 11.94 2 11.63 2 11.01c0-2.45 0-3.68.67-4.5a3 3 0 0 1 .44-.44c.82-.67 2.05-.67 4.49-.67"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCaseRound;
