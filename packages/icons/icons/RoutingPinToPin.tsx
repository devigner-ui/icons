import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoutingPinToPin = forwardRef<SVGSVGElement, IconProps>(function IconRoutingPinToPin(
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
            d="M1.99 5.09q.02-.24.08-.49c.8-3.46 6.01-3.46 6.8 0 .47 2.03-.82 3.75-1.94 4.82-.82.78-2.11.77-2.93 0a9 9 0 0 1-.95-1.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.99 17.09q.02-.24.08-.49c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0a9 9 0 0 1-.97-1.08"
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
            d="M18.49 17.5h.02Z"
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
            d="M2.07 4.6c.8-3.46 6.01-3.46 6.8 0 .47 2.03-.82 3.75-1.94 4.82-.82.78-2.11.77-2.93 0C2.89 8.35 1.6 6.63 2.07 4.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.07 16.6c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82"
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
            d="M18.49 17.5h.02"
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
            d="M8.88 4.6c-.8-3.46-6.01-3.47-6.81 0-.47 2.03.82 3.75 1.94 4.82.82.77 2.11.77 2.93 0 1.12-1.07 2.4-2.79 1.94-4.82M5.51 6.2a1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M6.51 5.2a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.91 16.6c-.8-3.46-6.03-3.47-6.84 0-.47 2.03.82 3.75 1.95 4.82.82.77 2.12.77 2.94 0 1.13-1.07 2.42-2.79 1.95-4.82m-3.38 1.6a1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M19.53 17.2a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78a2.7 2.7 0 0 1 .76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38a1.2 1.2 0 0 0-1.17-.81H12a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78a2.7 2.7 0 0 1-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38s.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M8.88 4.6c-.8-3.46-6.01-3.47-6.81 0-.47 2.03.82 3.75 1.94 4.82.82.77 2.11.77 2.93 0 1.12-1.07 2.4-2.79 1.94-4.82M5.51 6.2a1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M21.91 16.6c-.8-3.46-6.03-3.47-6.84 0-.47 2.03.82 3.75 1.95 4.82.82.77 2.12.77 2.94 0 1.13-1.07 2.42-2.79 1.95-4.82m-3.38 1.6a1 1 0 0 1-1-1 1 1 0 0 1 .99-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78a2.7 2.7 0 0 1 .76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38a1.2 1.2 0 0 0-1.17-.81H12a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78a2.7 2.7 0 0 1-.76 3.04l-8 6.99a1.25 1.25 0 0 0 .83 2.19H12c.4 0 .75.34.75.75s-.34.75-.75.75"
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

export default IconRoutingPinToPin;
