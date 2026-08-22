import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPin = forwardRef<SVGSVGElement, IconProps>(function IconPin(
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
            d="M18.34 8.4 15.6 5.67c-1.89-1.9-2.84-2.84-3.87-2.63s-1.54 1.45-2.55 3.93l-.95 2.32a4 4 0 0 1-.65 1.29q-.12.13-.27.24a4 4 0 0 1-1.35.53c-1.67.49-2.5.73-2.8 1.31q-.14.3-.15.6c-.02.64.6 1.26 1.83 2.5l3.42 3.42c1.24 1.24 1.86 1.85 2.5 1.83q.3 0 .6-.15c.58-.3.82-1.13 1.31-2.8a4 4 0 0 1 .53-1.35q.1-.15.24-.27c.26-.24.6-.38 1.29-.65l2.32-.95c2.48-1.01 3.72-1.52 3.93-2.55s-.74-1.98-2.63-3.87"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3 20.93 3.56-3.56"
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
            d="m19.15 7.79-2.94-2.94c-2.03-2.03-3.04-3.04-4.15-2.82-1.1.22-1.65 1.55-2.73 4.2l-1.01 2.5c-.3.73-.45 1.1-.7 1.38l-.3.26c-.3.22-.68.33-1.44.56-1.8.53-2.69.79-3 1.4q-.15.31-.16.65c-.03.69.64 1.35 1.96 2.67l1.27 1.28 1.12 1.12 1.28 1.27c1.32 1.32 1.98 1.99 2.67 1.96q.33-.01.64-.17c.62-.3.88-1.2 1.41-3 .23-.75.34-1.13.56-1.43l.26-.3c.28-.25.65-.4 1.38-.7l2.5-1.01c2.65-1.08 3.98-1.62 4.2-2.73s-.8-2.12-2.82-4.15"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.35 21.77 3.72-3.72-1.12-1.12-3.72 3.72a.79.79 0 1 0 1.12 1.12"
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
            d="m16.21 4.85 2.94 2.94c2.03 2.03 3.04 3.04 2.82 4.15-.22 1.1-1.55 1.65-4.2 2.73l-2.5 1.01c-.73.3-1.1.45-1.38.7l-.26.3c-.22.3-.33.68-.56 1.44-.53 1.8-.79 2.69-1.4 3q-.31.15-.65.16c-.69.03-1.35-.64-2.67-1.96l-1.28-1.27-3.72 3.72a.79.79 0 0 1-1.12-1.12l3.72-3.72-1.27-1.28c-1.32-1.32-1.99-1.98-1.96-2.67q.01-.33.17-.64c.3-.62 1.2-.88 3-1.41a5 5 0 0 0 1.43-.56l.3-.26c.25-.28.4-.65.7-1.38l1.01-2.5c1.08-2.65 1.62-3.98 2.73-4.2s2.12.8 4.15 2.82"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPin;
