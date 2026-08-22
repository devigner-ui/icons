import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPhone = forwardRef<SVGSVGElement, IconProps>(function IconPhone(
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
            d="m16.1 13.36.46-.45a2.04 2.04 0 0 1 2.41-.32l1.91 1.04c1.23.66 1.5 2.3.54 3.25L20 18.3c-.36.35-.8.62-1.32.67M4 5.75c-.03-.62.26-1.18.7-1.61l1.56-1.57a2.08 2.08 0 0 1 3.11.29l1.26 1.68c.62.83.55 1.95-.15 2.66l-.29.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.68 18.97c-1.63.15-5.62-.02-9.86-4.24-4-3.99-4.73-7.4-4.82-8.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.1 13.36s-1.08 1.08-4.04-1.86-1.87-4.02-1.87-4.02"
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
            d="m16.1 13.36.46-.45a2.04 2.04 0 0 1 2.41-.32l1.91 1.04c1.23.66 1.5 2.3.54 3.25L20 18.3c-.36.35-.8.62-1.32.67a11 11 0 0 1-6.54-1.65zm-5.9-5.88.28-.28c.7-.7.77-1.83.15-2.66L9.37 2.86a2.1 2.1 0 0 0-3.1-.29L4.68 4.14c-.43.43-.72.99-.69 1.6a12 12 0 0 0 2.15 5.78z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.06 11.5c-2.94-2.93-1.88-4.01-1.87-4.02l-4.04 4.04q1 1.51 2.66 3.2a17 17 0 0 0 3.33 2.6l3.96-3.96s-1.08 1.08-4.04-1.86"
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
            d="m16.56 12.9-.46.46s-1.08 1.08-4.04-1.86-1.87-4.02-1.87-4.02l.29-.28c.7-.7.77-1.83.15-2.66L9.37 2.86a2.1 2.1 0 0 0-3.1-.29L4.68 4.14c-.43.43-.72.99-.69 1.6.1 1.6.81 5 4.82 8.99 4.24 4.22 8.23 4.39 9.86 4.24.51-.05.96-.32 1.32-.67l1.42-1.42c.96-.95.69-2.59-.54-3.25l-1.9-1.04a2 2 0 0 0-2.42.32"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPhone;
