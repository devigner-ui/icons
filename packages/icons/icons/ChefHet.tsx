import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChefHet = forwardRef<SVGSVGElement, IconProps>(function IconChefHet(
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
            d="M19 18h.75zM5 14.58h.75c0-.3-.18-.56-.45-.68zm14 0-.3-.68a.8.8 0 0 0-.45.68zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 1 0 1.5 0zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5c0-2.35 1.9-4.25 4.25-4.25zm10 1.5c2.35 0 4.25 1.9 4.25 4.25h1.5A5.75 5.75 0 0 0 17 4.25zm-2 15.5H9v1.5h6zm-6 0c-.96 0-1.61 0-2.1-.07-.46-.06-.65-.17-.78-.3l-1.06 1.06c.45.46 1.02.65 1.65.73q.9.1 2.29.08zM4.25 18c0 .92 0 1.69.08 2.3.08.62.27 1.19.73 1.64l1.06-1.06c-.13-.13-.24-.32-.3-.79-.07-.48-.07-1.13-.07-2.09zm14 0c0 .96 0 1.61-.07 2.1-.06.46-.17.65-.3.78l1.06 1.06c.46-.45.65-1.02.73-1.65q.1-.9.08-2.29zM15 22.75q1.38.02 2.3-.08a2.7 2.7 0 0 0 1.64-.73l-1.06-1.06c-.13.13-.32.24-.79.3-.48.07-1.13.07-2.09.07zm-8-17q.31 0 .63.05l.22-1.49A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.97 3.56l1.42.48A3.75 3.75 0 0 1 12 2.75zM7.03 4.81q-.28.8-.28 1.69h1.5q0-.64.2-1.2zM17 4.25q-.43 0-.85.06l.22 1.49q.3-.05.63-.05zm-5-1.5a3.75 3.75 0 0 1 3.55 2.54l1.42-.48A5.25 5.25 0 0 0 12 1.25zm3.55 2.54q.2.58.2 1.21h1.5q0-.89-.28-1.69zM5.75 18v-3.42h-1.5V18zm-.45-4.1A4.3 4.3 0 0 1 2.75 10h-1.5a5.8 5.8 0 0 0 3.45 5.27zm12.95.68V18h1.5v-3.42zm3-4.58a4.3 4.3 0 0 1-2.55 3.9l.6 1.37A5.8 5.8 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 18h14"
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
            d="M19 18H5c.01 1.4.08 2.91.59 3.41C6.17 22 7.1 22 9 22h6c1.89 0 2.83 0 3.41-.59.5-.5.58-2.01.59-3.41"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 5a5 5 0 0 0-2 9.58V18h14v-3.42a5 5 0 0 0-2.74-9.53 4.5 4.5 0 0 0-8.52 0A5 5 0 0 0 7 5"
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
            d="M7 5a5 5 0 0 0-2 9.58v2.67h14v-2.67a5 5 0 0 0-2.74-9.53 4.5 4.5 0 0 0-8.52 0A5 5 0 0 0 7 5"
            fill="currentColor"
          />
          <path
            d="M19 18.75H5c.01 1.4.08 2.16.59 2.66C6.17 22 7.1 22 9 22h6c1.89 0 2.83 0 3.41-.59.5-.5.58-1.26.59-2.66"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconChefHet;
