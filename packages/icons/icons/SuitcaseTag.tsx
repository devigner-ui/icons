import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuitcaseTag = forwardRef<SVGSVGElement, IconProps>(
  function IconSuitcaseTag(
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
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 6c0-1.89 0-2.83-.59-3.41C14.83 2 13.9 2 12 2s-2.83 0-3.41.59C8 3.17 8 4.1 8 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10 15H6c-.47 0-.7 0-.85.15S5 15.53 5 16v1c0 .47 0 .7.15.85s.38.15.85.15h4c.47 0 .7 0 .85-.15s.15-.38.15-.85v-1c0-.47 0-.7-.15-.85S10.47 15 10 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 6.5V15m0 6.5v-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 6.5v15"
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
              opacity={duotone ? "0.4" : "1"}
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              fill="currentColor"
            />
            <path
              d="M11.95 1.25c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.34-.08 2.24V6h1.5c0-.96 0-1.61.07-2.1.06-.46.17-.65.3-.78s.32-.24.79-.3c.48-.07 1.13-.07 2.09-.07s1.61 0 2.1.07c.46.06.65.17.78.3s.24.32.3.79c.07.48.07 1.13.07 2.09h1.5v-.05q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08z"
              fill="currentColor"
            />
            <path
              d="M10 15H6c-.47 0-.7 0-.85.15S5 15.53 5 16v1c0 .47 0 .7.15.85s.38.15.85.15h4c.47 0 .7 0 .85-.15s.15-.38.15-.85v-1c0-.47 0-.7-.15-.85S10.47 15 10 15"
              fill="currentColor"
            />
            <path
              d="M5.25 21.8q.65.11 1.5.15V18H6q-.54.02-.75-.07z"
              fill="currentColor"
            />
            <path
              d="M5.25 15.07V6.2q.65-.11 1.5-.15V15H6q-.54-.02-.75.07"
              fill="currentColor"
            />
            <path
              d="M17.25 21.95q.85-.04 1.5-.15V6.2q-.65-.11-1.5-.15z"
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
              d="M12.05 1.25h-.1c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.34-.08 2.24v.08q-.26 0-.5.02v8.2h3.28q.32 0 .62.03c.22.02.5.1.73.34.24.23.32.51.34.73q.04.3.03.62v1.06q0 .32-.03.62a1.2 1.2 0 0 1-1.07 1.08q-.3.02-.62.02H6.75v3.2q1.33.06 3.25.05h4q1.92.01 3.25-.05V6.05l-.5-.02v-.08q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08M15.25 6c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07s-1.61 0-2.1.07c-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.48-.07 1.13-.07 2.09z"
              fill="currentColor"
            />
            <path
              d="M20.83 20.83c-.52.52-1.18.8-2.08.97V6.2c.9.16 1.56.45 2.08.97C22 8.34 22 10.23 22 14s0 5.66-1.17 6.83"
              fill="currentColor"
            />
            <path
              d="M3.17 7.17c.52-.52 1.18-.8 2.08-.97v8.1q-.32.03-.63.32c-.24.23-.32.51-.34.73q-.04.3-.03.62v1.06q0 .32.03.62c.02.22.1.5.34.73q.31.29.63.33v3.09a3.7 3.7 0 0 1-2.08-.97C2 19.66 2 17.77 2 14s0-5.66 1.17-6.83"
              fill="currentColor"
            />
            <path d="M5.75 15.75v1.5h4.5v-1.5z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconSuitcaseTag;
