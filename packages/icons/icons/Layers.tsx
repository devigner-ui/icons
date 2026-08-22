import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLayers = forwardRef<SVGSVGElement, IconProps>(function IconLayers(
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
            d="M4.98 9.69C2.99 8.89 2 8.49 2 8c0-.5 1-.9 2.98-1.69l2.8-1.12C9.79 4.4 10.78 4 12 4s2.23.4 4.21 1.2l2.81 1.11C21.01 7.11 22 7.51 22 8c0 .5-1 .9-2.98 1.69l-2.8 1.12c-2 .8-2.99 1.19-4.22 1.19s-2.23-.4-4.21-1.2z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.77 10-.8.31C3 11.11 2 11.51 2 12c0 .5 1 .9 2.98 1.69l2.8 1.12c2 .8 2.99 1.19 4.22 1.19s2.23-.4 4.21-1.2l2.81-1.11c1.99-.8 2.98-1.2 2.98-1.69 0-.5-1-.9-2.98-1.69l-.79-.31M5.77 14l-.8.31C3 15.11 2 15.51 2 16c0 .5 1 .9 2.98 1.69l2.8 1.12c2 .8 2.99 1.19 4.22 1.19s2.23-.4 4.21-1.2l2.81-1.11c1.99-.8 2.98-1.2 2.98-1.69 0-.5-1-.9-2.98-1.69l-.79-.31"
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
            fill="currentColor"
            d="M4.98 9.69C2.99 8.89 2 8.49 2 8s1-.89 2.98-1.68l2.8-1.13C9.79 4.4 10.78 4 12 4s2.23.4 4.21 1.2l2.81 1.12C21.01 7.1 22 7.5 22 8s-1 .89-2.98 1.69l-2.8 1.12c-2 .8-2.99 1.19-4.22 1.19s-2.23-.4-4.21-1.2z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 8c0 .5 1 .89 2.98 1.69l2.8 1.12c2 .8 2.99 1.19 4.22 1.19s2.23-.4 4.21-1.2l2.81-1.12C21.01 8.9 22 8.5 22 8s-1-.89-2.98-1.68l-2.8-1.13C14.21 4.4 13.22 4 12 4s-2.23.4-4.21 1.2L4.98 6.31C2.99 7.1 2 7.5 2 8"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m5.77 10-.8.32C3 11.1 2 11.5 2 12s1 .89 2.98 1.69l2.8 1.12c2 .8 2.99 1.19 4.22 1.19s2.23-.4 4.21-1.2l2.81-1.12C21.01 12.9 22 12.5 22 12s-1-.89-2.98-1.68l-.79-.32-2.02.8c-1.98.8-2.98 1.2-4.21 1.2s-2.23-.4-4.21-1.2z"
            opacity={duotone ? "0.6" : "1"}
          />
          <path
            fill="currentColor"
            d="m5.77 14-.8.32C3 15.1 2 15.5 2 16s1 .89 2.98 1.69l2.8 1.12c2 .8 2.99 1.19 4.22 1.19s2.23-.4 4.21-1.2l2.81-1.12C21.01 16.9 22 16.5 22 16s-1-.89-2.98-1.68l-.79-.32-2.02.8c-1.98.8-2.98 1.2-4.21 1.2s-2.23-.4-4.21-1.2z"
            opacity={duotone ? "0.4" : "1"}
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
            d="M4.98 9.69C2.99 8.89 2 8.49 2 8c0-.5 1-.9 2.98-1.69l2.8-1.12C9.79 4.4 10.78 4 12 4s2.23.4 4.21 1.2l2.81 1.11C21.01 7.11 22 7.51 22 8c0 .5-1 .9-2.98 1.69l-2.8 1.12c-2 .8-2.99 1.19-4.22 1.19s-2.23-.4-4.21-1.2z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 8c0 .5 1 .9 2.98 1.69l2.8 1.12c2 .8 2.99 1.19 4.22 1.19s2.23-.4 4.21-1.2l2.81-1.11C21.01 8.89 22 8.49 22 8c0-.5-1-.9-2.98-1.69l-2.8-1.12C14.21 4.4 13.22 4 12 4s-2.23.4-4.21 1.2L4.98 6.3C2.99 7.11 2 7.51 2 8"
            fill="currentColor"
          />
          <path
            d="m19.02 13.69-2.8 1.12c-2 .8-2.99 1.19-4.22 1.19s-2.23-.4-4.21-1.2l-2.81-1.1C2.99 12.89 2 12.49 2 12c0-.44.8-.81 2.42-1.46l3.14 1.26c1.85.73 3.01 1.2 4.44 1.2s2.59-.46 4.44-1.2l3.14-1.26C21.19 11.19 22 11.56 22 12c0 .5-1 .9-2.98 1.69"
            fill="currentColor"
          />
          <path
            d="m19.02 17.68-2.8 1.13c-2 .8-2.99 1.19-4.22 1.19s-2.23-.4-4.21-1.2l-2.81-1.12C2.99 16.9 2 16.5 2 16c0-.45.8-.81 2.42-1.46l3.14 1.26c1.85.73 3.01 1.2 4.44 1.2s2.59-.47 4.44-1.2l3.14-1.26C21.19 15.19 22 15.55 22 16c0 .5-1 .89-2.98 1.68"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLayers;
