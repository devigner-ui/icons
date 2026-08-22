import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPIP = forwardRef<SVGSVGElement, IconProps>(function IconPIP(
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
            d="M22 17v-6c0-3.77 0-5.66-1.17-6.83S17.77 3 14 3h-4C6.23 3 4.34 3 3.17 4.17S2 7.23 2 11v2c0 3.77 0 5.66 1.17 6.83S6.23 21 10 21h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M13 17c0-1.89 0-2.83.59-3.41C14.17 13 15.1 13 17 13h1c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 21 19.9 21 18 21h-1c-1.89 0-2.83 0-3.41-.59C13 19.83 13 18.9 13 17"
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
            d="M13 17c0-1.89 0-2.83.59-3.41C14.17 13 15.1 13 17 13h1c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 21 19.9 21 18 21h-1c-1.89 0-2.83 0-3.41-.59C13 19.83 13 18.9 13 17"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 21H8.88c-3.04-.01-4.66-.12-5.71-1.17l-.2-.21c-.83-1.03-.95-2.56-.97-5.24V11c0-3.77 0-5.66 1.17-6.83S6.23 3 10 3h4c3.77 0 5.66 0 6.83 1.17l.19.21c.84 1.03.96 2.56.97 5.24V13c0 3.77 0 5.66-1.17 6.83S17.77 21 14 21"
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
            d="M13 17c0-1.89 0-2.83.59-3.41C14.17 13 15.1 13 17 13h1c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 21 19.9 21 18 21h-1c-1.89 0-2.83 0-3.41-.59C13 19.83 13 18.9 13 17"
            fill="currentColor"
          />
          <path
            d="M14 3h-4C6.23 3 4.34 3 3.17 4.17S2 7.23 2 11v2c0 3.77 0 5.66 1.17 6.83S6.23 21 10 21c.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-2c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88H20c.95 0 1.42 0 1.72-.3.29-.3.28-.76.27-1.7-.03-2.63-.21-4.38-1.16-5.33C19.66 3 17.77 3 14 3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPIP;
