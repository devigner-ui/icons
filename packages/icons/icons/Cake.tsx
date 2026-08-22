import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCake = forwardRef<SVGSVGElement, IconProps>(function IconCake(
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
            d="M2.67 22h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.78 22v-9c0-1.66 1.49-3 3.33-3h11.11c1.84 0 3.33 1.34 3.33 3v9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.23 10V7.17C6.23 5.97 7.3 5 8.65 5h8.05c1.33 0 2.41.97 2.41 2.17V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.2 13.98.37.01c.74.01 1.33.61 1.33 1.35v.33a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31c0-.74.6-1.35 1.35-1.35h.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 5V3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 5V3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 5V2"
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
            d="M21.56 13v1h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.34 1.34 0 1 1-2.69 0v-.3a1.34 1.34 0 1 0-2.69 0v.3a1.35 1.35 0 0 1-2.7 0v-.3a1.34 1.34 0 1 0-2.69 0v.3a1.34 1.34 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79V13c0-1.38 1.04-2.55 2.45-2.89q.42-.1.88-.11h11.12q.46 0 .88.11c1.41.34 2.45 1.51 2.45 2.89"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1 7.17v2.94a4 4 0 0 0-.87-.11H7.11q-.46 0-.88.11V7.17C6.23 5.97 7.3 5 8.65 5h8.04c1.34 0 2.42.97 2.42 2.17"
            fill="currentColor"
          />
          <path
            d="M9.42 3.55v1.46h-.77q-.39 0-.73.09V3.55c0-.35.34-.65.75-.65s.75.3.75.65"
            fill="currentColor"
          />
          <path
            d="M17.42 3.33V5.1q-.34-.1-.73-.1h-.77V3.33c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M13.42 2.82V5h-1.5V2.82c0-.45.34-.82.75-.82s.75.37.75.82"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.92 20.5h-.36V14h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.34 1.34 0 1 1-2.69 0v-.3a1.34 1.34 0 1 0-2.69 0v.3a1.35 1.35 0 0 1-2.7 0v-.3a1.34 1.34 0 1 0-2.69 0v.3a1.34 1.34 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79v6.52h-.36a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h18.5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
            d="M21.56 13v1h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.34 1.34 0 1 1-2.69 0v-.3a1.34 1.34 0 1 0-2.69 0v.3a1.35 1.35 0 0 1-2.7 0v-.3a1.34 1.34 0 1 0-2.69 0v.3a1.34 1.34 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79V13c0-1.38 1.04-2.55 2.45-2.89q.42-.1.88-.11h11.12q.46 0 .88.11c1.41.34 2.45 1.51 2.45 2.89"
            fill="currentColor"
          />
          <path
            d="M19.1 7.17v1.41a4 4 0 0 0-.87-.08H7.11q-.45 0-.88.09V7.17C6.23 5.97 7.3 5 8.65 5h8.04c1.34 0 2.42.97 2.42 2.17"
            fill="currentColor"
          />
          <path
            d="M9.42 3.55v1.46h-.77q-.39 0-.73.09V3.55c0-.35.34-.65.75-.65s.75.3.75.65"
            fill="currentColor"
          />
          <path
            d="M17.42 3.33V5.1q-.34-.1-.73-.1h-.77V3.33c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M13.42 2.82V5h-1.5V2.82c0-.45.34-.82.75-.82s.75.37.75.82"
            fill="currentColor"
          />
          <path
            d="M22.67 21.25c0 .41-.34.75-.75.75H3.42a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.36v-5.02h.61v.07a2.9 2.9 0 0 0 2.19 2.87 2.8 2.8 0 0 0 2.65-.74 1 1 0 0 1 1.38-.01 2.87 2.87 0 0 0 4.02 0 1 1 0 0 1 1.38.01 2.8 2.8 0 0 0 2.65.74 2.9 2.9 0 0 0 2.19-2.87v-.05h.71v5h.36c.41 0 .75.34.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCake;
