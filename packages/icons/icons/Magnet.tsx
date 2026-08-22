import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagnet = forwardRef<SVGSVGElement, IconProps>(function IconMagnet(
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
            d="M21 18.5v2c0 .83-.67 1.5-1.5 1.5H13a10 10 0 0 1 0-20h6.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H13a5 5 0 0 0 0 10h6.5c.83 0 1.5.67 1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 2v5m0 10v5"
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
            d="M17 2h-4a10 10 0 1 0 0 20h4v-5h-4a5 5 0 0 1 0-10h4z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17 7h2.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H17z"
              fill="currentColor"
            />
            <path
              d="M17 17v5h2.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5z"
              fill="currentColor"
            />
          </g>
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
            d="M16.25 2H13a10 10 0 1 0 0 20h3.25v-5H13a5 5 0 0 1 0-10h3.25z"
            fill="currentColor"
          />
          <path
            d="M17.75 7h1.75c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-1.75z"
            fill="currentColor"
          />
          <path
            d="M17.75 17v5h1.75c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMagnet;
