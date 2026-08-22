import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRouting4 = forwardRef<SVGSVGElement, IconProps>(function IconRouting4(
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
            d="M2.74 4.6c.8-3.46 6.01-3.46 6.8 0 .47 2.03-.82 3.75-1.94 4.82-.82.78-2.11.77-2.93 0-1.11-1.07-2.4-2.79-1.93-4.82"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.74 16.6c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12.67 5h2.68a2 2 0 0 1 1.32 3.51L8.68 15.5A2 2 0 0 0 9.99 19h2.68"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.16 5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.16 17.5"
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
            d="M9.55 4.6c-.8-3.46-6.01-3.47-6.81 0-.47 2.03.82 3.75 1.94 4.82.82.77 2.11.77 2.93 0 1.12-1.07 2.4-2.79 1.94-4.82M6.18 6.2a1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M7.18 5.2a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.58 16.6c-.8-3.46-6.03-3.47-6.84 0-.47 2.03.82 3.75 1.95 4.82.82.77 2.12.77 2.94 0 1.13-1.07 2.42-2.79 1.95-4.82m-3.38 1.6a1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M20.2 17.2a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M12.67 19.75H9.99c-1.16 0-2.17-.7-2.57-1.78a2.7 2.7 0 0 1 .76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38a1.2 1.2 0 0 0-1.17-.81h-2.68a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78a2.7 2.7 0 0 1-.76 3.04l-7.99 6.99c-.48.42-.49.99-.35 1.38s.53.81 1.17.81h2.68c.41 0 .75.34.75.75s-.34.75-.75.75"
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
          <g clipPath="url(#clip0_12_64972)">
            <path
              d="M9.55 4.6c-.8-3.46-6.01-3.47-6.81 0-.47 2.03.82 3.75 1.94 4.82.82.77 2.11.77 2.93 0 1.12-1.07 2.4-2.79 1.94-4.82M6.18 6.2a1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M22.58 16.6c-.8-3.46-6.03-3.47-6.84 0-.47 2.03.82 3.75 1.95 4.82.82.77 2.12.77 2.94 0 1.13-1.07 2.42-2.79 1.95-4.82m-3.38 1.6a1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M12.67 19.75H9.99c-1.16 0-2.17-.7-2.57-1.78a2.7 2.7 0 0 1 .76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38a1.2 1.2 0 0 0-1.17-.81h-2.68a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78a2.7 2.7 0 0 1-.76 3.04l-8 6.99a1.25 1.25 0 0 0 .83 2.19h2.68c.4 0 .75.34.75.75s-.34.75-.75.75"
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

export default IconRouting4;
