import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLamp2 = forwardRef<SVGSVGElement, IconProps>(function IconLamp2(
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
            d="M6.46 14.69h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07A2.5 2.5 0 0 0 16.68 2H8.66c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.61.56 2.92 2.22 2.92"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 15v7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.67 22h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M18.88 14.69H6.46c-1.66 0-2.66-1.31-2.22-2.91l2.2-8.08A2.45 2.45 0 0 1 8.66 2h8.02c.96 0 1.97.77 2.22 1.7l2.2 8.08c.44 1.6-.56 2.91-2.22 2.91"
            fill="currentColor"
          />
          <path
            d="M17.42 21.25c0 .41-.34.75-.75.75h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.25v-5.81h1.5v5.81h3.25c.41 0 .75.34.75.75"
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
            d="M21.1 11.78 18.9 3.7A2.45 2.45 0 0 0 16.68 2H8.66c-.96 0-1.97.77-2.22 1.7l-2.2 8.08c-.44 1.6.56 2.91 2.22 2.91h5.46v5.81H8.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h8c.4 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-3.25v-5.81h5.46c1.66 0 2.66-1.31 2.22-2.91"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLamp2;
