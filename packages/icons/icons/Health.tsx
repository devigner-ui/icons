import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHealth = forwardRef<SVGSVGElement, IconProps>(function IconHealth(
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
            d="m8.96 19.38-.47.58zM12 5.58l-.55.5a.75.75 0 0 0 1.1 0zm3.04 13.8.47.58zM12 21v-.75zm-2.57-2.2a29 29 0 0 1-4.46-4.41c-1.34-1.7-2.22-3.46-2.22-5.07h-1.5c0 2.12 1.13 4.2 2.54 6a31 31 0 0 0 4.7 4.64zM2.75 9.32c0-2.9 1.27-4.7 2.84-5.32 1.56-.6 3.75-.17 5.86 2.09l1.1-1.03c-2.39-2.55-5.2-3.36-7.51-2.45S1.25 5.99 1.25 9.3zm12.76 10.64a31 31 0 0 0 4.7-4.65c1.41-1.79 2.54-3.87 2.54-6h-1.5c0 1.62-.88 3.37-2.22 5.08a29 29 0 0 1-4.46 4.4zm7.24-10.64c0-3.33-1.48-5.81-3.79-6.71-2.3-.9-5.12-.1-7.5 2.45l1.09 1.03c2.11-2.26 4.3-2.7 5.86-2.09s2.84 2.41 2.84 5.32zM8.49 19.96C9.76 21 10.64 21.75 12 21.75v-1.5c-.72 0-1.17-.32-2.57-1.45zm6.08-1.16c-1.4 1.13-1.85 1.45-2.57 1.45v1.5c1.36 0 2.24-.76 3.51-1.79z"
            fill="currentColor"
          />
          <path
            d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"
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
            d="M2 9.32c0 3.73 4.02 7.67 6.96 10.06C10.3 20.46 10.96 21 12 21s1.7-.54 3.04-1.62C17.98 16.99 22 13.05 22 9.32c0-6.23-5.5-8.56-10-3.75C7.5.77 2 3.1 2 9.32"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 6.25c.41 0 .75.34.75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25V11a.75.75 0 1 1-1.5 0V9.75H14.5a.75.75 0 0 1 0-1.5h1.25V7c0-.41.34-.75.75-.75"
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
            d="M8.96 18.47C6.02 16.2 2 12.49 2 8.97 2 3.08 7.5.89 12 5.43 16.5.9 22 3.08 22 8.97c0 3.52-4.02 7.24-6.96 9.5C13.7 19.49 13.04 20 12 20s-1.7-.51-3.04-1.53M16.5 6.25c.41 0 .75.34.75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25V11a.75.75 0 1 1-1.5 0V9.75H14.5a.75.75 0 0 1 0-1.5h1.25V7c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHealth;
