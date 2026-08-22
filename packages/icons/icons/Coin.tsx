import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCoin = forwardRef<SVGSVGElement, IconProps>(function IconCoin(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.67 11.4c0 .77.6 1.4 1.33 1.4h1.5a1.2 1.2 0 0 0 1.16-1.22c0-.73-.32-.99-.79-1.16l-2.4-.84c-.48-.17-.8-.43-.8-1.16 0-.67.52-1.22 1.16-1.22h1.5c.74.01 1.34.63 1.34 1.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.67 12.85v.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.67 6.41v.78"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M10.66 17.98a7.99 7.99 0 1 0 0-15.98 7.99 7.99 0 0 0 0 15.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.65 19.88A4.94 4.94 0 1 0 20.58 13"
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
            opacity={duotone ? "0.4" : "1"}
            d="M10.66 17.98a7.99 7.99 0 1 0 0-15.98 7.99 7.99 0 0 0 0 15.98"
            fill="currentColor"
          />
          <path
            d="M22.64 15.99a5.98 5.98 0 0 1-10.89 3.41 9.46 9.46 0 0 0 8.32-8.32 6 6 0 0 1 2.57 4.91"
            fill="currentColor"
          />
          <path
            d="m12.12 9.71-2.4-.84c-.24-.08-.29-.1-.29-.45 0-.26.18-.47.41-.47h1.5c.32 0 .58.29.58.65 0 .41.34.75.75.75s.75-.34.75-.75c0-1.15-.89-2.09-2-2.14v-.05a.75.75 0 1 0-1.5 0v.05h-.09c-1.05 0-1.91.88-1.91 1.97q0 1.42 1.29 1.86l2.41.84c.24.08.29.1.29.45 0 .26-.18.47-.41.47H10c-.32 0-.58-.29-.58-.65a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75c0 1.15.89 2.09 2 2.14v.06c0 .41.34.75.75.75s.75-.34.75-.75v-.05h.09c1.05 0 1.91-.88 1.91-1.97q0-1.42-1.3-1.87"
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
            d="M22.6 16.75a6 6 0 0 1-5.18 5.17 6 6 0 0 1-4.28-1.1 1 1 0 0 1 .3-1.77 9.5 9.5 0 0 0 6.3-6.3c.23-.79 1.27-.95 1.76-.29a6 6 0 0 1 1.1 4.29"
            fill="currentColor"
          />
          <path
            d="M10.66 2a8 8 0 1 0 0 15.99 8 8 0 0 0 0-15.99m-.94 6.87 2.41.84q1.3.46 1.3 1.86c0 1.08-.87 1.97-1.92 1.97h-.09v.05c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.06c-1.1-.05-2-.98-2-2.14 0-.41.34-.75.75-.75s.75.34.75.75c0 .36.26.65.58.65h1.5c.23 0 .41-.21.41-.47 0-.35-.06-.37-.29-.45l-2.4-.84q-1.3-.44-1.3-1.86c0-1.08.86-1.97 1.91-1.97h.1v-.04c0-.41.33-.75.74-.75s.75.34.75.75v.06c1.11.05 2 .98 2 2.14 0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75c0-.36-.26-.65-.58-.65h-1.5c-.23 0-.4.21-.4.47-.02.34.04.36.28.44"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCoin;
