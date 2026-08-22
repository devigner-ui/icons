import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMouse = forwardRef<SVGSVGElement, IconProps>(function IconMouse(
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
            d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2v5"
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
            d="M19 8.97V15a7 7 0 1 1-14 0V8.97A7 7 0 0 1 11.25 2v3.39c-.6.28-1 .88-1 1.58v2a1.75 1.75 0 1 0 3.5 0v-2c0-.7-.4-1.3-1-1.58V2A7 7 0 0 1 19 8.97"
            fill="currentColor"
          />
          <path
            d="M13.75 8.97v-2c0-.7-.4-1.3-1-1.58V2a7 7 0 0 0-1.5 0v3.39c-.6.28-1 .88-1 1.58v2a1.75 1.75 0 1 0 3.5 0"
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
            d="M19 8.97V15a7 7 0 1 1-14 0V8.97A7 7 0 0 1 11.25 2v3.39c-.6.28-1 .88-1 1.58v2a1.75 1.75 0 1 0 3.5 0v-2c0-.7-.4-1.3-1-1.58V2A7 7 0 0 1 19 8.97"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMouse;
