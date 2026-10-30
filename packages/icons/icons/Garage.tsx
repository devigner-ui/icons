import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGarage = forwardRef<SVGSVGElement, IconProps>(function IconGarage(
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
            d="M22 21.5H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3 21.5V10.85A3 3 0 0 1 4 8.6m17 12.9v-6M7.25 5.72l2.76-2.45a3 3 0 0 1 3.98 0l6 5.34A3 3 0 0 1 21 10.85v.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 18h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 21.5v-3m12 3v-6c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59h-4c-1.89 0-2.83 0-3.41.59-.48.47-.57 1.17-.59 2.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 8.5h.5m3.5 0h-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 15h1.5m4.5 0h-2.5"
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
            d="M22 21.5H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3 21.5V10.85A3 3 0 0 1 4 8.6l6-5.34a3 3 0 0 1 4 0l6 5.34a3 3 0 0 1 1 2.24V21.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 8.5h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 15h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 18h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 21.5v-6c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59h-4c-1.89 0-2.83 0-3.41.59C6 12.67 6 13.6 6 15.5v6"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2.87 4 8.21a3 3 0 0 0-1 2.24v9.9H2a.75.75 0 1 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1v-9.9a3 3 0 0 0-1-2.24l-6-5.34a3 3 0 0 0-4 0m0 4.48a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm4.05 3q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.89.08 2.24v5.3H5.25v-5.3c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.05 10.35h-4.1q-1.35-.02-2.24.08c-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.59-.08 1.34-.08 2.24v5.3h13.5v-5.3q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73q-.89-.1-2.24-.08"
            fill="currentColor"
          />
          <path
            d="M9 13.85a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M9 16.85a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
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
            d="m4 8.2 6-5.33a3 3 0 0 1 4 0l6 5.34a3 3 0 0 1 1 2.24v9.9h1a.75.75 0 1 1 0 1.5H2a.75.75 0 0 1 0-1.5h1v-9.9A3 3 0 0 1 4 8.2m5.26-.1c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.76-.75m4.8 2.25q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.89.08 2.24v5.3h-1.5V15.1c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07h-4c-.96 0-1.61 0-2.1.07-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.48-.07 1.13-.07 2.09v5.25h-1.5v-5.3c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08zm-5.8 4.25c0-.41.34-.75.75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGarage;
