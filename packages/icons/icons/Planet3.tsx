import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlanet3 = forwardRef<SVGSVGElement, IconProps>(function IconPlanet3(
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
            d="M3 8s2.94 3 7.44 3c3.06 0 4.69-1.77 6.06-2.24C19.08 7.87 21 8 21 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 14s2.09-.13 4.9.76c1.5.47 3.27 2.24 6.6 2.24 3.02 0 5.39-1.13 6.77-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
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
            d="m21.2 15.91-.7.3h-.02q-.73.34-1.65.68c-1.23.45-2.7.86-4.32.86-1.81 0-3.2-.48-4.32-1.02q-.65-.31-1.18-.62l-.27-.15a6 6 0 0 0-1.06-.49 16 16 0 0 0-5.12-.72h-.18a10 10 0 0 0 18.83 1.16"
            fill="currentColor"
          />
          <path
            d="m3.24 7.18.3.3.02.02a4 4 0 0 0 .44.4c.32.25.8.6 1.4.95 1.23.7 2.96 1.4 5.04 1.4 1.37 0 2.42-.4 3.31-.86a20 20 0 0 0 1.27-.73c.4-.23.81-.47 1.24-.61a15 15 0 0 1 4.54-.8 10 10 0 0 0-17.56-.07"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.78 14.12a10 10 0 0 0-.3-5.33l-.53-.03h-.01l-.28-.01q-.3 0-.87.05c-.75.07-1.82.24-3.05.67a6 6 0 0 0-1.2.63q-.5.3-1.1.62a8.4 8.4 0 0 1-4 1.03c-2.42 0-4.41-.8-5.78-1.6a12 12 0 0 1-2.08-1.5 10 10 0 0 0-.5 4.62l.38-.02h.49q.46-.01 1.25.05c1.04.08 2.45.28 3.93.74.45.14.9.37 1.33.6l.3.17 1.08.57a8 8 0 0 0 3.67.87c1.38 0 2.66-.34 3.8-.77q.85-.31 1.6-.65h.01q.72-.31 1.34-.54z"
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
            d="M21.78 14.12a10 10 0 0 0-.3-5.33l-.53-.03h-.01l-.28-.01q-.3 0-.87.05c-.75.07-1.82.24-3.05.67q-.38.13-.95.48l-.25.15q-.5.3-1.1.62a8.4 8.4 0 0 1-4 1.03c-2.42 0-4.41-.8-5.78-1.6a12 12 0 0 1-2.08-1.5 10 10 0 0 0-.5 4.62l.38-.02h.49q.46-.01 1.25.05c1.04.08 2.45.28 3.93.74.45.14.9.37 1.33.6l.3.17 1.08.57a8 8 0 0 0 3.67.87c1.38 0 2.66-.34 3.8-.77q.85-.31 1.6-.65h.01q.72-.31 1.34-.54z"
            fill="currentColor"
          />
          <path
            d="m21.2 15.91-.7.3h-.02q-.73.34-1.65.68c-1.23.45-2.7.86-4.32.86-1.81 0-3.2-.48-4.32-1.02q-.65-.31-1.18-.62l-.27-.15a6 6 0 0 0-1.06-.49 16 16 0 0 0-5.12-.72h-.18a10 10 0 0 0 18.83 1.16"
            fill="currentColor"
          />
          <path d="m2.71 8.3.28-.3z" fill="currentColor" />
          <path
            d="m3.24 7.18.3.3.02.02a4 4 0 0 0 .44.4c.32.25.8.6 1.4.95 1.23.7 2.96 1.4 5.04 1.4 1.37 0 2.42-.4 3.31-.86a20 20 0 0 0 1.27-.73c.4-.23.81-.47 1.24-.61a15 15 0 0 1 4.54-.8 10 10 0 0 0-17.56-.07"
            fill="currentColor"
          />
          <path d="m21.02 7.68-.02.33z" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconPlanet3;
