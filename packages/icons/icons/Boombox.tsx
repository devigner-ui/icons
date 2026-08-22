import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBoombox = forwardRef<SVGSVGElement, IconProps>(function IconBoombox(
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
            d="M6 9.5h12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16 6c0-1.89 0-2.83-.59-3.41C14.83 2 13.9 2 12 2s-2.83 0-3.41.59C8 3.17 8 4.1 8 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M11 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M18.12 18.12a3 3 0 1 1-4.24-4.24 3 3 0 0 1 4.24 4.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 13v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.12 13.88-1.41 1.41"
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
            d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 9.5c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.95 1.25h.1c.9 0 1.65 0 2.24.08.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.89.08 2.24V6h-1.5c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07s-1.61 0-2.1.07c-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.48-.07 1.13-.07 2.09h-1.5v-.05c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73c.59-.08 1.34-.08 2.24-.08"
            fill="currentColor"
          />
          <path
            d="M7.25 13.1a3 3 0 1 0 1.5 0V15a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
          <path
            d="M13.88 18.12a3 3 0 0 0 4.7-3.64l-1.34 1.34a.75.75 0 0 1-1.06-1.06l1.34-1.34a3 3 0 0 0-3.64 4.7"
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
            d="M5.75 16c0-.98.63-1.81 1.5-2.12V15a.75.75 0 0 0 1.5 0v-1.12a2.25 2.25 0 1 1-3 2.12"
            fill="currentColor"
          />
          <path
            d="M14.4 14.4c.7-.68 1.73-.83 2.57-.43l-.8.8a.75.75 0 1 0 1.07 1.05l.8-.79a2.25 2.25 0 1 1-3.63-.62"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.05 1.25h-.1c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.59-.08 1.34-.08 2.24v.08c-2.02.06-3.23.3-4.08 1.14C2 8.34 2 10.23 2 14s0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14s0-5.66-1.17-6.83c-.85-.84-2.06-1.08-4.08-1.14v-.08q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08M15.25 6c0-.84-.02-1.76-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07s-1.61 0-2.1.07c-.46.06-.65.17-.78.3s-.24.32-.3.79c-.05.33-.06 1.25-.07 2.1L10 6zM8 12.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m10.65 1.1a3.75 3.75 0 1 0-5.3 5.3 3.75 3.75 0 0 0 5.3-5.3M5.25 9.5c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBoombox;
