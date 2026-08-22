import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStacks = forwardRef<SVGSVGElement, IconProps>(function IconStacks(
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
              d="M8.17 10.5h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m9.67 6.5 2.82 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15.49 6.5-2.82 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.17 13.5h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m9.67 17.5 2.82-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15.49 17.5-2.82-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M8.17 11.25h9c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-3.05l1.99-2.82a.74.74 0 0 0-.18-1.04.74.74 0 0 0-1.04.18l-2.3 3.26-2.3-3.26a.74.74 0 0 0-1.04-.18.74.74 0 0 0-.18 1.04l1.99 2.82H8.19a.76.76 0 0 0-.75.75c0 .41.32.75.73.75"
            fill="currentColor"
          />
          <path
            d="M17.17 12.75h-9a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.87l-1.99 2.82a.74.74 0 0 0 .18 1.04q.2.14.43.14.38 0 .61-.32l2.3-3.26 2.3 3.26c.15.21.38.32.61.32a.7.7 0 0 0 .43-.14.74.74 0 0 0 .18-1.04l-1.99-2.82h3.05c.41 0 .75-.34.75-.75a.74.74 0 0 0-.73-.75"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.5 12.25h-3.05l1.99 2.82c.24.34.16.81-.18 1.04a1 1 0 0 1-.43.14.7.7 0 0 1-.61-.32l-2.3-3.26-2.3 3.26a.8.8 0 0 1-.61.32.7.7 0 0 1-.43-.14.74.74 0 0 1-.18-1.04l1.99-2.82H8.19a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75s-.36.75-.77.75m0-3h-9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.87L9.05 6.93a.74.74 0 0 1 .18-1.04.74.74 0 0 1 1.04.18l2.3 3.26 2.3-3.26a.74.74 0 0 1 1.04-.18c.34.24.42.71.18 1.04L14.1 9.75h3.05c.41 0 .75.34.75.75s-.32.75-.73.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStacks;
