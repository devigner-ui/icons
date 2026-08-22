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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3 22V11.35A3 3 0 0 1 4 9.1l6-5.34a3 3 0 0 1 4 0l6 5.34a3 3 0 0 1 1 2.24V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 9h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 15.5h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 18.5h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 22v-6c0-1.89 0-2.83-.59-3.41C16.83 12 15.9 12 14 12h-4c-1.89 0-2.83 0-3.41.59C6 13.17 6 14.1 6 16v6"
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
            d="M10 3.77 4 9.11a3 3 0 0 0-1 2.24v9.9H2a.75.75 0 1 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1v-9.9a3 3 0 0 0-1-2.24l-6-5.34a3 3 0 0 0-4 0m0 4.48a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm4.05 3q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.89.08 2.24v5.3H5.25v-5.3c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.05 11.25h-4.1q-1.35-.02-2.24.08c-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.59-.08 1.34-.08 2.24v5.3h13.5v-5.3q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73q-.89-.1-2.24-.08"
            fill="currentColor"
          />
          <path
            d="M9 14.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M9 17.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
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
            d="m4 9.1 6-5.33a3 3 0 0 1 4 0l6 5.34a3 3 0 0 1 1 2.24v9.9h1a.75.75 0 1 1 0 1.5H2a.75.75 0 0 1 0-1.5h1v-9.9A3 3 0 0 1 4 9.1M9.26 9c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 9m4.8 2.25q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.89.08 2.24v5.3h-1.5V16c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07h-4c-.96 0-1.61 0-2.1.07-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.48-.07 1.13-.07 2.09v5.25h-1.5v-5.3c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08zm-5.8 4.25c0-.41.34-.75.75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGarage;
