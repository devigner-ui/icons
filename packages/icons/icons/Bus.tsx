import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBus = forwardRef<SVGSVGElement, IconProps>(function IconBus(
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
            d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v2c0 3.77 0 5.66-1.17 6.83S15.77 20 12 20s-5.66 0-6.83-1.17S4 15.77 4 12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 13h16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 16H17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 19.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.5 5h-15"
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
            d="M14.5 19.98c1.57-.04 2.68-.16 3.5-.56V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1z"
            fill="currentColor"
          />
          <path
            d="M6 19.42c.82.4 1.93.52 3.5.56V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.17 3.17C6.34 2 8.23 2 12 2s5.66 0 6.83 1.17C19.89 4.24 19.99 5.9 20 9v4c0 3.11-.1 4.77-1.17 5.83q-.36.36-.83.59c-.82.4-1.93.52-3.5.56Q13.41 20 12 20t-2.5-.02c-1.57-.04-2.68-.16-3.5-.56a3 3 0 0 1-.83-.6C4.11 17.78 4.01 16.13 4 13V9c.01-3.11.1-4.76 1.17-5.83"
            fill="currentColor"
          />
          <path
            d="M17.75 16a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H17c.41 0 .75-.34.75-.75"
            fill="currentColor"
          />
          <path
            d="M6.25 16c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M5.5 9.5c0 1.41 0 2.12.44 2.56s1.15.44 2.56.44h7c1.41 0 2.12 0 2.56-.44s.44-1.15.44-2.56V7c0-1.41 0-2.12-.44-2.56S16.91 4 15.5 4h-7c-1.41 0-2.12 0-2.56.44S5.5 5.59 5.5 7z"
            fill="currentColor"
          />
          <path
            d="M2.4 11.8 4 13V9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8"
            fill="currentColor"
          />
          <path
            d="M21 9h-1v4l1.6-1.2a1 1 0 0 0 .4-.8v-1a1 1 0 0 0-1-1"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C8.23 2 6.34 2 5.17 3.17 4.11 4.24 4.01 5.9 4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13c0 3.11.1 4.77 1.17 5.83q.36.36.83.59V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.02q1.09.03 2.5.02t2.5-.02V21a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-1.58q.47-.23.83-.6c1.06-1.05 1.16-2.7 1.17-5.82l1.6-1.2a1 1 0 0 0 .4-.8v-1a1 1 0 0 0-1-1h-1c-.01-3.11-.1-4.76-1.17-5.83C17.66 2 15.77 2 12 2M5.5 9.5c0 1.41 0 2.12.44 2.56s1.15.44 2.56.44h7c1.41 0 2.12 0 2.56-.44s.44-1.15.44-2.56V7c0-1.41 0-2.12-.44-2.56S16.91 4 15.5 4h-7c-1.41 0-2.12 0-2.56.44S5.5 5.59 5.5 7zm.75 6.5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m11.5 0a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H17c.41 0 .75-.34.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBus;
