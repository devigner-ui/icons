import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoutingCircleToSquare = forwardRef<SVGSVGElement, IconProps>(function IconRoutingCircleToSquare(
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
      {variant === "Broken" ? (
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
            d="M2.11 4.52q-.14.47-.14.98a3.5 3.5 0 1 0 2.51-3.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.16 15.01A2 2 0 0 1 21.97 17v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5h2.68A2 2 0 0 1 16 8.51L8.01 15.5A2 2 0 0 0 9.32 19H12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.49 5.5h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.49 18.5h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M5.47 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.97 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 5h2.68A2 2 0 0 1 16 8.51L8.01 15.5A2 2 0 0 0 9.32 19H12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.49 5.5h.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.49 18.5h.02"
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
            d="M5.47 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2"
            fill="currentColor"
          />
          <path
            d="M12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78a2.7 2.7 0 0 1 .76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38a1.2 1.2 0 0 0-1.17-.81H12a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78a2.7 2.7 0 0 1-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38s.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.51 19.5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1.01 1"
            fill="currentColor"
          />
          <path
            d="M5.51 6.5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1.01 1"
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
          <g clipPath="url(#clip0_12_64979)">
            <path
              d="M12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78a2.7 2.7 0 0 1 .76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38a1.2 1.2 0 0 0-1.17-.81H12a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78a2.7 2.7 0 0 1-.76 3.04l-8 6.99a1.25 1.25 0 0 0 .83 2.19H12c.4 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M20 15h-3a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2m-1.5 4.5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.02a1 1 0 0 1 1 1 1 1 0 0 1-1.01 1"
              fill="currentColor"
            />
            <path
              d="M5.47 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m.04 4.5a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
});

export default IconRoutingCircleToSquare;
